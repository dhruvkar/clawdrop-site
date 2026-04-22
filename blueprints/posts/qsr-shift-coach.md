---
layout: blueprint.njk
title: "The Restaurant GM Who Built AI Coaches for Every Shift"
description: "A working GM wired OpenClaw into his QSR operation. Shifts stopped losing context overnight, the pre-rush briefing writes itself, labor leaks get caught the same day. The pattern works for any shift-based business."
date: 2026-04-22
difficulty: Intermediate
cost: "$20-40/month"
timeToSetup: "A weekend to build, another to tune"
originalSource: "https://www.reddit.com/r/openclaw/comments/1spyzz7/qsr_ops_suite_final_four_drops_shift_reflection/"
originalAuthor: "r/openclaw operator"
issueNumber: 10
permalink: /blueprints/qsr-shift-coach/
tags:
  - operations
  - shift-based
  - restaurants
  - franchise
  - multi-unit
  - retail
  - labor
  - qsr
  - ops
---

## What You'll Build

Three AI skills that sit on top of how a shift-based business actually runs. Not dashboards. Not KPIs on a wall. Skills that the manager running the shift can talk to and get useful work from.

**Shift Reflection** writes the close-of-shift summary, but more importantly carries forward every open loop until somebody actually closes it. The fryer that acted up. The delivery that was short. The trainee who struggled on window. None of it dies in a three-line manager log anymore.

**Pre-Rush Coach** gives the team a 60-second tactical briefing before the lunch or dinner rush. Specific to today, this location, this crew. It pulls from sales forecast, open loops, weather, local events, and what broke the last time this exact combination was on the schedule.

**Labor Leak** watches your labor cost through the shift and flags the leaks the same day. Not in next month's P&L. Not in Friday's report. Now, at 2:14 PM, when you can actually do something about it.

This is built from a working QSR general manager who shared the full pattern on Reddit. QSR means quick-service restaurant, the fast-food and fast-casual brands you know. But the three skills carry cleanly to any business that runs in shifts. Retail. Gyms. Salons. Urgent care. Hospitality. Warehouses. Bars. Cleaning services with routed crews.

## Why Shift-Based Businesses Leak Money

Here is the actual problem, in specific terms.

You close a shift at 11 PM. You write three lines in the manager log. "Fryer 2 cold twice. Delivery short 2 cases #6. New hire struggling on window."

Eight hours later, the opener reads your three lines, nods, and starts the shift. By 11 AM, fryer 2 is out. The "missed" delivery was actually shorted and the credit never got filed. The new hire quit at 10:30 because nobody talked to her about yesterday's window disaster. The opener had none of this context. Not because they are bad at their job. Because your handoff system is three lines in a book.

Multiply that by seven shifts a week across every location you run. That is what most operators actually deal with. The job is not running one good shift. The job is keeping yesterday's open loops from becoming today's fires.

Then there is the rush. You know it is coming. The POS data has said so since 10 AM. You have your crew, you know who is strong today, you know what is limping. But walking your team through "today is different because Sarah is out, we are short one fryer, and the mobile pickup queue is going to get heavy" takes fifteen minutes you do not have. So you skip the briefing. The first thirty minutes of the rush is the team figuring out what you already knew at 10:30.

Then labor. Most operators only see labor cost on a weekly P&L. That is an autopsy, not a fix. By the time you see 32% labor against a 27% target, the week is over. The leak has already happened. The fix is next week, which is one week too late in a business that runs on 3-5% margins.

Here is the simple math. A QSR doing $60,000 a week with 27% target labor is spending $16,200 a week on labor. If you run at 30% instead of 27% for the same four-week period, that is $7,200 in labor overspend per month per location. For a two-location operator, that is $172,800 a year. The margin in this business does not survive a surprise like that.

The three skills we are about to build exist to stop that leak before it happens, not after.

## The Pattern

Every shift-based business runs the same loop. The AI plugs into five specific places.

```
OPEN SHIFT
    |
    v
[1] OPENER READS CARRY-INS        <-- Shift Reflection (yesterday's open loops)
    |
    v
[2] PRE-RUSH BRIEFING             <-- Pre-Rush Coach (before 11 AM and 5 PM)
    |
    v
RUSH HAPPENS
    |
    v
[3] MID-SHIFT LABOR CHECK         <-- Labor Leak (hourly)
    |
    v
[4] MID-SHIFT LABOR ADJUSTMENT    <-- manager decision, AI-assisted
    |
    v
CLOSE SHIFT
    |
    v
[5] SHIFT CLOSE + OPEN LOOPS LOG  <-- Shift Reflection (write forward)
    |
    v
OPEN NEXT SHIFT  (loop continues)
```

