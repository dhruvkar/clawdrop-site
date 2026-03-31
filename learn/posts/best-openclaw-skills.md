---
layout: learn.njk
title: "The Best OpenClaw Skills to Install in 2026 (And What to Skip)"
description: "13,000+ skills on ClawHub. Most are junk. Here are the ones worth installing, organized by what you actually want to do."
date: 2026-03-23
lastUpdated: "March 2026"
readTime: "15 min read"
audience: "Everyone"
tags: learn
permalink: /learn/best-openclaw-skills/
---

**ClawHub has over 13,000 skills.** A security audit flagged 13% of them for critical issues. Another scan found 341 actively stealing user data. Most of the rest are duplicates, abandoned experiments, or barely functional.

So here's the question that actually matters: **which skills are safe, useful, and worth your time?**

We organized this guide by what you want to do, not by arbitrary "top 10" rankings. Find your use case, install the skills, skip the rest.

## How Skills Work (30-Second Version)

A skill is a folder with a `SKILL.md` file that teaches your OpenClaw agent how to use a tool. Install one, and your agent gains a new capability. No code required on your part.

**Install from ClawHub:**
```bash
npx clawhub@latest install <skill-name>
```

**Or paste a skill's GitHub URL** directly into your OpenClaw chat. It'll handle installation automatically.

Skills live in two places:
- **Global:** `~/.openclaw/skills/` (available to all workspaces)
- **Workspace:** `<project>/skills/` (project-specific, takes priority)

OpenClaw also ships with **50+ built-in skills** that are already installed. Many of the essentials are covered out of the box.

## Essential First Installs

These are the skills that make OpenClaw actually useful as a daily assistant. If you install nothing else, install these.

### Web Search

**Status:** Built-in (no install needed)

Your agent can't help you with current information without web access. OpenClaw's built-in web search uses the Brave Search API. You'll need a Brave API key (free tier: 2,000 queries/month).

Alternatives on ClawHub: Tavily (AI-optimized search), Felo Search (synthesized answers with citations), Exa (semantic search). Each takes a different approach. Brave is the simplest starting point.

### GitHub

**Status:** Built-in

If you write code, this is non-negotiable. Create issues, review PRs, check CI runs, query the GitHub API. Works through the `gh` CLI. One of the most polished built-in skills.

**Good for:** Developers who live in GitHub. Check PR status from your phone, get CI failure summaries, create issues from Telegram.

### Google Workspace (gog)

**Status:** Built-in

Gmail, Google Calendar, Google Drive, Google Contacts, Google Tasks, Google Sheets, Google Docs. All from one skill.

This is the backbone of "OpenClaw as a personal assistant." Morning briefings pull from your calendar. Email triage reads your inbox. Task management syncs with Google Tasks. File lookups search Drive.

**Setup:** Requires OAuth setup with a Google account. The `gog` CLI handles auth. Takes about 10 minutes.

**Good for:** Anyone using Google Workspace. Replaces the need for separate email, calendar, and task manager tools. See our blueprint on [replacing your SaaS stack](/blueprints/replace-saas-stack/) for a real example.

### Weather

**Status:** Built-in (no API key needed)

Simple but surprisingly useful. Powers morning briefings, travel planning, "should I bring an umbrella" decisions. Uses wttr.in or Open-Meteo. Zero setup.

## Communication & Messaging

These skills connect OpenClaw to the platforms where you actually talk to people.

### Telegram

**Status:** Built-in for receiving messages. ClawHub skill available for advanced features.

The most popular way to talk to your OpenClaw agent from your phone. Create a bot via BotFather, add the token, done. Low latency, rich formatting, inline buttons.

**Good for:** Everyone. Telegram is the default mobile interface for most OpenClaw users.

### WhatsApp (wacli)

**Status:** Built-in

Connect your WhatsApp account so your agent can read message history and you can message it from WhatsApp. Many people prefer this since WhatsApp is already on their phone.

**Setup:** QR code scan to link your account. Requires a sync process running in the background.

**Good for:** People who live in WhatsApp. Popular in regions where WhatsApp is the dominant messaging app.

### Discord

**Status:** Built-in

Run your agent in Discord servers. Good for team automations, community management, or using your agent in a shared workspace.

