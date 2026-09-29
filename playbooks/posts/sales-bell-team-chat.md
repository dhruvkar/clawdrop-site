---
layout: playbook.njk
title: "Your Whole Team Sees Every Sale the Minute It's Invoiced. Nobody Compiles a Report."
description: "One owner pipes every new invoice into a team chat space called SALES BELL. The whole team watches revenue come in live, and nobody builds a report."
date: 2026-09-28
difficulty: Beginner
cost: "Whatever you already pay for Zapier or a similar tool. About $20/mo more for Claude if you add the daily summary."
timeToSetup: "An hour for the bell. An evening more for the daily summary."
originalSource: "https://www.reddit.com/r/EntrepreneurRideAlong/comments/1u8g8ux/how_i_keep_my_team_updated_on_sales_revenue/"
originalAuthor: "u/MathewGeorghiou (r/EntrepreneurRideAlong)"
issueNumber: 31
permalink: /playbooks/sales-bell-team-chat/
tags:
  - team
  - sales
  - invoicing
  - open-book
  - zapier
  - small-business
---

## Tools

- [**Zapier**](#aff-zapier): watches your accounting system and does one thing when a new invoice shows up. Posts it to chat
- **Google Chat**: the team chat the author already used. Slack works the same way
- [**Slack**](#aff-slack): if that's where your team talks, point the bell there
- [**QuickBooks**](#aff-quickbooks) or [**Xero**](#aff-xero): where invoices get created. The author didn't say which system they use. Any one Zapier can read will do
- [**Google Sheets**](#aff-google-sheets): the fallback if you track sales in a spreadsheet. The author says that works too
- [**Claude**](#aff-claude): for the extension below. Reads the day's sales and writes one plain line about them
- [**OpenClaw**](#aff-openclaw): runs that summary on a schedule and posts it to the same space

## What You'll Build

A chat space called SALES BELL.

Every time someone creates an invoice, a message lands there on its own. Who bought and what they bought.

The whole team can see it. Nobody pulls numbers. Nobody sends a weekly email.

Then an optional second step the author didn't build. An agent posts one line at the end of each day. The day's total, the month so far, and how far off the target you are.

## The Story

An owner on r/EntrepreneurRideAlong posted how they keep their team in the loop on revenue.

They start with a belief:

> I'm a big believer in sharing more information with my team, not less -- including financial information about our business.

Then the problem every owner who tries this hits:

> The challenge is that sales data is usually locked away in accounting software, CRMs, spreadsheets, and other systems. Sharing it often requires someone to manually compile and distribute reports.

So a few years ago they built something small. Here's the whole setup, in their words:

> We record invoices and sales in our accounting system as they happen. (If you use spreadsheets, this can still work.)

> We use Google Chat for team communication, so I created a dedicated space called SALES BELL.

> Using Zapier (or any workflow automation tool), I connected our accounting system to Google Chat.

> Now, every time an invoice is created, a message is automatically posted to the SALES BELL chat with the sales details.

They posted a screenshot in the comments. Each message comes from the Zapier bot. Each one names the customer and the product. The customers they left visible include a district school board, a university and a church.

They call it "somewhat like a real-time sales ticker that everyone on the team can see."

And why it matters to them:

> It's a small thing, but I think it helps everyone feel more connected to what's happening in the business and gives the team a chance to celebrate wins as they happen. (Personally, I'm not wired to celebrate things.)

They also said they don't sell any of these tools. It's been running for years.

## Why This Works for a Small Team

Most employees never see a sale.

The person who ships the order sees a box. The person answering support sees a complaint. The owner sees the bank balance.

The bell puts every sale in front of everyone, the minute it happens. Nobody has to remember to share it.

And the owner who isn't wired to celebrate doesn't have to. The team does it in the thread.

## How to Set It Up

**Step 1. Make the space.** In Google Chat or Slack, create one channel just for this. Call it SALES BELL or whatever fits your shop. Keep it separate from the everyday chatter so people can mute it without missing work messages.

**Step 2. Decide what shows.** Customer name, what they bought, and the amount? Or leave the amount off? Settle this before anything posts. More on this in Gotchas.

**Step 3. Build the Zap.** Trigger: new invoice in your accounting system, or a new row in your sales sheet. Action: send a message to the SALES BELL space. Put the customer and the line items in the message.

**Step 4. Test it on one invoice.** Create a real one or a test one and watch it land. Fix the message layout until it reads cleanly on a phone.

**Step 5. Tell the team what it is.** One message, pinned. "Every new invoice posts here. React to it."

That's the author's system. Done.

## The Extension: A Daily Line From an Agent

This part is ours. The author didn't build it.

A bell for every sale is great on a busy day. After a month of it, nobody knows if the month is good.

An AI agent fixes that with one line.

**Step 1. Give it read access.** Read-only access to your accounting system, or the sales sheet.

**Step 2. Give it the target.** One number for the month. Put it in a sheet so you can change it.

**Step 3. Schedule it.** At the end of each business day, the agent adds up the day's invoices and posts one line to SALES BELL. Something like: "Today: 6 invoices. Month so far: 58% of target with 12 days left."

**Step 4. Friday version.** Once a week, it names the biggest sale and the product that sold most. Still one or two lines.

Keep it short. The team already has the bell. The summary is only the scoreboard.

## The Business Angle

The report nobody has to build is the whole point.

The author named it: sharing sales data usually means someone compiles and sends it by hand. In most small companies that someone is the owner or the bookkeeper. It gets skipped the first busy week.

The bell costs one Zap. It never gets skipped.

## Who Should Steal This Idea

Owners who already believe in open books and never found a way to do it without a spreadsheet meeting.

Teams where the people doing the work never hear about the sales. Production, shipping, support, the warehouse.

Any shop with a steady flow of invoices. A few a day is plenty.

## How Hard Is It

Beginner. If you can click through a Zapier setup, you can build the bell in an hour. No developer.

The daily summary is a step up. Figure an evening to connect the agent to your books and get the line right.

Cost: whatever you pay Zapier now. The summary adds about $20 a month for Claude.

## Gotchas and Tips

**Decide on amounts first.** Showing dollar figures is the open-book part. It also means everyone sees what your biggest customer pays. The author believes in sharing financials. Make that call on purpose for your team.

**Blur it before you post it anywhere public.** The author blurred customer names in the screenshot they shared. Inside the team it's fine. On LinkedIn it isn't.

**New invoices only.** The trigger fires when an invoice is created. A voided invoice or a refund won't post a correction unless you build that too. The daily summary should use the books, so it catches those.

**Record sales as they happen.** The author's first step is the one that makes the bell work. If invoices get entered in a batch on Friday, the bell rings twenty times on Friday.

**Give it its own space.** A busy week floods a general channel. A dedicated space can be muted and still be there when someone wants to scroll.

**Contractors and outside people.** If your chat has them in it, check who can see the space before the first sale posts.

Which invoice rings the bell first?

## Keep Reading

- [Fire the Bookkeeper, Keep the Books](/playbooks/fire-the-bookkeeper/) Get your books clean and current, which the bell depends on.
- [He Lost a Client to a Missed Follow-Up Email. Then He Stopped Doing Follow-Ups.](/playbooks/freelancer-invoice-chaser/) The other half of an invoice. Getting paid for it.
- [This Accountant Trained Her AI to Close the Books Every Month](/playbooks/cpa-quickbooks-monthly-close/)
