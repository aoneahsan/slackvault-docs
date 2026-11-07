---
id: slack
title: "Moving from Slack's own export to SlackVault"
sidebar_label: "Slack's own plans"
description: "Keeping Slack and adding SlackVault: what your plan's export gives you, how to load it, and what carries over."
keywords: [slack export, slack free plan history]
last_update:
  date: 2026-11-07
  author: Ahsan Mahmood
---

import RivalFacts from '@site/src/components/RivalFacts';
import MergeSlackExport from './_merge-slack-export.mdx';

You don't leave Slack for this. SlackVault sits beside it, and if your team can pay for a Slack plan later, those plans keep unlimited history on their own. Your team carries on in Slack as it does today.

## The steps

1. Set up SlackVault: [Slack app setup](/guides/slack-app-setup), then [Firebase setup](/guides/firebase-setup), then the [browser extension](/guides/browser-extension). The first sync is covered in [Syncing & your archive](/guides/syncing-and-archive).
2. Run a first sync. It copies what Slack's API still returns for your plan, so run it soon: what falls outside the window before a sync saves it is out of reach.
3. If a workspace owner or admin has an export from Slack, load it too:

<MergeSlackExport />

There is no way yet to send records back into Slack. If you do upgrade, the history in your Firebase project stays there and doesn't flow back.

<RivalFacts slug="slack" />
