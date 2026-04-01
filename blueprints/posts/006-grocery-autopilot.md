---
layout: blueprint.njk
title: "Automate Grocery Shopping With a Photo of a Recipe"
description: "Snap a photo of a recipe. Your AI agent extracts the ingredients, maps them to your grocery store, adds everything to your online cart, and books a delivery slot. Dinner planned in under 5 minutes."
date: 2026-04-01
difficulty: Intermediate
cost: "$5-15/month (API costs only)"
timeToSetup: "2-3 hours"
originalSource: "https://thenuancedperspective.substack.com/p/how-are-people-using-openclaw"
originalAuthor: "The Nuanced Perspective / OpenClaw Community"
issueNumber: 6
permalink: /blueprints/grocery-autopilot/
tags:
  - grocery
  - automation
  - household
  - browser-automation
  - meal-planning
---

## What You'll Build

A system where you take a photo of a recipe (from a cookbook, a magazine, your phone, wherever) and your AI agent handles the rest. It reads the recipe, extracts every ingredient, checks what you already have on hand, maps what's missing to your grocery store's online platform, adds everything to your cart, and books a delivery slot. You go from "that looks good" to "groceries arriving tomorrow" in under 5 minutes.

No app switching. No manually typing "500g chicken thighs" into a search bar. No realizing at checkout that you forgot the cilantro.

## Why This Works

Grocery shopping is one of those tasks that feels simple but eats an unreasonable amount of time. The average household spends 40+ minutes per week on grocery shopping, and that doesn't count the meal planning that happens before it.

The friction isn't buying the groceries. It's the translation layer between "I want to make this" and "these items are in my cart." You see a recipe, you have to read through the ingredients, figure out what you already have, convert measurements, find each item on your store's website, pick the right brand and size, and handle substitutions when something's out of stock. That's 15-20 minutes per recipe, minimum.

An AI agent collapses all of that into one step. You take a photo. It handles the rest. The reason this works so well is that every sub-task (reading a recipe, searching a grocery store, adding to cart) is something AI agents are already good at individually. Chaining them together is where the magic happens.

## How It Works

The system has four stages that run in sequence.

### Stage 1: Recipe Extraction

You send a photo to the agent. This can be:
- A photo of a cookbook page
- A screenshot from a food blog
- A URL to an online recipe
- A handwritten recipe on a sticky note (yes, it can read handwriting)
- A voice message saying "I want to make pad thai for four people"

The agent extracts:
- **Dish name** and serving count
- **Ingredient list** with quantities and units
- **Prep notes** that affect shopping (e.g., "marinate overnight" means you need to buy a day early)

It normalizes everything into a standard format. "2 cloves garlic, minced" becomes `garlic, 2 cloves`. "A handful of fresh basil" becomes `fresh basil, 1 bunch`.

### Stage 2: Pantry Check

This is optional but saves money. The agent maintains a running list of what's in your kitchen. You can set this up by:
- Telling it what you have ("we always have olive oil, salt, pepper, rice")
- Sending a photo of your fridge or pantry periodically
- Letting it learn over time (if you never buy salt, it assumes you have it)

The agent compares the recipe's ingredient list against your pantry and removes anything you already have. No more buying a second bottle of soy sauce because you forgot you had one.

### Stage 3: Store Mapping

This is the heavy lifting. The agent opens your grocery store's website (using browser automation) and searches for each ingredient. For each item, it:

1. Searches the store's product catalog
2. Picks the best match based on quantity, brand preference, and price
3. Handles unit conversions (recipe says "500g chicken," store sells by the pound)
4. Selects substitutions if your preferred item is out of stock
5. Adds each item to your cart

The agent learns your preferences over time. If you always buy organic eggs, it stops picking the conventional ones. If you prefer a specific brand of pasta, it defaults to that.

### Stage 4: Checkout and Delivery

Once everything's in the cart, the agent:
- Reviews the total and flags anything that seems overpriced
- Books the next available delivery slot (or your preferred time)
- Sends you a summary for final approval before confirming

You get a message like: "Cart ready: 12 items, $47.30. Delivery Tuesday 2-4pm. Confirm?"

One tap and you're done.

## Step-by-Step Setup

### Step 1: Set Up Image Processing

The agent needs to be able to read recipe photos. This works out of the box with most modern AI models (Claude, GPT-4, Gemini all handle image-to-text well).

Test it by sending a photo of a recipe and asking the agent to list the ingredients. If it gets them right, you're good.