The three skills cover points 1, 2, 3, and 5. Point 4 is always the manager's call. That is the right split. The AI does the reading, the summarizing, and the math. The manager does the judgment.

## Step-by-Step Setup

### Step 1: Install OpenClaw and Connect to Your POS

OpenClaw runs on a cheap machine. A Mac mini on the office shelf works. A small VPS works. A beat-up Dell next to the office computer works. You do not need anything exotic.

The first setup question is always: can your POS give data to an outside system? Modern systems (Toast, Square for Restaurants, Lightspeed, Revel, SpotOn) all have APIs and you can get read-only access in an afternoon. Older systems (NCR Aloha, some Micros deployments, a lot of regional POS products) need a reporting export instead. Most of these can email or FTP a daily sales and labor file. That's enough.

Two data streams you must get access to:

- **Real-time or hourly sales.** Needed for labor leak and pre-rush forecasting.
- **Clock-in / clock-out data.** Needed for labor leak.

If your POS cannot emit either stream, this blueprint does not work for you. Fix the POS first or accept you are running this blind.

### Step 2: Create the Shift Log Format

Every shift writes into a standardized log. Not freeform notes. A structured format the agent can read. Keep it in a shared drive or a git repo. A single markdown file per shift, named `YYYY-MM-DD-ShiftType.md`.

```markdown
# Shift Log: 2026-04-22 Dinner

**GM on duty:** Alex
**Shift lead:** Jamie
**Crew:** 8 (target: 9, one call-out)

## Open Loops Carried In
- [fryer_2_maintenance] Second cold event in 24h. DO NOT open. Waiting on tech.
- [delivery_short_wings] Credit filed with distributor, tracking.
- [rotation_hygiene] Needs retraining, log for next shift-leader check-in.

## This Shift
- Sales: $8,942 (target $8,400, +6.4%)
- Labor %: 28.9% (target 27%, +1.9pp)
- Speed of service: 4:12 avg (target 4:00)

## Incidents
- [NEW] 6:45 PM, ice machine leaked. Contained. Tech scheduled 4/23.
- [NEW] 7:20 PM, guest complaint about order accuracy. Comped meal, logged.
- [open] fryer_2_maintenance still open, tech did not show.

## Open Loops Carried Forward
- [ice_machine_leak] Tech 4/23, do not use until confirmed.
- [fryer_2_maintenance] Reschedule tech. Call at 9 AM.
- [guest_complaint_accuracy] Trend: 3rd complaint this week. Retraining review.

## Staff Notes
- Trainee "K" much stronger tonight, pull off window shadow next shift.
- Jamie ran a clean line, first full close solo. Good.
```

The format looks heavy. It is not. The GM writes this in 10 minutes at end of shift. The agent reads, cross-references, and produces the next shift's carry-in pack automatically.

The specific tags in brackets are what make this queryable. `[fryer_2_maintenance]` is the same tag across every shift it appears. The agent counts occurrences. Three shifts in a row with the same tag escalates automatically.

### Step 3: Skill One, Shift Reflection

This is the simplest skill. It runs at shift close and does three things.

1. Reads your freeform close notes and the POS data
2. Updates the open-loops ledger (one running markdown file across all shifts)
3. Writes tomorrow's opener brief

The opener brief is the output that matters. It looks like this:

```markdown
# Opener Brief: 2026-04-23 Lunch

Three carry-ins from last night. Read before setting up.

1. **Fryer 2 is down.** Two cold events in 24 hours. Tech did not show yesterday.
   Rescheduled for today. DO NOT open fryer 2. Tenders on single-fryer flow.

2. **Ice machine leaked last night.** Contained. Tech 4/23 at 2 PM.
   Do not use until tech confirms. Use backup ice bins for morning.

3. **Order accuracy trend.** 3rd complaint this week. Retraining review scheduled
   with Jamie for tomorrow afternoon. Today, run window double-check on all
   orders over $15.

## Not Carry-Ins But Heads Up
- Trainee "K" ready to come off shadow, pair with Marco on window.
- Jamie solo-closed last night for the first time. Nice.
```

The opener walks in with three specific things. Not three cryptic lines. Not seven pages to read. Three things with actions attached.

### Step 4: Skill Two, Pre-Rush Coach

