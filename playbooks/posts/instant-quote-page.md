---
layout: playbook.njk
title: "A Customer Wants a Price at 11pm. Your Website Says \"Call Us.\""
description: "An AI built a one-page instant quote tool for a home cleaning business from a single prompt, then tested it and fixed its own bugs before handing it over. Customers type in bedrooms, bathrooms and square footage and get a price on the spot. You set the rates. Here's how to build one for your business without letting the AI make up your prices."
date: 2026-10-14
difficulty: Beginner
cost: "The Claude subscription you already pay for. Hosting a single page is free."
timeToSetup: "An afternoon. Most of it goes on writing down how you actually price a job."
originalSource: "https://www.youtube.com/watch?v=IB-wGDJqt8M"
originalAuthor: "Nick Puru | AI Automation (YouTube)"
issueNumber: 32
permalink: /playbooks/instant-quote-page/
tags:
  - quoting
  - pricing
  - website
  - lead-capture
  - home-services
  - cleaning
  - small-business
  - smb
---

## Tools

- [**Claude Code**](#aff-claude-code): writes the quote page, then opens it in a browser and tests it before it tells you it's done
- [**Cursor**](#aff-cursor): the editor the demo ran Claude inside. The Claude desktop app works too
- [**Netlify**](#aff-netlify): puts the finished page on the internet for free. Any web host works
- [**WordPress**](#aff-wordpress): if your site already lives there, the page can be dropped into it

## What you'll build

One page on your website.

A customer types in a few details about the job.
For a cleaning business that's bedrooms, bathrooms, square footage, and whether they want a deep clean.
The price shows up as they type.

Then they get a clean summary page they can save or send.

No phone call.
No "we'll get back to you."
No form that goes into an inbox nobody checks until Monday.

You decide the prices.
The page just does the math.

## The story

This one isn't an owner's story.
It's a demo.

Nick Puru runs an AI agency and a YouTube channel.
In a July video, Nick Puru tested a new Claude model on five jobs.
The first was the kind of thing a local business would actually use.

> For this first use case, I want something that's pretty small, but genuinely going to be useful. The kind of thing that a local business would typically hand a customer.

The creator spoke the whole request out loud.
Here it is:

> Build me a single page instant quote tool for a home cleaning business. The inputs are going to be number of bedrooms, number of bathrooms, square footage, and whether they want a deep clean. Work out a price from those, show it clearly, and give me a clean, sharable summary page, and then just test it yourself with a few different inputs. Find anything that breaks and fix it before you tell me that you are done.

That last sentence is the important one.

Claude built the page.
Then it opened the page in a browser it controls on its own, took screenshots, and tried different numbers of bedrooms.
It found two problems before anyone looked at anything.
The page was missing a setting that makes its text show up properly, and it threw an error in the background.
It fixed both.

What came back was a page for a made-up company called Bright Side Cleaning.
The headline: "Get your price in 10 seconds."

> I'm not adjusting any of these.

It was one file.
The creator hadn't put it online yet, but a single page like that can go on any website.

## A second one, from a paving company

A different channel, Automation Field Test, ran the same kind of job for a paving company's website.
One message, a quote calculator.

They gave the identical request to Claude Code and to Codex, OpenAI's version of the same tool.
Both passed all 12 of their checks.

The difference was on a phone.
Claude Code pinned the price to the screen so it updated live as the customer changed the numbers.
Codex put the price underneath the form.

That's the detail that matters.
If your customers find you on a phone, that's where the price has to show.
If it's hiding below the form, they may never see it change.

## Don't let the AI make up your prices

Read the cleaning prompt again.

"Work out a price from those."

Nick Puru never told it what to charge.
So it guessed.

For a demo, that's fine.
For your business, it's the one thing you can't hand over.

The AI is very good at building the page.
It has no idea what a three-bedroom deep clean costs in your town, or what your crew needs to make on a job.
Give it your numbers.
Every one of them.

## How it works

1. Write down how you actually price a job. Your base price, what each extra bedroom or bathroom adds, how square footage changes it, what a deep clean costs on top, and your minimum. If you price by gut, look at your last ten quotes and work it backward.
2. Give Claude Code that list, along with the questions a customer can answer without help. Bedrooms, yes. "Level of soiling," no.
3. Tell it to test its own work before it reports back, in those words. Ask it to try the smallest job, the biggest job, and something silly like zero bathrooms.
4. Tell it to keep the price visible on a phone while the customer changes the inputs.
5. Check its math yourself on three jobs you've already quoted by hand. If the page and your old quotes disagree, find out why before anyone else sees it.
6. Put it on your site. Add a "Book this" button that sends the details and the price to wherever your leads already go.

## The business angle

Say someone is shopping for a cleaner at 11pm, on a phone, with three companies open in tabs.

One shows a price.
The other two say "Request a quote."
You know which one they book.

And every quote you give by phone is time you're not working.

This doesn't replace your judgment on big or strange jobs.
It handles the ordinary ones, all night, so the calls you do get are from people who already know your price and still want you.

Say it saves you five quote calls a week.
That's an hour or two back, and fewer leads that went cold waiting for a callback.

An agency would charge you to build a page like this.
Here it's an afternoon and the subscription you already pay for.

## Who should steal this idea

House cleaners, window washers, pressure washers, lawn care, pest control, painters, paving and sealcoating, junk removal, movers, pool service.

Anyone whose price comes from a few numbers the customer already knows.

## How hard is it

Set it up in an afternoon.

The page is the easy part.
Writing down your prices is the real work, and only you can do it.

Cost: the Claude subscription you already pay for.
Hosting one page is free on Netlify, or it can live on the site you already have.

## Gotchas and tips

### Your prices, not its prices

Worth saying twice.
If you don't give it your rates, it will invent believable ones.
Believable and wrong is worse than no price at all.

### Say "starting at" when it's true

A quote from four numbers will never be perfect.
Pet hair, a hoarder house, a steep driveway.
Show the price as an estimate, and say what can change it.

### Set a ceiling

Above a certain size, stop showing a price and ask for a call.
Big jobs are where your judgment earns its money.

### Make the button do something

A price with no next step is a nice toy.
Every quote should end with a way to book, and the details should land where you'll see them.

### Check it on your own phone

The paving test is the lesson.
Both tools built a working calculator.
Only one put the price where a phone user could see it.

### Ask it to test, every time

The cleaning demo worked because the creator told it to try the page and fix what broke before reporting back.
Leave that line out and you become the tester.

## Keep Reading

- [Let Customers Design Their Own Order and Get a Price](/playbooks/visual-quote-agent/) The same idea with an AI walking the customer through a custom order.
- [A Customer Sends a Photo of a Tire. The Shop Sends Back a Price and Holds the Stock.](/playbooks/whatsapp-tire-shop-agent/) Quoting over WhatsApp instead of on your site.
- [A Contractor Walked Us Through His Bid on Video. Halfway Through, He Couldn't Make It Add Up.](/playbooks/estimate-that-doesnt-add-up/) For jobs too big for a four-question calculator.
