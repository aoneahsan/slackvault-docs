---
id: api-and-rate-limits
title: Slack API & rate limits
sidebar_label: API & rate limits
sidebar_position: 5
description: The Slack Web API endpoints SlackVault reads from, Slack's rate-limit tiers, and how long a sync takes by workspace size.
keywords: [slack web api, slack rate limits, conversations history, slack sync time]
---

# Slack API & rate limits

This page documents the Slack Web API endpoints SlackVault reads from and how it stays within
Slack's rate limits.

## Endpoints used

All endpoints are read-only `GET`-style Web API methods.

| Method | Purpose |
|--------|---------|
| `conversations.list` | List all channels (public, private, DMs) you can access |
| `conversations.history` | Fetch message history for a channel |
| `conversations.replies` | Fetch thread replies for a parent message |
| `users.list` | List all workspace members |
| `users.info` | Detailed info for a specific user |
| `files.list` | List files shared in the workspace |
| `team.info` | Workspace information |

:::tip
SlackVault handles rate limits automatically with exponential back-off. If it hits a limit, syncing
pauses and resumes on its own.
:::

## Slack rate-limit tiers

| Tier | Requests/min | Example methods |
|------|--------------|-----------------|
| Tier 1 | 1 | most restrictive (`admin.*`) |
| Tier 2 | 20 | `conversations.list`, `users.list` |
| Tier 3 | 50 | `conversations.history`, `users.info` |
| Special | 100+ | `auth.test`, `api.test` |

SlackVault uses a **queue-based approach**: one request at a time with ~1.2 seconds between
requests. That yields roughly **50 requests/minute**, staying safely under the Tier 3 limit while
maximizing throughput.

## Sync time by workspace size

These are rough estimates — actual time depends on history depth and network conditions:

| Workspace | Size | Approx. first sync |
|-----------|------|--------------------|
| Small | &lt;50 channels, &lt;100K messages | ~30 minutes |
| Medium | 50–200 channels, 100K–1M messages | 2–4 hours |
| Large | 200–1000 channels, 1M–10M messages | 12–24 hours |
| Enterprise | 1000+ channels, 10M+ messages | multiple days |

The first sync is the slow one because it pulls full history. **Incremental** syncs afterward only
fetch new messages, so they finish in a fraction of the time.

For the captured object shapes and error codes, see the [Data model](/reference/data-model).
