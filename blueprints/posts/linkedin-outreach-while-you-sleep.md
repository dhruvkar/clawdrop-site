---
layout: blueprint.njk
title: "100 Personalized LinkedIn DMs. Sent Overnight. Zero Copy-Paste."
description: "The blueprint for running LinkedIn outreach through an AI agent. Personalized messages at human pace, sent from your own account. For founders and service-business owners who know outreach works but can't find the hours."
date: 2026-04-22
difficulty: Intermediate
cost: "$30-80/month"
timeToSetup: "A weekend to build, a week to tune"
originalSource: "https://www.youtube.com/watch?v=jH-ogP9IFWw"
originalAuthor: "OpenClaw Browser Relay tutorial"
issueNumber: 10
permalink: /blueprints/linkedin-outreach-while-you-sleep/
tags:
  - linkedin
  - outreach
  - sales
  - lead-generation
  - b2b
  - solopreneur
  - revenue
  - browser-automation
---

## What You'll Build

An AI agent that does your LinkedIn outreach at scale. It runs on your own LinkedIn account in your own browser. It reads the profiles on a target list, writes a personalized message for each one based on what that person actually posts and does, and sends at a pace that looks human because it is technically a human (you, sitting in your office chair, with a laptop that is busy).

You did not buy a list. You did not hire a virtual assistant. You did not spam 800 people with the same message. You did not get your account flagged. You got your time back.

This is built using a pattern that quietly took over in the last six months. Instead of using the LinkedIn API (which does not allow outreach) or a third-party bot that pretends to be you (which gets your account banned), the AI drives a real Chrome tab on your real computer. To LinkedIn, it looks the way a human looks, because it is clicking the real buttons in the real interface at human speed. The difference is that the human is sitting across the house eating dinner while it happens.

Volume is realistic. A good run is 30 to 60 personalized DMs in a night, with reply rates in the 6-12% range on a well-targeted list. That is three to seven real conversations a night while you sleep.

## Why Cold Outreach Doesn't Happen

Cold outreach works. You already know this. You have seen a peer land a contract because they sent the right message to the right person. You have tried it yourself and it worked the few times you actually sat down to do it.

The problem is the few times. Outreach is the kind of work you always put last because it feels slow and it never feels urgent. A good LinkedIn message takes 8 to 12 minutes if you want it to actually land. Look at the profile. Read the last post or two. Find the hook. Write a short DM that sounds human. Send. Repeat.

Multiply that by 50 prospects a week and you have a full day of work that you will not actually do. So you do nothing. Or you pay an agency $3,000 a month to do a watered-down version that has your name on it but does not sound like you, and the replies are so generic that even when someone is interested, you cannot continue the conversation because you have no idea what was said in the opener.

There is a third option now that was not practical a year ago.

The economics make this a no-brainer for any service business. If one customer is worth $5,000 over their first year, you need a 0.2% conversion rate across a full year of running this to break even at $80/month. Anyone running outbound will tell you the real conversion is 10 to 50 times that on a qualified list. The only reason most founders do not run outbound is that they cannot find the hours for it. The system removes the time constraint.

## The Pattern

Outreach is a pipeline. The agent slots into three of the five stages. You still own the two that matter.

```
[1] TARGETING         <-- YOU: define the ICP and build the list
     |
     v
[2] RESEARCH          <-- AGENT: read each profile, find the hook
     |
     v
[3] WRITING           <-- AGENT: draft personalized message using playbook
     |
     v
[4] SENDING           <-- AGENT: send from your account, at human pace
     |
     v
[5] REPLY HANDLING    <-- YOU: respond to the conversations that matter
```

Stage 1 is the highest-leverage thing in the whole pipeline. A 200-person list of perfect fits beats a 2,000-person list of maybes every single day. The agent cannot fix bad targeting. If you give it a sloppy list, you get sloppy outreach at scale. Spend your time on stage 1.

Stage 5 is the thing you are outsourcing yourself to yourself. The agent creates the conversations. You have the conversations. That is a good trade.

## Step-by-Step Setup

### Step 1: Install OpenClaw and the Browser Relay

OpenClaw runs on a machine you own. A Mac mini is ideal because it sits on your desk, stays on, and has enough horsepower. A small VPS works if you are comfortable with setup. A regular laptop works if you leave it on overnight.

The Browser Relay is a Chrome extension that connects your Chrome tab to the OpenClaw agent. Once installed, the agent can see your browser (what page you are on, what is on screen) and drive your browser (click, scroll, type). You stay logged into LinkedIn like normal. The extension does not touch your credentials.

Install order:

