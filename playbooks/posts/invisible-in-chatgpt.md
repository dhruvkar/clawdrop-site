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

## Why This Matters for Your Business

Your customers have quietly changed how they find you. A growing share of them no longer type a search and scroll ten blue links. They ask ChatGPT "who's the best plumber in Tucson" or ask Perplexity "compare the top three CRMs for a small agency," and they act on whatever the AI says.

If the AI does not mention you, you do not exist in that conversation. You will never see it in your analytics, because there was no click to measure. You just quietly stop getting those customers.

This is the single clearest version of "getting left behind." Not that you failed to adopt AI, but that AI failed to mention you, and you had no idea. The old version of this worry had a name, SEO, and a whole industry watching it. The new version, showing up inside AI answers, has almost nobody watching it yet. A weekly agent that checks for you is how you find out before your competitor does.

## How It Works

The workflow runs on a schedule, usually a Saturday morning cron, and moves through four steps.

### Step 1: Ask the AI engines what your customers ask

For each question a real buyer would ask in your category, the workflow sends it to the OpenAI and Perplexity APIs and reads the answer back. It checks whether your business is named, how you are described, and who got named instead of you. This is the core signal: present, absent, or misrepresented.

### Step 2: Pull your traffic

An analytics node pulls the week's traffic so you can see the trend next to the AI-visibility check. Up, down, and where it came from.

### Step 3: Watch your competitors

A scraping node (the builder used Supadata) crawls a short list of competitor pages and flags pricing changes, new offers, and new content since last week.

### Step 4: Turn it into a short report with grounded ideas

The workflow uses a web-search node (Tavily) to ground a few marketing suggestions in what is actually happening, then sends the whole thing to Slack or your inbox. Not a dashboard you have to remember to open. A report that lands in front of you every Saturday.

## Who This Is For

- **Any local business** whose customers ask AI for a recommendation: trades, clinics, restaurants, shops, service providers.
- **Anyone selling a product or software** where buyers ask AI to compare options before they buy.
- **Owners who used to care about their Google ranking** and have not yet realized the ranking that now matters is whether an AI names them.

## Gotchas and Tips

- **Ask the real questions.** The value is only as good as the prompts. Use the exact phrasing your customers would, including your city and your category. Generic questions give generic answers.
- **Watch for being described wrong, not just being absent.** Sometimes the AI mentions you but gets your prices, hours, or services wrong. That is worse than silence, and this check catches it.
- **Start with one competitor set.** Do not try to monitor twenty rivals on day one. Pick the three you actually lose customers to.
- **Trigger it, do not poll it.** The whole reason this moved off the cloud-agent version was a polling loop that ran up the bill. Run it on a schedule and let it sleep the rest of the week.

---

## Keep Reading

- **[Research Your Competitors' Ads and Launch Your Own Campaign on Meta](/playbooks/meta-ads-pipeline/)**: once you know where you stand, build the campaign to close the gap.
- **[The €200 AI Voice Agent That Called 3,000 Businesses in a Weekend](/playbooks/guinndex-voice-agent/)**: another agent that goes out and collects the market intelligence you are missing.
