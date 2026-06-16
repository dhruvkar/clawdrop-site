---
layout: playbook.njk
title: "The Analyst Who Reads a Company Before Your Call, in 30 Minutes"
description: "Point an open-source agent at any company's website and get back a 23-section strategic brief: their real tech stack, what they are hiring for right now, and their likely economics. About 79 cents a run, instead of a $1,500-a-month research VA."
date: 2026-06-16
difficulty: Intermediate
cost: "About 79 cents per company in AI usage, plus a Gemini and an xAI key. The DNS recon mode is free."
timeToSetup: "Ten minutes to install, then one command per company."
originalSource: "https://github.com/blisspixel/primr"
originalAuthor: "blisspixel (GitHub)"
tags:
  - market-research
  - sales-intelligence
  - competitive-analysis
  - prospecting
  - open-source
  - automation
  - small-business
  - cost-cutting
permalink: /playbooks/company-research-brief-agent/
---

## Tools

- [**Primr**](#aff-github): the open-source tool that does the whole job. You give it a company name and a website, and it comes back with a deep research brief. It is free, MIT-licensed, and you run it from your computer's command line.
- [**Gemini**](#aff-gemini): Google's AI. Primr uses the cheap, fast version of it to do the bulk writing of the brief. This is most of why a run costs cents instead of dollars.
- [**xAI (Grok)**](#aff-xai): Elon Musk's AI. Primr uses Grok for the actual thinking part, the reasoning that turns raw scraped facts into a real strategic read.
- Python, the free programming language Primr is built on. You install it once. You do not need to know how to code.
- A company's public website. That is the only input. No logins, no databases, no list to buy.

## What You'll Build

A command you run before any sales call, partnership talk, or competitive check that hands you back a 23-section strategic brief on a company in about half an hour, built entirely from public signals, for under a dollar.

A developer who goes by blisspixel built an open-source tool called Primr that does exactly what a sharp research analyst does, except it never sleeps and it charges you 79 cents instead of a salary. You point it at a company's website. It quietly reads three kinds of evidence that a good analyst would dig for, then writes the whole thing up.

First, it reads the company's DNS records. Those are the boring plumbing settings behind every website, and they quietly give away the company's real tech stack, which cloud platform they run on, and who handles their email and logins. Second, it goes and finds the company's open job postings, checking eight different hiring systems plus a web search across LinkedIn, Indeed, and Glassdoor. Job posts are the most honest thing a company publishes, because they tell you what it is actually building and staffing for right now, today. Third, it reads about 50 pages of the company's own website, using nine different methods so it can still get in when a site tries to block scrapers.

Then it triangulates all of that into one long-form brief: competitive positioning, likely economics, operating constraints, and working hypotheses about where the company is headed. The clever part is that every single claim is labeled confirmed, reported, or inference, so you always know what is a hard fact versus an educated guess.

## Why This Works

Good company research is not magic. It is a few hours of disciplined digging through public sources that most people are too busy to do. The information is sitting right there in the open. The bottleneck has always been a human with the patience to go find it and the judgment to connect the dots.

That is the exact shape of work an agent eats for breakfast. Reading 50 pages, cross-checking eight job boards, parsing DNS records, none of it is hard. It is just tedious and time-consuming, which is precisely why you pay someone to do it or, more likely, why you never do it at all and walk into the call cold.

The three-source approach is what makes the output trustworthy instead of generic. Anyone can ask a chatbot "tell me about Acme Corp" and get a confident-sounding paragraph that is half hallucination. Primr does not do that. It reads primary sources, the company's own infrastructure, its own job posts, its own pages, and it refuses to launder a guess as a fact. The confirmed-versus-inference labeling is the difference between a brief you can act on and a wall of plausible nonsense.

And the economics are absurd in your favor. A research VA or junior analyst running this kind of profile costs you $1,000 to $2,000 a month and gives you maybe a handful of companies a week. Primr gives you the same depth for about 79 cents and 30 minutes per company, on demand, the moment you need it.

## Prerequisites

- A computer where you can install Python and run a command. Mac, Windows, or Linux all work.
- A Gemini API key and an xAI (Grok) API key. Both are quick to sign up for, and the run cost is so low that a small prepaid balance lasts a long time. (You can skip both and use the free DNS-only mode, more on that below.)
- A few dollars of prepaid credit on each AI account. A full run is about 79 cents, so even $20 covers a couple dozen companies.
- A target company's website. That is genuinely the only research input.
- Ten minutes for the one-time setup, which the tool walks you through.

## Step-by-Step Setup

### Step 1: Install Primr

Open your computer's command line and run `pip install primr`. That is the whole install. Pip is Python's package installer, the standard way software like this gets onto your machine, and this one command pulls Primr down and sets it up.

### Step 2: Run the Setup Wizard

Run `primr init`. This is a guided setup that walks you through plugging in your Gemini and xAI keys, step by step, so you are not hunting through config files. Paste each key when it asks. If you only want the free DNS mode for now, you can skip the keys here and add them later.

### Step 3: Check That Everything Works

Run `primr doctor`. This is a health check that confirms your keys are valid and everything is wired up correctly before you spend any money. If something is off, it tells you what. Get a clean bill of health here and your real runs will just work.

### Step 4: Try the Free DNS Recon Mode First

Before you spend a cent, try the free mode. It reads only the company's DNS records, needs no API keys at all, and finishes in two or three seconds. You get a quick read on their tech stack, cloud platform, and email provider. It is a great way to see the tool work and to do a fast tech-stack peek when a full brief is overkill.

### Step 5: Run a Full Brief on a Real Company

Now the main event. Run `primr "ExampleCo" https://example.co`, swapping in the company name and website you actually care about. It takes about 23 to 35 minutes while it scrapes, cross-checks the job boards, and writes. When it finishes you get the full 23-section brief as both a Markdown file and a Word DOCX, so you can read it, edit it, or drop it straight into a deck.

### Step 6: Control Your Spend

Two built-in guardrails keep costs predictable. Run with `--dry-run` first to get a cost estimate before you commit, and use `--budget` to set a hard ceiling so a run can never spend more than you allow. With both a Gemini and an xAI key set, a normal run lands around 79 cents. If you only set the xAI key, expect closer to $4.27, so the Gemini key is worth getting just to slash the bill.

## Adapting This for Your Business

The job changes, but the pattern is the same: any time you need to actually understand a company before you engage, this is your pre-read.

- **Salespeople and founders doing outbound.** Run it the night before a discovery call. You walk in knowing their stack, their hiring priorities, and your best angle, instead of burning the first ten minutes asking questions Google could have answered.
- **Agencies and consultants pitching new clients.** Build the brief before the proposal. Reference their actual job openings and tech choices in your pitch and you sound like you already work there.
- **Anyone watching competitors.** Run it on rivals quarterly. The job postings alone tell you what they are building before they announce it. The economics section gives you a read on their pressure points.
- **People scoping a partnership or an acquisition.** Get an unbiased, source-labeled read on the other side before the first real conversation, without tipping anyone off, since it only touches public pages.
- **Builders who want this inside their own AI.** Primr also runs as an MCP server and a Claude Skill, which means other AI agents can trigger it on their own. Wire it into a bigger workflow and your research step runs itself.

## Gotchas and Tips

- **Read the confidence labels, do not skip them.** The whole point of Primr is that it tags every claim confirmed, reported, or inference. A brief is only as good as your willingness to treat the inferences as hypotheses, not gospel. The labels are there so you do not get burned acting on a guess.
- **Get the Gemini key, not just xAI.** This is the single biggest cost lever. xAI-only runs cost about $4.27. With Gemini doing the bulk writing, you drop to about 79 cents. That is a five-fold difference for the sake of one extra signup.
- **Use --dry-run before a batch.** If you are about to research ten companies, run the estimate first. It costs nothing and saves you from a surprise bill. Pair it with --budget and you have a hard ceiling no run can cross.
- **Job postings are the gold, so trust them most.** Of the three sources, the open roles are the most honest. A company can polish its website all it wants, but it cannot fake the fact that it is hiring six backend engineers and a compliance lead. Read that section closely.
- **A protected site may yield a thinner brief.** Primr has nine scraping methods that fall back when a site blocks it, but a heavily locked-down site will still give up fewer pages. The DNS and job-post signals usually carry the brief even then, but expect some variation company to company.
- **This is a research tool, not a contact scraper.** It builds you an understanding of a company. It does not hand you a list of people to email. Keep it on its job: knowing the company cold before you reach out.

## What This Replaces

Before this, getting a real read on a company meant one of three things:

- **A market-research VA or junior analyst**, $1,000 to $2,000 a month, who profiles a handful of companies a week and still misses the DNS and hiring signals an automated tool catches every time. Roughly $12,000 to $24,000 a year for work that now costs cents.
- **Paying for pricey research-report services**, the kind that charge real money per report and hand you a generic profile that is months out of date the day it lands.
- **Doing it yourself**, which means the one to two hours you quietly burn Googling every prospect before a call, if you bother at all, which most people do not.

After this, you run one command, wait half an hour, and get a 23-section brief built from primary sources, with every claim labeled by how much you should trust it, for about 79 cents. The VA bill goes away. The pre-call scramble goes away. And you stop walking into conversations knowing less about the other side than they know about you.

---

## Keep Reading

- **[Replace Your Content Strategist's Monday Morning](/playbooks/youtube-competitor-intel-agents/)**: the same intel-gathering instinct pointed at your competitors' YouTube channels instead of their websites.
- **[The Affiliate Marketing Intern That Never Sleeps](/playbooks/affiliate-commerce-operator/)**: another open-source agent that does a whole job role for pennies on the dollar.
- **[He Automated a 250-Acre Farm Without Hiring an Engineer](/playbooks/farm-automation-no-engineer/)**: proof that a single non-coder with the right tool replaces work you assumed needed a payroll.
