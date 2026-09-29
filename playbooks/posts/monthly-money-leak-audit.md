---
layout: playbook.njk
title: "Their Accounting Software Had All the Data. It Never Mentioned the $14,000."
description: "One owner went through a year of invoices, transactions and subscriptions by hand and found about $14,000 in preventable losses. An agent can run the same audit every month and name the leak while it is still small."
date: 2026-09-28
difficulty: Beginner
cost: "$20/mo. Claude plus the accounting software you already pay for."
timeToSetup: "An afternoon to set up. A month or two before you trust the client numbers."
originalSource: "https://www.reddit.com/r/smallbusiness/comments/1rf8vq3/i_calculated_how_much_money_my_small_business/"
originalAuthor: "u/Both_Government831 (r/smallbusiness)"
issueNumber: 31
permalink: /playbooks/monthly-money-leak-audit/
tags:
  - accounts-receivable
  - invoicing
  - subscriptions
  - client-management
  - pricing
  - bookkeeping
  - small-business
---

## Tools

- [**Claude**](#aff-claude): reads the month's invoices, charges and hours, and writes the leak report in plain dollars
- [**OpenClaw**](#aff-openclaw): runs the audit on the first of every month so nobody has to remember to
- [**QuickBooks**](#aff-quickbooks) or [**Xero**](#aff-xero): where your invoices and bank feed already live. The agent reads an export or connects directly
- [**Google Sheets**](#aff-google-sheets): hours per client, your standard rate, and the running list of every leak it has flagged
- [**Telegram**](#aff-telegram): where the report lands, so you read it on your phone

## What you'll build

A monthly check on where your money quietly went.

It looks for overdue invoices nobody chased and recurring charges on tools nobody opened.
It also works out what each client really pays you per hour, once you count the late payments, the revisions and the extra work.

On the first of the month you get one short note.
Each leak in it has a dollar figure and a next step.

## The story

An owner on r/smallbusiness did the uncomfortable version by hand.
They went through every transaction, invoice and subscription from the last 12 months.

> not to do my taxes, but to figure out where money was quietly disappearing.

Here's what they found.

Forgotten invoices:

> Unpaid invoices I forgot to follow up on: ~$4,200. Three invoices. Just... sitting there. One was 90+ days overdue and I had completely forgotten about it.

Dead subscriptions:

> Subscriptions I wasn't using: $1,400/year across 2 tools I signed up for, used for a month, and never cancelled.

The client they liked most:

> My "best" client was actually my worst: After factoring in late payments, endless revisions, and scope creep, my effective hourly rate with them was 40% below what I charge.

Then their prices.
They figured they were about 25% under market rates for their service and location.
Across a year of billable hours, they put that at roughly $8,000.

Their total:

> somewhere around $14,000 in preventable losses.

And the line this whole playbook hangs on:

> I use accounting software. I had all the data. But none of my tools ever surfaced any of this.

One thing to know about the source.
The author said they'd started building a tool to sell for this exact analysis.
Commenters called the post market research and flagged it as likely AI-written.
The numbers are theirs, as posted, and nobody checked them.
The audit is sound whoever wrote it up.

## Why once a year is too late

Every one of these leaks grows while you're not looking.

At 30 days, an overdue invoice needs one polite email.
The one in this story passed 90 days, and its owner forgot it existed.

A tool you stopped using in March keeps billing you through December.

A client slides from profitable to underwater one revision round at a time.
You never feel the moment it flipped.

**Run the audit every month, while the leak is still small enough to fix.**

## How to run it

### Step 1. Get the data out

From QuickBooks or Xero, export your open invoices, the month's bank and card transactions, and payments received with their dates.
If you track time, export hours by client too.
A CSV dropped in a folder is enough to start.

### Step 2. Set your standard rate

It's one number in the sheet: what you charge per hour, or what a project is supposed to earn per hour.
Everything gets measured against it.

### Step 3. Overdue invoices

The agent lists every unpaid invoice by age.
Anything past your terms gets flagged with the amount and the client.
Anything past 60 days goes to the top.

### Step 4. Recurring charges

It finds anything that bills on a repeat.
Then it asks you once per tool: still using this?
Your answer goes in the sheet, and next month it only asks about the new ones.
Anything you marked "not using" that still charges gets flagged again.

### Step 5. The true rate per client

For each client, it takes money actually received and divides by hours actually spent.
It notes how late they paid on average and how many hours went to work outside the original quote.
Then it compares the result to your standard rate.

### Step 6. The note

Something like this:

"3 invoices past due, $X total, oldest 74 days. 1 new recurring charge you haven't confirmed. Client B earned you Y% under your rate this quarter. Most of the gap is revision hours."

Every line comes with a suggested action, like sending the reminder or cancelling the tool.
For Client B, it's repricing the next project.

## The business angle

Your accounting software keeps every record and flags none of them.

Spotting the problem ones is what a good bookkeeper or fractional CFO does when you pay them to look.
Most small businesses don't pay anyone to look.

The per-client rate is the piece people never see.
Every report shows revenue by client.
Revenue per hour needs the hours, and the hours live somewhere else, so no report has it.

Say a client runs 40% under your rate.
You can reprice them.
You can tighten the scope.
Or you can let them go.
You can't make any of those calls on a number you've never seen.

## Who should steal this idea

Freelancers and small agencies who bill by the project and track hours loosely.

Service businesses with a handful of big clients and one person doing the invoicing.

Anyone who has ever found an invoice they forgot to send, or a charge for a tool they forgot they had.

Bookkeepers, too.
Run it across your clients and hand each one a monthly leak report.

## How hard is it

It's a beginner build if you drop the exports in a folder each month.
That's a few clicks in your accounting software.

It's a step harder if you want it connected straight to QuickBooks or Xero.
That part is a one-time setup.

It costs $20 a month for Claude, plus the accounting software you already have.

The hard part is the hours.
No time tracking means no per-client rate.
Everything else works without it.

## Gotchas and tips

### Start the time log now

Even rough weekly hours per client in the sheet is enough.
Three months in, the client numbers start to mean something.

### Let the agent draft, and you send

Have it write the overdue reminder, then you approve it.
A payment reminder in the wrong tone to your biggest client costs more than the invoice.

### Market rate is the one piece it can't do well

The author's biggest number, the $8,000, came from comparing their price to the market.
An agent guessing at market rates for your trade and your town will be confidently wrong.
Get that number from people in your trade, then give it to the agent as a fixed input.

### Confirm subscriptions once

"Is this used?" is a question only you can answer.
Answer it once per tool and the agent remembers.

### Watch three months side by side

One slow-paying month from a good client is noise.
When it happens three months running, you've got a pattern.
Have the report show the last three months next to each other.

### Don't chase the total

The $14,000 headline was four different problems.
Fix the one with an action you can take this week.

A yearly audit tells you what you lost.
A monthly one tells you what to fix.

## Keep Reading

- [He Lost a Client to a Missed Follow-Up Email. Then He Stopped Doing Follow-Ups.](/playbooks/freelancer-invoice-chaser/) What to do once the audit finds the overdue invoices.
- [He Quoted 20 Hours. He Worked 43. He Got Paid for 20.](/playbooks/scope-creep-change-order-agent/) Stop the per-client rate from sliding in the first place.
- [Tell Claude to Cancel Your Subscriptions. It Never Falls for the 'Wait, 50% Off' Screen.](/playbooks/subscription-cancellation-agent/) The cancellation step for the tools it flags.
