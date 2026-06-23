---
id: data-model
title: Data model
sidebar_label: Data model
sidebar_position: 4
description: How SlackVault organizes your Slack backup in Firestore — collection layout and the message, channel, user, and file object shapes.
keywords: [slackvault data model, firestore slack schema, slack message object, slack export schema]
---

# Data model

This page documents how SlackVault stores your backup in Firestore and the shape of the objects it
captures. Everything lives in **your** Firebase project.

## Firestore collections

```text
slackvault/
└── {workspaceId}/
    ├── meta/        # workspace metadata + sync status (doc: info)
    ├── channels/    # one doc per channel ({channelId})
    ├── users/       # one doc per user ({userId})
    ├── messages/    # one doc per message ({message ts})
    └── files/       # one doc per file ({fileId})
slackvault_users/    # per-user preferences/settings ({userId})
```

| Collection | Document ID | Purpose |
|-----------|-------------|---------|
| `slackvault/{workspaceId}/meta` | `info` | Workspace metadata and sync status |
| `slackvault/{workspaceId}/channels` | channel ID | Channel information and settings |
| `slackvault/{workspaceId}/users` | user ID | User profiles and contact info |
| `slackvault/{workspaceId}/messages` | message `ts` | All messages with full metadata |
| `slackvault/{workspaceId}/files` | file ID | File metadata and storage URLs |
| `slackvault_users` | user ID | User preferences and settings |

Each connected workspace gets its own `{workspaceId}` subtree, so multiple workspaces never mix.

## Object shapes

### Message

```json
{
  "type": "message",
  "user": "U1234567890",
  "text": "Hello, world!",
  "ts": "1234567890.123456",
  "thread_ts": "1234567890.123456",
  "reply_count": 5,
  "reactions": [
    { "name": "thumbsup", "users": ["U1234", "U5678"], "count": 2 }
  ],
  "attachments": [],
  "files": [],
  "blocks": []
}
```

:::note
Slack uses the unique timestamp (`ts`) as the message ID — a Unix timestamp with microseconds,
e.g. `1234567890.123456`.
:::

### Channel

```json
{
  "id": "C1234567890",
  "name": "general",
  "is_channel": true,
  "is_private": false,
  "is_archived": false,
  "created": 1234567890,
  "creator": "U1234567890",
  "topic": { "value": "Company announcements", "creator": "U1234567890", "last_set": 1234567890 },
  "purpose": { "value": "General discussions", "creator": "U1234567890", "last_set": 1234567890 },
  "num_members": 150
}
```

### User

```json
{
  "id": "U1234567890",
  "team_id": "T1234567890",
  "name": "john.doe",
  "real_name": "John Doe",
  "profile": {
    "display_name": "John",
    "email": "john@example.com",
    "image_192": "https://...",
    "title": "Software Engineer",
    "status_text": "In a meeting",
    "status_emoji": ":calendar:"
  },
  "is_admin": false,
  "is_owner": false,
  "is_bot": false,
  "deleted": false
}
```

### File

```json
{
  "id": "F1234567890",
  "name": "document.pdf",
  "title": "Project Proposal",
  "mimetype": "application/pdf",
  "filetype": "pdf",
  "size": 1234567,
  "url_private": "https://files.slack.com/...",
  "user": "U1234567890",
  "created": 1234567890,
  "channels": ["C1234567890"],
  "thumb_360": "https://..."
}
```

:::warning
`url_private` / `url_private_download` require Slack authentication. SlackVault stores file metadata
in Firestore but downloads the actual file to **FilesHub** for permanent storage, so it stays
available after the Slack URL expires.
:::

## Common error codes

| Code | Meaning | Resolution |
|------|---------|------------|
| `token_expired` | Slack OAuth token expired | Disconnect and reconnect to Slack in the extension |
| `missing_scope` | App lacks a required permission | Reinstall the app with the manifest |
| `channel_not_found` | Channel deleted or access lost | Skip and continue |
| `rate_limited` | Too many API requests | Handled automatically — sync pauses and resumes |
| `firebase_permission_denied` | Firestore rules blocking writes | Update your [security rules](/guides/firebase-setup#step-4-security-rules) |
