---
layout: blueprint.njk
title: "Set Up a 4-Agent Business Team on a Mac Mini"
description: "One solopreneur runs customer support, content, research, and ops with 4 AI agents on a $600 Mac Mini. Here's the architecture."
date: 2026-03-03
difficulty: Intermediate
cost: "$20-60/month (API costs)"
timeToSetup: "3-4 hours"
originalSource: "https://www.youtube.com/watch?v=bzWI3Dil9Ig"
originalAuthor: "YouTube creator"
issueNumber: 3
permalink: /blueprints/four-agent-team/
tags:
  - business
  - multi-agent
  - solopreneur
  - operations
---

## What You'll Build

Four specialized AI agents, each owning a business function: customer support, content creation, research, and operations. All running 24/7 on a Mac Mini or VPS, managed through Telegram.

## Why It Works

Context-switching kills productivity. When one agent does everything, it loses focus. When four agents each own a department, they stay sharp. You manage them like a team lead: check in, review output, make decisions.

**Results:** No more juggling 12 browser tabs. Each agent stays in its lane. You focus on closing deals and making decisions.

## Prerequisites

- OpenClaw installed on Mac Mini or VPS ($24/month for a decent VPS)
- Claude API key
- Telegram (for agent communication)
- Access to your business tools (email, social accounts, analytics)

## Architecture

```
                    ┌──────────────┐
                    │   YOU (CEO)   │
                    │  (Telegram)   │
                    └──────┬───────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
     ┌────────▼───┐ ┌──────▼─────┐ ┌───▼────────┐
     │  Agent 1    │ │  Agent 2   │ │  Agent 3   │
     │  SUPPORT    │ │  CONTENT   │ │  RESEARCH  │
     │             │ │            │ │            │
     │ • Monitor   │ │ • Draft    │ │ • Competitors│
     │   channels  │ │   posts    │ │ • Trends   │
     │ • Draft     │ │ • Schedule │ │ • Markets  │
     │   replies   │ │ • Engage   │ │ • Opps     │
     │ • Escalate  │ │ • Repurpose│ │ • Reports  │
     └─────────────┘ └────────────┘ └────────────┘
                           │
                    ┌──────▼───────┐
                    │   Agent 4    │
                    │    OPS       │
                    │              │
                    │ • Daily brief│
                    │ • Task track │
                    │ • Calendar   │
                    │ • Reporting  │
                    └──────────────┘
```

## Step-by-Step Setup

### Step 1: Agent 1 — Customer Support

**Purpose:** Monitor incoming messages, draft responses, escalate when needed.

**Setup:**
1. Connect your email inbox (Gmail API or IMAP)
2. Connect any chat channels (Intercom, live chat, social DMs)
3. Create a knowledge base document:

```markdown
# Support Knowledge Base

## Product
- What it does: [one paragraph]
- Pricing: [plans and prices]
- Free trial: [details]

## Common Questions
Q: How do I cancel?
A: Go to Settings > Billing > Cancel. Refund within 30 days.

Q: Do you integrate with X?
A: Yes/No. [details]

Q: My account is locked
A: [troubleshooting steps]

## Escalation Rules
- Billing disputes over $100 → escalate immediately
- Feature requests → log in feature-requests.md, reply with acknowledgment
- Angry customers → draft response, don't send, flag for review
- Bugs → create issue, notify dev, reply with ETA
```

**Cron:** Check for new messages every 5-15 minutes.

**Output:** Drafts go to your Telegram for approval (or auto-send for common questions after you've built confidence).

### Step 2: Agent 2 — Content

**Purpose:** Create, schedule, and manage content across platforms.

**Setup:**
1. Define your content pillars (3-5 topics you always write about)
2. Connect posting tools (X API, LinkedIn, browser automation)
3. Create a voice guide:

```markdown
# Content Voice Guide

## Tone
- Direct, no fluff
- Share real numbers and results
- Conversational, not corporate

## Content Types
- Build-in-public updates (what I shipped today)
- Lessons learned (what went wrong and why)
- Industry takes (opinions on trends)
- How-tos (step-by-step tutorials)

## Rules
- No em dashes
- No "I'd be happy to" or "Great question!"
- Max 280 chars for X, longer for LinkedIn
- Always include a specific number or result
- Post 2-3x per day on X, 1x per day on LinkedIn
```

**Cron:** Draft posts hourly during work hours. You pick and approve.

### Step 3: Agent 3 — Research

**Purpose:** Keep you informed about competitors, market trends, and opportunities.

**Setup:**
1. Create a competitor watch list
2. Set up monitoring sources (RSS feeds, Google Alerts, social mentions)
3. Define what you care about:

```markdown
# Research Brief

## Competitors to Monitor
- Competitor A: [website, X handle, product updates page]
- Competitor B: [same]
- Competitor C: [same]

## Signals I Care About
- New product launches or features
- Pricing changes
- Funding announcements
- Key hire announcements
- Customer complaints (Reddit, G2, Twitter)

## Opportunities to Scan
- New markets entering my space
- Partnership possibilities
- Content gaps I could fill
- Customer segments competitors ignore
```

**Cron:** Daily research digest. Weekly deep-dive report.

### Step 4: Agent 4 — Operations

**Purpose:** The glue. Daily briefings, task tracking, calendar management, and cross-agent coordination.

**Setup:**
1. Connect calendar (Google Calendar API)
2. Set up task tracking (markdown file, SQLite, or Turso)
3. Create the daily briefing template:

```markdown
# Daily Briefing Template

## Today's Calendar
[list events with times]

## Priority Tasks
1. [most important thing]
2. [second]
3. [third]

## Support Summary (from Agent 1)
- X new tickets, Y resolved, Z escalated

## Content Performance (from Agent 2)
- Best post: [which one, engagement]
- Scheduled today: [what's going out]

## Research Highlights (from Agent 3)
- [anything notable from overnight scan]

## Revenue
- Yesterday: $X
- MTD: $Y
- Trend: up/down/flat
```

**Cron:** Morning briefing at 6 AM. Evening accountability check at 9 PM.

### Step 5: Inter-Agent Communication

The agents need to share information. Three approaches:

1. **Shared files:** All agents read/write to a common `status/` directory
2. **Database:** SQLite or Turso DB that all agents query
3. **Main agent coordination:** Agent 4 (Ops) reads outputs from agents 1-3 and synthesizes

Start with shared files. Move to a database when it gets complex.

## Customization Ideas

- **Agency owner:** Replace research agent with a client management agent
- **E-commerce:** Replace content agent with an inventory/pricing agent
- **Consultant:** Add a proposal-writing agent
- **SaaS founder:** Add a churn-detection agent that monitors usage patterns

## Gotchas & Tips

- **Start with 2 agents, not 4.** Get support + ops working first. Add content and research once the basics are solid.
- **Set clear boundaries.** Each agent should know exactly what's its job and what's not. Overlap causes confusion.
- **Token costs add up with 4 agents.** Use multi-model routing (see our other blueprint) to keep costs under control.
- **The Mac Mini advantage:** Always on, no monthly hosting fees after the $600 purchase. But a $24/month VPS works identically.
- **Review cycles matter.** Don't let agents auto-send everything. Start with drafts, build trust, then gradually automate more.
