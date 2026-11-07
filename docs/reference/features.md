---
id: features
title: Feature catalog
sidebar_label: Features
sidebar_position: 1
description: Every SlackVault feature — message backup, file storage, full-text search, exports, automatic sync, granular control, and full data ownership.
keywords: [slackvault features, slack backup features, slack archive features]
---

# Feature catalog

A reference list of what SlackVault does. Each item is a real, shipped capability.

## Backup & capture

- **Complete message backup** — public channels, private channels, direct messages, group DMs, threaded conversations, and emoji reactions are captured and preserved from your workspace.
- **File records** — every shared file gets a record in your Firebase project. When file copying is switched on in our extension build, each file uploads to our file storage with public visibility: a hard-to-guess link that anyone holding it can open. It isn't private storage, and it isn't your Firebase project or Google Drive. Where copying is off, your archive keeps the file's details and Slack's link, which works only while Slack serves that file.
- **User directory** — a complete record of workspace members: roles, profiles, email addresses, and metadata.
- **Threads & reactions** — full thread reply chains and all emoji reactions with user attribution; thread relationships are preserved so conversations read in context.

## Find & use your data

- **Search** — checks the most recent page of messages, up to 50 per query, with filters by date, channel, and user.
- **Export options** — export as **JSON** (full data + metadata), **CSV** (tabular for spreadsheets), or **HTML** and **Markdown** (readable conversation logs). Export a single channel or your whole archive.
- **Import** — bring in one JSON file (a SlackVault export, or Slack export data merged into one file) so older history sits alongside synced data.

## Sync & control

- **Automatic sync** — background syncing keeps backups current without manual work; configurable as manual only, every 6 hours, every 12 hours, or daily.
- **Sync dashboard** — visual progress, totals (messages / channels / files), storage usage, and the next scheduled sync.
- **Granular control** — choose which channels and data types to include; include or exclude private channels, DMs, and files independently; set how far back to sync.
- **Notifications** — get notified when syncs complete or if an issue arises.

## Ownership & privacy

- **Your messages, your control** — messages are stored in your own Firebase project. Delete individual messages, entire channels, or all SlackVault data anytime. File copies are not in your storage (see above).
- **Read-only Slack access** — every OAuth scope is read-only; SlackVault cannot post or modify anything in your workspace.
- **No content analytics** — Slack message content is never used for analytics.
- **Multi-workspace** — connect multiple workspaces; each stores data in its own Firebase collection.

## Platforms

- **Web app** — the product site and archive viewer at [slackvault.aoneahsan.com](https://slackvault.aoneahsan.com), also packaged as an Android app.
- **Browser extension** — Manifest V3, the engine that performs the sync.

See [Architecture](/reference/architecture) for how these pieces fit together, or the
[FAQ](/faq) for limits and costs.
