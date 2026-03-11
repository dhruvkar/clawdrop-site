---
layout: blueprint.njk
title: "Your AI Makes Your Coffee, Orders Your Lunch, and Answers Your Phone"
description: "Physical world automation is here. One builder connected OpenClaw to an espresso machine, food ordering, and a phone agent that talks to callers and relays to your AI."
date: 2026-03-10
difficulty: Intermediate
cost: "$15-40/month (Vapi + API costs)"
timeToSetup: "4-6 hours"
originalSource: "https://discord.com/channels/1456350064065904867/1456609488202105005/1457627855692365835"
originalAuthor: "Alejandro (@amaza87)"
tags:
  - physical-world
  - voice
  - smart-home
  - phone
permalink: /blueprints/ai-espresso-phone-agent/
---

## What You'll Build

Three automations that bring AI out of the screen and into the physical world:

1. **Espresso machine control:** "Make me a double shot" and your machine starts pulling
2. **Food ordering:** "Order my usual from the Thai place" and it handles the order
3. **Phone agent (Clawdia):** A voice AI that answers your phone, has a conversation with the caller, and relays everything to your OpenClaw agent for action

The phone agent is the star here. It's a bridge between the voice world and your AI brain.

## Why This Works

Most AI assistants live behind a screen. You type, they type back. But the real world runs on phone calls, physical devices, and verbal requests.

The leap from "AI that writes emails" to "AI that makes my coffee and handles my phone calls" is the difference between a fancy search engine and an actual assistant. When your AI can interact with the physical world and talk to humans on your behalf, it stops being a tool and starts being a team member.

## Prerequisites

- OpenClaw installed and running
- Vapi account (for the phone agent)
- Smart espresso machine with API or smart plug control
- Food delivery app access (or restaurant with online ordering)
- The [Clawdia Bridge](https://github.com/alejandroOPI/clawdia-bridge) (open source)

## Part 1: The Phone Agent (Clawdia)

This is the most interesting piece. Here's how it works:

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Phone Call  │────▶│  Clawdia     │────▶│  OpenClaw    │
│  Comes In    │     │  (Vapi)      │     │  Agent       │
│              │     │              │     │              │
│  "Hi, is     │     │  Has a real  │     │  Processes   │
│   Alejandro  │     │  conversation│     │  the request │
│   there?"    │     │  with caller │     │  and acts    │
└──────────────┘     └──────────────┘     └──────┬───────┘
                                                  │
                                         ┌────────▼───────┐
                                         │  Actions       │
                                         │                │
                                         │  - Schedule    │
                                         │  - Message you │
                                         │  - Look up info│
                                         │  - Take notes  │
                                         └────────────────┘
```

### Why Clawdia Instead of Calling OpenClaw Directly?

You could technically pipe a phone call straight to OpenClaw. But having a dedicated voice agent (Clawdia) as the front door is cleaner:

- Clawdia handles the social niceties (greetings, hold-on-a-moment, goodbyes)
- She can manage the conversation flow while waiting for OpenClaw to process
- If OpenClaw is thinking, the caller doesn't hear dead silence
- Different voice, different personality, feels more natural than a "system"

### Setting Up the Bridge

The [Clawdia Bridge](https://github.com/alejandroOPI/clawdia-bridge) connects Vapi's voice agent to your OpenClaw instance:

1. Set up a Vapi agent with your preferred voice and personality
2. Deploy the bridge (it's a lightweight Node.js server)
3. Point Vapi's webhook to the bridge
4. The bridge translates between Vapi's conversation format and OpenClaw's messaging

When someone calls, Clawdia picks up, has a natural conversation, and relays the intent to OpenClaw. OpenClaw processes the request (check calendar, send a message, look up information) and sends the response back through Clawdia.

## Part 2: Espresso Machine Control

The espresso setup depends on your machine, but the pattern is the same:

**Option A: Smart machine with API** (like a Decent Espresso DE1)
- Connect directly to the machine's API
- Start shots, adjust temperature, set profiles
- "Make me a 18g in, 36g out, 25 second pull"

**Option B: Any machine with a smart plug**
- Use a smart plug (Kasa, Tapo, etc.) to power the machine on/off
- Won't control shot parameters, but can pre-heat the machine
- "Turn on my espresso machine, I'll be down in 10 minutes"

**Option C: Smart home integration**
- Use Home Assistant as a bridge
- Control any device in your smart home ecosystem
- The espresso machine is just one endpoint

The skill itself is straightforward: OpenClaw sends a command to the device API, the machine does its thing. The magic is in the natural language interface. You don't open an app or press buttons. You just say (or type) what you want.

## Part 3: Food Ordering

Food ordering automation works through browser automation or restaurant APIs:

1. Store your usual orders as presets ("my usual" = Pad Thai, medium spice, extra peanuts)
2. When triggered, the agent opens the ordering platform and places the order
3. Confirms the order details and estimated delivery time
4. Notifies you when it's on its way

For restaurants you order from frequently, save the full order details so "order my usual from Thai Kitchen" is a single command that handles everything.

## Putting It All Together

The real power is chaining these together. Your morning routine could look like:

1. Alarm goes off
2. OpenClaw turns on your espresso machine to pre-heat
3. You say "good morning" to your phone
4. Clawdia gives you a briefing: calendar, weather, overnight messages
5. By the time you're downstairs, the machine is hot
6. "Pull me a double" and it starts
7. While you drink your coffee, Clawdia handles your first two phone calls

That's not science fiction. That's what Alejandro built. The hardware is off-the-shelf. The software is open source. The only thing you need to supply is the willingness to set it up.

## Getting Started

Start with one piece, not all three:

1. **Easiest:** Smart plug control for any appliance (30 minutes to set up)
2. **Medium:** Food ordering for one restaurant (1-2 hours)
3. **Most impactful:** Clawdia phone agent (half a day, but changes everything)

Once one works, adding the others is incremental. The pattern is always the same: give OpenClaw an API to talk to, and tell it when to use it.
