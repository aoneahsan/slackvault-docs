---
id: syscloud
title: "Moving from SysCloud Backup for Slack to SlackVault"
sidebar_label: "SysCloud Backup for Slack"
description: "SysCloud's CSV and JSON exports don't import into SlackVault, so this is a fresh start: keep the exports, start a sync, and check what Slack still returns before ending the contract."
keywords: [syscloud slack backup, slack backup license]
last_update:
  date: 2026-11-07
  author: Ahsan Mahmood
---

import RivalFacts from '@site/src/components/RivalFacts';

SysCloud is a per-license backup service with unlimited retention, point-in-time snapshots and restore into Slack, for organisations of 100 seats and up. SlackVault suits a small team well under 100 people that wants the archive for free in its own Firebase project.

SysCloud's exports are CSV and JSON in its own layout, which SlackVault's importer doesn't read. So this is a fresh start, with your old exports kept beside it.

## A fresh start, with your exports kept

1. **Export what you want to keep from SysCloud,** and store those files somewhere safe.
2. **Connect SlackVault to your workspace:** [Slack app](/guides/slack-app-setup), [Firebase setup](/guides/firebase-setup), then the [browser extension](/guides/browser-extension).
3. **Run a first sync and compare.** It copies what Slack's API returns for your plan today, which may be less than SysCloud holds. Weigh that before ending the contract. [Syncing & your archive](/guides/syncing-and-archive) covers what a sync captures.

<RivalFacts slug="syscloud" />
