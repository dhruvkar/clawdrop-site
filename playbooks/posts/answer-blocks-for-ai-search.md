---
layout: playbook.njk
title: "The Pages ChatGPT Quotes Have a Question for a Heading and a Table Under It"
description: "ChatGPT and Perplexity quote plain tables, direct FAQs and honest comparisons. An agent rewrites one service page a week that way and reports if you got named."
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
- [**DataForSEO**](https://app.dataforseo.com/?aff=56e4b89f-a710-4a77-b8a0-346ef560d1f3): the raw search numbers, pay per lookup, no subscription. It's how you find out a page is worth writing before you write it
- [**Google Sheets**](#aff-google-sheets): the list of questions, which page answers each one, and whether you showed up this month

## What You'll Build

An agent that rebuilds one page of your site a week into the shape the AI engines quote from.

Each service gets a heading written as the question a customer asks. Under it, about 150 words that answer it. A table wherever you compare anything. An FAQ at the bottom with schema markup.

Then a short monthly report. Did the engines name you?

## The Story

A marketer looked at how the AI engines pick what to cite. He posted what he found:

> Traditional SEO tricks like backlink farming don't really move the needle here. Instead, these models reward dead-simple markdown tables, direct FAQ, and honest feature comparisons.

> Basically, if you give the LLM a clean, objective answer to a long-tail question, it pulls you into the citation layer.

Doing it by hand across a whole site was his problem. He was wiring up a five-agent pipeline and the pipeline became the headache.

The best reply came from someone who builds these systems for businesses:

> The businesses that get cited consistently tend to have: clear definitions, consistent terminology, publicly available process documentation, evidence-backed comparisons, structured FAQs tied to real customer questions.

> If the source business itself doesn't have clean, reliable information, all the agents in the world just produce more content entropy.

In a second thread, a marketer asked what belongs in the monthly report now that rankings and traffic tell less of the story. His list: AI Overview visibility, mentions in ChatGPT, Perplexity or Gemini, local pack, Google Business Profile actions, leads by landing page.

The top reply cut it to three. Signed customers, cost per acquisition, which channel.

> Highly ranked pages or LLM citations that don't result in paying customers don't pay the bills.

## Why Tables and Questions

The models pull a passage that answers the question in front of them and attribute it.

A passage gets pulled when it stands on its own, when the heading matches the question, and when the model can lift it without rewriting.

HTML tables come out nearly verbatim. "Cut callbacks 30%" gets quoted. A named source gets quoted.

The bigger studies agree. Ahrefs looked at roughly 75,000 brands and found brand mentions correlate with AI visibility about three times as strongly as backlinks. Whitespark puts links at about 15% of what decides the local pack.

Links still count for Google. The AI answer comes from the passage on the page.

So the work is on your own pages, and it's unglamorous. Write down the questions. Answer each one plainly. Mark it up.

## How to Run It

**Step 1. Build the question list.** Export every query in Search Console that already sends you impressions. Add the five to ten questions customers ask you on the phone. Check the doubtful ones in DataForSEO before you spend a page on them. One sheet, one question per row, the page that answers it.

**Step 2. One page a week.** The agent reads the next page and rewrites it as answer blocks. Question as an H2. About 150 words under it. A table for any comparison. FAQ at the bottom with FAQPage schema.

**Step 3. Keep your facts straight.** The agent does not invent numbers. If the page says "most jobs take two days," it asks you for the real range first. If your own team can't agree on what a service costs, the page can't say it.

**Step 4. You approve, it publishes.** Diff in Telegram or Slack, one page at a time.

**Step 5. The monthly check.** The agent asks ChatGPT and Perplexity your question list and logs who got named. Present, absent, or described wrong. Add leads by landing page from your CRM. That's the report.

## The Business Angle

A content agency at $1,500 to $5,000 a month produces blog posts.

This produces the pages your customers already ask about, in the shape that gets quoted. One a week. You write nothing except corrections.

The report is the one the second thread wanted. Did the AI name you, and did that turn into a lead?

## Who Should Steal This Idea

Local service businesses with ten to fifty service pages that were written once in 2019.

Product companies whose buyers ask the AI to compare three options. Your comparison table should be the one it lifts.

Anyone whose services page is four paragraphs of prose under the word "Services."

## How Hard Is It

Weekend project for the first pass. Then it runs itself.

Cost: $20 to $40 a month depending on how many pages you feed it. Search Console is free. DataForSEO is pay per lookup.

## Gotchas and Tips

**Start with the pages that already get impressions.** Google already half-associates those questions with you. Fix those first.

**One question, one block, 150 words.** Six things under one heading does not get quoted.

**Tables for anything comparative.** Pricing tiers, service options, before and after. The model lifts the table whole.

**Numbers and names.** "Cut callbacks 30%" beats "reduces callbacks." "According to the county permit office" beats "experts say."

**Don't fake the FAQ.** Real questions customers asked. The schema says it's an FAQ. The content has to earn it.

**Fix the business before the page.** Three people, three answers to "how long does it take," and the agent cannot write the page. Settle it in the sheet first.

**Judge it on leads.** Log which landing page each signed customer came from. Within a quarter you'll know.

Which page do you start with? Pull up Search Console, sort by impressions, and take the top one.

## Keep Reading

- [Eight Months of "Brand Awareness." ChatGPT Has Never Heard of Them.](/playbooks/agency-cant-see-chatgpt/) The audit that tells you which pages to start with.
- [Is Your Business Invisible When Customers Ask ChatGPT? This Agent Checks Every Saturday.](/playbooks/invisible-in-chatgpt/)
- [Your Google Analytics Is Lying to You. This AI Catches It Before You Make Bad Decisions.](/playbooks/ga4-analytics-autopilot/)
