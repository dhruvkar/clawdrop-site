---
layout: blueprint.njk
title: "Bot-to-Bot Commerce: AIs Negotiating with AIs"
description: "Multiple AI agents coordinating, negotiating, and transacting with each other in a shared environment. The future of automated business operations."
date: 2026-02-17
difficulty: Advanced
cost: Free
timeToSetup: "2+ hours"
originalSource: "https://github.com/openclaw/openclaw/issues/15760"
originalAuthor: "codexGW"
tags:
  - multi-agent
  - automation
  - advanced
permalink: /blueprints/bot-to-bot-commerce/
---

## What You'll Build

A multi-agent setup where your AI agents communicate, negotiate, and coordinate with each other. Think of it as building a team of specialists that work together without you playing middleman.

## Why This Matters

One AI agent is useful. Multiple agents that can talk to each other? That's a business.

- **Purchasing agent** finds the best deal and sends it to the **finance agent** for approval
- **Content agent** writes a post and the **scheduling agent** picks the optimal time to publish
- **Sales agent** qualifies a lead and hands it to the **onboarding agent**

Each agent is simple. Together, they run operations.

## The Concept

Most AI setups are hub-and-spoke: you talk to the AI, the AI does a thing, reports back. Bot-to-bot commerce is peer-to-peer: agents talk to each other, make decisions, and only escalate to you when needed.

### Example: Automated Vendor Management

1. **Inventory Agent** notices you're low on supplies
2. It messages the **Procurement Agent**: "Need 500 units of X"
3. Procurement Agent emails 3 vendors for quotes
4. Quotes come in. Procurement Agent picks the best one (or negotiates)
5. It messages the **Finance Agent**: "Best quote is $2,400 from Vendor B"
6. Finance Agent checks the budget, approves, and triggers payment
7. You get a notification: "Ordered 500 units of X for $2,400. Delivery Thursday."

You didn't do anything. Six steps happened autonomously.

## Prerequisites

- OpenClaw running with multi-session support
- At least 2 agent configurations
- A shared communication channel (Telegram group, internal message bus, etc.)

## Step 1: Define Your Agent Roles

Keep each agent focused on one job:

- **Agent A**: Monitors inventory/triggers
- **Agent B**: Handles procurement/vendor comms
- **Agent C**: Manages budget/approvals

Simple roles, clear boundaries.

## Step 2: Set Up Communication

Agents need a way to talk. Options:

- **Shared Telegram group**: Each agent has its own bot token, all in one group
- **Internal sessions**: OpenClaw's session-to-session messaging
- **File-based**: Agents read/write to shared files (simple but effective)

## Step 3: Define the Protocol

Agents need shared rules:

- How to request something ("REQUEST: need 500 units of X by Friday")
- How to respond ("APPROVED", "DENIED: over budget", "COUNTER: can do 400 units")
- How to escalate ("ESCALATE: need human decision on...")
- When to notify you vs. handle autonomously

## Step 4: Set Guardrails

This is critical. Multi-agent systems can amplify mistakes fast.

- **Spending limits** per agent and per transaction
- **Approval thresholds**: anything over $X requires human sign-off
- **Circuit breakers**: if errors spike, everything pauses
- **Audit logs**: every inter-agent message is logged

## Step 5: Start Small, Scale Up

Don't build a 10-agent system on day one. Start with 2 agents doing one workflow. Get that solid. Then add a third. Then a fourth.

## Real-World Applications

- **E-commerce**: Inventory agent + pricing agent + marketing agent
- **Content business**: Writer agent + editor agent + publisher agent
- **Services**: Lead qualifier + proposal writer + scheduler
- **Operations**: Monitor + responder + reporter

## Tips

- **Keep it observable**: You should be able to see every message between agents
- **Fail gracefully**: If one agent goes down, others should wait, not crash
- **Test with mock data first**: Let agents negotiate over fake scenarios before real ones
- **Version your protocols**: As you change how agents communicate, track the changes
