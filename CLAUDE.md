# SlackVault public docs

**Last Updated:** 2026-10-20

**Last context pass:** 2026-10-14. **Next routine context pass:** 2026-11-13. The workspace tracker at `01-code/docs/tracking/project-context-budget-tracker.json` is the fleet record. A new tree, hard cap breach, or proven stale instruction may justify an earlier review.

Keep this file and its `CLAUDE.md` mirror synchronized. Read only the guide pair for the surface being changed, plus the product root and workspace guides. Use Yarn for local packages. Never install or copy an owner-created client package into this owner project. Real `.env` values and secrets stay local or under `~/.secrets/`; private Git visibility is not a secrets boundary. Historical tracked `.env` files require credential review. Do not deploy the legacy Firebase backend while the owner prepares a Supabase redevelopment.

## Repository and deployment

This separate public `aoneahsan/slackvault-docs` `main` repository contains the Docusaurus site. The product source is the sibling `../slackvault/`, not an old `projects/slackvault` checkout. `.github/workflows/deploy-pages.yml` runs `yarn install --immutable` and `yarn build` and deploys GitHub Pages on each `main` push; `static/CNAME` pins `slackvault-docs.aoneahsan.com`. Build and inspect locally in a controlled browser before pushing. Do not commit secrets or deploy this docs site to Firebase.

## Commands

`yarn install --immutable && yarn typecheck && yarn build`; `yarn serve` previews the built site on port 5963. The 2026-10-14 typecheck/build and local desktop browser rendering passed. Current docs content describes the legacy Firebase architecture; do not silently rewrite product claims for the later Supabase rebuild.

## Stop-work Git gate

<!-- RULE:stop-work-git-gate v2026-10-20 -->

Before stopping, commit every legitimate change and work-progress checkpoint in this repository and each independent nested repository, fetch and merge the designated upstream, push the documented working branch, then verify an empty worktree and `0 0` ahead/behind. Never stash, discard, reset, rebase, or force-push. If synchronization is blocked, report the exact repository, branch, blocker, and next action instead of calling the work complete. The full workflow remains authoritative in `~/.claude/rules/git-workflow.md`.