### Slack

**Status:** Built-in

Same concept as Discord but for work. Your agent joins Slack channels and responds to messages or commands.

## Productivity & Automation

### Himalaya (Email)

**Status:** Built-in

A CLI email client that works over IMAP/SMTP. Read, search, compose, reply, forward emails from the terminal. Supports multiple accounts.

**Why it matters:** Email triage is one of OpenClaw's killer use cases. Your agent reads your inbox, summarizes what's important, drafts replies, and flags urgent items. This skill makes that possible.

**Good for:** Email-heavy workflows, morning briefings, inbox zero automation.

### Coding Agent

**Status:** Built-in

Spawns sub-agents for coding tasks. Your OpenClaw can delegate code generation, debugging, and file editing to specialized coding sessions. This is how people build apps from their phone via Telegram.

**Good for:** Developers. See our blueprint on [building a four-agent team](/blueprints/four-agent-team/) for an advanced multi-agent coding setup.

### Cron / Scheduled Tasks

**Status:** Built-in (core feature, not a skill)

Not technically a skill, but it's the most underleveraged feature in OpenClaw. Schedule anything: morning briefings at 6 AM, evening accountability check-ins at 9 PM, hourly data checks, weekly reports.

```
/cron add "morning-briefing" --schedule "0 6 * * *" --task "Check calendar, email, weather. Send me a morning briefing."
```

**Good for:** Anyone who wants OpenClaw to be proactive instead of reactive. See our blueprint on [the 5-day automation sprint](/blueprints/five-day-automation-sprint/) where scheduled tasks found $22K in missed tax deductions.

## Research & Data

### Firecrawl

**Status:** ClawHub install

```bash
npx -y firecrawl-cli init --all
```

Web scraping and content extraction. Firecrawl goes beyond basic page fetching. It handles JavaScript-rendered pages, follows links, and returns clean markdown. Pairs well with research workflows.

**Free tier:** 500 pages/month. Plenty for personal use.

**Good for:** Market research, competitive analysis, content aggregation, data extraction.

### Scrapfly

**Status:** ClawHub / workspace install

Anti-bot bypass for sites that block normal requests (Cloudflare, CAPTCHAs). When regular web fetch fails, Scrapfly gets through.

**Good for:** Scraping protected sites, data pipelines, lead generation. See our blueprint on [AI lead generation](/blueprints/ai-lead-gen-pipeline/) for a production example.

## Creative & Media

### Image Generation (OpenAI / Nano Banana Pro)

**Status:** Built-in (openai-image-gen, nano-banana-pro)

Generate images via DALL-E or Google's Gemini image model. Useful for social media content, thumbnails, quick mockups.

### Text-to-Speech (sag)

**Status:** Built-in

ElevenLabs text-to-speech. Turn text into natural-sounding audio. Good for content creation, voice messages, accessibility.

### Video Frames

**Status:** Built-in

Extract frames or clips from videos using ffmpeg. Useful for video analysis, thumbnail generation, content repurposing.

## DevOps & System

### Healthcheck

**Status:** Built-in

Security hardening and system monitoring for your OpenClaw deployment. Firewall checks, SSH configuration, update status, exposure review. Run it periodically to keep your server secure.

### tmux

**Status:** Built-in

Remote-control tmux sessions. Send keystrokes, scrape terminal output. Essential for interactive CLI tools that need a persistent terminal session.

**Good for:** Advanced users running long-lived processes, SSH management, server administration.

## Browser Automation

### Browser Relay

**Status:** Built-in (core feature)

Not a ClawHub skill but OpenClaw's built-in browser control. Navigate pages, fill forms, click buttons, take screenshots, extract data. Works via Chrome DevTools Protocol.

**This is one of OpenClaw's most powerful features** and one of the most searched topics (1,000-10,000 searches/month for "openclaw browser relay"). We have a dedicated guide coming on this.

**Good for:** Form automation, social media management, web scraping, testing. See our blueprint on [browser automation](/blueprints/browser-automation-machine/) for a deep dive.

## Home & IoT

### OpenHue

**Status:** Built-in

Control Philips Hue lights via natural language. "Turn the living room lights to warm 50%" just works.

### Sonos / BluOS

