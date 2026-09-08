# Slack Issue Watcher

Watches 2 Slack channels for messages that look like unresolved issues and
DMs you a daily summary of anything that's been sitting 2+ days without
resolution.

## Setup

### 1. Create a Slack app
1. Go to https://api.slack.com/apps → **Create New App** → From scratch
2. Under **OAuth & Permissions**, add these **Bot Token Scopes**:
   - `channels:history`
   - `channels:read`
   - `users:read`
   - `chat:write`
   - `im:write` (needed to open a DM)
3. Click **Install to Workspace**, then copy the **Bot User OAuth Token**
   (starts with `xoxb-`)
4. Invite the bot into both channels you want watched:
   `/invite @your-bot-name` typed into each channel in Slack

### 2. Get the IDs you need
- Your Slack user ID: click your profile picture → **⋯** → **Copy member ID**
- Each channel ID: open the channel → click the channel name at the top →
  scroll to the bottom of the "About" tab → **Channel ID**

### 3. Push this repo to GitHub
Create a new **private** repo on GitHub, then from this folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/slack-issue-watcher.git
git push -u origin main
```

### 4. Add secrets
In the GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**

| Secret name | Value |
|---|---|
| `SLACK_BOT_TOKEN` | the `xoxb-...` token from step 1 |
| `SLACK_USER_ID` | your Slack member ID |
| `SLACK_CHANNEL_IDS` | both channel IDs, comma-separated, e.g. `C0123ABC,C0456DEF` |

### 5. Test it
Go to the **Actions** tab in GitHub → **Daily Slack Issue Check** →
**Run workflow** to trigger it manually and confirm it works before
waiting for the schedule.

It's scheduled to run daily at 14:00 UTC — edit the `cron` line in
`.github/workflows/daily-check.yml` to change the time.

## How it decides something is "unaddressed"

- Looks for issue-shaped keywords (bug, broken, not working, urgent, etc.)
  or a linked Jira card in top-level channel messages
- Skips anything younger than 2 days
- Flags it if: there are no replies, OR the last reply is itself an
  unanswered follow-up ("any update?"), OR there's been no activity in
  2+ days and the last message doesn't contain resolution language
  (fixed, resolved, deployed, etc.)

## Known limitations

- Keyword matching is approximate — tune the lists in `index.js` as you
  see false positives/negatives
- Doesn't check Jira ticket status yet — only Slack activity. If a ticket
  is linked but the thread goes quiet, it'll still get flagged even if
  someone's tracking it in Jira.
