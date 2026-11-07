---
id: slack-archive
title: "Moving from slack-archive to SlackVault"
sidebar_label: "slack-archive"
description: "Going from slack-archive to SlackVault: keep your HTML files for old messages and start syncing new ones to Firebase."
keywords: [slack-archive, slack html archive]
last_update:
  date: 2026-11-07
  author: Ahsan Mahmood
---

import RivalFacts from '@site/src/components/RivalFacts';

There's no import path here. slack-archive's JSON isn't in the shape SlackVault's importer reads, and nothing needs converting: its HTML files keep working as they are.

## The steps

1. Keep the folder slack-archive wrote. It's your record of anything Slack's API no longer returns, and it holds the files too.
2. Set up SlackVault: [Slack app setup](/guides/slack-app-setup), then [Firebase setup](/guides/firebase-setup), then the [browser extension](/guides/browser-extension). The first sync is covered in [Syncing & your archive](/guides/syncing-and-archive).
3. Run a first sync. It starts from what Slack's API returns today, so expect overlap with your HTML archive, not a join between the two.

<RivalFacts slug="slack-archive" />
