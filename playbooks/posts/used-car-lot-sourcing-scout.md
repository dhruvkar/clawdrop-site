---
layout: playbook.njk
title: "The Used Car Lot That Out-Sources a 4-Person Buying Team With One Agent"
description: "Independent used car dealers lose every good auction lane and Marketplace deal to the big-box chains by 9 AM. This build scans Manheim, Copart, Craigslist, and Facebook Marketplace around the clock, scores every listing against KBB and your last 90 days of sales, and pings you the moment a real margin opportunity shows up."
date: 2026-05-13
difficulty: Beginner
cost: "$20-60/month (Claude subscription + scraper credits)"
timeToSetup: "An afternoon for the basics, a week to tune the margin model"
originalSource: "https://bsky.app/profile/openclawautomates.bsky.social"
originalAuthor: "openclawautomates (Bluesky)"
permalink: /playbooks/used-car-lot-sourcing-scout/
tags:
  - small-business
  - smb
  - used-car
  - auto-dealer
  - dealership
  - sourcing
  - scraping
  - margin
---

## Tools

- [**OpenClaw**](#aff-openclaw): the always-on agent. Runs your scanners, your scorer, and the alert pipeline.
- [**Claude**](#aff-claude): the model that reads each listing, interprets the photos, and writes the seller outreach.
- [**Apify**](#aff-apify) or [**Scrapfly**](#aff-scrapfly): the scrapers. Pull listings from Craigslist, Facebook Marketplace, Cars.com, AutoTrader.
- [**Manheim API**](#aff-manheim) or [**Copart**](#aff-copart): auction lane access if you have a dealer license.
- [**Telegram**](#aff-telegram): how the agent pings you the moment a deal hits.
- [**Google Sheets**](#aff-google-sheets): your buy list, your last 90 days of sales, the scoring rules.
- [**Twilio**](#aff-twilio): SMS the private seller before three other dealers do.

## What You'll Build

An always-on sourcing agent that does the job of a small buying team. It watches every listing channel you'd otherwise check by hand. Manheim. Copart. Craigslist. Facebook Marketplace. Cars.com. AutoTrader.

For every new listing, it scores the buy. Compares the asking price to Kelley Blue Book wholesale. Pulls comparable retail prices from your local market. Cross-references the trim and color against what's actually been moving off your lot in the last 90 days. Spits out an estimated margin and a confidence score.

If the math works, you get pinged on Telegram inside of 60 seconds. If it doesn't, the listing gets archived without you ever seeing it.

When the listing is from a private seller, the agent drafts the first outreach message in your voice and asks you to approve before sending. Two taps. Message goes out from your number. You are the first dealer in that seller's inbox, every single time.

This is the build that lets a one-rooftop independent dealer source like a chain that has four full-time buyers.

## The 5 AM Problem Every Independent Dealer Has

You set your alarm for 5:30. You check Manheim before your coffee finishes. You check Marketplace, you check the local Craigslist, you check the three private-seller groups. You used to do this for two hours a day. Now you do it for three because the inventory is tighter and the good cars sell in eight minutes.

By 9 AM, the chains have already swept the best lanes. Their software flagged every listing the moment it hit. Their buyer was on the phone with the seller before you finished your toast. The deal you would have made a $3,400 margin on is on a Carvana truck headed to Atlanta.

You are not getting outworked. You are getting out-watched. The big lots have software watching every channel. You have two eyes and a coffee mug.

That gap is the entire game. Close it and you stay in business. Don't and you become a service shop with a few cars out front.

## How It Works

Three layers, each adds margin on top of the last.

### Layer 1: The 24/7 Scanner

The agent runs a cron job every 90 seconds across every listing source you care about. Manheim if you have lane access. Copart for salvage and lease returns. Cars.com and AutoTrader for off-lease vehicles. Craigslist and Facebook Marketplace for private sellers.

Each new listing gets normalized into a single row: year, make, model, trim, miles, VIN if available, asking price, location, seller type, photo URLs, listing URL.

You no longer manually visit any of these sites. The agent does. You only see the listings that already passed your filter.

### Layer 2: The Margin Scorer

This is where it stops being a scraper and becomes a buyer.

For every normalized listing, the agent does three things:

**1. Pull the wholesale anchor.** What is this car worth at auction in your region? The agent looks up KBB wholesale, NADA average trade-in, and the last 60 days of auction comps for the same year/make/model/trim from your auction history.

**2. Pull the retail anchor.** What is this car selling for retail in your zip? The agent searches Cars.com, AutoTrader, and your three biggest local competitors' inventory pages for the same vehicle. Pulls the median retail price after 30 days on lot.

**3. Cross-reference against your turn data.** This is the killer feature. You drop your last 90 days of sales into a Google Sheet. The agent learns what actually moves on your lot. Maybe Civics under $15K sell in 8 days at full margin. Maybe Tahoes sit for 45 days and get marked down twice. The agent weights margin by turn velocity for your specific lot.

The output for each listing is one line:

> 2021 Honda Civic LX, 41K miles, $14,200 ask. Wholesale: $13,800. Retail (your zip, median 30-day): $17,900. Your turn rate on Civics last 90: 9 days at full margin. Estimated profit after recon: $2,950. Confidence: 82%. **BUY.**

Cars that don't clear your minimum margin (you set it, say $2,000 net) never reach you. Cars that don't fit your turn profile (you don't move sedans, period) never reach you.

### Layer 3: The First-Mover Outreach

For private-seller listings, speed wins. The first dealer in the seller's inbox closes 60-70% of the time, even at not-the-best prices, because most private sellers want the headache to end.

When a listing scores BUY, the agent drafts the first outreach. Pulls your dealer name, your standard offer pattern, and a soft hook. Pings you on Telegram with the draft:

> 2021 Civic LX, $14,200 ask, estimated $2,950 profit. Seller is in Cedar Park. Here's my draft message:
>
> "Hi, saw your Civic listing. I run [Dealer Name] in [City]. We can do a cash offer today, hassle-free pickup, no haggling about condition. Would $13,500 work? Happy to come look in the next hour."
>
> Tap Send to text it from your business line, or Edit to adjust.

Two taps. The seller's first message of the day is from you. From a business that takes the headache away. Before any other dealer has even seen the listing.

This is the part that closes deals you used to lose to a chain.

## The Setup (One Afternoon for the Basics)

**What you need:**
- OpenClaw running (managed install if you're not technical)
- Claude Pro or Max subscription
- An Apify or Scrapfly account for the public scrapers ($20-50/month depending on volume)
- Manheim and/or Copart lane access if you have a dealer license (no extra cost beyond what you already pay)
- 90 days of your sales history in a Google Sheet (VIN, sale price, recon cost, days on lot, gross)
- Your buy box: what years, what makes, what mileage caps, what minimum gross
- A business SMS-capable number through Twilio for seller outreach (separate from your personal line)

**Step 1: Define your buy box.** A single doc with your filters. Year range. Mileage cap. Excluded makes (sedans don't move on your lot? exclude them). Minimum estimated net margin. Maximum drive-time radius. The agent reads from this.

**Step 2: Drop your sales history.** Your last 90 days of sold cars in a Google Sheet, one row per car. The agent learns your turn velocity from this. This is the one piece most dealers skip and most regret.

**Step 3: Wire up the scanners.** Apify or Scrapfly handles Craigslist, FB Marketplace, Cars.com, AutoTrader. If you have Manheim or Copart lane access, the agent connects via your existing dealer credentials. Start with two channels for the first week. Add more once you trust the alerts.

**Step 4: Tune the scorer for a week.** First week, leave it in draft mode. Every BUY alert lands on Telegram with the full breakdown. You either approve or kill. The agent learns from every kill. By week two, the noise drops by 80%.

**Step 5: Turn on the outreach drafts.** Once you trust the margin math, flip the private-seller outreach to draft-and-send mode. You still tap approve every time, you just stop having to write the messages.

**Step 6: Set the alert thresholds.** Maybe only "high confidence" buys ping you immediately. "Medium confidence" goes into a daily 7 AM digest. "Pass" never shows up. Most dealers settle into this rhythm after the first month.

## What Changes After Setup

**Day 1:** You sit down with coffee instead of a phone in your hand. The first three alerts are bad ones. You kill them. The fourth one is a real buy. You text the seller from your couch.

**Week 1:** You realize you stopped opening Manheim at 5:30 AM. The agent caught more good lane vehicles than you used to find in two hours of manual scanning, because it never blinks.

**Month 1:** Your sourcing time drops from 15 hours a week to two. Those 13 hours go to reconditioning, photography, and customer follow-up. Your average days-on-lot drops because the rest of your operation finally has bandwidth.

**Month 3:** You buy a second rooftop, or you don't, but either way your acquisitions per month are up 20-40%. Margin per car is up because you're catching deals at the right price, not the chase price.

**Month 6:** You realize you've quietly become the dealer that gets a private seller's first text every time, in your market. Other dealers wonder how you keep landing the clean low-mileage units.

## Where This Sits in Your Operation

Most independent lots run on the buying instinct of one person, usually the owner. That person becomes the bottleneck. They source in the morning, then can't do anything else until that part is done. They source on weekends when their family wants them. They burn out.

This rebuilds the function as a system:

```
Every listing source you'd manually check
        |
        v
The Scanner (running 24/7, every 90 seconds)
        |
        v
The Scorer (KBB + local retail + your turn data)
        |
        v
Filter: passes your margin bar?
        |
        v
[YES] Ping you on Telegram with draft outreach
[NO]  Archive silently, never bothers you
        |
        v
You: tap approve, tap edit, or kill
        |
        v
Seller's first message of the day = from you
```

The owner becomes the closer, not the scanner. That is the unlock.

## The Numbers Worth Caring About

**Time reclaimed:** Independent dealers typically spend 2-3 hours/day manually scanning channels. That's 60-90 hours/month. This build cuts that to 15-30 minutes of decision-making per day.

**Acquisition pace:** First-mover outreach to private sellers wins 60-70% of the time vs. 20-30% for the third or fourth dealer in. Even if your offer is $300-500 below the highest, you win because you were first.

**Margin per car:** Cars bought at wholesale price plus a real margin bar outperform chase-price acquisitions by $1,500-3,500 net per unit. Across 8-15 acquisitions a month, that's the difference between profitable and break-even.

**Cost:** $20-60/month all-in. A part-time scout costs $15-20/hour and only works business hours. The agent works 24/7 and never asks for a raise.

**Coverage:** A scout watches what they're told to watch. The agent watches everywhere, equally, all the time. Most missed deals at small lots come from "we just don't watch that channel."

## Beyond Used Car Lots

The same pattern works for any operator where sourcing happens across multiple listing channels and speed matters:

**Boat and RV dealers.** Same auction lanes, same private-seller-on-Marketplace dynamic, same margin math.

**Motorcycle dealers.** Smaller dollar amounts, faster turn, but the multi-channel scanning problem is identical.

**Heavy equipment and commercial truck dealers.** Different sources (Ritchie Bros, IronPlanet, MachineryTrader) but exactly the same workflow underneath.

**Wholesale flippers.** People who buy and resell consumer goods at scale: appliances, furniture, sneakers, watches. Wherever there's an active listing economy and a margin math, this pattern lifts the operator.

**Estate sale liquidators.** Scan local estate sale listings, score by category, alert when something matches.

**Real estate wholesalers.** Different vertical entirely, but the build pattern is the same: watch listing sources, score against a margin model, ping when the math works. See the deal-hunter version below.

The common thread: any operator whose entire upside depends on watching every channel and being first to act on the right listings. Used cars is just the cleanest example.

## Gotchas and Tips

- **Your 90-day sales history is the asset.** Most dealers skip this step because it's tedious. The agent's margin model is only as good as the turn data you feed it. Spend an evening building this sheet. It is the single highest-leverage hour you will spend on this build.
- **Start with two channels, not all of them.** Most dealers turn on every scraper on day one and get buried in alerts. Pick the two channels where your competition is weakest (usually Marketplace and a regional Craigslist) and master those first. Add channels as you trust the system.
- **Margin floor before confidence floor.** Tune your minimum estimated net margin first. Only after that filter is locked in should you tune the confidence threshold. People who tune them together end up with either too many alerts or none.
- **Keep outreach drafts short.** Three sentences max. Greeting, the offer in plain language, a soft close. Long messages signal a dealer in a hurry to overpay. Short messages signal a serious buyer.
- **Have a separate business SMS line.** Don't use your personal cell for first-message outreach. Twilio with a local area code costs about $1/month and keeps your two lives separate.
- **Watch the alerts the first month.** Every single one. The agent will get it wrong in your specific market for the first few weeks. Each kill teaches it. By month two you can drop to spot checks.
- **Tell the agent your no-go list explicitly.** "Never alert me on Nissan Altimas from 2013-2017. Never alert me on anything with a salvage title from Texas. Never alert me on anything outside a 200-mile radius of [city]." That instruction lives in memory and saves you noise forever.
- **Resist the urge to compete on price.** First-mover outreach already wins 60-70% of the time at fair offers. You don't need to bid up. Stick to your margin bar. The build only works if you do.

---

## Keep Reading

- **[Two Prompts and Your HubSpot Just Replaced Your Enrichment Tool](/playbooks/hubspot-research-agent/)**: The same "agent does the research before a human ever opens a browser" pattern, applied to outbound sales instead of sourcing.
- **[The Freelancer Who Stopped Working Sundays Because His AI Agent Runs the Back Office](/playbooks/freelancer-invoice-chaser/)**: Same principal-is-the-bottleneck problem, different lever (admin instead of sourcing).
- **[The Four-Piece AI Front Desk Every SMB Should Have Running by Friday](/playbooks/ai-front-desk/)**: When you're ready to wire up the customer-facing side of the operation, not just the sourcing side.
