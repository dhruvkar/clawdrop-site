---
layout: blueprint.njk
title: "AI Finds Leads, Builds Demo Sites, and Cold Calls Them For You"
description: "One agency owner built a full lead gen pipeline: find prospects, research them, build custom demo sites, deploy them, create video walkthroughs, and reach out via text and phone. All automated."
date: 2026-03-10
difficulty: Advanced
cost: "$50-100/month (hosting + API + phone)"
timeToSetup: "1-2 weeks"
originalSource: "https://discord.com/channels/1456350064065904867/1456609488202105005/1464459295138644173"
originalAuthor: "Jonah (@jonahships)"
tags:
  - business
  - lead-generation
  - sales
  - agency
permalink: /blueprints/ai-lead-gen-pipeline/
---

## What You'll Build

A complete lead generation machine that runs on autopilot. Your AI agent finds potential clients, researches their business, builds a custom demo website showing what you could do for them, deploys it live, creates a video walkthrough of the demo, and reaches out via text and phone. That's not one automation. That's an entire sales team.

## Why This Works

Cold outreach has a conversion problem. Generic emails get ignored. "Hey {first_name}, I noticed your {company} could use..." gets deleted before the second sentence.

But imagine receiving a text that says: "Hey, I built a demo of what your website could look like. Here's the link, and here's a 2-minute video walkthrough." That's not cold outreach anymore. That's proof of work. It shows you understand their business and you've already started solving their problem.

The trick is that building custom demos for every lead doesn't scale if a human does it. But an AI can research a business, generate a tailored site, deploy it, and record a walkthrough in minutes.

## Prerequisites

- OpenClaw installed and running
- GitHub account (for deploying demo sites)
- Coolify or similar self-hosting platform (Vercel, Netlify work too)
- Google Voice or Twilio account (for texting leads)
- A phone agent setup (Vapi, Bland, or similar) for cold calls
- Remotion installed (for generating demo videos)

## Architecture

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Lead Finder │────▶│  Researcher  │────▶│  Site Builder │
│              │     │              │     │              │
│  - Google    │     │  - Website   │     │  - Custom    │
│  - LinkedIn  │     │  - Social    │     │    landing   │
│  - Yelp      │     │  - Reviews   │     │    page      │
│  - Directories│    │  - Pain pts  │     │  - Their     │
│              │     │              │     │    branding   │
└──────────────┘     └──────────────┘     └──────┬───────┘
                                                  │
                     ┌──────────────┐     ┌───────▼──────┐
                     │  Outreach    │◀────│  Deployer    │
                     │              │     │              │
                     │  - Text msg  │     │  - GitHub    │
                     │  - Phone call│     │  - Coolify   │
                     │  - Email     │     │  - Live URL  │
                     │              │     │  - Video     │
                     └──────────────┘     └──────────────┘
```

## Step 1: Define Your Ideal Client

Before the AI can find leads, it needs to know who you're looking for:

```markdown
## Target Client Profile
- Industry: Local service businesses (plumbers, dentists, landscapers)
- Location: [Your target metro area]
- Signs they need help:
  - No website or a bad one
  - Few/no Google reviews
  - Not running ads
  - Competitors outranking them
- Revenue: $500K-5M (big enough to pay, small enough to need you)
```

## Step 2: Automated Lead Research

Once the agent finds a prospect, it digs in:

- Pull their current website (if they have one) and analyze it
- Check their Google Business profile, reviews, and rating
- Look at their social media presence
- Identify their top 3 competitors and what they're doing better
- Note specific pain points the demo should address

This research becomes the foundation for a demo that actually resonates. "I noticed your competitor Johnson Plumbing has 200+ Google reviews while you have 12. Here's how we'd fix that."

## Step 3: Generate Custom Demo Sites

This is the showstopper. The AI takes the research and builds a landing page tailored to that specific business:

- Uses their business name, colors, and industry
- Addresses the specific gaps found in research
- Shows "before/after" of their online presence
- Includes a clear CTA ("Want this for your business? Let's talk.")

Push to GitHub, deploy via Coolify, and you have a live URL in minutes.

## Step 4: Create Video Walkthroughs

Using Remotion (a React-based video framework), the agent generates a short video walking through the demo site. This isn't a screen recording. It's a produced video with:

- Narration explaining what was built and why
- Callouts highlighting key improvements
- A personal touch that makes it feel custom (because it is)

## Step 5: Multi-Channel Outreach

Now the agent reaches out with something real to show:

**Text (Google Voice):** Short, casual, with the demo link. "Hey [Name], I put together a quick demo for [Business]. Take a look: [URL]"

**Phone (AI voice agent):** A phone agent calls the lead, introduces the service, and references the demo site. If they're interested, it books a meeting on your calendar.

**Email:** Longer-form follow-up with the video walkthrough embedded.

The key: every touchpoint references the custom demo. It's not generic outreach. It's "I already did work for you, for free."

## Step 6: Track and Iterate

Log every lead, every outreach attempt, and every response. The agent should track:

- How many leads found per day
- Demo sites built and deployed
- Outreach sent (text, call, email)
- Response rates by channel
- Meetings booked
- Deals closed

Use this data to refine your targeting. If dentists respond at 3x the rate of plumbers, focus on dentists.

## What Makes This Different

Most AI automation demos show one step: "Look, it can send emails!" This is the full pipeline. Finding leads, researching them, building something custom, deploying it, and reaching out across multiple channels. Each step feeds the next.

The person who built this (Jonah) is running it for his own agency. It's not a concept. It's his actual sales process, running on real prospects, closing real deals.

## Cost Breakdown

- **OpenClaw + Claude API:** ~$20-40/month depending on volume
- **Coolify hosting:** ~$10-20/month for a VPS
- **Google Voice:** Free (or Twilio at ~$0.01/text)
- **Phone agent (Vapi/Bland):** ~$0.10-0.15/minute
- **Remotion:** Free (open source)
- **Total:** Roughly $50-100/month for a system that replaces a full-time SDR

Compare that to hiring a sales rep at $4-5K/month who sends generic emails all day.