**Status:** Built-in (sonoscli, blucli)

Control Sonos or BluOS speakers. Play music, adjust volume, group rooms. "Play jazz in the kitchen" from your phone.

**Good for:** Smart home enthusiasts. Combine with cron jobs for automated routines (morning playlist, bedtime dimming).

## Skills to Approach With Caution

### Anything crypto/trading related

886 crypto skills were filtered out of the VoltAgent awesome list for good reason. Many are poorly maintained, and autonomous trading agents can lose real money. If you want to experiment, see our blueprint on [autonomous live trading](/blueprints/autonomous-live-trading/) and understand the risks first.

### Skills requesting broad file system access

Some skills ask for permissions beyond what they need. If a weather skill wants to read your entire home directory, that's a red flag. Always check what a skill's `SKILL.md` says it needs.

### Unverified skills with few installs

Stick to skills in the [official OpenClaw skills repo](https://github.com/openclaw/skills), the VoltAgent [awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) curated list (5,200+ vetted skills), or skills you've personally reviewed. ClawHub's VirusTotal integration helps, but it's not foolproof.

## Skill Combos That Work Well Together

**The Personal Assistant Stack:**
Google Workspace + Himalaya + Weather + Telegram + Cron
→ Morning briefings, email triage, calendar management, task tracking, all from your phone.

**The Developer Stack:**
GitHub + Coding Agent + tmux + Firecrawl + Browser Relay
→ PR reviews, code generation, documentation lookups, automated testing.

**The Content Creator Stack:**
Browser Relay + Image Generation + TTS + Firecrawl + Google Workspace
→ Research, write, generate images, create audio, schedule posts.

**The Business Automation Stack:**
Google Workspace + Himalaya + Browser Relay + Firecrawl + Cron
→ Lead research, email outreach, CRM updates, scheduled reports. See our blueprint on [running a business on AI](/blueprints/founder-runs-business-on-ai/).

**The Smart Home Stack:**
OpenHue + Sonos/BluOS + Weather + Cron + Telegram
→ Automated lighting routines, weather-based adjustments, voice-controlled music, all controllable via Telegram.

## How to Evaluate a Skill Before Installing

1. **Check the source.** Is it in the official OpenClaw skills repo? If not, who published it?
2. **Read the SKILL.md.** Does it clearly explain what it does and what permissions it needs?
3. **Check install count.** On ClawHub, higher installs generally mean more eyes have reviewed it.
4. **Look for a VirusTotal report.** ClawHub shows this on each skill's page.
5. **Search the OpenClaw Discord.** See if other users have reported issues.
6. **Start with built-in skills.** OpenClaw ships with 50+ skills that are maintained by the core team. These should be your first choice.

## Frequently Asked Questions

### How many skills should I install?

Start with 5-8 that match your use case. Every skill adds to your agent's context window (the instructions it reads at startup), so installing 50 skills you never use wastes tokens and can confuse the agent.

### Do skills cost money?

The skills themselves are free. Some skills connect to paid APIs (like Firecrawl, ElevenLabs, or Brave Search), but most have free tiers that work fine for personal use.

### Can I build my own skill?

Yes. A skill is just a folder with a `SKILL.md` file. OpenClaw includes a built-in `skill-creator` skill that walks you through building one. You can publish it to ClawHub for others to use.

### What's the difference between built-in skills and ClawHub skills?

Built-in skills ship with OpenClaw and are maintained by the core team. ClawHub skills are community-published and vary in quality. Both install the same way and work identically once installed.

### My agent isn't using a skill I installed. What's wrong?

Common fixes: (1) Restart your OpenClaw gateway after installing. (2) Check that the skill's `SKILL.md` has the correct trigger phrases. (3) Make sure any required API keys are set in your `.env` file. (4) Check if the skill requires a specific platform or tool that isn't available in your environment.

---

## Keep Reading

- **[How Much Does OpenClaw Cost?](/learn/openclaw-cost-breakdown/)** — The real pricing breakdown. Free tier through power user, with exact numbers.
- **[OpenClaw Browser Automation Guide](/learn/openclaw-browser-automation/)** — Turn your agent into a web automation machine. Multi-profile Chrome, scraping, remote control.
