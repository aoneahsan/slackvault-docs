---
id: probackup
title: "Moving from ProBackup for Slack to SlackVault"
sidebar_label: "ProBackup for Slack"
description: "What moving from ProBackup to SlackVault involves: no direct import, a side-by-side period, and what you give up."
keywords: [probackup slack, slack saas backup]
last_update:
  date: 2026-11-07
  author: Ahsan Mahmood
---

import RivalFacts from '@site/src/components/RivalFacts';

SlackVault can't read a ProBackup backup, and it can't restore into Slack the way ProBackup does. If restoring is why you pay for it, stay there. If you're moving for budget reasons, overlap the two.

## The steps

1. Set up SlackVault: [Slack app setup](/guides/slack-app-setup), then [Firebase setup](/guides/firebase-setup), then the [browser extension](/guides/browser-extension). The first sync is covered in [Syncing & your archive](/guides/syncing-and-archive).
2. Run a first sync and leave it running for a while beside ProBackup.
3. Before you cancel, download whatever you want to keep through ProBackup's own export, and keep that file. SlackVault's importer won't read it.
4. Once your Firebase project holds what you need, cancel on their side.

<RivalFacts slug="probackup" />
