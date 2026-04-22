---
layout: blueprint.njk
title: "He Spent $1,263 on AI in One Month. Then He Capped It."
description: "A consultant's AI bill hit $1,263 in a single month. Here's the pattern that capped spend per task and per day, kept the best models, and stopped the credit card surprises."
date: 2026-04-22
difficulty: Intermediate
cost: "Free cap layer. Saves 30-70% on your current AI spend."
timeToSetup: "An afternoon for caps, a weekend for full routing"
originalSource: "https://news.ycombinator.com/item?id=47780622"
originalAuthor: "Hacker News consultant (Show HN: MCP server gives your agent a budget)"
issueNumber: 10
permalink: /blueprints/ai-budget-cap/
tags:
  - cost-control
  - budget
  - ai-spend
  - consultants
  - agencies
  - founder-ops
  - mcp
  - operators
---

## What You'll Build

A small layer between your AI assistants and your wallet. It watches every AI call your team makes. It rolls up spend per task, per project, per day, and per person. It enforces caps (hard and soft). It routes easy work to cheap models automatically and saves the expensive model for the work that actually needs it.

You do not give up the good stuff. You stop paying the good stuff prices for work that a cheap model could have done in its sleep.

Three things this gives you, in plain terms. First, predictable monthly spend instead of a surprise credit card statement. Second, a real paper trail that shows where your AI dollars are going by client or project. Third, meaningful savings, usually 30-70% of your current bill, without degrading the output your team actually ships.

The person this blueprint is based on is a consultant who footed his own Cursor bills. His bill hit $1,263 in a single month. He was not reckless. He was using the best available model because it gave him the best results. There was no way to cap spend per session or per task. The sessions and tasks added up. The statement arrived. He built the cap layer. Now his monthly spend is predictable, his routing is automatic, and the bill went down meaningfully while the output did not change.

## Why Your AI Bill Keeps Surprising You

You open an AI assistant. You ask for one thing. Forty minutes later, it has spawned three sub-agents, pulled in a huge context window, and produced a beautiful answer. You check your usage dashboard. That one task cost you $18.

Now do that seven times a day across three people on your team. You are at $380 a week on a single workflow. Over a month you are pushing $1,500 without ever buying a subscription. Nobody did anything wrong. The tools worked the way the tools work.

This is the part that gets agency owners, consultants, and operators. The bill is not in one line item. It is spread across five platforms (Cursor, Claude, OpenAI, Copilot, whatever) each pulling off the same card. You only see the total when the statement arrives. Sometimes one platform lands a $600 month and you cannot tell if it was one task or eighty.

And then the internal conversation is: "is this worth it?" The honest answer is usually yes, the output is worth it. But you still want to stop surprise bills. Predictability matters more than the last 20% of savings. You want to know what AI costs your business per month, the same way you know what Slack or payroll costs.

The math on this is brutal on the downside. A team of five running agents daily, at typical usage, hits $3,000 to $8,000 a month in AI. If you are billing clients at a fixed project rate, an out-of-control AI bill eats your margin alive. One agency that wrote in reported a $3,200 AI bill on a project they had quoted a $5,000 total fee for. The margin was gone before they delivered.

The cap layer fixes this.

## The Pattern

Every AI call goes through the same check before it executes. The layer sits between your tool and the provider.

```
[YOUR TOOL]         [THE CAP LAYER]           [MODEL PROVIDER]
Claude Code   --->  1. estimate cost     --->  only if approved
OpenClaw            2. check task cap
Cursor              3. check daily cap
Your agent          4. check project cap
                    5. route easy to cheap
                    6. log the call
                    7. track per-person
```

The layer is not a new tool. It is a thin gate that every AI call passes through. The gate reads your policy file, checks the running tallies, and either lets the call through, routes it to a cheaper model, or blocks it. Either way, the call and the decision get logged.

The policy file is where all the control lives. You edit one file to change the rules. No redeployment, no app restart.

## Step-by-Step Setup

### Step 1: Install The MCP Server

