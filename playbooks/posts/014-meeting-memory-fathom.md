---
layout: playbook.njk
title: "Your Meetings Are Now a Searchable Knowledge Base (Fathom + Claude)"
description: "Fathom records every meeting. Claude reads the whole archive on demand. Fathom Workflows pushes the right pieces into your CRM, your inbox, and your Slack. Three pieces, one operating system for everything ever said in a meeting at your company."
date: 2026-05-20
difficulty: Beginner-Intermediate
cost: "$30-50/month (Fathom paid plan + Claude API)"
timeToSetup: "An afternoon for the recordings + MCP, a few hours per workflow"
originalSource: "https://old.reddit.com/r/openclaw/comments/1tgrx6m/what_if_your_openclaw_could_just_sit_in_on_your/"
originalAuthor: "u/Interesting-Post4178 (the pain) + Fathom (the answer)"
issueNumber: 14
permalink: /playbooks/meeting-memory-fathom/
tags:
  - meeting-notes
  - sales
  - consulting
  - knowledge-base
  - workflow-automation
  - fathom
---

## Tools

- [**Fathom**](#aff-fathom): records every Zoom, Google Meet, and Teams call, generates transcript + summary + action items
- [**Claude Code**](#aff-claude-code): the chat interface where you ask questions across your whole meeting library
- [**Anthropic**](#aff-anthropic): Claude API powering the queries
- [**HubSpot**](#aff-hubspot): one destination for the post-meeting Workflow actions
- [**Salesforce**](#aff-salesforce): alternative CRM destination
- [**Zapier**](#aff-zapier): connects Fathom to any tool that isn't in the native integrations list

## What You'll Build

Three connected pieces that turn every conversation your team has into structured, searchable, actionable data:

1. **Fathom records every meeting.** Zoom, Google Meet, Microsoft Teams, phone calls, even in-person. Transcript, summary, action items, the whole thing.
2. **Claude reads the entire archive.** Through Fathom's MCP integration, you can ask Claude things like *"what did Sarah agree to in our March demo?"* or *"what objections came up the last five times we pitched the enterprise tier?"* It answers from the meetings themselves, not from your memory.
3. **Fathom Workflows handles the after-the-meeting work.** Every recording triggers automatic actions: pain points written to the CRM, follow-up email drafts in your inbox, deal-blocker flags posted to Slack. You finish a call and the busywork is already done.

The combination is the part nobody else covers. Most companies have Fathom (or Otter, or Gong). They use it as a note-taker. That's like buying a Bloomberg terminal and only using the news ticker.

## Why This Works

The most expensive part of every sales call, customer success conversation, and prospect interview is not the call. It's everything that has to happen afterward:

- Writing the summary
- Updating the CRM with the new info
- Drafting the follow-up email
- Logging the action items
- Telling the team what's blocking the deal
- And, six months later, trying to remember what the customer said the first time you talked

The math on this is brutal. A sales rep doing five calls a day spends 30–45 minutes per call on the after-work. That's three hours every day. Fifteen hours every week. **Three quarters of a work day per week, per rep, lost to post-meeting admin.**

Fathom alone solves the "writing the summary" part. That's roughly 10 minutes of the 30. The other 20 minutes — the CRM update, the email, the Slack message, the recall six months later — has historically required either a human or a sprawling Zapier mess.

The fix is the three-piece stack. Fathom captures. Claude recalls. Workflows acts. Each one is a single SaaS subscription. None of them require code.

## How the Three Layers Work

### Layer 1: Fathom Captures Everything

Fathom is a meeting recorder. You install it once and it auto-joins every call you have, in the background, without needing to invite a bot to the meeting. For every call it produces:

- **Full transcript**, timestamped.
- **AI summary** in whatever template you pick (sales call, customer success check-in, all-hands, hiring loop, etc.).
- **Action items**, automatically extracted.
- **Highlights**, with deep links to the exact moment in the recording.
- **CRM-ready fields**, like next steps, pain points, competitors mentioned, budget signals.

Every meeting goes into your library forever. Searchable by keyword, attendee, date, deal, or custom tag.

### Layer 2: Claude Reads the Whole Library

Fathom's MCP server (announced October 2025) is what makes the library queryable from Claude. Once it's connected, Claude has access to:

- The list of every meeting you've ever had.
- The transcript of any meeting you ask for.
- The summary, action items, and highlights.
- Search across the entire library by keyword, person, or topic.
- Identity lookups (who is this person on the call, how many times have we talked to them).

This is the part that's underused. Most Fathom customers ask their notes "what happened *yesterday*." With the MCP connected, you can ask **what happened across every meeting you've ever recorded**:

- *"Pull the last three meetings we had with anyone at Acme Corp and summarize the through-line."*
- *"Which deal calls in the last 60 days had the strongest expansion signals?"*
- *"Find every time a prospect said 'too expensive' and group the responses by industry."*
- *"What did I commit to with Brian on March 14th?"*

Claude answers from the actual transcripts, not your memory.

### Layer 3: Fathom Workflows Does the Work

A **Workflow** in Fathom is "when this happens in a meeting, do that automatically." It's the after-the-call automation layer. Every workflow has a trigger and one or more actions:

**Triggers:**
- A new recording is processed (the standard one — fires once per meeting).
- A specific action item is detected.
- A meeting matches a tag, attendee, or template.

**Actions (built-in):**
- Push to HubSpot, Salesforce, Pipedrive, Close, or any major CRM.
- Send specific summary sections (pain points, next steps, decision-makers) to specific CRM fields.
- Update deal stages or contact properties.
- Create Asana tasks from action items.
- Post to a Slack channel with a summary and a deep link to the moment that matters.
- Trigger a Zapier or n8n flow for anything else.

A real workflow looks like this. *Trigger:* a new sales call. *Actions:* write the pain points to the HubSpot deal's "Pain Points" field, write the budget signal to "Budget Stage," post the action items to #sales-deals in Slack, draft the follow-up email in Gmail and stage it for review. Total human work after the call: zero, until you open Gmail to review and send the email.

## Step-by-Step Setup

### Step 1: Connect Fathom to Your Calendar

Install Fathom. Connect your work calendar (Google Workspace or Microsoft 365). Fathom now sees every meeting on your calendar and joins each one in the background. You can set rules for which meetings get recorded (internal only, external only, specific contacts, specific calendars).

There's no bot in the meeting — Fathom records via the meeting platform's native API, not by sitting in the call as an invisible attendee. Cleaner experience for everyone on the call.

### Step 2: Pick Your Summary Templates

Fathom lets you choose or build the summary template per meeting type. Start with the built-in ones:

- **Sales call** — extracts pain, budget, timeline, decision-makers, next steps, competitors.
- **Customer success** — extracts blockers, expansion signals, sentiment, risks.
- **Hiring interview** — extracts strengths, concerns, role fit, follow-up questions.
- **Internal meeting** — extracts decisions, action items, owners.

Fathom auto-routes meetings to the right template based on calendar metadata.

### Step 3: Wire the Fathom MCP into Claude

Fathom has a hosted MCP server at `https://api.fathom.ai/mcp`. To connect Claude Code:

1. Run `claude mcp add fathom https://api.fathom.ai/mcp` (or the equivalent for Claude Desktop).
2. The first time you query it, Claude opens a browser tab for OAuth. Sign in with your Fathom account.
3. Verify the connection by asking Claude *"how many meetings did I have last week?"*

Now Claude can list, search, and read any meeting in your library. The whole archive is one conversation away.

### Step 4: Build Your First Workflow

In Fathom, go to Workflows. The first one to build is the sales-call automation. Configure:

- **Trigger:** new recording, where the meeting template is "Sales Call."
- **Action 1:** push the "pain points" field of the summary into the corresponding HubSpot deal field.
- **Action 2:** push "decision-makers" into the HubSpot contact records as a custom property.
- **Action 3:** post the AI summary + action items to a Slack channel like `#sales-debrief`.
- **Action 4:** trigger a Zapier flow that drafts a follow-up email in Gmail using a template you've stored.

Test it on one real sales call before turning it on for all of them. Verify every field landed in the right place.

### Step 5: Add Workflows for Each Meeting Type

Once the sales-call workflow is solid, build the next ones:

- **Customer success** workflow → updates the customer's account health score in your CRM, flags churn signals to a dedicated Slack channel.
- **Hiring interviews** workflow → writes structured candidate notes into your ATS, schedules the next round if signals were strong.
- **All-hands** workflow → posts the decisions log to a Notion page.

The pattern is the same every time. New recording → extract structured fields → push to the right destinations.

### Step 6: Use Claude for the Long-Tail Questions

The workflows handle the *predictable* post-meeting work. Claude handles the *unpredictable* questions:

- *"Did anyone on the Acme team ever bring up SOC 2 in any call we've had?"*
- *"What was Brian's stated timeline in our March meeting and how does it compare to what he said in May?"*
- *"Pull every customer success call from the last quarter where the customer mentioned a competitor by name, and group them."*

These are the questions that don't fit a templated workflow. Claude reads across the library and answers in seconds.

### Step 7: Train the Team on the Question Habits

The hardest part of this whole setup is not technical. It's behavioral. Most people will keep using Fathom only to summarize the call they just had. Getting your team to ask *"what does the meeting library say about this"* before every customer touchpoint is the actual leverage.

Two things help:

1. **A shared prompts collection.** Fathom lets you save and share canned prompts. Save the ones that work for your team: *"Top 5 objections this quarter," "All-time mentions of <competitor>," "Customers who churned and what they said in their last call."* Make them one-click for everyone.
2. **A weekly meeting-library digest.** A small workflow that, every Friday, asks Claude to summarize the week's meetings across the team and posts to a Slack channel. Reading the digest gets people in the habit of querying the library.

## Adapting This for Other Conversation-Driven Businesses

The same three-layer stack works for any business where conversations are the unit of value.

**Consulting firms.** Every discovery call gets summarized into a structured intake doc and pushed to the project management tool. Claude becomes the institutional memory across decades of client engagements.

**Recruiters and search firms.** Every candidate call gets pushed into the ATS with structured fields. Claude searches across years of candidate conversations to surface re-engagement opportunities.

**Customer support teams.** Every support call gets a workflow that updates the ticket, tags the product feature, and posts a deep link to the bug if one was reported. Claude finds repeating issues across calls.

**Medical and legal practices.** Every consult gets summarized into the relevant case file (with HIPAA-compliant tooling). Claude searches across the practice's history for similar prior cases.

**Real estate agents.** Every showing call gets logged into the CRM with the buyer's stated must-haves and dealbreakers. Claude finds the right inventory match against years of buyer conversations.

Wherever your business runs on conversations, this stack turns those conversations into data you can search and act on.

## Gotchas and Tips

- **Pay for the team plan.** Fathom's free plan caps recordings and doesn't expose the Workflow features or the MCP. If you're more than one person, the team plan is the entry point. Roughly $19-32/user/month depending on the tier.
- **Get permission to record.** Some U.S. states are two-party consent. Most other jurisdictions vary. Fathom plays a brief disclosure at the start of recordings on most platforms, but the responsibility for compliance is yours. Talk to a lawyer about your specific situation.
- **Templates matter more than people expect.** The built-in templates are good, but a custom template tuned for *your* sales motion (your specific competitors, your specific pricing tiers, your specific objection categories) will produce dramatically better Workflow output. Spend an hour tuning the template before you build the workflows.
- **Don't push everything to the CRM.** It is tempting to write every summary section into a custom CRM field. Don't. CRMs get unusable when there are 80 fields per record. Pick the 3-5 that actually drive your team's behavior and push only those.
- **Tag obsessively for the first month.** The MCP queries are only as good as the meeting metadata. Tag every meeting with the customer name, the deal stage, the meeting purpose. After a month, your library is queryable by every dimension you care about. After three months, it's a competitive advantage.
- **Review the workflow output the first week.** Workflows can write incorrect data to your CRM if the template extracts something wrong. For the first week of every new workflow, manually review every record it touches. Trust the system after you've watched it work.
- **The MCP is beta.** Fathom's MCP integration is still in beta as of this writing. Expect occasional rough edges (rate limits, slow first responses). The product is rapidly improving.

## What This Replaces

Before this stack:
- **Note-taker:** $15-25/user/month (Otter, Fellow, Granola)
- **Sales-call analytics:** $80-150/user/month (Gong, Chorus)
- **Manual after-call admin:** 3 hours/day, per rep
- **The "where did I see that?" tax:** unmeasured but enormous

After this stack:
- **Fathom team plan:** $19-32/user/month
- **Claude usage:** $5-20/user/month depending on query volume
- **After-call admin:** workflow-handled
- **The library is your second brain:** queryable forever

One vendor. One conversation. Every meeting your business has ever had, awake and useful.

---

## Keep Reading

- **[Two Prompts and Your HubSpot Just Replaced Your Enrichment Tool](/playbooks/hubspot-research-agent/)**: The sibling for the CRM-research side. Together these two playbooks cover the full "before the call, during the call, after the call" loop.
- **[AI Whispers What to Say During Your Cold Calls in Real Time](/playbooks/ai-cold-call-coach/)**: Before-the-call and during-the-call coaching. Pair it with Fathom for after-the-call automation and you've covered the whole conversation surface.
- **[Give Your AI a Second Brain That Gets Smarter Every Day ($0/Month)](/playbooks/ai-second-brain/)**: Generic second-brain version. This Fathom playbook is the meeting-specific specialization — for businesses that run on conversations, this is the better starting point.
