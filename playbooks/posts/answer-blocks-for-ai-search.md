---
layout: playbook.njk
title: "The Pages ChatGPT Quotes Have a Question for a Heading and a Table Under It"
description: "A marketer studying how Perplexity and ChatGPT pick sources found they reward plain tables, direct FAQs and honest comparisons over backlinks. An agent rewrites each service page into that shape and reports the numbers that matter now."
date: 2026-09-19
difficulty: Intermediate
cost: "$20-40/mo. Claude plus your existing site."
timeToSetup: "A weekend for the first ten pages. Then one page a week on a schedule."
originalSource: "https://www.reddit.com/r/AgentsOfAI/comments/1u3rws9/how_are_you_guys_optimizing_for_geo_generative/"
originalAuthor: "u/misiof (r/AgentsOfAI) and u/Open_Ad_5741 (r/digital_marketing)"
issueNumber: 30
permalink: /playbooks/answer-blocks-for-ai-search/
tags:
  - ai-search
  - geo
  - seo
  - content
  - schema
  - marketing
  - small-business
---

## Tools

- [**Claude**](#aff-claude): reads a page, finds the questions it half-answers, and rewrites it into blocks that answer them fully
- [**OpenClaw**](#aff-openclaw): runs the rewrite on a schedule and holds every change for your approval
- [**Google Search Console**](#aff-google-search-console): free, and the only place Google tells you which questions already bring people to you
- [**DataForSEO**](#aff-dataforseo): the raw search numbers, pay per lookup, no subscription. It's how you find out a page is worth writing before you write it
- [**Google Sheets**](#aff-google-sheets): the list of questions, which page answers each one, and whether you showed up this month

## What You'll Build

An agent that takes one page of your site a week and rebuilds it into the shape the AI engines quote from.

Each service gets a heading written as the question a customer asks. Under it, a plain answer of about 150 words. Where you compare anything, a table. At the bottom, an FAQ with the schema markup that tells the model what it's reading.

Then a short monthly report: which questions you asked the engines, and whether they named you.

## The Story

A marketer spent time looking at how the AI engines actually pick what to cite, and posted what he found:

> Traditional SEO tricks like backlink farming don't really move the needle here. Instead, these models reward dead-simple markdown tables, direct FAQ, and honest feature comparisons.

> Basically, if you give the LLM a clean, objective answer to a long-tail question, it pulls you into the citation layer.

His problem was doing it by hand across a whole site, so he was wiring up a five-agent pipeline to track queries, structure the data and check readability before publishing. He found the pipeline itself was the headache.

The best reply in the thread came from someone who builds these systems for businesses, and it moves the problem off the content team entirely:

> The businesses that get cited consistently tend to have: clear definitions, consistent terminology, publicly available process documentation, evidence-backed comparisons, structured FAQs tied to real customer questions.

> If the source business itself doesn't have clean, reliable information, all the agents in the world just produce more content entropy.

In a second thread, a marketer asked what to put in the monthly report now that rankings and traffic tell less of the story. His list, which is the report this agent writes: branded search growth, AI Overview visibility, mentions in ChatGPT, Perplexity or Gemini, local pack visibility, Google Business Profile actions, leads by landing page, and content that earns citations.

The top reply cut it down further: signed customers, cost per acquisition, and which channel each one came from. "Highly ranked pages or LLM citations that don't result in paying customers don't pay the bills."

## Why Tables and Questions

The models do not rank pages. They pull a passage that answers the question in front of them and attribute it.

A passage gets pulled when it is self-contained, when the heading above it matches the question, and when it is in a format the model can lift without rewriting. HTML tables come out nearly verbatim. A number ("cut callbacks 30%") gets quoted where "reduces callbacks" does not. A named source gets quoted where an unattributed claim does not.

This lines up with the larger studies. Ahrefs looked at roughly 75,000 brands and found brand mentions across the web correlate with AI visibility about three times as strongly as backlinks do. Whitespark's local ranking survey puts links at about 15% of what decides the local pack. Links still count for Google. The AI answer comes from the passage on the page.

So the work is on your own pages, and it is unglamorous: write down the questions, answer each one plainly, mark it up so the machine knows what it is.

## How to Run It

**Step 1. Build the question list.** Open Search Console and export every query that already sends you impressions. Add the five to ten questions a customer asks you on the phone. Check the ones you're unsure about in DataForSEO before you spend a page on them. One sheet, one question per row, the page that should answer it.

**Step 2. One page a week.** The agent picks the next page, reads it, and rewrites it as answer blocks: the question as an H2, about 150 words that fully answer it, a table if there is any comparison, the FAQ at the bottom with FAQPage schema.

**Step 3. Keep your facts straight.** The agent does not invent numbers. If the page says "most jobs take two days," it asks you for the real range before it publishes. This is where the "information quality" comment earns its keep. If your own team can't agree on what a service costs, the page can't say it.

**Step 4. You approve, it publishes.** Diff in Telegram or Slack, one page at a time.

**Step 5. The monthly check.** The agent asks ChatGPT and Perplexity your question list and logs who got named. Present, absent, or described wrong. That, plus leads by landing page from your CRM, is the report.

## The Business Angle

A content agency at $1,500 to $5,000 a month produces blog posts. This produces the pages your existing customers already ask about, in the shape that gets quoted, and it does one a week without you writing anything except corrections.

The report it hands you is the one the second thread was asking for: whether the AI named you, and whether that turned into a lead.

## Who Should Steal This Idea

Local service businesses with ten to fifty service pages that were written once in 2019.

Product companies whose buyers ask the AI to compare three options. Your comparison table should be the one it lifts.

Anyone whose services page is four paragraphs of prose under the word "Services."

## How Hard Is It

Weekend project for the first pass. Then it runs itself.

Cost: $20 to $40 a month depending on how many pages you feed it. Search Console is free. DataForSEO is pay per lookup.

## Gotchas and Tips

**Start with the pages that already get impressions.** Search Console tells you which questions Google already half-associates with you. Fix those first.

**One question, one block, 150 words.** The temptation is to answer six things under one heading. That block does not get quoted.

**Tables for anything comparative.** Pricing tiers, service options, before and after. The model extracts the table whole.

**Numbers and names.** "Cut callbacks 30%" beats "reduces callbacks." "According to the county permit office" beats "experts say."

**Don't fake the FAQ.** Real questions customers asked. The schema tells the model it's an FAQ; the content has to earn it.

**Fix the business before the page.** If three people at your company give three answers to "how long does it take," the agent cannot write the page. Settle it in the sheet first.

**Judge it on leads.** The top reply in the metrics thread is right. Log which landing page each signed customer came from, and you'll know whether the rewrites are working within a quarter.

## Keep Reading

- [Eight Months of "Brand Awareness." ChatGPT Has Never Heard of Them.](/playbooks/agency-cant-see-chatgpt/) The audit that tells you which pages to start with.
- [Is Your Business Invisible When Customers Ask ChatGPT? This Agent Checks Every Saturday.](/playbooks/invisible-in-chatgpt/)
- [Your Google Analytics Is Lying to You. This AI Catches It Before You Make Bad Decisions.](/playbooks/ga4-analytics-autopilot/)
