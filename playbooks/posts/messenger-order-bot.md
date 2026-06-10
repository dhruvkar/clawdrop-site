---
layout: playbook.njk
title: "A Customer Service Rep That Lives in Your Messenger"
description: "Build a Facebook Messenger order bot with n8n that auto-replies to your Page, answers with prices and product photos right in the chat, and takes orders 24/7."
date: 2026-06-10
difficulty: Intermediate
cost: "n8n (self-host free, or low monthly on n8n Cloud) plus Claude usage for the replies. Facebook Page and Meta developer access are free."
timeToSetup: "A weekend"
originalSource: "https://www.reddit.com/r/n8n/comments/1tw3vmn/n8n_how_to_send_image_not_link_in_facebook/"
originalAuthor: "Minimum-Acadia-2542 (r/n8n)"
tags:
  - customer-service
  - facebook-messenger
  - n8n
  - automation
  - local-business
  - retail
  - orders
  - chatbot
  - small-business
permalink: /playbooks/messenger-order-bot/
---

## Tools

- [**n8n**](#aff-n8n): the engine that connects your Facebook Page to everything else. It reads each incoming message, decides what to do, and sends the reply.
- [**Facebook**](#aff-facebook): your Page is where customers already message you. This bot lives inside that same inbox.
- [**Claude**](#aff-claude): reads what the customer typed, figures out what they want, and writes a reply that sounds like a person, not a phone tree.
- A Facebook Page you own, and a free Meta developer account so n8n is allowed to send messages on the Page's behalf.

## What You'll Build

A bot that answers your Page's messages the second they arrive, day or night, and shows customers what they asked for right in the chat.

Here is the part most people get wrong. When someone messages your Page asking for your price list, the lazy version of a bot sends back a link. The customer has to tap it, wait for a browser to load, and squint at a PDF. Half of them give up. The version you are building sends the actual photo of your price list straight into the conversation. It appears in the chat like a friend texted it to them. No link, no tab, no friction.

The same bot answers the common questions, "are you open today," "do you deliver," "how much is the large one," and starts taking the order. It does this all night while you sleep. When a real human question comes in, a complaint, a refund, something weird, it steps aside and hands the conversation to you cleanly.

This started as a question on the n8n forum from a builder trying to send a real image instead of a link inside Messenger. It is an achievable weekend build, not a product you buy. You are wiring up free and cheap tools yourself. The payoff is a front-desk person who works 24 hours a day inside the inbox you already check.

## Why This Works

Most of the messages your Page gets are the same five questions. Prices, hours, "is this in stock," "do you deliver," and "can I order." A person answering those is doing work a machine does better, because the machine never sleeps and never gets to message number forty and answers slower.

Speed is the whole game on Messenger. A customer who asks "how much" at 9pm and hears nothing back has already messaged your competitor by 9:05. Answering in two seconds, with the price and the photo right there, is the difference between a sale and a missed one. You cannot staff that. A bot can.

The image detail matters more than it sounds. Sending a link asks the customer to do work. Sending the actual photo means they see your menu, your products, your prices without lifting a finger. That small thing is the difference between a bot that feels helpful and one that feels like being put on hold.

## Prerequisites

- A Facebook Page for your business, with you as an admin.
- A free Meta developer account and a basic app set up to get a Page access token (this is what lets n8n send messages as your Page).
- An n8n account. Self-hosting is free; n8n Cloud is a low monthly fee if you do not want to run a server.
- A Claude API key for writing the replies. Any capable model works, but Claude is good at sounding human and following your rules.
- Your product or price images saved as normal photos (JPG or PNG), hosted somewhere public over HTTPS, or ready to upload to Facebook directly. More on that in Step 4.

## Step-by-Step Setup

### Step 1: Connect Your Page to n8n

In your Meta developer account, create an app and connect it to your Facebook Page. Subscribe the app to messaging events so that every time someone messages your Page, Facebook pings n8n. Grab the Page access token. This token is what proves to Facebook that n8n is allowed to read and reply on your Page. Keep it somewhere safe and never paste it in public.

In n8n, set up a webhook node that catches those incoming messages. When this works, every message a customer sends your Page lands in n8n within a second.

### Step 2: Let Claude Read the Message and Decide What to Do

Add a Claude node. Its job is to read what the customer typed and sort it into a bucket: are they asking for the price list, asking a simple question, placing an order, or saying something that needs a human.

Give Claude a short, plain set of instructions. Tell it your business, your hours, your common answers, and the rule that anything about a complaint, a refund, or a problem gets handed to a person. Have it output a clear decision, like "send price list" or "answer question" or "hand to human," plus the reply text when there is one.

This is the brain. Keep it focused. The more you ask it to handle, the more ways it wanders off. Start with the handful of things that cover most of your messages.

### Step 3: Send Text Replies Back

For a normal question, this is easy. Take the reply Claude wrote and send it back through Facebook's Send API using an HTTP Request node in n8n. You POST the customer's ID and your message text to the Graph API messages endpoint, with your Page token. The reply shows up in their chat. Done.

### Step 4: Send the Actual Image, Not a Link

This is the part the original builder got stuck on, and it is the reason this playbook exists. When Claude decides to send the price list, do not send a URL in the text. Facebook will not turn that into a picture. It will sit there as a sad blue link.

Messenger sends real images through an "attachment" payload, not as text. You have two ways to do it.

The simple way: send the attachment with a public image URL. Your message payload uses `attachment` with `type: image` and a `payload.url` pointing at your image. The catch is that Facebook's servers have to be able to reach that URL publicly over HTTPS. If your price list lives behind a login or on your private drive, this will not work.

The better way, and the one to use for images you send over and over: upload the image to Facebook once and reuse it. You make a first HTTP Request to Facebook's attachment upload endpoint, passing your image and marking it reusable. Facebook hands you back an `attachment_id`. From then on, you send the image by referencing that ID instead of a URL. It is faster, it does not depend on your image staying publicly reachable, and you only re-upload when the price list itself changes.

Store that `attachment_id` somewhere n8n can grab it, a static data node or a small database, so the bot reaches for it instantly every time someone asks for prices. Upload once, send forever.

### Step 5: Take the Order and Log It

When Claude decides the customer is ordering, have it pull out the details, what they want, how many, any notes, and write them into a Google Sheet or your order system through another n8n node. Send the customer a confirmation message back in the chat. Now the order is captured and you have a record, even if it came in at 2am.

### Step 6: Hand Off to a Human Cleanly

When Claude flags a message as one for a person, the bot should stop replying and tell the customer a human will follow up, then notify you (a quick message to your phone or email through n8n). Do not let the bot keep talking over a real problem. The handoff is what keeps the whole thing from feeling robotic. Test this path hard. It is the one that protects your reputation.

### Step 7: Test on Yourself First

Message your own Page from another account. Ask for the price list and confirm the actual image lands, not a link. Ask a normal question. Place a fake order. Then say something the bot should not handle and confirm it backs off. Fix the script, repeat. Only flip it live for real customers once all four paths work cleanly.

## Adapting This for Your Business

The build is the same. You change what the bot knows and which image it sends.

- **Restaurant or takeaway.** The image is your menu. The bot answers "are you open," "do you deliver," and "what's the special," then takes the order and drops it in a sheet your kitchen watches.
- **Retail shop.** The image is your price list or a product photo. The bot answers stock and price questions and starts the order or reservation.
- **Salon or barber.** The image is your services-and-prices card. The bot answers "how much for a cut and color" and points serious bookings to your calendar.
- **Bakery or home-kitchen seller.** The image is your weekly offerings. The bot sends the photo, takes custom-order details, and confirms pickup.
- **Anyone with a catalog.** Whatever you would normally screenshot and send by hand a dozen times a day, the bot sends instantly, every time.

## Gotchas and Tips

- **Mind Meta's 24-hour window.** Facebook lets you reply freely only within 24 hours of a customer's last message. After that, you cannot just message them whenever you want. To send certain follow-ups outside the window you need an approved message tag, and the rules are strict. Build for replying inside the conversation, not for blasting people later.
- **The Page access token is the keystone.** If sends fail, it is almost always the token or the app's permissions. The app needs permission to send Messenger messages on the Page, and the token has to be the Page token, not your personal one. Get this right before blaming anything else.
- **Public images must really be public.** If you go the URL route in Step 4, Facebook's servers must reach that image over HTTPS with no login. If in doubt, use the upload-and-reuse method instead.
- **Do not over-automate the hard stuff.** Complaints, refunds, and angry customers should go straight to a human. A bot that argues with an upset customer at midnight does more damage than no bot at all. When in doubt, hand off.
- **Make the handoff feel human.** Tell the customer plainly that a person will follow up, and make sure you actually get the alert. A silent dead end is worse than the bot saying "let me get someone."
- **Keep the images current.** When prices change, re-upload the image and update the stored `attachment_id`. A bot confidently sending last month's prices is a problem you created.
- **Start small.** Teach it the five questions you answer most. Add more only once those are solid.

## What This Replaces

Before this, your Page inbox was a job. Someone, often you, after the shop closed, typing the same answers, screenshotting the same price list, and re-sending it for the hundredth time. The messages that came in at 11pm sat unanswered until morning, and some of those customers were gone by then. The only way to cover it was to pay a part-time person to sit on the inbox, and even they could not be there at 2am.

After this, the inbox answers itself. The common questions get handled in two seconds with the photo right there in the chat. Orders get captured around the clock and logged where you can see them. The late-night message that used to be a missed sale is now a confirmed order waiting for you in the morning. You only get pulled in for the things that actually need you, the real questions and the real problems.

The part-time customer-service hire was answering questions a machine answers better. Now you point the machine at your inbox and spend your time on the parts of the business only you can do.

---

## Keep Reading

- **[Put an Agent on Your WhatsApp to Book Appointments and Answer the Same 20 Questions](/playbooks/whatsapp-appointment-faq-agent/)**: the same idea on WhatsApp, with a clean human handoff after hours.
- **[The Four-Piece AI Front Desk Every SMB Should Have Running by Friday](/playbooks/ai-front-desk/)**: where the Messenger bot fits in a full front desk that also answers your phone.
- **[His Life Insurance Agency Texts and Calls New Leads in 2 Minutes. Automatically.](/playbooks/life-insurance-2-minute-follow-up/)**: proof that the business that replies first usually wins the customer.
