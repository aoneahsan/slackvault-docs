---
id: rocket-chat
title: "Rocket.Chat and SlackVault"
sidebar_label: "Rocket.Chat"
description: "Rocket.Chat is open-source chat you host instead of Slack; SlackVault keeps the team on Slack and keeps a copy. No migration between them, and how to start with SlackVault."
keywords: [rocket.chat, open source team chat]
last_update:
  date: 2026-11-07
  author: Ahsan Mahmood
---

import RivalFacts from '@site/src/components/RivalFacts';

Rocket.Chat is open-source team chat you host yourself, with retention policies and exports built in and a free edition to start on. If you want to own the chat itself, it is a real option, and it means moving the team.

SlackVault is for when leaving Slack isn't on the table and the only thing missing is a lasting copy of what was said and shared. It copies Slack's messages into your Firebase project and has no import from Rocket.Chat.

## Starting with SlackVault instead

Three pieces: a Slack app you own ([Slack app](/guides/slack-app-setup)), a Firebase project ([Firebase setup](/guides/firebase-setup)) and the [browser extension](/guides/browser-extension). Then follow [Syncing & your archive](/guides/syncing-and-archive) for the first run.

Rocket.Chat's pages did not say whether it saves Slack's public or private channels, DMs, threads or files, syncs on a schedule, works without admin rights, or sends records back into Slack, so those rows are not in the table.

<RivalFacts slug="rocket-chat" hideNotStated />
