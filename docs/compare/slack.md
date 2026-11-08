---
id: slack
title: "Moving from Slack's own export to SlackVault"
sidebar_label: "Slack's own plans"
description: "Staying on Slack and adding SlackVault: sync before old messages slide out of your plan's window, load an owner's export if there is one, and what never flows back."
keywords: [slack export, slack free plan history]
last_update:
  date: 2026-11-07
  author: Ahsan Mahmood
---

import RivalFacts from '@site/src/components/RivalFacts';
import MergeSlackExport from './_merge-slack-export.mdx';

Slack is the chat itself. Its paid plans keep unlimited history inside Slack, searchable where people already work, and if your team can pay per user, that is the simplest answer with nothing extra to run.

SlackVault is for a team staying on the free plan for now. It copies messages and threads into your own Firebase project every 15 minutes while a browser with the extension is running. You don't leave Slack for this, and nobody on the team changes how they work.

## The steps

1. **Sync soon, because the window moves.** SlackVault can copy only what Slack's API still returns for your plan, and anything that slides out before a sync saves it is out of reach. Create the [Slack app](/guides/slack-app-setup), your Firebase project ([Firebase setup](/guides/firebase-setup)) and the [browser extension](/guides/browser-extension), then run the first sync as [Syncing & your archive](/guides/syncing-and-archive) describes.
2. **Load an export if a workspace owner or admin has one from Slack.** Merge it into one file first:

<MergeSlackExport />

3. **Know what happens if you upgrade later.** There is no way yet to send records back into Slack. The history in your Firebase project stays there and doesn't flow back.

<RivalFacts slug="slack" verdict={false} />
