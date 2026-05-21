---
layout: playbook.njk
title: "Stop Paying $10,000 for a Custom Website"
description: "A six-step workflow that scrapes a target site for brand assets, generates a hero animation, and rebuilds the whole site at modern quality in a single afternoon. The same pipeline that web agencies charge $10K-15K for, broken into one prompt per step."
date: 2026-05-20
difficulty: Beginner-Intermediate
cost: "$10-30 per site (API + image generation credits)"
timeToSetup: "An afternoon for the first one, an hour for every site after"
originalSource: "https://www.youtube.com/watch?v=1prtPthgkXg"
originalAuthor: "AI Boost Lab"
issueNumber: 14
permalink: /playbooks/stop-paying-for-custom-websites/
tags:
  - web-design
  - branding
  - agency-replacement
  - solopreneur
  - small-business
---

## Tools

- [**Claude Code**](#aff-claude-code): the brain that reads brand data and writes the new site
- [**Firecrawl**](#aff-firecrawl): website scraper that pulls logos, colors, fonts, and copy
- [**Gemini**](#aff-gemini): Nano Banana 2 for hero image and short transition video
- [**GitHub**](#aff-github): where the new site's code lives
- [**Vercel**](#aff-vercel): free hosting that publishes the live URL
- [**Anthropic**](#aff-anthropic): Claude API powering the workflow

## What You'll Build

A six-step pipeline that takes a tired website and gives you a brand-new one. Animated hero, modern layout, mobile-friendly, on a real URL. In about an afternoon.

This is the same set of steps a web design agency runs internally. They charge $8,000 to $15,000 for the deliverable because they have to do six different jobs end-to-end: research the brand, design the look, generate the assets, code the site, rebuild the content, and deploy. With Claude and a few free tools, each of those jobs becomes a single prompt.

You can run this on your own business's site. You can run it on a competitor's site (legally, for inspiration). You can run it for a client and bill them less than the old agency did. The pipeline doesn't care.

## Why This Works

The reason a custom website cost $10,000 was not the typing. The typing has always been fast. What you were paying for was the chain of decisions:

- Which colors and fonts represent this business?
- What's the visual style of the industry?
- What should the hero look like? What should the animation feel like?
- How should the layout flow? Where do the calls-to-action go?
- How do we make sure it works on phones?
- Where do we host it?

Six different people, or one person wearing six different hats, made those decisions over four to six weeks. Each decision required a separate Slack thread, a separate review, a separate revision round.

Every one of those six decisions is now a single prompt. The brand colors are extracted automatically from any reference site. The hero image is generated in seconds. The layout is written by the AI based on the brand brief. Mobile responsiveness is included by default. Deployment is one click.

The agency wasn't lying about the work. The work was real. It's just that the work no longer takes weeks.

## How the Six-Step Pipeline Works

### Step 1: Scrape the Brand

Firecrawl is a website scraper that pulls structured data out of any URL. Point it at a reference site (yours, a competitor's, or any site whose brand you want to model) and it returns:

- Every logo file on the page.
- Every color used (as hex codes).
- Every font family loaded.
- The HTML structure.
- The copy on every page.

You now have a complete extraction of the visual identity. No designer required.

### Step 2: Write the Brand Brief

Hand the Firecrawl output to Claude with a simple prompt: "Read this and write a one-page brand brief describing the visual identity, including color palette, typography pairing, and tone of voice."

Claude reads the raw extraction and produces a clean document. This is the same brand brief an agency would charge you $1,500 for as the "discovery" phase.

### Step 3: Generate the Hero

Nano Banana 2 is Google's image generator inside Gemini. It accepts a prompt that includes brand colors, style guidance, and product context. You feed it your brand brief and ask for:

1. A hero image for the homepage.
2. An "exploded" or "deconstructed" version of the same image.
3. A short transition video that goes from one to the other.

Total time: about three minutes. Total cost: a few cents in Gemini credits.

### Step 4: Build the Site Shell

Back to Claude. Give it the brand brief, the hero image, and the transition video, and ask it to write the site code. A modern stack (Next.js or plain HTML/CSS) with:

- The hero with the animation embedded.
- A clean layout with proper sections (about, services, contact).
- Mobile breakpoints that actually work.
- Subtle touches that make the site feel current (smooth scrolling, hover states, type animation if you want it).

Claude writes the whole shell. You get a working static site.

### Step 5: Rebuild the Content

Now the trick. Paste your existing site's text content into Claude and ask it to rebuild the structure into the new shell. Same words. Same sections. Better presentation. Tighter copy where it makes sense.

This is the step that turns a generic template into your specific site. Your services, your testimonials, your case studies, your contact info — all reformatted into the new design.

If the old site was on WordPress, you can export the content as a CSV and Claude can ingest it directly.

### Step 6: Push It Live

The final two clicks:

1. Push the code to GitHub. Claude can do this for you.
2. Connect the GitHub repo to Vercel. Vercel publishes the site to a live URL within 60 seconds. Free tier covers most small business traffic.

If you want a custom domain (e.g. `yourbusiness.com`), point the DNS at Vercel. It's a 10-minute task and the site loads on your domain.

Done. The old site can stay up at the old URL until you're ready to swap.

## Step-by-Step Setup

### Step 1: Pick a Reference Site

Don't start with a blank page. Pick a site whose vibe you like. It can be:

- A competitor whose site looks better than yours.
- A business in a completely different industry whose visual style you want to borrow.
- An old version of your own site that you liked but lost.

Have the URL ready before you start.

### Step 2: Run Firecrawl

Sign up for Firecrawl (free tier is plenty for a single site). Run the scrape on your reference URL. Save the output to a local file.

### Step 3: Spin Up Claude Code

Open Claude Code in the folder where you'll build the site. Drop the Firecrawl output into the folder. Prompt:

> Read the attached Firecrawl output. Write a one-page brand brief describing the visual identity (colors, typography, mood). Then list the four most important UI patterns this site uses.

Save the response as `brand-brief.md`. This file becomes the input to every subsequent step.

### Step 4: Generate the Hero in Gemini

Open Gemini. Paste this prompt with your own substitutions:

> Generate a hero image for a [your industry] business. Brand colors: [hex codes from brand brief]. Style: [tone from brand brief]. The hero should feel [modern / authoritative / approachable / etc.]. Generate three variants.

Pick the one you like. Generate the exploded version. Generate the transition video.

### Step 5: Write the Site Shell

Back in Claude Code:

> Using the brand brief and the hero image attached, build a modern single-page website using Next.js. Sections: Hero, Services, About, Testimonials, Contact. Use the brand colors from the brief. Embed the transition video in the hero. Make it mobile-first.

Claude generates the code. You get a working site.

### Step 6: Bring Over Your Content

Paste in your current site's text (or upload a CSV export). Prompt:

> Rebuild the existing content into the new site structure. Keep all the testimonials, services, and contact info. Tighten the copy where it's verbose. Don't change the meaning anywhere.

Review the result. Tweak the copy that doesn't land. Ship it.

### Step 7: Deploy

In the terminal:

```
git init
git add .
git commit -m "new site"
gh repo create my-business-site --public --push
```

Open Vercel. Click "New Project." Pick the repo. Click "Deploy." Wait 60 seconds. You have a live URL.

## Adapting This for Other Service Businesses

The same pipeline works for any deliverable an agency currently charges you for.

**Logo redesigns.** Firecrawl your old branding. Gemini generates new logo concepts. Claude writes the brand standards doc.

**Sales decks.** Firecrawl a competitor's deck. Claude writes the new one in your voice.

**Marketing emails and landing pages.** Same pipeline. Smaller deliverable, faster turnaround.

**Pitch decks for fundraising.** Brand brief from your existing materials. Slides generated against the brief. Customized per investor.

**One-pagers and case studies for clients.** Template once. Refill per client.

Every "deliverable an agency charges by the hour for" is now a templated workflow.

## Gotchas and Tips

- **You still have to read the output.** Claude can write a perfectly competent site. It cannot tell whether the testimonials are actually your best ones, or whether the services list is in the right order. Read everything before shipping.
- **Don't copy your competitor's brand outright.** Scraping for inspiration is fine. Generating an exact replica with their logo and colors will get you a cease-and-desist. Pull the structural patterns, not the literal assets.
- **Free hosting has limits.** Vercel's free tier is generous (100GB bandwidth/month) but if you have heavy traffic or video content, you'll hit the cap. The paid tier is $20/month.
- **SEO is not automatic.** A pretty new site can rank worse than the ugly old one if you break URL structures. Before swapping, redirect every old URL to the new equivalent. Claude can write the redirect rules for you.
- **The hero animation is the wow moment.** Spend extra time on Step 3. A good transition video is what makes the site feel premium. A bad one makes the whole site look cheap.
- **Save the brand brief.** Once you have it, every future deliverable (emails, decks, social media graphics) can reuse it. The brief is more valuable than the site.

## When to Still Pay an Agency

This pipeline is enough for most small business sites. It is not enough for:

- Highly interactive sites (booking systems, e-commerce with hundreds of products, customer portals).
- Sites with complex backend integrations (live inventory, gated content, custom CRMs).
- Brand identity work for a business with millions in marketing budget where small visual details translate into real ROI.

For everything else, an afternoon of prompts beats six weeks of Slack threads.

---

## Keep Reading

- **[Research Your Competitors' Ads and Launch Your Own Campaign on Meta](/playbooks/meta-ads-pipeline/)**: The advertising sibling to this playbook. Same Firecrawl-plus-image-gen pipeline pointed at competitor ads instead of competitor websites. Stand up a brand new site and a brand new ad campaign in the same afternoon.
- **[The One-Person Agency: Charge Agency Rates as a Solo Operator](/playbooks/one-person-agency/)**: If this playbook killed your reason to hire a web agency, this one shows you how to become the agency. Same pipeline, charge clients, keep the spread.
- **[Automate Your Entire Amazon Merch Upload Pipeline](/playbooks/amazon-merch-automation/)**: A different "designer-in-a-box" workflow, this one for product graphics instead of websites. Worth reading for the prompt patterns that turn brand briefs into finished visual assets.
