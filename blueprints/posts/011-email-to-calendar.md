---
layout: blueprint.njk
title: "Never Copy a Date From an Email to Your Calendar Again"
description: "A 100-line OpenClaw skill that watches your inbox for hidden events — school newsletters, flight confirmations, meeting invites, doctor appointments — and drops them on your calendar automatically. Including the right attendees and reminders."
date: 2026-04-29
difficulty: Set it up in an afternoon
cost: "$0 if you already pay for Google Workspace; runs on top of any agent setup"
timeToSetup: "30 minutes to install. A week of running before you stop noticing it's there."
originalSource: "https://www.clawhub.ai/tonimelisma/email-to-calendar"
originalAuthor: "Toni Melisma"
originalAuthorUrl: "https://www.clawhub.ai/tonimelisma"
issueNumber: 11
permalink: /blueprints/email-to-calendar/
tags:
  - email
  - calendar
  - gmail
  - google-calendar
  - clawhub
  - skill
  - personal-ops
  - parents
  - travel
  - inbox-zero
---

## What You'll Build

A skill named `email-to-calendar` that sits on top of your existing OpenClaw setup, watches your Gmail inbox, finds the dates that humans bury in emails, and drops them on your Google Calendar without asking. School holidays from the PTA newsletter. Flight confirmations from airlines. Meeting invites that came as plain text instead of a proper `.ics`. Doctor appointment reminders. The kid's soccer schedule. The neighborhood association meeting. The wedding RSVP date you keep meaning to put on the calendar.

You will stop copying dates from emails into your calendar. Permanently. The skill does it for you, with duplicate protection so it never books the same dinner reservation twice.

The skill comes from Toni Melisma (`tonimelisma` on the OpenClaw community). He published it on Clawhub, the open marketplace where OpenClaw users share skills. You can install it with one command, and it works the same day. The original Discord post is the kind of low-key showcase that hides one of the highest leverage skills you'll add to your agent this year.

## Why You Keep Doing This Manually

Stop and notice your routine when an email comes in with a date in it. You read it. You think "I should put this on the calendar." You either: (a) pause, switch to your calendar, type in the event, save it, switch back; or (b) tell yourself you'll do it later and forget. The (a) version costs you 60 seconds of focused attention every time. The (b) version costs you the kid's recital.

A typical busy household generates 10 to 30 of these moments a week. School newsletters with 8 dates packed into a paragraph. Flight confirmations. Hotel bookings. Reschedule notifications. Soccer-practice changes. PTA meetings. Family birthdays you swear you'll remember. Healthcare appointment reminders. Each one demanding a copy-paste-save-switch ritual.

The total tax is small per item and large in aggregate. Worse, it's the kind of low-grade attentional drag that makes you feel mildly behind on your own life. You're not behind. You're paying a 5-minute-a-day tax on email-shaped infrastructure that should have been solved years ago.

The reason it wasn't solved is that the parsing problem is harder than it looks. School newsletters write dates as "Friday October 12th, 3:30pm in the gym." Flight confirmations write them as "DEP: 14:25 SFO 12-OCT 2026." Doctor's offices write "Your appointment is scheduled for Monday at 2pm, please confirm." Until LLMs got good at structured extraction, you couldn't write a regex that handled all three.

You can now. And the skill is 100 lines.

## The Pattern

The skill has 4 parts and you can read its whole job description in 30 seconds.

**Part 1. Watch the inbox.** The agent runs on a heartbeat (every 30-60 minutes is plenty). Each cycle, it pulls new email since last run. You can scope it to specific labels (events-only, school, family) or run it inbox-wide.

**Part 2. Extract events.** For each email, the agent asks: does this contain a date or time the human would want on a calendar? If yes, it pulls structured details: event title, date, start/end times, location if mentioned, attendees if mentioned, brief description. The LLM does the parsing; this is exactly the kind of task it's good at.

**Part 3. Dedupe.** Before creating the event, the agent checks the calendar for an existing match (same date + similar title). If it finds one, it skips. If the existing event has different details (e.g., the school moved the time), it updates instead of duplicating.

**Part 4. Create the event.** The agent calls Google Calendar to create the event with the right metadata, attendees, and notification rules. Done. Your calendar fills itself.

The whole loop runs without you. You see the result in your calendar. The original email is still in your inbox in case you want to read it again.

## Step-by-Step Setup

### 1. Install the skill from Clawhub

Toni published the skill at `clawhub.ai/tonimelisma/email-to-calendar`. The Clawhub install pattern from your OpenClaw workspace is:

```
openclaw skill install tonimelisma/email-to-calendar
```

The skill drops into your `skills/` directory with a `SKILL.md` describing what it does and a small set of helper files that wire into the agent.

### 2. Connect Gmail and Google Calendar via gog

The skill talks to Gmail and Google Calendar through the `gog` CLI, which is the standard OpenClaw integration for Google Workspace. If you've already used gog for other skills, this step is done. If not:

```
gog auth login
```

You'll see a one-time browser flow to authorize Gmail read and Calendar read/write scopes. The token gets stored in your OpenClaw workspace and the skill picks it up automatically.

### 3. Configure scope

By default the skill scans your whole inbox. Most people want it scoped to specific labels. Edit `skills/email-to-calendar/config.md` (or the equivalent in the version you installed) and set the labels that should trigger event creation. Common scopes:

