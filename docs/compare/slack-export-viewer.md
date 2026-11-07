---
id: slack-export-viewer
title: "Moving from slack-export-viewer to SlackVault"
sidebar_label: "slack-export-viewer"
description: "From slack-export-viewer to SlackVault: load the same Slack export as one JSON file and keep syncing new messages."
keywords: [slack-export-viewer, view slack export]
last_update:
  date: 2026-11-07
  author: Ahsan Mahmood
---

import RivalFacts from '@site/src/components/RivalFacts';
import MergeSlackExport from './_merge-slack-export.mdx';

slack-export-viewer reads an export you already hold, so you have what the importer needs.

## The steps

1. Set up SlackVault: [Slack app setup](/guides/slack-app-setup), then [Firebase setup](/guides/firebase-setup), then the [browser extension](/guides/browser-extension). The first sync is covered in [Syncing & your archive](/guides/syncing-and-archive).
2. Load the same export:

<MergeSlackExport />

3. Run a sync so history keeps building after the export's date.

<RivalFacts slug="slack-export-viewer" />