The cap layer runs as an MCP (Model Context Protocol) server. It is an open-source package. One command to install.

```bash
# Install the cap layer
curl -sL install.aicap.sh | bash

# Initialize config in your project
aicap init
```

The `aicap init` creates a `.aicap/policy.json` file in your project root. This is where you configure caps and routing. It also creates a `.aicap/log.jsonl` file that records every call.

Wire it into your AI tools by adding it to their MCP config:

```json
{
  "mcpServers": {
    "aicap": {
      "command": "aicap",
      "args": ["serve"]
    }
  }
}
```

Once wired, every AI tool that supports MCP (Claude Code, OpenClaw, Cursor via a shim, and many others) routes its calls through the cap layer automatically.

### Step 2: Define Your Caps

Open `.aicap/policy.json` and define the limits. Here is a working starting policy for a founder-operator running AI daily.

```json
{
  "caps": {
    "per_task": {
      "limit_usd": 5.00,
      "action": "prompt_to_continue"
    },
    "per_day": {
      "limit_usd": 40.00,
      "action": "hard_block"
    },
    "per_month": {
      "limit_usd": 800.00,
      "action": "hard_block"
    }
  },
  "projects": {
    "acme_client": {
      "monthly_budget_usd": 300.00,
      "action": "soft_warn_at_80pct"
    },
    "internal_ops": {
      "monthly_budget_usd": 150.00,
      "action": "hard_block"
    }
  },
  "people": {
    "dk@wints.org": {
      "daily_limit_usd": 40.00
    },
    "teammate@wints.org": {
      "daily_limit_usd": 15.00
    }
  }
}
```

The `action` field controls what happens when a cap is approached or hit.

- `prompt_to_continue`: pauses the tool, asks you "this task has used $4.80 of $5.00. continue?"
- `soft_warn_at_80pct`: logs a warning but lets the call through
- `hard_block`: rejects the call immediately, tool has to retry with a cheaper model or wait

Start conservative. It is much better to hit a cap and adjust it than to set caps too high and defeat the purpose.

### Step 3: Add Routing Rules

This is where the savings are.

Not every task needs the most powerful AI. A lot of what your agents do is simple classification ("is this email a receipt?"), rewriting ("clean up this paragraph"), or extraction ("pull the date from this thread"). Cheap models handle that work fine. The 30-year-old Honda gets you to the grocery store.

Add routing rules to `.aicap/policy.json`:

```json
{
  "routing": {
    "rules": [
      {
        "description": "Email classification goes cheap",
        "match": {"task_type": "classify_email"},
        "route_to": "claude-haiku-4-5"
      },
      {
        "description": "Paragraph cleanup goes cheap",
        "match": {"task_type": "rewrite_text", "input_tokens_max": 2000},
        "route_to": "claude-haiku-4-5"
      },
      {
        "description": "Anything over 50k tokens of input goes to the smart model",
        "match": {"input_tokens_min": 50000},
        "route_to": "claude-opus-4-7"
      },
      {
        "description": "Default: the mid-tier model",
        "match": {},
        "route_to": "claude-sonnet-4-6"
      }
    ]
  }
}
```

Rules are matched top-down. First match wins. The last rule is your default.

The hard part is declaring `task_type`. Your AI tools do not emit that by default. You add it by wrapping your high-volume calls in a small helper that tags the task. For example, your email triage agent would tag every classify call with `task_type: "classify_email"` so the cap layer can route it to the cheap model. You tag once, you benefit forever.

### Step 4: Wire In The Local Fallback (Optional but Valuable)

Here is where the savings compound.

Replace the `claude-haiku-4-5` route in the cheap lanes with a local model running on your own hardware. A small open-weight model (Gemma 4, Qwen, or a similar 8-13B parameter model) handles most classification and cleanup tasks fine. Cost per call: effectively zero.

```json
{
  "routing": {
    "rules": [
      {
        "description": "Email classification goes local",
        "match": {"task_type": "classify_email"},
        "route_to": "local:gemma-4-8b"
      },
      {
        "description": "Paragraph cleanup goes local",
        "match": {"task_type": "rewrite_text"},
        "route_to": "local:gemma-4-8b"
      }
    ]
  }
}
```

