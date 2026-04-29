---
layout: blueprint.njk
title: "He Gave His Home a Brain. 50 Days Later, His AI Wakes Him Up, Cleans His House, and Judges His Sleep."
description: "G-Bot is a self-hosted OpenClaw assistant running on a Linux VM, talking to its owner only through Telegram. In 50 days it grew from a chatbot into a 23-service stack that runs his home, finances, health, and memory. Here's what's inside, what works, and what to steal."
date: 2026-04-29
difficulty: Advanced
cost: "$30-50/mo in AI tokens; everything else self-hosted on existing hardware"
timeToSetup: "50 days as documented. A few focused weekends to reach 80% of the value."
originalSource: "https://www.reddit.com/r/openclaw/comments/1s0ywz6/i_gave_my_home_a_brain_heres_what_50_days_of"
originalAuthor: "RelationDull2825"
originalAuthorUrl: "https://www.reddit.com/user/RelationDull2825"
issueNumber: 11
permalink: /blueprints/g-bot-home-brain/
tags:
  - self-hosted
  - home-automation
  - personal-ops
  - telegram
  - home-assistant
  - firefly-iii
  - apple-health
  - grafana
  - memory
  - voice
  - openclaw
---

## What You'll Build

A single AI assistant that owns the surface area of your entire digital life. Talks to you through Telegram. Runs your house. Tracks your money. Watches your health. Remembers what you've decided. Speaks to you in voice when it matters. Bilingual if you are. Self-hosted, so the data never leaves your network.

The original builder, who posts as `RelationDull2825` on Reddit, calls his version **G-Bot**. He started with a basic Telegram chatbot 50 days ago. As of his writeup it runs **12 LLMs, 9 Docker containers, 23 monitored services, 1,078 semantic memory chunks**, and a custom dashboard he uses to watch the whole stack.

This is the most ambitious personal-AI build we've covered. It's also the most replicable, in pieces. Most readers won't run all 23 services. Most readers will read this, pick the 3 or 4 components that match their life, and walk away with a system that does 80% of what G-Bot does.

The point of the blueprint is not that you should clone the whole thing. It's that **one ambitious user spent 50 days proving what's possible**, and the cost of replicating any single component (the morning briefing, the spending tracker, the sleep analysis, the home automation layer) is one focused weekend.

## Why You're Still Switching Between 7 Apps

Stop and count the surfaces you check on a normal Tuesday morning. Calendar app. Weather app. News headlines. Personal email. Work email. Banking app. Step counter. Smart-home dashboard. Spotify. Slack or Discord.

That's 10 contexts. Each requires you to load it, scan it, decide if anything matters, and move on. The combined cognitive cost of those switches is the reason you feel slightly behind on your own life by 9am, even though nothing has gone wrong.

The reason most people haven't fixed this is that "consolidating your tools" used to mean "building a custom dashboard," which nobody had time for. The dashboard era never delivered on its promise. The agent era is doing it instead.

G-Bot's pitch is simple. One inbox, Telegram. One brain, an OpenClaw agent. Everything that used to require an app is now a sentence. *"How did I sleep this week."* *"What did I spend on restaurants."* *"Clean the kitchen."* *"Cast the photos on the Hub."* *"Tu te souviens comment on a fixé le bug du Roborock?"* (yes, that's a real example from the writeup, in French because he code-switches and the agent follows.)

The shift in attention this produces is the actual product. You stop opening apps. You ask one thing. Sometimes you talk back to the answer.

## The Pattern

G-Bot is built around 4 organizing layers. Every other piece slots into one of them.

### 1. The Brain

A Linux VM running an OpenClaw Gateway as a `systemd` user service. Multi-model routing: GLM-5 as the default, Kimi K2.5 for complex reasoning, Claude Sonnet for code tasks, MiniMax for voice briefings, GLM4-Flash for lightweight background work. The agent picks the right model per task automatically.

The interface to the user is a single Telegram chat. Every command, query, photo, and voice message flows through it.

### 2. The Surfaces

Each domain G-Bot manages has its own integration layer:

- **Home:** Home Assistant (Docker) bridges to Roborock vacuum, Philips Hue, Govee thermometers, Tapo cameras, Google Nest Hub, NVIDIA Shield, Sonos, a humidifier.
- **Money:** Firefly III with SimpleFIN Bridge syncing 13 bank accounts twice a day. 65+ auto-categorization rules, 4 budgets with monthly limits, custom Python pushing data to InfluxDB and Grafana.
- **Health:** Apple Health auto-synced to InfluxDB via a local webhook. Six Grafana dashboards (sleep, HRV, heart rate, VO2 Max, activity, SpO2). A RandomForest ML model retrained every Sunday at 3am.
- **Voice:** Local Coqui TTS server, 58 voices, 17 languages, free. Telegram voice clips in Opus, Nest Hub clips in MP3, no ffmpeg pipeline.
- **Memory:** Three tiers. Daily markdown logs for raw session notes. A `MEMORY.md` for curated long-term knowledge. ChromaDB with 1,078 semantic chunks for retrieval. The long-term memory is only loaded in private sessions, never in group chats.

