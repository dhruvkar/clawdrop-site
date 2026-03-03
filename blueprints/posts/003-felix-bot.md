---
layout: blueprint.njk
title: "Build an Autonomous Business Bot (The Felix Method)"
description: "Give your AI agent $1,000 and a goal. Nat Eliason's bot made $14,718 in 3 weeks. Here's the exact 3-layer memory system and setup."
date: 2026-03-03
difficulty: Advanced
cost: "$20-50/month (API costs)"
timeToSetup: "2-3 hours"
originalSource: "https://creatoreconomy.so/p/use-openclaw-to-build-a-business-that-runs-itself-nat-eliason"
originalAuthor: "Nat Eliason"
issueNumber: 3
permalink: /blueprints/felix-bot/
tags:
  - business
  - memory
  - multi-agent
  - monetization
---

## What You'll Build

An AI agent that can autonomously build and run a small business. It creates products, manages social media, handles sales, and generates revenue while you sleep. The secret sauce is a 3-layer memory system that gives the agent genuine continuity between sessions.

## Why It Works

Most AI agents forget everything between sessions. You re-explain context every morning. They make the same mistakes twice. Felix doesn't, because of the memory architecture. That's the difference between a chatbot and a business partner.

**Results:** $14,718 revenue in 3 weeks from a $1,000 starting budget.

## Prerequisites

- OpenClaw installed and running (Mac, Linux, or VPS)
- Claude API key (Opus recommended for complex business decisions)
- Payment processing (Stripe account)
- Domain + basic web hosting
- ~$1,000 starting budget (or whatever you're comfortable with)

## Architecture

```
┌─────────────────────────────────────────────┐
│              FELIX (Main Agent)              │
│                                              │
│  ┌─────────┐  ┌──────────┐  ┌────────────┐ │
│  │ Layer 1  │  │ Layer 2   │  │  Layer 3   │ │
│  │Knowledge │  │Daily Notes│  │   Tacit    │ │
│  │  Graph   │  │           │  │ Knowledge  │ │
│  └─────────┘  └──────────┘  └────────────┘ │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │      Multi-Threaded Chats            │   │
│  │  Thread 1: Product Development       │   │
│  │  Thread 2: Marketing / X Account     │   │
│  │  Thread 3: Sales / Stripe            │   │
│  │  Thread 4: Content Creation          │   │
│  │  Thread 5: Research / Market Scan    │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │      Codex Delegation                │   │
│  │  (Coding tasks, site building)       │   │
│  └──────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

## Step-by-Step Setup

### Step 1: Set Up the 3-Layer Memory System

This is the single biggest unlock. Get this right and everything else follows.

**Layer 1: Knowledge Graph**

Create a `~/life/` folder using the PARA system:

```
~/life/
├── projects/       # Active projects with clear outcomes
│   ├── product-launch.md
│   └── marketing-campaign.md
├── areas/          # Ongoing responsibilities
│   ├── finances.md
│   ├── customers.md
│   └── brand.md
├── resources/      # Reference material
│   ├── competitors.md
│   ├── market-research.md
│   └── tools.md
└── archives/       # Completed projects
    └── v1-launch.md
```

Each file stores durable facts: customer names, pricing decisions, brand guidelines, product specs. The agent reads these at session start for instant context.

**Layer 2: Daily Notes**

Create `memory/YYYY-MM-DD.md` files. Your agent writes to these during conversations:

```markdown
# 2026-03-03

## Product
- Launched info product on Gumroad ($29 price point)
- 12 sales in first 6 hours
- Top traffic source: X post about productivity

## Marketing
- Posted 3 tweets, best performer: 2.4K impressions
- New follower count: 847 (+23 today)

## Revenue
- Stripe: $348 today
- Running total: $2,847
```

The agent logs what happened, what worked, what didn't. During nightly consolidation, important stuff gets extracted into Layer 1.

**Layer 3: Tacit Knowledge**

Create a `SOUL.md` or `IDENTITY.md` file with:

```markdown
## Communication Style
- Direct, no fluff
- Use short sentences for social media
- Never use em dashes

## Hard Rules
- Never spend more than $200 without asking
- Always A/B test before scaling
- Reply to every customer within 4 hours

## Lessons Learned
- Gumroad converts better than Stripe Checkout for info products
- X posts with numbers get 3x engagement
- Don't post more than 4 times/day (diminishing returns)
```

This is what makes your bot feel like it actually knows you and your business.

### Step 2: Configure Multi-Threaded Chats

Felix works on 5 projects simultaneously using separate chat sessions. Each thread has its own context but shares the memory layers.

In your OpenClaw config, set up sessions for each business function. The main session coordinates, sub-sessions execute. Use `sessions_spawn` for parallel work.

**Key insight from Nat:** "The multi-thread setup means Felix can be building a landing page, writing tweets, and researching competitors all at the same time."

### Step 3: Set Up Codex Delegation

For coding tasks (building websites, creating tools, fixing bugs), Felix delegates to Codex rather than doing it inline. This keeps the main business conversation clean and lets the coding happen in a proper development environment.

Configure your agent to recognize coding tasks and spawn them as sub-agents with access to a workspace directory and git.

### Step 4: Connect Revenue Tools

- **Stripe:** Create an account, get API keys, add to your agent's environment
- **Gumroad/Lemon Squeezy:** For info products (often higher conversion than raw Stripe)
- **X Account:** Give your agent posting access (app password or API key)
- **Domain + Hosting:** Netlify or Vercel for quick site deploys

### Step 5: The Launch Prompt

Once everything is wired up, the actual prompt is simple:

> "I'm giving you $1,000 and access to these tools. Your goal is to build a profitable online business. Research what's selling, pick a niche, create a product, build a landing page, and start marketing it. Report back daily with revenue numbers."

Then go to sleep.

## Customization Ideas

- **Service business:** Instead of products, have the bot sell your consulting/freelance services
- **Content business:** Focus on building an audience and monetizing with sponsorships
- **SaaS:** Have the bot build and launch a micro-SaaS tool
- **E-commerce:** Connect to Shopify/print-on-demand and let it test products

## Gotchas & Tips

- **Set spending limits.** Felix had access to money. Set hard caps on what it can spend without asking.
- **Security:** Nat built prompt injection resistance for the X account. If your bot is public-facing, think about this.
- **Start small.** $1,000 is Nat's number. Start with $100 and see what happens.
- **Memory consolidation matters.** Set up a nightly cron job to have the agent review daily notes and update the knowledge graph. Without this, Layer 2 just grows forever.
- **Don't over-constrain.** The whole point is autonomy. Give it goals, not step-by-step instructions.
