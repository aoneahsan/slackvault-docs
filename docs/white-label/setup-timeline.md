---
id: setup-timeline
title: Setting up a white-label copy
sidebar_label: Setup timeline
description: The order a white-label SlackVault copy is set up in, from your domain and branding to the Slack app registration and the deploy.
keywords: [slackvault white label setup, slackvault custom domain]
last_update:
  date: 2026-11-13
  author: Ahsan Mahmood
---

# Setting up a white-label copy

Once your licence is issued, setup runs in this order. Each step waits on the one before it.

1. **Your details.** We ask for the domain your copy will use, your product name, your mark as an SVG, and your
   colours.
2. **Your Slack app.** You register a Slack app in your own Slack account. We send the manifest, with SlackVault's
   read-only scopes ([Slack scopes](../reference/slack-scopes.md)), and the redirect address on your domain.
3. **Your domain.** You add the DNS record we send; we connect the domain to your copy and wait for its
   certificate.
4. **The deploy.** We build your copy with your name, mark and colours, your Slack app's client ID and your
   licence key, and deploy it.
5. **The licence file.** We add your licence file and certificate to the deployment, so
   [verification](./verify-a-licence.md) answers for your domain.

Your teams then connect their own Firebase projects, the same way they would on SlackVault itself
([Quick start](../getting-started/quick-start.md)).
