---
layout: blueprint.njk
title: "Research Your Competitors' Ads and Launch Your Own Campaign on Meta"
description: "Four AI agents analyze competitor ads from the Meta Ad Library, plan a campaign based on your brand, create all the assets, and publish everything to your Meta Ads account. Full pipeline from research to live campaigns in draft."
date: 2026-03-18
difficulty: Intermediate
cost: "$20-30 per full run (API costs)"
timeToSetup: "2-3 hours"
originalSource: "https://www.youtube.com/watch?v=7UaQB325EqU"
originalAuthor: "9x Live"
tags:
  - marketing
  - meta-ads
  - competitor-research
  - advertising
permalink: /blueprints/meta-ads-pipeline/
---

## What You'll Build

A four-stage pipeline that takes you from "I want to run ads" to "campaigns are in Meta Ads Manager ready for review." No marketing agency. No freelancer. No back-and-forth on Slack for two weeks.

Here's the pipeline:

1. **Ads Analyst** picks apart your competitor's entire Meta ad strategy: every ad creative, every landing page, every angle they're running.
2. **Head of Marketing** crawls your own website, understands your brand and products, then writes a full campaign proposal based on the competitive intel.
3. **Creative Director** builds the actual assets: landing pages, image ads, carousel ads, video scripts.
4. **Performance Marketer** pushes everything to Meta Ads Manager as draft campaigns, targeting configured, creatives attached, ready for your review.

One real run produced 4 campaigns, 5 single image ads, 2 carousels with 10 cards, 8 video scripts, and 2 landing pages. Total cost: under $24 on Claude Opus.

## Why This Works

Running Meta Ads the normal way looks like this: you hire a freelancer or agency ($2-5K/month), wait a week for the competitive analysis, another week for the creative brief, another week for the actual assets, then go back and forth on revisions. Six weeks and $10K later, you have your first campaign.

This pipeline does the same work in about an hour. Not because the AI is smarter than a good marketer. It's not. But it can visit 20 landing pages, download 50 ad creatives, and write a 30-page analysis before a human has finished their morning coffee.

The output isn't meant to run untouched. Campaigns go into Meta as drafts. You review them, adjust targeting, swap out images you don't love, and record the video scripts yourself (real video outperforms AI-generated video on Meta, and the creator specifically recommends this). The AI does the 80% that's research and grunt work. You do the 20% that's judgment.

## Prerequisites

- OpenClaw with browser access (needs to visit Meta Ad Library and your website)
- Meta Marketing API credentials (your agent can walk you through setting this up)
- Gemini API key (for image generation via Nano Banana Pro)
- A competitor who runs Meta ads

## How the Pipeline Works

### Stage 1: Ads Analyst

You give it a link from the Meta Ad Library for any advertiser. The agent:

- Opens the Ad Library in a real browser
- Scrolls through to load all ads (the library lazy-loads, so it handles pagination)
- Downloads every creative: images, videos, carousel cards
- Visits every landing page the ads link to
- Analyzes each ad: hook, emotional angle, scale score
- Analyzes each landing page: funnel flow, strengths, weaknesses
- Produces an HTML report grouping ads by landing page with full strategic breakdown

The browser-based approach matters. The Meta Ad Library doesn't have a public API for this. The agent literally browses like a human, which means it works with any advertiser, any time.

### Stage 2: Head of Marketing

Takes the competitive analysis and your website URL. The agent:

- Crawls your website to understand your products, messaging, and design system
- Extracts your brand voice, color palette, typography
- Writes a campaign proposal: which landing pages to build, which ad formats to use, what messaging angles to test, how to allocate budget across funnel stages

The proposal is a real document with specifics. Landing page briefings, image ad specs, video scripts, and budget allocation. Not a vague strategy deck.

### Stage 3: Creative Director

Takes the campaign proposal and produces assets:

- **Image ads** via Nano Banana Pro (Gemini's image model). The skill includes a self-review step: after generating each image, the agent checks for hallucinated logos, wrong text, incorrect aspect ratios, and overall quality. If something's off, it simplifies the prompt and regenerates.
- **Landing pages** as working HTML with your brand's design system applied.
- **Carousel ads** with multiple cards, each with its own image and copy.
- **Video scripts** written for 20-40 second ads with clear hooks, emotional angles, and CTAs. You record these yourself.

### Stage 4: Performance Marketer

Takes all the assets and publishes to Meta via the Marketing API:

- Creates campaigns (one per funnel stage: top, middle, bottom)
- Sets up ad sets with targeting
- Attaches creatives to each ad
- Everything goes in as **drafts** so you can review before anything goes live

## Setting It Up

The creator published all 16 skills as a free downloadable template. The easiest way to install:

1. Download the skill files
2. Share the folder with your agent
3. Tell it: "I'm sharing a set of skills for a marketing team. Import all of these for yourself."
4. Your agent reads each file, sets up the skills, and walks you through any API keys it needs

You'll need to set up Meta Marketing API credentials. This sounds intimidating, but your agent can walk you through the process step by step, including creating the app in Meta's developer portal.

## What It Costs

The creator ran the full pipeline (competitor research through published campaigns) for under $24 on Claude Opus 4.6, the most expensive model available. On a cheaper model like Sonnet, it would be significantly less.

Image generation via Nano Banana Pro: about 13 cents per image at 2K resolution, 24 cents at 4K. A dozen ad creatives runs about $2-3.

Total for a complete campaign cycle: $20-30. Compare that to what even one day of a marketing freelancer's time costs.

## What It Doesn't Do

- **Record video.** It writes the scripts, but the creator deliberately chose to record videos himself. Real faces perform better on Meta than AI-generated ones.
- **Optimize running campaigns.** This handles the build phase. Campaign optimization (pausing underperformers, adjusting bids, scaling winners) is a separate skill the creator is planning.
- **Work on other platforms.** This is Meta Ads specific. The competitive analysis could apply to Google or TikTok ads, but the publishing step is Meta only.
