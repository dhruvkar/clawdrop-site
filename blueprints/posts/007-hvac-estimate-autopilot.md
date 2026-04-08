---
layout: blueprint.njk
title: "This HVAC Guy Spent Friday Night Setting Up AI. Now His Estimates Write Themselves."
description: "How a non-developer HVAC sales rep connected AI to his estimating software and email. Draft estimates assembled automatically, repetitive quote questions answered on autopilot. Works for any trade or field service business with repetitive paperwork."
date: 2026-04-08
difficulty: Beginner
cost: "$5-15/month (VPS hosting)"
timeToSetup: "One evening"
originalSource: "https://www.reddit.com/r/OpenClawUseCases/comments/1sdj5jh/how_might_i_be_able_to_incorporate_openclaw_into/"
originalAuthor: "Net_Zero_Heating_AC"
issueNumber: 7
permalink: /blueprints/hvac-estimate-autopilot/
tags:
  - trades
  - field-service
  - estimating
  - email
  - blue-collar
  - solopreneur
  - automation
  - hvac
---

## What You'll Build

An AI assistant that drafts your job estimates and handles your repetitive emails while you're out on job sites. You tell it what the customer needs over Telegram from your truck. It pulls the equipment and pricing from your estimating software, assembles a professional estimate, and sends you a draft to review. Meanwhile, it's answering the common questions that pile up in your inbox all day. "How much for a 3-ton unit?" "Do you offer financing?" "What's your warranty?" Handled.

This comes from an HVAC sales rep who set the whole thing up on a Friday night. He's not a developer. He doesn't write code. He installs air conditioners for a living. But he was tired of spending his evenings doing the same paperwork over and over, so he did something about it.

The pattern works for any trade or field service business where you're building similar estimates all day: HVAC, plumbing, electrical, roofing, landscaping, painting, cleaning services, pool maintenance. If your estimates follow a template with minor variations, this is for you.

## The Problem Every Tradesperson Knows

You finish a job at 5 PM. You've got four estimates to write up from today's site visits. Each one takes 20-30 minutes because you're pulling equipment from your software, looking up prices, adding labor and parts, adjusting for the specifics of each job.

Most of those estimates are 80% identical. Same equipment options, same labor rates, same warranty language. The only things that change are the customer details, the specific equipment configuration, and maybe some site-specific adjustments.

Then there's email. Your inbox has 15 messages and half of them are asking questions you've answered a hundred times. Pricing ranges, availability, financing options, what brands you carry. Each reply takes 3-5 minutes to write. Not because the answer is hard, but because you have to type it out nicely every single time.

Add it all up and you're spending 2-3 hours every evening on work that feels like it should take 30 minutes. That's 10-15 hours a week of repetitive admin. For a sole proprietor billing $75-150/hour on actual jobs, that's $750-$2,250/week in lost revenue capacity.

## How It Works

The setup has two parts: estimate assembly and email handling. You can start with one and add the other later.

### Part 1: Estimate Assembly

Most cloud estimating software (ServiceFusion, Jobber, Housecall Pro, ServiceTitan) has an API or at least an integration layer. The AI connects to your estimating platform and learns your catalog: equipment models, pricing tiers, standard labor rates, parts markups, warranty terms.

The workflow:

```
YOU (on job site, via Telegram):
  "3-ton Carrier heat pump, crawl space install,
   existing ductwork looks good, need new disconnect"
        |
        v
AI AGENT:
  - Pulls Carrier 3-ton heat pump from your catalog
  - Adds standard installation labor for crawl space
  - Adds electrical disconnect + permit
  - Applies your markup and margin rules
  - Formats it in your estimate template
        |
        v
YOU (review on phone):
  "Looks good, bump labor up $200 for tight access"
        |
        v
AI AGENT:
  - Adjusts labor line item
  - Generates final PDF
  - Ready to send to customer
```

The estimate that used to take 25 minutes now takes 2 minutes of your attention. The AI did the assembly. You did the judgment call on the tight access upcharge. That's the right split: AI handles the repetitive parts, you handle the parts that require experience.

### Part 2: Email Autopilot

This is actually the easier part and where most people should start.

You write out your standard answers once. Think of it as training a new office assistant:

- "When someone asks about pricing, here's how we answer..."
- "When someone asks about financing, here's our response..."
- "When someone wants to schedule an estimate, here's what we say..."
- "When someone asks what brands we carry, here's the list..."

