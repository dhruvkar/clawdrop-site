---
layout: playbook.njk
title: "Let Customers Design Their Own Order and Get a Price"
description: "A one-person balloon shop built an AI agent that walks each customer through a custom design, shows them a picture, and quotes a price. Owner just approves."
date: 2026-07-21
difficulty: Beginner-to-intermediate
cost: "~$20-40/mo (agent hosting plus AI image costs, pennies per picture)"
timeToSetup: "A weekend"
originalSource: "https://www.reddit.com/r/automation/comments/1us8njs/how_a_oneperson_balloon_store_automated_its/"
originalAuthor: "jacobgc75"
originalAuthorUrl: "https://www.reddit.com/user/jacobgc75/"
issueNumber: 23
permalink: /playbooks/visual-quote-agent/
tags:
  - quoting
  - estimates
  - retail
  - small-business
  - image-generation
  - customer-facing
  - florist
  - events
  - custom-orders
  - automation
---

## Tools

- [**OpenClaw**](#aff-openclaw): the agent runtime that runs the conversation, does the math, and emails you the summary
- [**Claude Code**](#aff-claude-code): alternative agent harness for the same build
- [**Anthropic**](#aff-anthropic): the model doing the reasoning behind the conversation and the price estimate
- [**Nano Banana**](#aff-nano-banana): the AI image tool that draws a picture of the custom order so the customer can see it before buying
- [**Gemini**](#aff-gemini): Google's image model, an alternative for generating the preview picture
- [**Gmail**](#aff-gmail): where the clean order summary lands for you to review
- [**Telegram**](#aff-telegram): optional, get pinged on your phone the moment a new quote comes in
- [**Stripe**](#aff-stripe): optional, collect a deposit once you approve the price

## What You'll Build

A quoting assistant that sits on your website and does the annoying first hour of every custom order for you. A customer shows up wanting something specific. The assistant asks them what they want, the colors, the sizes, the style, how many, the event date, and where it's going. Then it does something most quoting tools cannot do. It draws them a picture of what they described, so they can see the arrangement before they ever pay a cent.

While that is happening, it is quietly working out a price. It looks at what you charged for similar jobs in the past and lands on a realistic number. Then it packages the whole thing up, the design details, the date, the customer's contact info, and the estimated price, and sends it to you in one clean email.

You still make the final call. You read the summary, adjust the price if you want, and reach out to the customer. But instead of ten back-and-forth messages just to figure out what they want, you get a finished request with a number already attached. You go from "what are they even asking for" to "here's your quote, want to book?" in a fraction of the time.

This one comes from a one-person balloon store. But the builder is blunt about it: the same thing works for florists, cake decorators, event decorators, and any small shop where every single order is different and quoting eats your day.

## The Story

Someone posted this on Reddit under the handle jacobgc75. The setup was a woman running a balloon store completely on her own. She did the designing, the building, the delivery, the invoicing, all of it.

Her biggest time sink was not the balloons. It was the quoting.

Think about what she was selling. No two balloon arrangements are priced the same. A birthday arch in pastel pinks is a different job from a corporate event backdrop in company colors. The price moves with the colors, the sizes, the style, how many balloons, where it is going, and what date the event is. Every single inquiry meant a long back-and-forth conversation just to nail down what the customer actually wanted.

And here is the part that stings. Half of those conversations went nowhere. She would spend twenty minutes messaging back and forth, pulling details out of someone, and then find out they were just price shopping, or they wanted it for tomorrow, or their budget was a quarter of what the job costs. She was doing unpaid sales work before she even knew if the person was serious.

So she built an agent to do that first conversation for her.

## What the Agent Actually Does

The whole thing runs in four steps. None of them are complicated once you see them laid out.

**Step one, it walks the customer through the design.** The agent asks the questions she used to ask by hand. What is the occasion? What colors? How big? What style, classic garland, an organic cluster, a full arch? How many? The customer answers in plain language, like they are texting a friend.

**Step two, it shows them what it will look like.** This is the trick that makes the whole thing feel like magic. Once the agent understands the design, it uses an AI image tool to draw a picture of that exact arrangement. The customer types "sage green and cream balloon arch for a garden wedding" and a few seconds later they are looking at a picture of it. Not a stock photo. A picture generated for their specific order. They can look at it and say "yes, that's it" or "actually make it bigger and add gold."

That single feature does two things. It excites the customer, because seeing your idea come to life is fun. And it kills confusion, because now you both know exactly what was agreed to. No "that's not what I pictured" three days before the event.

**Step three, it works out the price.** Behind the scenes, the agent looks at what she charged for past jobs like this one. Bigger arch, more balloons, premium colors, tight deadline, further delivery, the price goes up accordingly. It lands on a realistic estimate based on her actual history, not a made-up number.

**Step four, it hands you a finished request.** The agent collects the event date, the design details, the customer's name and contact info, and the quoted price, and sends the owner a clean summary. One email. Everything in one place. She reads it, and she is already ninety percent of the way to a sent quote.

There is a live demo you can try if you want to see the flow yourself. Play with it and pay attention to how it feels as the customer, because that experience is the actual product.

## The Human Is Still in the Loop

Read this part carefully, because it is what separates a good build from a reckless one.

The agent does not send the final price to the customer and take the order. It sends the price to the owner. She reviews it. If the estimate is off, she fixes it. If the date does not work, she says so. If it is a great job at a fair price, she confirms it and books it.

The agent is not replacing her judgment. It is replacing the hour of typing that used to come before her judgment. It turns a vague "hi do you do balloon arches" into a structured request with a design, a date, and a dollar figure attached. That is the whole point. She responds faster, and she never has to ask the same five questions again.

If you take one idea from this playbook, take that one. The agent handles the intake. You handle the decision. That split is what makes customers trust it and what keeps you in control of your own pricing.

## The Business Angle

Here is the math on what this replaces.

If you are a solo shop, quoting is not a line item you pay for. It is worse. It is time stolen out of the actual work you get paid for. Say every custom inquiry costs you twenty minutes of back-and-forth, and you get thirty inquiries a week. That is ten hours a week, gone, before you have made a single dollar. Ten hours you could spend building orders, delivering them, or having a life.

And a good chunk of those inquiries never convert. So you are not even losing ten hours to paying customers. You are losing a lot of it to tire-kickers who were never going to book.

The agent flips that. The customer does the describing. The agent does the drawing and the pricing. The unserious ones drop off on their own once they see a real number, before they ever reach you. The serious ones arrive on your desk pre-qualified, with a picture and a price. You spend your time on people who are actually ready to buy.

For a shop where the owner is also the salesperson, the builder, and the delivery driver, buying back ten hours a week is not a nice-to-have. It is the difference between taking more orders and turning them away because you are drowning in admin.

## Who Should Steal This Idea

The builder said it plainly, and he is right. This works anywhere the product is custom and the quoting is the bottleneck.

**Florists.** Every arrangement is different. Colors, flowers in season, size, vase or hand-tied, event or sympathy. Same problem, same fix. The customer describes the bouquet, the agent shows them a picture and a price.

**Custom cake decorators.** Tiers, flavors, colors, theme, dietary needs, the date. A visual preview is huge here, because "I want a unicorn cake" means ten different things to ten different people. Let them see it first.

**Event and party decorators.** Backdrops, centerpieces, full-room installs. Lots of variables, lots of back-and-forth, exactly the kind of quoting that eats a solo operator alive.

**Sign and banner shops, custom apparel, gift baskets, anything monogrammed or personalized.** If the answer to "how much is it" is always "well, it depends," this pattern fits.

The common thread: the customer wants something unique, they cannot picture it clearly, and you cannot price it until you drag the details out of them. The agent does the dragging and the drawing so you can do the deciding.

## How Hard Is It

This is a weekend build, not a software project.

You do not need to touch the third-party tool the original was built on. You can build the same thing yourself with an AI agent runtime like OpenClaw or Claude Code. The agent runs the conversation, calls an AI image tool to draw the preview, does the pricing math against your past jobs, and emails you the summary. Those are all things these agents already do.

The one piece worth planning is the pricing. The agent is only as good as the history you give it. Feed it a simple list of your past jobs, what the customer wanted and what you charged, and it has something real to base estimates on. The more examples, the better the number.

**Cost:** roughly $20 to $40 a month. That is the agent hosting plus the AI image costs, which run pennies per picture. No new employee, no expensive quoting software, no monthly per-seat fee.

## Gotchas and Tips

**Keep yourself in the loop, at least at first.** Do not let the agent send prices straight to customers. Every estimate comes to you for approval until you have watched it get the numbers right dozens of times. This protects your margins and your reputation.

**Feed it your real past jobs.** The pricing is guesswork without your history. Spend an hour writing down your last twenty or thirty custom orders and what each one cost. That single document is what makes the estimates believable.

**Set a floor and a ceiling on price.** Tell the agent your minimum order and roughly where your prices top out. It keeps the estimate from lowballing a big job or scaring off a customer with a wild number when the design is unusual.

**Treat the picture as a preview, not a promise.** The AI image is there to align on the idea, colors, size, vibe. Make it clear to the customer that the final piece is handmade and will vary a little. You want excitement, not a complaint that it was not pixel-perfect.

**Capture the date early.** The event date changes everything. It tells you if the job is even possible, whether it is a rush, and how to price it. Have the agent ask for it up front, not at the end.

**Let the tire-kickers leave.** One of the quiet benefits here is that people who were never going to book will drop off once they see a real price. That is a feature. You want the serious ones landing in your inbox, not everyone.

**Start narrow.** Turn it on for your most common order type first, the one you quote over and over. Get that flawless, then widen it to the weirder custom stuff. A great experience on your bread-and-butter order beats a shaky one on everything.

---

## Keep Reading

- **[This HVAC Guy Spent Friday Night Setting Up AI. Now His Estimates Write Themselves.](/playbooks/hvac-estimate-autopilot/)**: The same quote-it-for-me idea for trades and field service, where the estimate follows a template instead of a picture.
- **[Turn a Photo Into a Shopify Listing](/playbooks/photo-to-shopify-listing/)**: Another retail shortcut. Point AI at your product and let it do the tedious part of getting it in front of buyers.

**Want the full deep dive?** Read our [Best OpenClaw Skills](/learn/best-openclaw-skills/) guide for the foundational patterns this playbook is built on.