- `school` (manually-tagged via Gmail filters for PTA, school, kids' activities)
- `travel` (auto-tagged via filters for airlines, hotels, rideshare)
- `events` (a catch-all label you triage into)

You can also leave it inbox-wide if your inbox is already curated.

### 4. Add a heartbeat

Tell your OpenClaw agent to run the skill periodically. The simplest version is a cron-style entry:

```
# Every 30 minutes, look for new events
*/30 * * * *  Run skill: email-to-calendar
```

Or, if you use the agent's heartbeat loop, add `email-to-calendar` to the routine list. First-pass run scans the last 30 days. After that, only new mail.

### 5. Run it once with confirmations on

For the first 3-5 runs, set the skill to draft events instead of creating them. The agent shows you what it would create; you confirm. After 50 events, you'll know whether the parsing is reliable for your inbox. Then turn confirmations off and let it run.

This shouldn't take more than a week. By the end of it, the skill is silent and your calendar is full of things you never typed.

## Lanes That Work

The same machinery applies to a half-dozen adjacent jobs. Once you've gotten comfortable with the email-to-calendar version, you can replicate the pattern with minor edits.

**Email-to-tasks.** Same skeleton. Watches inbox. Extracts action items. Drops them on Todoist, Things, or your task system. "Reply to landlord by Friday" stops living in your head.

**Email-to-CRM.** For founders and salespeople. Watches inbox. Detects when a lead replies, when a customer flags a problem, when a champion mentions you should talk to their colleague. Pushes the right activity to the CRM.

**Email-to-receipts.** Watches inbox for receipts. Extracts vendor, amount, category, date. Pushes to a Sheets tab or your accounting system. Stop manually entering business expenses.

**Email-to-newsletter.** The reverse direction. Pulls dates from a curated set of newsletters and aggregates them into a weekly "things happening in your industry" briefing.

**Slack-to-calendar / WhatsApp-to-calendar.** Same skill, different inbox. Your in-laws texting "we're coming for Thanksgiving on the 24th" is now a calendar entry.

The pattern in every case is: watch a stream of human-written messages, extract structured intent, drop it in the system that should have it.

## What Changes After Setup

Within the first week, you stop noticing. That's actually the point. The dates appear on your calendar. You see them when you check. You don't remember asking for them. The "I'll put it on the calendar later" thought stops happening.

Within the first month, your calendar becomes accurate in a way it wasn't before. The half-remembered events that used to live in your inbox are now visible alongside everything else. Conflicts surface earlier. The kid's recital and your client meeting both being on October 12th is something you discover on October 1st instead of October 11th.

Within the first quarter, your relationship to email shifts. The inbox stops being a hidden TODO list. It starts being a queue of things to read or reply to. The dates and the calendar live somewhere else, automatically.

For a working parent or anyone juggling multiple calendars, this is the highest-leverage hour you'll spend on personal ops this year. For an SMB owner whose inbox is also their team's coordination layer, it's even bigger.

## Gotchas and Tips

**Run with confirmations for the first week.** Always. The cost of one wrong-event-on-the-calendar is a missed meeting; the cost of a week of manual confirmations is 5 minutes a day. Pay it up front.

**Watch the duplicate logic on the first big run.** When you scan 30 days of history at install, the skill will try to back-fill events you already manually entered. Most of the time the dedupe catches it. Sometimes it doesn't (different title, same date). Spot-check the first day's output.

**Use Gmail filters to do the labeling work.** The skill is much more accurate when scoped to labels you've curated. Spending 10 minutes on filters ("emails from school@districtwide.org → label:school", "from any airline domain → label:travel") makes the skill 90% more reliable.

**Don't run inbox-wide if your inbox is messy.** If you have 12,000 unread newsletters, every cycle will burn API calls trying to extract events from press releases. Curate first, then run.

**Set sensible notification rules in the skill config.** Default of "no notification" is fine for most events. For travel, you may want "1 day before" + "2 hours before." Set this once in the skill config so every flight confirmation gets the same treatment.

**The skill respects existing manual events.** If you typed something into your calendar by hand and the skill later sees an email about the same thing, the dedupe should leave your manual version alone. Verify this on your first inbox sweep, because Gmail's threading will surface old emails as "new."

**Decide what counts as an event.** Is "Sale ends Friday" an event? "Submission deadline next Monday"? Probably not. The skill handles ambiguous cases by surfacing them in a draft state. Take 60 seconds during the first weekly review to teach the skill what your "yes" and "no" categories look like.

**Pair this with a simple daily briefing.** The email-to-calendar skill is half the workflow. The other half is a daily briefing that reads tomorrow's calendar and summarizes it. Together they replace the manual "what's on for tomorrow" check that most people do at 10pm the night before.

---

## Keep Reading

- **[He Let an AI Triage 180 Emails a Day. Here's the Stack.](/blueprints/inbox-triage-agent/)** — The companion blueprint. Where this one extracts events, that one decides which emails deserve your attention at all.
- **[Build an AI Life OS That Knows Your Entire Day (Before You Do)](/blueprints/ai-life-os/)** — The wider pattern. Email-to-calendar is one of 20 plays inside a complete personal-ops system; the Life OS blueprint is the system.
- **[Automate Grocery Shopping With a Photo of a Recipe](/blueprints/grocery-autopilot/)** — Same architecture, different domain. Photo in, structured action out, the human-in-the-loop becomes optional once it's tuned.

**Want the full deep dive?** Read our [Best OpenClaw Skills](/learn/best-openclaw-skills/) guide for the foundational skill patterns this blueprint depends on.
