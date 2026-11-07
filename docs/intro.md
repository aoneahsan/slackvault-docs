---
id: intro
title: Introduction to SlackVault
sidebar_label: Introduction
sidebar_position: 1
slug: /intro
description: SlackVault is a zero-cost Slack backup and archive platform — connect a workspace via OAuth, sync messages and files to your own Firebase, then search and export.
keywords: [slack backup, slack archive, slack export, slackvault, self-hosted slack backup]
---

# Introduction to SlackVault

**SlackVault is a zero-cost Slack backup and archive platform.** It lets you save every message
and conversation your Slack plan still returns into your own Firebase
project, and then browse, search, and export that archive whenever you need
it.

SlackVault never stores your messages on a SlackVault server. The
browser extension syncs locally, a small Cloudflare Worker handles only the Slack OAuth handshake,
and messages end up in **your** Firebase project. File copies are the exception: see [What SlackVault does not do](/compare). If SlackVault disappeared tomorrow, your archive
would still be sitting in your Firebase, in standard formats you can read with any tool.

## Why SlackVault exists

Slack is very good, and its paid plans keep unlimited history. Its Free plan keeps 90 days, which is hard on a team with no
revenue yet. SlackVault is not affiliated with or endorsed by Slack. It works on three principles:

- **Your messages stay yours.** Messages, channels, users and file records live in your own Firebase project. SlackVault has no database of your messages.
- **Zero ongoing cost.** It runs entirely on free tiers — Firebase free tier, a Cloudflare Worker for OAuth, and a browser extension that does the work locally.
- **Fast setup.** A typical first-time setup takes about five minutes.

## The four surfaces

SlackVault is one product made of four cooperating pieces:

| Surface | What it does |
|---------|--------------|
| **Website / web app** | Product site, onboarding, and the archive viewer (browse, search, export). Lives at [slackvault.aoneahsan.com](https://slackvault.aoneahsan.com). Also ships as an Android app. |
| **Browser extension** | A Manifest V3 extension that performs the actual Slack sync, locally in your browser. |
| **Cloudflare Worker** | Handles ONLY the Slack OAuth code exchange and token refresh — your Slack client secret never reaches the website or extension. |
| **Slack app** | The Slack app definition (manifest + read-only OAuth scopes) you install into your workspace. |

For how these connect, see [Architecture](/reference/architecture).

## What SlackVault does *not* do

Honesty matters more than hype:

- It **cannot modify your Slack workspace.** Every OAuth scope it requests is read-only — it cannot post messages, delete content, or change settings.
- It can only back up channels **you have access to.** Private channels require you to be a member.
- It is **not** a real-time mirror. You choose the sync cadence (manual, every 6/12 hours, or daily); the first sync captures history, later syncs are incremental.
- Very large workspaces can exceed Firebase's free tier; see [Firebase setup](/guides/firebase-setup) for the limits.

## Where to go next

- New here? Start with the [Installation](/getting-started/installation) overview, then the [Quick Start](/getting-started/quick-start).
- Setting up the pieces? See [Create the Slack app](/guides/slack-app-setup), [Configure Firebase](/guides/firebase-setup), and the [Browser extension](/guides/browser-extension) guide.
- Want the full picture? Read the [Feature catalog](/reference/features) and [Architecture](/reference/architecture).
- Got a question? The [FAQ](/faq) covers security, storage, cost, and usage.

Built and maintained by [Ahsan Mahmood](https://aoneahsan.com).
