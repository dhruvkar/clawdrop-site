---
layout: blueprint.njk
title: "One Claude Code Subscription. Five Agents. Zero New Frameworks."
description: "How one founder built a voice-controlled AI command center with 5 specialized agents and self-managing memory, using only his existing Claude Code plan."
date: 2026-04-15
difficulty: Advanced
cost: "$20/month (existing Claude Code subscription)"
timeToSetup: "A weekend to replicate, ongoing to extend"
originalSource: "https://www.youtube.com/watch?v=rVzGu5OYYS0"
originalAuthor: "Mark Kashef"
issueNumber: 9
permalink: /blueprints/claude-code-command-center/
tags:
  - command-center
  - multi-agent
  - voice
  - personal-ai
  - agent-sdk
  - claude-code
  - solopreneur
  - founder
---

## What You'll Build

A personal AI command center that runs on your Mac and does everything a team of virtual assistants would do. Five specialized agents that delegate work to each other through a shared memory. A voice interface where you pick up a phone-style handset and have an actual spoken conversation with your system. A dashboard you pull up in a browser to see what every agent is working on. Memory that cleans itself up every 30 minutes. Security layers that stop your agents from accidentally leaking your data. An auto-launch service that spins the whole thing up the moment your Mac boots.

And the punchline: the only thing you're paying for is your existing Claude Code subscription. No new frameworks. No extra API costs. No subscription to yet another AI platform that'll ship breaking changes next Tuesday.

This is the exact setup Mark Kashef built and walked through in a 22-minute video. He calls it a "war room" and it genuinely looks like one. We've pulled apart the architecture, named the moving pieces, and turned his walkthrough into a blueprint you can replicate if you already have Claude Code running on your machine.

The original is Mark's video. The structure and philosophy are his. What we added is the step-by-step adaptation so you can build your own version without watching 22 minutes of someone else's terminal.

## Why Frameworks Keep Coming and Going

Every two weeks a new AI agent framework launches. It promises to solve the "how do I actually run multiple agents" problem. People build on top of it. Then it updates. Then it breaks. Then a newer framework launches claiming to fix everything the old one got wrong.

Mark's argument, and it's a good one, is that you should stop chasing frameworks and start building on the thing underneath them. Claude Code is the atomic primitive. It ships with the Agent SDK. It has a real runtime. It gets actively maintained by Anthropic. Every framework you'd install on top of it is just a thin layer trying to abstract things the SDK can already do.

Here's the math that won him over. He was paying for Claude Code anyway ($20/month). He was also paying API costs for OpenClaw. Then more API costs for Hermes Agent when he tried it. Then considering paying for Anthropic Channels when that came out. Four subscriptions, three of them doing roughly the same thing, all of them at different places on the "actively maintained vs actively abandoned" spectrum at any given moment.

He ripped them all out. Kept the Claude Code subscription. Built everything else on top as removable layers.

The system he ended up with has more functionality than any of the frameworks he replaced. It has voice. It has multi-agent delegation. It has self-managing memory. It has security. It has auto-launch. It has a dashboard. And every piece is code he owns and understands, not a library he has to wait for a maintainer to fix.

The bigger lesson isn't "don't use frameworks." It's "don't use frameworks that duplicate functionality you already paid for." If you're already on Claude Code, every framework on top of it is spending your money to give you what you already have.

## The Pattern

The architecture is 7 layers stacked on top of Claude Code.

```
CLAUDE CODE (you already pay for this)
        |
        v
AGENT SDK (bridge layer, 200 lines)
        |
        v
5 SPECIALIZED AGENTS (research, comms, ops, finance, personal)
        |
        v
HIVE MIND MEMORY (shared context, self-managing)
        |
        v
VOICE WAR ROOM (Pipecat + Gemini Live)
        |
        v
MISSION CONTROL DASHBOARD (Cloudflare tunnel)
        |
        v
SECURITY + AUTO-LAUNCH (allowlist, exfiltration guard, launchd)
```

Each layer is independent. You can strip any of them out and the layers below still work. You can add new layers without breaking the old ones. This is the "removable layer" philosophy Mark built around.

