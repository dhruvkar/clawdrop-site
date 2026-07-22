---
layout: playbook.njk
title: "He Built an AI Health Coach That Makes Habits Stick"
description: "A maker built an open-source AI health assistant, used it for weeks, ran small sleep experiments on himself, and measurably improved his deep sleep. Here's how to run your own."
date: 2026-07-21
difficulty: Beginner to Intermediate
cost: "Free and open source, plus modest agent API costs (a few dollars a month) instead of a $100-200/mo human coach or habit-app subscription"
timeToSetup: "An afternoon to install it and connect your data"
originalSource: "https://news.ycombinator.com/item?id=48926336"
originalAuthor: "the Murph maker (Show HN)"
originalAuthorUrl: "https://news.ycombinator.com/item?id=48926336"
issueNumber: 23
permalink: /playbooks/personal-ai-health-coach/
tags:
  - health
  - habits
  - sleep
  - behavior-change
  - personal
  - open-source
  - wellness
  - home
  - accountability
  - openclaw
---

## Tools

- [**Murph**](#aff-murph): the open-source personal health assistant this whole playbook is built around, from withmurph.ai
- [**OpenClaw**](#aff-openclaw): the agent runtime this kind of always-on personal assistant runs on
- [**Claude Code**](#aff-claude-code): alternative agent harness for the same setup
- [**Anthropic**](#aff-anthropic): the model provider behind the assistant's reasoning

## What You'll Build

A private, always-on health assistant that lives on your own machine, knows your goals, and actually helps you change your behavior. Not another app with a streak counter you'll abandon in nine days. An assistant you can talk to, that remembers what you're working on, runs small experiments with you, and keeps you honest.

The maker who built this open-source tool, called Murph, has been running it on himself for weeks. He used it to run a few sleep experiments, small tweaks to his routine that he tracked over time, and he measurably improved his deep sleep. He also used it to run challenges over group text with his friends, the kind of "let's all do this for two weeks" push that usually falls apart by day three.

The output is a health coach that costs the price of an API bill instead of $100 to $200 a month for a human coach, and that actually does the one thing most habit apps never manage: it helps the change stick.

This is a real, in-use tool, and it's open source. You install it, connect your data, and start using it. Claw Drop found it. The maker built it and runs it every day.

## The Story

Here's the honest truth about health apps. You download one, you're excited for a week, you log a few meals or nights of sleep, and then life happens and the app becomes another icon you swipe past. The problem was never information. You already know you should sleep more, move more, and drink less. The problem is behavior. Changing what you actually do, day after day, is genuinely hard.

That's the exact problem the maker of Murph set out to solve. Everyone has something they want to improve. Almost nobody has a tool that makes the improvement stick. So he built an open-source personal health assistant designed around that single job: not to give you more data, but to help you change.

Then he did the thing that makes this worth writing about. He used it on himself, for weeks, as a daily tool. Not a demo he spun up for a launch. A real assistant he actually runs.

His first project was sleep. He ran a few small experiments with the assistant, adjusting things in his routine and watching how his sleep responded over time. The result was concrete: his deep sleep, the restorative kind that actually determines whether you feel like a person the next day, measurably improved. He didn't guess. He ran experiments and watched the numbers move.

His second project was accountability. He used the assistant to run challenges over a group text with friends. Anyone who has ever tried to get a group of adults to stick to anything for two weeks knows how quickly that collapses. Having something that keeps the challenge alive, checks in, and nudges people is the difference between a fun idea and an actual change.

## Why This Works When Habit Apps Don't

Most habit tools fail for the same reason. They put the entire burden of behavior change on you. They show you a chart and a streak, and then they wait for you to supply all the willpower. That's backwards. If willpower alone worked, you wouldn't have needed the app.

An AI assistant flips the dynamic in a few specific ways.

It remembers. Your assistant knows what you said last week, what you're working on, and what you tried that didn't work. You're not starting from a blank screen every day. You're continuing a conversation with something that has context.

It's conversational. You can tell it "I slept terribly last night and I think it was the late coffee" in plain English, and it can factor that in. You're not tapping through a rigid logging flow. You're talking to something.

It runs experiments, not just tracking. This is the real unlock. Tracking tells you what happened. An experiment tells you what works for you specifically. The maker didn't just watch his sleep numbers. He changed one thing at a time and measured the effect, the same way a good coach would. That's the difference between data and progress.

It's private. Because it's open source and runs on your own setup, your health data doesn't become the product. For a category as personal as sleep, mood, food, and habits, that matters more than almost anywhere else.

## How to Run Your Own

You don't need to be technical to get value here, but you do need to be willing to spend an afternoon setting it up. Here's the shape of it.

### 1. Install Murph

Murph is open source and lives at withmurph.ai. Because it's open, you can read exactly what it does, run it yourself, and change it if you want. Getting it running is the afternoon part. Follow the project's setup instructions, get the assistant talking, and confirm it works before you connect anything personal.

### 2. Connect Your Data

The assistant becomes useful the moment it can see what's actually happening in your life. Sleep data is the natural first thing to hook up, since it's the experiment the maker ran and it produces clear numbers you can move. Start with one data source rather than trying to wire up everything you own. One clean input beats five messy ones.

### 3. Pick One Thing to Improve

Do not try to overhaul your entire life on day one. That's the exact mistake that kills every New Year's resolution. Pick one thing. The maker picked sleep. Sleep is a great first target because it's measurable, it responds to specific changes, and improving it makes everything else easier.

### 4. Run a Small Experiment

Change one variable. Cut caffeine after 2pm, or move your last screen an hour earlier, or shift your bedtime by 30 minutes. Then let the assistant help you watch what happens over a week or two. The point is to isolate what works for your body, not to copy someone else's routine. This is the part that most habit apps simply cannot do, and it's where the real behavior change comes from.

### 5. Add Accountability

Once you've got one experiment running, bring in other people. The maker ran challenges over group text with friends. Social accountability is one of the most reliable behavior-change levers that exists, and it's usually the piece that's missing. A challenge with three friends and something keeping it alive will outperform any solo streak counter.

## What It Costs

This is where the math gets almost silly.

A human health or wellness coach runs $100 to $200 a month, often more, and you get an hour of their attention a week if you're lucky. A premium habit or sleep app is a subscription that mostly shows you charts. Murph is free and open source. Your only real cost is the agent API bill that powers the assistant's reasoning, which for personal daily use lands in the range of a few dollars a month.

So the comparison isn't "cheap app versus expensive app." It's "a private, always-on assistant that runs experiments and keeps you accountable, for the price of a coffee or two a month, versus a human you can only afford to see occasionally or an app that doesn't actually change your behavior."

The value isn't really the money, though. It's that this is the version that works. Cheap and abandoned is worse than free and used every day.

## The Light Business Angle

Money here is upside, not the headline. But if you work in health, it's real upside.

If you're a wellness coach, a personal trainer, or a health practitioner, the hardest part of your job is the six days a week your client isn't in front of you. That's where good intentions quietly die. An assistant like this, set up for a client, becomes a between-sessions accountability layer. It keeps the plan alive when you're not there, and it hands you a much better picture of what actually happened when the client comes back.

If you're a solo operator looking for a service to offer, "I'll set up your personal AI health coach" is a clean, concrete package. It's an afternoon of setup, it's open source so there's no vendor lock-in to explain, and the outcome is something people genuinely want and mostly fail to build for themselves.

But run it on yourself first. The credibility of offering this to anyone else comes entirely from having used it, changed something real, and being able to say so honestly.

## A Few Honest Notes

**Start smaller than you think.** One goal, one experiment, one data source. The instinct to fix everything at once is exactly the instinct that has failed you before.

**Measure something real.** Sleep works because you can see it move. Pick a first target where you'll actually know whether it's working, not a vague "feel better" goal you can talk yourself into or out of.

**It's a tool, not a doctor.** This is a personal habit-and-experiment assistant. It is not medical advice, and it doesn't replace a real clinician for anything that matters. Use it for the everyday behavior-change stuff it's built for.

**The point is the sticking, not the setup.** The afternoon of installing it is the easy part. The win is that six weeks from now you're still using it. Design your first experiment to be so small you can't fail at it, and let the momentum build from there.

---

## Keep Reading

- **[He Replaced His Endurance Coach With an AI That Adjusts His Training Plan in Real Time](/playbooks/ai-endurance-coach-cadence/)**: The serious-athlete version of this idea. Where this playbook is about everyday habits and sleep for a normal person, that one is about squeezing performance out of a real training plan.
- **[He Gave His Home a Brain. 50 Days Later, His AI Wakes Him Up, Cleans His House, and Judges His Sleep.](/playbooks/g-bot-home-brain/)**: The same "private assistant that actually knows your life" pattern, pointed at your household instead of your health.

**Want the foundations?** Read our [Best OpenClaw Skills](/learn/best-openclaw-skills/) guide for the assistant-building patterns this playbook is built on.
