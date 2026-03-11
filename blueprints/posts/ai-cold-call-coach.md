---
layout: blueprint.njk
title: "AI Whispers What to Say During Your Cold Calls in Real Time"
description: "An AI listens to your live sales calls and gives you real-time coaching on what to say next based on how the conversation is going."
date: 2026-03-10
difficulty: Intermediate
cost: "$20-40/month (transcription + API)"
timeToSetup: "3-5 hours"
originalSource: "https://discord.com/channels/1456350064065904867/1456609488202105005/1464673240994676879"
originalAuthor: "Jonah (@jonahships)"
tags:
  - sales
  - voice
  - coaching
  - real-time
permalink: /blueprints/ai-cold-call-coach/
---

## What You'll Build

An AI copilot for live sales calls. While you're on the phone with a prospect, the AI listens to both sides of the conversation, analyzes the tone and content in real time, and displays suggestions on your screen: what to say next, how to handle objections, when to close, and when to shut up and listen.

## Why This Works

Cold calling is hard. Even experienced salespeople freeze when a prospect throws an unexpected objection. "We already have a vendor for that." "Send me an email." "We don't have budget." In those moments, having the perfect response ready isn't about being manipulative. It's about being prepared.

Sales coaches charge $200-500/hour to listen to your calls and give feedback. That feedback usually comes after the call, when it's too late. This system gives you coaching while the call is still happening.

## Prerequisites

- OpenClaw installed and running
- A way to capture call audio in real time (see options below)
- Fast transcription service (Deepgram recommended for low latency)
- A screen or second monitor for displaying suggestions

## Architecture

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Live Call   │────▶│  Real-Time   │────▶│  AI Coach    │
│  Audio       │     │  Transcriber │     │              │
│              │     │              │     │  - Analyze   │
│  Both sides  │     │  - Deepgram  │     │    sentiment │
│  of convo    │     │  - <500ms    │     │  - Detect    │
│              │     │    latency   │     │    objection │
│              │     │              │     │  - Suggest   │
└──────────────┘     └──────────────┘     └──────┬───────┘
                                                  │
                                         ┌────────▼───────┐
                                         │  Display       │
                                         │                │
                                         │  Live panel:   │
                                         │  "They said    │
                                         │  budget is     │
                                         │  tight. Try:   │
                                         │  [suggestion]" │
                                         └────────────────┘
```

## Step 1: Capture Call Audio

You need both sides of the conversation in real time. Options:

**Option A: Softphone + audio routing**
If you're using a VoIP system (Aircall, RingCentral, Dialpad), route the audio output to a local capture tool. On Mac, use BlackHole or Loopback to create a virtual audio device that captures system audio.

**Option B: Speakerphone + mic**
The simplest approach: put the call on speaker and use your computer's microphone to capture both sides. Not ideal audio quality, but it works and takes 5 minutes to set up.

**Option C: Phone integration**
Some phone systems offer real-time audio streams via API. Twilio's Media Streams, for example, can pipe live call audio to a WebSocket endpoint.

## Step 2: Real-Time Transcription

Speed matters here. A suggestion that arrives 10 seconds late is useless. You need transcription with sub-second latency:

**Deepgram** is the go-to for this. Their streaming API transcribes audio in real time with ~300ms latency. It also handles speaker diarization (knowing who said what) which is critical for understanding the conversation flow.

Set up a WebSocket connection that sends audio chunks and receives transcript fragments as they come in.

## Step 3: Build the Coaching Engine

This is where OpenClaw shines. Feed the rolling transcript to your agent with instructions like:

```markdown
## Sales Coach Rules
You are a real-time sales coach. You see a live transcript of a cold call.

Your job:
- Detect objections and suggest responses immediately
- Notice buying signals ("that's interesting", "how does pricing work?")
- Flag when the salesperson is talking too much (suggest shutting up)
- Recommend when to go for the close
- Provide specific phrases, not vague advice

Common objections and responses:
- "Send me an email" → "Totally, I'll send something over. Quick question before I do..."
- "We already have a vendor" → "Makes sense. Most of our clients did too. Curious, what would need to change for you to consider an alternative?"
- "No budget" → "I hear you. If budget wasn't a factor, is this something you'd want to explore?"
- "Not interested" → "Fair enough. Just so I know, is it the timing or the concept that doesn't fit?"

Keep suggestions SHORT. The salesperson is on a live call. 1-2 sentences max.
```

## Step 4: The Display

The suggestions need to appear somewhere you can see during the call without it being awkward. Options:

- **Floating overlay:** A small transparent window on top of your screen
- **Second monitor:** Dedicate a screen to the coaching panel
- **Terminal window:** Simple text output, new suggestions appear as they come

The display should show:
- The latest suggestion (big, readable at a glance)
- Current conversation sentiment (green/yellow/red)
- Talk-time ratio (are you talking too much?)
- Key topics detected

## Step 5: Post-Call Analysis

After the call ends, the agent generates a summary:

- What went well
- Missed opportunities
- Objections handled (and how)
- Suggested follow-up actions
- Score: 1-10 call quality rating

Over time, this builds a dataset of your calls. You can see patterns: which objection responses actually work, what your average talk-time ratio is on successful calls, and where you consistently lose prospects.

## Privacy and Ethics

This is important: always comply with call recording laws.

- **One-party consent states:** You can record/transcribe if you're on the call
- **Two-party consent states:** You need the other person's consent
- **Best practice:** "This call may be recorded for quality purposes" covers you in most jurisdictions

The AI isn't recording the call for someone else. It's helping you be better at your job in real time. But make sure you're on the right side of local laws.

## Real Results

The builder who created this (Jonah) uses it for his agency's cold calling. The real-time suggestions help with:

- Faster recovery from unexpected objections
- Better talk-to-listen ratio (the AI tells you when to stop talking)
- Higher conversion rates on calls (more meetings booked)
- Faster ramp-up for new salespeople (instant coaching from day one)

The biggest win? Confidence. When you know you have backup, you make calls you'd otherwise skip.