1. OpenClaw onboarding (`openclaw onboard` in the terminal, one-time setup)
2. Chrome browser on the same machine
3. Log into LinkedIn in Chrome, make sure your session is healthy
4. Install the OpenClaw Browser Relay extension
5. Pair the extension with your OpenClaw instance (one-click auth inside the extension)

Test before you go further: ask the agent to open a LinkedIn profile URL and read you the headline and last post. If that works, the stack is wired up.

### Step 2: Build The Target List

Your list is a spreadsheet with three required columns and up to three optional ones.

**Required:**
- `name` (first and last)
- `linkedin_url` (direct profile URL, not a search result)
- `segment` (one of: "hot", "warm", "cold"). You tag this yourself. It changes which playbook the agent uses.

**Optional but high-value:**
- `context` (one sentence: "met at industry conference," "runs a dental clinic in Austin," "referred by Jane")
- `company_domain` (for cross-referencing with other enrichment)
- `do_not_mention` (a note like "not yet live" or "was recently acquired by X" to keep the agent from stepping in it)

Sources for the list depend on your ICP:

- **Sales Navigator search, exported.** Best quality if you already have Sales Nav. Export 200-500 at a time.
- **Apollo.io, Clay, or similar enrichment tools.** Good for building from a firmographic filter.
- **Your existing CRM.** Old leads that went cold. Your list of everyone who downloaded a lead magnet six months ago.
- **Manual scraping of a conference attendee list or an industry association directory.** Slow but the highest conversion.

The rule of thumb is quality over volume. 200 truly-qualified prospects out-perform 2,000 maybes. Every message the agent sends costs you a tiny slice of your LinkedIn reputation. Do not spend it on bad fits.

### Step 3: Write The Playbook File

This is where outreach stops being robotic. You write a single markdown file that defines how you do outreach. The agent reads this before every single send.

```markdown
# Outreach Playbook

## Who I Help
Small accounting firms, 5 to 25 employees, owner-operated. Revenue
between $500K and $5M. Primary pain: too much time on client
communication, not enough on actual accounting work.

## What I Offer
Done-for-you AI triage for their client email and a monthly retainer
to keep it tuned. First 30 days free.

## The Three Hooks
1. They posted about hiring an admin or bookkeeper in the last 90 days.
   Angle: "you don't need another admin, you need a triage layer."

2. Their firm launched a new service offering in the last 6 months.
   Angle: "new service = more client emails. here's how to not drown."

3. They have another client in their city who I already work with.
   Angle: "[existing client] at [firm] got X results, you two probably
   talk, I thought I'd reach out."

## My Voice
- Lowercase for informal DMs.
- I sign with just my first name.
- I never use "I hope this finds you well." Or "just circling back."
- I never pitch in the first message. Ever.
- My first message is always short (40-80 words) and ends with a
  specific question, not a generic "let's chat."

## Sample Messages I Actually Sent
[Paste 5-8 real messages you actually sent on LinkedIn, with the
recipient names redacted. This is how the agent learns your rhythm.]

## What I Will Never Say
- Never say "leverage" or "synergy" or "align."
- Never ask for a meeting in the first message.
- Never mention AI, automation, or agents in the opener.
- Never reference the recipient's profile photo or anything physical.
- Never mention my services by name. The first message is about them.

## When To Skip A Profile
- If their last LinkedIn activity is more than 6 months ago, skip.
- If they already work at a company in my customer list, skip.
- If their profile is set to "open to work," skip (wrong buying moment).
- If their headline contains "retired" or "former," skip.
- If we have no mutual connections and they have fewer than 300
  connections themselves, skip.
```

The playbook does two jobs. The first is what to write. The second is what to skip. The second job is what keeps the system from spamming.

### Step 4: Run The First Batch In Dry-Run Mode

Never send on day one. Run dry-run first.

Dry-run means the agent does everything except hit "send." It opens the profile, reads it, writes the message, and logs the message to a file. You review the log before you enable sending.

```
DRY RUN: 2026-04-22, 23:30 UTC

[1/30] Sarah Johnson, https://linkedin.com/in/sarahjohnson/
Hook matched: posted about hiring a bookkeeper 2 weeks ago.
Drafted message:
"hi sarah - saw your post about hiring a bookkeeper.
 quick thought: most firms I talk to realize they need a triage
 layer, not a bookkeeper. what's the bottleneck actually look
 like on your side right now?"
Status: DRAFT ONLY (dry run)

[2/30] Marcus Reyes, https://linkedin.com/in/marcusreyes/
Hook matched: new service offering launched Q1.
Drafted message:
"marcus - congrats on the advisory rollout. usually when firms
 launch a new service, client email volume doubles before revenue
 catches up. how are you handling that right now?"
Status: DRAFT ONLY (dry run)

[3/30] SKIP: Mia Chen (profile inactive 8 months, per playbook rule)

[4/30] Priya Patel, https://linkedin.com/in/priyapatel/
Hook matched: mutual client John Smith at Smith+Co.
Drafted message:
"priya - john at smith+co and i have been working together on
 [thing]. he mentioned your name last month. figured i'd reach
 out directly instead of asking him for the intro. any reason we
 shouldn't talk?"
Status: DRAFT ONLY (dry run)
```

