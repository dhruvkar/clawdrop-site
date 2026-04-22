---
layout: blueprint.njk
title: "He Let an AI Triage 180 Emails a Day. Here's the Stack."
description: "A real operator runs 180 emails a day through an AI triage agent. We show the setup, the tone doc, the rules, and the A/B numbers from switching models. Stop losing your morning to email."
date: 2026-04-22
difficulty: Intermediate
cost: "$25-60/month"
timeToSetup: "A weekend to build, a week to tune"
originalSource: "https://www.reddit.com/r/openclaw/comments/1spxo7t/i_compared_my_actual_token_usage_on_opus_46_vs_47/"
originalAuthor: "r/openclaw operator"
issueNumber: 10
permalink: /blueprints/inbox-triage-agent/
tags:
  - email
  - inbox
  - executive-assistant
  - founder-ops
  - triage
  - automation
  - operators
  - solopreneur
---

## What You'll Build

An AI agent that reads every email that hits your inbox and handles each one the way you would. Most get sorted, archived, or auto-replied. The few that need you end up in a short daily list with a draft reply attached. You pick the draft, edit the one line that matters, hit send.

Concretely, the agent does four jobs in sequence on every new message. It classifies the email (is this real, is this spam, is this a receipt, is this a customer). It decides the action (file, auto-reply, draft for your review, forward, escalate). It executes the boring path automatically. It queues the important stuff with a draft already written in your voice.

The operator this blueprint is based on runs this agent through about 180 emails a day in his actual business. He ran a real A/B test, switching the underlying AI from one model to another across six days of identical email volume, and measured the difference in token cost and output quality. His numbers are in the guide below. They are not projections. They are what he actually spent.

You walk away with: your inbox on autopilot for 85% of traffic, a 15-minute morning review instead of a 90-minute one, and a triage layer that gets sharper the longer you run it.

## Why Email Is The Worst Part Of Running A Business

Your inbox is not a communication tool. It is a to-do list that strangers can write to.

About 60% of what arrives is not really for you. It is cc'd, it is a newsletter, it is a delivery confirmation, it is a calendar back-and-forth about whether Thursday at 2 works. Another 25% needs a response, but the response is boring. You are going to type the same five sentences you have typed a hundred times. The last 15% is the part that actually uses your brain. That is the part you should be spending time on.

Instead, the usual day looks like this. You open the inbox at 8 AM. You spend 30 minutes doing low-grade filtering. You spend another 40 minutes replying to the "can you send me the deck" and "what's your Calendly" and "did you get my invoice" emails. Somewhere in the fog of the first hour, you miss a real customer email that needed an hour of real attention, and you do not see it until 4 PM.

The founder-operator version is worse than the normal version. You are the CEO, the sales lead, the operations person, the finance approver, the support escalation point, and the one who signs off on marketing hires. Every role dumps email into the same inbox. You need different drafts for different threads. The customer apology reads nothing like the investor update reads nothing like the vendor haggle.

You do not need better email software. You need a triage layer on top of your existing inbox. That layer is what we are building here.

The business math is also stark. If you make $150 an hour and you lose 90 minutes a day to inbox triage, that is $225 a day or about $58,000 a year in lost billable capacity. A $40-a-month tool that gets you back to 20 minutes a day is not a software purchase, it is a salary raise.

## The Pattern

Every email runs through the same four-stage loop. The agent does stages 1 through 3 automatically. Stage 4 is the only thing you see.

```
[1] CLASSIFY
    -> is it spam? receipt? customer? vendor? meeting?
    -> what domain is this from? what does my rule file say about this domain?
         |
         v
[2] DECIDE
    -> file, auto-reply, draft for me, forward to teammate, escalate now
         |
         v
[3] EXECUTE (automatic)
    -> receipts filed, "got it thanks" replies sent, calendar holds proposed
         |
         v
[4] QUEUE (for your morning review)
    -> 5-12 threads, each with a draft reply in your tone
```

The leverage point is stage 3. The agent handling the boring path automatically is what drops your 90-minute inbox morning to a 15-minute one. Everything in stage 4 is stuff you were going to touch anyway. The win is deleting the other 90%.

## Step-by-Step Setup

