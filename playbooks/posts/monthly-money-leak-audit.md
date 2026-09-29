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

## What You'll Build

A monthly check on where your money quietly went.

It looks for three things.

Invoices past due that nobody chased.

Recurring charges for tools nobody opened.

And what each client really pays you per hour, once you count the late payments, the revisions and the extra work.

You get one short note on the first of the month. Each leak has a dollar figure and a next step.

## The Story

An owner on r/smallbusiness did the uncomfortable version by hand. Every transaction, invoice and subscription from the last 12 months.

> not to do my taxes, but to figure out where money was quietly disappearing.

Here's what they found.

Forgotten invoices:

> Unpaid invoices I forgot to follow up on: ~$4,200. Three invoices. Just... sitting there. One was 90+ days overdue and I had completely forgotten about it.

Dead subscriptions:

> Subscriptions I wasn't using: $1,400/year across 2 tools I signed up for, used for a month, and never cancelled.

The client they liked most:

> My "best" client was actually my worst: After factoring in late payments, endless revisions, and scope creep, my effective hourly rate with them was 40% below what I charge.

And their prices. They figured they were about 25% under market rates for their service and location. Across a year of billable hours, they put that at roughly $8,000.

Their total:

> somewhere around $14,000 in preventable losses.

The line that matters most for this playbook:

> I use accounting software. I had all the data. But none of my tools ever surfaced any of this.

Worth knowing: the author said they had started building a tool to sell for this exact analysis. Commenters called the post out as market research and flagged it as likely AI-written. The numbers are theirs, as posted. Nobody checked them. The audit itself is sound whoever wrote it up.

## Why Once a Year Is Too Late

Each of these leaks gets worse with time.

An invoice at 30 days is a polite reminder. At 90 days you had forgotten it existed.

A tool you stopped using in March bills you through December.

A client who drifts from profitable to underwater does it slowly. One revision round at a time. You never feel the moment it flipped.

A yearly audit finds all of it after the money is gone. A monthly one finds it while you can still fix it.

## How to Run It

**Step 1. Get the data out.** From QuickBooks or Xero, export open invoices, the month's bank and card transactions, and payments received with their dates. If you track time, export hours by client. A CSV dropped in a folder is enough to start.

**Step 2. Set your standard rate.** One number in the sheet. What you charge per hour, or what a project is supposed to earn per hour. Everything gets measured against it.

**Step 3. Overdue invoices.** The agent lists every unpaid invoice by age. Anything past your terms gets flagged with the amount and the client. Anything past 60 days goes to the top.

**Step 4. Recurring charges.** It finds anything that bills on a repeat. Then it asks you once per tool: still using this? Your answer goes in the sheet. Next month it only asks about new ones. Anything you marked "not using" that still charges gets flagged again.

**Step 5. The true rate per client.** For each client: money actually received, divided by hours actually spent. It notes how late they paid on average and how many hours went to work outside the original quote. Then it compares the result to your standard rate.

**Step 6. The note.** Something like: "3 invoices past due, $X total, oldest 74 days. 1 new recurring charge you haven't confirmed. Client B earned you Y% under your rate this quarter. Most of the gap is revision hours." Every line gets a suggested action. Send the reminder. Cancel the tool. Reprice the next project.

## The Business Angle

The accounting software keeps the records. It never tells you which records are a problem.

This is the part a good bookkeeper or fractional CFO does when you pay them to look. Most small businesses don't pay anyone to look.

The per-client rate is the piece people never see. Revenue by client is in every report. Revenue per hour by client is in none of them, because the hours live somewhere else.

Once you know a client runs 40% under your rate, you have three choices. Reprice them. Tighten the scope. Or let them go. You can't make any of those calls on a number you have never seen.

## Who Should Steal This Idea

Freelancers and small agencies who bill by the project and track hours loosely.

Service businesses with a handful of big clients and one person doing the invoicing.

Anyone who has ever found an invoice they forgot to send, or a charge for a tool they forgot they had.

Bookkeepers. Run it across your clients and hand each one a monthly leak report.

## How Hard Is It

Beginner, if you drop the exports in a folder each month. A few clicks in your accounting software.

A step harder if you want it connected straight to QuickBooks or Xero. That part is a one-time setup.

Cost: $20 a month for Claude. The accounting software you already have.

The hard part is the hours. No time tracking, no per-client rate. Everything else works without it.

## Gotchas and Tips

**Start the time log now.** Even rough weekly hours per client in the sheet is enough. Three months in, the client numbers start to mean something.

**The agent flags. You send.** Let it draft the overdue reminder. You approve it. A payment reminder in the wrong tone to your biggest client costs more than the invoice.

**Market rate is the one piece it can't do well.** The author's biggest number, the $8,000, came from comparing their price to the market. An agent guessing at market rates for your trade and your town will be confidently wrong. Get that number from people in your trade, then give it to the agent as a fixed input.

**Confirm subscriptions once.** "Is this used?" is a question only you can answer. Answer it once per tool and the agent remembers.

**Look at trends, not one month.** One slow-paying month from a good client is noise. Three in a row is a pattern. Have the report show the last three months side by side.

**Don't chase the total.** The $14,000 headline was four different problems. Fix the one with the next action you can take this week.

Which leak would you bet is biggest in your business right now?

## Keep Reading

- [He Lost a Client to a Missed Follow-Up Email. Then He Stopped Doing Follow-Ups.](/playbooks/freelancer-invoice-chaser/) What to do once the audit finds the overdue invoices.
- [He Quoted 20 Hours. He Worked 43. He Got Paid for 20.](/playbooks/scope-creep-change-order-agent/) Stop the per-client rate from sliding in the first place.
- [Tell Claude to Cancel Your Subscriptions. It Never Falls for the 'Wait, 50% Off' Screen.](/playbooks/subscription-cancellation-agent/) The cancellation step for the tools it flags.
