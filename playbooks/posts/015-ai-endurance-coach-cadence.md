---
layout: playbook.njk
title: "He Replaced His Endurance Coach With an AI. It Adjusts His Training Plan in Real Time."
description: "James Eastwood built Coach Cadence on OpenClaw. It reads sports science literature, watches his intervals.icu data, and rewrites his weekly training plan as life happens. Here's the architecture that makes AI safe to put in charge of your body."
date: 2026-05-27
difficulty: Advanced
cost: "$0-30/month (intervals.icu free tier + OpenClaw + Claude API)"
timeToSetup: "A weekend for the basic loop, ongoing tuning"
originalSource: "https://discord.com/channels/1456350064065904867/1456609488202105005/1470145036275421423"
originalAuthor: "James Eastwood"
issueNumber: 15
permalink: /playbooks/ai-endurance-coach-cadence/
tags:
  - personal-agents
  - health-data
  - fitness
  - training-plan
  - life-automation
  - endurance-sports
---

## Tools

- [**OpenClaw**](#aff-openclaw): hosts the agent, the engine, and the safety rules
- [**Claude**](#aff-anthropic): the brain that interacts with the user and proposes plan changes
- [**intervals.icu**](#aff-intervalsicu): training platform that ingests Garmin, Strava, Wahoo, and structured workouts
- [**Garmin Connect**](#aff-garmin): the wearable layer that feeds intervals.icu the daily data
- [**Strava**](#aff-strava): alternative wearable feed if you don't use Garmin
- [**Telegram**](#aff-telegram): the daily check-in interface the coach uses to talk to you

## What You'll Build

A personal AI coach that does what a good endurance coach actually does. Reads your daily data. Adjusts the week's training plan when life changes. Tells you to back off when you need to. Talks to you like a coach, not like an app.

James Eastwood (who runs Coach Cadence on OpenClaw as part of a small fleet of personal agents) built the version we're looking at here. The fleet, in his words: a PA that runs his other bots and admin, a trader for his investments, an endurance coach (Coach Cadence), a home assistant, and a Catalan teacher.

Coach Cadence is the one that earned the most love in his showcase. The reason: it does the boring middle work that a $200/month human coach does, without the scheduling friction, the texting back-and-forth, and the wait time between adjustments.

The architecture is the part that matters more than the use case. James called out the hardest part himself: getting the balance right between agent autonomy and an engine that prevents hallucinations. That's the lesson worth keeping, whether you're using it for endurance training, strength programming, marathon prep, or anything else where wrong-in-confident-tone could hurt you.

## Why This Works

Endurance training is a data-rich, advice-poor problem. You have:

- A wearable that captures sleep, HRV, resting heart rate, training load, and recovery score every day.
- A workout history with every interval, every climb, every recovery week.
- A goal somewhere on the calendar (a half-marathon, a century ride, a triathlon).
- A life that keeps disrupting the plan (work travel, sickness, family, weather).

What you don't have: someone who watches all of it daily and adjusts. Most amateur athletes get advice from a generic plan they bought on a PDF, a coach they check in with weekly (if they have a coach at all), or a community on Strava that's louder than it is helpful. The data is great. The advice loop is broken.

A well-built AI coach closes the loop. It reads the data every morning. It sees that you slept five hours and your HRV is in the basement. It moves your hard Tuesday session to Wednesday. It tells you why. You go run an easy thirty minutes instead of trying to hit intervals.

What makes the OpenClaw version different from a generic LLM is the engine layer. The agent is not freelancing. It is proposing changes against a structured training plan, and a deterministic engine validates each proposed change against the science before it tells you to do anything.

## The Architecture That Makes It Safe

This is the core lesson from Coach Cadence and the part worth stealing for any "AI in charge of something physical" build.

### Layer 1: The Engine

The engine is a deterministic system that knows the rules of endurance training. Not an LLM. Real code that encodes:

- **Training stress balance.** The relationship between fatigue (accumulated load) and freshness (recent recovery). If your fatigue is too high, the engine refuses to schedule another hard day.
- **Polarized intensity distribution.** Most aerobic training should be easy. The engine enforces the 80/20 (or 70/20/10) rule for the week's prescribed work.
- **Periodization phases.** Base, build, peak, taper. The engine knows where you are in the macrocycle and what types of work belong in that phase.
- **Recovery requirements.** Hard days need easy days. The engine enforces a minimum recovery before the next high-intensity session.
- **Goal-specific volume.** Your weekly volume target depends on your race goal. The engine knows the typical training volumes for a 5K vs. a marathon vs. an Ironman.

The engine is the bottom layer. It is deterministic. It does not hallucinate. It says yes or no to any proposed plan change.

### Layer 2: The Agent

The agent (Claude through OpenClaw) is the conversational and proposal layer. It does the things engines are bad at:

- Reads the raw daily wellness data and notices the qualitative shift ("you've reported elevated stress three days in a row").
- Generates a proposed adjustment to the week's plan in natural language.
- Talks to you like a coach. Asks how you feel. Listens to your context.
- Translates "I'm slammed at work this week" into "let's drop Thursday's tempo run and move the long run to Saturday morning."

The agent never writes directly to the training plan. Every change it proposes goes through the engine.

### Layer 3: The Validator

When the agent proposes a change, the engine validates:

- Does this change maintain the right intensity distribution for the week?
- Does this change leave enough recovery before the next hard session?
- Does this change keep weekly volume within the acceptable range for the current phase?
- Does this change align with the goal on the calendar?

If the proposed change passes, the engine writes it to the plan. If it fails, the engine sends the failure back to the agent with the reason. The agent tries again with the new constraint information. This is the loop James called out as the hardest part: agent autonomy bounded by an engine that prevents hallucinations.

### Layer 4: The Memory

Per-athlete memory the agent loads every time it talks to you:

- Your stated goals (current and longer-term).
- Your training history and PRs.
- Your typical response patterns (some athletes recover fast, some slow; the agent learns yours).
- Your stated preferences (you hate intervals on Wednesdays, you ride outside if the weather is decent, you race in the morning).
- Your hard rules (don't ride more than two days in a row, always rest on Mondays).

The memory makes the coach feel like a coach who knows you. Without it, every conversation starts from scratch and the advice feels generic.

## How to Build the Same Pattern (Adapted)

You don't have to ship Coach Cadence. The pattern works for any health-data domain. Here's how to build your own.

### Step 1: Pick the Data Sources

For endurance training:

- **Wearable data** via Garmin Connect, Whoop, Oura, or Strava.
- **Structured training data** via intervals.icu (which can read most wearables and write structured workouts back).
- **Subjective data** via a daily morning question: how do you feel, on a 1-5 scale.

For strength training, you'd swap intervals.icu for Hevy or a similar log. For running, you might use Stryd plus a GPS watch. The data sources change; the pattern doesn't.

### Step 2: Build the Engine

This is the part that takes the most time and the part where most "AI coach" projects fail. The engine is real software that encodes the rules of your sport.

For endurance, start with:

- A library that can compute training stress balance (TSB) from your data.
- A periodization framework (a few hundred lines of code that knows the phases and the volume targets).
- A validator that takes a proposed week and returns "valid" or "invalid + reason."

There are open-source endurance training libraries you can borrow from. Don't write this from scratch unless you're an exercise physiologist.

### Step 3: Wire the Agent

The OpenClaw agent layer has three jobs:

- **Daily check-in.** Reads the morning wellness data, asks you the subjective question, drafts the day's plan summary.
- **Plan adjustment.** When you tell it something has changed (work travel, sickness, soreness), it proposes a change and runs it through the engine.
- **Weekly review.** At the end of each week, it summarizes what happened, what worked, and what to adjust for next week.

The agent's tool layer includes:

- Read the wellness data file.
- Read the current training plan.
- Propose a plan change (sends to the engine for validation).
- Write to the conversation log.

### Step 4: Encode the Hard Rules

Before you let the agent run live, write the hard rules:

- The agent never schedules two consecutive hard days.
- The agent never increases weekly volume by more than 10%.
- The agent always defers to your stated preferences in memory.
- The agent always escalates to "talk to your real coach" when an injury or persistent illness is involved.
- The agent never claims medical expertise.

These are in the system prompt and in the engine's validation rules. Either layer alone is not safe enough.

### Step 5: Run It on Past Data

Before you let it manage your training going forward, replay it on the last 60-90 days of your data. Read what the agent would have proposed on each day. Compare it to what you actually did. Where the agent would have been wrong, dig into why. Tune the engine, tune the agent prompt, run it again.

### Step 6: Live for One Microcycle, in Advisory Mode

The first week of live operation, the agent only proposes. It does not write to your training plan. You review every proposal and execute or override.

After a week of advisory mode, you have a feel for how often the agent is right vs. wrong. Tune until the agent is right 90%+ of the time on simple decisions.

### Step 7: Hand Over the Steering Wheel

Once the agent is reliably right on simple decisions, let it write to the plan automatically. You still review the week's plan on Sunday night, but the daily adjustments run automatically.

The override switch is always available. You can revert any plan change with one message. The agent learns from your overrides over time.

## Adapting This for Other Health Domains

The same pattern works wherever you have:

- Daily quantitative data from a wearable or app
- A goal on a horizon
- A set of rules that govern how to move from where you are to where you want to be
- A history of decisions you've made and how they turned out

**Strength and hypertrophy programming.** Engine encodes progressive overload, deload weeks, and exercise sequencing. Agent reads your daily readiness and adjusts the day's lifts.

**Marathon training.** Engine encodes the specific demands of marathon prep. Agent reads sleep, soreness, and your subjective fatigue.

**Triathlon prep.** Engine handles the multi-sport balance across swim, bike, and run. Agent adjusts the week when one sport is more taxed than the others.

**Weight management.** Engine encodes caloric balance and the trade-offs between aggressive and sustainable deficits. Agent reads your daily weight, your tracked food, and your activity, and adjusts the calorie target for the week.

**Recovery from injury or illness.** Engine knows the safe return-to-training progression. Agent reads your daily indicators (pain scale, fatigue, energy) and either advances or holds the plan.

**Sleep optimization.** Engine encodes the inputs that drive sleep quality (light exposure, caffeine timing, training timing, evening routine). Agent reads last night's sleep and proposes one targeted change for tonight.

The architecture is the same every time. Engine. Agent. Validator. Memory. The domain rules change. The shape doesn't.

## Gotchas and Tips

- **The engine is the moat.** "AI coach" demos that don't have an engine fall apart on contact with reality. If you have a few hundred dollars and an LLM, you can build the agent layer in an afternoon. The engine takes a weekend or more.
- **Don't trust the LLM to do math.** Volume calculations, stress balance, intensity zones — these all go through real code. The LLM proposes; the engine computes.
- **The escape hatch matters.** Your agent should always be able to say "this is outside my training. Talk to a real coach or a doctor." Build that path in from day one.
- **Wearable data is messy.** Your Garmin will report your sleep wrong sometimes. Your Whoop will misread your HRV occasionally. The engine should be tolerant of one bad data point and skeptical of three in a row.
- **Privacy.** This data is intimate. Keep the data on your own server or in a managed store you control. Don't ship it to a vendor.
- **Don't try to coach your spouse.** This is a tool you build for yourself, on yourself, with your data. The minute you try to scale it to another person, the personalization breaks. If you want to coach others, you're building a product, not a personal agent.

## What This Replaces

Before this stack:
- **Human endurance coach:** $200-400/month for elite-level coaching
- **Generic plan from a coach or app:** $30-100/month with no daily adjustment
- **Self-coaching:** free, but you guess at the adjustments and you get them wrong
- **Subjective decision quality:** moderate; you skip workouts you should do, do workouts you should skip

After this stack:
- **OpenClaw + Claude API:** $20-40/month
- **intervals.icu paid tier (optional):** $0-9/month
- **Wearable subscription you already pay:** unchanged
- **Subjective decision quality:** high; the agent watches the data you can't see

For a serious amateur athlete, the cost of bad training decisions is real. Missed races, injuries, plateaus, burnout. A 24/7 coach that reads your data and adjusts your plan is the highest-leverage personal AI build a fitness-minded person can run.

It is also one of the cleanest demonstrations of the broader pattern: AI is at its best when it watches a stream of data you generate, and proposes changes against an engine that knows the rules. Endurance training is one example. The same pattern is going to remake personal finance, nutrition, sleep, and a dozen other slices of life where data flows but advice doesn't.

James shipped Coach Cadence as one of five personal agents he runs. The longer-term story is the fleet, not the single agent. Coaches, advisors, assistants, tutors — each one a specialist that watches your data, makes proposals against a real engine, and only does what it's allowed to do.

This is what "AI runs my life" actually looks like when it's done well. Not one giant assistant that does everything badly. Small, specialist agents that each do one thing inside a rule system that keeps them safe.

---

## Keep Reading

- **[He Gave His Home a Brain. 50 Days Later, His AI Wakes Him Up, Cleans His House, and Judges His Sleep.](/playbooks/g-bot-home-brain/)**: The same fleet-of-personal-agents pattern applied to the home environment instead of training. Pair the two for an "agents watching all your inputs" lifestyle.
- **[Build an AI Life OS That Knows Your Entire Day (Before You Do)](/playbooks/ai-life-os/)**: The personal operating system that orchestrates all your daily-running agents. Coach Cadence is one of the specialists; the Life OS is the layer that ties them together.
- **[Give Your AI a Second Brain That Gets Smarter Every Day ($0/Month)](/playbooks/ai-second-brain/)**: The memory layer that makes any personal agent feel like it knows you. Required reading before you build any agent that's supposed to remember things across sessions.