### Step 1: Install OpenClaw and Connect It To Your Inbox

OpenClaw runs on any cheap machine. A Mac mini on your desk works. A $5-a-month VPS works. You do not need exotic hardware.

Connect it to your email via whatever your provider supports.

- **Gmail or Google Workspace:** Gmail API with OAuth. The agent gets read and modify scope. No password sharing, no IMAP trickery.
- **Outlook or Microsoft 365:** Microsoft Graph API with OAuth. Same read/modify scope.
- **Fastmail or any IMAP:** IMAP with an app-specific password. Works but slower and less reliable on high volume.

For anything over 50 emails a day, use the API route. IMAP polling becomes the bottleneck fast.

The first-run test is to let the agent read your inbox for 48 hours without taking any actions. Just classify and log. You review the classifications on day three to check that the agent is understanding what each email actually is. This is where you catch the "every email from my accountant is getting flagged as spam" problems before they become disasters.

### Step 2: Write Your Tone Document (SOUL.md)

This is the single highest-leverage 30 minutes you will spend. You write one markdown file that teaches the agent how you sound.

The operator this blueprint is based on calls his file `SOUL.md`. It is exactly what it sounds like. Here is the format.

```markdown
# How I Write Email

## My Voice At a Glance
- Short paragraphs. Two or three sentences max.
- No "I hope this finds you well." No "just circling back."
- I use lowercase for informal emails (friends, vendors I know).
- I sign with my first name. No signature block unless it's a cold intro.
- I do not use exclamation points except in genuine enthusiasm.

## By Audience

### Customers
Direct, warm, never sycophantic. I acknowledge the issue first, then
propose a fix, then offer to jump on a call. I never say "sorry for
the inconvenience." I say "this is on us. here is what we are doing
about it."

### Investors
Punchy, numeric, concrete. I lead with the metric. No fluff.
Updates follow: what happened, what that means, what's next.

### Vendors
Friendly but firm on terms. I do not negotiate on price in email,
I push to a call. Exception: anything under $500, I just say yes or no.

### Cold outreach from strangers
Polite one-sentence decline or "not right now but let me refer you to X."
I do not ghost. I reply to every cold email.

## Rules I Always Follow
- Never commit to a meeting time without checking calendar first.
- Never send pricing in writing until the prospect has had one call.
- Never apologize for a late reply. Just reply.
- Never use the word "leverage." Never use the word "synergy."

## Sample Emails I Actually Sent
[Paste 5-10 real emails you sent, with minimal redaction. This is how
the agent learns your rhythm. More samples = sharper tone matching.]
```

The samples at the bottom matter more than the rules. The agent learns your voice by pattern-matching against real examples. Five real emails beats twenty rules. Ten real emails beats fifty rules.

### Step 3: Write Your Rules File

The tone doc teaches voice. The rules file teaches triage. Here is the shape.

```markdown
# Inbox Rules

## Always Escalate Immediately
- Any email from @paying-customer-domain.com (customer list in customers.csv)
- Any email containing "legal" or "lawyer" or "subpoena"
- Any email with a financial number over $5,000 in subject or first paragraph
- Any email from @board-member-domains (board.csv)
- Any payment-failure email from Stripe, Mercury, Ramp

## Always Auto-File (No Reply)
- Receipts from known vendor list (vendors.csv)
- Newsletter digests (inbox folder: Newsletters)
- Calendar invite confirmations (just mark read)
- Delivery notifications (inbox folder: Shipments)

## Always Auto-Reply With Template
- "What's your Calendly?" -> send calendar link, propose 3 slots.
- "Can you send me the deck?" -> send deck link, flag for follow-up in 3 days.
- "Are you available Thursday?" -> check calendar, propose or counter.

## Draft For My Review
- Anything from a paying customer not covered above
- Any intro from a mutual contact
- Any thread with more than 3 messages already
- Any email asking me to commit to something specific

## Forward and Assign
- Support tickets -> @support-teammate
- Invoice questions -> @finance-teammate
- Press/media -> @marketing-teammate

## Never Reply, Just Mark Read
- Cold outreach with no personalization
- LinkedIn connection request notifications
- Password reset confirmations
```

