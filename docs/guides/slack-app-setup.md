---
id: slack-app-setup
title: Create the Slack app
sidebar_label: Slack app setup
sidebar_position: 1
description: Create a Slack app from the SlackVault manifest, copy your credentials, and install it to your workspace. All requested OAuth scopes are read-only.
keywords: [slack app manifest, slack oauth scopes, slack app setup, slackvault]
---

# Create the Slack app

SlackVault reads your workspace through a Slack app **you** create and own. Every scope it
requests is **read-only** — the app cannot post messages, modify channels, or make any change to
your workspace.

## Step 1 — Create app from manifest {#step-1-create-app-from-manifest}

The fastest way to get a correctly-configured app is the pre-built manifest.

1. Open the [Slack API portal](https://api.slack.com/apps) and click **Create New App**.
2. Choose **From an app manifest**.
3. Select the workspace you want to back up. **You must be an admin or owner** of that workspace.
4. Choose **YAML** and paste the manifest:

```yaml
display_information:
  name: SlackVault Backup
  description: Backup your Slack workspace to Firebase
  background_color: "#06070a"
features:
  bot_user:
    display_name: SlackVault
    always_online: false
oauth_config:
  redirect_urls:
    - https://slackvault.aoneahsan.com/oauth/callback
  scopes:
    user:
      - channels:history
      - channels:read
      - groups:history
      - groups:read
      - im:history
      - im:read
      - mpim:history
      - mpim:read
      - users:read
      - users:read.email
      - files:read
      - team:read
settings:
  org_deploy_enabled: false
  socket_mode_enabled: false
  token_rotation_enabled: false
```

5. Review the permission summary and click **Create**.

:::note
The `redirect_urls` value must match the OAuth callback your SlackVault deployment uses. If you
self-host the OAuth worker, replace it with your own callback URL. The hosted SlackVault uses its
own worker callback.
:::

## Step 2 — Get your credentials

After creating the app, open **Basic Information** in the left sidebar and scroll to **App
Credentials**:

| Credential | Description |
|------------|-------------|
| **Client ID** | Public identifier for your app (safe to expose). |
| **Client Secret** | Private OAuth key — keep it secure. |
| **Signing Secret** | Used to verify requests (optional for SlackVault). |

:::warning
Never share your **Client Secret** publicly. In SlackVault the OAuth exchange happens server-side
in the Cloudflare Worker, so the secret never reaches the website or extension.
:::

## Step 3 — Install to your workspace

1. In the Slack API portal, go to **Install App** and click **Install to Workspace**.
2. Review the permissions and **authorize**.
3. After installation you'll see OAuth tokens generated — confirmation that the app is connected.
4. In Slack, open **Apps** and verify **SlackVault Backup** appears in your installed apps.

## OAuth scopes — what each one grants

All scopes are **read-only**. See the full table on the [Slack OAuth scopes](/reference/slack-scopes)
reference page. In short: `channels:*` / `groups:*` / `im:*` / `mpim:*` read public, private,
direct, and group-DM messages and metadata; `users:read[.email]` reads the user directory;
`files:read` reads file metadata; `team:read` reads workspace info.

## Common issues

| Message | Cause / fix |
|---------|-------------|
| "This app is not approved for your workspace" | Your workspace may require admin approval for new apps. Contact your admin or check **Settings → Manage Apps** in Slack. |
| "Invalid redirect_uri parameter" | The redirect URL in your app must exactly match the one SlackVault uses. If self-hosting, update both the manifest and your OAuth service config. |
| "Missing scope" error | Re-install the app to your workspace — scope changes only take effect after reinstalling. |

Next: [Configure Firebase](/guides/firebase-setup) so the extension has somewhere to store data.
