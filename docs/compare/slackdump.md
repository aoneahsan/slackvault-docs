---
id: slackdump
title: "Moving from Slackdump to SlackVault"
sidebar_label: "Slackdump"
description: "Going from Slackdump archives to SlackVault: export in Slack's format, merge to one JSON file, then let a browser extension keep it current with no terminal."
keywords: [slackdump, slack command line archive]
last_update:
  date: 2026-11-07
  author: Ahsan Mahmood
---

import RivalFacts, { Out } from '@site/src/components/RivalFacts';
import MergeSlackExport from './_merge-slack-export.mdx';

Slackdump is an open-source command-line tool that archives public and private messages, threads, files and emojis to your computer without admin rights. If you're at home in a terminal and want a free, local, scriptable archive with its own viewer and converters, it is hard to improve on.

SlackVault suits a team where nobody wants to run a terminal. The archive keeps itself current from a browser extension, and the whole team reads it in a web app.

## Bringing a Slackdump archive across

1. **Use Slackdump's Slack Export format.** Its README lists that format, and it is the one to use; Slackdump's own archive and SQLite formats aren't something SlackVault's importer reads. <Out href="https://github.com/rusq/slackdump">Its README</Out> has the commands.
2. **Set up the receiving end.** [Slack app](/guides/slack-app-setup), [Firebase setup](/guides/firebase-setup) and the [browser extension](/guides/browser-extension), in that order.
3. **Unzip the result and merge it.** We haven't tested this on a Slackdump file, so check the counts on the Import page:

<MergeSlackExport />

4. **Sync, and keep your Slackdump archive.** From then on the extension copies new messages while your browser runs ([Syncing & your archive](/guides/syncing-and-archive)). Your Slackdump folder holds real copies of your files on disk, and SlackVault handles files differently (see the limits below), so don't delete it.

<RivalFacts slug="slackdump" />