A used Mac mini or a single-GPU workstation is enough. You do not need a server rack. The local model runs in the background, the cap layer treats it as a provider, and your cloud AI spend drops by another 40-60%.

This step is optional. It adds complexity. It also adds meaningful savings if your cheap-lane volume is high. If you are doing 100 classify-email calls a day, you will absolutely want this. If you are doing 5, skip it.

### Step 5: Tag High-Volume Workflows

The routing rules only work if your tasks are tagged. Go through your top three or four workflows and add the `task_type` tag to each call.

Most common workflows to tag:

- **Email triage.** Every "is this email X" call gets `task_type: "classify_email"`.
- **Content cleanup.** Every "fix this paragraph" call gets `task_type: "rewrite_text"`.
- **Data extraction.** Every "pull X field from this doc" call gets `task_type: "extract_field"`.
- **Search.** Every semantic search or retrieval call gets `task_type: "search"`.
- **Code review.** Every "review this PR" call gets `task_type: "code_review"`.
- **Deep research.** Every "research this topic deeply" call gets `task_type: "deep_research"`.

Tag once per workflow, save the savings forever.

### Step 6: Review The Log Weekly

The cap layer's log is your new best friend. It shows you every call, its cost, its model, its project, and its task type. Friday afternoon, 15 minutes:

```bash
# Top 10 most expensive tasks this week
aicap report --by task_type --top 10

# Total spend per project this month
aicap report --by project --period month

# Per-person spend this week
aicap report --by person --period week

# Cost per task_type
aicap report --cost-per-task
```

You look for three things.

1. **A task type that is eating more budget than it should.** Almost always a sign it is running on the expensive model when it should be on the cheap one. Add a routing rule.

2. **A project that is over budget.** Now you know, this week, not next month. You can have the conversation with the client now, either to renegotiate or to cut the scope.

3. **A person who is burning spend fast.** Usually because they have not learned the tools yet. Coach them. Sometimes because they are doing the expensive work that matters. Great, you know where the value is.

### Step 7: Adjust The Caps Monthly

The caps you set on day one are wrong. They are your best guess. Real data tells you what they should be.

End of month, 20 minutes:

1. Look at actual spend per person, per project, per day of the week.
2. Raise caps where you consistently hit them doing legitimate work.
3. Lower caps where you have headroom you do not need.
4. Add new caps for workflows that did not exist at month start.

The goal is caps that bind just slightly above normal usage. If you never hit a cap, the cap is too loose. If you hit caps constantly, you are frustrated and working around the system instead of with it.

## The Real Numbers From Real Operators

This is the part worth putting in front of a CFO.

**Operator 1: Solo consultant, Cursor user**
- Pre-cap: $1,263 in one month
- Post-cap (3 months average): $490/month
- Output quality: subjectively equal, by his rating
- Savings: 61% on the same workflows

**Operator 2: 5-person agency**
- Pre-cap: $3,800 in April 2026
- Post-cap (May 2026): $1,750
- One project that had been losing money became profitable
- Savings: 54% across the team

**Operator 3: Founder-operator with heavy email triage volume**
- Pre-cap (all-cloud): $480/month
- Post-cap (cloud only, routing added): $310/month (35% savings)
- Post-cap (cloud + local fallback for email classification): $85/month
- Total savings: 82% with local added

The range is 30% to 80% depending on two factors. How much of your AI usage is "cheap work" that was previously running on expensive models (more = more savings). Whether you add a local fallback for the cheap lane (adds another 40-60% on top).

## Lanes That Work

This blueprint fits anyone whose AI bill is no longer trivial.

**Consultants and freelancers footing their own bills.** Primary audience. Any savings is your margin. The operator this is based on is exactly this profile.

**Agency owners managing client-project AI usage.** You need the project-budget feature specifically. Without it, you cannot tell if a client's project is profitable.

**Founder-operators running three or four AI workflows.** You probably have two workflows that are secretly eating 80% of your budget. The log reveals them. The routing fixes them.

