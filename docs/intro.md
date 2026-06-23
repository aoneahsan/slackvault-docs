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

**SlackVault is a zero-cost Slack backup and archive platform.** It lets you save every message,
file, and conversation from your Slack workspace into storage you control — your own Firebase
project and FilesHub account — and then browse, search, and export that archive whenever you need
it.

Unlike a hosted vendor backup, SlackVault never stores your data on a SlackVault server. The
browser extension syncs locally, a small Cloudflare Worker handles only the Slack OAuth handshake,
and everything ends up in **your** infrastructure. If SlackVault disappeared tomorrow, your archive
would still be sitting in your Firebase, in standard formats you can read with any tool.

## Why SlackVault exists

Slack's free plan limits how far back you can see your own history, and even paid plans don't make
it easy to keep a portable, searchable, offline copy. SlackVault solves that with three principles:

- **Your data stays yours.** Messages, files, channels, and users live in your own Firebase project. SlackVault has no database of your content.
- **Zero ongoing cost.** It runs entirely on free tiers — Firebase free tier, a Cloudflare Worker for OAuth, FilesHub for files, and a browser extension that does the work locally.
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