Read every message. Rewrite the ones that do not sound like you. Note the patterns (the hook is usually right but the voice is slightly off). Update SOUL.md or the playbook until the drafts read like you.

Most operators dry-run for two nights. Some dry-run for a week. Better to over-tune now than send 200 robotic messages on night one.

### Step 5: Turn On Sending, Slowly

When you go live, ramp volume carefully. LinkedIn pattern-matches on "sudden spike in outreach activity."

- **Night 1:** 5 sends, spaced 8-12 minutes apart
- **Night 2-3:** 10 sends, 6-10 minutes apart
- **Week 1:** 15 sends a night, 5-8 minutes apart
- **Week 2:** 25 sends a night
- **Week 3 onward:** 30-60 sends a night, never more

The pacing is deliberate. LinkedIn does not love 200 sends in ten minutes. The agent sends at a pace a real human could maintain. A good run is 30 to 60 sends in a night, not 500.

Spread sends across a window that matches your timezone. If you are in Eastern time, send between 9 PM and 2 AM. It looks like you stayed up and worked through your list after dinner. If you send at 4 AM local, LinkedIn flags it. The pacing module handles this, but you configure the window.

### Step 6: Wire The Morning Reply Report

When you wake up, you open one short daily report.

```
OUTREACH REPORT: 2026-04-23

SENT LAST NIGHT
  30 personalized DMs across r/hot (12), r/warm (15), r/cold (3)
  Total window: 23:15 to 02:48 UTC

REPLIES RECEIVED (6)

  [HOT] Sarah Johnson - interested, wants to talk this week.
        Suggested reply: "great, here's my calendar: [link]."

  [HOT] Marcus Reyes - asking about pricing.
        Suggested reply draft: "usually starts at $800/mo. happy to
        walk you through what you'd actually need on a 15 min call?"

  [WARM] Priya Patel - polite decline, "not the right time."
        Suggested: no reply, add to 90-day followup queue.

  [WARM] David Kim - asked what my tool is called.
        Suggested draft: "not a tool yet. done-for-you service with..."

  [COLD] Jamie Lee - angry reply about cold outreach.
        Suggested: no reply, remove from all lists, apologize.

  [COLD] Chris Wong - said "tell me more."
        Suggested draft: "[specific pain from their recent post]. i
        work with [similar client] on this, [specific result]. worth
        15 min?"

NOT YET REPLIED (24): tracked, followup in 4 days if no response.
```

You spend 10 minutes on it. You send the three important replies with a word or two edited. You handle the angry one personally (always). You go do the thing that actually earns the money.

### Step 7: Weekly Tuning

Friday afternoon, 20 minutes:

1. **Review the reply rate.** If it is under 5%, your targeting is wrong or the playbook is off. If it is over 15%, either you got lucky this week or you have a very well-defined ICP (great, write down what you did).

2. **Review the openers that got replies versus the ones that got ignored.** Look for patterns. Update the playbook's "hooks" section with what worked.

3. **Review the angry replies.** If you got more than one this week, something is off. Read both. Find the common factor. Add a skip rule for that segment.

4. **Prune the target list.** Remove anyone who did not reply after 4 days. They are done for this cycle. Move them to a 90-day followup list for later.

The reply rate is the only metric that matters. Everything else is a lever that moves that number.

## The Parallel Stack: WhatsApp and Telegram Assistant

A related build pairs naturally with outreach. A separate operator runs a self-hosted AI on a Mac mini. It is connected to his WhatsApp and Telegram. It answers messages, manages his calendar, drafts emails, and has a memory that learns his patterns over time.

The combination is the real move. The LinkedIn agent brings the top of the funnel. The messaging assistant handles the middle. When a prospect replies "sure, let's chat" at 2 PM while you are on a plane, the messaging assistant proposes three times from your calendar without you touching anything. When they reply "send me a proposal," the assistant drafts the proposal from your template and queues it for your approval.

You can build this second layer in parallel with the LinkedIn outreach, or you can add it after month one when you have enough live conversations to justify it.

## Lanes That Work

