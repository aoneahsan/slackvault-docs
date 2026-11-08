---
id: slack-archive
title: "Moving from slack-archive to SlackVault"
sidebar_label: "slack-archive"
description: "slack-archive leaves you HTML files from each run; SlackVault copies every 15 minutes. No import between them: keep the HTML for old messages and sync new ones to Firebase."
keywords: [slack-archive, slack html archive]
last_update:
  date: 2026-11-07
  author: Ahsan Mahmood
---

import RivalFacts from '@site/src/components/RivalFacts';

slack-archive is an open-source Node tool. One run with a user token pulls channels, DMs and files into a static HTML archive plus JSON, meant to open decades from now, and you re-run it when you choose. For a free, one-off copy, that is all you need.

SlackVault is for when nobody should have to remember a run: a copy every 15 minutes, searchable from a web app rather than a folder of files.

## Running the two side by side

There's no import path. slack-archive's JSON isn't in the shape SlackVault's importer reads, and its HTML files keep working as they are, so nothing needs converting.

1. **Keep the folder slack-archive wrote.** It is your record of anything Slack's API no longer returns, and it holds the files too.
2. **Install the pieces:** a Slack app ([Slack app](/guides/slack-app-setup)), a Firebase project ([Firebase setup](/guides/firebase-setup)) and the [browser extension](/guides/browser-extension).
3. **Run a first sync.** It starts from what Slack's API returns today, so expect overlap with your HTML archive, not a join between the two. [Syncing & your archive](/guides/syncing-and-archive) has the details.

<RivalFacts slug="slack-archive" verdict={false} />
