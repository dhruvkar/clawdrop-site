---
layout: playbook.njk
title: "Watch a Website Build Itself From a Google Maps Pin"
description: "Generate a website from Google Maps in one pass. Point the agent at a business listing, scrape it with Firecrawl, and Claude Code builds a finished local-business site."
date: 2026-06-10
difficulty: Beginner-Intermediate
cost: "Low. A few Firecrawl scraping credits per listing plus Claude usage. No designer, no developer."
timeToSetup: "An afternoon"
originalSource: "https://www.youtube.com/watch?v=ACM_l3z05do"
originalAuthor: "Tom Crawshaw (The AI Architects)"
tags:
  - websites
  - local-business
  - web-design
  - firecrawl
  - claude-code
  - google-maps
  - agency
  - automation
  - lead-generation
permalink: /playbooks/website-from-google-maps/
---

## Tools

- [**Claude Code**](#aff-claude-code): the agent that reads the scraped listing and writes the whole site in one pass, from layout to copy.
- [**Firecrawl**](#aff-firecrawl): scrapes the Google Maps listing and hands back clean, structured data the agent can build from.
- [**Google Maps**](#aff-google-maps): the source. Every detail the site needs is already sitting on the business's listing.

## What You'll Build

A finished local-business website, built from nothing but a Google Maps pin.

Tom Crawshaw, who teaches this on his channel The AI Architects, walks through it as one of five practical Claude Code uses. The idea is almost insultingly simple. A huge number of local businesses, the plumber, the salon, the taco shop, have a Google Maps listing and no real website. Everything a basic site needs is already on that listing: the name, the address, the hours, the photos, the reviews, the phone number.

So you scrape the listing with Firecrawl, hand the result to Claude Code, and ask for a website. The agent reads the data and builds the whole thing in a single pass. Layout, sections, copy, the photos in the right places, a click-to-call button, an embedded map, the hours laid out cleanly. You point, it builds.

You are not building one taco shop's website. You are building the machine that turns any Maps listing into a site in an afternoon, whether that is your own business or a hundred prospects you want to pitch.

## Why This Works

A local-business website is a solved problem that nobody told the local businesses about. They all need the same eight things: who you are, what you do, where you are, when you are open, how to reach you, a few photos, some proof, and a way to take action. The variation between a barber and a bakery is small. That sameness is exactly what makes it automatable.

The reason it has stayed expensive is that the work was glued to a human. Someone had to interview the owner, collect the photos, copy the hours, write the blurbs, and assemble it. That is a multi-week, multi-thousand-dollar project at an agency, mostly spent gathering information the business already published on Google.

The Maps listing collapses that. The information gathering is done. Firecrawl turns the public listing into structured data, and Claude Code does the assembly that used to need a designer and a developer. The afternoon you spend is the afternoon, not the first of several weeks.

And it scales sideways. The same prompt that builds your site builds a prospect's site. That is the part agencies should not miss.

## Prerequisites

- A Claude Code subscription or API access.
- A Firecrawl account and API key for the scraping.
- The Google Maps listing URL for the business you want a site for.
- Somewhere to put the finished site: a domain and a host. The build is free, going live is not (see Gotchas).
- A few minutes to review the output before anyone sees it.

## Step-by-Step Setup

### Step 1: Grab the Google Maps Listing

Find the business on Google Maps and copy the listing URL. This is your whole input. The richer the listing, the richer the site, so check that the hours, photos, and reviews are actually filled in before you start.

### Step 2: Scrape It With Firecrawl

Point Firecrawl at the listing and let it pull the data: the business name, address, phone, hours, the photo URLs, and the reviews. Firecrawl hands back clean, structured content instead of a messy page of HTML. Connect it to Claude Code directly so the agent can call it, or run the scrape and drop the result into your project folder. Either way, the goal is the same: turn a public listing into data the agent can read.

### Step 3: Hand the Data to Claude Code and Ask for a Site

This is the one-shot. Open Claude Code in the project folder and give it a single, clear prompt: here is the scraped listing, build a complete one-page website for this local business. Tell it what you want on the page so it does not guess. A hero with the business name and a tagline, an about section, the services, the hours, a photo gallery from the listing images, a few of the best reviews as testimonials, a click-to-call button, and an embedded map of the address.

The agent reads the data and writes the whole site. You watch it build.

### Step 4: Review and Refine in Plain English

The first pass gets you most of the way. Now you adjust it the way you would talk to a designer, except the turnaround is seconds. "Make the header darker." "Move the reviews above the gallery." "Write a warmer about section." "Add a contact form." Claude Code edits the live files and you refresh. This is where a generic build becomes the business's build.

### Step 5: Put It Online

A site on your laptop helps no one. Buy or point a domain, push the files to a host, and you are live. For a static one-page site the hosting is cheap or free. This is the only step the agent does not do for you, and it is the one that turns the demo into a real asset.

## Adapting This for Your Business

The build is the same every time. Change the listing, get a different site. That makes it useful in two very different ways.

- **Agencies and freelancers selling websites.** This is the real play. Find local businesses with no site or an ugly one, scrape their Maps listing, and build a site in an afternoon. Pitch it as a finished thing they can see, not a proposal they have to imagine. Even for businesses that have a site, a one-afternoon redesign built from their own listing is a brutally effective way to win the redesign job. You go from quoting weeks to delivering before the call ends.
- **Solo owners with no website.** If you run the shop and have a Maps listing but never got around to a site, this is your afternoon. You do not need to hire anyone or learn to code. Scrape your own listing and build the thing you have been putting off for two years.
- **SEO and local-marketing shops.** A fast, clean site per client becomes a service line, not a project. Spin up sites at volume and spend your real time on the marketing that follows.
- **Multi-location operators.** Franchisees and chains can generate a consistent location page per listing, each one accurate to that store's hours, photos, and reviews, without rebuilding from scratch each time.

## Gotchas and Tips

- **Scraped data is only as good as the listing.** If the hours are wrong on Google, they are wrong on your site. Read the scraped data before you build, and fix anything stale at the source or in the prompt.
- **Maps listings vary wildly in completeness.** Some have ten photos and forty reviews, some have a name and a phone number. A thin listing builds a thin site. Set expectations accordingly, and be ready to ask the owner for a few photos and a paragraph.
- **Photos have owners.** Images on a Maps listing may have been uploaded by customers or third parties, and you do not automatically have the right to republish them on a commercial site. For your own business, use your own photos. For a client, confirm rights or swap in licensed or owner-supplied images before going live.
- **Reviews belong to the platform and the reviewer.** Pulling a few testimonials onto a site is common, but lifting Google review content wholesale can run into Google's terms and the reviewer's words. Keep it light, attribute carefully, and when in doubt ask the owner.
- **You still need a domain and a host.** The agent builds the site for free. It does not buy the domain, set up the DNS, or keep the server running. Budget for that small recurring cost.
- **Always review before publishing.** One-shot does not mean unchecked. The agent can invent a tagline, misread an address, or place a section oddly. Read the whole page, click the call button, check the map pin, and fix anything off before it represents a real business.

## What This Replaces

Before this, getting a local business online looked like one of these:

- **An agency project:** a discovery call, an information-gathering phase, a designer, a developer, revisions, and a bill that ran from a few thousand into five figures, spread across weeks.
- **A DIY website builder:** cheaper, but it traded the money for your nights, dragging boxes around a template and writing your own copy until you gave up halfway.

After this, the same finished site comes out of an afternoon. The information gathering is replaced by a scrape. The designer and developer line items are replaced by one Claude Code pass. The weeks are replaced by an afternoon. For an agency, that is the difference between selling a project and selling a result. For an owner, it is the difference between a site and another year of meaning to get one.

---

## Keep Reading

- **[Stop Paying $10,000 for a Custom Website](/playbooks/stop-paying-for-custom-websites/)**: the same "you do not need an agency to get a site" argument, taken further into custom builds.
- **[AI Finds Leads, Builds Demo Sites, and Cold Calls Them For You](/playbooks/ai-lead-gen-pipeline/)**: turn this site-builder into outreach by generating demo sites for prospects and pitching them automatically.
- **[The One-Person Agency: Charge Agency Rates as a Solo Operator](/playbooks/one-person-agency/)**: the business model that makes a one-afternoon website worth real money.
