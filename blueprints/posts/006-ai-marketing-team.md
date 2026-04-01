---
layout: blueprint.njk
title: "Build a 7-Agent Marketing Team That Runs While You Sleep"
description: "A solo founder replaced his entire marketing workflow with 7 AI agents. Research, writing, social media, engagement. 20 minutes a day to review. The same pattern works for any business with repeatable tasks."
date: 2026-04-01
difficulty: Beginner-Intermediate
cost: "~$20/month (API costs)"
timeToSetup: "1-2 hours (start with 2 agents, expand over time)"
originalSource: "https://medium.com/@rithikmotupalli/how-i-built-a-7-agent-ai-marketing-team-with-openclaw-full-setup-guide-07a2ac515693"
originalAuthor: "Rithik Motupalli"
issueNumber: 6
permalink: /blueprints/ai-marketing-team/
tags:
  - marketing
  - multi-agent
  - solopreneur
  - content
  - beginner-friendly
---

## What You'll Build

A team of AI agents that handles your marketing while you focus on the actual work. Research, writing, social media, trend monitoring, and finding conversations worth jumping into. All running in the background, handing work off to each other through simple files.

You wake up, spend 20 minutes reviewing what they produced overnight, approve or tweak, and get on with your day.

## Why This Works

Marketing for a small business has a dirty secret: it's actually five or six different jobs pretending to be one. Research. Writing. Distribution. Trend monitoring. Community engagement. Calendar management. No one person does all of those well, especially not while also running the business.

The traditional answer is "hire people." A content writer ($3-5K/month), a social media manager ($2-4K/month), a community manager ($2-3K/month). You're looking at $7-12K/month before anyone's even proven they understand your business.

This setup costs about $20/month in API fees. The agents don't call in sick, don't need onboarding, and they actually read your entire website before writing a single word.

The trick is focus. Each agent has exactly one job. One researches. One writes. One distributes. One finds engagement opportunities. A coordinator routes the work. Focused agents dramatically outperform one agent trying to do everything.

## The 7-Agent Stack

Here's what each agent does:

### 1. The Coordinator (Axis)

Doesn't produce content. Routes work between the other six. When you kick off a content cycle, Axis figures out which agents to run and in what order. Handles exceptions when something breaks mid-chain.

### 2. The Researcher

Hunts for pain signals online. What are people frustrated about? What questions keep coming up? What problems aren't being solved? Outputs a ranked list of content ideas with the actual conversations attached as proof.

### 3. The Writer

Takes the top idea from the Researcher and writes a full draft. Structure, subheadings, opening hook, call to action. Writes in your voice (you train it with a short voice guide). Generates images. Saves everything to a local folder.

### 4. The Repurposer

Takes a finished article and breaks it into social media posts. One article becomes a Twitter thread, 3-5 standalone tweets, and a list of communities where the article is relevant. One piece of content, multiple channels.

### 5. The Tweet Generator

Independent from the article pipeline. Watches trending topics and generates timely posts when something relevant is happening. Keeps your social accounts active even on days you're not publishing articles.

### 6. The Trend Scout

Scrapes social media for trending topics, viral hooks, and high-engagement posts in your space. Feeds findings to both the Tweet Generator and the Researcher. This is the ears of the whole system.

### 7. The Engagement Finder

This is the sleeper hit. Finds specific conversations where jumping in with a genuine reply would be valuable. Not spam. It filters for discussions where you actually have something useful to add. Surfaces 3-5 opportunities per day with draft replies.

The original creator said this agent surprised him most. "Surfacing the right conversations to jump into has driven more genuine followers than any tweet I've crafted myself."

## How They Hand Off Work

No complex infrastructure. No message queues. No cloud services. Just files.

Each agent writes its output to a known path. The next agent in the chain reads from that path.

```
workspace/
  agents/
    researcher/
      AGENTS.md         ← defines the agent's role
      output/
        latest.json     ← ranked content ideas
    writer/
      AGENTS.md
      output/
        latest.json     ← finished draft
    repurposer/
      AGENTS.md
      output/
        latest.json     ← threads, tweets, community list
    ...
```

A typical content day:

