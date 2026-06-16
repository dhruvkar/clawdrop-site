---
layout: playbook.njk
title: "Fire the Research Analyst: Three Agents That Spy on Your Competitors Every Sunday"
description: "A creator who grew a channel to 400k subscribers built three AI agents that scan 50 competitor YouTube channels every week, grade videos against each channel's own average, and deliver a report plus a Slack digest. Replaces the agency analyst doing manual weekly teardowns."
date: 2026-06-16
difficulty: Intermediate
cost: "Free. It runs on YouTube's own data feed, plus a little model usage."
timeToSetup: "A weekend, most of it spent defining exactly what you want to track."
originalSource: "https://www.reddit.com/r/AgentsOfAI/comments/1u5kfaj/"
originalAuthor: "r/AgentsOfAI builder"
tags:
  - youtube
  - competitor-research
  - content-strategy
  - automation
  - agents
  - creator-economy
  - claude
  - slack
permalink: /playbooks/youtube-competitor-intel-agents/
---

## Tools

- [**YouTube Data API**](#aff-youtube): YouTube's own free data feed. It hands you any public channel's latest videos and their view counts, which is the raw material every one of these agents runs on. No scraping, no shady tools, just the numbers YouTube already publishes.
- [**Claude Code**](#aff-claude-code): the brain that runs the three agents in turn. It reads the numbers, does the math, spots which videos are actually winning, and writes the report in plain English.
- [**OpenClaw**](#aff-openclaw): the connector that lets the agents reach the YouTube feed and post into Slack without you wiring up plumbing by hand.
- [**Slack**](#aff-slack): where the weekly digest lands so your team reads it without opening anything. If you do not use Slack, swap in email or a shared doc.
- A scheduler (a cron job or the like) to kick the whole thing off every Sunday morning while you sleep.

## What You'll Build

A team of three small AI agents that wakes up every Sunday, scans roughly 50 of your competitors' YouTube channels, figures out what is actually working, and drops a written report plus a short Slack digest in front of your team before they have had coffee.

A creator on Reddit, posting in r/AgentsOfAI, grew a channel from zero to over 400,000 organic subscribers. This was their first real agent system, taught to themselves through trial and error. The problem they were drowning in is the same one every content team knows. Every single week, someone had to manually check YouTube. Which competitor channels are growing? What did they just publish? Which keywords are moving? Which videos are quietly starting to take off? It is repetitive, it eats hours, and it is easy to miss the one video that matters.

So they built three agents that run in sequence every Sunday morning and produce a weekly HTML report plus a Slack digest. There is also a tiny daily job running in the background that just saves a snapshot of view counts each day. The builder does not even count it as an agent, because it does not analyze anything. It exists so the Sunday report has better day-over-day data to compare against.

You are not building a dashboard you have to go look at. You are building the analyst who looks for you, does the math you would skip, and tells you the answer.

## Why This Works

Competitor research is not hard. It is just relentless and easy to fake. Anyone can open YouTube, glance at a few channels, see a video with a big number, and feel like they did research. They did not. They did a vibe check.

The real insight in this build is one the agent does and a human almost never bothers to. Raw view count is misleading. A video with 30,000 views might be a flop for a giant channel and a genuine breakout for a small one. The only number that tells you anything is how a video performed against its own channel's average. Agent 1 calculates that average for every channel it scans, then grades each new video against it. That single step is the difference between "this got a lot of views" and "this is a video that is outperforming everything its creator normally does, so go figure out why."

A research analyst is expensive mostly because of the grind, not the skill. You pay someone to keep up with 50 channels week after week, and the work is the same handful of moves on repeat. Pull the latest videos. Check the counts. Compare to last week. Note what is rising. An agent that already has last week's snapshot makes those calls in seconds, across all 50 channels, and never gets bored and skims.

And it never misses the boring weeks. Most competitive blind spots do not come from missing the obvious viral hit. They come from the slow build you stopped watching for because nothing happened the last three Sundays. The agent watches every Sunday whether or not anything happened, so the week something does happen, you are the first to know instead of the last.

## Prerequisites

- A YouTube Data API key. It is free to get from Google's developer console and gives you the public channel data you need.
- Claude Code installed, with OpenClaw set up so the agents can reach the YouTube feed and post to Slack.
- A list of the channels you want to watch. The builder tracks about 50. Start with the 10 or 20 you actually care about.
- A Slack workspace, or somewhere else you want the digest delivered. Email or a shared doc works fine.
- A way to run things on a schedule, so the Sunday run and the daily snapshot fire on their own.
- A crisp answer to one question before you write a line: what exactly are you trying to learn each week? This is the part that makes or breaks it.

## Step-by-Step Setup

### Step 1: Get Painfully Clear on What You Want to Track

The builder's hardest-won lesson, in their own framing, is that this only worked because the problem was very clear before they started building. So start here, not at the keyboard. Write down the exact questions you want answered every Sunday. "Which of my competitors published a video that beat their own average this week?" "Which topics are gaining?" "Who is growing fastest?" If you cannot name the questions, no agent can answer them. Most of your weekend goes here, and that is correct.

### Step 2: Build the Daily Snapshot Job First

Before the smart stuff, set up the dumb stuff. Write a small job that runs once a day, hits the YouTube Data API for your tracked channels, and saves the current view counts somewhere simple, a spreadsheet or a small file. It does not analyze anything. It just remembers. Without daily snapshots, your Sunday report can only compare week to week and misses the videos that spiked midweek. Start this early so you have a few days of history before the first real run.

### Step 3: Build Agent 1, the Channel Scanner

This is the workhorse. Point it at your roughly 50 channels through the YouTube Data API. For each one it pulls the latest videos, tracks their view counts, and calculates that channel's average views. Then comes the move that matters: it grades each new video against that channel's own average, so a breakout on a small channel does not get buried under a flop on a big one. The output is a ranked list of videos that are actually overperforming, not just videos with big raw numbers.

### Step 4: Build Agent 2, the Keyword and Trend Scout

Agent 2 looks across what your competitors are publishing and surfaces which keywords and topics are moving. This is how you catch a wave forming instead of reading about it after it crested. It runs after the scanner, so it can lean on the fresh list of what is overperforming when it decides which topics are heating up.

### Step 5: Build Agent 3, the Reporter

The third agent takes everything the first two found and turns it into two things people will actually read. One, a weekly HTML report with the full picture: the overperformers, the rising keywords, the channels gaining ground. Two, a short Slack digest, the three-line version that lands in the channel and gets read on a phone. The report is for the deep dive. The digest is so nobody has an excuse to skip it.

### Step 6: Schedule It and Walk Away

Set the daily snapshot to run every day and the three agents to run in sequence every Sunday morning. Scanner first, scout second, reporter last, because each one feeds the next. Then leave it alone. By the time your team logs on Monday, the research that used to eat someone's Friday is already sitting in Slack, done.

## Adapting This for Your Business

The pattern is not really about YouTube. It is "watch a fixed list of competitors on a public data feed, grade their output against their own baseline, and report the outliers." That works almost anywhere.

- **Podcasters and creators on any platform.** Same three agents, different feed. Track chart positions, episode counts, or follower growth and grade each against the show's own normal.
- **Ecommerce and DTC brands.** Watch competitor product launches, price changes, and review velocity. The "grade against their own average" trick flags the product that is suddenly moving, not just the one that always sells.
- **Local service businesses.** Track competitors' new reviews, Google posts, and ad activity. You will know who just got aggressive before they take your customers.
- **Anyone paying a content or social agency for "competitive research."** That weekly slide deck of competitor screenshots is exactly what these three agents produce, except yours runs every week without an invoice and does the math the deck usually skips.

## Gotchas and Tips

- **Get the problem clear before you build anything.** This is the builder's own headline lesson and it is the one most people ignore. They jump to tools and prompts. The reason this system worked is that the questions came first. Spend the weekend on the questions, not the code.
- **Raw view count will lie to you. Grade against the average.** If you skip the per-channel average and just sort by total views, you have rebuilt the exact lazy research this was meant to replace. The averaging is not a nice-to-have. It is the whole point.
- **Mind the YouTube API quota.** The free YouTube Data API has a daily limit on how much you can pull. Scanning 50 channels daily plus a weekly deep run can bump it. Batch your requests and only pull what your questions actually need.
- **Keep the daily snapshots forever.** Your history is your edge. The longer you have been recording daily view counts, the better your trend detection gets. Do not let the snapshots get overwritten. Append, never erase.
- **Start small, then scale to 50.** The builder taught themselves this through trial and error, not in one clean shot. Begin with 10 channels and one clear question. Get a report you trust, then add channels.
- **You are maintaining a system now, not buying a service.** If the API key expires or a job breaks, your Sunday report goes silent and you might not notice for a week. Build it simply, log what it does, and check that the digest actually showed up.

## What This Replaces

Before this, keeping an eye on the competition meant one of two things:

- **A research analyst at your content or social agency**, doing a manual weekly teardown across competitor channels and handing you a deck. Expensive, slow, and only as sharp as whoever clicked through YouTube that Friday. The "grade against the channel's own average" insight almost never makes it into that deck, because doing it by hand for 50 channels is miserable.
- **Your own team losing hours to it**, where someone is supposed to check the competition every week, does it well for a month, then quietly lets it slide until a competitor's breakout video is old news by the time anyone notices.

After this, three agents run themselves every Sunday on YouTube's free data feed, grade every video against its own channel's baseline, catch the rising keywords, and drop the whole thing in Slack before Monday. A creator built it from scratch as their very first agent system while growing a channel past 400,000 subscribers. The research stopped being a chore anyone could skip, because nobody has to do it anymore.

---

## Keep Reading

- **[Skip the Research VA: Turn Any Company URL Into a Battle Plan](/playbooks/company-research-brief-agent/)**: the same research-analyst-in-a-box idea, pointed at a single company instead of 50 channels.
- **[The Affiliate Marketing Intern That Never Sleeps](/playbooks/affiliate-commerce-operator/)**: another always-on agent doing the repetitive marketing grind you would otherwise pay a person for.
- **[Turn a Phone Photo Into a Live Shopify Product in Minutes](/playbooks/photo-to-shopify-listing/)**: a creator-friendly automation that collapses a tedious manual workflow into a single agent run.
