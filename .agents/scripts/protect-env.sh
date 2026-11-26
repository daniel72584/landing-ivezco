#!/usr/bin/env python3
import json
import os
import re
import subprocess
import sys


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


def origin_main_exists(repo_dir: str) -> bool:
    """Return True if our initial bootstrap commit (containing AGENTS.md) has already been pushed to origin/main."""
    try:
        res = subprocess.run(
            ["git", "cat-file", "-e", "refs/remotes/origin/main:AGENTS.md"],
            cwd=repo_dir,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            check=False,
        )
        return res.returncode == 0
    except Exception:
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


def is_pushing_to_main(cmd: str, repo_dir: str) -> bool:
    """Detect whether a shell command pushes directly to main."""
    # Look for git push invocations
    push_segments = re.findall(r"\bgit\s+push\b([^;&|\n]*)", cmd)
    if not push_segments:
        return False

    for args_str in push_segments:
        tokens = [
            t
            for t in args_str.strip().split()
            if not t.startswith("-")
        ]
        # Explicit target branch in git push <remote> <refspec>
        if len(tokens) >= 2:
            refspec = tokens[1]
            target_ref = refspec.split(":")[-1]
            if target_ref in {"main", "refs/heads/main"}:
                return True
        else:
            # `git push` or `git push origin` without explicit branch -> check current branch
            if current_git_branch(repo_dir) == "main":
                return True

    return False


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

        # 2. Enforce "Only push to main once, then generate PRs"
        if is_pushing_to_main(cmd, repo_dir) and origin_main_exists(repo_dir):
            print(
                json.dumps(
                    {
                        "decision": "deny",
                        "reason": "Direct push to 'main' is only allowed once (initial bootstrap). Please push to a feature branch and open a Pull Request with 'gh pr create'.",
                    }
                )
            )
            return

        # 3. Allow gh and git commands (with permissionOverrides)
        if re.search(r"\b(gh|git)\b", cmd):
            print(
                json.dumps(
                    {
                        "decision": "allow",
                        "permissionOverrides": ["command(gh)", "command(git)"],
                    }
                )
            )
            return

    print(json.dumps({"decision": "allow"}))


if __name__ == "__main__":
    main()