The AI monitors your inbox. When a new email matches one of these patterns, it drafts a response using your approved language, your tone, your details. It doesn't send it automatically (unless you want it to). It drafts it and pings you on Telegram: "Got a pricing question from Sarah Johnson. Here's my draft response. Send it?"

You glance at it, tap approve, and it's gone. The 5-minute reply became a 5-second review.

For the questions that don't fit a pattern, the AI flags them for your personal attention: "This one looks custom. Mike is asking about a commercial install with specific requirements. You should handle this directly."

### The Setup (One Evening)

**What you need:**
- A VPS (Hostinger, DigitalOcean, or similar, $5-15/month)
- OpenClaw installed with Telegram access
- Your estimating software credentials (for the API connection)
- Your Gmail or business email credentials
- One evening and some patience

**Step 1: Get OpenClaw running.** Install on your VPS, connect Telegram. There are one-click guides for this. The original poster did it on a Friday night with no dev background.

**Step 2: Connect your email.** Give the agent access to your Gmail or business email. Start with read-only if you're nervous about it sending things.

**Step 3: Write your FAQ responses.** Open a document and write out your standard answers to the 10-15 most common questions you get. Be specific. Include your actual prices, your actual warranty terms, your actual service area. This is the knowledge base your AI will use.

**Step 4: Connect your estimating software.** This varies by platform. If your software has an API, the AI can connect directly. If not, you can export your price list as a spreadsheet and the AI works from that. Less elegant but still saves hours.

**Step 5: Test with real scenarios.** Send yourself some test emails. Ask the AI to draft an estimate for a job you did last week. Compare the output to what you actually sent. Tweak until it matches your style.

## What Changes After Setup

**Week 1:** The email handling clicks immediately. You're approving draft responses from your truck instead of typing them out at night. Feels like having a receptionist.

**Week 2:** The estimate drafts start getting accurate. The AI has seen enough of your corrections to understand your pricing patterns and preferences.

**Month 1:** You realize you've reclaimed 10+ hours per week. You're either doing more jobs, quoting more customers, or actually taking evenings off.

**Month 3:** The AI knows your business better than a new hire would after 90 days. It knows which equipment you prefer for which situations, how you handle difficult installs, and exactly how you like your estimates formatted.

## Beyond HVAC

The same pattern applies to any service business with repetitive quoting:

**Plumbing:** Water heater replacements, repipe estimates, fixture installs. Pull from your parts catalog, add labor based on job complexity, generate the quote.

**Electrical:** Panel upgrades, EV charger installs, lighting retrofits. Same equipment-plus-labor template with minor variations.

**Roofing:** Square footage calculations, material options, tear-off vs overlay pricing. The AI can even pull measurements from satellite imagery tools you're already using.

**Landscaping:** Hardscape estimates, irrigation layouts, maintenance contracts. Template-heavy work that's perfect for automation.

**Cleaning services:** Square footage pricing, frequency discounts, add-on services. Some of the most repetitive quoting in any industry.

**General contractors:** Subcontractor coordination, material takeoffs, phased billing schedules. More complex but the template structure still applies.

The common thread: if you're building similar documents over and over with minor variations, the AI handles the 80% that's identical and you handle the 20% that requires your expertise.

## Gotchas and Tips

- **Start with email, not estimates.** Email handling is simpler to set up and delivers value on day one. Get that running smoothly before tackling the estimating software integration.
- **Don't let it send emails without your approval at first.** Draft mode only for at least two weeks. You need to build trust in its judgment before letting it fly solo.
- **Your FAQ document is everything.** Spend real time on it. The better your initial answers, the less correction you'll do later. Update it when you get a question the AI couldn't handle.
- **Price lists change.** When your supplier updates pricing, update the AI's data. Stale prices in estimates is worse than no automation at all.
- **The Telegram-from-truck workflow is key.** The whole point is that you're productive while mobile. If you have to sit at a computer to use this, you've missed the benefit.
- **Customers can't tell.** Your estimates still look like your estimates. Your emails still sound like you. The AI uses your templates, your tone, your language. Nobody knows or needs to know.
- **Keep the human on the big deals.** Use the AI for routine residential work. For commercial contracts or large projects, do those yourself. The AI is your workhorse for volume, not your closer for whales.

---

## Keep Reading

- **[The One-Person Agency](/blueprints/one-person-agency/)** — The same AI-handles-production, you-handle-clients pattern applied to digital services.
- **[Give Your AI a Second Brain](/blueprints/ai-second-brain-karpathy/)** — Feed your AI every manual, spec sheet, and installation guide you've ever used. It gets smarter about your trade over time.