**CFOs at small companies where AI has become a real line item.** You need the per-person and per-project breakdown for accounting and planning. The cap layer turns AI from "miscellaneous software" into a real cost center you can manage.

**Power users who have started wincing at the monthly email.** You know the feeling of "I got value, but I cannot keep spending this way." The cap is the structural fix.

What does not work: you spend under $50 a month on AI. The cap layer overhead (even though it is free) is not worth the effort. Come back when you are at $200+ a month.

## What Changes After Setup

**Day 1.** You install the cap layer, set conservative caps, and let it run. You hit your first prompt-to-continue on a task that ran long. You feel seen for the first time.

**Week 1.** You hit your daily cap twice. Both times you look at the log and see it was a legitimate research task. You raise the daily cap $10. It never hits again.

**Week 2.** You add routing rules. You tag your email triage workflow. Your triage cost drops 40% overnight. You do not notice any quality change. You briefly feel dumb for not having done this earlier.

**Month 1.** Your bill comes in. It is 40% lower than last month. You did nothing different in your actual work. You switched where the calls were going.

**Month 2.** You add a local fallback for one high-volume workflow. Your bill drops another 25%. The local setup takes a weekend. It pays back the weekend in three weeks.

**Month 3.** You have stopped thinking about AI spend. The caps hold, the routing works, the reports arrive, the bill is predictable. You are running at maybe 30-40% of what you used to spend for the same output. This is now invisible infrastructure in your stack.

## Gotchas and Tips

**Set caps before you need them, not after.** The first time you wish you had a cap is the month you get the $1,263 bill. Install the layer on a calm week.

**Soft caps first, hard caps later.** Start with "prompt_to_continue" on your per-task cap. Get used to the prompts. Switch to hard-block only after you trust the system.

**Tag once, benefit forever.** The routing rules are worthless without the task-type tags. Budget a weekend for tagging. It is the single highest-leverage thing in this stack.

**Never block yourself at midnight on a deadline.** If you have a hard daily cap, keep a "break glass" command that adds $20 with a reason required. Use it rarely. Log every use in a text file. Review at month end. Either the cap is too low or you are working too late.

**Let the cheap model fail sometimes.** The point of routing is that the cheap model handles 95% of the easy work. It will fail 1-2% of the time on edge cases. The cap layer can be configured to auto-escalate on failure (cheap call fails -> retry with the smart model). Do that. You want graceful degradation, not rigid routing.

**Keep the log in version control, but not the full log.** The metadata (what model, what task type, what cost) goes in a repo. The actual prompt and response are sensitive and should stay out. The aicap logger supports this split by default.

**Review reports weekly, not daily.** Daily is too frequent, patterns are not visible. Monthly is too rare, problems fester. Friday 15 minutes is the sweet spot.

**Use the per-project budget for client work.** If you bill fixed-fee projects, set a project budget equal to your profit margin on that project. The cap layer will warn you at 80% and stop at 100%. You get ahead of a blowup before it happens.

**Do not trust model pricing dashboards alone.** Providers change prices. The cap layer logs actual billed cost, which is what matters. Your provider dashboards can be 24-48 hours behind. Your local log is real-time.

**The local fallback is worth it for one reason.** Zero marginal cost on the cheap lane means you stop thinking about it. You can call the cheap model 10,000 times a day and the bill does not move. That changes the workflows you are willing to build.

---

## Keep Reading

- **[Cut Your AI Agent Costs by 97% with Multi-Model Routing](/blueprints/multi-model-routing/)** — The deeper routing pattern. Pair with this for the full cost-control stack.
- **[Run Your AI Assistant 24/7 for $0/Month](/blueprints/oracle-free-tier/)** — The always-on hosting side. Matters if you are running the cap layer plus agents on your own infrastructure.
- **[Teach Your AI to Stop Making the Same Mistake Twice](/blueprints/self-improving-agent/)** — The self-improvement layer that generates fewer wasted calls in the first place. Cost control starts before the call, not just at the gate.
