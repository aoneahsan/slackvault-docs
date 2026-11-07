---
id: backupery-for-slack
title: "Moving from Backupery for Slack to SlackVault"
sidebar_label: "Backupery for Slack"
description: "Adding SlackVault after Backupery for Slack: where your existing exports stay and how to load a Slack-format JSON export."
keywords: [backupery slack, slack backup desktop]
last_update:
  date: 2026-11-07
  author: Ahsan Mahmood
---

import RivalFacts from '@site/src/components/RivalFacts';
import MergeSlackExport from './_merge-slack-export.mdx';

Your Backupery HTML exports stay readable on their own, so there's nothing to convert for reading. What changes is where new messages go: into your Firebase project, from a browser extension.

## The steps

1. Set up SlackVault: [Slack app setup](/guides/slack-app-setup), then [Firebase setup](/guides/firebase-setup), then the [browser extension](/guides/browser-extension). The first sync is covered in [Syncing & your archive](/guides/syncing-and-archive).
2. Run a first sync, then keep your last Backupery export as your record of anything older than Slack's API still returns.
3. Backupery's pages say its JSON export is compatible with Slack's import tools. If your export keeps Slack's layout, with `users.json`, `channels.json` and a folder per channel, try the merge below. We haven't tested it on a Backupery file, so check the counts on the Import page before relying on it.

<MergeSlackExport />

<RivalFacts slug="backupery-for-slack" />
