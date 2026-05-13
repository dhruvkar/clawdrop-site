---
layout: playbook.njk
title: "The Realtor Who Runs Their Whole Day By Voice From the Driver's Seat"
description: "A real estate agent's day is showings, drive time, and dead minutes between appointments. This build turns all of it into productive work. Voice notes to an always-on AI that pulls listings, drafts emails to listing agents, and prepares your next meeting before you sit down."
date: 2026-05-13
difficulty: Beginner
cost: "$20/month (Claude or OpenAI subscription)"
timeToSetup: "An afternoon"
originalSource: "https://www.youtube.com/watch?v=0QOhtX72chs"
originalAuthor: "AI Alpha by Mario"
permalink: /playbooks/realtor-voice-agent/
tags:
  - real-estate
  - realtor
  - voice
  - mobile
  - field-service
  - lead-response
  - assistant
---

## Tools

- [**OpenClaw**](#aff-openclaw): the always-on agent. Lives on Telegram, runs 24/7.
- [**Telegram**](#aff-telegram): how you talk to it. Voice notes work natively.
- [**OpenAI**](#aff-openai): for live two-way voice conversation (Real-Time Voice API).
- [**Claude**](#aff-claude): the model doing the actual work behind the scenes.
- [**WhatsApp**](#aff-whatsapp): alternative messaging channel. Same workflow.
- [**Google Calendar**](#aff-google-calendar): the agent reads and updates it.
- [**Gmail**](#aff-gmail): the inbox the agent drafts replies into.

## What You'll Build

A voice-first AI agent that handles your back-office while you're in the car, at a showing, or walking to a closing. You speak to it like you'd brief a personal assistant. It searches listings, pulls comps, drafts replies to listing agents, and prepares your next meeting before you sit down.

You never open a laptop. You never type a prompt. You never stop driving.

This comes from a content creator who runs his whole agent stack by voice, but the realtor use case is one of the strongest matches. Voice solves a problem realtors have that desk-bound professionals don't: your job is mobile, your back-office isn't.

## The Problem Every Working Realtor Knows

You sit at your desk maybe an hour a day. The rest of the day is showings, walkthroughs, signs, drive time, and the school pickup that interrupts everything in the middle. Meanwhile your phone is buzzing.

A buyer sent a message asking about a property at 11am. You're in the middle of a showing. You'll get to it at 1pm. By 1pm, three other agents have already responded and the buyer is on the phone with one of them.

NAR data is brutal on this. Most agents take more than an hour to respond to portal leads. The agent who responds in five minutes is the one who books the appointment. You know this. You can't fix it because you're holding a key in a stranger's living room.

Then there's the prep work. You have a listing strategy meeting with the Martinez family at 4pm. You need their search history, three recent comparable sales, two questions to ask. That's 45 minutes of prep. You don't have 45 minutes today. You'll do it in the car. You'll do it badly.

This is the gap voice fills.

## How It Works

Three setups, depending on how deep you want to go. Most realtors should start with the first one and add the others over time.

### Setup 1: Voice Notes to OpenClaw on Telegram

This is the entry-level workflow. Costs $20/month and takes an afternoon.

OpenClaw runs as an always-on agent on a small server. You talk to it through Telegram. Telegram supports voice notes natively. Send a voice note. The agent transcribes it, understands it, executes it.

Examples from a working realtor day:

**Morning, in the car on the way to a showing:**

> Voice note: "Find me three-bed houses under $850K in 78704, only ones with a pool, built after 2010, with price drops in the last 30 days. Send me the top five."

The agent searches your MLS portal or Zillow. By the time you're parked, a list of five matches is waiting on your phone.

**Walking out of a showing:**

> Voice note: "Draft outreach emails to the listing agents on properties 2, 4, and 5 from this morning's list. Keep each one under 90 words. Mention I have a pre-approved buyer ready to write an offer this week."

Three drafts land in your Gmail drafts folder. You review them in the car between showings, hit send.

**Between meetings:**

> Voice note: "Meeting in 30 minutes with the Martinez family about their listing strategy. Pull their recent search history, three comparable sales in the last 60 days within half a mile, and give me two questions I should ask them."

A one-page brief arrives in your Telegram. You read it while you walk into the meeting. You sound like you spent an hour preparing.

### Setup 2: Live Two-Way Voice via OpenAI Real-Time API

This is the next level. Instead of voice notes (asynchronous), you hold a live two-way conversation. The agent acts while you talk.

You're driving between showings. You speak to the agent through your car audio:

> "Hey, find me three-bed listings under 900K in 78704, only ones with pools."

It searches in real time. Speaks back: "I have eight matches. Three of them just had price drops this week. Want me to filter to those?"

> "Yes. Draft emails to the listing agents on those three. Mention I have a pre-approved buyer."

By the time you pull into your next showing, drafts are in your Gmail.

This setup requires the OpenAI Real-Time Voice API and a bit more configuration. Worth it if you spend two or more hours a day in the car.

### Setup 3: Multi-Channel Coverage

Once the workflow clicks, you wire the same agent into WhatsApp and your work email. Now the agent isn't just answering you — it's also answering on your behalf during showings.

Buyer messages you on WhatsApp at 11am while you're in a showing. The agent:

1. Reads the message
2. Drafts a response in your voice with the relevant property details pulled live from your MLS
3. Pings you on Telegram: "Sarah just asked about 1429 Maple. Here's my draft response. Send it?"
4. You glance at your phone, tap approve, message goes out from your number in under two minutes

You just responded to a hot lead during a showing without breaking eye contact with your client.

## The Setup (One Afternoon)

**What you need:**
- A phone with Telegram installed
- OpenClaw running (managed or self-hosted)
- Claude or OpenAI subscription ($20/month)
- Access to your MLS portal (or Zillow account if you don't have direct MLS API access)
- Your Gmail or work email credentials

**Step 1: Get OpenClaw running with Telegram.** Use a managed install if you're not technical. The agent runs 24/7 in the background.

**Step 2: Enable voice notes.** Send your first voice note: "What's today's weather in Austin?" Verify it transcribes and responds correctly.

**Step 3: Give it access to your tools.** MLS or Zillow (via browser-based login, you stay signed in). Gmail (via OAuth). Google Calendar (via OAuth).

**Step 4: Define your three or four most-used commands.** Examples:
- "Pull the three most recent comparable sales near [address]"
- "Find listings matching [criteria] with [filter]"
- "Draft a reply to [contact] saying [intent]"
- "Brief me on my next meeting with [contact]"

**Step 5: Start using it.** First day, just voice notes. Second week, try the live conversation mode. By week two, you'll naturally know what to delegate.

## What Changes After Setup

**Day 1:** You send your first voice note from the car. It works. You realize you just got 20 minutes of your day back.

**Week 1:** Your response time to portal leads drops from "whenever I'm at my desk" to "under 10 minutes, even during showings." That alone moves your conversion numbers.

**Month 1:** You stop doing back-office work in the evenings. The dead minutes between showings — drive time, waiting for clients, the gap before lunch — turn into productive time without you having to think about it.

**Month 3:** Your assistant cost line in your P&L either disappears or moves to higher-value work. The repetitive parts of an assistant's job are handled. The judgment calls still need a human, but those are 20% of the workload, not 80%.

## The Numbers Worth Caring About

**Response time:** Realtors who respond within 5 minutes are 21x more likely to qualify the lead than those who respond after 30 minutes (per InsideSales.com / Harvard Business Review research). This build gets you under 5 minutes hands-free.

**Time reclaimed:** Average realtor spends 2-3 hours a day on back-office work. This build doesn't eliminate all of it but reclaims 60-70% of the routine portion.

**Cost vs. assistant:** A part-time assistant runs $15-25/hour, $1,500-3,000/month depending on hours. This stack runs $20-50/month and is on-call 24/7.

## Beyond Real Estate

The exact same pattern works for any field-mobile profession:

**Insurance agents:** Voice-note quotes, policy lookups, and renewal reminders while between client visits.

**Home service business owners:** Estimate prep, customer follow-ups, and scheduling while on job sites.

**Property managers:** Tenant communication, maintenance dispatch, vendor coordination while inspecting properties.

**Sales reps with territories:** Account briefings, follow-up drafts, opportunity updates while driving between accounts.

The common thread: if your job keeps you away from a desk but your back-office demands a desk, voice closes the gap.

## Gotchas and Tips

- **Start with voice notes, not live conversation.** Async voice notes are forgiving. You can rerecord if you fumble. Live conversation has more setup and a steeper learning curve. Earn it.
- **The longer the task, the more voice helps.** A three-word command isn't worth opening voice for. A complex multi-step instruction is 3x faster spoken than typed and ends up more detailed.
- **Don't let it send messages without approval at first.** Two weeks of draft-mode only. Build trust before you let it fly solo on responses to clients.
- **Tell it your style explicitly.** "Drafts should sound like me. Direct, warm, never use the word 'amazing.' Sign every email with 'Best.' Reference the property by street name, not MLS number." That instruction lives in the agent's memory and shapes every output.
- **MLS access is the unlock.** If you have direct MLS API access, the agent gets faster and more accurate. If you only have a Zillow/Redfin browser login, it still works, just slower.
- **The car is the killer use case.** This build matters most during drive time. If you don't drive much in your day, the value drops significantly. Realtors and field service get the biggest lift.
- **Clients can't tell.** Your responses still sound like you, because they're drafted using your tone and approved by you before sending. The agent is your back-office, not your front-office.

---

## Keep Reading

- **[Build an AI Agent That Finds Real Estate Deals Before Anyone Else](/playbooks/real-estate-deal-hunter/)**: The investor side of real estate AI. Different operator, same toolkit.
- **[His Life Insurance Agency Texts and Calls New Leads in 2 Minutes. Automatically.](/playbooks/life-insurance-2-minute-follow-up/)**: The same speed-of-response advantage applied to insurance.
- **[Turn Your AI Into a Real-Time Assistant That Listens, Remembers, and Acts for $50](/playbooks/ai-real-time-assistant/)**: The wearable version of voice-first AI, for indoor knowledge workers.
