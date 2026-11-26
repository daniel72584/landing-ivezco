# Agent Harness & Workspace Rules

## 1. File Editing & Command Permissions

- **Allowed (Repository Files)**: Antigravity is permitted to create, edit, and delete any file within this repository (`/Users/macbook/Documents/repos/gazprom`).
- **Denied (`.env`)**: Antigravity MUST NOT create, edit, overwrite, or delete `.env` (or `.env.*` secret files) under any circumstances, whether via file tools (`write_file`, `edit_file`) or shell commands (`run_command`).
  - If environment variables need to be documented or updated for reference, edit `.env.example` instead and ask the user to update `.env` manually.
- **Allowed (`gh` CLI & Git Commands)**: Antigravity is permitted to run all `git` and GitHub CLI (`gh`) commands—including pushing feature/fix branches (`git push -u origin <feature-branch>`) and creating/managing Pull Requests (`gh pr create`, `gh pr view`, `gh pr list`).
- **Denied (Direct Push to Production)**: Antigravity MUST NEVER push directly to production branches (`main`, `master`, `prod`, `production`).

---

## 2. Git & GitHub PR Workflow Rule

- **No Direct Push to Production (`main` / `prod` / `production` / `master`)**: Now that the initial repository bootstrap on `main` is complete, pushing directly to `main`, `master`, `prod`, or `production` is strictly forbidden under all circumstances.
- **All Changes via Feature Branches & Pull Requests**: For every change, Antigravity MUST:
  1. Create and switch to a descriptive feature or fix branch (`git checkout -b <type>/<short-description>`).
  2. Commit changes and push the feature branch to origin (`git push -u origin <branch>`).
  3. Open a Pull Request targeting `main` (or `prod`) using the GitHub CLI (`gh pr create --base main ...`) for user review.

---

## 3. Tech Stack Constraint

- **Framework**: Use **Next.js (App Router)** exclusively for this repository. Do not introduce competing frontend/full-stack frameworks or legacy Pages Router (`pages/`) patterns.
- **Reference**: Always adhere to the official [Next.js Production Checklist](https://nextjs.org/docs/app/guides/production-checklist).

---

## 4. Next.js Production Checklist & Best Practices

### Routing & Rendering
- **Server Components by Default**: Keep components as React Server Components (RSC) by default to minimize client-side JavaScript bundles. Only add `'use client'` at the lowest possible leaf boundary when browser APIs, interactivity (`useState`, `useEffect`), or event listeners are required.
- **Layouts & Navigation**:
  - Use the `<Link>` component (`next/link`) for internal navigation to enable automatic route prefetching and client-side transitions.
  - Use shared `layout.tsx` files to prevent unnecessary re-renders across routes.
- **Streaming & Error Handling**:
  - Provide `loading.tsx` (or `<Suspense>` boundaries) for meaningful loading states and streaming UI.
  - Always implement custom `error.tsx`, `global-error.tsx`, and `not-found.tsx` boundaries to handle unexpected runtime errors and 404s gracefully.
- **Dynamic vs. Static Rendering**: Avoid inadvertently opting entire routes into dynamic rendering unless necessary. Scope dynamic functions (`cookies()`, `headers()`, `searchParams`) carefully.

### Data Fetching, Caching & Mutations
- **Server-Side Fetching**: Fetch data directly inside Server Components whenever possible to reduce client-server waterfalls and keep sensitive logic off the client.
- **Parallel Data Fetching**: Initiate independent data requests in parallel (`Promise.all`) or split components with `<Suspense>` to avoid sequential blocking waterfalls.
- **Server Actions & Route Handlers**:
  - Use **Server Actions** for form submissions and data mutations, paired with `revalidatePath` or `revalidateTag`.
  - Use **Route Handlers** (`app/api/.../route.ts`) for webhooks or external API integrations, ensuring backend secrets never leak to the client.
- **Request Memoization & Data Cache**: Configure `fetch` caching, `revalidate`, and `unstable_cache` / cache tags intentionally based on data freshness requirements.

### UI, Assets & Core Web Vitals
- **Images (`next/image`)**: Always use the `<Image>` component with explicit `width`/`height` (or `fill`) and `sizes` to prevent Cumulative Layout Shift (CLS) and serve modern formats (AVIF/WebP). Set `priority` on the Largest Contentful Paint (LCP) element above the fold.
- **Fonts (`next/font`)**: Always load Google or local fonts via `next/font` so fonts are self-hosted at build time without external network requests or layout shift.
- **Scripts (`next/script`)**: Load third-party scripts using `<Script>` with an appropriate loading strategy (`afterInteractive`, `lazyOnload`, or `worker`).
- **Accessibility**: Follow `eslint-plugin-jsx-a11y` rules (semantic HTML, ARIA attributes, keyboard navigation, and alt text on all images).

### Security, Metadata & Environment Variables
- **Environment Variable Hygiene**:
  - Keep server secrets private. Never prefix sensitive keys with `NEXT_PUBLIC_`.
  - Use the `server-only` package in modules that handle sensitive credentials or database access so builds fail if imported into a Client Component.
- **Input Validation & Tainting**: Validate and sanitize all user inputs in Server Actions and Route Handlers (e.g., with `zod`), and verify authentication/authorization inside every action/route handler.
- **Content Security Policy (CSP)**: Configure security headers and CSP in `next.config.*` or `middleware.ts` when applicable.
- **Metadata & SEO**: Use the Next.js Metadata API (`export const metadata` or `generateMetadata`) in layouts/pages along with `robots.ts`, `sitemap.ts`, and OpenGraph tags.

### Build, Bundle Size & Pre-Deployment Verification
- **TypeScript & Linting**: Maintain strict TypeScript (`tsconfig.json`) and pass `next lint` / type-checking before considering changes complete.
- **Bundle Optimization**:
  - Use `next/dynamic` to lazy-load heavy client components that are not needed on initial render.
  - Prefer tree-shakeable icon/utility imports and configure `optimizePackageImports` in `next.config.*` when needed.
- **Production Build Check**: Verify production readiness with `next build` to confirm static/dynamic route output and catch build-time errors early.
