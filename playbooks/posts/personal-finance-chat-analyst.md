---
layout: playbook.njk
title: "Ask Your AI How Much You Spent on Food This Month, Get a Straight Answer"
description: "Feed your credit card statements to an AI agent once, and then just ask it questions in plain English. How much on groceries, dining out versus last month, where the money actually went. No budgeting app to learn, no spreadsheet formulas."
date: 2026-07-01
difficulty: Beginner
cost: "About $20/month in AI usage. The accounting format it uses is free and open-source."
timeToSetup: "An afternoon to load your history, then instant from there."
originalSource: "https://discord.com/channels/1456350064065904867/1456609488202105005/1465098065743708330"
originalAuthor: "kevin (@itskengo, OpenClaw community Discord)"
tags:
  - personal-finance
  - budgeting
  - money
  - home
  - no-code
  - automation
  - data
permalink: /playbooks/personal-finance-chat-analyst/
---

## Tools

- [**OpenClaw**](#aff-openclaw): the AI agent that reads your statements, sorts every transaction, and answers your questions.
- [**Claude Code**](#aff-claude-code): the same job on the Claude side if that is what you already run. Pick one and move on.
- **Beancount**: a free, open-source, plain-text way of recording money in and money out. You never have to touch it directly. The agent uses it as its filing cabinet.
- [**SQLite**](#aff-sqlite): a tiny built-in database the agent queries to answer things like "food this month versus last." Free, and it sets itself up.
- [**Gmail**](#aff-gmail): where most people's statements land as attachments, ready to hand to the agent.

## What You'll Build

A personal money analyst you talk to like a person. You give it your credit card and bank statements once. It reads every line, figures out what each charge was for, and files it away. From then on you just ask.

"How much did I spend on eating out this month?"

"What was my biggest non-recurring purchase in May?"

"Am I spending more on groceries than I was last quarter?"

It answers in seconds, from your actual numbers, no app to open and no formulas to write. This comes from a member of the OpenClaw community who set it up for his own household and now checks his spending by texting a question.

## The Problem With Every Budgeting App

You have tried them. Mint, YNAB, the one your bank pushes, some spreadsheet a friend swore by. They all die the same way.

They want you to categorize transactions by hand, or they guess wrong and you have to fix them. They want you to log in, sit inside their dashboard, and learn where everything is. They nag. And the one time you actually have a question, "wait, how much am I really spending on food," the answer is buried three menus deep behind a chart you did not ask for.

So you stop. The app goes stale. And you go back to the vague, slightly anxious feeling of not really knowing where your money goes.

The problem was never the math. It was the friction. Every app made you come to it. This flips that around. You ask a question in plain language and the answer comes to you.

## How It Works

There are three moves, and the agent does the hard parts.

**One: it reads your statements.** You export your credit card and bank statements as CSV files, the plain spreadsheet format every bank offers under "download transactions." Or you just hand the agent the PDF or the file straight from your inbox. It does not care how messy they are.

**Two: it sorts everything.** The agent reads each transaction and decides what it was. "WHOLEFDS" becomes groceries. "UNITED 016" becomes travel. "that coffee shop by the office" becomes dining. It files each one into a clean ledger using Beancount, a free plain-text accounting format. You never open Beancount yourself. It is just the tidy filing cabinet the agent keeps behind the scenes.

**Three: it answers questions.** Here is the clever part the original builder added. He taught his agent to run small database queries against that ledger. So when you ask "how much on food this month versus last," the agent writes the query, runs it, and reads you the number. You get the answer, not a dashboard.

```
YOU: "how much did I spend on restaurants in June vs May?"
        |
        v
AGENT: reads your ledger, runs the numbers
        |
        v
AGENT: "June: $487 across 19 visits. May: $612 across 24.
        You're down about 20%. Want the list?"
```

## Setting It Up

**Step 1: Pull your statements.** Log into your bank and card accounts and download the last year or two as CSV. More history means better answers about trends.

**Step 2: Hand them to your agent.** Tell it you want to track your spending, and give it the files. Ask it to set up a Beancount ledger and import everything. It will work through the transactions and start categorizing.

**Step 3: Fix the handful it gets wrong.** The first pass will misfile a few oddball charges. Correct them once. The agent remembers your corrections, so next month it gets them right. This is the opposite of the app that misfiles the same thing forever.

**Step 4: Start asking.** That is it. From here it is just questions. "Biggest expense last month." "Subscriptions I'm still paying for." "Total on gas this year." Whatever you actually want to know.

**Step 5 (optional): wire it to your phone.** Connect the agent to a chat app so you can text your money questions from anywhere and get answers back. Now it lives in your pocket.

## What Changes

The first week, you finally see where the money went last month, clearly, without dread. The second week, you start asking questions you never bothered to answer before because the old tools made it a chore. By the end of the month, checking your spending is a ten-second text instead of a Sunday-afternoon spreadsheet session you kept skipping.

You are not more disciplined. You just removed the friction that was making you avoid your own numbers.

## Gotchas and Tips

- **Keep it read-only.** This agent looks at your money, it does not move it. Do not connect it to anything that can actually spend. It reads statements, full stop.
- **Correct early, correct once.** The value compounds from teaching it your categories in the first session. Ten minutes up front saves you every month after.
- **Your data stays yours.** Because the ledger is plain text on your own machine, you are not uploading your financial life to some startup's servers. That is a real advantage over the apps.
- **This is your household, not your business books.** For company bookkeeping, tax categories, and a real close every month, that is a different, heavier job. See the bookkeeping playbook below for that.

---

## Keep Reading

- **[Fire the Bookkeeper, Keep the Books](/playbooks/fire-the-bookkeeper/)**: the business-grade version of this, for company accounts, categories, and monthly reconciliation.
- **[He Spent $1,263 on AI in One Month. Then He Capped It.](/playbooks/ai-budget-cap/)**: point the same track-and-question instinct at what your AI tools themselves are costing you.
- **[Give Your AI a Second Brain That Gets Smarter Every Day](/playbooks/ai-second-brain-karpathy/)**: the pattern behind an agent that remembers your corrections and gets sharper over time.
