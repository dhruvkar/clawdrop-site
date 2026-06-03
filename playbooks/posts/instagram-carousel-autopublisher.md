---
layout: playbook.njk
title: "Post a Finished Instagram Carousel Every Day Without Opening Canva"
description: "One row in a content table goes in, a multi-image Instagram carousel comes out and publishes itself. The AI part is easy. The hard part is everything between five generated images and Instagram accepting them as one carousel. A builder lost a week on that plumbing so you don't have to. Here is the full stack."
date: 2026-06-03
difficulty: Intermediate
cost: "Low. n8n plus OpenAI and Gemini API usage. No designer, no scheduler subscription."
timeToSetup: "An afternoon, plus the week of Instagram plumbing the source already solved for you"
originalSource: "https://www.reddit.com/r/n8n/comments/1tki8pa/workflow_included_complete_instagram_carousel/"
originalAuthor: "markyonolan (r/n8n)"
tags:
  - instagram
  - content
  - social-media
  - carousel
  - n8n
  - automation
  - small-business
  - ecommerce
permalink: /playbooks/instagram-carousel-autopublisher/
---

## Tools

- [**n8n**](#aff-n8n): runs the whole pipeline, holds your content ideas in a Data Table, and carries the carousel state between steps.
- [**OpenAI (GPT-4.1)**](#aff-openai): turns one idea into multiple image prompts and a caption, returned as structured JSON.
- [**Gemini**](#aff-gemini): generates each slide image from the prompts.
- **A public image host that returns the correct Content-Type** (image/png or image/jpeg). This is the part that breaks everything if you get it wrong.
- [**Instagram Graph API**](#aff-instagram): publishes the finished carousel in a single call.

## What You'll Build

A pipeline where one row in a content table becomes a finished, published Instagram carousel, with no designer and no manual posting.

A builder named markyonolan shared the full workflow after spending a few weeks on it. His framing is the honest one: "The AI part is the easy bit. The hard part is everything between 'I have 5 generated images' and 'Instagram accepts them as one carousel.' That is where I lost a week, and what this post is really about."

You drop ideas into a table. The pipeline picks an unpublished one, writes the slide prompts and the caption, generates the images, hosts them correctly, and publishes the carousel to Instagram. Then it marks the row as published and moves on. You show up to a feed that posts itself.

## Why This Works

Carousels are the highest-effort, highest-reach format on Instagram, which is exactly why most small businesses post them rarely or not at all. Each one means an idea, a designer or an afternoon in Canva, copy, and remembering to post. So it does not happen, and the account goes quiet.

The bottleneck was never the ideas. It was the production line between an idea and a published post. This pipeline is that line, automated end to end. The reach format that used to cost you an afternoon now costs you a row in a spreadsheet. Consistency, the thing the algorithm actually rewards, stops depending on whether you felt like making a post that day.

## Prerequisites

- An n8n instance (cloud or self-hosted).
- API keys for OpenAI and Gemini.
- An Instagram Business or Creator account connected to the Instagram Graph API.
- A public image host that serves images with the correct Content-Type header (see Gotchas, this is non-negotiable).
- A Data Table (or sheet) of content ideas, each with a "published" flag.

## Step-by-Step Setup

### Step 1: Pull an Unpublished Idea

The workflow reads one row from your content Data Table where the published flag is not set. That row is the whole input: a topic or an angle.

### Step 2: Expand the Idea With GPT-4.1

GPT-4.1 takes the idea and returns structured JSON: a set of image prompts (one per slide) plus the caption. Asking for structured JSON, not prose, is what lets the rest of the workflow loop over the slides reliably.

### Step 3: Loop Through Each Prompt

Parse the JSON and loop. Each iteration handles one slide: generate the image, then host it.

### Step 4: Generate and Host Each Image

Gemini generates the slide from its prompt. The image is then uploaded to a public host that returns the correct Content-Type. Add a short rate-limit delay (the source used 15 seconds) so the image API does not silently throttle you mid-carousel.

### Step 5: Carry the URLs Across the Loop With Static Storage

This is the step that took the builder the longest. By default, the URL from slide 1 is gone by the time slide 2 runs, and merge nodes do not cleanly fix it. The fix is workflow static storage: a Code node inside the loop appends each new URL to a global array, and a node outside the loop reads the full array back. This is a reusable pattern for any fan-out-then-fan-in workflow.

### Step 6: Collect the URLs and Reset Storage

After the loop, gather all the slide URLs into one array. Reset the static storage immediately, or tomorrow's run inherits today's images.

### Step 7: Publish the Carousel in One Call

Send the array of public URLs to the Instagram Graph API as a single carousel post, with the caption.

### Step 8: Mark the Row Published

Flag the Data Table row as published so the next run picks up a fresh idea. The feed now advances on its own.

## Adapting This for Your Business

The pipeline does not care what the carousel is about. Point the content table at your niche and it produces your posts.

- **Local businesses.** Weekly "tips," before-and-afters, FAQ slides, and offers, posted on a steady cadence without a marketing hire.
- **Ecommerce.** Product education, comparison carousels, and how-to-use slides from a table of SKUs.
- **Coaches and creators.** Turn a list of frameworks or hooks into a posting schedule that runs itself.
- **Other platforms.** The same fan-out-then-fan-in pattern publishes carousels to LinkedIn or multi-image posts elsewhere, by swapping the final publish step.

## Gotchas and Tips

- **Instagram rejects almost every easy hosting workaround.** Carousels need public URLs that serve images with the correct Content-Type. Google Drive share links fail. Dropbox fails. Most free hosts strip the headers. Use a host that explicitly returns image/png or image/jpeg.
- **Loop iterations lose state by default.** Do not fight it with merge nodes. Use the workflow static storage pattern: append inside the loop, read after. This is the single hardest part of the build.
- **Reset storage after every publish.** Skip this and your next carousel ships with yesterday's slides mixed in.
- **Image APIs throttle silently.** Gemini will happily do five images then quietly fail. Add a delay between generations rather than trusting it to keep up.
- **Keep a human eye on the first few.** Let the workflow draft and stage, and review the first week of carousels before you trust it to publish unattended.

## What This Replaces

Before this pipeline, a consistent carousel feed cost you one of these:

- **A designer or VA:** a few hundred dollars a month to turn ideas into slides, plus the back-and-forth.
- **Your own afternoons:** the idea, the Canva session, the copy, the upload, repeated until you quietly stop.
- **A scheduler subscription:** Later, Buffer, or Metricool will queue and post for you, but you still have to make every image yourself. They solve the posting, not the production.

After this pipeline, the production and the posting are both automated, and the only recurring cost is a few cents of API usage per carousel. You are paying for ideas, not for the assembly line that turns them into posts.

---

## Keep Reading

- **[This AI Content Factory Writes, Researches, and Designs While You Sleep](/playbooks/ai-content-factory/)**: the broader content system this carousel pipeline can plug into.
- **[Record Your Screen Once. Your AI Cuts the Shorts, Writes the Captions, and Posts Everywhere.](/playbooks/no-code-youtube-pipeline/)**: the same publish-it-for-me idea applied to short video.
