---
layout: playbook.njk
title: "This Baker Couldn't Learn to Code. So They Told an AI How the Shop Orders Flour, and It Built the Reorder List."
description: "A bakery owner outgrew an Excel inventory sheet when the menu grew. They tried to learn to code and couldn't. Then they described their restock rhythm to a free AI agent in plain English, and it built a tool that says what to order and how much, adjusted for busy weekends."
date: 2026-10-14
difficulty: Beginner
cost: "Free to $20/mo. The owner did it on a free model. Claude works the same way."
timeToSetup: "An afternoon. Most of it goes on writing down how much of each ingredient you use in a week."
originalSource: "https://www.reddit.com/r/EntrepreneurRideAlong/comments/1x1b306/got_tired_of_fighting_excel_over_inventory_so_i/"
originalAuthor: "u/EOJ_me (r/EntrepreneurRideAlong)"
issueNumber: 32
permalink: /playbooks/bakery-reorder-list/
tags:
  - inventory
  - ordering
  - bakery
  - food-service
  - retail
  - spreadsheet-replacement
  - small-business
  - smb
---

## Tools

- [**Claude**](#aff-claude): turns your plain-English description of how you order into a working tool
- [**OpenClaw**](#aff-openclaw): runs it every morning and sends you the order list without you opening anything
- [**Google Sheets**](#aff-google-sheets): where the stock counts and usage live, if you want to keep a sheet underneath
- [**Telegram**](#aff-telegram): where the "order this today" list shows up, and where staff can note what they used
- [**Excel**](#aff-excel): what you're replacing. Export your current sheet and hand it over as the starting point

## What you'll build

A reorder list that does the counting math for you.

You open it and see two things.
Which ingredients need restocking.
And how much to buy.

It knows that not everything gets ordered on the same schedule.
It knows Saturday is busier than Tuesday.
And when a baker burns through more butter than usual, they note it in the tool, and the numbers update for everyone.

Nobody re-enters anything.
Nobody re-checks anyone else's math.

## The story

A bakery owner posted in r/EntrepreneurRideAlong.
They've been open a little over two years.

At first the menu was small.

> Back when I only sold a few breads, I didn't need many ingredients, and tracking inventory in Excel was plenty.

Then they expanded the shop, hired a few more bakers, and added a lot of new breads.
The regulars liked them.
The ordering got worse.

> Every time I order, I have to count the stock and then work out how much to buy. When the shop gets busy I forget to update the spreadsheet, and it keeps getting messier.

> God, it wears me out and eats up so much of my time.

The owner knew exactly what the shop needed:

> I needed a tool that tracks inventory, where I open it and immediately see which ingredients need restocking and how much to buy.

So they tried to learn to code.

> At first I tried to build one by learning to code, and after a long time I still couldn't.

Then they tried an AI agent instead.
The paid ones they looked at felt too expensive for a bakery.
So they used a free one.

That's the whole story.
The owner didn't learn to code.
They described the bakery, and the agent built the tool.

One commenter summed it up:

> two years in is exactly when excel stops scaling

## What the owner actually told it

This is the part worth copying.
The owner didn't ask for "an inventory app."
They explained how the shop works.

**Weekly usage.**
They started by putting together how much of each ingredient the shop goes through in a week.

**The restock rhythm.**

> Flour and sugar are once a week. Butter, heavy cream and cheese are more often. Milk and eggs, basically every day.

That one sentence is most of the logic.
A spreadsheet treats every row the same.
This shop doesn't.

**Busy days.**

> Weekends and holidays are busier, so I feed that in and have it adjust the order quantities.

**The bakers.**

> If we go through a lot of something on a given day, the bakers can note it right in the tool and it records the change. That way everyone in the shop is working off the same numbers.

Usage, rhythm, busy days, who updates it.
Four things any owner already knows by heart.
That's the spec.

## How it works

1. Write down your weekly usage for every ingredient or supply. A rough number is fine. Last month's invoices divided by four gets you close.
2. Group items by how often you reorder. Daily, a few times a week, weekly. Write it in plain words, the way this owner did.
3. Tell the agent your busy days. Weekends, holidays, the farmers market, whatever bumps your volume. Say roughly how much busier they are.
4. Ask it to build a tool where you enter what's on the shelf and it tells you what to order and how much. Have it show its math next to every number.
5. Give your staff a way to log a big day. A button in the tool, or a message in a team chat. "Used 3 extra cases of butter today."
6. Optional: have the agent send the order list every morning at the time you usually place orders. Then you don't open anything. You just read it and call your supplier.

## The business angle

The cost here isn't software.
It's the owner's evenings.

The owner was counting stock and working out order quantities by hand on every order, with milk and eggs nearly every day.
In their words, it was eating up so much of their time.

Say that's 30 minutes a day.
That's about 180 hours a year.
That's a month of full-time work, done by the owner, after close.

And the hidden cost is the forgotten update.
When the sheet is stale, you over-order and throw out cream, or you under-order and run out of butter on a Saturday.

The usual fix is inventory software with a monthly fee and a setup call.
Or a part-time manager whose job is mostly counting.

This owner got it for free, from a description of their own shop.

## Who should steal this idea

Bakeries, cafes, restaurants, food trucks, caterers.

Also salons and spas (color, product), auto shops (oil, filters), cleaning companies (chemicals, supplies), print shops (paper, ink).

Anyone who reorders the same things on different schedules and keeps it all in a spreadsheet that's always a week behind.

## How hard is it

Beginner.

The owner tried to learn to code and gave up.
Then built this anyway.

The work is writing down your usage and your restock rhythm.
The agent does the rest.

Cost: free to $20 a month.
The owner used a free model.
Claude works the same way.

## Gotchas and tips

### Start with your numbers, not a template

Downloaded inventory templates know nothing about your shop.
The bakery's restock rhythm, weekly for flour and daily for eggs, is the whole point.
Describe yours first.

### Make it show the math

"Order 4 cases of butter" is a guess.
"You have 2, you use 6 a week, Saturday is busy, order 4" is something you can check in two seconds.
If it won't show the math, you'll stop trusting it the first time it's wrong.

### Let the staff update it

The sheet went stale because the owner was the only one updating it, and was busy baking.
The fix was letting the bakers log heavy days themselves.
One shared set of numbers beats one perfect person.

### Keep the counting honest

The tool only knows what's on the shelf if someone counts.
A quick count on order day, for just the items due that day, is enough.
Milk and eggs daily, flour weekly.

### Don't let it place orders yet

Have it tell you what to order.
You place the order.
Once a few weeks of lists look right, then think about having it email the supplier for you.

### Watch the first busy weekend

That's where the adjustment either works or it doesn't.
Compare what it told you to order with what you actually ran out of.
Then tell it.

## Keep Reading

- [A Contractor Walked Us Through His Bid on Video. Halfway Through, He Couldn't Make It Add Up.](/playbooks/estimate-that-doesnt-add-up/)
- [6 Non-Technical Founders Wrapped Their Businesses in Claude Code in 8 Hours. Here's What They Built.](/playbooks/aios-wrap-your-business/)
- [The Restaurant GM Who Built AI Coaches for Every Shift](/playbooks/qsr-shift-coach/)