### 3. The Plumbing

The unsexy layer that holds everything together. Docker for containerization. InfluxDB for time-series data. Grafana for the dashboards. ChromaDB for vector retrieval. Cloudflare tunnels for external access without exposing ports. A custom Node.js dashboard that shows live status of all 23 services, with one-click sync triggers.

### 4. The Routines

The agent runs on cron and heartbeat:

- Morning briefing at wake-up: news, weather, calendar, finance update, an AI project idea, voice summary on the Nest Hub.
- Bank sync 2x/day with categorization.
- Apple Health webhook ingest, continuous.
- Sleep prediction every Sunday with the retrained ML model.
- Memory consolidation per session.

## Step-by-Step Setup (the 80% version)

You're not going to replicate G-Bot in a weekend. You can replicate the 4 highest-leverage components in a weekend each.

### Weekend 1: Telegram + OpenClaw + Multi-Model Routing

Install OpenClaw on a small Linux box. Wire it to Telegram. Configure 2-3 model providers (GLM, Claude, a local model via Ollama). Test that asking different kinds of questions routes to the right model. By Sunday night, you can text a chat thread and get useful answers back.

### Weekend 2: Home Assistant Bridge

Install Home Assistant in Docker. Connect 3-5 of your existing smart devices. Wire your agent to Home Assistant via the REST API. By Sunday night, "*dim the lights*" and "*what's the temperature in the bedroom*" both work.

### Weekend 3: Finance Tracking

Install Firefly III. Connect SimpleFIN Bridge (or Plaid via a self-hosted wrapper, or just upload CSVs from your bank). Set 5 categorization rules. By Sunday night, your agent can answer "*how much did I spend on restaurants*."

### Weekend 4: Health Tracking + Morning Briefing

Wire Apple Health to a webhook that pushes to InfluxDB. Set up 2 Grafana dashboards (sleep + activity). Build the morning briefing routine that combines weather + calendar + a quick health summary, fires it at your wake-up time, optionally voices it through Coqui TTS.

After 4 focused weekends, you have G-Bot's most-used 80%. Memory tier, voice on the Nest Hub, the ML sleep predictor, and the dashboard are all polish you can layer in over time.

## What Failed (Hard-Learned Gotchas)

The most useful part of the original Reddit post is the section on what went wrong, because every long-running agent setup hits something equivalent. The two big ones G-Bot called out:

**The Roborock app_segment_clean trap.** Calling `app_segment_clean` on a Roborock silently resets the mop intensity on every call. The original builder lost a full custom map by triggering room-cleaning runs without realizing the mop was being reset each time. The fix: explicitly set mop settings and `sleep 15` before each launch. The API docs don't mention this anywhere.

**The Apple Health step-count granule.** Apple Health exports step counts as per-minute granules, not daily totals. Naive queries returned "5 steps today" instead of the actual thousands. The fix: switch to `sum()` aggregation for cumulative metrics.

These look like obscure gotchas. They're representative of every long-running agent setup. The reality of running a self-hosted assistant is that 80% of your debugging time is "the API I'm calling has a non-obvious behavior I didn't expect," and the only way to find them is to break things over weeks of real use.

The lesson, useful even if you never touch a Roborock: **build for surprise, not perfection.** Log everything. Make every action reversible. Run the new automation in dry-run mode for 3 days before you trust it. Read the writeup's gotchas before you start the equivalent integration in your own setup.

## Lanes That Work

You don't have to be the kind of person with 13 bank accounts and an ML sleep predictor to use this pattern.

**The single-domain version.** Pick one of the 4 layers. Run only that one. A finance-tracking agent that ingests your accounts and answers "where am I overspending" is itself worth a weekend.

**The household version.** Skip the personal-finance layer entirely. Run Home Assistant + a Telegram agent. Family members can text the agent. "*Is the front door locked.*" "*Turn off the lights downstairs.*" "*Who left the upstairs window open at 3am.*"

**The remote-worker version.** Skip the smart-home layer. Run finance + health + memory + a project-tracking layer. Talk to one assistant about your week. Ask "*what did I commit to this week*", "*what's my burn rate*", "*how am I sleeping*". Personal accountability without 4 different apps.

