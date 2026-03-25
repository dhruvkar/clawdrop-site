---
layout: blueprint.njk
title: "How One AI Prompt Landed 6 Paying Clients in a Week"
description: "An AI agent scraped 350 local businesses, built each one a custom website, mailed physical postcards with QR codes, and closed 6 monthly clients. Total AI cost: $7."
date: 2026-03-25
difficulty: Intermediate
cost: "~$350 total ($7 AI tokens + ~$300 postcards)"
timeToSetup: "1-2 hours (first time), 10 minutes after that"
originalSource: "https://x.com/Brandondoyle/status/2036504266563805331"
originalAuthor: "Brandon Doyle (@Brandondoyle)"
tags:
  - lead-generation
  - direct-mail
  - sales
  - local-business
  - postcards
permalink: /blueprints/ai-postcard-lead-gen/
---

## What You'll Build

A fully automated lead generation pipeline that finds local businesses without websites, builds a custom website for each one, mails them a physical postcard with a QR code to their new site, and hands your sales team a warm call list. One prompt. Ten minutes. Real clients.

## The Results

Brandon Doyle runs a marketing agency called David AI. He built a custom OpenClaw setup called "Goliath" and gave it one prompt. Here's what happened:

- **350 businesses** scraped in 10 minutes
- **350 websites** auto-generated (HTML/CSS, one per business)
- **350 postcards** designed and mailed via Lob, each with a QR code to that business's custom site
- **350 contacts** pulled into a call list for the sales team
- **6 businesses** signed on as monthly marketing clients
- **$7** in AI tokens

The sales rep's call script was simple: "Hey, just wanted to make sure you got our mail. We built a website for your business. Want to take a look?" That's not a cold call. That's a warm introduction with proof of work already in their hands.

## Why This Works

**Physical mail cuts through the noise.** Everyone's email inbox is flooded. Nobody's physical mailbox is. A postcard with a QR code to a website someone built specifically for YOUR business? You're scanning that code.

**It flips the sales conversation.** Instead of "Can I sell you something?" it's "We already made you something. Want it?" You've already given them value before the first phone call. That's a completely different dynamic.

**The economics are absurd.** $7 in AI tokens plus maybe $250-350 for postcards through Lob. Call it $350 total. Six monthly clients at even $500/month each is $3,000/month in recurring revenue. That's roughly 8.5x return in month one alone.

And the 344 businesses that didn't close? They still have a website with your name on it. They're warm leads for next month.

## How It Works

### Step 1: Find the Targets

The agent searches Google for local businesses in a specific vertical (landscapers, HVAC companies, plumbers, etc.) that show up in search results but don't have a website. These are real businesses with real customers. They just never built a site. There are millions of them.

### Step 2: Build the Websites

For each business, the agent generates a simple, clean website using the business name, services, location, and contact info it scraped. HTML and CSS. Nothing fancy, but infinitely better than nothing, which is what these companies had.

### Step 3: Send the Postcards

The agent uses Lob (a direct mail API) to design and send a physical postcard to each business owner. Each postcard includes a QR code that links to the website the agent just built for that specific business. 350 postcards, designed and mailed automatically.

### Step 4: Build the Call List

While doing all of this, the agent pulls every business owner's name and phone number into a spreadsheet. Your sales team now has a list of 350 warm leads who've already received something from you.

### Step 5: The Warm Call

A sales rep calls each owner a few days after the postcard lands. The script writes itself: "Hey, just checking in to make sure you got the website we put together for you. We'd love to chat about getting it live." The prospect already knows who you are and what you can do. Six of Brandon's 350 said yes.

## The Numbers

- **AI tokens** (scraping, site generation, orchestration): $7
- **350 postcards via Lob**: ~$250-350
- **Sales rep time** (calling 350 leads): ~20 hours
- **Total campaign cost**: ~$350
- **Clients closed**: 6 active monthly
- **Estimated revenue** ($500/mo each): $3,000/mo recurring
- **First-month ROI**: ~8.5x

That's not a marketing campaign. That's a money printer.

## Prerequisites

- An OpenClaw setup with browser/web access for scraping
- A Lob account (lob.com) for postcard mailing via API
- Somewhere to host the generated websites (any static hosting works)
- A sales rep or yourself to make follow-up calls

## Making It Repeatable

The beauty of this approach is that it works for any local business vertical. Swap "home services" for:

- **Dentists** without modern websites
- **Restaurants** with no online ordering
- **Salons** that only have a Facebook page
- **Chiropractors** with outdated sites from 2010

Run it for a different niche every month. Stack the campaigns. Each one costs under $400 and can pay for itself many times over.

## Who Should Steal This Idea

- **Marketing agencies** looking for a client acquisition channel that costs almost nothing
- **Web design shops** that want a pipeline of businesses who literally need websites right now
- **Local service companies** prospecting in their area for partnership opportunities
- **Anyone doing outreach** who's tired of cold emails landing in spam. Physical mail has a near-100% open rate.

## Tools Used

- **OpenClaw** for orchestration (the brain running the whole campaign)
- **Lob** (lob.com) for postcard design and mailing via API
- **Google Search** for finding businesses without websites
- **Web scraping** for pulling business contact info
- **Static hosting** for the generated websites (GitHub Pages, Netlify, or similar)

## The Bigger Idea

Six clients from one prompt. Not six leads. Not six "interested parties." Six people paying monthly retainers.

Most people think of AI agents as chatbots that answer questions. This is an AI that ran a full client acquisition campaign end to end, including putting something in someone's actual mailbox. It found the prospects, built the creative, handled fulfillment, and set up the sales team to close. All it needed was one prompt and ten minutes.

The question isn't whether this works. Brandon already proved it does. The question is what vertical you're going to run it on first.

---

*Source: [@Brandondoyle on X](https://x.com/Brandondoyle/status/2036504266563805331) (Mar 24, 2026). Brandon runs David AI ([@getDAVIDai](https://x.com/getDAVIDai)), which builds custom OpenClaw setups for businesses.*
