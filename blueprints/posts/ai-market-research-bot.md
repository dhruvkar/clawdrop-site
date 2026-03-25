---
layout: blueprint.njk
title: "Find Your Next Product Idea in 15 Seconds by Scanning Reddit and X"
description: "Install one skill, type one sentence, and your AI scans 30 days of Reddit, X, and the web for what people are complaining about, what they wish existed, and where competitors are falling short."
date: 2026-03-25
difficulty: Beginner
cost: "$0-10/month (free web-only mode available)"
timeToSetup: "5 minutes"
originalSource: "https://www.youtube.com/watch?v=41_TNGDDnfQ"
originalAuthor: "Alex Finn (@AlexFinn)"
originalAuthorUrl: "https://x.com/AlexFinn"
tags:
  - market-research
  - product-ideas
  - reddit
  - twitter
  - entrepreneurship
permalink: /blueprints/ai-market-research-bot/
---

## What You'll Build

A market research system that scans Reddit, X, and the web for the last 30 days of real conversations about any topic you choose. You type one sentence. It comes back with categorized pain points, trending complaints, feature requests, and gaps your competitors are missing.

No surveys. No focus groups. No guessing. Just what people are actually saying right now.

Alex Finn put it simply: "You can install this skill and literally within 15 seconds have a system set up where you are building products that you can sell and start making money off of."

## Why This Works

Most people pick a product idea, build it, then hope someone wants it. That's backwards.

Reddit and X are where people complain in real time. They upvote the problems that matter most. They describe exactly what they wish existed. They trash competitors publicly and specifically. This is the richest, most honest market research data on the planet, and it's free.

The problem has always been volume. You can't manually read 30 days of Reddit threads across multiple subreddits and cross-reference them with X conversations. That's hundreds of hours of work.

This skill does it in 15 seconds.

It pulls posts from Reddit and X, weights them by engagement (upvotes, likes, replies), synthesizes patterns across all sources, and hands you the top 3-5 actionable insights. Not a wall of links. Actual patterns with evidence.

## How It Works

**Step 1: Install the skill (2 minutes)**

Go to [Last 30 Days on ClawHub](https://clawhub.ai/zats/last30days) and copy the skill link. Tell your OpenClaw agent: "Install this skill." That's it. The skill is live.

If you want Reddit scanning, add an OpenAI API key. If you want X scanning, add an xAI API key. If you want neither, the web-only mode works with zero API keys.

**Step 2: Ask your question (15 seconds)**

Type a natural language prompt. Here are real examples:

- "Use the last 30 days skill to research challenges people are having with [your competitor's product]."
- "What are people in [industry] complaining about on Reddit and X over the last 30 days?"
- "What do freelance designers wish existed right now?"
- "What are the biggest pain points for Shopify store owners this month?"

**Step 3: Get categorized insights (automatic)**

The skill's "Judge Agent" layer reads everything it pulled, identifies patterns, and returns a structured report. You get:

- **Pain point categories** with real quotes and post links
- **Engagement-weighted ranking** so the loudest complaints surface first
- **Cross-platform patterns** where Reddit and X agree on the same problem
- **Specific feature requests** people are making about existing tools

**Step 4: Act on what you find**

This is where it gets interesting. Alex Finn's workflow: find the pain, then tell your agent to build a product that solves it. "This is basically a software factory that I built. I didn't have to code. I didn't have to do any technical work."

You don't have to build software. The insights work for pitches, content, consulting proposals, or validating an idea you already have.

## The Numbers

- **Setup time:** 5 minutes (2 if you skip API keys)
- **Time per research query:** 15 seconds to ask, 1-3 minutes to get results
- **Sources scanned per query:** 20-30 by default, up to 70 Reddit posts and 60 X posts in deep mode
- **Cost:** Free in web-only mode. $0-10/month with API keys depending on usage
- **Compare to:** A market research consultant ($2,000-10,000 per project) or doing it manually (8-20 hours per topic)

## Prerequisites

- OpenClaw running on your machine
- That's it for web-only mode

**Optional for full power:**
- OpenAI API key (for Reddit scanning)
- xAI API key (for X/Twitter scanning)

## Who Should Steal This

**Agency owners** preparing for a pitch. Run "What are [prospect's industry] businesses complaining about?" 15 minutes before the call. Walk in with specific pain points they haven't even articulated yet. You look like you did a week of research.

**Consultants** validating a new offer. Before you build a course, a service, or a productized offering, check if anyone is actually asking for it. 30 days of Reddit will tell you faster than any survey.

**Solopreneurs** looking for their next product. Stop brainstorming in a vacuum. The market is literally telling you what it wants. Every day. In public. You just need something to listen.

**Content creators** hunting for topics. "What questions are people asking about [your niche] this month?" gives you a content calendar built on real demand, not guesses.

**Anyone doing competitive intelligence.** "What are people saying about [competitor]?" returns the unfiltered truth. Feature gaps, support complaints, pricing frustrations. All categorized and ranked by how many people agree.

## Tools Used

- [Last 30 Days](https://clawhub.ai/zats/last30days) skill by Matt Van Horn (free, installed via ClawHub)
- OpenClaw (your AI agent)
- OpenAI API key (optional, for Reddit access)
- xAI API key (optional, for X access)

### Depth Options

The skill has three scan depths depending on how thorough you want to be:

- **Quick mode** (`--quick`): 8-12 sources. Good for a fast pulse check.
- **Default**: 20-30 sources. The sweet spot for most research.
- **Deep mode** (`--deep`): 50-70 Reddit posts, 40-60 X posts. For when you want to be exhaustive.

### Query Types

Four built-in query types to shape your results:

- **Recommendations**: "What's the best X?" style queries
- **News**: "What's happening with X?" for trends and developments
- **Prompting**: Find prompts and workflows people are sharing
- **General**: Open-ended research on any topic

## The Bigger Idea

The gap between "I have an idea" and "I know this idea has demand" used to cost thousands of dollars and weeks of time. Now it costs one sentence and 15 seconds.

This isn't just a research tool. It's a filter for bad ideas. Every solopreneur has a graveyard of projects they built because they thought people wanted them. This skill lets you check before you build.

Run it weekly on your niche. Watch the pain points shift. Spot new complaints before your competitors do. The people who win aren't the ones with the best ideas. They're the ones who find the problems first.

The answers are sitting right there on Reddit. You just need to ask.

---

*Source: [@AlexFinn on YouTube](https://www.youtube.com/watch?v=41_TNGDDnfQ) (Feb 12, 2026). Alex runs CreatorBuddy ($300K/yr AI app) and the Vibe Coding Academy. Skill by [Matt Van Horn on ClawHub](https://clawhub.ai/zats/last30days).*
