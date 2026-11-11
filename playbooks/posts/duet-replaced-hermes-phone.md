---
layout: playbook.njk
title: "Claude Duet now handles their calls, calendar and tax sorting"
description: "A year-long Hermes user handed Claude Duet their texts, voicemail, email, calendar and bank feed. It now returns vendor calls, books appointments by phone and sorts transactions for taxes, with one catch on email."
date: 2026-11-10
difficulty: Advanced
cost: "A Claude Pro or Max plan, plus a phone-line service for the AI and whatever custom connectors you have to build or pay someone to build."
timeToSetup: "Not plug-and-play. Some connectors come ready, others had to be built."
originalSource: "https://www.reddit.com/r/ClaudeDuet/comments/1xpxe3w/gave_it_access_to_my_phone_and_its_been_much_more/"
originalAuthor: "u/jaredzimmerman (r/ClaudeDuet)"
issueNumber: 35
permalink: /playbooks/duet-replaced-hermes-phone/
tags:
  - claude-duet
  - hermes
  - executive-assistant
  - scheduling
  - phone
  - bookkeeping
  - email
  - smb
---

## Tools

- [**Claude Duet**](#aff-claude-duet): Anthropic's new app where Claude works on its own computer in the cloud, messages you first, and asks before it acts
- [**Hermes**](#aff-hermes): an open-source AI agent you run yourself, the one this replaced
- [**Bland.ai**](#aff-bland): a service that gives the AI a phone line and a voice
- [**Plaid**](#aff-plaid): a secure link between an app and your bank accounts

## What you'll build

An AI executive assistant with access to everything on your phone.

It returns missed vendor calls.
It books appointments by phone.
It sorts your transactions for taxes.
It keeps your contacts up to date.

It checks your accounts on a schedule and finds the work on its own.

## The story

The poster ran Hermes for a year.

Hermes is an open-source AI agent you run yourself. Claw Drop readers know it well.

Then Claude Duet came out.
Duet is Anthropic's new app where Claude works on its own computer in the cloud, messages you first, and asks before it acts.
It's a research preview, for Pro and Max plans in the US.

Their verdict:

> duet has replaced much of my hermes day-to-day tasks, at a huge quality improvement with 1 annoying gap.

## What they connected

A connector is a plug that lets the AI read and use another app.

Some came ready-made. Some they built themselves:

> Via a set of out-of-the-box and custom MCPs I gave duet access to my SMS, voicemails, email, calendar, and chrome history, and plaid connected financial, it runs checks for things to do for me.

So Duet sees the texts, the voicemails, the inbox, the calendar, the browsing history and the bank accounts.

Then it goes looking for work.

## The vendor calls

A vendor calls. You miss it. They leave a voicemail.

Duet hears about it and answers by email:

> missed vendor calls from voicemails get email replies.

Plans move across apps the same way:

> a plan over iMessage gets added to my calendar automatically

It also adds travel time between appointments and fixes calendar conflicts.

## The phone line

Duet has its own phone, through Bland.ai.

> Duet has access to a phone through bland.ai , and makes appointments and checks availability for me.

That's the call your assistant makes to book the dentist, the mechanic, the contractor.

## The books and the contacts

With a secure link to the bank accounts:

> Via Plaid it organized transactions for tax purposes.

And it keeps the contact list current from every channel:

> It updates data about my contacts from emails, sms, and voicemails. (kids and pets names, birthdays, home addresses, preferences, etc.)

## How far it goes

It also runs the personal side.

It's building two trip plans from things they browse.
It suggests restaurants and products from their notes and browsing history.
It watches their smart home and builds new routines based on how the house actually gets used.

## Why they switched

Hermes could do most of this.

> Hermes did a fair amount of these things reasonably well, but needed so much babysitting.

## How it works

1. Connect the accounts: texts, voicemail, email, calendar, browser history, bank feed.
2. Build custom connectors for anything that doesn't have a ready-made one.
3. Give it a phone line through Bland.ai so it can call and book.
4. Set it to check those sources on a schedule for things to do.
5. Approve each email it drafts before it goes out.

## The business angle

This is the executive assistant or VA job.

Returning vendor calls.
Booking appointments by phone.
Keeping the calendar clean.
Prepping transactions for the bookkeeper.
Keeping the contact list current.

The poster doesn't give a dollar figure. But if you pay someone to do those chores today, this is the list of what an agent can now take on.

What it can't do yet is hit send on its own.
So someone still has to say yes, every time.

## Who should steal this idea

Owners who pay an assistant or VA for calls, scheduling and bookkeeping prep.

Consultants, agency owners, real estate agents, solo professionals who live on their phone.

## How hard is it

Needs a developer, but just once.

Some of these connectors come ready-made. Others the poster built themselves.
This isn't plug-and-play. Getting Duet into your texts, voicemail and phone line takes custom work.

Duet itself is a research preview, US only, on Pro and Max plans.

Cost: a Claude Pro or Max plan, a Bland.ai account for the phone line, and the time or developer it takes to build the custom connectors.

## Gotchas and tips

### It won't send email without you

This is the big one.

> it absolutely refuses to send email without a manual approval each time.

A commenter checked too:

> TIL: Duet can't send emails on a scheduled task even if it has full access to your Gmail.

The poster's workaround, for anything that isn't urgent:

> have it draft a whole day's worth and send them all at once a few times a day

They don't love it:

> I don't find that to be a good solve.

Plan a few approval sessions into your day.

### It can't email as its own person

Hermes could send from a separate assistant account. Duet can't, even when you give it one.

> it cannot send emails as itself/as 3rd party even if provided access to a distinct email account, which hermes did with ease

So every email goes out as you.

### It checks on a schedule, it doesn't react instantly

Duet can't react the moment something happens. It checks on a schedule.

The poster says that's fine if you set the timing right:

> Just needs the right polling frequency based on how frequently sources actually need updating.

Check voicemail often. Check the bank feed less.

### It sees a lot

Texts, voicemail, browsing history and bank accounts in one place.
Decide what it really needs before you connect everything.

## Keep Reading

- [A drainlayer's AI does his quotes and invoices](/playbooks/drainlayer-hermes-admin/) Hermes running the admin for a trades business, with approvals on WhatsApp.
- [Count the logins before you hand off a chore](/playbooks/dot-daily-office-chores/) Another honest look at what babysitting an agent actually takes.

Which of your assistant's daily calls would you hand off first?
