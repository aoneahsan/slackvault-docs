---
id: quick-start
title: Quick Start — back up Slack in 5 minutes
sidebar_label: Quick Start
sidebar_position: 2
description: The condensed 5-minute path to your first Slack backup with SlackVault — create the Slack app, configure Firebase, install the extension, and connect.
keywords: [slackvault quick start, slack backup 5 minutes, first slack sync]
---

# Quick Start — back up Slack in 5 minutes

This is the condensed path. Each step links to its full guide if you want more detail.

## Step 1 — Create your Slack app

SlackVault reads your workspace through a Slack app you own. We only request **read** permissions.

1. Go to [api.slack.com/apps](https://api.slack.com/apps) and click **Create New App**.
2. Choose **From an app manifest** for easy setup.
3. Select your workspace from the dropdown (you must be an admin or owner).
4. Paste the SlackVault manifest (see [Create the Slack app](/guides/slack-app-setup#step-1-create-app-from-manifest)).
5. Review the permissions and click **Create**.

:::tip
The app manifest pre-configures every OAuth scope SlackVault needs — no manual configuration.
:::

## Step 2 — Configure Firebase

Create a Firebase project to store your Slack data. It stays in **your** Firebase — SlackVault never sees it.

1. Go to [console.firebase.google.com](https://console.firebase.google.com) and click **Add project**.
2. In the **Build** section, enable **Firestore Database**.
3. Open **Project Settings → General**, scroll down, and copy your Firebase config object.

:::tip
Firebase's free tier includes 50,000 reads and 20,000 writes per day — more than enough for most teams.
:::

## Step 3 — Install the browser extension

The extension runs in your browser and handles all syncing, locally.

1. Add SlackVault from the Chrome Web Store (or load it unpacked for development).
2. Click the puzzle icon and **pin** SlackVault.
3. Click the SlackVault icon to open setup.

:::tip
The extension only acts when you trigger a sync — there are no surprise background processes.
:::

## Step 4 — Connect everything

The final step ties your Slack app and Firebase to the extension.

1. In the extension, paste your **Firebase config**.
2. Click **Connect to Slack** to start OAuth.
3. **Authorize** the app in your Slack workspace.
4. Click **Start Sync** to begin backing up.

:::tip
Your credentials are stored locally in your browser — they never leave your machine.
:::

## What happens next

The first sync captures your history; subsequent syncs are **incremental** (only new messages),
so they're much faster. A workspace with ~10,000 messages typically takes 2–5 minutes for the
first sync. Watch progress on the extension dashboard, then open the
[archive viewer](/guides/syncing-and-archive) to browse, [search](/guides/search-and-export), and
export.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `invalid_client_id` | Re-copy the Client ID from **Basic Information** (not the App ID). |
| Firebase permission denied | Update Firestore security rules — see [Firebase setup](/guides/firebase-setup#step-4-security-rules). |
| Extension not loading | Disable and re-enable it in `chrome://extensions`. |
| Sync stuck at 0% | Check the browser console; usually a network or permission issue. |

Need the long version of any step? See [Installation](/getting-started/installation) and the
[Guides](/guides/slack-app-setup).
