---
layout: playbook.njk
title: "Let an AI Run Your Equipment Without Letting It Break Anything"
description: "A father-son build that runs a real greenhouse with AI. The architecture they used (AI proposes, dispatcher reviews, hardware executes) is the safe way to let agents control physical things in any business."
date: 2026-05-20
difficulty: Advanced
cost: "$30-80 one-time hardware + $0-20/month if using local models"
timeToSetup: "2-3 weekends for the basic loop"
originalSource: "https://old.reddit.com/r/openclaw/comments/1t8tm7k/real_openclaw_use_case_greenhouse_planner_with/"
originalAuthor: "u/jvallery (Verdify)"
issueNumber: 14
permalink: /playbooks/greenhouse-ai-with-safety-rails/
tags:
  - hardware-control
  - safety
  - home-automation
  - physical-operations
  - iot
---

## Tools

- [**OpenClaw**](#aff-openclaw): runs the planning loop that proposes equipment changes
- [**Gemma**](#aff-gemma): small local model the planner uses, runs offline
- [**ESP32**](#aff-esp32): the cheap microcontroller chip that actually controls the relays
- [**Raspberry Pi**](#aff-raspberry-pi): hosts the dispatcher and the planning loop
- [**Home Assistant**](#aff-home-assistant): optional dashboard for telemetry and overrides
- [**GitHub**](#aff-github): version control for the planning logic and safety rules

## What You'll Build

An AI that runs the physical side of your business. Adjusts the temperature in your grow operation. Schedules the ovens in your bakery. Cycles the pumps in your brewery. Rotates the routes for your cleaning crew.

But here's the part most "AI runs your business" stories skip. **The AI doesn't touch the equipment directly.** Instead, three layers do the work together. The AI proposes a change. A small dispatcher checks the proposal against your safety rules. Only then does a cheap microcontroller flip the actual switch.

The result is something you can sleep at night with. An AI smart enough to plan ahead, paired with a system dumb enough that it can't do anything dangerous.

## Why This Works

Every small business owner who has thought about putting AI in charge of physical equipment has had the same fear. What happens when the AI gets it wrong? It tells the oven to run all night. It tells the pumps to dry-cycle. It tells the heater to hit 200°F on a 40°F day.

The fear is rational. Large language models hallucinate. They get confused. They sometimes confidently say things that are wrong. You do not want a confused AI in charge of equipment that can hurt people or destroy inventory.

The fix is not "trust the AI harder." The fix is to build a system where the AI can only suggest, and dumber, more predictable code makes the final call.

That's what `/u/jvallery` and his son built for their greenhouse. The AI plans. A small piece of code checks the plan against hard limits. The microcontroller, which knows nothing about AI at all, executes only the part that passes the check. The AI cannot ever directly turn on a heater.

This pattern is not specific to greenhouses. It's the right pattern for any business where an AI making a bad call costs you real money.

## How the Three Layers Work

The whole system is three pieces that talk to each other in a strict order.

### Layer 1: The AI Planner

OpenClaw runs a planning loop. Every few minutes, it looks at:

- **Telemetry** from the sensors (current temperature, humidity, soil moisture).
- **Plant requirements** for whatever you're growing (target temperature bands, watering schedule, light needs).
- **Weather forecasts** pulled from a free API.
- **Equipment limits** (maximum heater wattage, maximum pump runtime per hour).
- **Recent scorecards** (did yesterday's plan keep things in the target band, or did the temperature spike?).

The planner thinks through what to change and writes a **proposal**. Something like: "Run the south heater at 60% for 20 minutes, then turn it off until 4 AM."

It writes the proposal to a file. It does not touch any hardware.

### Layer 2: The Dispatcher

A small, simple program (a few hundred lines, no AI involved) reads the proposal and checks it against your hard rules:

- Is the requested heater wattage below the safety ceiling?
- Is the requested runtime below the per-hour maximum?
- Is the proposed action consistent with the current sensor readings (no "turn on heater when temperature is already 90°F" mistakes)?
- Has the planner asked for the same action too many times in a row (a stuck-loop check)?

If any rule fails, the dispatcher rejects or **clamps** the proposal. "Heater at 60% for 20 minutes" might become "heater at 50% for 15 minutes" because the safety ceiling is lower than what the planner asked for.

The dispatcher writes the cleared, clamped instruction to the next layer.

### Layer 3: The Hardware

An ESP32 microcontroller, sitting on the equipment itself, watches for instructions from the dispatcher. It does exactly what it's told and nothing else. It cannot make decisions. It cannot interpret. It cannot connect to the internet on its own.

The ESP32 firmware also has its own ultimate safety limits baked in. Even if the dispatcher told it to run the heater at 100%, the firmware would refuse if the local thermal sensor read above its hard ceiling.

Three layers. Three checks. The AI never directly controls anything.

## Step-by-Step Setup

### Step 1: Inventory Your Equipment

Start with what you already have. Walk through your business and list every piece of equipment that has an on/off (or analog) control that someone currently checks or adjusts manually.

Greenhouse: heaters, fans, water pumps, lights, vents.
Bakery: ovens, proofers, mixers.
Brewery: temperature jackets, pumps, valves.
Cleaning service: this lives entirely in software, but the same pattern still works for scheduling decisions.

For each item, write down:

- The hard safe maximum (the value at which damage starts).
- The desired operating range.
- How fast a bad value would cause real harm. (Heaters fail fast. Lighting schedules fail slow.)

### Step 2: Sensors First

Before any AI runs anything, you need eyes. Buy basic sensors for whatever your equipment affects:

- Temperature: $10–$30 sensors that talk to an ESP32.
- Humidity: usually combined with temperature sensors.
- Flow / pressure: for water or air systems.
- Soil moisture, if relevant.

Wire the sensors into a Raspberry Pi or a small server that publishes the readings somewhere your planner can read them. Home Assistant is a good free dashboard for this.

### Step 3: Write the Safety Rules File

Before the AI sees the system, write a plain-text file of your hard rules. Examples:

- `heater_max_watts: 1200`
- `heater_max_runtime_per_hour_minutes: 35`
- `temperature_ceiling_F: 105`
- `pump_minimum_off_seconds: 60`
- `lights_off_window: 22:00-05:00`

These rules become the dispatcher's checklist. They are non-negotiable. The AI cannot override them. You should be able to read the file in 30 seconds and know what the system will never let happen.

### Step 4: Build the Dispatcher

Write a small program (the Verdify reference uses Python) that does exactly four things:

1. Reads the planner's proposal file.
2. Reads the safety rules file.
3. Checks every value in the proposal against every rule. Rejects or clamps as needed.
4. Writes the approved instruction to a queue the ESP32 watches.

This piece is short and **boring on purpose**. It must be easy to read and impossible to confuse. No AI in this layer.

### Step 5: Flash the ESP32

The ESP32 firmware should:

1. Connect to your local network (and only your local network — no cloud).
2. Listen for instructions from the dispatcher.
3. Apply its own local safety check.
4. Drive the relay or motor.

Most ESP32 boards run for years without intervention. Once flashed, this layer is the most reliable piece of the whole system.

### Step 6: Wire the Planner

Now the AI. Set up OpenClaw with a planning skill that:

1. Reads current sensor data every few minutes.
2. Reads recent scorecards (how well it kept things in the target band yesterday).
3. Writes a proposal to the dispatcher's input file.

You can run this on a Raspberry Pi alongside the dispatcher. The Verdify build uses a local Gemma model on the same hardware, so the planner runs offline and costs nothing per call.

### Step 7: Run a Week Without Power

The most important test. **Disconnect the AI planner entirely.** The dispatcher and the ESP32 should be able to run on a fallback schedule for a week without anyone touching anything. If the system can't survive without its AI brain, the safety design is wrong.

Once you've proven it can run dumb, plug the AI back in and watch the scorecards improve.

## Adapting This for Other Businesses

The "AI proposes, dispatcher reviews, hardware executes" pattern works for almost any small business with physical operations.

**Restaurants and bakeries.** AI plans the prep schedule (which ovens get pre-heated when, which batches get pulled). The dispatcher caps maximum runtimes and refuses any plan that would leave the oven empty for more than X minutes at temperature. The hardware just turns elements on and off.

**Self-storage and warehouses.** AI plans climate control room-by-room based on what's stored. The dispatcher caps total HVAC draw and prevents conflicting commands. Hardware drives the dampers.

**Cleaning services.** No physical hardware, but the same logic applies to route scheduling. AI proposes tomorrow's schedule. The dispatcher checks it against driver hours, supply inventory, and customer-side rules ("no Mondays for this client"). The dispatcher publishes the approved schedule.

**Small grow operations and breweries.** Direct application of the original. Temperature, humidity, lighting, flow.

**HVAC service.** AI predicts which units are likely to fail this week based on telemetry. The dispatcher decides which calls actually get routed to a technician. Hardware on the customer site stays simple.

The lesson generalizes: **wherever an AI mistake costs real money, the AI should never be the last layer.**

## Gotchas and Tips

- **Write the safety rules before the planner.** It is tempting to start with the AI. Don't. The dispatcher's rule file is the hardest, most consequential file in the whole project. Get it right first.
- **Local models are fine.** The Verdify build runs entirely on a Raspberry Pi with a local Gemma model. You don't need cloud Claude for planning. Saves money and means the system keeps working when the internet drops.
- **Score every plan.** Every time the planner proposes something and the system executes it, write down what happened (did temperature stay in band, was the dispatcher's clamp engaged, did the hardware refuse). Over time these scorecards make the AI better. Without them you can't tell if it's improving.
- **The fallback schedule is the real product.** A simple time-based schedule (heater on at these hours, off at these hours) is what runs when the AI fails. Make sure that fallback is good enough on its own. Anything the AI adds is a bonus.
- **Don't connect the ESP32 to the internet.** Keep the hardware layer offline. Only the dispatcher talks to the hardware. Only the planner talks to the dispatcher. Each layer trusts only the one above it.
- **Hard-code the absolute maximums.** Don't put your "this would damage equipment" ceilings in a config file the AI can read. Put them in the firmware itself. The AI should not even know they exist.

## See It Live

The Verdify build has a public evidence page showing actual greenhouse runs, including the times when the dispatcher clamped a planner proposal and prevented overshoot: [verdify.ai/evidence](https://verdify.ai/evidence). The safety architecture is documented at [verdify.ai/reference/safety](https://verdify.ai/reference/safety), and the full source is on [GitHub](https://github.com/jrvallery/verdify).

---

## Keep Reading

- **[He Gave His Home a Brain. 50 Days Later, His AI Wakes Him Up, Cleans His House, and Judges His Sleep.](/playbooks/g-bot-home-brain/)**: The home-automation cousin of the greenhouse build. Same idea (agent controls physical things in your daily life) without the dispatcher safety pattern, which is exactly why the contrast is useful.
- **[Your AI Makes Your Coffee, Orders Your Lunch, and Answers Your Phone](/playbooks/ai-espresso-phone-agent/)**: Agent-controlled hardware applied to a single small business (a one-machine coffee shop). The same "AI doesn't touch the equipment directly" question shows up here in miniature.
- **[Your AI Can Now Run Your Mac in the Background. Without Stealing Your Mouse.](/playbooks/cua-driver/)**: Different domain (software, not hardware) but the same lesson. Give the AI a sandbox it can't escape from, and you get the productivity without the panic.
