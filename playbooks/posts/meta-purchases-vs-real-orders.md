---
layout: playbook.njk
title: "Meta Said 41 Purchases. The Store Said 24. Which Number Are You Spending On?"
description: "Before an agent touches your Meta ads, give it a ledger of real orders from your store and payment processor. Meta's count sits next to it, and nothing publishes until you confirm."
date: 2026-09-28
difficulty: Intermediate
cost: "The Claude subscription you already pay for. Store and payment webhooks are free."
timeToSetup: "A weekend to wire the order feed. Then a weekly check."
originalSource: "https://www.reddit.com/r/SideProject/comments/1wgcrd1/i_built_a_metaonly_ads_workspace_because_i_got/"
originalAuthor: "u/usc000 (r/SideProject)"
issueNumber: 31
permalink: /playbooks/meta-purchases-vs-real-orders/
tags:
  - meta-ads
  - advertising
  - attribution
  - ecommerce
  - marketing
  - agency-replacement
  - small-business
---

## Tools

- [**Claude**](#aff-claude): reads the ad account next to your real orders and writes the weekly proposal
- [**OpenClaw**](#aff-openclaw): runs the check every week and holds each proposed change until you say yes
- [**Meta Ads Manager**](#aff-meta-ads): where the ads live, and where Meta's own purchase count comes from
- [**Shopify**](#aff-shopify): your store. It sends a message the moment an order is paid
- [**Stripe**](#aff-stripe): or whatever takes the money. It sends a signed message for every payment, so nobody can fake one
- [**Google Sheets**](#aff-google-sheets): the ledger. One row per real order, with a column for where it came from

## What You'll Build

A ledger of real orders.

Every paid order lands in one sheet. It comes from your store or your payment processor. Never from the ad platform.

Meta's purchase count sits in its own column next to it. Two numbers, side by side, every week.

Then an agent reads the ad account against the ledger. It proposes the next change. Pause this ad. Move budget to that one.

Nothing goes live on Meta until you confirm it.

## The Story

A founder posted in r/SideProject about the problem that started their product:

> Meta reported 41 purchases, the store reported 24, and every week somebody had to decide which number the business would act on. Nobody could.

That's 17 purchases Meta counted that the store never saw.

So they built around the ledger. Here's how orders get in:

> A tracker script measures visits on the sites you register, and orders come in from your store's confirmation code, a signed server event from your payment backend, or a Shopify order payment webhook.

Some orders are trusted more than others:

> Shopify and server-signed orders get marked verified, browser-reported ones get marked unverified.

And Meta's number stays in its own column:

> Meta's own reported conversions sit next to that ledger as a separate measurement rather than being merged into it.

The agent reads the account and proposes the next change. Publishing to Meta happens after they confirm it.

The product is called AdRiseLab. It's Meta only. They said the attribution side is where most of the build time went.

You don't need their product to steal the pattern.

## Why the Two Numbers Disagree

Meta counts a purchase its own way.

By default, it credits an ad if someone clicked it in the past week or saw it in the past day. Someone who scrolled past your ad and bought three days later from a Google search can land in Meta's count.

Some of Meta's number is also modeled. That's an estimate of sales it thinks happened but couldn't track.

Your store counts money that arrived.

Your store's number is the money in the bank.

The trouble starts when the agency report, the dashboard and the next budget change all run off Meta's count. At 41 versus 24, every decision is built on a number about 70% too high.

## The Business Angle

Most small shops paying an agency get one number in the monthly report. Meta's.

The agency isn't lying. That's the number the platform hands them.

This setup puts your own number next to it. Every week. You stop arguing about which one is right, because you can see both and you know where each came from.

And the agent only proposes changes against the real orders. Scaling a campaign because Meta says it's working is the expensive mistake. This catches it before the money moves.

## How to Run It

**Step 1. Feed real orders into the ledger.** Turn on the order-paid webhook in Shopify, or the payment webhook in Stripe. Each paid order becomes a row. Order number, amount, time.

**Step 2. Mark how sure you are.** Orders from Shopify or a signed Stripe event get marked verified. Anything reported from the customer's browser gets marked unverified. Keep both. Count them separately.

**Step 3. Pull Meta's count.** Once a week the agent reads purchases and spend from Meta Ads Manager for the same dates. It goes in its own column. It never gets added to the ledger.

**Step 4. Show the gap.** A weekly note. "Meta: 41 purchases. Store: 24 verified orders. Gap: 17." Same dates, same currency.

**Step 5. Propose first.** The agent reads the ad account against the verified orders and suggests one or two changes. You get them in Telegram or Slack. You say yes or no.

**Step 6. Only then publish.** On a yes, the agent pushes the change to Meta. On a no, it logs why.

## Who Should Steal This Idea

Shopify stores spending real money on Meta ads.

Anyone whose agency report and bank deposits never seem to match.

Local service businesses running lead ads. Swap "orders" for booked jobs from your CRM and the same ledger works.

## How Hard Is It

Intermediate. The webhooks are the only technical part. Shopify and Stripe both have them built in, and an agent can walk you through turning them on.

Connecting to the Meta ad account takes an afternoon of permissions and API access.

Cost: the Claude subscription you already have. If you want to buy it, the source product starts at $39 a month.

## Gotchas and Tips

**Match the dates.** Meta credits a sale to the day someone saw or clicked the ad. Your store records the day of the order. Compare full weeks and the edges mostly wash out.

**The gap won't be zero.** Some of Meta's extra purchases are real sales it credited to itself. Some came from other channels. Track the size of the gap over time. A growing gap is the signal.

**Verified beats unverified.** A browser-reported order can be blocked, duplicated or faked. A signed payment event can't be. Make decisions on the verified count.

**Keep the agent on a leash.** Proposals only. The confirm step is what keeps a bad week of data from turning into a bad week of spending.

**Refunds count.** A refunded order should come off the ledger. Stripe and Shopify both send refund events. Wire those in too.

Which number is your agency reporting to you right now? Ask them this week.

## Keep Reading

- [Research Your Competitors' Ads and Launch Your Own Campaign on Meta](/playbooks/meta-ads-pipeline/) The launch side. This playbook is how you judge it once it's live.
- [An AI Read 60 Days of a Google Ads Account, Then Built the Next Campaign. One Prompt.](/playbooks/google-ads-audit-and-build/) Same propose-then-confirm idea, for Google.
- [Your Google Analytics Is Lying to You. This AI Catches It Before You Make Bad Decisions.](/playbooks/ga4-analytics-autopilot/)
