---
layout: playbook.njk
title: "Tell Claude to Cancel Your Subscriptions. It Never Falls for the 'Wait, 50% Off' Screen."
description: "An Italian YouTuber hands his browser to Claude and lets it dig through account settings to find and cancel the subscriptions he forgot he was paying for."
date: 2026-07-14
difficulty: Beginner
cost: "A Claude subscription, around $20 a month, which you may already be paying for. No other tools required."
timeToSetup: "About an hour the first time, most of it spent watching the agent work."
originalSource: "https://www.youtube.com/watch?v=AR6NSwHFL4I"
originalAuthor: "GabrySolution (YouTube)"
issueNumber: 22
tags:
  - subscriptions
  - browser-automation
  - personal-finance
  - saas-costs
  - cost-cutting
  - dark-patterns
  - beginner-friendly
permalink: /playbooks/subscription-cancellation-agent/
---

## Tools

- [**Claude**](#aff-claude): the AI that does the actual work. The video uses the Fable tier, Anthropic's most capable model, which is built to work on a task for a long stretch, check its own work, and keep going until it's done instead of answering once and stopping.
- [**Claude for Chrome**](#aff-claude-for-chrome): the browser extension that lets Claude see your screen and click around your browser the way you would. This is how it gets into account settings pages that have no official "connection" for software.
- [**OpenClaw**](#aff-openclaw): the free, always-on assistant that runs on your own computer. Same idea, different wrapper: it can drive a browser too, and it's the route to take if you want this running on a schedule instead of on demand.

## The Story

GabrySolution is an Italian YouTuber who makes near-daily videos on practical AI. In a video from July 2026, he walks through eight real uses for Claude's Fable model, ordered from easiest to hardest: reading dense contracts and medical reports, acting as a bookkeeper, disputing an incorrect utility bill, running his calendar, and so on up the difficulty ladder.

The last one on the list is the one that should make you check your credit card statement. He hands Claude his browser and delegates the repetitive web work he never wants to do again. Including, as the video's own description puts it, cancelling subscriptions by itself.

The demo segment is about a minute long. That's the point. This isn't a weekend engineering project with wiring diagrams. It's a capability that already exists in the tools, waiting for you to actually use it: an AI that can open a website, log in with you present, navigate to account settings, hunt down the cancellation flow the company buried three menus deep, and click through it to the end.

The video is in Italian, but the framing translates perfectly. His whole thesis is to stop treating AI like a search box and start treating it like a person on your team you hand a responsibility to. "Go cancel the subscriptions I don't use" is a responsibility. It has a finish line, it's verifiable, and no human being on earth enjoys doing it.

## How It Works

There's no code here. The setup is a conversation.

**Step 1: Build the hit list.** Export two or three months of credit card and bank statements and give them to Claude. Ask it to pull out every recurring charge and flag anything duplicated, anything unused, and anything you don't recognize. Most people guess their subscription total low. Surveys on this consistently find actual spend running two to three times what people estimate.

**Step 2: You decide what dies.** Go down the list and mark keep or kill. This part stays human. The agent should never decide what you value.

**Step 3: Hand over the browser.** With the browser extension connected, give Claude the kill list and one instruction: for each service, log into the account, find the cancellation flow, complete it, and save a screenshot of the confirmation.

**Step 4: Watch it run the maze.** This is where it gets satisfying. The agent goes to the account page. It finds "Manage subscription" hidden under "Billing" under "Settings." It hits the retention screen: "Are you sure? Here's 50% off for 3 months." It declines. It hits the survey: "Why are you leaving?" It picks an answer. It hits the second confirmation, and the third, and clicks through all of them, because it does not get tired, it does not feel guilty, and it is not tempted by the discount. It captures the confirmation and moves to the next one.

**Step 5: Get the report.** At the end you have a list of what was cancelled, screenshots proving it, and a note on anything it couldn't finish.

## The Maze Is the Business Model

Here's the part worth being angry about. Cancellation flows are hard on purpose. Subscription companies A/B test those retention screens the way casinos test carpet patterns. Every extra click, every guilt-trip survey, every "chat with an agent to cancel" wall exists because some percentage of humans give up halfway through, and giving up is revenue.

US regulators actually tried to outlaw this with a "click to cancel" rule that said cancelling must be as easy as signing up. A federal appeals court threw the rule out in 2025 before it ever took effect. The maze is legal, and it's staying.

Which is exactly why an agent is the right tool. Dark patterns work on human psychology: fatigue, distraction, loss aversion, the little jolt of "well, 50% off is pretty good." An agent has none of those buttons to push. It was told to reach the confirmation screen, and it treats the retention funnel as what it actually is: a series of obstacles between it and done.

## The Replacement Math

There's a whole industry built on doing this for you. Rocket Money and similar apps charge a monthly premium fee to track and cancel subscriptions, and when they negotiate a bill down, they take a cut of your first year of savings, in some cases more than half. You are paying a subscription service to escape subscription services. The agent does the same job for the Claude subscription you already have, and keeps 100% of what it finds.

Now scale that thinking to your business, because this is where the number gets serious. The average small business is carrying SaaS seats for employees who left, two tools that do the same job because two different people signed up, and free trials that quietly converted eight months ago. Industry studies on SaaS waste keep landing in the same neighborhood: something like a third of spend going to licenses nobody meaningfully uses. If your software line is $2,000 a month, that's potentially $600 a month leaking out. This exact playbook, pointed at your business card statement instead of your personal one, is the cheapest audit you will ever run.

## The Honest Caveats

Three rules, non-negotiable.

**Your accounts only.** The agent logs into things as you, cancels things as you, and clicks legally meaningful buttons as you. Never point it at anyone else's accounts, and think twice before pointing it at shared business accounts without telling your partner.

**Watch the first run.** Sit there with your coffee and supervise the first few cancellations end to end. You want to catch the edge cases: the annual contract with an early-exit fee, the "cancelling deletes all your data immediately" warning, the service your kid actually uses. Once you trust it, supervision can loosen. Keep the agent set to ask before final, irreversible confirmations until then.

**Some walls still need a human.** Plenty of gyms, insurers, and telecoms still require a phone call or a certified letter to cancel, precisely because it filters people out. The agent can't make that call for you yet, but it can do the next best thing: draft the cancellation letter, find the right address or number, and hand you a script.

## Who Should Steal This

Anyone with a credit card, honestly. But especially: any household that hasn't audited recurring charges in over a year, any small business owner whose software spend grew by "one more tool" at a time until nobody could name them all, and any office manager or bookkeeper who inherited a pile of vendor logins and dreads the cleanup. The pattern underneath, handing tedious multi-step browser work to an agent that can't be worn down, applies to far more than cancellations. This is just the version that pays for itself on day one.

---

## Keep Reading

- **[He Spent $1,263 on AI in One Month. Then He Capped It.](/playbooks/ai-budget-cap/)**: the other half of spend control, putting a hard ceiling on the one subscription this playbook tells you to keep.
- **[Screenshot Anything You Want to Buy. Claude Finds a Discount Code That Actually Works.](/playbooks/ai-discount-code-hunter/)**: the same agent, pointed at saving money on the way in instead of the way out.
- **[AI Grocery Shopping with a Virtual Credit Card](/playbooks/ai-grocery-shopping/)**: what letting an agent spend for you looks like when you add real guardrails.