## Step-by-Step Setup

### Step 1: Start With 200 Lines of Code

Mark's v0 was 200 lines. Telegram as the input interface, SQLite as the memory store, Claude Code as the brain. That's it. No agents, no voice, no dashboard. Just a way to message a bot that could do useful things.

Start here. Do not try to build the full system on day 1. The 200-line version is where you learn what you actually want the system to do. Most founders skip this step and then build something that doesn't fit their workflow because they never tested a minimal version first.

What the 200 lines do:
- Listen for messages on Telegram
- Pass each message to Claude Code as a task
- Write the result back to Telegram
- Store a rolling window of conversation in SQLite so Claude has context

That's a functioning personal AI agent. Use it for a week. Notice what you actually ask it for. Notice what frustrates you about it. That frustration is the spec for the next layer.

### Step 2: Add the Agent SDK Bridge

Once you know what you want, wrap your 200 lines in the Agent SDK. The SDK is the official Anthropic library that lets you spawn Claude Code sessions as agents with specific system prompts, tools, and memory contexts.

Your existing code becomes a thin wrapper that:
- Receives a task
- Spawns a fresh Claude Code agent with the right system prompt for that task type
- Lets the agent run to completion
- Returns the result

The bridge is what makes everything above it possible. Without it, you're manually managing Claude Code sessions. With it, you can programmatically start, monitor, and coordinate any number of them.

### Step 3: Build the 5-Agent Hive Mind

Now split your single agent into 5 specialized agents. Mark's split:

1. **Research agent.** Web search, paper reading, data gathering, competitive intel.
2. **Comms agent.** Writing emails, drafting messages, formatting replies, handling outreach.
3. **Ops agent.** Calendar, tasks, reminders, workflows, anything procedural.
4. **Finance agent.** Transaction review, expense categorization, invoice tracking.
5. **Personal agent.** Journaling, reflection, personal memory, conversation history.

Each agent has its own system prompt that defines what it's good at and what it should hand off. They share a **hive mind**, which is a common memory store every agent reads from and writes to.

The hive mind is what makes delegation possible. When the research agent finishes a task, it writes the summary to the hive mind. When the comms agent needs to draft an email based on that research, it reads from the hive mind and uses the context automatically. The agents don't call each other directly. They communicate through shared memory.

This pattern is older than AI. It's the same idea as an "event bus" or a "message queue." Mark calls it a hive mind because it's more evocative and because the effect is that the system feels like one distributed intelligence rather than five disconnected bots.

### Step 4: Wire Up the Memory Washing Machine

The hive mind gets noisy fast. A week of agent activity and you have thousands of entries, 90% of which are irrelevant to any current task. Memory grows, retrieval slows, useful context gets buried.

Mark's fix is what he calls a "memory washing machine." Every 30 minutes, a separate Gemini-powered agent runs over the raw memory store and does 4 things:

1. **Classifies** each memory entry by importance (critical, relevant, trivial).
2. **Decays** the trivial stuff so it doesn't show up in future retrievals.
3. **Pins** the critical stuff so it never gets lost, even as memory grows.
4. **Consolidates** duplicates and near-duplicates into single entries.

He uses Gemini for this specifically because it's cheap and fast for bulk classification tasks. You don't want to burn Claude tokens on memory hygiene. Gemini handles it in the background for pennies.

The result is a memory store that gets smarter over time, not dumber. Most personal AI systems rot as they accumulate context. Mark's gets cleaner.

