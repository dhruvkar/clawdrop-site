---
layout: playbook.njk
title: "Is Your Business Invisible When Customers Ask ChatGPT? This Agent Checks Every Saturday."
description: "Your customers have stopped Googling and started asking ChatGPT and Perplexity. A weekly n8n agent checks whether your business shows up in those answers, watches competitor pricing, and hands you grounded marketing ideas. The builder ran it on Anthropic's Managed Agents API first, then rebuilt it in n8n to kill the cost."
date: 2026-06-03
difficulty: Intermediate
cost: "Low. Runs only when triggered. Free tiers cover most of it; the original cloud-agent version cost $4.23 a run, which is why it moved to n8n."
timeToSetup: "An afternoon to wire the workflow, then it runs itself"
originalSource: "https://www.reddit.com/r/n8n/comments/1tqvdl6/anthropics_managed_agents_api_vs_n8n_for_a_weekly/"
originalAuthor: "arbyther (r/n8n)"
tags:
  - ai-search
  - geo
  - aeo
  - marketing-intelligence
  - competitor-monitoring
  - n8n
  - perplexity
  - small-business
permalink: /playbooks/invisible-in-chatgpt/
---

## Tools

- [**n8n**](#aff-n8n): the visual workflow that runs the whole thing on a weekly schedule. No polling cost, easy to duplicate per product or location.
- [**OpenAI API**](#aff-openai): asks ChatGPT the questions your customers ask, and reads back whether you show up.
- [**Perplexity API**](#aff-perplexity): same check against the other AI engine people now use to decide who to buy from.
- [**Tavily**](#aff-tavily): web search node for grounding the marketing ideas in what is actually live.
- [**Supadata**](#aff-supadata): scrapes competitor pages for pricing and content changes.
- An analytics source (the builder used a lightweight analytics MCP) and **Slack** or email to deliver the report.

## What You'll Build

A standing Saturday-morning check on whether your business exists in the place customers now look first.

A developer named arbyther wanted one workflow to run his side-project marketing every week: pull traffic, check whether the product shows up in ChatGPT and Perplexity, crawl competitors for pricing changes, and suggest a few grounded ideas. He built it twice. The first version used Anthropic's Managed Agents API, a persistent Claude session in the cloud with a Saturday cron. It worked, but a single run cost $4.23, and $3.30 of that was the agent polling Slack every 60 seconds waiting for his reply. He rebuilt the same cycle in n8n as a visual workflow. No polling cost because it only runs when triggered, Slack worked cleanly, and duplicating it for a second product is a copy and paste.

Strip away the engineering and what he built is a weekly answer to four questions: Is my traffic up or down? Do I show up when someone asks an AI about my category? What did my competitors just change? And what should I do about it?

## Why This Works

Your customers have quietly changed how they find you. A growing share of them no longer type a search and scroll ten blue links. They ask ChatGPT "who's the best plumber in Tucson" or ask Perplexity "compare the top three CRMs for a small agency," and they act on whatever the AI says.

If the AI does not mention you, you do not exist in that conversation. You will never see it in your analytics, because there was no click to measure. You just quietly stop getting those customers.

This is the single clearest version of "getting left behind." Not that you failed to adopt AI, but that AI failed to mention you, and you had no idea. The old version of this worry had a name, SEO, and a whole industry watching it. The new version, showing up inside AI answers, has almost nobody watching it yet. A weekly agent that checks for you is how you find out before your competitor does.

## Prerequisites

- An n8n instance (cloud or self-hosted).
- API keys for OpenAI and Perplexity.
- A web-search tool (Tavily) and a scraping tool (Supadata or similar) connected as nodes.
- Access to your analytics, and a Slack channel or inbox for the weekly report.
- A short, written list of the questions a real customer would ask in your category, and the two or three competitors you actually lose to.

## Step-by-Step Setup

### Step 1: Write Down the Questions Your Customers Ask

The whole report is only as good as these prompts. Use the exact phrasing a buyer would, including your city and your category: "best emergency electrician near downtown Austin," "cheapest commercial cleaning service in Leeds." Five to ten questions is plenty to start.

### Step 2: Ask the AI Engines and Read the Answer Back

Add HTTP nodes that send each question to the OpenAI and Perplexity APIs. For each answer, the workflow checks three things: are you named, how are you described, and who got named instead of you. The output is a simple verdict per question: present, absent, or described wrong.

### Step 3: Pull Your Traffic

Add an analytics node that pulls the week's numbers so you can read the AI-visibility check next to the trend. Up, down, and where it came from.

### Step 4: Watch Your Competitors

Point the scraping node at a short list of competitor pages. It flags pricing changes, new offers, and new content since last week. Start with the two or three rivals you actually lose customers to, not twenty.

### Step 5: Turn It Into a Report With Grounded Ideas

Use the Tavily web-search node to ground a few marketing suggestions in what is actually happening this week, then send the whole thing to Slack or your inbox. Not a dashboard you have to remember to open, a report that lands in front of you every Saturday.

### Step 6: Put It on a Saturday Cron and Walk Away

Set the schedule trigger and let it sleep the rest of the week. When you want to cover a second product or location, duplicate the workflow and change the questions.

## Adapting This for Your Business

The pattern is "ask the AI what my customers ask, and see if I exist." It repoints to almost any business.

- **Local trades and services.** Questions are "best [trade] near [town]." The win is being the name the AI gives when a neighbor asks.
- **Ecommerce and product brands.** Questions are "best [product] for [use case]." Track whether you make the AI's shortlist and what it says your price is.
- **Software and agencies.** Questions are "compare the top tools for [job]." Buyers ask AI to build the shortlist before they ever book a call.
- **Multi-location operators.** Duplicate the workflow per location and catch the cities where you are invisible while present in others.

## Gotchas and Tips

- **Ask the real questions.** Generic prompts give generic answers. The value lives in phrasing them exactly the way your customers would.
- **Watch for being described wrong, not just absent.** Sometimes the AI names you but gets your prices, hours, or services wrong. That is worse than silence, and this check catches it.
- **Start with one competitor set.** Three rivals you actually lose to beats twenty you do not.
- **Trigger it, do not poll it.** The whole reason this moved off the cloud-agent version was a polling loop that ran up the bill. Run it on a schedule and let it sleep.

## What This Replaces

Before this stack, there was no real "before." Most owners have no idea whether they appear in AI answers, because the tools that would tell them barely exist yet:

- **An SEO agency** tells you about Google rankings, which a shrinking share of buyers ever see, and charges a monthly retainer to do it.
- **A manual check** means an owner occasionally typing their own name into ChatGPT, noticing nothing systematic, and forgetting to do it again.

After this stack, you get a weekly, written read on whether you exist in the conversation that now decides who gets the call, plus competitor moves and grounded ideas, for the cost of a few API calls. It is the AEO and GEO version of rank tracking, running on autopilot, while almost none of your competitors are watching at all.

---

## Keep Reading

- **[Research Your Competitors' Ads and Launch Your Own Campaign on Meta](/playbooks/meta-ads-pipeline/)**: once you know where you stand, build the campaign to close the gap.
- **[The €200 AI Voice Agent That Called 3,000 Businesses in a Weekend](/playbooks/guinndex-voice-agent/)**: another agent that goes out and collects the market intelligence you are missing.
