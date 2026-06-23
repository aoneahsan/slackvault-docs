---
id: syncing-and-archive
title: Syncing & browsing your archive
sidebar_label: Syncing & archive
sidebar_position: 4
description: How SlackVault syncs (full then incremental), what it captures, and how to browse your archived channels, threads, files, and users.
keywords: [slack sync, incremental sync, slack archive viewer, browse slack backup]
---

# Syncing & browsing your archive

## How syncing works

The first time you sync, SlackVault captures your full available history. After that, syncs are
**incremental** — they only fetch new messages — so they finish much faster. You control the
cadence in the extension's [sync settings](/guides/browser-extension#sync-settings): manual only,
every 6 hours, every 12 hours, or daily.

Behind the scenes the extension calls Slack's Web API with conservative pacing (one request at a
time, ~1.2 seconds apart) and automatic back-off if it hits a rate limit, so a sync pauses and
resumes cleanly rather than failing. See [Slack API & rate limits](/reference/api-and-rate-limits)
for the details and sync-time estimates.

## What gets captured

| Data | Captured |
|------|----------|
| Public channels | Messages, timestamps, reactions, threads |
| Private channels | If you're a member |
| Direct messages & group DMs | If included in settings |
| Threads | Full reply chains, relationships preserved |
| Reactions | Emoji name + the users who reacted |
| Files | Metadata always; the file itself downloaded to FilesHub if "include files" is on |
| Users | The full workspace directory — names, profiles, roles, emails |
| Workspace | Name, domain, icon |

:::note
Once a message is backed up it stays in your Firebase even if the original is later deleted from
Slack — SlackVault captures the state at sync time. You can manually delete from your backup any
time.
:::

## Multiple workspaces

You can connect as many workspaces as you like from the same extension. Each workspace stores its
data in a separate collection in your Firebase, keyed by workspace ID, so they never mix.

## Browsing the archive

Open the SlackVault web app (or the extension's **Browse Archive**) to explore what you've backed
up:

- **Workspaces** — pick a workspace to view its channels, users, and stats.
- **Channels** — browse channel-by-channel; each shows its message history.
- **Messages & threads** — messages render with their author, timestamp, reactions, and any
  attached files. Click a threaded message to open the thread pane with full context.
- **Files** — a file browser/grid with previews, backed by the file metadata and FilesHub URLs.
- **Users** — the workspace user directory with profiles and contact info.

## Sync status

While a sync runs, the dashboard's status widget shows live progress, and you can trigger a manual
sync at any time. After it finishes, the totals (messages / channels / files) and the "next
scheduled sync" time update.

Next: [search and export your archive](/guides/search-and-export).
