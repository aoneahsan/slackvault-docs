---
id: mattermost
title: "Mattermost and SlackVault"
sidebar_label: "Mattermost"
description: "Mattermost is where a team goes to leave Slack and host its own chat; SlackVault is for a team that stays. No migration between them, and where to start if you're staying."
keywords: [mattermost, self hosted chat]
last_update:
  date: 2026-11-07
  author: Ahsan Mahmood
---

import RivalFacts from '@site/src/components/RivalFacts';

Mattermost is self-hosted team chat; teams move to it so their history lives on their own servers. If you're ready to leave Slack and run the chat yourself, with retention and compliance export under your control, that is the move to make.

SlackVault is for the other decision: the team keeps using Slack as it is, and only its messages are copied into your own Firebase project. SlackVault has no import from Mattermost and no export built for it.

## If the team is staying on Slack

Start with the [Slack app](/guides/slack-app-setup), connect a Firebase project ([Firebase setup](/guides/firebase-setup)), and load the [browser extension](/guides/browser-extension). [Syncing & your archive](/guides/syncing-and-archive) walks through the first sync.

Mattermost's pages did not state whether it saves Slack's public or private channels, DMs, threads or files, runs on a schedule, works without admin rights, or puts records back into Slack. Those rows are hidden below.

<RivalFacts slug="mattermost" hideNotStated />
