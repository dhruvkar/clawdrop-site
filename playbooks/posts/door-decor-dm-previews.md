---
layout: playbook.njk
title: "Every order is a family name on a door. The AI makes the preview."
description: "A one-person door-decor shop spends most of the day in Instagram DMs. The owner already has a preview trick that works by hand. Here's how builders said to automate the rest."
date: 2026-10-28
difficulty: Intermediate
cost: "n8n is free if you host it yourself. Gemini image calls and AI replies are the real bill. One commenter's math is below."
timeToSetup: "A weekend for the price answers. The preview approval step takes longer."
originalSource: "https://www.reddit.com/r/AI_Agents/comments/1xcgp03/need_advice_247_ai_sales_assistant_for/"
originalAuthor: "u/21muradd (r/AI_Agents)"
issueNumber: 34
permalink: /playbooks/door-decor-dm-previews/
tags:
  - instagram
  - whatsapp
  - customer-messages
  - product-previews
  - ecommerce
  - nano-banana
  - small-business
  - smb
---

## Tools

- [**Claude**](#aff-claude): writes the image prompt for each order
- [**Nano Banana**](#aff-nano-banana): Google's Gemini image model. It edits a real product photo
- [**Adobe Illustrator**](#aff-adobe-illustrator): types the customer's name in the shop's own font
- [**Instagram**](#aff-instagram), [**WhatsApp**](#aff-whatsapp) and [**Facebook**](#aff-facebook): where the customers write in
- [**n8n**](#aff-n8n): a workflow tool that passes messages between apps
- [**Google Sheets**](#aff-google-sheets): where confirmed orders land

## What you'll build

A DM helper for a shop that sells personalized products.

It answers prices from a fixed list.
It collects the order details.
Then it makes a photo of the customer's actual piece, and you approve that photo before it goes out.

## The story

The shop is in Azerbaijan.

Handmade door decor, sold mostly through Instagram and Meta ads.

Every piece is personalized.
An apartment number, a family name, a short phrase.

The owner is spending most of the day answering DMs.

Once the ads scale, they expect about 300 new chats a day.

They already tried two chatbot tools, ManyChat and Make:

> The bot sounded robotic, gave wrong information and sometimes answered unrelated questions.

The worst part was the prices.

> my old bot was making up prices

## The trick that already works

Here's what the owner does by hand today, for every customer who wants to order:

1. Type the customer's text in Illustrator, in the shop's own font. Screenshot it.
2. Ask Claude to write an image prompt for that specific piece.
3. Upload the plain product photo, the text screenshot and the prompt to Gemini.
4. Send the result to the customer to approve.

> Results look very realistic.

They tried the template tools that are built for this, Placid and Bannerbear.
The output looked fake.

So the job is to automate the boring handoffs around that preview.
The preview itself stays.

## What the builders said

The owner asked Reddit how to automate it.

The answers were good, and they mostly agreed.

### Prices come from a sheet

The bot looks prices up in one fixed product list.
It is never allowed to say a number that isn't in the list.
If a customer asks about something that isn't there, it says it'll check with you.

The owner's reply:

> the fixed price sheet rule is exactly what I needed

### Check the prices anyway

One builder said to spot-check the bot's price answers every few days for the first couple of weeks:

> bots invent prices exactly when a customer asks something slightly off-script

### Orders are a form, wrapped in a chat

The bot asks for the same three or four things every time: apartment number, family name, size, phrase.
It repeats the whole order back.
Only a confirmed order gets written to the sheet.

### Keep the font step manual for now

Automate the handoff to Gemini and the ping back to you.
That's the part eating the day.

### Approve one exact version

If the customer changes apartment 12 to apartment 21, that's a new preview.
The old approval button should never send the old picture.

### Short answers

A restaurant running the same kind of DM bot in Spanish said theirs sounded like a brochure at first.
The fix: answer the exact question first, six lines max, introduce yourself once, one soft next step.

## How it works

1. Put your products in one list: name, size, price, what can be personalized.
2. Pull 20 to 30 real customer messages from your DMs and test any bot on those before you pay for it.
3. Set the bot to answer from the list and nothing else.
4. Have it collect the order fields and read the order back.
5. When a customer confirms, send their text to your preview step.
6. The preview lands in your own chat first. You approve it, then it goes to the customer.
7. Confirmed orders go to a Google Sheet.

## The business angle

Right now the DM team is the owner.

Every hour in the inbox is an hour away from making the decor.

The fixed price list is the part that makes this safe.
A bot that invents one wrong price on a custom order is worse than a slow reply.

The preview is the part that sells.
A customer who sees their own family name on the door in a realistic photo is much closer to paying.

## Who should steal this idea

Anyone selling personalized products through DMs.

Signs, engraving, custom jewelry, printed gifts, cakes with names on them.

## How hard is it

The price answers and order form: a weekend if you're comfortable with a workflow tool like n8n.

The preview approval step: that's where a developer helps, once.

Cost, by one commenter's math:
workflow tools bill per message, and every chat is several messages.
300 new chats a day is roughly 9,000 a month, and each chat is several messages.
n8n's cloud plan is $60 a month for 10,000 runs, so at that volume the free self-hosted version starts to make sense.

The same commenter thinks the AI and image calls will cost more than the workflow tool.

## Gotchas and tips

### Test the language first

Casual Azerbaijani with typos was fine for current models, according to the replies.
Test on your own customers' messages anyway.

### Unconfirmed chats never touch the sheet

Otherwise your order list fills up with people who were just asking.

### Only make previews for real buyers

The owner already does this.
Image calls cost money, so the preview only happens once someone wants to order.

## Keep Reading

- [A Customer Sends a Photo of a Tire. The Shop Sends Back a Price and Holds the Stock.](/playbooks/whatsapp-tire-shop-agent/) The same "price from a list" rule, on WhatsApp.
- [Let Customers Design Their Own Order and Get a Price](/playbooks/visual-quote-agent/) Another way to show the customer their piece before they pay.

Which would you hand off first, the price answers or the preview?
