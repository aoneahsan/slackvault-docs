---
id: slackdump
title: "Moving from Slackdump to SlackVault"
sidebar_label: "Slackdump"
description: "Going from Slackdump archives to SlackVault: export in Slack's format, merge to one JSON file, then sync from the browser."
keywords: [slackdump, slack command line archive]
last_update:
  date: 2026-11-07
  author: Ahsan Mahmood
---

import RivalFacts, { Out } from '@site/src/components/RivalFacts';
import MergeSlackExport from './_merge-slack-export.mdx';

Slackdump's README lists a Slack Export format, and that's the one to use. Its own archive and SQLite formats aren't something SlackVault's importer reads.

## The steps

1. Set up SlackVault: [Slack app setup](/guides/slack-app-setup), then [Firebase setup](/guides/firebase-setup), then the [browser extension](/guides/browser-extension). The first sync is covered in [Syncing & your archive](/guides/syncing-and-archive).
2. Convert or create your archive in Slackdump's Slack Export format. <Out href="https://github.com/rusq/slackdump">Its README</Out> has the commands.
3. Unzip the result and merge it. We haven't tested this on a Slackdump file, so check the counts on the Import page:

<MergeSlackExport />

4. Run a sync. From then on the extension copies new messages while your browser runs, with no terminal involved. Keep your Slackdump archive: it holds real file copies on your disk, and SlackVault's file handling is different (see the limits below).

<RivalFacts slug="slackdump" />
