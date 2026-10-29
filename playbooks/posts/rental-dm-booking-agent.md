---
layout: playbook.njk
title: "The guest messaged at 11pm. By morning they'd booked somewhere else."
description: "A builder shared a free workflow that answers rental inquiries from WhatsApp, Instagram and Meta ads, checks dates, and sends a payment link. It's a starting kit, and you have to plug in your own booking software."
date: 2026-10-28
difficulty: Advanced
cost: "n8n is free if you host it yourself. You pay for the AI model, Meta's business messaging, and a developer to connect your booking software."
timeToSetup: "A developer's week or two. The download is a skeleton."
originalSource: "https://www.reddit.com/r/n8n/comments/1xgwn9e/built_a_full_ai_system_for_a_us_airbnb_with_lead/"
originalAuthor: "u/_no__regrets_ (r/n8n)"
issueNumber: 34
permalink: /playbooks/rental-dm-booking-agent/
tags:
  - short-term-rentals
  - whatsapp
  - instagram
  - meta-ads
  - bookings
  - n8n
  - small-business
  - smb
---

## Tools

- [**n8n**](#aff-n8n): a workflow tool that passes messages between apps. The whole system is one n8n file
- [**WhatsApp**](#aff-whatsapp), [**Instagram**](#aff-instagram) and [**Meta Ads**](#aff-meta-ads): where the guests come from
- [**Sarvam AI**](#aff-sarvam): the AI model the workflow uses as shipped
- [**GitHub**](#aff-github): where the free workflow file lives

## What you'll build

An inbox for a short-term rental business that answers on its own, any hour.

A guest asks about dates.
It checks availability, quotes the price, and moves them toward booking.
When they say yes, it creates the booking and sends a payment link.

Complaints become tickets.
Anything touchy goes to a person.

## The story

The builder's pitch is the problem every host knows:

> Lead comes in from WhatsApp at 11pm. Host sees it next morning. Replies. Guest already booked somewhere else.

Same thing with Instagram DMs, Meta ad leads and direct inquiries.

So they built one system for all of it.
The post says it was built for a US host.

Here's what they say it does:

A guest asks about specific dates. The agent checks live availability, shares pricing, and creates the booking with a payment link once the guest confirms.

If they haven't picked a place yet, it searches all the listed properties by dates, guest count, budget and preferences, and recommends a match.

For problems like a broken AC, an early check-in or a refund question, it opens a support ticket and the host answers from a dashboard.

Policy exceptions, emergencies and disputes go straight to a human, with the whole conversation attached.

> AI never guesses on sensitive issues.

The guest gets the same experience whether they wrote on Instagram at 2pm or filled out an ad form at midnight.
The agent remembers earlier conversations.

## What's actually in the download

The builder posted the workflow on GitHub for free.

It's one n8n file with 67 steps, and no instructions.

Here's what's in it, beyond the inbox:

- A follow-up scheduler that messages guests who went quiet
- Price suggestions that get sent to you for approval
- Drafted replies to guest reviews
- A phone line that sorts calls and opens tickets

The rules written into the agent are sensible.
"Check live availability and price before promising anything."
"Create a reservation only after explicit guest confirmation and complete details."
Refunds, emergencies and anything uncertain go to a human.

Now the catch.

Every connection to your business is blank.
Availability, property search, bookings, your customer list, support tickets, the hand-off to a human.
Each one points at a placeholder address until you fill in your own.

So you need booking software that other apps can connect to.
And a developer to wire it up.

## The Airbnb question

The only reply on the post so far:

> Have you ever used Airbnb?

Fair.
Bookings that come through Airbnb live inside Airbnb's own messages, and Airbnb wants them paid on Airbnb.
This workflow doesn't touch Airbnb at all.

It's for the guests who find you directly.
Your WhatsApp, your Instagram, your ads, your website.

That's still the part of the business where a slow reply costs you the booking.

## How it works

1. Connect your WhatsApp Business number, Instagram account and Meta lead forms.
2. Every message gets cleaned up into the same format, whatever app it came from.
3. The agent reads it and picks a job: check dates, search properties, book, open a ticket, or hand off.
4. Each job calls your booking software to get real answers.
5. The reply goes back on the same app the guest used.
6. Everything lands on one dashboard: bookings, inquiries by stage, call logs, tickets.

## The business angle

Most small hosts are their own night shift.

Every inquiry that waits until morning is a coin flip.

This takes the 11pm "is it free on the 14th?" message that nobody's awake to answer.

Refunds and disputes still go to the host.

## Who should steal this idea

Short-term rental operators who take direct bookings.

Boutique hotels, glamping sites, holiday homes, anyone running ads to their own booking page.

## How hard is it

Needs a developer.

The download is a skeleton.
Someone has to connect it to your booking software, your messaging accounts and your payment links, then test it on real guest questions.

The AI model in the file is Sarvam, an Indian AI provider.
A developer can swap in a different one.

Cost: n8n is free to host yourself.
Meta charges for some business messages on WhatsApp.
The AI model is a usage bill.

## Gotchas and tips

### Check your booking software first

If it has no way for other apps to connect, this won't work.
Find that out before anything else.

### Prices come from your system

The agent should only ever quote what your booking software returns.
Never let it make up a rate.

### Keep the approvals

Price changes go to you for approval in the shipped version.
Leave it that way.

### Test with real messages

Pull 20 old guest messages and run them through before it talks to anyone new.

## Keep Reading

- [Put an Agent on Your WhatsApp to Book Appointments and Answer the Same 20 Questions](/playbooks/whatsapp-appointment-faq-agent/) The simpler version, if you only need WhatsApp.
- [He Gave His Rental Property an AI Manager. It Reconciled the Books in Two Hours.](/playbooks/rental-property-ai-property-manager/) The back-office side of the same business.

How many of your inquiries come in after you've gone to bed?
