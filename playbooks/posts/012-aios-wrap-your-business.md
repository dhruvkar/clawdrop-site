---
layout: playbook.njk
title: "6 Non-Technical Founders Wrapped Their Businesses in Claude Code in 8 Hours. Here's What They Built."
description: "Liam Ottley's AIOS framework treats Claude Code as a wrapper around your existing business, not a coding tool. Six non-technical founders ran the methodology in a single day at a Cape Town mastermind and shipped real integrations: a Zoho invoice agent, a finance reconciliation pipeline, a competitor analysis machine, a content engine. Here's the playbook for any small business owner."
date: 2026-05-06
difficulty: Intermediate
cost: "$24/mo VPS optional. $20/mo Claude Code subscription. Or $5K productized via Liam's accelerator."
timeToSetup: "8 hours of focused work for v1. 3 weeks of layering for the full wrapper."
originalSource: "https://www.youtube.com/watch?v=OCs0WJ5VoOc"
originalAuthor: "Liam Ottley"
originalAuthorUrl: "https://www.youtube.com/@LiamOttley"
issueNumber: 12
permalink: /playbooks/aios-wrap-your-business/
tags:
  - aios
  - ai-operating-system
  - claude-code
  - founder-ops
  - small-business
  - methodology
  - liam-ottley
  - context-os
  - business-automation
  - home-services
  - solopreneur
---

## Tools

