---
id: slack-scopes
title: Slack OAuth scopes
sidebar_label: Slack scopes
sidebar_position: 3
description: Every Slack OAuth scope SlackVault requests and the data it grants. All scopes are read-only — SlackVault cannot post or modify anything.
keywords: [slack oauth scopes, slack read-only scopes, slackvault permissions]
---

# Slack OAuth scopes

SlackVault requests a fixed set of **user-token** scopes, all of which are **read-only**. The app
cannot post messages, modify channels, or make any change to your workspace.

| Scope | Description | Data accessed |
|-------|-------------|---------------|
| `channels:history` | View messages in public channels | Message content, timestamps, reactions |
| `channels:read` | View basic public channel info | Channel names, topics, purposes |
| `groups:history` | View messages in private channels | Private channel messages |
| `groups:read` | View private channel info | Private channel metadata |
| `im:history` | View direct message history | DM content and timestamps |
| `im:read` | View DM channel info | DM channel metadata |
| `mpim:history` | View group DM history | Group DM content |
| `mpim:read` | View group DM info | Group DM metadata |
| `users:read` | View user profiles | Names, avatars, status |
| `users:read.email` | View user email addresses | Email addresses (for search) |
| `files:read` | View files shared in the workspace | File metadata and content |
| `team:read` | View workspace info | Workspace name, domain, icon |

:::tip
Every scope above is read-only. SlackVault has no write scopes — by design it can only *read* your
workspace, never change it.
:::

## What this means in practice

- You can only back up **channels you have access to**. For private channels, you must be a member.
- Because there are no write scopes, SlackVault literally cannot post, edit, delete, or react to
  anything in Slack.
- After any scope change you must **reinstall** the app to your workspace for the change to take
  effect.

These scopes are pre-set in the [Slack app manifest](/guides/slack-app-setup#step-1-create-app-from-manifest),
so you don't configure them by hand.
