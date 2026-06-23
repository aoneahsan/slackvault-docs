---
id: search-and-export
title: Search & export
sidebar_label: Search & export
sidebar_position: 5
description: Full-text search across your backed-up Slack messages, files, and channels, plus exporting to JSON, CSV, or PDF.
keywords: [slack search, slack export json csv pdf, search slack backup, export slack]
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

If you already have a Slack export (the ZIP/JSON Slack provides), SlackVault can import it so your
older history sits alongside what the extension syncs. Use the **Import** page in the web app and
upload the file.

:::note
Typical Slack exports keep messages inside per-channel folders. If you're importing messages
directly, they need to be in a `messages` field — see the import screen for the expected shape.
:::

## Export formats

You can export an individual channel or your **entire** backup in three formats:

| Format | Best for | Structure |
|--------|----------|-----------|
| **JSON** | Programmatic access, data migration, full backup | Nested objects matching the Slack API responses, with all metadata |
| **CSV** | Spreadsheet analysis, simple imports | Flat columns: timestamp, user, channel, text, etc. |
| **PDF** | Legal/compliance, printable archives, sharing | Chronological messages with user names and formatting |

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
