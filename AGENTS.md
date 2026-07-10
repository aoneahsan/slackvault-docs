# AGENTS.md — slackvault-docs

Public Docusaurus documentation site for **SlackVault** (https://slackvault.aoneahsan.com), a
zero-cost Slack backup and archive platform.

**Last Updated:** 2026-06-23

## Task Speed Over Docs (IRON-SOLID — BEHAVIORAL)

Finish the real task fast + correctly FIRST; docs/trackers/sync are a footnote (≤~20% of effort) — never let recording outpace the fix. No new summary/status/completion files unless asked; edit/delete over add. Full rule: `~/.claude/CLAUDE.md`.

## Identity

| Key | Value |
|---|---|
| Repo | `aoneahsan/slackvault-docs` (PUBLIC) |
| Type | Docusaurus 3 documentation site (classic preset + Mermaid) |
| Package manager | yarn (NEVER npm/pnpm) |
| Node | >=18 |
| Author | Ahsan Mahmood (aoneahsan@gmail.com) |
| Live URL (after deploy) | https://slackvault-docs.aoneahsan.com |
| Product app (private repo) | `/home/ahsan/Documents/01-code/projects/slackvault` |
| Dev ports | start 5962 / serve 5963 |
| Build gates | `yarn typecheck` exit 0 · `yarn build` exit 0 |

## Critical rules

| Rule | Detail |
|---|---|
| Yarn only | Never `npm install` / `pnpm add`. |
| No dev server in agent runs | Agent verifies with `yarn build` + `yarn typecheck`; the user runs `yarn start`. |
| Single source of truth | Every fact comes from the real SlackVault app code. No invented features, scopes, or endpoints. |
| Honest framing | App repo is PRIVATE — do NOT claim "open source". SlackVault stores user data in the USER's own Firebase + FilesHub, never on a SlackVault server. |
| Public repo, no secrets | This repo is PUBLIC — never commit any `.env`, key, token, or private config. |
| One commit per task | One commit per docs change, pushed to `o` (PUBLIC remote). |

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo -> secrets/`.env`/keystores are NEVER tracked.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24

## Verification commands

```bash
yarn typecheck
yarn build
```

## Deploy

User-only (needs Firebase/GitHub credentials + DNS). See `DEPLOY.md`. Target:
`slackvault-docs.aoneahsan.com`.

## Package Manager Hierarchy: nvm → npm (global) → yarn (local)

`nvm` installs/updates Node+npm; `npm` for global CLIs (incl. yarn); `yarn` for all local work.
Never `npm`/`pnpm` for local installs. Only `yarn.lock` in the project.


## Sub-agents & Skills — Main-Context-First (IRON-SOLID)
Default/built-in sub-agents (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) do NOT have
access to `/skills`, so delegating to them silently SKIPS the skills RULE #0 requires. Do all
skill-relevant work in the **MAIN context**; use a sub-agent ONLY when a **custom** agent exists in
`.claude/agents/` for that job; a default `Explore`/`Plan` agent is allowed ONLY for read-only,
no-skill search/exploration. When a relevant skill is missing, **install/enable it** rather than
proceeding skill-less. (Owner directive 2026-07-11; full text in `~/.claude/CLAUDE.md`.)
