---
layout: playbook.njk
title: "Two Prompts and Your HubSpot Just Replaced Your Enrichment Tool"
description: "A HubSpot operator wired Claude into the official connector. Now every contact gets researched, enriched, and personalized for outbound automatically. No Apollo, no Clearbit, no SDR doing copy-paste. Two prompts, four custom properties, one Sequence."
date: 2026-05-13
difficulty: Beginner
cost: "$20/month (Claude Pro)"
timeToSetup: "An afternoon"
originalSource: "https://www.youtube.com/watch?v=dLtZBvoVci4"
originalAuthor: "Greg the HubSpot Guy"
permalink: /playbooks/hubspot-research-agent/
tags:
  - hubspot
  - crm
  - outbound
  - sales
  - sdr
  - personalization
  - revops
  - b2b-sales
---

## Tools

- [**Claude**](#aff-claude): the AI doing the research and writing. Pro or Team plan to use the HubSpot connector.
- [**HubSpot**](#aff-hubspot): the CRM you already pay for. Connector is free.
- [**Gmail**](#aff-gmail) or [**Outlook**](#aff-outlook): the inbox HubSpot Sequences send from. No changes needed.

## What You'll Build

An automated research and personalization layer that sits between "list pulled from a HubSpot segment" and "first-touch email goes out." You define four custom contact properties. Claude pulls a segment of contacts. For each one, it researches the company across Google, LinkedIn, and the open web. It writes structured findings back into HubSpot. Your existing Sequence sends an email using those findings as personalization tokens. Every email is fully personalized. You wrote one template.

This comes from a HubSpot consultant who built it for his own outbound. No code. No paid enrichment tool. No Zapier middleware. Just the official HubSpot connector for Claude and two prompts.

The pattern is the important part. Outbound is the most visual demo of it, but the same agent works for account research, customer success briefings, and inbound lead enrichment.

## The Problem Every RevOps Lead Has Been Solving Wrong

You have HubSpot. You have a list. Your reps still can't outbound at any real volume.

Here's why. Before an SDR can send a personalized cold email, somebody has to do the research. Open LinkedIn. Read the company website. Check the press page. Scan their job board for hiring signals. Pull the company size and industry. Paraphrase all of it into a custom intro line that doesn't sound like spam.

That work takes a real SDR five to ten minutes per contact. On a list of 200, that's a full day burned before anyone hits send. Most teams paper over this by buying Apollo or Clearbit or Lusha for $300-500/month per seat. Those tools give you firmographic data. They don't give you the "noticed your team is hiring three account executives this quarter" insight that makes an email actually get answered.

So you pay $500/month for half the work, and your SDR still spends the other half on research. Then their personalized email goes into a sequence, gets a 2% reply rate, and your VP Sales asks why pipeline is light.

The bracketed step in your funnel is the bottleneck:

```
ICP defined → list from HubSpot segment → [research + personalize] → Sequence → replies → SQL → AE
```

That's where Claude lives in this build. The whole bracketed step.

## How It Works

The setup has two prompts and four custom HubSpot properties. That's it.

### Step 1: The Four Custom Properties

In HubSpot, you create four contact properties. The video uses these (yours should map to what you actually want in your outbound):

- `recent_initiatives` — what the company is publicly working on
- `pain_signal_icp` — the trigger event that suggests they need what you sell
- `icebreaker_noticed` — a specific observation worth opening the email with
- `pitch_angle` — your one-sentence positioning written specifically for them

These are text fields. Claude will fill them in. Your existing Sequence template will reference them as personalization tokens.

### Step 2: The Email Template

Build one template in your HubSpot Sequence using those four tokens:

```
Hi {{first_name}},

Noticed {{contact.icebreaker_noticed}}.

I'm reaching out because {{contact.pain_signal_icp}} —
that's exactly what we help with.

{{contact.pitch_angle}}

Worth a 15-minute call to see if it's a fit?
```

Every contact gets the same shape. Every contact gets a unique fill-in.

### Step 3: Prompt One — Generate the Template Logic

The first prompt teaches Claude what good fills look like for your business. You give it your ICP, your pitch, three or four example contacts you've personalized by hand. Claude learns your voice and the kind of detail you want.

### Step 4: Prompt Two — Bulk Enrich

The second prompt is the one you run repeatedly:

```
Pull the contact list from HubSpot segment "Q2 Outbound — Series B SaaS".
For each contact, research the company across Google, LinkedIn, and the open web.
Fill in recent_initiatives, pain_signal_icp, icebreaker_noticed, and pitch_angle
based on the framework we established.
Write the results back to HubSpot.
```

Claude uses the official HubSpot connector to read the segment, does the research, and writes the four properties back into each contact record. You watch the contact list fill in.

Then you turn on the Sequence. Done.

### The Setup (One Afternoon)

**What you need:**
- A Claude Pro or Team subscription with the HubSpot connector enabled
- Admin access to your HubSpot portal
- A defined segment of contacts you want to outbound
- Your standard outbound template structure

**Step 1: Turn on the HubSpot connector inside Claude.** This is in the connector marketplace. It takes about two minutes. You authenticate through HubSpot's OAuth.

**Step 2: Create the four custom properties.** Settings → Properties → Contact Properties → Create. Use text fields. Name them whatever maps to your outbound style.

**Step 3: Build the Sequence template.** Use the four custom property tokens. Test it with a fake contact you fill in by hand.

**Step 4: Run prompt one on a single test contact.** Verify the fills look like emails you'd actually send. If they sound robotic, adjust the prompt.

**Step 5: Run prompt two on a small segment first.** Twenty contacts. Spot check the output. Adjust until the quality is consistent.

**Step 6: Scale up.** Once it's clean, run it on full segments. Enable the Sequence to send.

## What Changes After Setup

**Week 1:** The first segment runs in minutes instead of a full SDR-day. You spot-check the output and realize the personalization is sharper than what your team was writing manually, because Claude actually reads everything instead of skimming.

**Week 2:** You shut off Apollo or Clearbit. The HubSpot agent is doing the enrichment job those tools were doing, with sharper personalization on top. That's $300-500/month back per seat.

**Month 1:** Your SDRs shift to reply handling and call booking. The research-and-write step that used to eat half their day is gone. You either double the volume of outbound, or you trim the team and run leaner.

**Month 3:** You're running the same pattern for inbound. Every form submit triggers a Claude research pass. Sales gets a fully enriched contact record before they pick up the phone for the first call. Your AE intro calls sound informed because the AE is informed.

## Where This Sits in Your Funnel

The whole point of this build is the placement. It plugs into the exact stage of B2B outbound that's most expensive per unit of value: contact-level research and personalization.

Before:

```
List → SDR opens LinkedIn for each contact (10 min)
     → SDR writes custom intro line (5 min)
     → SDR pastes into HubSpot template (1 min)
     → Email sends
```

After:

```
List → Claude researches and fills 4 properties (~30 sec per contact, batch)
     → HubSpot Sequence template uses the properties
     → Email sends
```

The SDR's role doesn't go away. It moves to the work that actually closes deals: reply handling, qualifying, calls booked, demos run. The research-and-write step that was eating 60% of their time is gone.

## Beyond Outbound

Greg's video calls this out specifically. The same pattern works for:

**Account research before a sales call.** Point Claude at the prospect's HubSpot record plus their company's public moves over the last 90 days. Get a pre-call brief that's actually useful instead of a stale firmographic dump.

**Customer success QBRs.** Before a quarterly business review, point Claude at the customer's HubSpot record plus their public news. Auto-build the "what changed" section of the QBR deck. Your CSM walks into the meeting with sharper context than the customer's own staff.

**Inbound lead enrichment on form submit.** Every time a lead submits a form, Claude triggers a research pass. By the time the AE picks up the phone, the contact record has firmographics, recent initiatives, a buying signal, and a positioning angle. The AE sounds like a strategic advisor on the first call.

The common thread: anywhere you're using HubSpot data to drive a human conversation, this layer makes the conversation better.

## Gotchas and Tips

- **Don't auto-send. Draft first.** Run the agent in a mode where it fills properties but you still review the Sequence enrollment manually for the first two weeks. Build trust before scaling.
- **Your four properties are the whole game.** Spend time on these. They are the difference between personalization that feels like a friend wrote it and personalization that feels like Mad Libs.
- **Match the prompt to your industry voice.** If you sell to enterprise CIOs, the icebreaker should sound like enterprise CIOs talk. If you sell to plumbers, the icebreaker should sound like a plumber wrote it. The agent is only as good as the voice you give it.
- **Don't run on cold lists you bought.** Garbage in, garbage out. Run this on lists you built yourself or pulled from accounts that match your ICP.
- **HubSpot connector is the unlock.** Other CRMs are catching up but the HubSpot integration is the smoothest right now. If you're on Pipedrive or Salesforce, the same pattern works but you'll need a middleware step until those connectors mature.
- **Cost ceiling is your Claude usage, not your enrichment bill.** Most teams running this at scale see Claude costs of $30-100/month replace $500+/month enrichment subscriptions. That math doesn't include the SDR time you reclaim.
- **The pattern beats the tool.** The framework here is segment-pull → research → write structured data back. Whatever your CRM is, that pattern works. Build it on the tool you already use.

---

## Keep Reading

- **[Stop Buying Cold Email Lists. Build One That Actually Books Meetings.](/playbooks/cold-email-list-pipeline/)**: Once your enrichment is automated, here's how to build the list that goes into it.
- **[100 Personalized LinkedIn DMs. Sent Overnight. Zero Copy-Paste.](/playbooks/linkedin-outreach-while-you-sleep/)**: The same personalization-at-scale pattern, applied to LinkedIn instead of HubSpot.
- **[Replace Your CRM With a Conversation](/playbooks/nex-crm/)**: If you're earlier than HubSpot, the lighter-weight version of building a CRM-as-AI from the ground up.
