# slackvault-docs

Public documentation site for **SlackVault** — a zero-cost Slack backup and archive platform.

- **Live site (after deploy)**: https://slackvault-docs.aoneahsan.com
- **Product / web app**: https://slackvault.aoneahsan.com
- **Google Play**: https://play.google.com/store/apps/details?id=com.aoneahsan.slackvault
- **Author**: [Ahsan Mahmood](https://aoneahsan.com)

Built with [Docusaurus 3](https://docusaurus.io/), deployed to Firebase Hosting. The SlackVault
app itself lives in a separate (private) repository.

---

## Local development

```bash
yarn install
yarn start          # dev server at http://localhost:5962
yarn build          # production build into ./build
yarn typecheck      # tsc --noEmit
yarn serve          # preview the built site at http://localhost:5963
```

> Per the project's standing rules, the agent never runs the dev server — it verifies with
> `yarn build` + `yarn typecheck`. The user runs `yarn start` to preview.

## Structure

| Path | Purpose |
|------|---------|
| `docs/` | All documentation pages (Markdown). |
| `sidebars.ts` | Sidebar layout (Getting Started → Guides → Reference → FAQ). |
| `docusaurus.config.ts` | Site config, SEO head tags, JSON-LD, navbar/footer. |
| `src/css/custom.css` | SlackVault brand palette (Slack aubergine). |
| `src/pages/index.tsx` | Landing page. |
| `static/` | `robots.txt`, `llms.txt`, `humans.txt`, `.well-known/security.txt`, images. |
| `firebase.json` / `.firebaserc` | Firebase Hosting config (site `slackvault-docs`). |

## Deploy

See [`DEPLOY.md`](./DEPLOY.md). The site is a static build deployable to Firebase Hosting or
GitHub Pages at `slackvault-docs.aoneahsan.com`.

## Content rule

Every fact comes from the real SlackVault app code (`slackvault/website/src/pages/docs/*`,
`slackvault/slack-app/*`). No invented features, no hype. SlackVault stores user data in the
user's own Firebase and FilesHub — never on a SlackVault server.
