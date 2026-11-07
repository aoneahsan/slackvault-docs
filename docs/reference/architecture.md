---
id: architecture
title: Architecture
sidebar_label: Architecture
sidebar_position: 2
description: How SlackVault's four surfaces — website, browser extension, Cloudflare Worker, and Slack app — cooperate to back up Slack at zero cost.
keywords: [slackvault architecture, zero-cost slack backup, cloudflare worker oauth, firebase]
---

# Architecture

SlackVault is a **zero-server** product in the sense that it keeps none of your data: the work
happens in your browser and in your own cloud accounts. It's built from four cooperating surfaces.

## The four surfaces

| Surface | Responsibility | Tech |
|---------|----------------|------|
| **Website / web app** | Product site, onboarding, archive viewer (browse / search / export). Also an Android app. | React 19, TypeScript, Vite, Radix UI, TanStack Router/Query, Capacitor, Firebase |
| **Browser extension** | Performs the actual Slack sync locally; talks to the Slack Web API and writes to your Firebase. | WXT, Manifest V3, React, TypeScript |
| **Cloudflare Worker** | Handles **only** the Slack OAuth code exchange and token refresh — so the Slack client secret never reaches the browser. | Cloudflare Workers, TypeScript |
| **Slack app** | The app definition + read-only OAuth scopes you install into your workspace. | Slack app manifest |

## How the pieces connect

```mermaid
flowchart LR
    U[You] -->|connect| EXT[Browser extension]
    EXT -->|OAuth code| W[Cloudflare Worker]
    W -->|exchange with Slack| SLACK[(Slack Web API)]
    W -->|access token| EXT
    EXT -->|read messages/files/users| SLACK
    EXT -->|write archive| FB[(Your Firebase Firestore)]
    EXT -->|upload files| FH[(FilesHub)]
    WEB[Web app / archive viewer] -->|read| FB
    WEB -->|read files| FH
```

## The OAuth flow

1. The extension starts OAuth and sends the user to Slack to authorize.
2. Slack redirects back with a temporary **code**.
3. The extension passes the code to the **Cloudflare Worker**, which exchanges it with Slack using
   the **client secret** (held only in the worker).
4. The worker returns the access token to the extension, which stores it in browser
   storage.
5. The worker also handles **token refresh** when needed.

This split is the whole point of the worker: **Slack API calls happen only in the extension, and
the Slack client secret lives only in the worker** — never in the website or the extension bundle.

## Where data lives

- **Firestore (your project)** — messages, channels, users, file metadata, workspace meta.
- **FilesHub** — our file storage, not yours. Copies of file attachments, at a public, hard-to-guess link, when copying is switched on in our extension build.
- **Browser extension storage** — your Slack OAuth token.

SlackVault operators never see any of it.

## Zero-cost design

Every surface fits within a free tier:

- Firebase free tier (1 GiB storage, 50K reads/day, 20K writes/day).
- Cloudflare Workers free tier for the OAuth exchange.
- The extension does the heavy lifting client-side, so there's no server compute to pay for.

SlackVault does not store files in your Google Drive today. When file copying is switched on in our extension build, each file uploads to our file storage with public visibility: a hard-to-guess link that anyone holding it can open. It isn't private storage, and it isn't your Firebase project or Google Drive. Where copying is off, your archive keeps the file's details and Slack's link, which works only while Slack serves that file.

For the exact Firestore layout, see the [Data model](/reference/data-model); for Slack API usage and
limits, see [Slack API & rate limits](/reference/api-and-rate-limits).
