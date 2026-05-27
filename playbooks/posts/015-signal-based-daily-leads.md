---
layout: playbook.njk
title: "Get 5 Sales-Ready Leads in Your Inbox Every Morning. Without a Lead List."
description: "Signal-based outbound is the next generation of cold email. Trigify or similar tools find buyers the moment they show intent. OpenClaw turns that signal into 5 personalized, qualified leads delivered daily. Here's the stack."
date: 2026-05-27
difficulty: Intermediate
cost: "$80-300/month (signal tool + enrichment + sequencer)"
timeToSetup: "One afternoon"
originalSource: "https://www.youtube.com/watch?v=HBT0ogk49jo"
originalAuthor: "Eric Nowoslawski"
issueNumber: 15
permalink: /playbooks/signal-based-daily-leads/
tags:
  - outbound
  - signal-trigger
  - lead-gen
  - cold-email
  - sales
  - agencies
---

## Tools

- [**OpenClaw**](#aff-openclaw): orchestrates the daily pull, the enrichment, and the routing
- [**Trigify**](#aff-trigify): signal layer that watches LinkedIn for hiring signals, job changes, and engagement triggers
- [**Apollo**](#aff-apollo): alternative for static list pulls (use Trigify for signals, Apollo for the fill-in)
- [**Clay**](#aff-clay): enrichment and intent layer if you want richer data than Trigify alone
- [**Prospeo**](#aff-prospeo): email finder and verifier
- [**MillionVerifier**](#aff-millionverifier): final verification pass before sequencing
- [**Manyreach**](#aff-manyreach): the sequencer where the leads actually get sent
- [**Smartlead**](#aff-smartlead): alternative sequencer if you're already on it

## What You'll Build

A daily process that runs while you sleep and delivers 5-10 sales-ready leads to your inbox by the time you wake up. Each lead is:

1. **Triggered by a real signal** (just hired a VP of Sales, just posted their first sales engineer role, just got funded, etc.) — not pulled from a static list.
2. **Matched to your ICP** automatically. The agent only surfaces companies that fit your sweet spot.
3. **Enriched with a verified business email** for the right contact.
4. **Ready to send.** Either dropped into your sequencer as a pre-approved lead, or sitting in your inbox for human review and send.

You do not maintain a lead list. The signal feed is the list. The list changes every day because the signals change every day.

## Why This Works

For ten years, outbound has been a list game. Buy the list (Apollo, ZoomInfo, Lusha). Enrich it (Clay, Prospeo). Send to it (Smartlead, Manyreach). The math has always been the same: thousands of cold emails, low single-digit reply rates, hope for a meeting.

The list game is breaking. Reply rates keep dropping. Inboxes keep filtering. Buyers know what a cold email looks like in the first sentence.

The signal game is different. Instead of emailing 1,000 strangers, you email 5 people who just took an action that makes them a buyer for what you sell.

A VP of Sales just got hired at a Series B company. The first 30 days, they need: a CRM consultant, a sales ops contractor, an outbound agency, a sales coaching firm. If you sell any of those, you have a 30-day window where this person is actively looking. A cold email that reaches them in that window has a 5-10x higher reply rate than the same email two months later when the new VP is heads-down executing.

The pipeline below catches those moments at scale.

## How the Signal Layer Works

You have three options for sourcing signals:

### Option 1: Trigify (purpose-built signal layer)

Trigify monitors LinkedIn at scale for specific signal types:

- **Job change signals.** Someone takes a new role matching your target title.
- **Hiring signals.** A company posts a job that indicates a buying moment.
- **Engagement signals.** A person engages with content from a competitor or thought leader in your space.
- **Funding signals.** A company announces a new funding round.

You configure the triggers once. Trigify runs daily and returns the people who matched each trigger. Plug-and-play, no scraper to maintain.

### Option 2: Roll your own signal scraper

For specific public data sources (SEC filings, government tenders, news mentions, niche directories), you can build the signal layer yourself. An OpenClaw cron job scrapes the source daily, extracts the new entries, and feeds them into the same pipeline. Eric Nowoslawski's SEC Form 144 scraper is the canonical example: every day's insider stock-sale filings become tomorrow's outbound list for wealth advisors.

This route works when the signal you care about lives on a public site nobody else is watching. It does not work when the signal is "what's happening on LinkedIn." For LinkedIn, use Trigify.

### Option 3: Hybrid

Use Trigify for the LinkedIn signals. Build a small scraper for the niche public data source specific to your business. Feed both into the same pipeline. The agent treats every input as another signal type with its own ICP rules.

For most teams, start with Trigify alone. Add the custom scraper only if there's a public source your buyers leave fingerprints on.

## The Full Pipeline, Layer by Layer

### Layer 1: Signal in

The signal tool delivers a daily file: who triggered, what they triggered on, and the raw data (name, company, role, the trigger event).

### Layer 2: ICP filter

Not every signal matches your buyer profile. OpenClaw runs a small ICP filter:

- **Company size band.** Is this company between your minimum and maximum revenue (or headcount, or funding stage)?
- **Industry fit.** Is this company in an industry where your product solves a real problem?
- **Geographic fit.** If your offering has geographic constraints (US only, EU only), filter accordingly.
- **Tech stack fit.** If your product replaces or integrates with a specific stack, check for the stack via Clay or a similar enrichment.

The output is a smaller list: only the signals that match your ICP. Often 20-40% of the raw signal volume.

### Layer 3: Contact identification

For each company that passed the ICP filter, identify the right contact:

- **For a new-hire signal**, the contact is usually the new hire themselves.
- **For a hiring-post signal**, the contact is usually the hiring manager or the person posting on behalf of the team.
- **For a funding signal**, the contact is usually the founder, the COO, or the head of the function your product addresses.

OpenClaw does the role mapping using the Clay or Apollo data. Output: name, title, LinkedIn URL.

### Layer 4: Email enrichment

Prospeo runs the email lookup for each contact. Two-pass approach:

1. **Primary lookup.** Prospeo returns the most likely business email and a confidence score.
2. **Verification pass.** MillionVerifier confirms the email is deliverable.

Only leads with a verified business email proceed.

### Layer 5: Personalization context

For each lead, OpenClaw assembles a short context bundle the sequencer can use:

- The signal that triggered them.
- One company-specific detail (recent news, a public-facing initiative).
- One person-specific detail (their previous role, their LinkedIn headline).

This context bundle becomes the "personalization variable" in the cold email. Your sequencer uses it to write the opening line of each email so every send feels specific to the recipient.

### Layer 6: Delivery

You have two routing options:

- **Direct to sequencer.** OpenClaw drops the enriched leads into Manyreach (or Smartlead) under a campaign you've pre-configured. The campaign sends automatically on its schedule.
- **Review in inbox.** OpenClaw delivers the leads as a daily digest in your inbox or your Slack. You approve each one before it gets sent. This is the safer setup for the first 4-6 weeks.

After you trust the pipeline, switch to direct delivery. Until then, keep the human review gate.

## Step-by-Step Setup

### Step 1: Define Your ICP Exactly

Before you touch any tool, write your ICP down with concrete filters:

- Revenue band or headcount band.
- Industries (NAICS codes if you want to be precise).
- Geographic regions.
- Tech stack indicators (uses Salesforce / does not use Salesforce / on AWS / etc.).
- Buyer titles (the people you want to reach inside the matching companies).
- Disqualifying conditions (companies you will not work with).

This document becomes the ICP filter prompt. The pipeline rejects anything that does not match.

### Step 2: Pick Your Signals

Write down the 3-5 signals that mean "this person is a buyer right now":

- New VP of Sales hired (signal: they're rebuilding their stack in the first 30 days).
- Company just raised a Series B (signal: they're hiring and spending).
- Company just posted their first sales engineer role (signal: they're scaling outbound).
- Decision-maker engaged with a specific post by a competitor (signal: they're shopping).

Configure Trigify (or your custom scraper) to watch for these signals exclusively. Resist the urge to track 12 signals. Three is sharper than twelve.

### Step 3: Wire OpenClaw

Set up an OpenClaw cron job that runs once daily:

1. Pull the signal file from Trigify.
2. Run the ICP filter.
3. Run the contact identification.
4. Run the email enrichment and verification.
5. Assemble the personalization context.
6. Output the day's leads to your chosen destination.

The whole pipeline is one OpenClaw skill that takes the signal file as input and produces the lead file as output.

### Step 4: Configure the Sequencer

Set up one Manyreach (or Smartlead) campaign per signal type. Why one per type: the email copy is different for each signal. A "you just got hired" email is a different message than a "your company just raised" email. Different campaign, different copy, same pipeline feeding both.

Each campaign needs:

- A sender setup (Manyreach pulls from your pre-warmed mailboxes; if you don't have those yet, see the Inboxkit or Navreo infrastructure setup).
- A sequence (typically 3-5 emails over 14 days).
- Personalization variables that pull from the context bundle.

### Step 5: Run the Pipeline for a Week in Review Mode

For the first week, do not auto-send. Let the pipeline deliver leads to your inbox or Slack. Review each one:

- Does the signal actually mean what you said it means?
- Does the ICP filter actually reject the wrong matches?
- Is the personalization context actually useful?

Tune. Iterate. The first week is configuration. The second week is calibration. By week three, the pipeline is producing leads you'd send.

### Step 6: Flip on Auto-Send

Once you trust the pipeline, route the output directly into Manyreach. The agent fills your campaigns automatically every morning. You walk in at 9 AM, your campaigns are full, your day starts.

### Step 7: Add a Bounce-Rate Watchdog

Eric Nowoslawski's second build in the same video is a bounce-rate watchdog. Run the same OpenClaw pattern but on the sequencer's side: every few hours, check campaign bounce rates. If any campaign goes above your threshold (typically 3-4%), pause it, re-verify the lead emails, and resume.

This protects your sender reputation. The signal pipeline can ingest bad data; the watchdog catches the bad data before it kills your inbox placement.

## Adapting This for Your Business

The pattern works for any B2B service or product where a specific event predicts a buying moment.

**Outbound agencies.** Signal: "company posted a sales role." Triggered outreach: "before you hire, do you want fractional outbound for 90 days?"

**HR consultancies and recruiters.** Signal: "company posted multiple roles in the same function." Triggered outreach: "if you're hiring a team, here's how we cut your time-to-fill."

**Marketing agencies.** Signal: "company just raised funding." Triggered outreach: "the first 90 days post-raise are when most companies waste their marketing budget. Here's how we'd structure yours."

**Sales coaching firms.** Signal: "new VP of Sales hired." Triggered outreach: "if you're the new VP rebuilding the team, here's the playbook we run with our other VP clients."

**Real estate investors and brokers.** Signal: "owner filed Form 144 to sell securities." Triggered outreach: "if you're about to come into liquidity, here's how three of our clients deployed theirs into real estate."

**Wealth managers and financial planners.** Same Form 144 signal. Different message.

**Compliance and security consultants.** Signal: "company published a public privacy or security incident." Triggered outreach: "we help companies that just had an incident rebuild their program in 60 days."

The pattern is always the same. Find the signal that means "buyer right now." Configure the filter. Let OpenClaw run the daily pipeline. Personalize on the signal. Send.

## Gotchas and Tips

- **Don't over-filter.** Five signals a day with 70% conversion to a real lead is better than fifty signals a day with 5% conversion. Tight ICP, tight signals.
- **The personalization context is doing more work than the email copy.** A generic email with great context beats a polished email with no context. Spend your tuning time on the context bundle.
- **Warm your mailboxes before you scale.** A pipeline that delivers 50 leads/day is useless if your sender reputation is shot. Run the Inboxkit + Manyreach infrastructure setup before you scale send volume.
- **Disclose nothing in the email.** This is outbound. Your buyer doesn't need to know the leads came from a signal pipeline. They need to know you understand their moment. Lead with the moment, not the mechanism.
- **Watch your reply rate by signal type.** Each signal converts differently. Some signals will surprise you with high rates; others will look promising and convert terribly. Track per-signal reply rate and prune the signals that don't earn their slot.
- **Don't use Trigify if you also use Apollo for the same lookups.** Pick one signal tool per signal type. Two tools watching the same surface waste budget and create duplicate-lead headaches.

## What This Replaces

Before this stack:
- **Static list buy:** $500-2,000/month for a list that decays
- **Manual enrichment time:** 5-10 hours/week for an SDR or a researcher
- **Average cold email reply rate on static lists:** 1-3%
- **Cost per meeting booked:** $200-500

After this stack:
- **Signal tool subscription:** $100-400/month
- **Enrichment and verification:** $20-100/month
- **Manual time:** 15-30 minutes/day in review mode, near-zero after
- **Average reply rate on signal-triggered emails:** 8-15%
- **Cost per meeting booked:** $30-100

The reply-rate jump is the whole story. A 4-5x improvement in reply rate is the difference between an outbound channel that limps along and one that compounds.

If your business already has cold email infrastructure and a sequencer running, this pipeline is a layer on top of what you have. If you're starting from scratch, the cold email infrastructure (domains, mailboxes, DNS, warm-up) is its own setup that has to come first. Either way, the signal layer is what makes the difference between outbound that converts and outbound that just creates inbox fatigue.

---

## Keep Reading

- **[Stop Buying Cold Email Lists. Build One That Actually Books Meetings.](/playbooks/cold-email-list-pipeline/)**: The static-list version. Read this one if you're still buying lists and want to graduate to a custom-built list before you graduate to signals.
- **[His Life Insurance Agency Texts and Calls New Leads in 2 Minutes. Automatically.](/playbooks/life-insurance-2-minute-follow-up/)**: The same idea applied to inbound leads instead of outbound. Fast response on triggered inbound + signal-based outbound = full coverage of buyer moments.
- **[AI Whispers What to Say During Your Cold Calls in Real Time](/playbooks/ai-cold-call-coach/)**: The conversational layer that sits on top of the leads this pipeline produces. The leads land in your inbox, the coach helps you close them on the phone.