This is the skill you did not realize you needed. It runs 45 minutes before your known rush (configured per location per day). It pulls:

- Today's sales forecast from the POS
- Staffing for the shift (who clocked in, experience level, known limitations)
- Open loops from the reflection skill
- Weather, local events, anything on file that changes demand
- What broke last time this exact shift ran with this exact constraint set

Then it writes a short tactical briefing. Not a report. A spoken briefing a shift lead can read to the team in 60 seconds.

```
PRE-RUSH BRIEFING: 2026-04-22 DINNER (5:15 PM)

Today forecast 8% over last Wednesday. Two trainees on window so Mike
staying on line, not floating. Fryer 2 is down so your bottleneck is
going to be tenders. Batch ahead from 5:30. We did this exact thing
three Wednesdays ago and the line crashed at 6:20 because we ran behind
on tenders. Watch that time.

Mobile orders ahead of pickup are expected heavy because of Wednesday
wing night promo. Second staging rack at 5:45.

That's it. Go.
```

You are not telling the team anything they could not figure out. You are saving them the fifteen minutes of figuring it out during the rush, which is when figuring it out is the most expensive.

The skill learns. The third time "forecast 8% over, fryer 2 down, two trainees" hits, it pulls the last briefing, what actually happened, and any corrections the GM made afterward. The briefing gets sharper every time the pattern repeats.

### Step 5: Skill Three, Labor Leak

This is the one that pays for the whole system.

Every hour during the shift, the skill checks labor as a percentage of sales and compares it to target. When it drifts past a threshold, it flags it. Not with "your labor is bad." With a specific call.

```
LABOR ALERT: 2:14 PM

Labor is currently 34.2% against a 27% target for this hour.
Sales are trending 18% under forecast.

Two people on the line could be sent home:
- Sarah (willing per preference file, covering tomorrow AM)
- Eli (willing per preference file, picked up extra yesterday)

If you cut now:
  End-of-day projected labor: 28.1%

If you cut at 3:00 PM:
  End-of-day projected labor: 29.8%

If you cut nobody:
  End-of-day projected labor: 32.4%
  Overspend vs target: $310 on today's shift.
```

The call is yours. The math is not yours to do in your head. That is the point. The agent gives you the math and the options. You make the decision, because you are the one who knows Sarah is covering a shift tomorrow she actually needs.

The $310 number at the bottom is the wedge that changes behavior. Before the alert, you are estimating in your head, "eh, we might be a little heavy, probably fine." After the alert, you are staring at a specific dollar figure of overspend that your GM bonus or owner P&L will reflect. People make faster decisions with numbers attached.

### Step 6: Wire the Skills to Where Your Team Actually Is

None of this matters if the briefing lives in a web dashboard nobody opens.

Pick one communication channel your team already uses. Usually it is a group SMS, Slack, or MS Teams channel. Wire OpenClaw to push messages there.

- Opener brief: SMS to the opener at 5 AM
- Pre-rush briefing: post to team channel 45 minutes before rush
- Labor alert: SMS to the manager on duty, not the group channel

The channel choice matters. Labor alerts in the group chat create weird social pressure. Labor alerts to the manager's phone are private. They keep it a management conversation instead of a crew conversation.

### Step 7: Set a Weekly Review Cadence

Every Monday morning, 20 minutes. You open the shift log archive from the past week and look at three things.

1. **Open loops that kept recurring.** Anything that appeared on three or more shift carry-ins is a real problem, not a one-off. Fix the root cause or accept that it is now permanent and change your playbook.

2. **Labor alerts that were ignored.** If the system flagged a leak and the manager did not cut, log it. Over four weeks, you will see a pattern. Either the thresholds are wrong (tune them) or a specific manager is not cutting labor when they should be (coach them).

3. **Pre-rush briefings that were wrong.** If the system predicted a 6:20 PM crash and it did not happen, update the model. If it missed a crash entirely, add the factor it missed.

The review is the only part of this system that requires ongoing human attention. Twenty minutes a week. Every other shift the system runs itself.

## Lanes That Work

This blueprint fits any operator whose business runs in shifts and has the same information-loss problem shift after shift.

**Multi-unit QSR franchisees.** You are the primary audience. You already have POS data, you already have the staffing patterns, you already have the labor pressure. You just do not have a system that turns data into decisions fast enough. Three locations worth of this compounds beautifully.

**Retail operators with morning and evening crews.** The handoff gap is identical. Morning manager does not know what broke last night. Evening manager does not know what plan morning started. This fixes both ends.

