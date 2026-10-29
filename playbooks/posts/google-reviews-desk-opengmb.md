---
layout: playbook.njk
title: "An SEO agency got tired of paying per location. So it built its own Google review desk."
description: "OpenGMB drafts replies to your Google reviews, schedules posts and edits your Maps listing, and nothing goes live until a person approves it. It's free to run yourself or $10 a month hosted. It's also brand new."
date: 2026-10-28
difficulty: Beginner (hosted) / Advanced (self-hosted)
cost: "Hosted: $10 a month as usage credit, with $0.50 of trial credit. Self-hosted: free, plus your own server, Google approval and AI key."
timeToSetup: "Hosted: an afternoon. Self-hosted: a few days, mostly waiting on Google."
originalSource: "https://github.com/synectus/OpenGMB"
originalAuthor: "Synectus"
issueNumber: 34
permalink: /playbooks/google-reviews-desk-opengmb/
tags:
  - google-business-profile
  - reviews
  - local-seo
  - agencies
  - approvals
  - claude-code
  - small-business
  - smb
---

## Tools

- [**OpenGMB**](#aff-opengmb): the review and listing manager. Free to run yourself, or hosted
- [**Google Business Profile**](#aff-google-business-profile): your listing on Google Maps and search
- [**Claude Code**](#aff-claude-code): optional. Lets you run it all by typing requests
- [**Anthropic**](#aff-anthropic): the AI key for drafts, if you run it yourself
- [**DataForSEO**](#aff-dataforseo): optional. Tracks where you rank on the map around your location
- [**Docker**](#aff-docker): only if you host it yourself

## What you'll build

One desk for your Google listing.

Every review from every location in one inbox.
AI drafts the replies.
It schedules your Google posts and edits your hours.
It shows calls, website clicks and direction requests.

And a person approves everything before Google sees it.

## The story

Synectus is an SEO agency.
They manage Google Business Profiles for clinics and local businesses.

> The tools we paid for charged per location, so the bill grew with every client before any work got done.

They also wanted AI to draft the routine replies and posts.
With a person signing off on everything that went live.

So they built it, used it on their own clients, and gave away the core for free.

They released it on October 25.

## What it does

Every location's reviews land in one inbox. Assign a review to someone, add a private note, draft a reply yourself, from a template, or with AI.

You write and schedule Google posts for one location or many. A calendar shows what's scheduled and what went out.

Your listing gets a health score with the checks behind it. Change hours, categories and services across many locations at once. It catches edits made outside the tool.

It reports calls, website clicks, direction requests and views per location, plus reports you can send a client.

It makes tracked links and QR codes to ask happy customers for a review.

## Nothing goes live without a person

This is the part that matters for an owner.

| What | Rule |
| --- | --- |
| Posts and listing edits | Always need a person's approval |
| Replies to 1, 2 and 3 star reviews | Always need a person. Never automatic |
| Replies to 4 and 5 star reviews | Need a person, unless you turn on auto-approve |
| Everything | Checked first for links, emails, phone numbers, offers, bad hours and banned words |

That bad-review rule is in the code itself.
A reply to a review of 3 stars or lower can't be auto-approved, whatever the settings say.

Clinics and law firms get extra checks for names, medical terms and legal ethics.

## Talk to it

Every button in the app is also something an AI assistant can do for you.
That's about 250 actions.

So in Claude Code, you can type requests like these, straight from their README:

> Draft replies for this week's 1- and 2-star reviews at every location, and put them in the approval queue.

> Which locations lost the most calls last month compared with the month before?

> Schedule a holiday hours post for all dental clients for Friday, and send it for approval.

The AI can draft and submit.
It can't approve or publish.

## How it works

**Hosted (the owner's route):**

1. Sign up for the hosted version. You get $0.50 of trial credit, no card.
2. Connect your Google listing.
3. Turn on AI drafts.
4. Approve replies from the inbox.

**Self-hosted (the agency's route):**

1. Run it on your own server with Docker.
2. Try it with their sample Google account first. No keys needed.
3. Apply to Google for Business Profile API access for your own project. Their docs say approval can take a few days.
4. Add your own AI key for drafts, and a DataForSEO account if you want map rank tracking.

## The business angle

Most local businesses either ignore their reviews or pay someone to answer them.

Bad reviews with no reply sit on your Maps listing for every new customer to read.

Here the AI writes the first draft of every reply.
You spend your time on the 1, 2 and 3 star ones, which always need you anyway.

For agencies, the pitch is in the pricing.
The self-hosted version has no per-location fee.
Ten clients or two hundred, same cost.

## Who should steal this idea

Dentists, clinics, restaurants, salons, contractors. Anyone who lives on Google reviews.

Multi-location businesses.

Agencies managing listings for local clients.

## How hard is it

Hosted: easy.
Sign up, connect Google, approve drafts.

Self-hosted: needs someone technical.
A server, Docker, your own Google approval, your own AI key.

Cost: hosted is $10 a month, paid as usage credit.
Self-hosted is free, plus the server and the AI usage.

## Gotchas and tips

### It's brand new

It went public on October 25.
A handful of GitHub stars, no reviews from real users yet.
Try it with the sample data before you trust it with your listing.

### The hosted version is the easy path

Running it yourself means waiting on Google's approval and keeping a server alive.
For one location, that's a lot of work to save $10 a month.

### Review requests, done right

It asks every customer for a review, with no filtering for only happy ones.
Google doesn't allow review gating.

### Not a Google product

Synectus says it isn't affiliated with or endorsed by Google.
It uses Google's official API.

## Keep Reading

- [Watch a Website Build Itself From a Google Maps Pin](/playbooks/website-from-google-maps/) Your Google listing is also the start of your website.
- [The Pages ChatGPT Quotes Have a Question for a Heading and a Table Under It](/playbooks/answer-blocks-for-ai-search/) The other place customers find you now.

When did you last reply to a Google review?
