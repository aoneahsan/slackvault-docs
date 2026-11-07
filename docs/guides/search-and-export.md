---
id: search-and-export
title: Search & export
sidebar_label: Search & export
sidebar_position: 5
description: Searching your backed-up Slack messages, files and channels, plus exporting to JSON, CSV, HTML or Markdown.
keywords: [slack search, slack export json csv html markdown, search slack backup, export slack]
---

# Search & export

## Full-text search

SlackVault includes a built-in search that runs across **all** your backed-up messages, files, and
channels. It's often faster than Slack's native search — especially for free-tier workspaces where
Slack hides older history.

You can narrow results with filters:

- **By channel** — limit to one or more channels.
- **By user** — messages from a specific person.
- **By date range** — within a window.

Click any result to open the message in full context (including its thread).

## Importing existing Slack exports

If you have a Slack export, SlackVault can import it so your older history sits alongside what the
extension syncs. The **Import** page reads one JSON file, not a ZIP, so merge the export first:
[the command is here](/compare/slack#the-steps).

:::note
Slack exports keep messages inside per-channel folders. The importer expects them in one `messages`
field, keyed by channel ID, beside `users` and `channels`.
:::

## Export formats

You can export an individual channel or your **entire** backup in four formats:

| Format | Best for | Structure |
|--------|----------|-----------|
| **JSON** | Programmatic access, data migration, full backup | Nested objects matching the Slack API responses, with all metadata |
| **CSV** | Spreadsheet analysis, simple imports | Flat columns: timestamp, user, channel, text, etc. |
| **HTML** | Reading in a browser, sharing | Chronological messages with user names |
| **Markdown** | Notes and plain-text archives | Chronological messages with user names |

### JSON export shape

```json
{
  "workspace": {
    "id": "T1234567890",
    "name": "My Workspace",
    "domain": "myworkspace",
    "exported_at": "2024-01-15T12:00:00Z"
  },
  "channels": [
    { "id": "C1234567890", "name": "general", "messages": [] }
  ],
  "users": [],
  "files": []
}
```

### CSV columns (messages)

`timestamp` (ISO 8601) · `channel_id` · `channel_name` · `user_id` · `user_name` · `text` ·
`thread_ts` (parent thread, if a reply) · `has_files` (boolean) · `reaction_count` (integer).

## Your data is portable

Because everything lives in your own Firebase in standard formats, you're never locked in. Even if
you stop using SlackVault, you can export your archive at any time and process it with any tool.

See the [Data model](/reference/data-model) reference for the exact object shapes, or the
[FAQ](/faq) for storage and cost questions.