**The small-business owner version.** Replace the personal-finance layer with QuickBooks. Replace the health layer with your CRM or your calendar. Replace the smart-home layer with your physical premises (security cameras, point-of-sale, scheduling system). Same architecture, business-flavored. This is essentially the Andon Market playbook at a smaller scale.

## What Changes After Setup

The shift G-Bot's builder describes is subtle but real. Your relationship to your own data changes when one entity can see all of it. You stop checking 10 apps. You stop forgetting what you committed to last week. You stop noticing whether your sleep is trending up or down because the system tells you. Your home becomes ambient, not interactive.

For the kind of person who has tried 4 different "personal CRM" apps and abandoned all of them, this is the answer. The CRM apps failed because they required you to type things into them. The agent works because *you don't*. Everything that touches your digital life flows through the agent automatically, and the agent surfaces what matters.

The qualitative effect after a couple of months is that you trust the system. When you can't remember whether you turned off the kitchen lights, you ask. When you can't remember how much you spent on a recent trip, you ask. When you forgot what you decided to do about a problem 6 weeks ago, you ask. The cognitive overhead of remembering everything yourself, which most adults absorb invisibly, drops noticeably.

## Gotchas and Tips

**Don't try to build all 4 layers at once.** Pick one. Get it stable for 2 weeks. Then add the next. The compounding pain of debugging 4 half-finished integrations simultaneously is what kills most builds at this scale.

**Self-host everything you can.** G-Bot's defining choice is that almost everything (Home Assistant, Firefly, Grafana, ChromaDB, Coqui TTS, the dashboard) is on the builder's own machine. The data never leaves. The system survives any individual SaaS shutting down or hiking prices. The cost is one Linux VM and one weekend of setup per service.

**Use Telegram as the only interface.** The temptation to build a fancy web UI is strong and wrong. Telegram is universal, supports voice, supports photos, runs on every phone, and your family can use it without any onboarding. G-Bot's "exclusively via Telegram" rule is a feature, not a limitation.

**Keep the long-term memory private.** G-Bot's memory layer is gated: the curated long-term `MEMORY.md` only loads in private chats, never in group chats. If your family also talks to the agent, you don't want it dropping personal financial details into a household thread. Build this guardrail in from day one; it's annoying to retrofit.

**Run a status dashboard.** With 23 services, something is always slightly broken. The custom Node.js dashboard the builder describes (clickable sync jobs, last-run + next-run times, live Docker status) is the difference between "I trust this stack" and "I'm scared to look at it." If you're running 5+ integrations, build the dashboard early.

**Document the gotchas as you find them.** Every weird API behavior, every silent failure, every "it works but only if you do it in this exact order" gets a line in a `LESSONS.md` file. By month 3, this file is what makes the system maintainable, especially when you come back to fix something at midnight 6 weeks later.

**Pick the right LLM router policy.** G-Bot uses GLM-5 by default and bumps up to Claude or Kimi only when needed. This is the cost-saving move that makes 24/7 multi-agent setups affordable. You don't need a frontier model for "what's the temperature in the kitchen." Save the expensive models for the work that actually justifies them.

**Set up Cloudflare tunnels (or equivalent) for external access.** The temptation to expose ports directly is huge. Don't. Cloudflare tunnels give you external access to your dashboard without opening anything to the internet. The setup is one afternoon. The peace of mind is permanent.

**The hardest part is the discipline, not the tech.** Every component G-Bot uses (Home Assistant, Firefly, Coqui TTS, OpenClaw) is documented and self-hostable. The skill is showing up every weekend for 50 days and adding the next layer. Most people who try this give up around weekend 3. The ones who don't end up with something they'll never go back from.

---

## Keep Reading

- **[Build an AI Life OS That Knows Your Entire Day (Before You Do)](/blueprints/ai-life-os/)** — The framework version of what G-Bot does in practice. If you want the strategy before you build, start here.
- **[Never Copy a Date From an Email to Your Calendar Again](/blueprints/email-to-calendar/)** — One of the small skills that fits inside G-Bot's morning-briefing routine. Run this even if you don't build the rest.
- **[Your AI Remembers Everything So You Don't Have To](/blueprints/ai-real-time-assistant/)** — The memory pattern. G-Bot's three-tier memory system is one implementation; this blueprint covers the broader architecture.

**Want the full deep dive?** Read our [Best OpenClaw Skills](/learn/best-openclaw-skills/) guide for the foundational skill patterns this blueprint depends on.
