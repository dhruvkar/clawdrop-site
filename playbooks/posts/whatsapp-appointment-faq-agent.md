---
layout: playbook.njk
title: "Put an Agent on Your WhatsApp to Book Appointments and Answer the Same 20 Questions"
description: "Most of the messages a small business gets are the same handful of questions and appointment requests. A builder wired an agent into a hospital's WhatsApp using n8n, Evolution API, and Chatwoot. It answers FAQs from a Google Sheet, handles appointment queries, and hands off to a human after hours. Here is the stack, and the very real gotchas he hit."
date: 2026-06-03
difficulty: Intermediate
cost: "Low. n8n plus model usage. Replaces a paid WhatsApp-bot subscription."
timeToSetup: "An afternoon for the basic flow, then tuning against real messages"
originalSource: "https://www.reddit.com/r/n8n/comments/1tidjnd/agentes_ia_para_call_center_avanzados_con_n8n/"
originalAuthor: "suntzu-112358 (r/n8n)"
tags:
  - whatsapp
  - customer-support
  - appointments
  - faq
  - n8n
  - chatwoot
  - small-business
  - clinics
permalink: /playbooks/whatsapp-appointment-faq-agent/
---

## Tools

- [**n8n**](#aff-n8n): orchestrates the flow from incoming WhatsApp message to reply.
- [**Evolution API**](#aff-evolution-api): connects your WhatsApp number to n8n so the agent can read and send messages.
- [**Chatwoot**](#aff-chatwoot): the shared inbox where a human takes over when the agent hands off.
- [**OpenAI (GPT-4o mini)**](#aff-openai): the model that reads the message and decides how to respond. Any capable model works.
- **A Google Sheet**: your FAQ knowledge base, in plain rows, so non-technical staff can edit the answers.

## What You'll Build

A WhatsApp agent that handles the repetitive front-desk messages and quietly passes the rest to a person.

A builder shared a working setup he made for a hospital. His flow, on WhatsApp, does four things: answers frequently asked questions by consulting a Google Sheet, handles appointment queries through an API, escalates to a human agent on request, and respects business hours so it only promises a human when one is actually available. It batches a customer's rapid-fire messages by waiting 20 seconds before replying, so it responds to the whole thought instead of half a sentence.

He posted it because it works but still trips up, and his stumbles are the most useful part of this playbook. You get his stack and his hard-won gotchas in one place.

## Why This Works

Look at a day of messages to most small businesses and the pattern is obvious: "Are you open Sunday?" "How much is X?" "Can I move my appointment?" "Where are you?" The same questions, over and over, plus a steady trickle of booking requests. A person answers them between everything else, and the slow replies cost bookings.

WhatsApp is where those customers already are, which is the whole point. You are not asking anyone to call a number or use a web chat widget. The agent lives in the channel people already message you on, clears the repetitive 80 percent instantly, and routes the 20 percent that needs judgment to a human, with the context attached. The front desk stops being a bottleneck and the after-hours messages stop going unanswered until morning.

## Prerequisites

- An n8n instance (cloud or self-hosted).
- A WhatsApp number connected through Evolution API.
- A Chatwoot inbox for human handoff.
- A model API key (the source used GPT-4o mini).
- A Google Sheet of your real FAQs, and access to your booking system's API or a booking link.

## Step-by-Step Setup

### Step 1: Connect WhatsApp to n8n

Wire your WhatsApp number into n8n through Evolution API so incoming messages trigger the workflow and the agent can reply on the same number.

### Step 2: Put Your FAQs in a Google Sheet

List the real questions and the approved answers, one per row. Keeping this in a sheet means your staff can update prices, hours, and policies without touching the workflow.

### Step 3: Build the Agent and Its Instructions

The agent reads each message, checks the FAQ sheet for an answer, and decides whether this is a question it can handle, an appointment request, or something for a human. Keep the instructions focused (more on why below).

### Step 4: Add the Appointment Path

For booking and reschedule requests, give the agent a tool: a call to your scheduling system's API, or a step that sends your booking link and confirms the details. This is the path that turns a question into a filled slot.

### Step 5: Batch Fragmented Messages

People send three short messages in a row, not one tidy paragraph. Add a wait node (the source used 20 seconds) that gathers the customer's messages before the agent responds, so it answers the full request rather than the first fragment.

### Step 6: Set Business Hours and a Human Handoff

Define when a human is available. During hours, "talk to a person" routes the conversation into Chatwoot for a staff member. Outside hours, the agent says so honestly and takes a message or books the callback, rather than promising a human who is asleep.

### Step 7: Tune Against Real Messages

Run it on real conversations and watch where it fails. The first week is calibration, not launch (see Gotchas, this is where the build lives or dies).

## Adapting This for Your Business

The hospital is incidental. Any business whose inbound is mostly questions plus appointments fits.

- **Clinics, dentists, and salons.** Booking, rescheduling, hours, pricing, and prep instructions.
- **Repair and home services.** "Do you cover my area," "what does X cost," "when can you come."
- **Restaurants and venues.** Reservations, hours, menu and dietary questions, private-event requests.
- **Any shop with a WhatsApp number.** Swap the FAQ sheet and the booking step for yours and the rest carries over.

## Gotchas and Tips

- **Do not cram everything into one mega-prompt.** The builder's agent ran on a single node with a roughly 300-line system prompt, and it hallucinated under the load. Split responsibilities and give the agent tools (the FAQ lookup, the booking call) instead of asking one giant instruction block to do everything.
- **Test with how your customers actually talk.** A regional term of endearment, "mamita," confused his agent into thinking the patient needed a breast exam. Your customers' slang, accents, and shorthand will break things your own test messages never will. Test with the real thing.
- **Batch the messages or you will answer half a question.** The 20-second wait is not optional polish. Without it the agent replies to the first fragment and the conversation derails.
- **Always leave a human door open.** A clear "type agent to reach a person" path, plus honest business hours, prevents the worst failure mode: an agent confidently mishandling something that needed a human.
- **Repeated questions are a tuning signal.** If it hallucinates when someone asks the same thing twice, that FAQ entry or the routing needs work. Treat the failures as your backlog.

## What This Replaces

Before this, fielding WhatsApp meant one of these:

- **A person answering the same questions all day**, between the work they were actually hired for, with replies that slow down exactly when you are busiest.
- **Messages that pile up after hours** and get answered the next morning, by which point the customer booked elsewhere.
- **A paid WhatsApp-bot subscription** (Wati, ManyChat, and the like) that does roughly this on their platform and their pricing, for a recurring fee.

After this, the repetitive questions and the simple bookings are handled the moment they arrive, day or night, the hard ones reach a human with context, and the cost is model usage plus tools you can self-host. You own the flow instead of renting it.

---

## Keep Reading

- **[The Four-Piece AI Front Desk Every SMB Should Have Running by Friday](/playbooks/ai-front-desk/)**: the fuller front-desk system, with the phone and website-chat pieces alongside this WhatsApp one.
- **[The €200 AI Voice Agent That Called 3,000 Businesses in a Weekend](/playbooks/guinndex-voice-agent/)**: the outbound counterpart, for the calls you need to make rather than answer.
