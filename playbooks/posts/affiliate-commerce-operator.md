---
layout: playbook.njk
title: "Fire the Affiliate Agency, Keep the Commissions"
description: "A free, open-source AI operator that finds product opportunities, writes the content, makes the images, builds the landing pages, and publishes to Pinterest and TikTok through official APIs. Replace a $1,000 to $5,000/month marketing agency with code you run yourself."
date: 2026-06-16
difficulty: Advanced
cost: "A cheap server, your own platform accounts, and one AI key. The code is free and open source."
timeToSetup: "A weekend to wire up your catalog and platform connections."
originalSource: "https://github.com/robertwchen/claw-commerce-operator"
originalAuthor: "robertwchen (GitHub)"
tags:
  - affiliate-marketing
  - pinterest
  - tiktok
  - content-generation
  - landing-pages
  - automation
  - small-business
  - openclaw
permalink: /playbooks/affiliate-commerce-operator/
---

## Tools

- [**Claw Commerce Operator**](#aff-github): the free, open-source brain of this whole thing. It is the operator that picks products, writes copy, makes images, builds pages, publishes, and tracks results. By robertwchen.
- [**OpenClaw**](#aff-openclaw): the engine the operator runs on. Think of it as the worker that actually does each task on a schedule instead of you clicking around all day.
- [**Next.js**](#aff-nextjs): the dashboard the whole thing ships as. It is just the control panel in your browser where you see products, trends, drafts, pages, and numbers.
- [**OpenAI**](#aff-openai) or [**Anthropic**](#aff-anthropic): one AI key to write the product copy and angles. OpenAI also makes the image assets. You only need one for the writing.
- [**Pinterest**](#aff-pinterest): one of the two platforms it posts to, through Pinterest's official API. You bring your own account and a board.
- [**TikTok**](#aff-tiktok): the other publishing platform, also through the official API with your own account.
- [**PostgreSQL**](#aff-postgresql): optional. Where the operator stores its memory of products, drafts, and results. A plain JSON file works to start; Postgres is for when you grow.

## What You'll Build

A self-running affiliate marketing operation that does what an agency does: finds the products worth promoting, writes original content about them, makes the visuals, builds the landing and comparison pages, posts to Pinterest and TikTok, tracks every click, and then doubles down on whatever is working.

This comes from a developer on GitHub, robertwchen, who packaged the whole affiliate-content grind into one open-source tool called Claw Commerce Operator. It runs on OpenClaw, and it is built to be pointed at your own product catalog and run mostly on autopilot.

Here is the loop it runs. It imports real product and trend data, from your own catalog exports or official feeds like Amazon. It scores the opportunities so you are not guessing what to push. It writes original written content. It creates the visual assets. It builds landing pages and comparison pages. It publishes through the platforms' official APIs when your credentials are present. It tracks the clicks. It imports your real performance numbers. And then, in autopilot, it expands whatever content is winning.

You are not building a "post to social" toy. You are building the thing a marketing agency charges you four figures a month to do: the research, the writing, the design, the pages, the posting, and the optimization, all wired into one dashboard you own.

## Why This Works

Affiliate content marketing is not creative genius. It is a pipeline. Find a product, figure out the angle, write the copy, make the image, build the page, post it, watch the numbers, do more of what works. An agency charges you a retainer because that pipeline is relentless and tedious, not because any single step is hard.

That is exactly the shape of work an operator is good at. Every step is a clear task with a clear output. The agency's value was never one brilliant idea. It was capacity, the ability to crank out dozens of posts and pages and keep up with trends. Capacity is the cheap part now.

The scoring step is the quiet winner. Most people fail at affiliate marketing because they promote random products on a hunch. The operator imports real product and trend data and scores opportunities before a single word gets written, so your effort goes toward things that might actually convert.

And it closes the loop. It does not just post and hope. It tracks clicks through its own redirect link, imports the real performance metrics, and then in autopilot expands the winners. That feedback loop is what a good agency does in a Monday meeting. Here it happens on a schedule, automatically, for the cost of a server and one AI key.

## Prerequisites

- Your own product catalog you can export, or access to an official feed like the Amazon product API. The operator needs real products to work with.
- Your own Pinterest and TikTok accounts, plus an access token for each and a Pinterest board id. Owned accounts only.
- One AI key for the copy, either OpenAI or Anthropic. OpenAI as well if you want it to generate image assets.
- A public site URL where your landing pages and the click-tracking link will live.
- A cheap server to run it on, Node installed, and comfort running commands in a terminal. This one is genuinely Advanced.
- A way to be honest with yourself: this is a framework, not a money printer. See Gotchas.

## Step-by-Step Setup

### Step 1: Install and Run It Locally First

Clone the repo, then run `npm install`, `npm run seed`, and `npm run dev`. The seed step fills the dashboard with sample data so you can click around before anything is live. Open the dashboard and look at the tabs: Overview, Products, Trends, Viral Angles, Content Generator, Asset Preview, Scheduler, Landing Pages, Analytics, Autopilot, Settings, and Logs. Spend an hour here. This is your control panel, and understanding it now saves you pain later.

### Step 2: Feed It Your Real Products

Swap the sample data for your own. Point the Products tab at your catalog export, or wire in an official feed like the Amazon product API. This is the single most important input. The operator's scoring and content are only as good as the catalog you give it, so put your real products in and let it score the opportunities.

### Step 3: Add Your AI Key and Make Some Content

Configure an OpenAI or Anthropic key for the copy, and OpenAI if you want generated images. Then use the Content Generator and Asset Preview tabs to produce a few pieces by hand and read them critically. This is where you catch the voice being off or the angles being weak, while it is still cheap and private. Tune your instructions until the output is something you would actually post.

### Step 4: Connect Pinterest and TikTok

In Settings, add your Pinterest access token and board id, your TikTok access token, and your public site URL. These are the official-API connections, using your own accounts. With credentials in place, the operator can publish for real. Without them, it logs and skips instead of faking it, which is the behavior you want while you test.

### Step 5: Flip to Real Mode and Schedule It

Set `OPERATOR_MODE=real` and decide where state lives: a JSON file is fine to start, or a Postgres database as you scale. Use the Scheduler tab, and turn on the optional background worker, so the jobs run on a schedule instead of only when you are watching. You run OpenClaw from the repo root so it can see the workspace skill and your standing orders, the operator instructions and schedules that tell it what to do and when.

### Step 6: Watch Analytics, Then Turn On Autopilot

Let it run and watch the Analytics tab. Every public link includes a `/go/` redirect that records the click, then sends the visitor to your affiliate URL, so the click numbers are real, not guesses. The operator imports those performance metrics back in. Once you trust what you see, turn on the Autopilot tab and let it expand the content that is winning. Keep the Logs tab open for a while; it tells you what ran, what published, and what got skipped.

## Adapting This for Your Business

The pattern fits anyone who earns on product referrals. What changes is the catalog and where your audience already is.

- **Amazon affiliates and niche site owners.** Wire in the Amazon feed, let it score, and let it build the comparison pages that rank. This is the most direct fit.
- **Brands with their own catalog.** Export your products and use the operator to keep a steady stream of landing pages and social posts running without an agency on retainer.
- **Pinterest-heavy niches like home, recipes, and decor.** Lean on the Pinterest connection and the visual asset generation. This is where pins and boards do real work.
- **Creators who are paying a content freelancer per post.** The Content Generator and Scheduler replace the per-piece bill. You keep the judgment on what to promote; it removes the production grind.

## Gotchas and Tips

- **The revenue results are unproven. Be honest about this.** This is a framework you point at your own catalog. It removes the grind of producing and posting, not the judgment of what is actually worth selling. If you feed it junk products, it will efficiently market junk. The tool is real; the income is on you.
- **Compliance is baked in, so do not fight it.** It works on owned accounts only, posts no fake engagement, does not repost other creators' exact content, and puts an affiliate disclosure on every post and landing page. Those defaults keep your accounts alive. Leave them on.
- **Missing credential means skip, not fake.** If a live token is missing, the operator logs it and skips, rather than pretending it published. That is a feature. Check the Logs tab so a quietly skipped step does not look like a working one.
- **Start in the seeded sandbox, not in real mode.** Run the whole loop on sample data and read the output before you ever set `OPERATOR_MODE=real`. The cost of a bad post is your reputation; the cost of a bad draft in the sandbox is nothing.
- **You are now running a system, not paying for a service.** If the operator breaks, your pipeline stops. That is the trade for cutting the retainer. Keep it simple, keep the Logs tab honest, and know your platform accounts and tokens well enough to fix it yourself.
- **Respect the platform rules beyond this tool.** Pinterest and TikTok change their API and posting policies on their own schedule. The operator publishes through the official APIs, but staying inside each platform's terms is still your job.

## What This Replaces

Before this, getting affiliate content out the door meant one of two things:

- **A social-media or affiliate marketing agency on retainer**, usually $1,000 to $5,000 a month, to research products, write the posts, design the visuals, build the pages, publish, and report back. That is $12,000 to $60,000 a year for a pipeline that is mostly the same steps on repeat.
- **A content freelancer paid per piece**, plus you still doing the research, the posting, and the tracking yourself, falling behind the moment life gets busy.

After this, an open-source operator runs the pipeline for the cost of a cheap server, your own platform accounts, and one AI key. It finds the opportunities, writes the copy, makes the images, builds the pages, posts through official APIs, tracks real clicks, and expands the winners on autopilot. You keep the one thing that was always yours to keep: deciding what is worth selling.

---

## Keep Reading

- **[Skip the Research VA: Turn Any Company URL Into a Battle Plan](/playbooks/company-research-brief-agent/)**: the same "agent does the research grind" move, pointed at company intel instead of product opportunities.
- **[Replace Your Content Strategist's Monday Morning](/playbooks/youtube-competitor-intel-agents/)**: agents that watch the competition and tell you what to make next, the planning half of this pipeline.
- **[Turn a Phone Photo Into a Live Shopify Product in Minutes](/playbooks/photo-to-shopify-listing/)**: the catalog side, turning raw product into something sellable without a team.
