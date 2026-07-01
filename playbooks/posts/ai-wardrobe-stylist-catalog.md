---
layout: playbook.njk
title: "Snap a Few Selfies, Get Your Whole Wardrobe Cataloged and Styled"
description: "An AI agent takes ordinary phone photos, isolates every piece of clothing, tags it by type and color, and builds a searchable catalog it can style outfits from. The same trick turns a reseller's or boutique's inventory photos into listings in minutes."
date: 2026-07-01
difficulty: Intermediate
cost: "About $20/month in AI usage, plus a few dollars in image-processing credits."
timeToSetup: "A weekend to build it, seconds per photo after that."
originalSource: "https://discord.com/channels/1456350064065904867/1456609488202105005/1463976494203404289"
originalAuthor: "kitze (@thekitze, OpenClaw community Discord)"
tags:
  - ecommerce
  - retail
  - inventory
  - creative
  - home
  - automation
  - image-recognition
permalink: /playbooks/ai-wardrobe-stylist-catalog/
---

## Tools

- [**OpenClaw**](#aff-openclaw): the AI agent that runs the show and spins up helpers to process each photo at once.
- [**OpenAI**](#aff-openai): the vision model that looks at a photo and identifies what it is seeing, the clothing, the colors, the style.
- [**Gemini**](#aff-gemini): a strong alternative vision model if you prefer Google's. Either works.
- **fal**: a service that runs image models on demand, used here to cleanly cut a single clothing item out of a busy photo. Any hosted image tool that can isolate objects works.
- [**SQLite**](#aff-sqlite): the free, self-setting-up catalog where every tagged item gets stored so you can search it later.

## What You'll Build

An agent that turns a pile of random photos into an organized, searchable wardrobe, then styles outfits from it.

You send it selfies from your camera roll. For each photo, it launches a small army of helper agents, one per clothing item. Each helper isolates that single item out of the picture, pulls its dominant colors, figures out what it is, a navy overcoat, a white sneaker, a striped tee, and files it into a catalog. Once your closet is cataloged, it can start assembling outfits.

The original build comes from a well-known developer in the OpenClaw community who did exactly this with photos of his own clothes, then set his sights on having it suggest full outfits. It is a fun personal project. It is also, with almost no changes, a real business tool.

## The Personal Version First

Here is what happens when you point it at yourself.

You dump a few dozen photos of yourself wearing various things into the agent. You do not stage anything. These are just normal pictures.

The agent processes them in parallel. Say one photo shows you in a jacket, a shirt, and jeans. It spins up three helpers. One extracts the jacket, one the shirt, one the jeans. Each helper cleans the item up, reads its color, classifies it, and saves it. Do that across your whole camera roll and you end up with a complete, tagged inventory of what you actually own, not what you think you own.

Then the fun part: you ask it to build outfits. "Something for a dinner, warm weather." "What goes with the green shirt." It works from your real closet, so the suggestions are things you can actually wear tonight.

## Why This Is Secretly a Business Tool

Now change one word. Instead of "my clothes," say "my inventory."

The exact same pipeline, snap a photo, isolate each item, tag it by type and color, file it into a searchable catalog, is the single most tedious job in a whole set of businesses:

**Clothing resellers and thrift flippers.** If you sell on Poshmark, Depop, eBay, or Vinted, you know the grind. Every item has to be photographed, described, tagged, and priced by hand. This agent looks at your photo, tells you it is a size-medium wool blazer in charcoal, and hands you a clean cut-out image and a starter description. What took two minutes an item takes seconds.

**Small boutiques and consignment shops.** New stock comes in as a box of stuff and a phone full of photos. Turning that into an organized, searchable inventory is a person's afternoon. Here it is a batch job.

**Stylists and personal shoppers.** The value is the outfit engine. Catalog a client's closet once, and you can propose looks from what they already own, or spot the exact gap a new piece would fill.

The personal build is the proof. The business build is the same code with your product photos instead of your selfies.

## How It Works

**Step 1: Gather photos.** For a wardrobe, your camera roll. For a shop, however you already photograph stock. Messy is fine.

**Step 2: Let the agent fan out.** Tell it to catalog the photos. It reads each one, finds every distinct item, and hands each item to a helper. Running these in parallel is why a hundred photos does not take a hundred times as long.

**Step 3: Each item gets processed.** The helper isolates the single item, cleans up the image, extracts the dominant colors, and classifies it, category, color, and any obvious attributes. All of that gets written to the catalog.

**Step 4: Search and style.** Now you can query it. "All the blue tops." "Everything I have not tagged yet." Or, for the wardrobe version, "put together three outfits for a warm evening."

**Step 5 (business version): generate listings.** Add a step where, for each item, the agent also drafts a title, a description, and a suggested price. Now your catalog is a stack of ready-to-post listings.

## Gotchas and Tips

- **Photo quality sets the ceiling.** Good light and a clean background make the isolation step far more accurate. For a shop, a cheap lightbox pays for itself.
- **Fix the categories that matter to you.** The agent's default labels are generic. If your business cares about "cocktail" versus "casual," teach it those buckets up front.
- **Isolating items costs a little per image.** It is cents, but at thousands of items it adds up. Batch overnight and it is trivial.
- **Keep a human on pricing.** Let the agent draft prices, but a reseller's eye for what a piece will actually fetch is still worth more than the model's guess. Approve before you post.
- **Start with the personal version even if you want the business one.** Cataloging your own closet in an afternoon teaches you exactly where the pipeline is strong and where it needs your correction, before you trust it with inventory.

---

## Keep Reading

- **[Snap a Photo, Get a Live Shopify Listing in Minutes](/playbooks/photo-to-shopify-listing/)**: the same photo-to-catalog trick, taken all the way to a published product page.
- **[Automate Your Entire Amazon Merch Upload Pipeline](/playbooks/amazon-merch-automation/)**: another design-to-listing pipeline for people who sell a lot of similar items.
- **[Automate Grocery Shopping With a Photo of a Recipe](/playbooks/ai-grocery-shopping/)**: proof that a single phone photo is enough for an agent to act on.
