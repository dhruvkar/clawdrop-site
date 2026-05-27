---
layout: playbook.njk
title: "Send Your AI Agent Into the Meeting While You Skip It"
description: "A new wave of OpenClaw builds put AI agents in your Zoom, Google Meet, and Teams calls as real participants. They speak, they share screens, they remember. Here's the architecture and the businesses that should be using it first."
date: 2026-05-27
difficulty: Intermediate
cost: "$30-150/month (voice provider + meeting API + Claude API)"
timeToSetup: "1-2 evenings for a minimal agent, a weekend for the polished version"
originalSource: "https://old.reddit.com/r/openclaw/comments/1tl5r11/send_claws_into_google_meet_teams_zoom_with_voice/"
originalAuthor: "u/WorthAdvertising9305"
issueNumber: 15
permalink: /playbooks/ai-agent-in-the-meeting/
tags:
  - meetings
  - voice-agents
  - operations
  - customer-success
  - sales
  - agencies
---

## Tools

- [**OpenClaw**](#aff-openclaw): orchestrates the agent's behavior, memory, and tool use
- [**Claude**](#aff-anthropic): the brain that decides what to say and when to share
- [**Retell**](#aff-retell): voice layer that handles real-time speech in and out
- [**ElevenLabs**](#aff-elevenlabs): alternative voice provider with custom voice cloning
- [**Recall.ai**](#aff-recall): bot infrastructure that joins Zoom, Meet, and Teams calls
- [**Tavus**](#aff-tavus): optional video avatar layer so the agent has a face on screen
- [**Fathom**](#aff-fathom): captures the recording for after-the-meeting memory

## What You'll Build

An AI agent that joins your meetings as an actual participant. Not a note-taking bot in the corner. An active member of the call that:

1. **Speaks with a real voice** in real time, with sub-second latency.
2. **Shares its screen** when it needs to show a document, a dashboard, or a deck.
3. **Reads the room** via the transcript stream and decides when to interject.
4. **Remembers everything** from prior calls with the same people, the same accounts, the same deals.
5. **Hands off cleanly** when a human needs to take over.

If you have ever wished you could clone yourself for the 12 standing meetings on your calendar that don't need you specifically, this is what that looks like in 2026.

## Why This Works

Most companies still treat AI as a layer that runs *around* the meeting. The bot transcribes. The summarizer summarizes. The CRM updater updates. Everyone agrees that's useful. Nobody questions that the meeting itself was still a meeting with humans on both sides.

The new wave breaks that assumption. The agent is *in* the meeting. Once you accept that, a lot of standing calls stop needing you:

- The weekly status check with a client where 80% of the time is them telling you their week and you nodding.
- The internal sync where two teams report metrics back and forth.
- The vendor demo where a salesperson walks through the same deck for the fifth time.
- The customer success check-in where the playbook is literally a checklist.

A real human still needs to be on calls where stakes are high, trust matters, or the conversation could go anywhere. But for the 60-70% of standing meetings that are predictable, the agent is the better fit. It is on time, it is consistent, it remembers, and it never has a bad week.

## How the Architecture Works

The build has four moving parts. Each one is a separate service that does one thing well.

### Layer 1: The Meeting Bridge

The agent has to actually join the call. There are two paths:

- **Bot infrastructure** like Recall.ai. The bot joins Zoom, Meet, or Teams the same way a human attendee does. It receives audio and video streams. It can send audio back and share a screen. One API, all three major meeting platforms.
- **Native SDKs** like Zoom's Video SDK or Teams' Communication Services. More work to build, but lower per-minute cost at scale.

For the first version, use Recall.ai or a similar bot platform. Trade the cost for the simplicity.

### Layer 2: The Voice Loop

Speech in, speech out. Three pieces:

- **Speech-to-text** turns the room's audio into a transcript stream the agent can read. Deepgram, AssemblyAI, or Whisper.
- **The agent itself** is OpenClaw running a Claude model that watches the transcript and decides what to say. The decision logic is the part you actually tune.
- **Text-to-speech** turns the agent's response into audio. Retell handles the whole loop with low latency. ElevenLabs lets you clone a specific voice if you want the agent to sound like a particular human.

The trick is the response decision. Most "AI in meetings" demos fall apart because the agent talks too much or interrupts at the wrong time. The fix is a turn-taking layer: a small classifier that watches the transcript stream and only fires the response generator when the room has stopped speaking *and* the conversation context calls for input from the agent.

### Layer 3: The Screen Share

This is the part that separates the demo from the product. When the agent says *"let me pull up the latest numbers,"* it actually shares a screen with the numbers. Two ways to do this:

- **Pre-rendered.** The agent has a library of dashboards, decks, and documents indexed by topic. When it decides to share, it picks the right one from the library.
- **Generated on the fly.** The agent uses tools (a SQL query, an API call, a Notion page lookup) to fetch the data, renders it into a quick view, and shares that. Slower, but the content is always live.

For meetings where the content is the same every week (the standing client report, the team metrics review), pre-rendered is fine. For meetings where the conversation could go anywhere, on-the-fly is the only option.

### Layer 4: Memory

The agent has to remember the last seven calls with this person, what was promised, what was blocked, and what the next steps are. Two stores:

- **Per-account memory** for everything tied to a specific customer or deal. Stored as structured records you can query.
- **General agent memory** for everything else: house rules, your business's tone of voice, the language you use for specific concepts, the things you have agreed never to do.

The memory layer is what separates a useful agent from a parlor trick. Without it, every call starts from scratch and the human on the other side immediately notices. With it, the agent picks up exactly where the last call ended, including the things you forgot.

## Step-by-Step Setup

### Step 1: Pick the Meeting Type to Replace First

Don't try to send the agent into your most important call. Start with one of the standing meetings that drains time without producing much:

- The weekly account check-in with a long-tenured client.
- The internal cross-functional sync that reports the same dashboard every week.
- The vendor walkthrough you sit through for the third time this quarter.

Whichever you pick, write down what *actually has to happen* on that call. Most of the time the answer is a small list: confirm status on 5 items, share next week's plan, take any new requests. That list becomes the agent's script.

### Step 2: Set Up the Meeting Bridge

Sign up for Recall.ai. Their starter plan covers a few hundred bot-minutes per month. Get the API key. Test that you can spin up a bot that joins a meeting you scheduled.

The bot's identity matters. Give it a name that signals what it is. Something like *"Apollo, Acme Account Manager (AI)"* is better than *"Notetaker."* People accept an AI participant when they know it's an AI. They feel deceived when they realize halfway through that the helpful manager was a bot.

### Step 3: Build the Voice Loop

Start with Retell. It handles the speech-to-text, the response generator, and the text-to-speech in one platform. You wire OpenClaw in as the response engine and Retell handles everything else.

Tune two things:

- **The turn-taking timeout.** How long the agent waits after the room goes silent before it speaks. Start at 800ms. Adjust based on the meeting culture (some teams pause more, some less).
- **The interjection threshold.** How confident the agent has to be that input is wanted before it speaks unprompted. Start high. You'd rather it stays quiet than blurts.

### Step 4: Index the Pre-Rendered Content

Whatever the agent will need to share on screen, index it now. For a weekly account check-in, that might be:

- The dashboard with this client's account health metrics.
- The current sprint plan with progress against deliverables.
- The list of open action items from the last call.
- The roadmap slide for the next quarter.

Each one is a static URL or a deck slide. The agent's tool layer can fetch any of them by name.

### Step 5: Wire the Memory Layer

After every meeting the agent attends, write three things into memory for the next call:

- **What was discussed**, summarized into 5-10 bullets.
- **What was committed**, as a structured list of action items with owners and dates.
- **What changed in the room's sentiment**, if anything. (Were they frustrated? Excited? Cautious?)

The Fathom transcript is your input source. A small OpenClaw skill reads the transcript after every meeting and updates the per-account memory. The next time the agent joins a call with this account, it pulls those three things into its context.

### Step 6: Set Hard Limits

Before you let the agent loose, write down the things it must never do:

- Never make a financial commitment.
- Never agree to a new contract term.
- Never speak for a specific human team member.
- Never share content from a different client account.
- Always escalate to a human when the conversation moves outside the script.

These become hardcoded rules in the agent's system prompt and in the tool layer. The agent should not even have access to tools that could violate the rules.

### Step 7: Run One Real Call, Watch the Whole Thing

The first live call, you sit on it as a silent observer. Watch what the agent does well. Watch what it does poorly. Watch the human reactions on the other side. Most of the polish work happens in this step. Plan for 2-3 hours of cleanup after the first real call.

### Step 8: Scale to the Calendar Slowly

Once the first meeting type runs cleanly for a few weeks, move the agent into the next meeting type. Each meeting type needs its own script, its own pre-rendered content library, and its own hard limits. Don't try to make one generic agent that does everything. Make a small fleet of specialized agents, one per meeting pattern.

## Adapting This for Your Business

The pattern shows up wherever someone runs a high volume of similar meetings.

**Customer success teams.** The agent joins recurring check-ins with low-tier accounts. Surfaces upsell signals, flags churn risk, schedules the human CSM in when something needs real attention.

**Agencies and consultancies.** The agent joins weekly project status calls with established clients. Reports on the sprint, asks the four standard questions, captures requests. The senior consultant joins only the calls that escalate.

**Sales teams.** The agent runs early discovery calls where the script is well-known. Qualifies the prospect against the ICP, asks the standard questions, books the next call with a human AE if the lead is hot.

**Recruiters.** The agent runs initial screening calls with candidates. Walks through the role, asks the screening questions, captures the candidate's background. The human recruiter joins only the candidates who pass screening.

**Property managers.** The agent runs tenant check-in calls. Asks about maintenance issues, captures requests, walks through any open work orders. The property manager handles the calls that escalate.

**Vendors and suppliers.** The agent runs the quarterly business review with smaller customer accounts. Walks through usage stats, identifies expansion opportunities, schedules the AE for any account that's a fit.

The common thread is volume. If you have one weekly meeting of this type, the agent isn't worth building. If you have twenty, the agent saves a full FTE.

## Gotchas and Tips

- **Disclose the bot is an AI.** People react badly to discovering mid-call that the helpful participant was an AI. Front-load the disclosure in the calendar invite, in the bot's name, and in the agent's opening line. Honest about it from the start, people accept it surprisingly well.
- **Two-party consent states.** If anyone on the call is in a two-party consent state (California, Florida, Illinois, and others), you need explicit consent to record. Recall and Fathom handle the disclosure language; the responsibility is still yours. Talk to a lawyer about your specific situation.
- **The agent's voice matters more than you think.** A robotic voice signals "automated thing you can ignore." A natural-sounding voice signals "actual participant, listen up." Spend the money on the better voice provider.
- **Pre-rendered content beats generated content for now.** The latency on generating fresh visuals in real time is still rough. For most standing meetings, the same handful of dashboards and slides covers everything.
- **Don't put the agent in any meeting that could go anywhere.** Discovery calls with hot prospects, customer escalations, internal HR conversations, and anything that involves a hard decision are still human-only. The agent works because the meeting type is predictable. If the meeting could go anywhere, the agent is going to embarrass you.
- **Cost discipline.** A bot-minute on Recall plus a voice-minute on Retell plus the Claude API time adds up. A 60-minute call with the agent costs roughly $4-8 right now. Per-call that's nothing. Across hundreds of calls a month, watch the bill.

## What This Replaces

Before this stack:
- **Junior CSM time on low-tier accounts:** $40-80/hour, 4-8 hours per CSM per week on standing calls
- **Note-taker SaaS:** $25-50/user/month
- **CRM admin after every call:** 15-20 minutes per call

After this stack:
- **Recall.ai bot-minutes:** $0.02-0.04 per minute
- **Voice provider:** $0.10-0.40 per minute depending on quality
- **Claude API:** $0.05-0.20 per call typically
- **Total per 60-minute call:** $4-8, all-in

For an agency or CSM team running 100+ standing calls a month, the math is roughly a $40K-80K/year FTE swap for $400-800/month in stack costs. The remaining human time goes to the calls that actually need a human.

This is the part of the AI shift that most operators are sleeping on. Not "AI helps your team work faster." AI *is* one of your team members, sitting in the same meetings, doing the same work, while your humans do the work where humans are still better.

---

## Keep Reading

- **[Your Meetings Are Now a Searchable Knowledge Base (Fathom + Claude)](/playbooks/meeting-memory-fathom/)**: The post-meeting memory layer this build relies on. Fathom captures, Claude recalls, Workflows acts. Pair it with this playbook for the full before-during-after of every meeting.
- **[AI Whispers What to Say During Your Cold Calls in Real Time](/playbooks/ai-cold-call-coach/)**: A lighter version of the same pattern. The agent does not join the call but coaches the human in real time via the screen. Right for stakes-heavy calls where you want a human voice plus AI memory.
- **[His Life Insurance Agency Texts and Calls New Leads in 2 Minutes. Automatically.](/playbooks/life-insurance-2-minute-follow-up/)**: The companion piece for voice-first lead handling. Different surface (outbound phone) but the same idea: low-stakes, high-volume conversation handled by an agent with the human stepping in only when it matters.
