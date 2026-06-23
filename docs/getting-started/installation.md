---
id: installation
title: Installation & prerequisites
sidebar_label: Installation
sidebar_position: 1
description: What you need before backing up Slack with SlackVault — a Slack workspace with admin access, a free Firebase account, and the browser extension.
keywords: [slackvault installation, slack backup setup, firebase, browser extension]
---

# Installation & prerequisites

Setting up SlackVault means connecting three things: a **Slack app** (so SlackVault can read your
workspace), a **Firebase project** (where your data is stored), and the **browser extension**
(which does the syncing). This page is the orientation; each step has its own detailed guide.

## Prerequisites

| Requirement | Why |
|-------------|-----|
| A Slack workspace with **admin or owner** access | You need permission to install an app into the workspace. |
| A **Firebase account** (free tier is enough) | Your backup is stored in your own Firestore database. |
| A **Chromium browser** (Chrome or Edge) | The SlackVault extension runs here. Edge installs Chrome extensions directly from the Chrome Web Store. |
| ~5 minutes | Estimated first-time setup. |

## The setup path

There are four steps, in order. Each links to its full guide:

1. **[Create your Slack app](/guides/slack-app-setup)** — create an app from the provided manifest so SlackVault can read your workspace. The manifest pre-configures all the read-only OAuth scopes, so there's no manual permission wiring.
2. **[Configure Firebase](/guides/firebase-setup)** — create a Firebase project, enable Firestore, and copy your config. All your data stays in your own Firebase.
3. **[Install the browser extension](/guides/browser-extension)** — add SlackVault to your browser. It works locally; no external servers handle your data.
4. **Connect everything** — paste your Firebase config into the extension, click **Connect to Slack** to run OAuth, authorize, and start your first sync.

:::tip
Your credentials (Firebase config + Slack OAuth token) are stored locally in your browser's
extension storage. They never leave your machine for a SlackVault server.
:::

## Where things are stored

- **Messages, channels, users, file metadata** → your Firebase **Firestore** database.
- **File attachments** → **FilesHub** (a free file-storage service). You can also configure the extension to skip file downloads.
- **Your Slack OAuth token** → your browser's encrypted extension storage.

## Common first-setup issues

| Symptom | Fix |
|---------|-----|
| `invalid_client_id` during OAuth | Re-copy the Client ID from the Slack app's **Basic Information** page (not the App ID). |
| Firebase "permission denied" on first sync | Firestore security rules are blocking writes. See [Firebase setup → security rules](/guides/firebase-setup#step-4-security-rules). |
| Extension icon is grayed out | The extension isn't configured yet — open it and enter your Firebase config + connect to Slack. |
| Sync stuck at 0% | Usually a network or permission issue — check the browser console and confirm your Slack token hasn't expired. |

Ready? Continue to the [Quick Start](/getting-started/quick-start) for the condensed 5-minute path.
