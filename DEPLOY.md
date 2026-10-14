# Deploy SlackVault Docs

The public repository's `.github/workflows/deploy-pages.yml` builds this Docusaurus site and
publishes `build/` to GitHub Pages on every push to `main`. `static/CNAME` sets
`slackvault-docs.aoneahsan.com`. The current site does not use Firebase Hosting.

## Before pushing

```bash
yarn install --immutable
yarn typecheck
yarn build
yarn serve
```

Open `http://127.0.0.1:5963/` in a controlled browser. Check the homepage and a documentation
route at desktop and mobile widths. Verify facts against the private sibling product source.
A local render does not verify authenticated Slack or storage flows.

## After pushing

Check the GitHub Actions `Deploy to GitHub Pages` run for the pushed commit. Then load
`https://slackvault-docs.aoneahsan.com/` and its `sitemap.xml`, `robots.txt`, and `llms.txt`
files over HTTPS. DNS and Pages custom-domain settings are recorded in `docs/MANUAL-TASKS.md`.
If deployment fails, fix the workflow or site and push a normal follow-up commit; do not force-push.
