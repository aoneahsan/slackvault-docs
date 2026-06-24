# CLAUDE.md — slackvault-docs

Public Docusaurus documentation site for **SlackVault** (https://slackvault.aoneahsan.com), a
zero-cost Slack backup and archive platform.

**Last Updated:** 2026-06-23

## Task Speed Over Docs (IRON-SOLID — BEHAVIORAL)

Finish the real task fast + correctly FIRST; docs/trackers/sync are a footnote (≤~20% of effort) — never let recording outpace the fix. No new summary/status/completion files unless asked; edit/delete over add. Full rule: `~/.claude/CLAUDE.md`.

## Identity

| Key | Value |
|---|---|
| Repo | `aoneahsan/slackvault-docs` (PUBLIC — free GitHub Pages / Firebase Hosting) |
| Type | Docusaurus 3 documentation site (classic preset + Mermaid) |
| Package manager | yarn (NEVER npm/pnpm) |
| Node | >=18 |
| Author | Ahsan Mahmood (aoneahsan@gmail.com) |
| Live URL (after deploy) | https://slackvault-docs.aoneahsan.com (Firebase Hosting site `slackvault-docs`) |
| Product app (private repo) | `/home/ahsan/Documents/01-code/projects/slackvault` |
| Dev ports | start 5962 / serve 5963 |
| Build gates | `yarn typecheck` exit 0 · `yarn build` (→ `./build`) exit 0 |

## Critical rules

| Rule | Detail |
|---|---|
| Yarn only | Never `npm install` / `pnpm add`. |
| No dev server in agent runs | Agent verifies with `yarn build` + `yarn typecheck`; the user runs `yarn start`. |
| Single source of truth | Every fact comes from the real SlackVault app code (`slackvault/website/src/pages/docs/*`, `slackvault/slack-app/*`, `slackvault/website/src/pages/Features.tsx`). No invented features, scopes, or endpoints. |
| Honest framing | The app repo is PRIVATE — do NOT claim "open source". Say what SlackVault does NOT do as clearly as what it does. SlackVault stores user data in the USER's own Firebase + FilesHub, never on a SlackVault server — keep that accurate everywhere. |
| Public repo, no secrets | This repo is PUBLIC — never commit any `.env`, key, token, or private config. |
| One commit per task | One commit per docs change, pushed to `o` (PUBLIC remote). |

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo -> secrets/`.env`/keystores are NEVER tracked.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24

## Verification commands

```bash
yarn typecheck       # tsc --noEmit (must exit 0)
yarn build           # docusaurus build (must exit 0, must produce ./build)
```

## Deploy

User-only (needs Firebase/GitHub credentials + DNS). See `DEPLOY.md`. Target:
`slackvault-docs.aoneahsan.com`.

## Package Manager Hierarchy: nvm → npm (global) → yarn (local)

`nvm` installs/updates Node+npm; `npm` for global CLIs (incl. yarn); `yarn` for all local work.
Never `npm`/`pnpm` for local installs. Only `yarn.lock` in the project.
