---
layout: playbook.njk
title: "Screenshot Anything You Want to Buy. Claude Finds a Discount Code That Actually Works."
description: "Upload a product screenshot to Claude with one prompt. Claude Cowork opens its own browser, adds the item to a cart, and tests discount codes until one works."
date: 2026-07-08
difficulty: "Easiest one we've ever published. If you have a Claude subscription, you're done setting up."
cost: "$0 beyond the Claude subscription you may already have."
timeToSetup: "None. One screenshot and one prompt."
originalSource: "https://www.youtube.com/watch?v=EPBX1PRQ_mY"
originalAuthor: "Sarmatic Explains (YouTube)"
issueNumber: 21
permalink: /playbooks/ai-discount-code-hunter/
tags:
  - shopping
  - personal-automation
  - browser-agent
  - claude
  - savings
  - no-code
---

## Tools

- [**Claude**](#aff-claude): the AI you hand the screenshot and the prompt to. That's the whole interface.
- [**Claude Cowork**](#aff-anthropic): Claude's autonomous browser mode. It opens its own browser and does the clicking, so you don't.

## What You'll Do

Take a screenshot of anything you're about to buy. A jacket, a blender, a pair of headphones, whatever. Upload it to Claude with one prompt.

Then watch Claude open its own web browser, find the product on the retailer's site, add it to a cart, hunt down discount codes, and test them one by one at checkout until one actually knocks money off the total.

No extension to install. No account to create. No workflow to build. This playbook is short because the setup is short. There is no step two.

## Why This Beats Coupon Extensions

You've probably got Honey or some cousin of it bolted onto your browser. Here's the problem with that whole category.

First, their code databases go stale. The extension proudly tests fifteen codes from 2023, finds nothing, and tells you "you already have the best price" like it did you a favor.

Second, and this is the part most people never learned: those extensions make their money by swapping in their own affiliate tag at checkout. They're not a savings tool with ads. They're an affiliate business with a savings costume.

The agent approach is different in kind, not degree. Claude searches for codes live, right now, the same way you would. Then it tests them in a real cart on the real site and shows you the receipt. There's no database to go stale and no commission being skimmed behind your back. It either found a working code or it didn't, and you can see which.

## The Exact Prompt

Screenshot the product. Upload it to Claude with Cowork enabled. Paste this:

```
Find me discount codes for this item. Go to the site,
add the item to the cart, and test different codes
until one works. Show me proof of the working code
applied at checkout.
```

That's it. That's the whole build.

Claude identifies the product from the image, figures out which retailer sells it, opens the site in its own browser, drops the item in a cart, and starts feeding codes into the promo box. The ones that fail, it discards. The one that works, it screenshots.

## What Happened When People Tried It

Here's the run from the original video, start to finish.

The creator took a picture of something he wanted to buy online. Nothing exotic, just a regular product from a regular store. He uploaded it to Claude with the prompt above.

Claude opened its own browser and found the item on the retailer's site. Then it went code hunting: searching for current promo codes the same way a determined human would, except without the tab fatigue.

It added the item to the cart and started testing. Code one, rejected. Code two, rejected. It kept going, no sighing, no giving up to go check its phone.

Under a minute later, it surfaced a code that worked. And here's the detail that makes this trustworthy instead of hand-wavy: it attached proof. A capture of the working code actually applied at checkout, discount visible on the total.

His verdict: it works for any online store, any product, any price range. The store doesn't need to support anything. If it has a cart and a promo box, the agent can work it.

## The Bigger Point

Nobody's retiring on discount codes. Maybe you save eight bucks on a hoodie. Fine.

The reason this playbook exists is what the demo proves. Claude just did a multi-step chore in a browser it had never seen, on a site nobody prepped for it, starting from nothing but a photo. Identify the product, find the store, work the cart, iterate until success, bring back evidence.

Swap the chore and the same move works everywhere:

- **Price-match claims.** "Here's a screenshot of it cheaper at a competitor. Go file the price-match request."
- **Warranty registrations.** "Here's the receipt. Register this thing so the warranty actually exists when I need it."
- **Return requests.** "Start the return on this order and get me the shipping label."
- **Subscription cancellations.** The ones with the cancel button buried four screens deep, on purpose.

Every one of those is the same shape: annoying, browser-based, five to twenty minutes of your life, and completely scriptable by an agent that can see a screen and click. You've been the browser automation this whole time. You can stop.

## Who Should Steal This

Anyone with a Claude subscription and a cart they haven't checked out yet. Try it on your next purchase, tonight, before you hit "place order."

And if you run a small business, run it once just to feel what it's like to delegate a browser chore to an agent. The discount is the demo. The habit is the product. Once you've watched Claude grind through promo codes on your behalf, you'll start noticing every other twenty-minute browser errand in your week that deserves the same treatment.

---

## Keep Reading

- **[Automate Grocery Shopping With a Photo of a Recipe](/playbooks/grocery-autopilot/)**: the same photo-to-cart move, pointed at your weekly groceries.
- **[AI Negotiates Your Car Purchase, Saves $4,200](/playbooks/ai-car-negotiation/)**: what happens when you let the agent haggle over four figures instead of a promo code.
- **[AI Wins Your Insurance Dispute](/playbooks/ai-insurance-dispute/)**: another tedious consumer fight you can hand off entirely.
