---
id: firebase-setup
title: Configure Firebase
sidebar_label: Firebase setup
sidebar_position: 2
description: Create a Firebase project, enable Firestore, copy your config, and set security rules so SlackVault can store your Slack backup in storage you control.
keywords: [firebase firestore, slack backup firebase, firestore security rules, slackvault]
---

# Configure Firebase

Your Slack backup is stored in **your own** Firebase Firestore database. When you set up SlackVault
you provide your Firebase config; all messages, users, channels, and file metadata go directly
there. SlackVault has no database of your content.

## Step 1 — Create a Firebase project

1. Open the [Firebase Console](https://console.firebase.google.com) and sign in with your Google account.
2. Click **Add project** and enter a name (e.g. `slackvault-backup`).
3. Follow the wizard. You can disable Google Analytics — it isn't needed. Click **Create project**.

:::tip
Use a descriptive name like `slackvault-mycompany` so you can identify it later.
:::

## Step 2 — Enable Firestore Database

1. In the console, click **Build → Firestore Database**.
2. Click **Create database**. When prompted for rules, select **Start in test mode** for now (you'll secure it below).
3. Choose a location close to you for best performance — **this cannot be changed later**.

| Region | Location ID | Best for |
|--------|-------------|----------|
| US (multi-region) | `nam5` | US-based teams |
| Europe (multi-region) | `eur3` | EU-based teams |
| Asia (multi-region) | `asia-south1` | Asia-based teams |

:::warning
Test mode allows anyone to read/write for 30 days. Update your security rules before relying on it
in production (Step 4).
:::

## Step 3 — Get your Firebase config {#step-3-get-your-firebase-config}

1. Click the gear icon → **Project settings**.
2. Under **Your apps**, click the web icon (`</>`) to add a web app. Give it a nickname (e.g. "SlackVault Extension") and **Register app**.
3. Copy the config object and keep it safe — you'll paste it into the SlackVault extension during setup.

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyA...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123..."
};
```

## Step 4 — Security rules {#step-4-security-rules}

**For initial testing** you can start permissive:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /slackvault/{document=**} {
      allow read, write: if true; // testing only
    }
  }
}
```

**For production**, lock it down to authenticated users / matching workspace:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /slackvault/{workspaceId}/{document=**} {
      allow read, write: if request.auth != null
        && request.auth.token.workspace == workspaceId;
    }
    match /slackvault_users/{userId} {
      allow read, write: if request.auth != null
        && request.auth.uid == userId;
    }
  }
}
```

:::warning
Never keep test rules in production — anyone could read or delete your Slack backup.
:::

## Free-tier limits

| Resource | Free limit | Enough for |
|----------|-----------|-----------|
| Stored data | 1 GiB | ~500K messages |
| Document reads | 50K/day | Heavy search usage |
| Document writes | 20K/day | ~20K new messages/day |
| Document deletes | 20K/day | Cleanup operations |
| Network egress | 10 GiB/month | Normal usage |

:::tip
Most teams under ~50 members never exceed the free tier. SlackVault is optimized to minimize reads
and writes. If you do exceed it, Firebase's pay-as-you-go Blaze plan is a few cents to a few dollars
per month for heavy usage.
:::

## Optional — indexes

For optimal search you can pre-create indexes on `messages` (by `channelId`+`ts` and `userId`+`ts`).
Otherwise Firestore prompts you to create an index the first time a query needs one.

For the full collection layout and object shapes, see the [Data model](/reference/data-model)
reference.

Next: [install the browser extension](/guides/browser-extension).
