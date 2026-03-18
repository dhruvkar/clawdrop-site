---
layout: blueprint.njk
title: "Replace Your CRM With a Conversation"
description: "Install one skill and your AI agent becomes your CRM. Contacts, deals, follow-ups, notes. All managed through chat. No dashboards to learn, no data entry, no $50/month subscription."
date: 2026-03-18
difficulty: Beginner
cost: "Free (open source)"
timeToSetup: "15-30 minutes"
originalSource: "https://github.com/nex-crm/nex-as-a-skill"
originalAuthor: "iamnazzty"
tags:
  - business
  - crm
  - sales
  - productivity
permalink: /blueprints/nex-crm/
---

## What You'll Build

A CRM that lives inside your AI agent. No login screens. No dashboards. No data entry. You tell your agent "I just met Maria Rodriguez, she's CTO at TechFlow, they're expanding to Europe in Q3 with a $2M budget" and it remembers. A week later you ask "what do I know about TechFlow?" and it pulls up everything: the contact, the deal size, the timeline, and the follow-up you need to send.

Contacts, companies, deals, tasks, notes, and insights. All managed through conversation. All searchable. All connected.

## Why This Works

CRMs are where good leads go to die. Here's what actually happens: you have a great call with a prospect. You promise to follow up. Then you open HubSpot and stare at 15 required fields. Company name. Company size. Industry. Revenue range. Lead source. Deal stage. Expected close date. You fill in what you can, skip the rest, and tell yourself you'll update it later. You won't.

Two weeks pass. You remember that prospect existed but can't find the note. Was it in your CRM? Your email? A sticky note? A Slack message to yourself? The lead goes cold. The deal disappears.

The problem isn't that CRMs are bad software. It's that data entry is miserable and humans avoid miserable things. The fix isn't a better dashboard. It's removing the dashboard entirely.

When your CRM is a conversation, the friction disappears. "Just talked to Dave at Acme, they need 50 licenses by March, budget approved, he's the decision maker." That's it. That's the CRM entry. Your agent extracts the contact, the company, the deal, the timeline, and the buying signal. No forms. No dropdowns. No required fields.

## Prerequisites

- OpenClaw installed and running
- Node.js or Bun runtime
- 15 minutes

## Step 1: Install Nex

Nex is an open-source knowledge graph that plugs directly into OpenClaw. One command:

```bash
bun install -g @nex-ai/nex
nex setup
```

The setup wizard auto-detects OpenClaw, registers your API key, and configures everything. It takes about 60 seconds.

## Step 2: Connect It to OpenClaw

Copy the Nex plugin into your OpenClaw plugins directory:

```bash
cp -r openclaw-plugin /path/to/openclaw/plugins/nex
cd /path/to/openclaw/plugins/nex && bun install && bun run build
```

Then add it to your `openclaw.json` config:

```json
{
  "plugins": {
    "load": { "paths": ["/path/to/plugins/nex"] },
    "slots": { "memory": "nex" },
    "entries": {
      "nex": {
        "enabled": true,
        "config": {
          "apiKey": "sk-your-key-here"
        }
      }
    }
  }
}
```

Restart OpenClaw. Done.

## Step 3: Start Talking

No setup wizard. No import process. Just start telling your agent about your business:

**Adding contacts:**
"I just had a call with Sarah Chen, VP of Marketing at GrowthLab. They're looking for lead gen help, budget around $3K/month, wants to start in April."

**Checking on deals:**
"What's the status with GrowthLab?"

**Setting follow-ups:**
"Remind me to follow up with Sarah next Tuesday with the proposal."

**Searching across everything:**
"Which prospects mentioned a Q2 timeline?"
"Show me all open deals over $2K."
"Who do I need to follow up with this week?"

## What Makes This Different

**Auto-capture.** When the OpenClaw plugin is active, your agent automatically extracts and stores relevant information from every conversation. You don't have to say "remember this." It just does.

**Auto-recall.** When a topic comes up that matches something in your knowledge graph, the agent pulls the context automatically. Ask about a company and it surfaces every related contact, deal, and note without you having to search.

**Cross-tool memory.** This is the unusual part. Nex works across Claude Code, Cursor, ChatGPT, and OpenClaw simultaneously. Tell OpenClaw about a prospect. Ask Claude Code about them later. The context follows you. One knowledge graph, multiple entry points.

**50+ commands.** Beyond basic CRM, you get full CRUD operations: list people, create tasks, search insights, pipe in meeting notes, track interactions over time.

## What You're Replacing

| Feature | Traditional CRM | Nex + OpenClaw |
|---------|----------------|----------------|
| Adding a contact | Open app, click New Contact, fill 12 fields | "Met Sarah at GrowthLab, she runs marketing" |
| Logging a call | Find contact, click Log Activity, fill form | "Just finished a call with Sarah, she's ready to sign" |
| Setting a follow-up | Open contact, click Task, set date, set type | "Follow up with Sarah next Tuesday" |
| Finding a deal | Open deals pipeline, scroll, filter, click | "What's happening with GrowthLab?" |
| Cost | $30-100/month per seat | Free |

## The Real Benefit

It's not the money you save (though $600-1,200/year per seat adds up). It's that you'll actually use it. Every CRM in the world has the same problem: people stop updating it after two weeks. When the CRM is just talking to your agent, the same thing you're already doing, the data stays current because there's no extra step.

Your agent becomes the one teammate who actually keeps the CRM updated.
