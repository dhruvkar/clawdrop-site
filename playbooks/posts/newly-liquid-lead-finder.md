---
layout: playbook.njk
title: "Reach People the Week They Come Into Money. This Agent Reads the SEC Filings for You."
description: "Every day, public SEC filings name people who are about to sell company stock. A lead-gen agency pointed an OpenClaw agent at the SEC EDGAR database to pull Form 144 and Form 4 contacts into a clean spreadsheet of names, companies, and filing dates. It is one of the cleanest signal-based lead sources nobody is working."
date: 2026-06-03
difficulty: Intermediate
cost: "Low. OpenClaw plus model usage. The data is free and public."
timeToSetup: "An afternoon. The agent writes the scraper itself."
originalSource: "https://www.youtube.com/watch?v=HBT0ogk49jo"
originalAuthor: "Openclaw lead-generation tutorial"
tags:
  - lead-generation
  - signal-based
  - sec-edgar
  - financial-advisors
  - real-estate
  - openclaw
  - cold-outreach
permalink: /playbooks/newly-liquid-lead-finder/
---

## Tools

- [**OpenClaw**](#aff-openclaw): the agent that writes the scraper, runs it on a schedule, and assembles the contact file. It does the whole job once you describe it.
- [**SEC EDGAR**](https://www.sec.gov/cgi-bin/browse-edgar): the free, public U.S. database of company filings. No login, no fee.
- A spreadsheet (Excel or Google Sheets) for the output, and whatever you already use for outreach.

## What You'll Build

A daily list of people who are about to come into money, pulled from public records before anyone calls them.

In a lead-generation tutorial, an agency showed the build live: "Check out this SEC database where one of our customers wants to collect filing 144 contacts of people who are going to be selling securities. We're also doing filing form four contacts as well." They set up a cron job that scrapes the filing every day and extracts the entity, the ticker, and the person responsible. The result, in their words: "We literally just have this Excel file with all the contacts. We have their name, the company, the filing date, the filing type, the SEC link. I didn't do another thing. OpenClaw did everything."

Two filings carry the signal:

- **Form 144** is filed when an insider gives notice they intend to sell restricted stock. It is a heads-up that a specific named person is about to turn shares into cash.
- **Form 4** reports an insider transaction after it happens, including sales.

Both are public, both name the person, and both are filed constantly. The agent reads them so you do not have to.

## Why This Matters for Your Business

Most lead lists are stale. Everyone buys the same database, hits the same people, and the prospect has heard the pitch ten times. Signal-based leads are different. You are not reaching a name on a list, you are reaching a person at the exact moment something changed in their life.

A Form 144 is one of the cleanest money signals that exists in public data. Someone is about to liquidate stock. That is the week a financial advisor wants to introduce themselves. It is the month a luxury realtor wants to be in the inbox. It is the quarter a high-ticket service, a tax strategist, a wealth manager, a boat dealer, wants to make contact. The event is public, the person is named, and almost nobody is working the list because pulling it used to mean a developer and a scraper. Now it means describing the job to an agent.

You are not getting left behind because you lack AI. You are getting left behind because your competitor's AI is reading public filings every morning and yours is not.

## How It Works

### Step 1: Point the agent at the filing

Tell OpenClaw which filings you want: Form 144, Form 4, or both. The agent knows how to reach the SEC EDGAR full-text and daily-index feeds. You describe the target in plain English, it writes the scraper.

### Step 2: Set it on a daily cron

New filings post every business day. A daily job catches them while the signal is fresh. The agent pulls each filing and extracts the fields that matter: the person's name, the company, the ticker, the filing date, the filing type, and the link back to the source.

### Step 3: Get a clean contact file

The output is a spreadsheet, one row per filing, ready to work. Name, company, filing date, type, SEC link. From there it flows into whatever outreach you already run.

### Step 4: Enrich and reach out (optional)

A name and a company is enough to find a business email or a mailing address with a second step. The tutorial's agency used the same agent stack to enrich and then run outreach, generating hundreds of positive responses a day across their campaigns.

## Who This Is For

- **Financial advisors and wealth managers**: the person filing a Form 144 is, by definition, about to have liquid cash to place.
- **Luxury and high-ticket sales**: realtors, auto and boat dealers, private aviation, anyone whose buyer just had a liquidity event.
- **Tax strategists and CPAs**: a large stock sale is a tax event, and that is your opening.

## Gotchas and Tips

- **The data is public, your outreach still has rules.** Filings are open records, but cold email and cold calling are regulated. Follow CAN-SPAM, honor do-not-contact and do-not-call requests, and keep the outreach relevant and respectful. The signal is the edge, not a license to spam.
- **Form 144 is intent, Form 4 is history.** If you want to reach someone before the sale, weight Form 144. If you want confirmed events, use Form 4. Most people want both.
- **Enrichment is the real work.** The SEC gives you a name and a company, not an email. Budget the second step. That is where a list becomes a campaign.
- **Filter by size.** Not every filing is worth a call. Set a floor on the dollar value so the agent only surfaces the ones that justify your time.

---

## Keep Reading

- **[Get 5 Sales-Ready Leads in Your Inbox Every Morning. Without a Lead List.](/playbooks/signal-based-daily-leads/)**: the same signal-based idea, pointed at buying intent instead of liquidity.
- **[The €200 AI Voice Agent That Called 3,000 Businesses in a Weekend](/playbooks/guinndex-voice-agent/)**: once you have the list, this is the agent that works it by phone.
