# Deploy runbook — SlackVault Docs

This site is a static Docusaurus build. `yarn build` produces `build/` with all discovery files
(`robots.txt`, `llms.txt`, `humans.txt`, `.well-known/security.txt`, `sitemap.xml`). Deploy that
folder to Firebase Hosting (or any static host) at `slackvault-docs.aoneahsan.com`.

## Prerequisites

- GitHub CLI authenticated (`gh auth status`).
- Firebase CLI authenticated to a Google account with access to the target project
  (`npx -y firebase-tools@latest login`).
- Node 18+ and Yarn.

## One-time: create the Firebase Hosting site

```bash
# Create (or pick) a Firebase project, then a hosting site named slackvault-docs.
npx -y firebase-tools@latest projects:create slackvault-docs   # or reuse an existing project
npx -y firebase-tools@latest hosting:sites:create slackvault-docs
```

Update `.firebaserc` `projects.default` to the Firebase **project id** you used (it currently
reads `slackvault-docs`).

## Deploy

```bash
yarn install
yarn build
npx -y firebase-tools@latest deploy --only hosting --project slackvault-docs
# or: yarn firebase:deploy
```

Then map the custom domain `slackvault-docs.aoneahsan.com` in the Firebase Hosting console and add
the DNS records it shows.

## Alternative: GitHub Pages

Because the repo is public, GitHub Pages is a zero-cost option:

```bash
yarn build
# publish build/ to the gh-pages branch (e.g. with `npx gh-pages -d build`)
```

Set `url` / `baseUrl` in `docusaurus.config.ts` accordingly if not serving from the apex/custom
domain.

## After every deploy (SEO)

- Submit `https://slackvault-docs.aoneahsan.com/sitemap.xml` in Google Search Console + Bing
  Webmaster Tools.
- Confirm `robots.txt` and `llms.txt` resolve over HTTPS.

These deploy steps are **user-only** (they need your Firebase/GitHub credentials and DNS).
