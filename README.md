# slackvault-docs

Public documentation site for **SlackVault** — a zero-cost Slack backup and archive platform.

- **Live site**: https://slackvault-docs.aoneahsan.com
- **Product / web app**: https://slackvault.aoneahsan.com
- **Google Play**: https://play.google.com/store/apps/details?id=com.aoneahsan.slackvault
- **Author**: [Ahsan Mahmood](https://aoneahsan.com)

Built with [Docusaurus 3](https://docusaurus.io/), deployed to GitHub Pages. The SlackVault
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

The built site was loaded locally in controlled Chrome on 2026-10-14. This verifies public page
rendering; it does not test the product's authenticated Slack flows.

## Structure

| Path | Purpose |
|------|---------|
| `docs/` | All documentation pages (Markdown). |
| `sidebars.ts` | Sidebar layout (Getting Started → Guides → Reference → FAQ). |
| `docusaurus.config.ts` | Site config, SEO head tags, JSON-LD, navbar/footer. |
| `src/css/custom.css` | SlackVault brand palette (Slack aubergine). |
| `src/pages/index.tsx` | Landing page. |
| `static/` | `robots.txt`, `llms.txt`, `humans.txt`, `.well-known/security.txt`, images. |
| `.github/workflows/deploy-pages.yml` / `static/CNAME` | GitHub Pages build and custom domain. |

## Deploy

See [`DEPLOY.md`](./DEPLOY.md). A push to `main` builds and deploys the static site to GitHub
Pages at `slackvault-docs.aoneahsan.com`.

## Content rule

Every fact comes from the real SlackVault app code (`slackvault/website/src/pages/docs/*`,
`slackvault/slack-app/*`). No invented features, no hype. SlackVault stores user data in the
user's own Firebase and FilesHub — never on a SlackVault server.