- [**Claude Code**](#aff-claude-code): the substrate the whole AIOS runs on
- [**Anthropic**](#aff-anthropic): model provider behind Claude Code
- [**Cursor**](#aff-cursor): Liam's recommended editor for non-technical founders
- [**Telegram**](#aff-telegram): phone-side control surface for the wrapper
- [**iMessage**](#aff-imessage): alternative phone control for Mac users
- [**Mac mini**](#aff-mac-mini): always-on host that runs the wrapper 24/7
- [**Zoho**](#aff-zoho): example financial integration (Cape Town capstone)
- [**QuickBooks**](#aff-quickbooks): accounting integration for finance automation
- [**Stripe**](#aff-stripe): payment links inside customer estimates
- [**Google Business Profile**](#aff-google-business-profile): review monitoring and response drafting
- [**ElevenLabs**](#aff-elevenlabs): optional voice layer for narration and digests
- [**OpenClaw**](#aff-openclaw): the alternative substrate Liam considered and didn't pick

## What You'll Build

A wrapper around your existing business that knows everything about it. Your customers, your pricing, your tone, your operations, your numbers. Once that wrapper exists, you stop opening seven different apps to do the work of running your company. You message it from your phone and the work gets done.

Concretely, you walk away with three layers stacked on top of your existing business. A Context OS that has read your customer list, your pricing, your offers, your past invoices, and your voice. A Data OS that pulls live numbers from your accounting software and your CRM into one mission-control view. An Automation Layer that handles the routine work you used to do yourself: drafting estimates, chasing invoices, watching reviews, dispatching crews, summarizing the day.

The proof point is a villa in Cape Town. Six non-technical founders flew in for 8 hours of focused work. By the end of the day, four of them had shipped real integrations that talk to their actual businesses. One of them barely uses ChatGPT. He shipped a working Zoho invoice agent. The methodology in this playbook is the one they followed.

## The Operator Trap

Most small business owners spend about 80% of their time IN the business and 20% ON it. Liam Ottley calls this the operator trap. You are the salesperson, the dispatcher, the customer service rep, the bookkeeper, and the finance approver. The 20% you have left for actual strategy is where every good decision comes from. And it is the first thing that gets eaten when the week gets busy.

Margin pressure from AI is going to keep arriving in waves. The operators who survive are the ones with bandwidth to pivot. Bandwidth comes from getting your hours back. Not from working harder, not from hiring a virtual assistant in another time zone, but from wrapping a layer around your business that does the routine work for you.

This is not a doom story. It is the opposite. The same wave that is squeezing margins is also handing small business owners the cheapest leverage they will ever buy. A $20-a-month subscription, an afternoon writing some context files, and a phone-side messaging layer. That is the setup. The rest is layering one automation a week until the wrapper is doing more work than you are.

The framing matters. AIOS is not about replacing your team or your judgment. It is about getting your hours back so you can use both better. A wrapped business is one where the owner has time to think.

## What An AIOS Actually Is

AIOS stands for AI Operating System. It is not a product you buy. It is a methodology you apply on top of your existing business. Liam's framing, in his own words: *"AIOS is not a business model. It is a business methodology, an AI wrapper built around your existing business in layers, not leaps."*

In plain language: you do not throw out what you have. You wrap it. Your business model, your customers, your offers, your operations, all stay exactly as they are. You build three layers on top, each one resting on the one below.

```
+--------------------------------------+
|         AUTOMATION LAYER             |   workflows, agents, scheduled tasks
|  +--------------------------------+  |
|  |          DATA OS               |  |   business data + mission-control dashboard
|  |  +--------------------------+  |  |
|  |  |      CONTEXT OS          |  |  |   the foundation: 4 context files that
|  |  |                          |  |  |   teach Claude everything about you
|  |  |   +------------------+   |  |  |
|  |  |   |  YOUR BUSINESS   |   |  |  |   the value-creating core (unchanged)
|  |  |   |     MODEL        |   |  |  |
|  |  |   +------------------+   |  |  |
|  |  +--------------------------+  |  |
|  +--------------------------------+  |
+--------------------------------------+
```

The bottom is your actual business. The Context OS is four markdown files that teach the agent who you are, who your customers are, how your offers work, and how your operations run. The Data OS pulls your real numbers into one place and renders a dashboard you can actually look at. The Automation Layer is where the agents live: missed-call autoresponder, estimate writer, review babysitter, invoice chaser. Each layer is useful on its own. Stacked, they compound.

## The 8-Hour Mastermind In Cape Town

The mastermind happened at a villa in Cape Town. Six non-technical founders flew in. Liam ran the day. The agenda was straightforward: intros, a short theory block on the AIOS framework, environment setup using Cursor and Claude Code with Liam's starter kit, then Context OS install, then capstone builds. They ran out of time for the full Data OS layer and skipped straight to capstones, which turned out to matter.

The room was a real cross-section. Cyble runs a holiday brokerage out of Johannesburg. He uses ChatGPT from time to time on his laptop. That is the extent of his AI background. Brian runs a venture studio with a portfolio of e-commerce and SaaS bets. Richard runs an e-learning platform and was thinking about acquisitions. Lionus runs a voice-AI agency. The other two seats: a designer-agency owner and an ex-influencer-marketing founder. None of them are engineers.

Setup took about ninety minutes. Install Cursor, install Claude Code, drop Liam's starter kit into a folder, log in. Cursor here is just the editor. The agent itself runs through Claude Code. Non-technical founders use Cursor instead of a terminal because the buttons and folder view feel familiar.

A few of them hit the wall everyone hits the first time: the agent will not run, the API key is not set, the folder is in the wrong place. Liam walked the room through it. None of these problems took more than ten minutes to fix. The pattern: when something does not work, paste the error into the agent and ask it to debug itself. It usually can.

Then came the Context OS. They each spent the next chunk of the day filling in four markdown files about their businesses. Who they are and how they sound. Who their customers are. How their offers work. How their operations run. Liam walked the room through it. By lunch, every founder had a Claude Code agent that could answer questions about their own business in their own voice.

After lunch they went straight to capstones. Pick one automation that touches your real business and ship it before dinner. Four of them shipped working integrations. Here is what came out of the room.

| Founder | Business | Shipped |
|---|---|---|
| Cyble | Holiday brokerage, Johannesburg | Zoho integration: chat-with-Zoho. Asks "how many unpaid invoices?" from inside Claude Code, no Zoho login |
| Brian | Venture studio | Auto-reconciled finance reports: pulls transactions, reconciles, monthly P&L |
| Richard | E-learning platform | Competitor analysis pipeline for acquisition diligence: web search + business context + clean report |
| Lionus | Voice AI agency | Automated competitor scrape + content idea generation, scheduled weekly |

Cyble's build is the one to anchor on. Zoho is his accounting software. Before the mastermind, every time he wanted to know how many invoices were unpaid, he opened Zoho in a browser, logged in, navigated to the right report, and read it. After 8 hours of guided work, he asks his Claude Code agent and gets the answer in his terminal. No login, no clicking. The agent talks to Zoho's API on his behalf.

The technical move under the hood is not complicated. The agent uses Zoho's API key, makes the right call, parses the response, and reports back in plain English. What is striking is not the technology. It is that a non-technical founder shipped this in an afternoon. Last year this build would have been a two-week engagement with a developer.

Liam's line about Cyble, said at the end of the day: *"Cyble was the least technical of the bunch. He uses ChatGPT from time to time on his laptop. He shipped a working Zoho integration in 8 hours."* That is the proof. If a holiday brokerage owner who barely uses ChatGPT can ship a working accounting integration in a single day, the methodology is doing real work.

## Step-by-Step Setup

Here is the replication path. Seven steps. Most of them are about an afternoon each. Spread across two or three weekends if you cannot do an 8-hour day.

### Step 1: Install Claude Code (and pick your editor)

Claude Code is the substrate. It is the agent that lives on your machine and does the work. Subscription is around $20 a month. It runs on Mac, Windows, and Linux.

Cursor is the recommended editor for non-technical founders. It looks like a normal app. You can see your files in a sidebar, click a button to run things, and read the agent's responses in a chat panel. If you are comfortable with a terminal, skip Cursor and use the terminal directly. Either way, the agent itself is the same.

Pick one machine to host this on. Your laptop is fine for the first week. Once the wrapper is doing real work, move it to a Mac mini on your desk or a $5-a-month VPS so it stays online while you sleep.

### Step 2: Lay down the Context OS, the most important step

The Context OS is four markdown files that teach Claude everything about your business. This is the foundation. Skip it and the agent is just a generic chatbot. Get it right and the agent talks like you.

Claude Code itself can help you build the Context OS. It offers five ingestion options the first time you run the install command. A Q&A questionnaire that walks you through every question. A document import where you drop existing files into an `import/` folder and the agent reads them. A paste-raw-info option for a quick copy-paste of whatever you have. A website URL crawl that reads your existing site. A ChatGPT memory export if you have been using ChatGPT for a while.

Pick whichever one gets you to "the agent knows me" fastest. For most founders, a mix of document import (drop your customer list, your pricing book, your offers PDF) and the Q&A questionnaire (for tone and operations) is the right cocktail. Plan on a focused afternoon for this step.

The Cape Town founders all spent about three hours here. The room was quiet. Heads down. This is the part where the wrapper gets its soul.

### Step 3: Write your 4 context files

The Q&A or import builds rough drafts. You polish them by hand. The four files cover four areas.

**Who you are and how you sound.** Tone, voice, communication style. Include 5-10 real emails or texts you have actually sent so the agent can pattern-match. Same idea as the SOUL.md doc in our inbox-triage playbook.

**Who your customers are.** Customer list, segments, lifetime value, the difference between a residential customer and a property manager, the difference between a one-off booking and a corporate client. Include real names if it is your business and you trust your machine.

**How your offers work.** Pricing, packages, deliverables, exceptions, discount rules, terms. The agent needs to know what you charge for what.

**How your operations run.** Crew, vendors, supply chain, hours, service area, warranty terms, escalation paths. The boring middle that keeps the lights on.

Liam does not publish exact templates outside his accelerator. The pattern is what matters. Plain markdown, written like you are onboarding a new employee.

### Step 4: Set up Data OS

The Data OS is the layer that pulls live business data into one place. Connect QuickBooks or Zoho or whatever you use for accounting. Connect your CRM. Connect Stripe if you take card payments online. The agent now has read access to the real numbers.

The mission-control dashboard is where this gets fun. Ask Claude Code to render a dashboard as a Claude Artifact: revenue this week, revenue this month, top 10 customers by spend, AR aging, jobs in pipeline, anything else you stare at. A Claude Artifact is just a small app the agent generates on the fly. You bookmark the link and now you have your own dashboard.

Liam's Cape Town founders skipped this step for time and went straight to capstones. They shipped real things without it. But the Data OS is where compounding starts. The Automation Layer is much smarter when it can read your real numbers, not just your context files.

If you are a one-person operation, you can defer this step until Week 2. If you have any kind of team, do it before Week 1 ends. The dashboard becomes a shared artifact that gets the team aligned.

### Step 5: Pick your first automation with `/brainstorm` or `/explore`

Do not try to build everything. Pick one automation. Liam's starter kit ships with two slash commands designed for this exact moment.

`/brainstorm` is for "I do not know where to start." The agent reads your context files, looks at your business, and proposes three good first automations. You pick one.

`/explore` is for "I have a fragment of an idea." You type something like "I want a missed-call autoresponder" and the agent scopes it, web-searches the right approach, drops an exploration document with a build plan and a list of what it needs from you.

Either way, you end up with a clear v1 to ship. Build that one. Ignore the other ten ideas you had this morning.

For most home services operators, `/brainstorm` will surface the missed-call autoresponder as the first build. That is the right call. For most portfolio operators, it will surface the finance reconciliation. Also right. The slash commands are pattern-matching on your context files, and the patterns they spot are usually the patterns that matter.

### Step 6: Wire your phone in

The wrapper is not a thing you sit at. It is a thing you message. Connecting your phone is what turns this from "another tool I have to remember to open" into "the thing I run my business through."

Telegram is the cross-platform option. It works on iPhone, Android, desktop, anything. iMessage is the Mac-only option, lighter weight if your team is already on Apple. Either one becomes the chat window you talk to your wrapper through.

Liam works from concerts and bike rides this way. He texts his wrapper "what is the AR aging look like" and gets a reply. He texts "draft a follow-up to the prospect from Tuesday" and gets a draft. The wrapper is on his phone, not on his desk.

This step takes about an hour. Telegram bot setup is a one-time configuration. iMessage routing through a Mac mini takes a little more wiring but is well-documented. Either way, by the end of the hour you have a chat thread on your phone that is your business control panel.

### Step 7: Layer slowly. Tune weekly.

This is "layers, not leaps." Add one automation a week. Resist the urge to ship five. The agent gets sharper as you tune it, and tuning five things at once is how operators end up with five half-broken systems.

Track Liam's three KPIs from the start. Away-from-desk autonomy: how many days a week does your business run without you actually being at your desk? Task automation percentage: what fraction of your routine work is the wrapper handling? Revenue per employee: are you getting more output without adding headcount? Without these numbers, the wrapper feels vague. With them, you can prove to yourself it is working.

## Lanes That Work (with one full-detail vertical)

The methodology applies broadly. Here are three lanes where it really sings, with home services as the deep dive because the ROI math is the cleanest of any vertical we have written about.

### Home Services (the deep dive)

If your phone is your business and your trucks are your inventory, this section is for you. Plumbers, HVAC, electricians, landscapers, roofers, pest control. The wrapper changes the shape of the day.

**Day 1.** Spend the afternoon on the Context OS. The agent reads your customer list, your pricing book, your service area, your crew names, your warranty terms, and your tone. Tone is real here: the way you talk to a grandma who needs her water heater replaced is not the way you talk to a property manager with twelve units across town. The Context OS captures both.

The customer list deserves its own note. Drop in your last 200 jobs with name, address, service performed, price, and any notes. The agent now knows that the Hendersons over on Maple already had their main line snaked twice this year, and that the third call should probably be a sales conversation about a full replacement instead of a fourth snake.

**Week 1: missed-call autoresponder.** This is the highest-ROI automation you will ship. When a call comes in and you cannot answer, the wrapper sends a text inside 60 seconds in your voice. "Hey, this is Mike from Mike's Plumbing. Sorry I missed you. What is going on at the property?" The customer texts back. The agent scopes the job, asks a clarifying question or two, and books a slot from your calendar. You read the conversation later. Most home services shops lose 20-30% of inbound calls. This one automation closes that leak.

**Week 1: photo-to-estimate.** Customer texts a picture of a broken water heater. The agent identifies the model from the photo, applies your markup, generates an estimate, and attaches a Stripe payment link inside the estimate. Customer can pay the deposit before you have driven over. The conversation never left their text thread.

**Week 1: same-day follow-up.** Job done. The wrapper sends a thank-you text in your voice, includes a Google review request, attaches the warranty PDF, and sets a maintenance reminder for the right number of months out. You used to forget to do this on three out of every five jobs.

**Week 1: review babysitter.** Anything under 4 stars on your Google Business Profile pings your phone within 5 minutes with a draft response and the customer's full job history. You read both, you tap edit on the draft if needed, you send. Most small shops let bad reviews sit for a week. This kills the response delay.

The four Week 1 builds stack. Missed-call autoresponder catches the lead. Photo-to-estimate closes the lead. Same-day follow-up gets the review. Review babysitter protects the reputation. Together they make the front of your business hum without you holding the phone.

**Month 1.** The mission-control dashboard goes live. Revenue this week, this month, jobs scheduled, AR aging, average ticket size by service type. You stop guessing how the business is doing. You also add the crew dispatch coach: the wrapper does the travel-time math you were doing in your head, looks at who is closest to the next job, and proposes the dispatch. You override or accept. By the end of the month, the wrapper is recommending dispatches you would have made yourself, only faster.

**Month 1: recurring-revenue motion.** Seasonal nudges to maintenance contract customers. The wrapper knows which customers are due for fall heater service, drafts the outreach text, sends on your approval. This one automation has converted $0 customers into $400-a-year subscribers for several home services operators we have profiled.

**Month 3.** The wrapper has supplier history with memory. It remembers what you paid for that brand of water heater six months ago and flags when the price goes up. Pricing guidance based on your last 50 jobs in that ZIP, so you stop underbidding the rich neighborhoods and overbidding the price-sensitive ones. End-of-day report at 6pm that summarizes the day on your phone: jobs done, revenue, callbacks needed, tomorrow's schedule.

**The number.** A typical small home services shop spends 2 to 4 hours a day on phone triage, estimating, follow-up, and dispatching. At your hourly owner-value, that is $50K to $100K a year in time you are spending on the routine middle. A wrapper that gives you 70% of that back is one of the rare software bets with embarrassingly clean ROI math. Even the productized $5K install pays for itself in the first month.

The hidden number is the leads you are not winning today. Industry data on home services puts missed-call rates at 20-30% during business hours and higher after hours. If you are doing $800K a year on a 30% close rate, the missed calls alone are leaving $150K-$200K on the table. The autoresponder catches a meaningful fraction of those.

### Multi-LLC and portfolio operators

Brian's venture studio capstone is the proof point here. He owns multiple companies and was drowning in finance reports. The wrapper now pulls transactions across each entity, reconciles them, and produces monthly P&L statements without him touching a spreadsheet.

The pattern extends. Auto-reconciled finance across every entity. Monthly portfolio reports that compare entities side by side. AR aging that tells you which company is sitting on the most uncollected invoices. Inter-company expense routing so the wrapper knows that the AWS bill on the parent card needs to get split across three subsidiaries.

If you are running three or more legal entities, the time tax on financial admin is brutal. The wrapper collapses it into one weekly review.

Brian's specific shipping moment at the mastermind: by 6pm, his wrapper had pulled the last 30 days of transactions across his portfolio, reconciled them against his bank statements, and produced a one-page P&L for each entity. The work he had been planning to outsource to a part-time bookkeeper at $1,200 a month was now happening inside his Claude Code agent for $20.

### Service businesses with competition

Richard's e-learning capstone and Lionus's voice AI agency capstone are the proof. Both built competitor analysis pipelines that run on a schedule and land clean reports on their desks.

The pattern: weekly competitor scrape, business-context overlay, content idea generation. The wrapper knows what your competitors are publishing, knows what you sell, and proposes content angles that close the gap. For Richard, who was thinking about acquisitions, the same pipeline writes due diligence reports on target companies.

If you are in a competitive market, the wrapper turns "I need to do a competitive scan this quarter" into a weekly automated artifact you can actually use.

Lionus's content engine is worth a closer look. The wrapper scrapes his three biggest competitors every Monday morning, looks at what they shipped that week, cross-references against his own content calendar, and proposes the angles he should publish to stay differentiated. The proposals land in his inbox before his first coffee. He picks one or two, hands them to his content lead, and the work moves.

## What Changes After Setup

**Day 1.** You install Claude Code and Cursor, lay down the Context OS, write the four context files, and ship a v1 of one automation. You do not change anything in your actual business yet. The wrapper is in observation mode.

**Week 1.** The first automation goes live. For most home services operators it is the missed-call autoresponder. You watch it for two days and tune the tone file. By Friday, the wrapper is closing leaks you could not before.

**Month 1.** You have layered three or four automations. The mission-control dashboard is your morning coffee read. Your phone has Telegram or iMessage open as the wrapper's control surface. You are spending two hours a day less on routine work and you have started spending some of that time ON the business instead of IN it.

**Month 3.** You are running Liam's three KPIs. Away-from-desk autonomy is up. Task automation percentage is over 50%. Revenue per employee is climbing without new hires. You take a 4-day trip and the wrapper handles the routine flow. You come back to a digest, not a fire. This is the moment the wrapper stops being a project and becomes infrastructure.

This is also the moment your relationship with the business changes. You stop being the bottleneck. The wrapper does not replace you, but it absorbs the part of you that was getting drained. You start having ideas again. That is the real product.

## Gotchas and Tips

**It is not set-and-forget.** Liam's own wrapper took 3 weeks of layering to get useful. Plan on tuning weekly for the first two months. The wrapper that ships in 8 hours is v1, not v10.

**It does not replace judgment.** The competitor analysis report lands on your desk every Monday. The decision to pivot is still yours. The wrapper is a force multiplier on your decisions, not a substitute for them. Treat it that way.

**It does not fix a broken business. It amplifies what is there.** If your pricing is wrong, the wrapper will quote wrong prices faster. If your tone is off, the wrapper will write off-tone emails at scale. Fix the substrate before you wrap it.

**Liam picks Claude Code over OpenClaw and Cowork specifically for this thesis.** Substrate matters. Claude Code's file-based context, slash commands, and terminal-native workflow are what make the AIOS pattern work the way Liam describes it. OpenClaw is a fine substrate for other patterns. For this one, Claude Code is the pick.

**The 4 context files are the highest-leverage afternoon you will spend.** Skimp on the context files and every automation you build downstream is dumber than it should be. Spend the afternoon. Write real examples. Include real customer names and real prices.

**Do not try to ship more than one automation a week in Month 1.** This is the most common operator mistake. You watch the missed-call autoresponder work and you immediately want to build five more things. Resist. Tune the one. Ship the next one next week.

**Wire your phone in early, do not make it the last step.** Operators who treat the phone integration as a "polish item" never end up using the wrapper. The phone is the interface. Without it, the wrapper is just another browser tab you forget about.

**If you are a $5M+ small business with a real team, the productized $5K install is probably worth more than the DIY weekend.** Liam runs a productized version of this through his accelerator. For solopreneurs, DIY is fine. For shops with real headcount, the install gets you to layer three faster than your team can on their own.

**If your phone is your business (home services, real estate, hospitality), prioritize the missed-call autoresponder before anything else.** This one automation alone covers the cost of the entire stack and then some. Build it Week 1. Tune it Week 2. Then build the next thing.

**Track Liam's three KPIs from week 1, not month 3.** Away-from-desk autonomy, task automation percentage, revenue per employee. Without measurement you will abandon the project the first time you have a busy week. With the numbers in front of you, you keep going because you can see it working.

**Back up your context files.** They are the only irreplaceable artifacts in the whole system. Check them into a private git repo. If you lose them, you are starting the afternoon over.

---

## Keep Reading

- **[One Claude Code Subscription. Five Agents. Zero New Frameworks.](/playbooks/claude-code-command-center/)**: The personal-stack version of this thesis. Same substrate, smaller scope.
- **[This HVAC Guy Spent Friday Night Setting Up AI. Now His Estimates Write Themselves.](/playbooks/hvac-estimate-autopilot/)**: The home services capstone in full. Photo-to-estimate, missed-call autoresponder, the whole field-service stack.
- **[Run Your Business on AI (While Living Your Life)](/playbooks/founder-runs-business-on-ai/)**: Adjacent thesis. The lifestyle case for wrapping your business in AI before someone else wraps theirs first.
