---
layout: playbook.njk
title: "The €200 AI Voice Agent That Called 3,000 Businesses in a Weekend"
description: "Matt Cortland built a voice agent named Rachel that autonomously phoned around 3,000 pubs across Ireland and the UK to log the price of a pint, for about €200. The same outbound-calling stack runs lead qualification, appointment reminders, and supplier price checks. Here is how it works: ElevenLabs plus Twilio plus Claude."
date: 2026-06-03
difficulty: Intermediate
cost: "~€200 for ~3,000 calls (ElevenLabs + Twilio + Claude usage)"
timeToSetup: "A weekend, most of it spent tuning the script on small batches"
originalSource: "https://www.reddit.com/r/Anthropic/comments/1ttpxn5/matt_used_claude_to_build_the_guinndex_a_voice/"
originalAuthor: "Matt Cortland (The Guinndex)"
tags:
  - voice
  - phone-agent
  - outbound
  - lead-generation
  - data-collection
  - market-research
  - elevenlabs
  - twilio
  - claude
  - small-business
permalink: /playbooks/guinndex-voice-agent/
---

## Tools

- [**ElevenLabs**](#aff-elevenlabs): the voice and conversation layer. This is "Rachel," the agent that actually talks to whoever picks up.
- [**Twilio**](#aff-twilio): places the outbound calls and connects them to the agent. Bring a number, dial a list.
- [**Claude**](#aff-claude-code): writes and refines what Rachel says, then reads each call and pulls out the one piece of data you wanted.
- A list of numbers to call, and a spreadsheet or database to drop the answers into.

## What You'll Build

An agent that makes phone calls for you, at a scale no person could, and turns what it hears into clean data.

Matt Cortland wanted to know where you could get a cheap pint of Guinness in Ireland. So he built a voice agent, gave her a Northern Irish accent, named her Rachel, and pointed her at the phone book. Rachel called around 3,000 pubs across Ireland and the UK. She asked one question, the price of a pint, said thanks, and hung up. Claude turned every recorded answer into a number, and those numbers became the Guinndex, a live map of what a pint costs and where.

The whole project cost about €200. The average pint came back near €6.01. And some pubs saw their price sitting high on the public index and lowered it to compete. A solo project with a phone and three tools nudged real prices in a real market.

You are not building a pub price tracker. You are building the machine underneath it: an outbound caller that works a list, holds a short natural conversation, and logs a structured result every time.

## Why This Works

Phone work is the last thing most owners still do by hand, and it is the easiest to hand off. A robocaller blasts a recording and gets hung up on. A phone tree makes the human do the work. Rachel is neither. She holds a real conversation, understands the answer she gets back, and hands you structured data instead of a voicemail you have to listen to later.

It is also cheap in a way that changes what is worth doing. At pennies per call, projects that were never worth a person's time become trivial. Calling 3,000 anyone used to mean a call center and a budget. Now it means a list and a weekend. The edge is not that the information was secret. The edge is that you are the only one in your category actually making the calls.

## Prerequisites

- An ElevenLabs account with a voice you have picked for the agent.
- A Twilio account and one phone number (a local number costs about a dollar a month).
- A Claude API key or subscription for script tuning and answer extraction.
- A list of numbers to call, and a Google Sheet or similar for the results.
- A quick check of the calling and recording laws everywhere you plan to dial (see Gotchas).

## Step-by-Step Setup

### Step 1: Get Your List

For the Guinndex it was a directory of pubs. For you it is a CRM export, a list of suppliers, or a sheet of leads. You need a phone number, and ideally a name, per row.

### Step 2: Write the Conversation in ElevenLabs

This is where Rachel lives. Give the agent exactly one job and a script tight enough to finish in under a minute. Define how she opens and identifies herself, the single question she is calling to answer, how she handles "who is this," "we're busy," and voicemail, and when to thank the person and hang up. Keep the goal to one data point per call. The more you ask, the longer the call, and the more ways it goes sideways.

### Step 3: Wire Up Twilio to Place the Calls

Twilio provides the number and the dialing. It hands each live call to the ElevenLabs agent and records the audio. You feed it the list and it works through it. Per-minute call costs are pennies.

### Step 4: Let Claude Pull the Answer Out

After each call, Claude reads the transcript or recording and extracts the one thing you wanted: the price, the yes or no, the new appointment time, the supplier quote. It writes that into your sheet as a clean field. No human listens to 3,000 calls. Claude does the listening and the typing.

### Step 5: Test on Small Batches, Then Scale

This is the step people skip and regret. Cortland ran small batches first and tuned Rachel between them. An early version had her repeat the price back to confirm it, which made calls run long and gave people time to get suspicious. The fix was simple: ask the question, say thanks, hang up. He only scaled to thousands of calls once the short version worked cleanly. Run 10 calls, listen, fix the script, run 10 more. Then open the throttle.

## Adapting This for Your Business

The build is the same no matter the question. To repoint it, change three things: the list, the one question Rachel asks, and the field Claude extracts. Everything else stays.

- **Service businesses.** Confirm tomorrow's appointments the night before so no-shows drop.
- **Sales teams and agencies.** Call last quarter's dead leads and surface the three that are warm again.
- **Operators with suppliers.** Ring suppliers on a schedule for current pricing and log the quotes.
- **Anyone doing research.** Survey a whole market by phone in a weekend, the way the Guinndex surveyed an entire country's pubs.

## Gotchas and Tips

- **One question per call.** The single biggest lever. Cortland's calls only worked once they were short. Every extra ask is a longer call and a new way to fail.
- **Drop the confirmation read-back.** Repeating the answer to confirm it felt natural but made calls drag and raised suspicion. Ask, thank, hang up.
- **Voice and accent affect pickup and trust.** Rachel's local accent was not a gimmick. People talk to someone who sounds like them. Match the voice to who you are calling.
- **Test in batches of 10.** Tune the script between batches before you ever run hundreds. This is the difference between a clean dataset and 3,000 bad calls.
- **Know the rules before you dial.** Outbound calling and call recording are regulated, and the rules vary by country and state. Identify the agent, honor do-not-call lists, and check consent and recording laws for everywhere you are calling.
- **Watch the meter.** Costs are per minute and per call. Short calls are not just better conversations, they are cheaper ones.

## What This Replaces

Before this stack, a calling campaign at any real scale meant one of two things:

- **A call center:** setup fees, per-seat costs, and a minimum commitment, usually thousands of dollars before a single useful call.
- **A person on your team:** hours of their week spent dialing, leaving voicemails, and typing results into a sheet, at the cost of everything else they could be doing.

After this stack, 3,000 calls cost about €200 and a weekend of setup, the agent never gets bored or rude on the hundredth call, and every answer lands in a spreadsheet already structured. The job that used to justify a headcount or a vendor is now a skill you point at a list.

---

## Keep Reading

- **[The Four-Piece AI Front Desk Every SMB Should Have Running by Friday](/playbooks/ai-front-desk/)**: pair this outbound caller with an inbound agent that answers your phone 24/7.
- **[AI Whispers What to Say During Your Cold Calls in Real Time](/playbooks/ai-cold-call-coach/)**: keep the human on the call, but give them an agent that helps them close.
- **[Your AI Makes Your Coffee, Orders Your Lunch, and Answers Your Phone](/playbooks/ai-espresso-phone-agent/)**: another take on giving an agent its own phone line.
