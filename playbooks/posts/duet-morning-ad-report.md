---
layout: playbook.njk
title: "A freelance marketer's ad report is ready at 6am"
description: "One ads freelancer covers four ad accounts across two companies in 2-3 hours a day. Claude Duet reads the accounts every morning. The freelancer still does all the clicking."
date: 2026-11-10
difficulty: Intermediate
cost: "A Claude Pro or Max plan. Duet is included, but it eats a big share of your usage."
timeToSetup: "An afternoon to connect the accounts and write the priorities note. Then weeks of trimming what Duet checks."
originalSource: "https://www.reddit.com/r/ClaudeAI/comments/1xp0kku/notes_on_claude_duet/"
originalAuthor: "u/starfoxhound (r/ClaudeAI)"
issueNumber: 35
permalink: /playbooks/duet-morning-ad-report/
tags:
  - claude-duet
  - claude
  - meta-ads
  - google-ads
  - paid-ads
  - marketing
  - reporting
  - small-business
  - smb
---

## Tools

- [**Claude Duet**](#aff-claude-duet): Anthropic's new app where Claude works on its own computer in the cloud, messages you first, and asks before it acts
- [**Claude Desktop**](#aff-claude-desktop): the regular Claude app, used here to plan the day
- [**Claude Code**](#aff-claude-code): Claude running on your own computer, used here to write up the day
- [**Meta Ads**](#aff-meta-ads): Facebook and Instagram ads
- [**Google Ads**](#aff-google-ads): search and display ads
- [**Windsor.ai**](#aff-windsor): a service that pulls marketing numbers from many platforms into one place
- [**Slack**](#aff-slack): team chat
- [**Google Drive**](#aff-google-drive): where the priorities note lives overnight

## What you'll build

A morning ad report that writes itself.

At 6am, Claude reads every ad account, plus Slack and email.
It checks what it finds against your priorities.
You plan the day with it.
You do the work yourself.
At night, it updates your priorities for tomorrow.

## The story

The poster is a freelance marketing and advertising person.

They work for two companies, each running ads on two channels.

That's four ad accounts to watch, plus two companies' worth of Slack and email.

Here's their week with Claude Duet:

> 6am Claude duet pulls meta ads MCP, Windsor MCP, google ads MCP, my slack, and my email.

An "MCP" is just a connector.
It lets Duet read your ad accounts the way it would read a document.

> It reports what it finds in relation to the STATE.md and the priority items I'm working on

STATE.md is a one-page running note of what matters right now.
So the morning report reads like this:
"Here's what changed, measured against what you said you care about."

## What Claude Duet is

Anthropic's new app.

Claude works on its own computer in the cloud.
It messages you first.
It asks before it acts.

It's a research preview, for US users on the Pro and Max plans.

## Claude never touches the ads

This is the part to copy.

> I execute my tasks (I don't let Claude publish anything since there are paid budgets)

Claude reads the accounts.
Claude helps plan.
The person makes every change.

Real money is on the line, so the clicking stays human.

## The day, start to finish

After the 6am report:

> I share the findings with Claude desktop, we reason through and formulate any modifications to the day's agenda.

Then the work.
Then the wrap-up:

> at the end of the day Claude or Claude CLI in my repo will perform a review and update the STATE.md, which sends to a Google Drive that Claude duet knows to pull from the following morning.

"Claude CLI" means Claude on their own computer.

The note is the memory.
Tonight's update is what tomorrow's report reads.

## The result

> I am capable of performing the work of several marketing people by myself from home with great accuracy, and my days are about 2-3 hours of work at the most, largely just because I'm very careful and thorough.

That's their own estimate. Nobody measured it.
But the shape of it makes sense.
The slow part of paid ads is reading four dashboards and remembering what you were doing.
Duet does the reading.
The note does the remembering.

## How it works

1. Write a one-page priorities note. What you're working on, for which account, and why.
2. Save it to Google Drive so Duet can read it.
3. Connect Duet to your ad accounts, Slack and email. Start with fewer.
4. Have Duet report at 6am, measured against the note.
5. Plan the day with Claude. Make every ad change yourself.
6. At day's end, have Claude update the note for tomorrow.

## The business angle

You're paying someone to watch your ads.

An in-house marketer.
Or a paid-media agency on a monthly retainer.

A lot of that bill is reading dashboards and writing reports.
This setup does that part before anyone's awake.

It doesn't replace the person.
Someone still decides what to change, and someone still does the clicking.

Here, that's one freelancer covering four ad accounts in a short day.

So the question for an owner is simple.
Are you paying for judgment, or for someone to read the dashboard?

## Who should steal this idea

Freelance media buyers and small agencies juggling several clients.

Owners who run their own Meta and Google ads and lose the thread week to week.

Anyone paying a retainer mostly for a weekly report.

## How hard is it

Set it up in an afternoon. Tune it for weeks.

You need to connect each ad account and write the priorities note.
The poster's end-of-day step runs Claude on their own computer, which is a bit more technical.

Cost: a Claude Pro or Max plan.
No new software bill.
The real cost is usage, see below.

## Gotchas and tips

### Duet eats your usage

This is the poster's main warning:

> As you can see, a large part of my usage is coming from it, despite my chats being at opus 5.5 medium or high. Make sure to be careful how many connectors you have set up, and how many automated tasks you allow for.

> Duet is powerful, you'll want to start small and feel it out.

Start with one ad account and one morning report.
Add the next only when you know what it costs you.

### Never let it publish

Read-only on anything with a budget.
The poster drew this line on day one.

### The note is the whole system

Without the priorities note, you get a pile of numbers.
With it, you get "this matters today, and here's why."
Keep it short and update it every day.

### It's a preview

Duet is a research preview, US only, Pro and Max plans.
Expect it to change.

## Keep Reading

- [Claude is bad at spending ad money (so far)](/playbooks/claude-ad-budget-experiment/) What happens when you do let Claude spend the budget.
- [Meta Said 41 Purchases. The Store Said 24. Which Number Are You Spending On?](/playbooks/meta-purchases-vs-real-orders/) Check the numbers before an agent reads them for you.

Who reads your ad dashboards right now?
