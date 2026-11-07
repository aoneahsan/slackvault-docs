---
id: backupery-for-slack-export
title: "Moving from Backupery for Slack Export to SlackVault"
sidebar_label: "Backupery for Slack Export"
description: "Using SlackVault alongside Backupery for Slack Export: start from the same Slack ZIP, then keep copying new messages."
keywords: [slack export zip, slack export viewer]
last_update:
  date: 2026-11-07
  author: Ahsan Mahmood
---

import RivalFacts from '@site/src/components/RivalFacts';
import MergeSlackExport from './_merge-slack-export.mdx';

This tool starts from a Slack export ZIP, and so can you. Keep its HTML for reading; SlackVault picks up from there with new messages.

## The steps

1. Set up SlackVault: [Slack app setup](/guides/slack-app-setup), then [Firebase setup](/guides/firebase-setup), then the [browser extension](/guides/browser-extension). The first sync is covered in [Syncing & your archive](/guides/syncing-and-archive).
2. Load the ZIP you already hold:

<MergeSlackExport />

3. Run a sync so messages newer than the export keep arriving.

<RivalFacts slug="backupery-for-slack-export" />
