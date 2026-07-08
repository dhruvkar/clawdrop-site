---
layout: playbook.njk
title: "Score Every Lead 0-100 and Reply in 90 Seconds, Even at 2 AM"
description: "A Claude Code agent reads every inbound lead, scores it 0-100, and sends a personalized reply in 90 seconds. You only ever see the top 15%. Four files."
date: 2026-07-08
difficulty: Beginner
cost: "A few cents in AI usage per lead, plus a $5/month server or a spare PC at home."
timeToSetup: "An afternoon. One folder, four files, and a webhook URL."
originalSource: "https://www.youtube.com/watch?v=2yNE93UAWk4"
originalAuthor: "BizflowAI (YouTube)"
issueNumber: 20
permalink: /playbooks/client-intake-lead-scoring-agent/
tags:
  - sales
  - lead-qualification
  - client-intake
  - automation
  - small-business
  - service-business
  - solopreneur
---

## Tools

- [**Claude Code**](#aff-claude-code): the AI agent that reads each lead, scores it, and writes the reply. The whole system is one folder it runs from.
- [**Anthropic**](#aff-anthropic): the company behind Claude. You pay a few cents per lead in usage.
- [**Gmail**](#aff-gmail): where the drafted replies go out from (any email provider with sending access works).
- [**Google Sheets**](#aff-google-sheets): the running log. Every lead, score, and reply gets appended as a row you can scan later.
- [**Telegram**](#aff-telegram): the free messaging app that pings your phone when a hot lead comes in, and sends a red alert if the system ever goes down.
- [**Calendly**](#aff-calendly): the booking link that only the best leads ever see.

## What You'll Build

A client-intake agent that sits behind your contact form 24 hours a day. Every time someone fills out the form, the agent reads what they wrote, scores them 0 to 100 based on rules you set once, and sends one of three kinds of replies, personalized to what they actually said, in under 90 seconds.

Low scorers get a polite no. Middle scorers get a warm reply with two qualifying questions. The top 15 percent, the real buyers, get a personalized response that references their exact situation and includes your booking link. Those are also the only ones that ping your phone.

This comes from an automation builder named Lazar who runs the exact system daily on his own inbound leads. Before it, he was triaging up to 40 form submissions a day, spending about two hours on sorting and replies. Now he reviews four to six. The agent handles the rest while he sleeps.

The whole thing is one folder with four files inside. No CRM, no Zapier, no automation platform subscription.

## The Problem: The Good Lead Is Buried Under 39 Bad Ones

If you run a service business with a contact form, you already know the shape of this. Leads trickle in, some days five, some days forty. Most are junk. Wrong budget. Students asking for free work. Someone who wants a $200 version of a $20,000 project.

But once or twice a week, a real buyer lands in that pile. A director of operations at a mid-sized company. A founder with actual budget. A referral from a past client.

And here is what kills you: by the time you open the inbox that evening, sift through the noise, and write a thoughtful reply, that buyer has already emailed three of your competitors.

The speed-to-lead research keeps repeating the same finding. Reply within five minutes and your odds of converting are roughly nine times higher than replying an hour later. Most solo operators reply in six to twelve hours. You are not losing deals because you are bad at sales. You are losing them because you were asleep, or on a call, or you skipped the inbox because the last twenty leads were garbage.

## How It Works

The system is one folder, called something like `intake_agent/`, running on any cheap always-on machine. A $5-a-month server works. So does an old PC in your closet.

```
CONTACT FORM (Typeform, Tally, your website)
        |
        v  webhook fires on every submission
SMALL SCRIPT hands the lead to Claude Code
        |
        v
CLAUDE reads the lead, applies your rubric
  budget signals ...... up to 30 pts
  role signals ........ up to 25 pts
  timeline signals .... up to 25 pts
  red flags ........... up to -20 pts
        |
        v
SCORE decides the tier
  0-40 ....... polite decline + resource link
  50-75 ...... warm reply, 2 qualifying questions
  76-100 ..... personalized reply + booking link
        |
        v
EMAIL goes out (under 90 seconds)
ROW appended to Google Sheet
SCORE above 75? -> Telegram ping to your phone
```

Inside the folder there are exactly four things:

**1. A CLAUDE.md file.** This is the persona and the rules. It tells Claude who it is writing as: your name, your company, your tone. It lists what it must never do: never quote a price, never promise a timeline, never book anything directly. And it states the goal: qualify the lead, respond warmly, hand the best ones to you. Two paragraphs of plain writing. That is the whole "programming."

**2. A scoring rubric file.** The brain of the system. You break 100 points into four buckets. Budget signals, up to 30 points: did they mention a budget range, team size, revenue? Role signals, up to 25: are they a founder or head of ops, or a student? Timeline signals, up to 25: words like "this quarter," "ASAP," "we're launching." And red flags, up to 20 points subtracted: "can you do it for free," "I have an idea," a personal Gmail with no company attached. You write this once, in plain English. Claude reads it fresh for every lead.

**3. A reply templates folder.** Three templates, one per tier. Here is the part that makes this an agent instead of an autoresponder: Claude does not copy the templates verbatim. It uses them as a voice guide and rewrites each reply in the context of what the person actually wrote.

**4. A small webhook script.** About 20 lines of Python. It listens for your form provider to send over a new submission, hands it to Claude with one instruction (read the lead, apply the rubric, return the score, tier, and drafted reply), then sends the email, logs the row to a Google Sheet, and fires the Telegram ping if the score clears 75.

Here is a real lead moving through it. A form submission lands at 2 AM. Three paragraphs from someone running a logistics company: 40 employees, 20 hours a week lost to manual dispatch coordination, wants to know if AI can help. Claude scores it. Budget signals, 22 points (real company, real pain with a real cost). Role, 20 (operations lead). Timeline, 20 (they said "before Q1"). Red flags, none. Total: 78. Tier 3.

Claude drafts a reply that opens with a specific line about dispatch coordination, asks one clarifying question about their current systems, and drops the booking link. Sent by 2:03 AM. Telegram pings the owner's phone. By the time he wakes up, the lead has answered the question and booked a slot.

## Setting It Up

**Step 1: Write the CLAUDE.md persona file.** Open a folder called `intake_agent/` and write two paragraphs: who the agent writes as, what it must never do (prices, timelines, direct bookings), and what the goal is. Plain English. This file is the difference between replies that sound like you and replies that sound like a robot.

**Step 2: Write your scoring rubric.** Think about your last ten good clients and your last ten time-wasters. What did the good ones say in their first message? Turn that into the four buckets: budget signals (up to 30), role signals (up to 25), timeline signals (up to 25), red flags (minus up to 20). Save it as its own file.

**Step 3: Draft the three reply tiers.** A polite decline with a helpful resource link for low scorers. A warm reply asking two qualifying questions, no calendar link, for the middle. A personalized reply with your booking link for the top tier. Remember, these are voice guides, not form letters. Claude rewrites them per lead.

**Step 4: Wire up the webhook.** A short script (Claude Code can write it for you if you describe the flow) listens for form submissions, passes each one to Claude with the rubric, then sends the reply through your email, logs to a Sheet, and pings Telegram on high scores. Point your form provider's webhook setting at it.

**Step 5: Test with fake leads, then add a heartbeat.** Feed it a dream client, an obvious time-waster, and a maybe. Check the scores and read every draft. Once it behaves, add the reliability piece from the original build: a check every 15 minutes that sends a test payload to the webhook and expects a healthy response. If it fails twice in a row, you get a different, red Telegram alert. In eight months of running this, the builder's alert has fired twice, both times because his internet went out.

## The Business Angle

Run the math on what slow, manual intake actually costs you.

First, the time. Two hours a day of reading and replying to leads, most of them junk, is ten hours a week. At any reasonable billable rate for a service business owner, that is real money spent doing a task that requires judgment for about 15 percent of the pile and pure pattern-matching for the rest.

Second, the leak. The nine-times conversion gap between a five-minute reply and an hour-later reply means the most expensive thing in your business might be the hours between a good lead arriving and you seeing it. One lost retainer client a quarter, at typical service-business deal sizes, dwarfs everything this system costs to run.

Now compare the alternatives. A virtual assistant who monitors your inbox during business hours typically runs several hundred to over a thousand dollars a month, industry-typical rates, and still sleeps at night. An answering service takes messages but cannot score a lead or write a reply that references dispatch coordination. Real estate teams solve this with inside sales agents whose salaries run well into five figures a year.

This system costs a few cents per lead in AI usage plus a $5-a-month server, answers in 90 seconds at 2 AM, applies your exact judgment on every message, and never gets bored of the junk. In the original build, roughly 60 percent of leads get filtered out with a polite tier-1 reply, another 25 percent get the tier-2 qualifier and either self-select out or come back with real information, and the top 15 percent get the fast, warm, personalized response that wins deals.

You still close the deals. The agent just makes sure you only spend your attention on the ones worth closing.

## Gotchas

- **The rubric is the product.** A generic rubric produces generic scores. Spend your effort on step 2, using your real client history. Everything else is plumbing.
- **Never let it quote prices or promise timelines.** That rule lives in CLAUDE.md for a reason. The agent qualifies and warms up leads. Committing your business to anything is your job.
- **Read every draft for the first week.** Log everything to the Sheet and review daily until you trust the scoring. Adjust the rubric in plain English when a score feels wrong. That is the whole tuning process.
- **A silently dead agent is worse than no agent.** If the webhook dies and leads go unanswered while you assume they are handled, you are worse off than before. Do not skip the health-check heartbeat.
- **Mind the scoring edges.** The tiers in the original build run 0-40, 50-75, and 76 and up. Decide explicitly what happens to a lead that lands between bands so nothing falls through.
- **A fast reply is a promise.** If the agent responds in 90 seconds and then you take four days to show up on the booked call, the speed backfires. The system buys you the buyer's attention; you still have to use it.

## Who Should Steal This

Any service business owner who gets inbound form leads and cannot answer them instantly: consultants, agencies, freelancers, law firms, contractors, financial advisors, anyone whose good leads arrive mixed into a pile of bad ones. If you have ever found a great lead in your inbox two days late, this is the first agent worth building.

---

## Keep Reading

- **[His Life Insurance Agency Texts and Calls New Leads in 2 Minutes. Automatically.](/playbooks/life-insurance-2-minute-follow-up/)**: the same speed-to-lead obsession, applied to an insurance agency's phone and SMS follow-up.
- **[The Inside Sales Agent That Never Sleeps (For Real Estate)](/playbooks/realtor-inside-sales-agent/)**: what this pattern looks like when it replaces a full-time ISA on a real estate team.
- **[He Let an AI Triage 180 Emails a Day. Here's the Stack.](/playbooks/inbox-triage-agent/)**: the same score-and-route idea, pointed at your whole inbox instead of just the contact form.