The rules file evolves. Week one it is short. Week four it has 40 rules. By month three it has grown a section for "seasonal" rules ("from December 1 to January 15, all press inquiries go to PR agency"). Treat it as a living document.

### Step 4: Run In Observer Mode For 48 Hours

Do not let the agent actually send, file, or forward anything yet. Run it in observer mode for the first two days. It classifies, it decides, it drafts, but the actions go to a log file instead of executing.

Read the log every evening. The first night you will find a dozen edge cases the rules missed. You update the rules. The second night you find five more. You update again.

After two days of observer mode, turn on auto-file first. Filing is the lowest-stakes action. If the agent files something it should not have, you find it in the filed folder and move it back. No damage done.

After a week of auto-file, turn on auto-reply for the Calendly-style templates. After two weeks, turn on drafts for your review queue. After three weeks, the whole system is live.

Do not skip this. Every operator who skipped observer mode came back a week later to find the agent had been auto-replying "got it, thanks" to an investor update.

### Step 5: Wire The Morning Review

When the agent queues items for your review, they need to land somewhere you will actually look. Three options, in rank order.

- **A single daily email to yourself at 7 AM.** Called "Inbox Digest." Lists the threads. Each thread has a one-sentence summary, the draft reply pre-written, and a one-click link to "send draft" or "open for edit."
- **A dedicated inbox folder.** "Needs My Attention." The agent drops threads here with the draft reply quoted at the top.
- **A Telegram or Slack DM.** The agent messages you at 7 AM with the digest. You reply "send 1, edit 2" and the system does the rest.

The daily email is the simplest. It is also the most robust. It survives your agent breaking, your Slack being down, your phone being dead. It is always there.

### Step 6: Run The A/B Test (The Real Numbers)

This is the part worth showing in full because it is where the blueprint stops being theory.

The operator ran his triage agent on two different AI models for three days each, same email volume, same tone doc, same rules, same behavior. Here are his numbers.

| Metric | Opus 4.6 | Opus 4.7 | Delta |
|---|---|---|---|
| Email volume per day | ~180 | ~180 | flat |
| Input tokens per day | 847,000 | 612,000 | -28% |
| Output tokens per day | 123,000 | 94,000 | -24% |
| Draft quality (his 1-10 rating) | 7.8 | 7.9 | flat |
| Auto-file errors | 2 across 3 days | 1 across 3 days | improved |
| Incorrectly escalated | 4 across 3 days | 3 across 3 days | flat |

Translating tokens to dollars at list price, he saved roughly $6 per day, or about $180 per month on this one workflow, by switching models. The quality was a hair better. No tuning was required on the rules or tone file.

The lesson here is not "use model X." The lesson is "the newer model is usually cheaper and as good, test it when it comes out." Most operators do not. Most operators set up their stack once and never reconsider. You should reconsider every time a new model ships. It takes six days of A/B testing.

### Step 7: Set A Weekly Tuning Cadence

The agent stops getting better the moment you stop tuning it.

Every Friday, 20 minutes:

1. **Review draft-reply overrides.** For every draft you significantly rewrote, look at why. Is there a pattern? Add a rule or a tone example to fix the pattern.

2. **Review wrongly-escalated items.** If the agent is sending you stuff it should have handled, tighten the rules. If the agent is handling stuff it should have sent you, loosen the rules.

3. **Prune the rules file.** Any rule that has not fired in 30 days is probably obsolete. Delete it. Short rules files beat long ones.

4. **Update SOUL.md with one new sample.** Pick one draft you loved from this week and add it verbatim. Pick one you hated and add a "never write like this" note. Keep the file drifting toward "more like me."

Twenty minutes a week. That is the entire ongoing maintenance cost of a system that replaces three hours of daily inbox triage.

## Lanes That Work

This blueprint fits anyone whose inbox is their actual job and not their actual job.

**Founder-operators of 5-50 person companies.** Primary audience. You are cc'd on everything and the main on half of it. Your inbox is the organizing force of your entire day. This is the one automation that gives you your day back.

**Solo consultants and service-business owners.** Every billable hour lost to inbox triage is a direct hit to revenue. The ROI math is embarrassingly clean at $150+ an hour.

**Executive assistants managing multiple principals.** The stack scales. One instance with three SOUL.md files (one per principal) handles three inboxes at once. The EA still owns the voice decisions. The agent owns the tedium.

