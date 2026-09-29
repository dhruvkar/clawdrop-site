---
layout: playbook.njk
title: "The Deere Mechanic Couldn't Find the Fault. A Farmer With an AI Agent Found Two."
description: "Days of electrical trouble on a 20-year-old John Deere combine. The paid service call came up empty. The owner wired an AI agent to a bus reader and an oscilloscope, compared against a working combine, and pulled the two bad controllers."
date: 2026-09-28
difficulty: Advanced
cost: "Not stated. A CAN bus adapter, a networked oscilloscope, and the $50 Deere repair manuals."
timeToSetup: "Not stated. Budget days, and plan on knowing your machine well."
originalSource: "https://www.reddit.com/r/hermesagent/comments/1wbz4ph/today_i_fixed_my_jd_combine_with_hermes/"
originalAuthor: "u/flairtestuser123 (r/hermesagent)"
issueNumber: 31
permalink: /playbooks/combine-dealer-couldnt-fix/
tags:
  - agriculture
  - farm-equipment
  - equipment-diagnostics
  - right-to-repair
  - hermes
  - small-business
---

## Tools

- [**Hermes**](#aff-hermes): the open-source AI agent. It ran on a laptop, read the machine data, and talked through the diagnosis with the farmer
- **PCAN USB adapter**: a plug that lets a laptop listen to the combine's CAN bus. The CAN bus is the wiring the machine's computers use to talk to each other
- **Rigol 4-channel oscilloscope**: a meter that draws electrical signals as lines on a screen, so you can see a wire misbehave. This one has a network port, so the agent could pull readings from it directly
- **The Deere diagnostic and repair manuals**: about 10,000 pages, sold for $50. The agent turned them into something you can ask questions of
- **A second combine that works**: the reference. Every reading from the broken machine got compared against it

## What you'll build

A diagnostic bench for a machine the dealer can't figure out.

A laptop listens to the machine's computers.
A scope watches the wires.
The agent reads both at once and flags where they disagree.

Then you swap parts and compare against a machine that runs fine, until the difference goes away.

## The story

A farmer's John Deere combine had electrical trouble for several days.

They paid a Deere mechanic to come out.
They'd done that about twice in ten years.
He couldn't find it.

So they built a test bench with their agent:

> I worked with Hermes running Astra, we build a test suite for CanBUS that used a PCan USB adapter to read CanBUS messages and a Rigol 4-channel oscilloscope that I barely know how to run but has a network adapter on it.

The test suite ran while they talked to the agent on a laptop.

> it seemed to be able to figure out the CanBUS messages and would also compare the electronic traces it pulled from the scope against what it was seeing for messages.

They worked it the way a good mechanic would.
Talk through the procedure.
Pull a controller.
Test again.

The move that cracked it was a second combine.

> We would discuss the diagnostic procedure and pull controllers and compare results against traces that I'd pulled from another working combine I have.

Two bad controllers turned up.
Each tool caught one.

> one that was pulling the CanH line low randomly (the Rigol caught that) and one that would hold the bus hostage and messages would drop off a cliff (the Pcan found that).

In plain terms: one part was randomly shorting a signal wire.
The other was hogging the line so nothing else could talk.

Their scoreboard:

> JD:0 Hermes:1

## The manuals were the other half

In the comments, the farmer pushed back on the easy story.

They said the "you can't fix your tractor" line doesn't match their experience.
They fix pretty much everything themselves.
The few times they've called the local Deere mechanics, it either didn't get fixed or they were just too busy to do it themselves.

Where they do need help is the paperwork.

> pretty much anything else I've been able to do via the 10k page diagnostic and repair manuals they sell you for $50. Now I do actually need AI for those because they're ridiculously complex to use.

> I fed them into a RAG system Hermes build and I just ask questions now. It's 10X more useful that way.

A RAG system is a searchable library the AI reads from before it answers.
So the answer comes straight out of the manual.

That part needs only the manuals you already bought.

## The business angle

The service call is the expensive part of a breakdown.
The downtime is worse.
A mechanic who drives out and leaves without an answer costs you both.

This owner already had the skills.
The agent gave them two things they didn't have:
a reader for 10,000 pages of manual, and a partner that could watch two instruments at once and say what changed.

And it didn't stop at the repair.

They're now pulling data off the combine to build their own yield monitor.
Yield comes from the CAN bus.
Position comes from their RTK GPS module and base station.

> something I've wanted for years but didn't want to pay $20k to put in.

The combines are 20 years old.
They can already read engine speed, coolant and ground speed.
Next is a camera on the cab displays, so the video lines up with the machine data.

## Who should steal this idea

Farmers running older equipment they already maintain themselves.

Fleet and construction owners with a yard full of machines and a dealer who's always booked.

Repair shops that own the service manuals and lose hours paging through them.

Anyone with two of the same machine, where one works.
That second machine is your answer key.

## How hard is it

Hard.
Be honest with yourself here.

This owner fixes their own equipment.
They already knew what a controller was and where to pull one.
The agent made them faster.
**The skill was already theirs.**

The manuals are the part most owners can do: load the repair manuals into an agent you can question.
Start there.

Cost wasn't stated.
The manuals were $50.
The adapter and scope prices weren't given.
Someone in the thread asked what the service call and the AI usage cost.
No answer was posted.

## Gotchas and tips

Get a working reference first.
The whole diagnosis rested on comparing against a good combine.
Without one, you're guessing at what normal looks like.

Use both instruments.
The scope found the wire problem.
The bus reader found the traffic problem.
Either one alone would have missed half.

Older machines open up more easily.
A commenter noted that on Deere equipment you can read the industry-standard messages, but past that "JD has it locked down pretty good."
The owner's take: these combines are 20 years old, and they doubt Deere was doing much more than obfuscation back then.
Newer machines may not open up like this.

Don't reflash anything on a guess.
The owner said they haven't tried replacing the software on an engine controller.
Know where your own line is.

You still make the call.
The agent read the signals and suggested what to test.
The farmer pulled the parts and decided.

The agent watched the wires.
The farmer turned the wrench.

## Keep reading

- [Be Your Own Farm Engineer: A 250-Acre Operation Run on AI Instead of Specialists](/playbooks/farm-automation-no-engineer/) Another farmer using AI as the engineer they could never hire.
- [A Mechanic Cut Off Two Fingers. He Spent the Recovery Building the Database His Industry Paywalls.](/playbooks/free-repair-data-database/)
- [Everyone Is Switching From OpenClaw to Hermes. Read This Before You Do.](/playbooks/openclaw-vs-hermes-honest/) What you're signing up for with the agent this farmer used.
