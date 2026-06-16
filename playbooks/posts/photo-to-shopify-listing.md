---
layout: playbook.njk
title: "Snap a Photo, Get a Live Shopify Listing in Minutes"
description: "Build an agent that takes a product photo or a link, removes the background, rewrites the title and description for SEO, and posts the product live on Shopify with one command. Replace your listing VA and the work that used to take weeks."
date: 2026-06-16
difficulty: Intermediate
cost: "A $20/month OpenAI plan for the image editing, on top of your Claude usage. Shopify you already pay for."
timeToSetup: "An afternoon to wire up the Shopify connection and the image step."
originalSource: "https://www.reddit.com/r/openclaw/comments/1u3ivxv/"
originalAuthor: "hawkph (r/openclaw)"
tags:
  - shopify
  - ecommerce
  - product-listings
  - seo
  - automation
  - small-business
  - image-editing
  - openclaw
permalink: /playbooks/photo-to-shopify-listing/
---

## Tools

- [**Shopify**](#aff-shopify): where your store lives and where the product actually goes live. You already pay for it. The agent posts straight into it.
- [**Claude Code**](#aff-claude-code): the agent that runs the whole job. It takes your photo or link, drives the other tools, and pushes the finished listing to Shopify.
- [**OpenClaw**](#aff-openclaw): the connector layer that holds your Shopify connection and skills, so the agent can reach into your store instead of you clicking around the admin panel.
- [**OpenAI**](#aff-openai): the image model, gpt-image-2, that does the background removal and image cleanup. The Reddit poster does not trust anything else for this, so a $20/month plan here is the one extra cost.
- A product photo or a product link. That is the entire input. The agent does the rest.

## What You'll Build

A one-command agent that turns a raw product photo into a finished, SEO-written, background-cleaned Shopify listing that is live on your store before you finish your coffee.

A guy on Reddit, posting under hawkph, was helping his family bring their Shopify store up to speed. They sell across Wayfair, Amazon, eBay, and Etsy, and the main Shopify store has to stay complete and current. That is a brutal amount of listing work. So he built an OpenClaw skill that does the whole pipeline: it takes a product image or a link, extracts the image, removes the background, rewrites the title and description for SEO, and posts the product live on Shopify.

He triggers it with a single line. Something like "/[name]2shopify [link]" or even "postshopify using attached image and try to describe it," and it just goes. Behind the scenes the skill is holding his Shopify CLI connection string and his Shopify skills, so the agent already knows how to talk to his store.

His own words on what it saved him: "This kind of work would take me weeks to do. Now it's literally few minutes." You are building that. Not a fancy dashboard, just a command that takes a photo and gives back a live listing.

## Why This Works

Product listing is the dictionary definition of work that is tedious but not hard. Crop the photo. Knock out the background. Write a title that has the right keywords in it. Write a description that does not read like a robot wrote it. Fill in the fields. Hit publish. Then do it again, and again, for every SKU, across every channel. It is a person's whole afternoon, and it is the same six moves every time.

That is exactly the shape of job an agent eats alive. Each step is small and rule-following on its own. The only reason it costs money today is that it has to be done by a human who gets bored, makes typos, and can only do one listing at a time. An agent does all six steps in sequence, in seconds, and does not get bored on listing forty.

The SEO piece matters more than people think. A listing VA writing fifty descriptions a day is not researching keywords for each one. They are pattern-matching and moving on. A language model rewriting the title and description can actually weave in the terms shoppers search for, every single time, without it being a slog. That is the part that quietly makes you money instead of just saving you time.

And the image work is where most cheap automation falls down, which is why the Reddit poster is blunt about it: he does not trust any model besides Gemini or OpenAI for image editing. He keeps a $20/month OpenAI subscription and uses gpt-image-2 for the background removal specifically. That one opinionated choice is what makes the output good enough to actually ship.

## Prerequisites

- A Shopify store you can connect to, with admin access so the agent can create products.
- Claude Code installed, with OpenClaw set up so the agent can reach Shopify through your connection.
- An OpenAI plan, the $20/month tier, for the image model that does background removal. This is the one extra cost over your Claude usage.
- Your Shopify CLI connection string or admin credentials, stored where the skill can use them, not pasted into a chat.
- A rough sense of how you want titles and descriptions to read, so you can hand the agent your voice instead of generic copy.

## Step-by-Step Setup

### Step 1: Connect the Agent to Your Shopify Store

Wire Claude Code to Shopify through OpenClaw. The Reddit poster's skill holds his Shopify CLI connection string and Shopify skills, so the agent already knows how to authenticate and create a product without him touching the admin. Get this connection working first and test it by having the agent create one throwaway draft product. If that works, the hard plumbing is done.

### Step 2: Set Up the Image Model

This is the step people cut corners on, and it is the one the Reddit poster is loudest about. Sign up for the $20/month OpenAI plan and point the image step at gpt-image-2. Its only job here is taking your raw product photo and removing the background cleanly. Do not substitute a free background-removal tool to save twenty bucks. The whole listing looks cheap if the cutout is bad.

### Step 3: Build the Pipeline as One Skill

Package the steps into a single OpenClaw skill so the agent runs them in order from one command. The sequence is: take the image or link, extract the image, remove the background with the OpenAI model, rewrite the title and description for SEO, then post the product live on Shopify. The point is that you trigger one thing and the whole chain fires. No babysitting between steps.

### Step 4: Teach It Your Voice and Your SEO

The first pass is where you spend your thought. Give the agent a few examples of titles and descriptions you actually like, plus the keywords your shoppers search for in your niche. Tell it the format you want: how long the title runs, what the description should always include, what it should never say. After that, it applies your style to every listing without you re-explaining.

### Step 5: Trigger It With One Line

Now it is a command. The Reddit poster uses something like "/[name]2shopify [link]" when he has a product URL, or "postshopify using attached image and try to describe it" when he just has a photo. Pick a trigger phrase that is easy to remember and wire it to the skill. Feed it a photo or a link, and the finished listing should appear live on Shopify.

### Step 6: Review the First Batch Before You Trust It

Run your first ten or twenty listings with your eyes on them. Check the background cutouts, read the descriptions, confirm the titles read like a human wrote them and have the right keywords. Fix the skill's instructions where it drifts. Once a batch comes out clean with no edits from you, you can start trusting it on volume and stop reviewing every one.

## Adapting This for Your Business

The pipeline is the same for anyone listing products online. What changes is the input and the channels.

- **Single-channel Shopify sellers.** The simplest case. Photo in, live listing out. You may not even need the link-handling part, just the attached-image path.
- **Multi-channel sellers.** The Reddit poster is on Wayfair, Amazon, eBay, and Etsy too. Keep Shopify as the clean master, then extend the skill to push the same finished copy and images out to the other channels' formats.
- **Dropshippers and resellers.** This is where the link trigger shines. Feed it a supplier URL, let the agent pull the image and details, then rewrite everything in your voice so your listing does not look copy-pasted from the source.
- **Anyone paying a listing VA per product.** That per-SKU fee is the line item this kills. Run the agent next to your VA for a week, compare the output, then make the call.

## Gotchas and Tips

- **Do not cheap out on the image model.** The Reddit poster will not use anything but Gemini or OpenAI for image work, and he pays for it on purpose. A bad background cutout is the fastest way to make a real product look like a scam. Spend the $20.
- **Review the SEO copy at first.** A language model can stuff keywords or write a description that is technically fine but off-brand. Read the first batch closely and tune your instructions. Once it matches your voice, you can loosen up.
- **Keep the credentials out of the chat.** Your Shopify connection string lives inside the skill, not pasted into a prompt every time. Treat it like the password it is.
- **Post as draft first if you are nervous.** You can have the skill create the product as a Shopify draft instead of going live, review it in the admin, then publish. Slower, but a good training-wheels mode for your first week.
- **Garbage photo in, garbage listing out.** The agent removes the background, it does not perform miracles. A blurry, badly lit photo still produces a blurry listing. The better your input photo, the less you touch the output.
- **You are running a system now, not buying a service.** If the skill breaks, your listings stop. Build it simply, know which step failed when something looks wrong, and keep your VA's number until you have a few hundred clean listings behind you.

## What This Replaces

Before this, getting a product live meant paying for three separate things:

- **A product-listing VA or e-commerce listing agency**, charging per SKU or on a monthly retainer to crop photos, write copy, and fill in Shopify fields by hand. The slow, repetitive work that the Reddit poster said "would take me weeks to do."
- **A paid background-removal app**, a monthly subscription just to knock out backgrounds, replaced by the OpenAI image step that is already in the pipeline.
- **An SEO product-description copywriter**, hired to make titles and descriptions rank, now handled in the same one-command run.

After this, you snap a photo or paste a link, type one line, and a clean, SEO-written, background-removed product is live on your Shopify store. Weeks of work, the poster says, collapsed to "literally few minutes." The only new cost is a $20/month OpenAI plan, which is cheaper than a single hour of a decent copywriter.

---

## Keep Reading

- **[The Affiliate Marketing Intern That Never Sleeps](/playbooks/affiliate-commerce-operator/)**: the same one-command, agent-runs-the-whole-job pattern, pointed at affiliate commerce instead of your own catalog.
- **[Skip the Research VA: Turn Any Company URL Into a Battle Plan](/playbooks/company-research-brief-agent/)**: another job you used to hand a VA, replaced by an agent that takes a link and gives back finished work.
- **[Replace Your Content Strategist's Monday Morning](/playbooks/youtube-competitor-intel-agents/)**: the same instinct applied to content and competitive research, cutting another line item off your payroll.
