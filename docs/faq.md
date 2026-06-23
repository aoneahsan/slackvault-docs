---
id: faq
title: Frequently asked questions
sidebar_label: FAQ
sidebar_position: 5
description: SlackVault FAQ — security and privacy, where your data is stored, costs, and supported features and usage.
keywords: [slackvault faq, slack backup privacy, slack backup cost, firebase free tier]
---

# Frequently asked questions

## Security & privacy

### Is my Slack data secure?

Yes. Your data is stored in **your** Firebase project — SlackVault never sees, stores, or has
access to it. The extension runs entirely in your browser, and data transfers happen directly
between your browser and Slack / Firebase.

### Who can access my backed-up data?

Only you, and anyone you grant Firebase access to. Since the data lives in your own Firebase
project, you control access through Firebase's security rules. SlackVault operators cannot access
your Firebase project.

### What happens to my Slack credentials?

Your Slack OAuth token is stored locally in your browser's extension storage, encrypted by the
browser, and never sent to a SlackVault server. The token has **read-only** permissions — it cannot
modify your Slack workspace.

### Do you collect analytics on my Slack content?

No. Slack message content is never used for analytics. The product website may use standard,
blockable web analytics, but your archived Slack content is not analyzed.

### What if SlackVault disappears?

Your data is safe. Because it's stored in **your** Firebase, you keep full access even if SlackVault
stops existing. You can export it any time, and it's in standard formats (JSON / Firestore) that any
tool can read.

## Data storage

### Where is my data stored?

In your personal Firebase Firestore database. During setup you provide your own Firebase config, and
all messages, users, channels, and file metadata go directly there. SlackVault has no database of
your content.

### What about file attachments?

File **metadata** is stored in Firestore. The actual files are downloaded and stored in **FilesHub**
(a free file-storage service) so they remain accessible after Slack's URLs expire. You can also
configure the extension to skip file downloads.

### How much data can I store?

Firebase's free Spark plan includes ~1 GiB of Firestore storage — roughly 500,000 messages. If you
need more, Firebase's pay-as-you-go Blaze plan is about $0.18/GiB/month.

### Can I delete my backed-up data?

Yes, completely. You have full control over your Firebase project — delete individual messages,
entire channels, or everything. SlackVault also offers a "Delete All Data" option that removes its
collections from your Firebase.

### Does SlackVault modify data in Slack?

Never. SlackVault only has read permissions; the OAuth scopes it requests are strictly read-only.

### What happens to deleted Slack messages?

Once a message is backed up it stays in your Firebase even if the original is deleted from Slack —
SlackVault captures the state at sync time. You can manually delete it from your backup if you want.

## Cost

### Is SlackVault really free?

Yes. There's no charge for the extension, website, or OAuth service. The only potential costs are
from Firebase (the free tier is usually enough) and FilesHub (whose free tier includes generous
storage).

### How can it be free if it costs money to run?

A zero-server architecture: the extension runs in your browser, OAuth is a Cloudflare Worker (free
tier), the website is statically hosted (free tier), and your data goes to **your** Firebase. The
operator's compute cost is effectively zero.

### Are there hidden costs?

No hidden costs. The only variable is your own Firebase usage — a very large workspace (100K+
messages) or very frequent syncing could exceed the free tier. You can monitor usage in the Firebase
console.

## Features & usage

### Which Slack plans are supported?

All of them: Free, Pro, Business+, and Enterprise Grid. How far back you can back up depends on your
Slack retention settings, not on SlackVault.

### Can I back up channels I'm not a member of?

No. You can only back up channels you have access to. Private channels require membership — a Slack
API limitation for privacy.

### How often does SlackVault sync?

You choose: manual only, every 6 hours, every 12 hours, or daily. The first sync captures all
history; later syncs are incremental.

### Can I sync multiple workspaces?

Yes. Each workspace stores data in a separate collection in your Firebase, keyed by workspace ID.
Connect as many as you like from the same extension.

### Does it back up threads and reactions?

Yes — full thread support including all replies, and all emoji reactions with user attribution.
Thread relationships are preserved.

### Can I search old messages?

Yes. SlackVault includes built-in search across all backed-up messages — often faster than Slack's
native search, especially for free-tier workspaces.

### What export formats are available?

JSON (full data + metadata), CSV (tabular for spreadsheets), and PDF (formatted, readable
conversation logs). Export a single channel or your entire backup.

---

Still stuck? See the [troubleshooting](/guides/browser-extension#troubleshooting) section, or reach
the author at [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com).
