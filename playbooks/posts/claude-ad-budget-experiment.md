---
layout: playbook.njk
title: "Claude is bad at spending ad money (so far)"
description: "A web designer gave Claude four ad accounts, $1,700 and one goal: more demo signups. So far the ad spending is bad and not improving."
date: 2026-10-21
difficulty: Advanced
cost: "$1,700 in ad spend in the original test. A Claude subscription. Small AI model fees for the website."
timeToSetup: "A developer's weekend to wire the ad accounts. Then weeks of watching."
originalSource: "https://news.ycombinator.com/item?id=50107586"
originalAuthor: "HamadMalikKhan (Hacker News)"
issueNumber: 33
permalink: /playbooks/claude-ad-budget-experiment/
tags:
  - advertising
  - google-ads
  - websites
  - experiments
  - claude-code
  - small-business
  - smb
---

## Tools

- [**Claude Code**](#aff-claude-code): the agent making the decisions every four hours
- [**Google Ads**](#aff-google-ads), [**X**](#aff-x), [**LinkedIn**](#aff-linkedin), [**Reddit**](#aff-reddit): the four ad accounts it controls
- [**Apify**](#aff-apify): pulls in outside data about visitors
- [**OpenRouter**](#aff-openrouter): one account for many AI models

## What you'll build

An experiment, with a hard spending cap.

One goal, written in a single sentence.

An agent that checks the numbers every few hours and changes the ads and the website on its own.

And a person who reads what it did, every time.

## The story

A web designer posted on Hacker News on October 15.

They build websites for a living, and lately most of that is prompting.

So they went one step further and handed Claude the rest of the job.

Claude got a basic website, full access to the designer's Google, X, LinkedIn and Reddit ad accounts, and a budget.

The whole instruction was one line:

> You have $1,700 and access to these 4 platforms. Do your best to get more people try the demo.

It runs every four hours.

The designer also had it rebuild the website for each visitor.
No two people see the same page.
It reads signals like the visitor's device, the local weather and time of day, and how fast they scroll.

## What it did

The report so far:

> So far it's doing tomfoolery for the most part. Like creating a gazillion pages for SEO (exactly what our interns say every time), trying to go viral by adding share buttons, etc.

The ad spend went worse.

> So far the ad spend is super bad and it's not improving. It tries to correct things too quickly without giving it a time to settle down.

So the designer told it to think long term.

> When I tried to force it to do long horizons, it stopped spending for days because it was too focused on one grand plan.

It swung between jumpy and frozen.

Anyone who has managed a new marketing hire has seen both.

## Why this belongs in a newsletter for owners

Plenty of people are about to give an agent their ad account.

This is one of the few public logs of someone actually doing it with real money.

It tells you exactly what to watch for.

**An agent with an ad budget needs the same rules you'd give a new hire.**

How long to leave a change alone before judging it.
How much it can move in one day.
Who reads the decisions.

This experiment didn't set those rules, and the results show it.

## How it works

1. Pick one number to move. Theirs was demo signups.
2. Set a total budget you'd be fine losing. Theirs was $1,700.
3. Give the agent access to the ad accounts, plus a plain website it's allowed to change.
4. Schedule it to wake up, read the numbers, and act. Theirs runs every four hours.
5. Make it write down every change and why.
6. Read that log yourself. Look for the two failure modes: changing everything too fast, or freezing behind a big plan.

The designer uses Fable 5.1 for the ad decisions and a fast DeepSeek model for building the pages.
That keeps the delay on each page small.

## The business angle

Small businesses pay an agency or a freelancer every month to watch the ad accounts and make changes.

This experiment is the cheapest way to see whether an agent can do that job for your business.

The answer from this test so far: not yet.
It can do the busywork, and it makes beginner mistakes with the money.

That's useful to know before an agency sells you "AI-managed ads."

## Who should steal this idea

Owners who already run their own ads and want to see what an agent would do with a small test budget.

Agencies and freelancers who want to see where their judgment still beats the agent.

## How hard is it

Advanced.

Connecting four ad platforms takes a developer.
The per-visitor website is a second project on its own.
Skip it on your first try.

Cost: whatever test budget you set, plus a Claude subscription and small model fees.

## Gotchas and tips

### Cap the spend at the platform

Set the budget limit inside each ad platform too.
Then a bad decision at 3 a.m. can't spend more than you agreed to.

### Watch the page count

The agent kept making new pages to rank in Google.
One commenter found "the ever-growing list of pages in the website's footer pretty concerning."
Thin pages made in bulk can hurt you with Google.

### Personalizing on device data has a cost

The site reads things like battery level, installed fonts and mouse speed.
A commenter said the post taught them how much their browser had been "oversharing" about them.
Check the privacy rules where your customers live before you copy that part.

### Keep the keys on the server

Another commenter asked where the passwords and keys live.
The designer's answer: on the server, never in the visitor's browser.

### A weekly version

A one-person studio owner in the comments runs something similar.
Every Friday the agent gets one job: come up with a startup idea from watching how the owner builds companies, then build it and put it live.
It built three sites aimed at Google traffic.
The owner's feedback each time was some version of: not enough money in it, and too crowded.
The owner plans to add a weekly marketing plan to that prompt after reading this one.

## Keep Reading

- [An AI Read 60 Days of a Google Ads Account, Then Built the Next Campaign. One Prompt.](/playbooks/google-ads-audit-and-build/) The version where a person approves the campaign before it spends.
- [An Agent That Runs Your Entire Website](/playbooks/wordpress-autopilot-agent/) The website half, without the ad money.
- [Research Your Competitors' Ads and Launch Your Own Campaign on Meta](/playbooks/meta-ads-pipeline/)