**Gyms, salons, and small hospitality.** Your version of "the rush" is different but the pattern holds. Pre-rush coach becomes "pre-class briefing" or "pre-weekend checklist." Labor leak becomes hourly staff-to-booked-appointments ratio.

**Urgent care and clinic operators.** Shift handoff is literally the most regulated and highest-stakes version of this problem in the economy. Apply this with care, but the base pattern transfers.

**Warehouses and logistics operations.** Open loops between day and night shifts are exactly where shrink happens, exactly where accidents happen, exactly where bottleneck inventory gets misrouted. The same skills, with different nouns.

What does not work: a single-shift business with one person. You do not have the handoff problem because there is no handoff. You might still want the labor skill, but the reflection and pre-rush skills are overkill.

## What Changes After Setup

**Day 1.** You feel like you're adding paperwork. The close-of-shift markdown takes 10 minutes and you wonder if it is worth it.

**Week 1.** Your first opener brief arrives on a morning where you are not there. The opener messages you "how did you know about the ice machine?" You did not. The system did.

**Week 2.** Your first labor alert goes off on a slow day. You cut two people an hour earlier than you would have. You hit your weekly labor target for the first time in three months.

**Week 4.** The pre-rush briefings are scary-specific because the system now has four weeks of pattern data. It tells your shift lead "this Wednesday looks like the third Wednesday of last month. On that day we ran out of tenders at 6:22. Batch ahead."

**Month 2.** A GM from another location asks you to set it up for them. You realize you built a playbook, not a skill.

**Month 3.** Your recurring open-loops list has shrunk. Things that used to bleed across shifts are either fixed permanently or explicitly accepted as "this is just how it is." Your weekly review takes 10 minutes instead of 20 because there is less to review.

**Month 6.** You hire a new GM. They learn the system in a week. The system is your training manual.

## Gotchas and Tips

**Start with one skill, not three.** Shift Reflection first. Prove the value by replacing the three-line log. Then add Pre-Rush. Then add Labor Leak. Skipping to Labor Leak on day one burns out the GMs because they do not trust the numbers yet.

**Tag everything consistently.** The `[fryer_2_maintenance]` bracket tags are what make the system work. If some shifts use `[fryer2]` and others use `[fryer_2]` and others use `[fry2]`, the agent cannot count recurrences. Build a tag sheet, post it in the office, enforce it for the first month.

**The first labor alert you ignore teaches the system it was wrong.** If the system says cut two people and you keep them because a bus is coming, log that reason. The system does not learn from "you were ignored." It learns from "you were ignored because a school bus was coming and we don't track field trips yet." Add field trips to the forecast.

**Do not automate the decision.** The skills brief and analyze. They do not cut staff, reschedule deliveries, or send customer apologies. Every action-taking step stays manual. The moment the system sends your team home by itself is the moment your team stops trusting it.

**The cost is tiny compared to the leak.** You are spending $20 to $40 a month on a system that is guarding against five-figure monthly leaks. The ROI math is so lopsided that the only real question is whether you can wire it up cleanly enough to actually run. Hire a weekend of contractor time if needed.

**Keep the briefings short.** If your pre-rush briefing is more than 90 seconds to read aloud, it will not get read. Tighten it. The skill should ruthlessly cut anything that is not different from yesterday.

**Weekly review is non-negotiable.** The only way this system drifts bad is if nobody is looking at the patterns. Twenty minutes a week. Put it on the calendar. Skip it for a month and the open-loops ledger turns into noise.

**Protect the data.** Clock-in data is sensitive. Sales data is sensitive. If you are running OpenClaw on a VPS, encrypt the shift log folder. If you are running on a Mac mini in the office, lock the machine. This is not paranoia. This is not the last place a disgruntled employee will look on their way out.

---

## Keep Reading

- **[The One-Person Agency: Charge Agency Rates as a Solo Operator](/blueprints/one-person-agency/)** — How operators productize their playbooks into client-ready deliverables. Adjacent pattern if you're thinking "I could sell this to other GMs."
- **[He Spent $1,263 on AI in One Month. Then He Capped It.](/blueprints/ai-budget-cap/)** — The cost-control layer you'll want once you run three skills on the same machine. Matters more when multiple locations share infrastructure.
- **[Teach Your AI to Stop Making the Same Mistake Twice](/blueprints/self-improving-agent/)** — The self-improvement layer that makes your shift coach sharper every week. Bolt it on after month one.
