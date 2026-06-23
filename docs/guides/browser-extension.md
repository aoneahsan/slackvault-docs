---
id: browser-extension
title: The browser extension
sidebar_label: Browser extension
sidebar_position: 3
description: Install and configure the SlackVault browser extension (Manifest V3) that performs the actual Slack sync locally — sync settings, shortcuts, and troubleshooting.
keywords: [slackvault extension, chrome extension slack backup, manifest v3, slack sync]
---

# The browser extension

The SlackVault browser extension is where the actual syncing happens. It's a Manifest V3
extension that runs **locally in your browser** — data moves directly between your browser and
Slack / your Firebase. There's no SlackVault server in the path.

## Installation

### Chrome Web Store (recommended)

Add SlackVault from the Chrome Web Store. Microsoft Edge users can install it directly from the
Chrome Web Store too.

### Load unpacked (for development)

1. Download the extension build.
2. Go to `chrome://extensions`.
3. Enable the **Developer mode** toggle.
4. Click **Load unpacked** and select the extension folder.

## Initial configuration

1. **Open the extension** — click the SlackVault icon. If you don't see it, click the puzzle icon and pin SlackVault.
2. **Enter your Firebase config** — paste the config object from [Firebase setup](/guides/firebase-setup#step-3-get-your-firebase-config). The extension validates it automatically.
3. **Connect to Slack** — click **Connect to Slack** to start OAuth; you'll be redirected to Slack to authorize.
4. **Start your first sync** — click **Start Sync**. The first sync may take a while depending on workspace size.

:::tip
A workspace with ~10,000 messages typically takes 2–5 minutes for the first sync. Later syncs are
incremental and much faster.
:::

## Sync settings

| Setting | Options | Default | Description |
|---------|---------|---------|-------------|
| Auto-sync interval | Manual only · Every 6 hours · Every 12 hours · Daily | Daily | How often to automatically sync new messages |
| Include private channels | Yes / No | Yes | Back up private channels you have access to |
| Include DMs | Yes / No | Yes | Back up direct messages |
| Include files | Yes / No | Yes | Back up file attachments (via FilesHub) |
| Message history depth | Last 30 days · Last 90 days · Last year · All time | All time | How far back to sync |

## The dashboard

The extension dashboard shows:

- Workspace info (name, icon, member count)
- Last sync time and next scheduled sync
- Totals: messages, channels, and files backed up
- Firebase storage usage
- Sync status and a live progress bar

## Manual sync

1. Click the SlackVault icon.
2. Click **Sync Now**.
3. Watch the progress bar as data is backed up.

## Keyboard shortcuts (popup open)

| Shortcut | Action |
|----------|--------|
| `Ctrl`/`Cmd` + `S` | Start manual sync |
| `Ctrl`/`Cmd` + `F` | Focus the search bar |
| `Ctrl`/`Cmd` + `E` | Open the export menu |
| `Esc` | Close the popup |

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Extension icon is grayed out | The extension needs configuration first — open it and enter your Firebase config + Slack credentials. |
| Sync stuck at 0% | Check your connection and that your Slack token hasn't expired. Try disconnecting and reconnecting to Slack. |
| "Permission denied" error | Your Firestore rules may be blocking writes — see [Firebase setup → security rules](/guides/firebase-setup#step-4-security-rules). |
| Missing channels in backup | You can only back up channels you're a member of. Join them, then run a full sync. |
| Slow sync | Large workspaces take longer on the first sync; later syncs are incremental. Try off-peak hours. |
| Extension crashed | Reload it from `chrome://extensions` (refresh icon). If it persists, clear extension data and reconfigure. |

Next: learn [how syncing works and how to browse your archive](/guides/syncing-and-archive).