1. **Trend Scout** runs first (morning). Scans ~200 recent posts, outputs ranked topics.
2. **Researcher** runs in parallel. Scans forums for pain signals. Outputs 5 article ideas with evidence.
3. **Coordinator** reviews both, picks the strongest idea (bonus if a trend overlaps with a pain signal).
4. **Writer** picks up the winning idea. Plans structure, generates images, writes draft.
5. **Repurposer** picks up the finished article, turns it into distribution-ready content.
6. **Tweet Generator** runs separately, reading Trend Scout output for timely posts.
7. **Engagement Finder** runs continuously in background, queuing reply opportunities.

## Step-by-Step Setup

### Step 1: Start With Just Two Agents

Don't build all seven on day one. Start with the Researcher and the Writer. Get one full piece of content through the pipeline.

Create the folder structure:

```
~/.openclaw/workspace/agents/
  researcher/
    AGENTS.md
  writer/
    AGENTS.md
    output/
```

### Step 2: Define the Researcher

Your Researcher's `AGENTS.md` tells it where to look and what to look for:

```markdown
# Researcher

## Role
Find content ideas backed by real evidence of demand.

## Sources
- Reddit (r/YourNiche, r/RelatedSub)
- Twitter/X (keywords in your space)
- Industry forums

## Output
Write to agents/researcher/output/latest.json:
- Top 5 ideas, ranked by evidence strength
- For each: the idea, why it matters, links to source conversations

## Schedule
Run daily at 6 AM
```

### Step 3: Define the Writer

```markdown
# Writer

## Role
Turn the top research idea into a publish-ready article draft.

## Input
Read from agents/researcher/output/latest.json

## Voice Guide
- Direct, no fluff
- Share specific numbers and results
- Conversational, not corporate
- [Add your own style notes]

## Output
Save to agents/writer/output/:
- article.md (the draft)
- images/ (any generated visuals)

## Rules
- Always include an opening hook
- Break up long sections with subheadings
- End with a clear call to action
```

### Step 4: Test the Handoff

Run the Researcher. Check its output. Then run the Writer and see if it picks up the right idea and produces something usable. Tweak the instructions until the output matches what you'd want to publish.

### Step 5: Add the Repurposer

Once articles are flowing, add the agent that chops them into social posts. Same pattern: reads from the Writer's output, writes its own output for you to review.

### Step 6: Add Engagement + Trends

These run independently. The Engagement Finder is the highest-ROI addition after the core article pipeline. It finds real conversations and drafts replies you can post in seconds.

### Step 7: Wire Up the Coordinator

Once you have 4+ agents, add the Coordinator to manage sequencing. Its job is routing, not producing.

## This Isn't Just for Marketing

The "team of focused agents with file-based handoffs" pattern works for any business with repeatable workflows.

**Real estate office:** Lead research agent, listing description agent, follow-up email agent, market report agent, social media agent.

**E-commerce store:** Product description agent, review monitoring agent, competitor price tracking agent, customer FAQ agent, inventory report agent.

**Consulting firm:** Proposal draft agent, client research agent, meeting prep agent, deliverable formatting agent, invoice agent.

**Insurance agency:** Lead qualification agent, policy comparison agent, renewal reminder agent, claims follow-up agent, compliance monitoring agent.

The architecture is identical every time. One agent per job. File-based handoffs. A coordinator to route. Start with two, add more when the basics work.

## What to Expect

The original creator's results after a few weeks:

- **Publishing frequency:** From "whenever I remembered" to consistent weekly articles
- **Daily time spent:** About 20 minutes reviewing and approving
- **Best surprise:** The Engagement Finder drove more real follower growth than any manually crafted content
- **Key learning:** The system handles the grunt work (research, first drafts, distribution formatting). You handle the judgment (what's worth saying, what matches your voice, what to publish)

That's a sustainable version of marketing for any small business. Not doing less. Doing the parts only you can do.

## Gotchas and Tips

- **Start with 2 agents.** Seriously. Get the Researcher + Writer pipeline producing one usable piece before adding complexity.
- **Don't auto-publish.** Review everything before it goes out under your name. Build trust with each agent before loosening the reins.
- **Your voice guide matters.** The Writer is only as good as the style instructions you give it. Spend 15 minutes writing down how you actually talk.
- **File-based handoffs are an advantage, not a limitation.** You can inspect every intermediate step. When something goes wrong, you know exactly where the chain broke.
- **API costs scale with agents.** Seven agents running daily will cost more than two. Use a mix of models (cheaper models for research, better models for writing).
- **The Engagement Finder is the highest-ROI agent.** If you only add one beyond the basics, make it that one.