This blueprint fits any B2B operator whose first 50 customers come from hand-to-hand combat.

**Solo founders of B2B services.** Primary audience. You know outreach works, you know you should be doing it, and you know you do not have time. This is the fix.

**Agency owners and consultants targeting a defined niche.** The narrower your ICP, the better the reply rate. If you help dentists or plumbers or small SaaS founders, this is lethal.

**Salespeople at small companies who own their own pipeline.** If you are the first sales hire and you are expected to build your own book of business, this triples your effective capacity.

**Coaches and course creators with an audience on LinkedIn.** The pattern works for anyone selling to professionals who are on LinkedIn and who respond to thoughtful DMs.

**Anyone doing founder-led sales.** If you have sold five customers yourself and you know what your opener needs to say to land, this scales that exact playbook to 50 prospects a night.

What does not work: a product that sells itself through a form on a landing page. If your buyer motion is "see an ad, click, buy," you do not need outreach. If your buyer motion is "have a 15-minute call, then decide," you need this.

## What Changes After Setup

**Day 1.** You set up OpenClaw, install the Browser Relay, build your 200-person list, and write the playbook. Dry-run the first batch. Read every message. Tune.

**Day 3.** You go live with five sends. You get one reply. You respond with a real message. You realize this is actually going to work.

**Week 1.** 30 total sends, 2 replies, 1 meeting booked. The reply rate looks low, but you booked a meeting with a qualified prospect on night five for the cost of a sandwich lunch.

**Week 2.** 70 total sends, 6 replies, 3 meetings booked, 1 proposal sent. The agent is drafting responses that actually sound like you. You edit one word per draft on average.

**Month 1.** 200 sends, 18 replies, 9 meetings booked, 3 active deals. One of them closes at month end. The system has paid for itself ten times over.

**Month 3.** You have stopped thinking about outreach as a to-do item. It is a process that runs without you. You think about outreach once a week during the Friday review. You spend the rest of your week on the actual deals.

## Gotchas and Tips

**Targeting is the whole game.** Spend 70% of your effort on stage 1 and 10% on each of the other stages. A perfect agent cannot save a garbage list.

**Never let the agent send on the first night you build the list.** Dry-run for at least 48 hours. The drafts need tuning every single time you start a new campaign with a new playbook.

**Keep the first message short.** 40-80 words. Anything longer and the reply rate drops. The agent will try to write longer messages if you do not set the word cap in the playbook. Enforce it.

**Do not ask for a meeting in the first message.** Ever. The first message is a question that opens a conversation. The meeting ask is at message 2 or 3. This is the single most common mistake and the reason most outreach feels robotic.

**Treat angry replies like gold.** When someone replies annoyed, read the whole message. They are telling you what is wrong with your targeting or your tone. Apologize, remove them from every list, update the skip rules. You will have fewer angry replies in two weeks.

**Pace matters more than volume.** 30 perfectly-timed sends per night beats 100 rushed ones. LinkedIn rewards looking human. The agent lets you look human at scale.

**Rotate your hooks.** If every message opens with "I saw your post about X," LinkedIn's pattern detection will flag your account. Mix three or four hook types across the list.

**Do not run two campaigns to the same person.** Tag every contact with the campaign they are in. If someone is in your "accounting firms Q2" campaign, they should never also be in your "small business owners Q2" campaign. Double-outreach to the same person is a fast way to get blocked.

**Protect your LinkedIn account.** This is your primary asset. Never share the password. Never let the agent log in fresh (it should use an existing session). Never run more than one outreach agent against the same account. The account survives when it looks like one human is using it.

**Keep a 20% safety margin on send volume.** If LinkedIn's soft limit feels like 100 DMs a week, send 80. The savings on the last 20 DMs are not worth a restricted account.

**The playbook file is your actual competitive advantage.** The software is a commodity. The playbook is what makes your outreach feel like yours. Treat it like the sales script it is. Iterate on it relentlessly.

---

## Keep Reading

- **[Stop Buying Cold Email Lists. Build One That Actually Books Meetings.](/blueprints/cold-email-list-pipeline/)** — The email-side outbound pipeline that pairs cleanly with this LinkedIn play. Run both.
- **[AI Finds Leads, Builds Demo Sites, and Cold Calls Them For You](/blueprints/ai-lead-gen-pipeline/)** — The full-funnel variant. If you want to combine outbound channels, start here.
- **[Your Cold Email Infrastructure Is Why Nobody Replies (Not Your Copy)](/blueprints/cold-email-infrastructure/)** — The infrastructure layer for any cold outreach program. Matters more the second you scale past 100 sends a week.