For URLs, the agent fetches the page and extracts the recipe. Most food blogs use structured recipe data (JSON-LD), which makes extraction clean. For blogs that don't, the agent parses the page content directly.

### Step 2: Configure Browser Automation

This is the most important step. The agent needs to interact with your grocery store's website like a human would.

1. Set up browser automation (OpenClaw's browser relay, Playwright, or similar)
2. Log into your grocery store's online platform
3. Test that the agent can search for products and add them to cart

**Supported stores depend on your setup.** Any grocery store with an online ordering platform works. The agent uses the same web interface you would. No API keys or special integrations needed.

Common stores people have set up:
- Major chains with online ordering (Walmart, Kroger, Tesco, Woolworths)
- Instacart (works with most local stores)
- Amazon Fresh
- Local delivery services with web ordering

### Step 3: Build the Recipe-to-Cart Pipeline

Create a skill or script that chains the four stages together:

```
1. Receive image/URL/text → extract recipe
2. Parse ingredients into structured list
3. Check against pantry (if configured)
4. For each ingredient:
   a. Search store website
   b. Select best match
   c. Add to cart
5. Review cart total
6. Book delivery slot
7. Send summary for approval
```

The key is handling edge cases:
- **Ingredient not found:** Try alternative search terms. "Scallions" → "green onions" → "spring onions"
- **Multiple sizes available:** Pick the size closest to what the recipe needs without going under
- **Substitutions:** If an item is out of stock, suggest alternatives and ask before adding

### Step 4: Set Up Your Pantry Tracker (Optional)

A simple list that the agent maintains:

```
Always in stock:
- olive oil, salt, pepper, sugar, flour
- soy sauce, fish sauce, sesame oil
- rice, pasta, canned tomatoes
- butter, eggs, milk

Last updated: [date]
```

Update it whenever you run low on something. Or let the agent ask once a week: "Still have olive oil, rice, and eggs?"

### Step 5: Add Meal Planning (Optional)

Once the basic pipeline works, extend it:
- **Weekly meal plan:** Send 5-7 recipes on Sunday, agent combines all ingredient lists, dedupes, and does one big order
- **Budget mode:** Set a weekly grocery budget, agent optimizes selections to stay under it
- **Dietary filters:** Agent flags ingredients that don't match dietary restrictions (gluten-free, dairy-free, etc.)
- **Seasonal suggestions:** Agent recommends recipes based on what's in season and on sale

## Customization Ideas

**Batch cooking:** Send 3 recipes that share common ingredients. The agent buys in bulk where it makes sense and notes which ingredients are shared across meals.

**Family preferences:** "Don't buy anything with nuts" or "always get whole wheat bread instead of white." The agent applies these rules to every order.

**Budget tracking:** The agent logs every grocery order. After a month, it can tell you your average weekly spend, most expensive recurring items, and where you could save.

**Recipe discovery:** "Find me a recipe that uses the chicken and broccoli I already have." The agent searches recipe sites, filters for ones matching your pantry, and queues up the grocery order for missing ingredients only.

**Recurring orders:** Some items you buy every week regardless of recipes. The agent auto-adds milk, bread, eggs, bananas (or whatever your staples are) to every order.

## Gotchas and Tips

- **Start with one store.** Get the browser automation working perfectly with your primary grocery store before trying to support multiple. Each store's website is different and needs its own handling.
- **Login sessions expire.** Grocery store websites log you out periodically. Build in re-authentication handling so the agent doesn't fail silently at 2am.
- **Store websites change.** Online grocery platforms update their UI regularly. Expect to tweak the automation every few months when buttons move or class names change. Using accessibility labels and text matching (instead of CSS selectors) makes this more resilient.
- **Unit conversion is tricky.** Recipes use cups, tablespoons, grams, ounces, "a pinch," "a handful." The agent needs a solid conversion library. Build a lookup table for common conversions and edge cases.
- **Delivery slots fill up.** If you're ordering for same-day or next-day, book the slot first and then fill the cart. Otherwise you might build a perfect cart only to find no delivery times available.
- **Price varies by size.** The 500g bag of rice and the 2kg bag have very different per-unit costs. Decide upfront whether the agent should optimize for recipe-exact quantities or bulk value.
- **Fresh produce is subjective.** The agent can add "4 ripe avocados" to your cart, but it can't squeeze them. For items where freshness matters, you might prefer to pick those up yourself and let the agent handle the shelf-stable items.
