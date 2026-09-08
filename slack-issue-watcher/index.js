import { WebClient } from "@slack/web-api";

const token = process.env.SLACK_BOT_TOKEN;
const userId = process.env.SLACK_USER_ID;
const channelIds = (process.env.SLACK_CHANNEL_IDS || "").split(",").map((s) => s.trim()).filter(Boolean);

if (!token || !userId || channelIds.length === 0) {
  console.error("Missing SLACK_BOT_TOKEN, SLACK_USER_ID, or SLACK_CHANNEL_IDS env vars.");
  process.exit(1);
}

const slack = new WebClient(token);

const ISSUE_KEYWORDS = [
  "issue", "bug", "broken", "not allowing", "not working", "failing",
  "wrong", "missing", "urgent", "escalat", "please review", "can you take a look",
  "please help", "revenue"
];

const RESOLVED_KEYWORDS = [
  "resolved", "fixed and deployed", "already fixed", "looks resolved",
  "showing the correct", "issue is fixed", "confirmed working", "fixed!"
];

const STALLED_FOLLOWUP_KEYWORDS = [
  "any update", "eta", "was there a resolution", "please help confirm",
  "can we get confirmation", "still waiting", "any updates"
];

const TWO_DAYS_SECONDS = 2 * 24 * 60 * 60;

function textLower(msg) {
  return (msg.text || "").toLowerCase();
}

function looksLikeIssue(msg) {
  const t = textLower(msg);
  const hasKeyword = ISSUE_KEYWORDS.some((k) => t.includes(k));
  const hasJiraAttachment = (msg.attachments || []).some(
    (a) => (a.footer || "").toLowerCase().includes("jira") || (a.title_link || "").includes("atlassian.net")
  );
  return hasKeyword || hasJiraAttachment;
}

function containsResolutionLanguage(text) {
  const t = (text || "").toLowerCase();
  return RESOLVED_KEYWORDS.some((k) => t.includes(k));
}

function isUnansweredFollowup(text) {
  const t = (text || "").toLowerCase();
  return STALLED_FOLLOWUP_KEYWORDS.some((k) => t.includes(k));
}

async function getChannelName(channelId) {
  try {
    const res = await slack.conversations.info({ channel: channelId });
    return res.channel?.name || channelId;
  } catch {
    return channelId;
  }
}

async function checkChannel(channelId) {
  const flagged = [];
  const channelName = await getChannelName(channelId);
  const oldest = Math.floor(Date.now() / 1000) - 4 * 24 * 60 * 60; // look back 4 days

  const history = await slack.conversations.history({ channel: channelId, oldest, limit: 200 });
  const topLevelMsgs = (history.messages || []).filter((m) => !m.thread_ts || m.thread_ts === m.ts);

  for (const msg of topLevelMsgs) {
    const ageSeconds = Math.floor(Date.now() / 1000) - parseFloat(msg.ts);
    if (ageSeconds < TWO_DAYS_SECONDS) continue;
    if (!looksLikeIssue(msg)) continue;

    let replies = [];
    if (msg.reply_count && msg.reply_count > 0) {
      const repliesRes = await slack.conversations.replies({ channel: channelId, ts: msg.ts });
      replies = (repliesRes.messages || []).slice(1); // drop the parent
    }

    const lastReply = replies[replies.length - 1];
    const ageDays = Math.floor(ageSeconds / 86400);

    let reason = null;
    if (!lastReply) {
      reason = `no replies in ${ageDays}d`;
    } else if (containsResolutionLanguage(lastReply.text)) {
      continue; // addressed, skip
    } else if (isUnansweredFollowup(lastReply.text)) {
      reason = "thread stalled — last message is an unanswered follow-up";
    } else {
      const lastReplyAgeSeconds = Math.floor(Date.now() / 1000) - parseFloat(lastReply.ts);
      if (lastReplyAgeSeconds >= TWO_DAYS_SECONDS) {
        reason = `no activity in ${Math.floor(lastReplyAgeSeconds / 86400)}d`;
      }
    }

    if (reason) {
      const permalinkRes = await slack.chat.getPermalink({ channel: channelId, message_ts: msg.ts });
      flagged.push({
        channelName,
        text: (msg.text || "").slice(0, 100),
        author: msg.user,
        ageDays,
        reason,
        permalink: permalinkRes.permalink,
      });
    }
  }

  return flagged;
}

async function main() {
  let allFlagged = [];
  for (const channelId of channelIds) {
    const flagged = await checkChannel(channelId);
    allFlagged = allFlagged.concat(flagged);
  }

  if (allFlagged.length === 0) {
    console.log("No unaddressed issues found. Skipping DM.");
    return;
  }

  const lines = allFlagged.map(
    (f) =>
      `🟡 *#${f.channelName}* — "${f.text}" (${f.ageDays}d old)\n   Reason: ${f.reason}\n   <${f.permalink}|View thread>`
  );

  const dm = await slack.conversations.open({ users: userId });
  await slack.chat.postMessage({
    channel: dm.channel.id,
    text: `*Unaddressed issues (2+ days old):*\n\n${lines.join("\n\n")}`,
  });

  console.log(`Flagged ${allFlagged.length} issue(s) and sent DM.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
