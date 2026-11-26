#!/usr/bin/env python3
import json
import os
import re
import subprocess
import sys

PROTECTED_PROD_BRANCHES = {
    "main",
    "master",
    "prod",
    "production",
    "refs/heads/main",
    "refs/heads/master",
    "refs/heads/prod",
    "refs/heads/production",
}


def is_env_path(path_str: str) -> bool:
    if not path_str:
        return False
    base = os.path.basename(path_str.rstrip("/"))
    # Block .env and .env.* (except .env.example / .env.sample / .env.template)
    if base == ".env":
        return True
    if base.startswith(".env.") and base not in {
        ".env.example",
        ".env.sample",
        ".env.template",
    }:
        return True
    return False


def current_git_branch(repo_dir: str) -> str:
    try:
        res = subprocess.run(
            ["git", "rev-parse", "--abbrev-ref", "HEAD"],
            cwd=repo_dir,
            capture_output=True,
            text=True,
            check=False,
        )
        return res.stdout.strip()
    except Exception:
        return ""


def is_pushing_to_prod(cmd: str, repo_dir: str) -> str | None:
    """Return the protected branch name if the command attempts to push directly to a production branch."""
    push_segments = re.findall(r"\bgit\s+push\b([^;&|\n]*)", cmd)
    if not push_segments:
        return None

    for args_str in push_segments:
        tokens = [
            t
            for t in args_str.strip().split()
            if not t.startswith("-")
        ]
        # Explicit target branch in `git push <remote> <refspec>`
        if len(tokens) >= 2:
            for refspec in tokens[1:]:
                target_ref = refspec.split(":")[-1].lstrip("+")
                if target_ref in PROTECTED_PROD_BRANCHES:
                    return target_ref
                if target_ref == "HEAD":
                    curr = current_git_branch(repo_dir)
                    if curr in PROTECTED_PROD_BRANCHES:
                        return curr
        else:
            # `git push` or `git push origin` without explicit refspec -> check current checked-out branch
            curr = current_git_branch(repo_dir)
            if curr in PROTECTED_PROD_BRANCHES:
                return curr

    return None


def main() -> None:
    try:
        payload = json.load(sys.stdin)
    except Exception:
        print(json.dumps({"decision": "allow"}))
        return

    tool_call = payload.get("toolCall", {})
    tool_name = tool_call.get("name", "")
    args = tool_call.get("args", {}) or {}
    cwd = payload.get("cwd", "") or os.getcwd()
    workspace_paths = payload.get("workspacePaths", []) or [cwd]
    repo_dir = workspace_paths[0] if workspace_paths else cwd

    if tool_name in {"write_file", "edit_file"}:
        target_path = args.get("Path", "")
        if is_env_path(target_path):
            print(
                json.dumps(
                    {
                        "decision": "deny",
                        "reason": "Editing .env is blocked by the repository harness.",
                    }
                )
            )
            return

        abs_target = os.path.abspath(target_path) if target_path else ""
        for ws in workspace_paths:
            if ws and abs_target.startswith(os.path.abspath(ws)):
                print(json.dumps({"decision": "allow"}))
                return

    elif tool_name == "run_command":
        cmd = args.get("CommandLine", "")
        # 1. Block shell redirections or in-place edits targeting .env
        env_write_pattern = r"(?:>|>>|\btee\b|\bsed\s+-i|\brm\b|\bmv\b|\bcp\b)[^\n;|&]*\b\.env\b(?!\.(?:example|sample|template))"
        if re.search(env_write_pattern, cmd):
            print(
                json.dumps(
                    {
                        "decision": "deny",
                        "reason": "Modifying .env via shell commands is blocked by the repository harness.",
                    }
                )
            )
            return

        # 2. Block any direct push to production branches (main, master, prod, production)
        prod_target = is_pushing_to_prod(cmd, repo_dir)
        if prod_target:
            print(
                json.dumps(
                    {
                        "decision": "deny",
                        "reason": f"Direct push to production branch '{prod_target}' is blocked. Push to a feature branch and open a Pull Request with 'gh pr create'.",
                    }
                )
            )
            return

        # 3. Allow git (including pushing feature branches) and gh commands automatically
        if re.search(r"\b(gh|git)\b", cmd):
            print(
                json.dumps(
                    {
                        "decision": "allow",
                        "permissionOverrides": [
                            "command(git)",
                            "command(git push)",
                            "command(gh)",
                        ],
                    }
                )
            )
            return

    print(json.dumps({"decision": "allow"}))


if __name__ == "__main__":
    main()
