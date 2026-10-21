---
layout: playbook.njk
title: "Count the logins before you hand off a chore"
description: "Someone who doesn't code gave ChatGPT's Dots three daily data chores. It does most of the work, and every login that expires or texts a code pulls them back in."
date: 2026-10-21
difficulty: Beginner-Intermediate
cost: "ChatGPT's Dots. The poster's plan listed at $20 and billed at $16 a month."
timeToSetup: "An afternoon to set up the three tasks. Expect to babysit it for a while."
originalSource: "https://www.reddit.com/r/OpenAI/comments/1x1sfy7/dots_needs_work/"
originalAuthor: "u/Lloydian64 (r/OpenAI)"
issueNumber: 33
permalink: /playbooks/dot-daily-office-chores/
tags:
  - personal-agents
  - chatgpt-dots
  - scheduling
  - spreadsheets
  - data-entry
  - field-service
  - small-business
  - smb
---

## Tools

- [**ChatGPT**](#aff-chatgpt): Dots is OpenAI's agent that runs on its own cloud computer
- [**Excel**](#aff-excel) on SharePoint: the client's shared spreadsheet of upcoming jobs
- A scheduling and time clock app, and a job tracking app: the two web systems the data moves between

## What you'll build

Three jobs that run every day, on an AI agent with its own computer and browser.

The agent logs in to the same web apps you do, reads one system, and types into another.

Nothing gets built, and no developer is involved.

## The story

The client keeps the job schedule in an Excel file on their own SharePoint.

The Reddit poster's job is moving that data, and more, between web apps.

They're not a coder.

Every day, three chores:

> Consult a shared Excel spreadsheet from another company's SharePoint files to identify future job shifts to schedule in the Scheduling app.

> Consult that same spreadsheet to update a workbook my foreman uses with proprietary fields added for him to use.

> Review the time clock entries for the various jobs as well as the scheduled work for those job, and use that data to create daily reports in the job tracking software.

They handed all three to a Dot, the agent inside ChatGPT.

The poster uses about 10 million tokens a day.

Their verdict:

> the AI is still doing the lion's share of the work, and it's still helpful, but it should just be better.

## Where it breaks

Every problem was a login.

Each system logs in differently.

The client's spreadsheet uses a Microsoft sign-in that can remember you.
The scheduling app texts a code to a cell phone, and stays logged in as long as a few days don't pass.
The job tracking app wants a username and password every 24 hours.

Here is what went wrong:

The spreadsheet kept hitting a vague block.
So the Dot got in the habit of asking for a downloaded copy in a shared folder.

The scheduling app randomly showed as unreachable.
The Dot said, "The internal access restriction is blocking me."
The only fix was rebooting the Dot, and that button only exists on the web and desktop apps.

The job tracking app needed a fresh login after every reboot and every 24 hours.
Each time, the poster had to approve it.

> If the only way I can get the tasks accomplished is to babysit my Dot as it completes the task, occasionally doing some of the work myself, it defeats the purpose of using AI.

## Check your logins first

**Before you hand an agent a daily chore, count the logins.**

List every system it touches.

For each one, write down how you log in.

Remembered sign-in.
A code texted to your phone.
A password that expires every day.
Two-factor on a phone the agent can't reach.

The ones that remember you are fine.
The ones that text a code or expire daily are where you'll get pinged.

That list tells you how much babysitting to expect before you start.

## How it works

1. Write each chore as plain steps, the way you'd explain it to a temp: where to look, what to copy, where it goes.
2. Save your logins in the agent's password vault.
3. Run each task once while you watch.
4. Schedule all three to run daily.
5. Keep a note of every time it stops and asks for you. After a week, that note shows which system is the problem.

## The business angle

This is the job of a coordinator or a data-entry hire.

Copying shifts from a client's spreadsheet into your scheduling app.
Keeping the foreman's workbook current.
Turning the time clock into daily job reports.

The agent does most of it today.

A person still has to be on call for the logins, and on some days, to finish the job.

## Who should steal this idea

Staffing and field service companies whose client sends the schedule in a shared spreadsheet.

Office managers who copy the same data between two web apps every morning.

## How hard is it

Beginner-Intermediate.

Describing the chores is easy.
Getting through every login without you is the hard part.

Cost: the poster's ChatGPT plan, listed at $20 and billed at $16 a month.

## Gotchas and tips

### Reboot fixes count as bugs

The poster had given the Dot every browser permission it asked for, and turned on automatic sign-in in its password manager.
It still stalled.
Their point: if a reboot fixes it, the setup isn't the problem.

### Check which door it uses

One commenter had the same SharePoint block with a client's files.
The cause was the Dot trying to sign in through the wrong Microsoft login page.
Their advice was to check the logs.

### Other people report the same walls

Several commenters described the same login timeouts, and logins rejected with a "Bad Gateway" error.
One hit a usage limit the agent called a "break."

### Try another agent on the same chore

The poster's next step was running the same three tasks on Meta's Muse for a day.
One commenter said Muse was handling their scheduling tasks better.
The poster still said they'd prefer the Dot to get there.

### Your own computer is an option

A commenter suggested letting the Dot work on your own computer, where you've already logged in.
The poster said they'd already done that, and it still didn't sign in on its own.

## Keep Reading

- [Two Websites That Will Never Talk to Each Other. He Built the Bridge in an Afternoon.](/playbooks/browser-bridge-between-systems/) The same chore, built as a bridge.
- [Your Monitoring Agent Is Reading Login Walls and Calling It Research](/playbooks/real-scraping-stack/) What logins do to every agent.
