---
layout: playbook.njk
title: "A drainlayer hated admin. Now an AI drafts the invoice and he approves it on WhatsApp."
description: "After a redundancy, someone in New Zealand set up Hermes to run the paperwork for their dad's drainlaying business. The hard part was getting Dad to trust it."
date: 2026-10-28
difficulty: Intermediate
cost: "Hermes is free and open source. You pay for the AI model it runs on, and for someone's time to set it up and fix it."
timeToSetup: "Months, mostly spent writing down how the business works and earning trust."
originalSource: "https://www.reddit.com/r/hermesagent/comments/1xgbxtr/anyone_here_running_an_ai_agent_business_for/"
originalAuthor: "u/Sanvell (r/hermesagent)"
issueNumber: 34
permalink: /playbooks/drainlayer-hermes-admin/
tags:
  - hermes
  - trades
  - invoicing
  - quotes
  - whatsapp
  - admin
  - small-business
  - smb
---

## Tools

- [**Hermes**](#aff-hermes): an open-source AI agent you run on your own computer and talk to by chat
- [**WhatsApp**](#aff-whatsapp): where the owner approves each invoice

## What you'll build

An AI back office for a trades business.

It keeps the customer list.
It writes quotes.
It turns an approved quote into an invoice.
It sends reminders and tracks the tools and stock.

The owner approves things from his phone.

## The story

The poster lost their job a few months ago.

Since the redundancy, they've been using Hermes to help run their dad's drainlaying business in New Zealand.

> He hates admin.

So Hermes took all of it:

> CRM, quotes, invoices, project management, reminders, inventory, asset management - all of it.

> it's been running well enough now that I trust it.

## How the invoices work

Someone in the thread asked the obvious question.
Hermes makes the invoices?

Yes:

> We designed a template, and Hermes creates an invoice based on the previously approved quote.

The invoice is a PDF with everything a real invoice needs: items, cost, tax, payment instructions.

Dad approves it on WhatsApp.

Then Hermes emails it to the customer.

So nothing goes out until he says yes.
And the invoice can't drift from the quote, because it's built from the quote.

## The hard part was Dad

The poster wrote down most of the business's procedures first, with Hermes in mind the whole time.

Then they started handing things over.

> boy did it take some time before he would trust things.

> There were times where something would go wrong and he would return to old habits and I would have to take him through the whole process again and resell him on the approach.

That's the real cost of this.
It's people time.

## The other competitor

The poster tried pitching this to other small owner-operators.

> I've spoken to a few small owner operators who have their wives do all the admin.

Adding a new cost, and taking work away from family, is a hard sell.

Worth knowing before you build this for anyone else.

## It breaks sometimes

A commenter pushed back hard.
Businesses want something that works the same today as tomorrow.
AI models change, and so do their prices.

The poster agreed:

> I saw this earlier on with one of the workflows where it got things completely wrong and took some skill rebuilding to fix it.

> The only reason it works for my fathers business, is because I love doing this stuff and any break or issue is a chance for me to tinker.

## How it works

1. Write down how each piece of admin actually gets done today. Quotes, invoices, reminders.
2. Build one invoice template with every required field.
3. Have Hermes write invoices only from quotes the owner already approved.
4. Send every invoice to the owner on WhatsApp for a yes before it goes out.
5. Add the next chore only once the last one has run clean for a while.

## The business angle

The owner gets his evenings back from paperwork.

The thing being replaced is usually unpaid: the owner at night, or a family member.

That's also why it's hard to sell.
Nobody's writing a check for admin today, so a new bill looks like pure cost.

The poster's own conclusion, after the thread:

> I'm thinking consulting and training might be a more sustainable route.

Go in, build it with the owner, show them the risks and their part in keeping it running, then leave.

## Who should steal this idea

Trades businesses where the owner is on the tools all day.

Drainlayers, plumbers, electricians, builders, landscapers.

Especially if someone in the family is technical and likes to tinker.

## How hard is it

Needs someone technical, for as long as it runs.

Hermes runs on a computer you control.
Someone has to set it up, write the procedures, and fix it when an update breaks a workflow.

Cost: Hermes is free.
The AI model it runs on is a monthly bill.
The setup time is the big one.

## Gotchas and tips

### Approvals first

Every invoice goes through the owner on WhatsApp.
Start there, and loosen it later if ever.

### Expect a relapse

When something goes wrong, the owner goes back to the old way.
Plan to walk them through it again.

### Write the procedures before the agent

The poster built the procedures with the agent in mind.
That's what made the handoff possible.

### Updates can break things

New model versions behave differently.
Keep the setup simple enough that you can see what broke.

## Keep Reading

- [A Contractor Walked Us Through His Bid on Video. Halfway Through, He Couldn't Make It Add Up.](/playbooks/estimate-that-doesnt-add-up/) What happens to the numbers before the quote gets written.
- [Count the logins before you hand off a chore](/playbooks/dot-daily-office-chores/) Another honest look at what babysitting an agent actually takes.

Who does the admin in your business right now?
