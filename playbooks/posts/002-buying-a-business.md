---
layout: playbook.njk
title: "How an AI Helps You Buy a Business (Without a $50K Broker)"
description: "An acquisition firm rebuilt their entire deal sourcing pipeline with Claude. Buy box to off-market list to enriched leads to a written deal memo, before the first phone call. The same setup works for first-time business buyers."
date: 2026-05-20
difficulty: Intermediate
cost: "$50-150/month (database access + API costs)"
timeToSetup: "A focused week to get the first usable list"
originalSource: "https://www.youtube.com/watch?v=p8Jr2rVBVXs"
originalAuthor: "Moran Pober (acquisitions.com)"
issueNumber: 2
permalink: /playbooks/buying-a-business-with-ai/
tags:
  - business-acquisition
  - search-fund
  - holdco
  - deal-sourcing
  - off-market
---

## Tools

- [**Claude Code**](#aff-claude-code): runs the planning, enrichment, and memo-writing loop
- [**Anthropic**](#aff-anthropic): Claude API powering the agents
- [**Apollo**](#aff-apollo): the searchable business database that feeds the pipeline
- [**Clay**](#aff-clay): enrichment service for owner details and signals
- [**LinkedIn**](#aff-linkedin): public source for owner ages, tenure, and succession signals
- [**Google Sheets**](#aff-google-sheets): the deal pipeline where everything lands
- [**GitHub**](#aff-github): version control for your buy box and screening rules

## What You'll Build

An overnight pipeline that finds businesses for you to buy. Not the ones already listed on BizBuySell that 500 other buyers have seen. The ones whose owners haven't decided to sell yet, but whose age, tenure, or business signals say they might be ready if someone made the right call.

The pipeline takes a one-page "buy box" you write in plain English (industry, size, geography, asking price range) and gives you, by morning, a ranked list of real companies that fit. For every company on the list, it has already pulled the owner's name, age, time in business, employee count, and a few signals about whether they might be ready to sell. And for each one, it has already drafted a one-page deal memo you can read before you pick up the phone.

This is the system Moran Pober's acquisition firm uses. It is also the system you can use to buy your first business.

## Why This Works

The hardest part of buying a small business is not the negotiation, the financing, or the closing. It is finding a good one to buy.

Business brokers exist to solve this. They charge 10-12% of the deal value, often with a minimum of $25,000 to $50,000. In exchange they show you their listings. But broker listings are picked-over. The same five buyers are looking at the same listing the day it gets posted. The good deals are gone in 48 hours. And the listing you're looking at is, by definition, a business someone has already decided to sell. That decision pushes the price up.

The real opportunity is **off-market**. A business whose owner is 67, has been running it for 30 years, hasn't told anyone they're tired, but would say yes to the right offer. There are tens of thousands of these owners. There is no list of them. Finding them is grinding work.

Until now grinding work was the only way. You'd build a target list from D&B or ReferenceUSA, pay a research firm to enrich it, hire a college kid to skip-trace owners. One round of 200 targets would take a junior analyst two weeks.

Claude does the same work overnight. It reads your buy box, queries the database, enriches every target with public-record signals, throws out the ones that don't fit, and writes a one-page brief on every survivor. By morning you have a call list with the homework done.

This is the entire game. Buyers who build their own off-market lists are not competing with each other on price. They are competing on who calls first.

## How the Pipeline Works

The system runs in five stages. Each one feeds the next.

### Stage 1: The Buy Box

Before any AI touches anything, you write your buy box. This is a plain-English description of the kind of business you want to own:

- **Industry.** "Residential HVAC services" or "B2B accounting firms with $1M-3M revenue."
- **Geography.** "Within 90 minutes of Dallas" or "Anywhere in Texas, Oklahoma, or Arkansas."
- **Size.** Revenue range, employee range, profit range.
- **Owner profile.** "Owner-operator, age 55+, 10+ years in business."
- **Deal shape.** Asking-price range, seller financing acceptable, real estate included or separate.
- **Disqualifiers.** Industries you won't touch (food service, restaurants, vape shops). Owners you won't touch (legal trouble, recent lawsuits).

Save this as a Claude Code skill. Now every member of your team is screening against the same criteria, and the AI can read it on every run.

### Stage 2: The List

A second agent reads the buy box and queries a business database. The most accessible options for SMBs:

- **Apollo** for company search by SIC code, geography, and headcount. Affordable for small teams.
- **D&B Hoovers** for deeper firmographic data including revenue estimates.
- **ReferenceUSA** (free at most public libraries) for U.S. small businesses.
- **State Secretary of State filings** for public registration data including officer names and registered agents.

The agent pulls every company that matches the buy box, with no filtering yet. For a typical search you'll get 300-2000 raw targets.

### Stage 3: Enrichment

For each company on the raw list, a third agent fills in the details that don't come from the original database:

- **Owner's full name** (often in state Secretary of State records).
- **Owner's age**, estimated from LinkedIn or public records.
- **Owner's tenure** in the business.
- **Estimated revenue**, refined from initial database estimates by cross-referencing employee count, location, and industry benchmarks.
- **Succession signals.** Has the owner posted on LinkedIn about retirement? Is there a named "successor" or family member in the business? Has the company hired a CEO or COO recently? Has Google reviews trended down? Is the website outdated?
- **Owner contact info.** Email, phone, mailing address.

Clay handles a lot of this in one pass. Whatever Clay can't fill in, Claude attempts via LinkedIn, the company's website, and public records.

### Stage 4: ICP Qualification

Now the agent throws out the ones that don't fit. This is where a sub-agent does the work: read the enriched record, compare against the buy box, kill anything that doesn't match.

You'll typically lose 60-80% of the list at this stage. Wrong industry, wrong size, wrong geography, owner too young, owner too rich to care, business growing too fast (the owner won't sell).

What's left is your call list. Maybe 50-150 names from a starting pool of 2000.

### Stage 5: The Deal Memo

Before you pick up the phone, the agent writes a one-page brief on every survivor:

- **The business.** What they do, who they serve, what makes them different.
- **The owner.** Name, age, tenure, anything notable about their public profile.
- **Why they might sell.** The specific succession signals that flagged them.
- **What you'd pay.** A first-cut estimate of fair value based on industry multiples and the public data.
- **What to ask first.** Three questions to test whether this is a real conversation.

You read the memo, decide if you want to call, and call.

## Step-by-Step Setup

### Step 1: Write Your Buy Box

Spend half a day on this. Be specific. The narrower the buy box, the better the results. "Profitable small businesses" is not a buy box. "Residential HVAC service companies in DFW with $800K-2M revenue, owner age 55+, run by the owner" is a buy box.

Save it as a Claude Code skill (`/skills/buy-box.md`) so every agent in your pipeline reads from the same file. When you tune the buy box, every downstream agent uses the new version automatically.

### Step 2: Pick a Database

Start with one. Apollo is the most SMB-friendly. You can run a query, export a CSV of 1000-2000 companies, and have something usable on day one.

If you can get access to D&B Hoovers through a corporate or library subscription, that's better data, but Apollo is enough to start.

### Step 3: Build the List Builder Agent

A Claude Code agent that:

1. Reads your buy box.
2. Converts it into Apollo search filters.
3. Pulls the result set.
4. Drops the raw list into a Google Sheet.

This is a one-prompt agent. The whole job is "read the buy box, translate to filters, run the query, drop the rows."

### Step 4: Build the Enricher

A second agent that walks through every row in the raw list and fills in the missing fields. Hook Clay in via its API for the bulk enrichment. For anything Clay misses, the agent does manual LinkedIn and website lookups.

This one is slower because LinkedIn rate-limits and websites vary. Plan for it to run overnight on a list of 1000+ rows.

### Step 5: Build the Qualifier

A third agent that reads each enriched row against the buy box and writes either `PASS` or `KILL` with a one-sentence reason. The killed rows stay in the sheet but get hidden. The passes move to a separate tab labeled "Call List."

This is also a one-prompt agent. The buy-box skill does the heavy lifting.

### Step 6: Build the Memo Writer

A fourth agent that takes each `PASS` row and writes a one-page deal memo into a new Google Doc (or a new row with a long-form text field). Use a template so every memo follows the same structure.

This is the agent that saves you the most time. Reading 50 memos that all follow the same shape lets you decide who to call in 90 minutes. Doing 50 memos by hand is two weeks of work.

### Step 7: Wire the Daily Cycle

Set the whole pipeline to run weekly. Most business databases don't change fast enough to merit daily refreshes. Once a week is plenty.

Schedule:

- **Sunday 11 PM:** List builder pulls fresh queries from Apollo.
- **Sunday midnight – Monday 6 AM:** Enrichment runs.
- **Monday 6 AM:** Qualifier passes / kills.
- **Monday 7 AM:** Memos generated for the new passes.
- **Monday 8 AM:** Your inbox has a summary of the new call list.

You spend Monday morning making calls instead of researching them.

## Adapting This for Other Hunting Workflows

The "buy box, list, enrichment, qualifier, brief" pattern is not unique to acquisitions. The same shape works for:

**Commercial real estate sourcing.** Buy box becomes a property profile (asset class, geography, vintage, cap rate target). Database becomes CoStar or Reonomy. Memo becomes a property brief.

**B2B sales prospecting for high-ticket services.** Buy box becomes an ICP. The qualifier and memo writer save the BDR team hours of research.

**Hiring for a specific senior role.** Buy box becomes a candidate profile. Database becomes LinkedIn. Memo becomes a candidate brief.

**Investment scouting.** For angel investors and small VCs, buy box becomes a thesis. Database becomes a startup database. Memo becomes a one-page investment brief.

In every case, the same five stages apply. Start narrow, build the list, enrich, qualify, brief.

## Gotchas and Tips

- **The buy box is the whole game.** Vague buy boxes produce useless lists. Tighten yours until it makes you uncomfortable. "Too narrow" is the right amount.
- **Apollo is not perfect.** Roughly 15-25% of Apollo's revenue and employee estimates are wrong. Treat them as range estimates, not facts.
- **The succession signal that matters most is age.** Everything else is noise. Owners over 60 who have been running the business 15+ years are by far the highest-converting calls.
- **The memo is your screen, not your pitch.** A good memo helps you decide whether to call. It does not write your script. The actual call is still a human conversation.
- **Skip the cold email.** Calling works for acquisitions. Email gets ignored. The whole point of building the off-market list is the call.
- **Comply with do-not-call laws.** Federal and state telemarketing rules apply. Talk to a lawyer about whether your outreach is regulated. The shortcut: if you're calling a published business line, you're generally fine. If you're calling a personal cell, you might not be.
- **One closed deal pays for the system for life.** Even a tiny SMB acquisition (say, $400K purchase price) leaves enough margin that the $100/month tool stack is a rounding error.

## What the Pros Are Doing Differently

The acquisitions.com walkthrough hints at a more advanced version of this pipeline. They use Claude Code's sub-agents to run multiple buy boxes in parallel from a single buyer, so a holding company can hunt for plumbing companies and accounting firms at the same time without confusion. They also feed completed deals back into the qualifier so the agent learns which signals actually predicted closes.

You don't need either of those to start. The five-stage pipeline above is enough to find your first business.

---

## Keep Reading

- **[Build an AI Agent That Finds Real Estate Deals Before Anyone Else](/playbooks/real-estate-deal-hunter/)**: The same "scan public data, score opportunities, build a pipeline" pattern aimed at real estate instead of business acquisitions. If you like the buy-box approach but want a smaller-deal vertical, start here.
- **[The Used Car Lot That Out-Sources a 4-Person Buying Team With One Agent](/playbooks/used-car-lot-sourcing-scout/)**: A live example of the same buy-side scouting workflow running inside a real small business. Different inventory, same nightly cron, same call list waiting for you in the morning.
- **[Stop Buying Cold Email Lists. Build One That Actually Books Meetings.](/playbooks/cold-email-list-pipeline/)**: After your first acquisition, sales rigor matters. The qualification and enrichment discipline in this playbook is the same shape as the buy-box pipeline, just pointed at customers instead of targets.
