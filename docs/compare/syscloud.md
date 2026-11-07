---
id: syscloud
title: "Moving from SysCloud Backup for Slack to SlackVault"
sidebar_label: "SysCloud Backup for Slack"
description: "What moving from SysCloud to SlackVault involves: no direct import, keeping your CSV and JSON exports, and starting a sync."
keywords: [syscloud slack backup, slack backup license]
last_update:
  date: 2026-11-07
  author: Ahsan Mahmood
---

import RivalFacts from '@site/src/components/RivalFacts';

SysCloud's exports are CSV and JSON in its own layout, which SlackVault's importer doesn't read. So this is a fresh start with your old exports kept beside it.

## The steps

1. Export what you want to keep from SysCloud, and store those files somewhere safe.
2. Set up SlackVault: [Slack app setup](/guides/slack-app-setup), then [Firebase setup](/guides/firebase-setup), then the [browser extension](/guides/browser-extension). The first sync is covered in [Syncing & your archive](/guides/syncing-and-archive).
3. Run a first sync. It copies what Slack's API returns for your plan today, which may be less than SysCloud holds. Keep that in mind before ending the contract.

<RivalFacts slug="syscloud" />