**Agency owners with three or four client inboxes to monitor.** Each client's inbox gets its own rules file and SOUL.md. The agent routes, drafts, and escalates across all of them. You review one daily digest instead of four.

**Investors and advisors.** You get 40 cold pitches a day. The agent filters, auto-declines with your template, and surfaces the real signal. You get back the hour a day you lost to LinkedIn message clones.

What does not work: an inbox with 10 emails a day. The overhead of building and tuning the system exceeds the time you save. You need at least 50 emails a day for the ROI to work.

## What Changes After Setup

**Day 1.** You set up the skill, write SOUL.md, write the rules, and run in observer mode. You do nothing differently in your actual inbox yet.

**Day 3.** You review the observer log. You find 12 edge cases. You update the rules. You turn on auto-file. You watch the filed folder for a day to catch mistakes.

**Week 1.** Auto-reply is on for the three most common templates. You notice your inbox is quieter. You do not know if that is because fewer emails arrived or because the agent handled them. You check. The agent handled 38% of incoming emails without touching you.

**Week 2.** The morning digest lands for the first time. Eleven items. You handle eight of them by sending the pre-written draft with a one-word edit. You spend 18 minutes on inbox before your 9 AM block. You are used to 90 minutes.

**Month 1.** You have stopped looking at your inbox during the day. You check the evening digest at 6 PM. The rest of the day, you trust the agent to escalate what needs you.

**Month 3.** You go on a four-day trip. You do not check email. When you come back, the digest has 47 items queued across the four days. You handle them in 40 minutes. There are no fires. The agent handled the real-time stuff. This is the moment you realize you bought a real thing, not a toy.

## Gotchas and Tips

**Observer mode is not optional.** The most expensive mistake operators make is turning on auto-actions before the rules are tuned. Two days in observer mode saves a week of apologizing to investors and customers for wrong auto-replies.

**Keep the SOUL.md file under 1,500 words.** Long tone docs confuse the agent. The most important content is the 5-10 real email samples at the bottom. Short rules section, rich examples.

**Never auto-reply to anyone who has paid you money.** The rules file should hard-escalate anything from a customer email domain. You are the face of the business. The agent is not.

**Escalation should be rare and loud.** If the agent escalates more than 5 items a day, your rules are wrong. Tighten them. Escalation is for genuine exceptions, not "I'm not sure, you decide."

**Keep your draft-review override rate above 30%.** If you are sending 90% of drafts without editing them, the agent might be too conservative (drafting things it should have sent) or you might be under-reviewing (risky). Somewhere in the 30-60% edit rate is the healthy zone.

**Do not let the agent learn from your sent folder automatically.** Tempting, but it picks up all your bad email habits (the rushed one-liners, the cranky replies when you were tired). Curate the samples in SOUL.md by hand. Quality over volume.

**Check the filed folder for the first 30 days.** False-file is the worst failure mode because it is invisible. The email is gone from your inbox. You do not know it was sent to you. Spend 5 minutes every evening looking at what got filed until you trust it.

**Test new models every release cycle.** The operator's A/B found a $180/month savings by swapping one line in a config file. This is the least glamorous optimization in the stack and one of the most profitable.

**Back up SOUL.md and the rules file.** They are the only irreplaceable artifacts in this whole system. Check them into a private git repo. If you lose them, you are starting from scratch.

**Keep a "kill switch" command.** One command that disables all agent actions and puts the inbox back in your hands. Use it when you notice the agent drifting. Tune. Turn it back on. Having the switch makes you more comfortable letting it run.

---

## Keep Reading

- **[Give Your AI a Second Brain That Gets Smarter Every Day ($0/Month)](/blueprints/ai-second-brain/)** — The knowledge layer that pairs with the triage layer. Your agent remembers what matters, not just what came in.
- **[Teach Your AI to Stop Making the Same Mistake Twice](/blueprints/self-improving-agent/)** — Bolt this on after month one to turn every draft override into a permanent rule.
- **[He Spent $1,263 on AI in One Month. Then He Capped It.](/blueprints/ai-budget-cap/)** — The cost-control layer. Matters more when your triage volume scales past one inbox.
