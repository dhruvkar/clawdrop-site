---
layout: playbook.njk
title: "The Four-Piece AI Front Desk Every SMB Should Have Running by Friday"
description: "Phone agent that answers 24/7. Website chatbot that captures every lead. Automation that follows up while you sleep. Booking flow that fills your calendar. The four-piece stack that turns any service business into a 24-hour operation for $20-50/month."
date: 2026-05-13
difficulty: Beginner
cost: "$20-50/month (Claude + Vapi or similar voice provider)"
timeToSetup: "An afternoon for the basics, a week to tune"
originalSource: "https://bsky.app/profile/openclawautomates.bsky.social/post/3mko7yieuts2o"
originalAuthor: "openclawautomates (Bluesky)"
permalink: /playbooks/ai-front-desk/
tags:
  - small-business
  - smb
  - receptionist
  - phone-agent
  - chatbot
  - lead-capture
  - appointments
  - service-business
---

## Tools

- [**OpenClaw**](#aff-openclaw): the orchestrator. Holds the rules, the routing logic, the memory of every conversation.
- [**Vapi**](#aff-vapi) or [**Bland**](#aff-bland): the voice layer. Real phone number, real voice, sub-second latency.
- [**Twilio**](#aff-twilio): alternative phone infrastructure. Bring your existing business line.
- [**GoHighLevel**](#aff-gohighlevel): the lead capture and follow-up automation stack many SMBs already use.
- [**Calendly**](#aff-calendly): the booking layer. The agent fills it.
- [**Telegram**](#aff-telegram): how the owner gets pinged for the few decisions the agent can't make alone.
- [**Gmail**](#aff-gmail) or [**Outlook**](#aff-outlook): inbox channel.
- [**Claude**](#aff-claude): the model doing the actual conversation.

## What You'll Build

A four-piece front-desk stack any service business can stand up in an afternoon:

1. **The phone agent.** A real phone number that gets answered in two rings, 24 hours a day. Speaks naturally. Knows your hours, your services, your prices. Takes messages, books appointments, and texts you about anything it can't handle.
2. **The website chatbot.** A widget on your site that greets visitors, answers common questions, and captures contact info before they bounce.
3. **The follow-up automation.** Every captured lead gets followed up with within minutes, then again the next day, then a week later. Three touches before a human ever has to think about it.
4. **The booking flow.** The agent fills your calendar directly. No back-and-forth. No phone tag. No "what times work for you?"

This is the "if you only build one thing this quarter, build this" build for any SMB owner. It's been the default modern front-desk for a year and most operators still don't have it.

## The Problem Every Service Business Has at 6:43 PM

You closed at 5. Sarah called at 6:43 because she got home from work, finally had a minute to deal with that thing, and remembered your business card. She called. She got voicemail. She googled "[your category] near me" while she had her phone out. She clicked the first ad. She booked with them.

You didn't lose the lead because she didn't want you. You lost it because the call didn't get answered.

Now imagine she went to your website at 6:43 instead. No chatbot. She read three pages. She filled out a contact form. Your CRM emailed her a "thanks, we'll be in touch within 24 hours." She didn't see that email until 11pm. By then she'd already called your competitor.

Now imagine she did get a call back. From you. At 9:14 the next morning. The first thing she said was "hi, sorry, I already booked with someone else."

This is happening every day at your business. Every after-hours call is a coin flip you keep losing. Every contact form is a delay against your win rate. Most owners' bottleneck isn't lead gen. It's response time on the leads they're already getting.

The four-piece front desk closes all of it.

## How It Works

Each piece is a small build. They share a common brain (the agent) and a common data layer (your CRM or a simple sheet).

### Piece 1: The Phone Agent

A real phone number (or your existing business line) routed through Vapi or Bland. Calls hit a voice agent backed by Claude. The agent:

- Greets the caller using your business name in your tone
- Knows your hours, services, pricing, and service area
- Can take a message, book an appointment, transfer to your cell, or text you the call summary
- Hands off cleanly to a human when the caller asks for one

What it says when somebody calls at 6:43:

> "Hi, thanks for calling [Business]. I'm an AI assistant. I can answer questions, schedule a quote, or take a message for the team. What can I help you with?"

Sarah books an appointment for Saturday. By 6:45 she's on your calendar. You wake up Monday morning to a confirmed booking and a recording of the call.

### Piece 2: The Website Chatbot

A small widget embedded on your site. Pops up after 8 seconds. Says:

> "Hi! Anything I can help you find?"

Connected to the same agent brain as the phone agent. Same rules, same hours, same prices. Difference: it captures email and phone as part of the conversation, not at the end.

Standard flow:

```
Visitor: I'm looking for [your service]
Agent:   Got it. Are you trying to do this for residential or commercial?
Visitor: Residential.
Agent:   Perfect. We can usually quote that within 24 hours.
         What's the best email to send a quote to?
Visitor: sarah@example.com
Agent:   And phone, in case I need to clarify anything?
Visitor: (sends)
Agent:   Got it. I'll have the team prep a quote and we'll be in touch by tomorrow.
         Want me to also book a 15-minute call to walk through it?
```

Lead captured. Lead qualified. Call optionally booked. Three minutes.

### Piece 3: The Follow-Up Automation

The boring piece, where most of the money actually comes from.

Every lead that comes in through the phone agent, chatbot, or your contact form gets entered into a follow-up sequence:

- **Minute 5**: Text confirming receipt. "Hi Sarah, [name] from [Business]. Got your inquiry. We'll have a quote tomorrow. Anything urgent in the meantime?"
- **Hour 2**: If Sarah replied to the text, the agent or you continues the conversation. If not, nothing.
- **Day 1**: Email with the quote. Personalized using whatever the agent collected.
- **Day 3**: Text follow-up if there's no reply. "Hey Sarah, just checking — did you get the quote?"
- **Day 7**: Final follow-up with a soft pivot. "Hey Sarah, totally understand if timing's not right. We're booking out two weeks, so if you want to lock something in, let me know."

You set the cadence once. The agent runs it for every lead. Forever.

### Piece 4: The Booking Flow

The agent has access to your Calendly (or whatever booking tool you use). When a caller or visitor wants to book, the agent doesn't say "let me check our schedule." It books directly.

```
Visitor: Can I get a quote?
Agent:   Yes — I can either send one over email tomorrow or set up a quick call
         today. What works?
Visitor: Today would be great.
Agent:   I have 2:30 or 4:00. Both 15 minutes.
Visitor: 4:00.
Agent:   Done. You're on the calendar for 4:00, calling [your number].
         I'll send a confirmation to your email.
```

No "let me get back to you." No "what times work for you?" Just booked.

### The Setup (One Afternoon for the Basics)

**What you need:**
- OpenClaw running (managed install if you're not technical)
- Claude Pro or Max subscription
- A Vapi or Bland account ($15-30/month depending on call volume)
- Your Calendly or other booking tool
- A document with your business basics: hours, services, pricing, service area, FAQ
- 30 minutes of you recording yourself answering common questions, for tone calibration

**Step 1: Write the brain.** A single document with your business facts. Hours. Services. Pricing (or "starting at" prices if you don't want exact). Service area. Your top 20 FAQs and the answers. The agent reads from this.

**Step 2: Spin up the voice agent.** Vapi or Bland with a Claude backend. Give it your business document. Test it by calling yourself. Iterate on the tone until it sounds like a member of your team.

**Step 3: Drop the chatbot on your site.** Most of these tools give you a one-line embed code. Same brain, web channel.

**Step 4: Wire up the follow-up cadence.** GoHighLevel is the popular SMB stack for this; you can also build it in OpenClaw directly with Telegram and SMTP. Five-touch sequence, branching on reply.

**Step 5: Connect the booking layer.** Calendly works. The agent gets read access to your availability and write access to book.

**Step 6: Run for a week with you reviewing every call and chat.** Listen to recordings. Read transcripts. Catch the places the agent fumbled. Refine the business document. After a week, it's reliable enough to leave on autopilot.

## What Changes After Setup

**Day 1:** Your first after-hours call gets answered. It feels weird. You listen to the recording in the morning.

**Week 1:** You realize you've captured 3-5 leads you would have lost to voicemail. One of them was a real job. The build paid for itself in week one.

**Month 1:** Your contact-form-to-customer conversion goes up because every lead gets the 5-minute response that closes most jobs. Your weekend off-hours leads stop disappearing.

**Month 3:** You no longer reach for your phone every time it buzzes. The agent handles 80% of inquiries cleanly. The 20% it escalates are the actual judgment calls — and you handle those better because the agent has already collected the context.

**Month 6:** You start looking at the call recordings less. The trust is built. You hire one fewer office person than you would have, or you redirect that budget to growth.

## Where This Sits in Your Operation

Most SMB owners think of the front desk as a person. This rebuilds it as a system:

```
Caller / Visitor / Form fill
        |
        v
The Agent (knows everything about your business)
   - Knows your hours / services / pricing
   - Can book directly into your calendar
   - Can take a message
   - Can hand off to a human
        |
        v
Lead captured in CRM
        |
        v
Follow-up sequence (5 touches over 7 days)
        |
        v
Closed deal OR cleanly archived
```

The owner becomes the closer, not the receptionist. That's the unlock.

## The Numbers Worth Caring About

**Lead capture:** Service businesses typically lose 30-50% of inbound calls to voicemail or unanswered ringing. Recovering even half of that is usually 5-10 jobs/month.

**Response time:** Closing the response-time gap from "tomorrow morning" to "5 minutes" typically doubles lead-to-customer conversion. This is one of the best-studied numbers in SMB sales.

**Cost:** $20-50/month all-in. A part-time receptionist runs $1,500-3,000/month for 20-40 hours/week of coverage.

**Coverage:** Receptionist works 9-5. This works 24/7/365. Most of your missed calls are after hours and on weekends.

## Beyond Service Businesses

The same four-piece stack works for:

**Local trades** (HVAC, plumbing, electrical, roofing, cleaning, landscaping). [Trades-specific version here](/playbooks/hvac-estimate-autopilot/).

**Medical and dental practices.** Insurance and scheduling questions, intake forms, appointment reminders, no-show recovery.

**Professional services** (law firms, accounting, consulting). Intake call screening, scheduling discovery calls, FAQ replies.

**Restaurants and QSR.** [Restaurant-specific patterns here](/playbooks/qsr-shift-coach/).

**Local retail with phone orders.** Customer questions, order status, returns.

**Brokerages and agencies** (real estate, insurance, mortgage). Same playbook, swap in the vertical-specific FAQ and routing rules.

The common thread: any business where (a) you have a phone, (b) people sometimes call after hours, and (c) you have repeatable answers to common questions. That's most SMBs.

## Gotchas and Tips

- **Tell people they're talking to AI.** Most states require disclosure, and people are mostly fine with it as long as it's upfront. "Hi, thanks for calling [Business]. I'm an AI assistant — I can answer questions, schedule a quote, or take a message."
- **The first 90 seconds is everything.** Spend real time on the greeting and the first turn. That's where callers decide whether to engage or hang up.
- **Don't bury the human option.** Always offer "would you like me to text the team to call you back?" if the agent can't handle something. Don't trap callers.
- **Your FAQ doc is the asset.** Same lesson as every other agent build. Invest in this document. Update it weekly. Every time the agent fumbles a question, add the right answer to the doc.
- **Don't auto-book without confirmation.** The agent should always read back the appointment details and confirm before locking the slot. Wrong-time bookings damage trust faster than missed calls.
- **Watch the recordings the first month.** Every single one. You'll catch tone issues, factual errors, and edge cases your FAQ didn't cover. Month two you can drop to spot-checks.
- **Phone agent first, chatbot second.** Phone is where the highest-intent leads come from. Chatbot is icing. Build the phone agent right before you add channels.
- **Don't try to replace your closer.** The agent captures, qualifies, books. The human still closes the deal. That handoff is the whole architecture.

---

## Keep Reading

- **[This HVAC Guy Spent Friday Night Setting Up AI. Now His Estimates Write Themselves.](/playbooks/hvac-estimate-autopilot/)**: For trades businesses, the estimate side that pairs with the front desk side.
- **[His Life Insurance Agency Texts and Calls New Leads in 2 Minutes. Automatically.](/playbooks/life-insurance-2-minute-follow-up/)**: The hyper-fast follow-up pattern, applied to a specific vertical.
- **[Your AI Makes Your Coffee, Orders Your Lunch, and Answers Your Phone](/playbooks/ai-espresso-phone-agent/)**: The deeper-dive build on the phone-agent piece, with technical specifics.
