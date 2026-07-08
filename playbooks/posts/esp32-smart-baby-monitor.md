---
layout: playbook.njk
title: "His AI-Built Baby Monitor Knows Babbling From Crying. The Whole Family Sleeps Now."
description: "A dad turned a $50 dev board into a baby monitor that knows babbling from real fussing, stays silent for 10 minutes, then wakes parents only when it matters."
date: 2026-07-08
difficulty: Intermediate
cost: "About $50 for the ESP32 board (double it if you add the fail-safe receiver), plus a Claude subscription you probably already have."
timeToSetup: "A few evenings of back-and-forth with Claude, then ongoing tinkering because it's fun."
originalSource: "https://news.ycombinator.com/item?id=48800997"
originalAuthor: "pugio (Hacker News)"
issueNumber: 20
tags:
  - parenting
  - hardware
  - esp32
  - home
  - diy
  - personal-software
  - notifications
permalink: /playbooks/esp32-smart-baby-monitor/
---

## Tools

- [**Claude Code**](#aff-claude-code): the coding agent that wrote all the embedded software. The builder says flat out he never would have had the time or energy without it.
- [**ESP32-BOX-3**](#aff-esp32): a roughly $50 palm-sized dev board with a microphone and speaker built in. Originally sold for building voice assistants.
- [**ntfy**](#aff-ntfy): a free, dead-simple service that pushes notifications to your phone. The monitor uses it to say "baby's been fussing for 30 seconds" and "10 minutes, your turn."

## The Story

A Hacker News user named pugio had a $50 voice-assistant dev board, an ESP32-BOX-3, gathering dust from a project he'd abandoned a year or two earlier.

Then he had a baby.

The baby moved to her own room and got sleep trained. And like every sleep-trained baby, she does one of two things at night. Either she wakes up, babbles for a bit, and puts herself back to sleep. Or she wakes up and genuinely fusses, and after 10 minutes (the family's chosen threshold) a parent needs to go in and settle her.

Here's the problem with every baby monitor you can buy: it treats both of those exactly the same. Every squeak comes through the speaker. The baby resettles in ninety seconds. The parents are awake for an hour.

So he handed the dusty dev board to Claude. A few rounds of AI-written embedded code later, that board is now the family's baby monitor. It listens all night, tracks how long the baby has actually been crying, and keeps its mouth shut until the crying crosses the 10-minute line. Only then does the audio stream through to the parents.

His logs show the baby wakes up once or twice most nights and resettles almost immediately. The parents sleep through all of it. They only wake up when the monitor decides it's genuinely their turn.

He liked the result so much he ordered 10 more boards to hand out to friends.

## How It Works

The logic is simple enough to sketch on a napkin. That's kind of the point. It's his family's exact sleep-training routine, turned into software.

```
BABY MAKES NOISE
      |
      v
Board starts a fuss timer
      |
      +-- baby quiets down --> timer resets, nobody wakes up
      |
      +-- 30 seconds of fussing --> silent phone notification
      |                             ("she's stirring")
      |
      +-- 10 minutes of fussing --> second notification
                                    AND the live audio finally
                                    streams through to the parents
```

The audio stream is available through a simple web page, or anything that can play a network stream. But it only goes live after the threshold. Before that, the parents get quiet phone pings instead of a direct audio line to, as pugio puts it, the limbic system. Because listening to your baby yell for 10 minutes, even when you know she's just annoyed about bedtime, is genuinely draining. Especially for mom.

The daytime bonus turned out to be almost as valuable: when the baby wakes from a nap, their phones buzz. They can be in the yard, in a far room, or out of the house entirely with a sitter's worth of awareness in their pocket.

## The Part Everyone Skips: Making It Fail-Safe

The obvious objection, and someone on Hacker News made it thoughtfully, is safety. A store-bought monitor is beautifully simple: if you can hear sound from the receiver, it's working. Silence means either a sleeping baby or a dead monitor, and the constant background hiss tells you which. It fails obvious.

A DIY monitor with software in the middle adds states where it could be on but quietly broken. A crashed process at 2 a.m. looks exactly like a peaceful night.

The builder's answer wasn't to wave the concern away. It was to engineer for it, three layers deep:

**A heartbeat watchdog.** A separate process on a completely different machine constantly checks that the monitor is alive and working. If the monitor dies silently, the watchdog notices and raises the alarm. No silent failures.

**A second board that complains.** He wired up a second ESP32-BOX-3 as a receiver. If the transmitter in the baby's room stops sending, the receiver gets loud about it. Which is exactly how a traditional monitor fails, and exactly the reassurance the skeptics wanted.

**A raw audio override.** The web interface has an always-available option to listen to the ungated, unfiltered live audio. Any time the parents want to confirm what's actually happening, they can just listen. The 10-minute gate is a default, not a cage.

Be honest with yourself here: a DIY baby monitor is a personal call, and a $40 store monitor is simpler and fails in ways you'll notice instantly. If you build this, build the watchdogs too. They're not the fun part, but they're the part that makes the fun part responsible.

And notice what the builder's goal actually was. Not replacing parental attention with a machine. Buying back enough sleep and sanity to be better parents. His scorecard after: more sleep, more peace of mind, less stress.

## Why This Matters Beyond Babies

The best comment in the thread called this "one of the killer use cases of AI: build personalized stuff for your life, that no company does. Like minecraft your life."

That's the real story here. No baby monitor company will ever ship your family's exact sleep-training rules as a product. A 10-minute threshold with a 30-second early warning and audio gating? That's a market of one. It would never survive a product meeting.

But bespoke software for a market of one is exactly what a coding agent is good at. You don't need it to work for everyone. You need it to work for you, this month, with your kid's current sleep routine. When the routine changes, you change the code over coffee. Try filing that feature request with a monitor company.

The same logic applies to everything in your house and your business. The thermostat schedule nobody sells. The alert that only makes sense for your shop. The report only your family cares about. Off-the-shelf products serve averages. Your agent serves you.

## Who Should Steal This

Any parent with a sleep-trained kid and $50 of curiosity, obviously. But more broadly: anyone with a drawer full of abandoned gadget projects, because the thing that killed those projects was the coding, and that part is now the easy part. And any small business owner paying for a monitoring or alerting product that almost fits: the pattern here (watch a signal, apply your exact rules, notify only when it matters, add a watchdog so it fails loud) works for a walk-in freezer, a website, or a job site just as well as a nursery.

---

## Keep Reading

- **[Let an AI Run Your Equipment Without Letting It Break Anything](/playbooks/greenhouse-ai-with-safety-rails/)**: the same "AI plus cheap hardware plus safety rails" pattern, applied to a greenhouse.
- **[He Gave His Home a Brain. 50 Days Later, His AI Wakes Him Up, Cleans His House, and Judges His Sleep.](/playbooks/g-bot-home-brain/)**: what happens when you keep going past one device.
- **[Build Your Kid a Reading App Overnight Instead of Buying One](/playbooks/overnight-kids-learning-app/)**: another parent who built the exact thing for their exact kid instead of settling for the store version.