One detail he emphasizes repeatedly: **memory is personal**. Each agent has its own working memory (what it's doing right now) and also reads from the shared hive mind (what everyone else knows). Don't try to make all memory global. Some context belongs to one agent and sharing it with the others just creates noise.

### Step 5: Add the Voice War Room

This is the part of the video that goes viral. Mark picks up a handset-style device, says "hey, what's on my calendar today," and has an actual spoken conversation with the system that includes delegation. The research agent pulls the calendar. The ops agent reformats it into a briefing. The comms agent drafts a response to a meeting conflict. All of it happens through voice.

The stack for the voice layer:

- **Gemini Live** handles the real-time speech-to-text and text-to-speech. It's better than alternatives for spoken-conversation flow because it's built for that use case specifically.
- **Pipecat** is the framework that glues voice input to your agent runtime. It handles audio framing (the "frames and envelopes" concept Mark explains in the video) so you don't have to write your own WebRTC plumbing.
- **Daily.co** is the transport layer for the meeting-room-style interface. It's overkill for a single user, but Mark uses it because he wants the option to bring other humans into the war room later (hence the name).
- **Pika avatars** are optional but add a visual element so you feel like you're talking to something, not just a voice in a speaker.

The minimum viable version is Gemini Live + Pipecat. Everything else (Daily.co, Pika) is cosmetic. If you just want to talk to your agents, the first two are enough.

### Step 6: Build the Mission Control Dashboard

Voice is great for conversational tasks. It's terrible for seeing what's happening. You need a visual layer.

Mark's dashboard runs locally and is exposed to his phone through a **Cloudflare tunnel**. That last part is important. He doesn't open ports on his router. He doesn't host anything public. Cloudflare tunnel gives him a private HTTPS URL that only routes to his Mac, and he's the only one with access.

The dashboard shows:
- What each agent is currently working on
- The message queue (pending tasks)
- Recent memory entries
- A "new task" button with auto-routing (you type what you need, the system picks which agent handles it)
- Quick-access shortcuts to common workflows

The "new task" button is the most interesting part. You don't have to specify which agent handles a task. The dashboard sends the task description through a classifier that picks the right agent based on the task's content. This is how a mission control system should work: you describe what you want, the system figures out who handles it.

### Step 7: Security Layers You Cannot Skip

An AI system that can read your files, send emails, and browse the internet is a system that can be social-engineered into leaking your data. Mark's security layers address this.

**Telegram chat ID allowlist.** Only specific Telegram user IDs can send messages to the system. If a random user tries to interact with your bot, the bot ignores them. This is table stakes.

**Exfiltration guard.** Before any outgoing message is sent (email, Telegram reply, API call), a separate small model reads it and checks for sensitive content: API keys, passwords, PII, credentials. If it finds any, the message is blocked and you get a notification. This stops the most common prompt injection attack, which is tricking your agent into sending your secrets somewhere.

**Anthropic terms of service compliance.** Mark spends a full chapter explaining why he built within Anthropic's TOS and how he avoided patterns that would get his account banned. If you're running an agentic system on Claude Code, read the TOS carefully before you scale usage. Some patterns people casually use (mass scraping, unattended operation for days) are explicitly against the rules.

**Message queue prevents silent failures.** If an agent fails to complete a task, the task goes back in the queue with an error flag, not silently dropped. Silent failures are how personal AI systems lose your trust. Loud failures keep the system honest.

### Step 8: Auto-Launch With launchd

The system has to start when your Mac boots. Manually running it means you forget half the time, and a system you have to remember to start isn't really running.

Mark uses **launchd**, the native macOS service manager, to register each component as a service that starts on boot. The agent runtime, the voice layer, the dashboard, the Cloudflare tunnel, all of them get launchd entries that fire in the right order with the right environment variables.

This is the least glamorous step and the most important one. Without it, you have a prototype. With it, you have something that's actually running all the time without your attention.

On Linux, the equivalent is systemd. On Windows, it's the Task Scheduler. Every OS has a way to auto-start services. Pick yours and wire it up.

## Lanes That Work

This build fits a specific kind of person. Be honest about whether it's you.

**Technical founders who already live in Claude Code.** You're already paying for it. You're already comfortable writing code. You want the system you use every day to be something you own, not something you rent from a framework vendor. This is the clearest fit.

**Solo operators running multiple businesses or projects.** The 5-agent split maps naturally to different functional areas. Research for one business, comms for another, ops for a third. One command center across all of them.

**Founders who've been burned by framework churn.** If you've already installed and uninstalled OpenClaw, Hermes Agent, and Anthropic Channels trying to find "the one," this is the exit ramp. Stop looking for the right framework. Build your own thin layer.

**Privacy-focused users.** Everything runs locally on your Mac. Cloudflare tunnel means no ports open on your router. Exfiltration guard means your data doesn't leak through prompt injection. If you can't run your AI in the cloud for compliance reasons, this is the pattern.

What doesn't work: **non-technical users**. This is not a "set up in an afternoon" project. You need to be comfortable with the Agent SDK, Python or TypeScript, launchd services, and debugging voice stacks. If you're not ready for that, the system to build first is something simpler (see our cold email list pipeline or daily content machine for less technical entry points).

## What Changes After Setup

The first week feels strange. You talk to your Mac out loud. You watch agents hand off tasks to each other on a dashboard. You see memory entries appear, get classified, and disappear. It feels like a prototype because it is a prototype.

By week 2, you stop noticing the machinery. You just start using it. You say "hey, can you check what I committed yesterday and draft a summary email to the team" and it happens. The research agent pulls the git log. The comms agent writes the email. The ops agent schedules it to send at 9am. Three agents, one voice command, zero context switching.

By week 4, you realize you're no longer using any of the other AI tools you used to juggle. No ChatGPT tab. No separate note-taking app. No task manager. No meeting transcription service. They've all been absorbed into the command center, and the command center is just Claude Code with 7 layers on top.

The daily cost of the system after the first build is close to zero. You're already paying for Claude Code. Gemini memory washing is fractions of a cent per day. Cloudflare tunnels are free. Everything else runs on your local hardware. The actual monthly AI bill for a fully-loaded personal command center can be **under $25** if you're careful.

Compare that to the stack it replaces: ChatGPT Plus ($20), a note-taking AI app ($10-20), a meeting notes app ($14-30), a task manager with AI features ($10-15), whatever standalone voice assistant ($10-30). That's $64-115 a month. And none of those tools talk to each other.

## Gotchas and Tips

**Do not skip v0.** Build the 200-line version first. Use it for a week. Resist the urge to jump straight to the 7-layer architecture. The layers only make sense once you know what you actually want the system to do, and you only know that after you've lived with a minimal version.

**Memory decay is load-bearing.** Every founder who builds a personal AI system eventually hits the same wall: the memory gets too big and retrieval stops working. You have to implement decay from day 1, not "eventually." Mark uses Gemini because it's cheap, but any small model works. Just don't skip it.

**Voice is a luxury, not a requirement.** Build steps 1-4 first and use the system via Telegram for a few weeks. You might realize you don't actually need voice. Half the people who build voice layers stop using them within a month because typing is faster for most tasks.

**Cloudflare tunnel is the correct way to expose your dashboard.** Do not open ports on your router. Do not host anything public. Cloudflare tunnel gives you HTTPS, authentication, and access control for free.

**Read the Anthropic TOS before scaling usage.** Unattended agentic operation has specific rules. Mass scraping has specific rules. Running multiple agents with parallel sessions has specific rules. Most people never read the TOS. Mark did, and built within it. You should too.

**Security layers before feature layers.** Exfiltration guard and allowlist go in before you add voice or dashboard. Once a system has voice, it can be social-engineered. Once a system has a dashboard, it can be phished. Ship security first.

**Auto-launch matters more than it sounds.** A system you have to remember to start is a system you don't trust. Wire up launchd (or systemd, or Task Scheduler) before you consider the build finished.

**Mark's free blueprint kit is genuinely useful.** He released 8 modular Power Pack prompts, a mega prompt to paste into Claude Code, and a 20-page visual architecture guide on Gumroad for free. If you're going to build this, start by reading that. Link is in the original video description.

---

## Keep Reading

- **[Build an Autonomous Business Bot (The Felix Method)](/blueprints/felix-bot/)** — A simpler version of the same pattern. If the command center is too much, start here.
- **[Replace Your SaaS Stack With One AI Agent](/blueprints/replace-saas-stack/)** — The financial case for consolidating tools into a single agentic system, with specific subscriptions to kill.
- **[Give Your AI a Second Brain That Gets Smarter Every Day ($0/Month)](/blueprints/ai-second-brain-karpathy/)** — The memory layer Mark builds on top of, explained in more depth if you want to go deeper on the knowledge side.
