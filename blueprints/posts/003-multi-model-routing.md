---
layout: blueprint.njk
title: "Cut Your AI Agent Costs by 97% with Multi-Model Routing"
description: "One user dropped from $90/month to $6 by routing tasks to the right model. Here's the exact setup."
date: 2026-03-03
difficulty: Beginner
cost: "$6-15/month (down from $60-90)"
timeToSetup: "30 minutes"
originalSource: "https://www.youtube.com/watch?v=RX-fQTW2To8"
originalAuthor: "YouTube creator"
issueNumber: 3
permalink: /blueprints/multi-model-routing/
tags:
  - optimization
  - cost-savings
  - configuration
  - models
---

## What You'll Build

A model routing strategy that uses cheap models for simple tasks and expensive models only when needed. Your AI agent stays just as capable but costs 90-97% less.

## Why It Works

Most people set their AI agent to use Claude Opus (the most powerful, most expensive model) for everything. Every heartbeat check, every simple question, every status ping costs premium tokens. That's like hiring a brain surgeon to take your temperature.

**Results:** Monthly bill dropped from $90 to $6. Same agent. Same capabilities. 97% cost reduction.

## Prerequisites

- OpenClaw installed and running
- Access to your OpenClaw config
- That's it. This is a config change, not a build.

## The Problem

Here's what's burning your money:

| Task | Frequency | Tokens Per Call | Model Used | Monthly Cost |
|------|-----------|----------------|------------|-------------|
| Heartbeat check | Every 30 min | 5,000-15,000 | Opus | $30-45 |
| Simple replies | 20/day | 2,000-5,000 | Opus | $15-25 |
| Complex tasks | 2-3/day | 10,000-30,000 | Opus | $10-15 |
| Background jobs | 5-10/day | 5,000-15,000 | Opus | $10-20 |
| **Total** | | | | **$65-105** |

The heartbeat alone (a simple "anything new?" check) eats 30-50% of your budget.

## The Solution: Tiered Model Routing

```
┌─────────────────────────────────────────────┐
│              Task Incoming                   │
│                                              │
│  Simple? ──────▶ Haiku ($0.25/M tokens)     │
│  (heartbeats,    - Heartbeat checks          │
│   status,        - Yes/no questions          │
│   basic)         - Simple lookups            │
│                                              │
│  Medium? ──────▶ Sonnet ($3/M tokens)       │
│  (writing,       - Email drafts              │
│   analysis,      - Content creation          │
│   planning)      - Research summaries        │
│                                              │
│  Complex? ─────▶ Opus ($15/M tokens)        │
│  (strategy,      - Complex analysis          │
│   coding,        - Multi-step reasoning      │
│   critical)      - Code generation           │
│                                              │
│  Local? ───────▶ Ollama (FREE)              │
│  (private,       - Personal data processing  │
│   offline,       - Simple classification     │
│   simple)        - Drafts nobody sees        │
└─────────────────────────────────────────────┘
```

## Step-by-Step Setup

### Step 1: Set Your Default Model to Sonnet

In your OpenClaw config, change the default model from Opus to Sonnet:

```json
{
  "model": "anthropic/claude-sonnet-4-20250514"
}
```

This single change cuts your baseline costs by ~80%. Sonnet handles 90% of daily tasks perfectly well.

### Step 2: Configure Heartbeats to Use Haiku

Heartbeats are the biggest cost driver. They run every 30 minutes and usually just check if anything needs attention. Haiku is perfect for this.

In your OpenClaw config, set the heartbeat model:

```json
{
  "heartbeat": {
    "model": "anthropic/claude-haiku"
  }
}
```

**Cost impact:** Heartbeat cost drops from $30-45/month to under $1.

### Step 3: Use Opus Only for Complex Tasks

Reserve Opus for tasks that genuinely need it:

- **Overnight coding jobs:** Building features, fixing complex bugs
- **Strategic analysis:** Business decisions, competitive research
- **Long-form writing:** Blog posts, reports, proposals

You can override the model per-session or per-task:

```
/model opus
```

Or set specific cron jobs to use Opus:

```json
{
  "payload": {
    "kind": "agentTurn",
    "message": "Complex overnight task...",
    "model": "anthropic/claude-opus-4-6"
  }
}
```

### Step 4: Add Local Ollama (Optional, Saves More)

For tasks that don't need cloud AI at all, run a local model:

```bash
# Install Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# Pull a small, fast model
ollama pull llama3.2:3b
```

Use cases for local models:
- Classifying emails (spam/important/can-wait)
- Extracting structured data from text
- Simple yes/no decisions
- Drafts that will be rewritten anyway

**Cost:** $0. Runs on your hardware.

### Step 5: Monitor and Adjust

After a week, check your usage:

```
/status
```

Look at:
- Which tasks are using which models
- Where Sonnet struggled (upgrade those to Opus)
- Where Opus was overkill (downgrade those to Sonnet or Haiku)

## The Math

| Task | Before (All Opus) | After (Routed) |
|------|-------------------|----------------|
| Heartbeats (48/day) | $35/month | $0.50/month |
| Simple tasks (20/day) | $20/month | $2/month |
| Medium tasks (10/day) | $20/month | $3/month |
| Complex tasks (2/day) | $15/month | $3/month |
| **Total** | **$90/month** | **$8.50/month** |

That's a $81.50/month savings. $978/year. For changing a config file.

## Customization Ideas

- **Cost-optimized:** Use Haiku as default, Sonnet for writing, Opus only for strategy sessions
- **Quality-optimized:** Use Sonnet as default, Opus for anything customer-facing
- **Privacy-optimized:** Use Ollama for all personal data, cloud models for business tasks only
- **Hybrid:** Run a local model for classification/routing, then send to the right cloud model

## Gotchas & Tips

- **Don't start with Haiku for everything.** Start with Sonnet as default and Haiku for heartbeats only. Expand after you see what Haiku handles well.
- **Haiku occasionally misses nuance.** If your heartbeat checks need to understand complex context, Sonnet might be worth the extra cost.
- **Model names change.** Check the current model names in your provider's docs.
- **Cache helps too.** OpenClaw caches prompt context. Longer sessions with fewer restarts = lower costs.
- **The 80/20 rule applies.** 80% of your tasks need 20% of the compute. Route accordingly.
