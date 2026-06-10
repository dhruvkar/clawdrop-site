---
layout: playbook.njk
title: "Fire the Bookkeeper, Keep the Books"
description: "Automate bookkeeping with an AI agent that categorizes every transaction as it lands all year, then hand a clean year to QuickBooks for one month's fee at tax time. Save ~$6k a year."
date: 2026-06-10
difficulty: Intermediate
cost: "QuickBooks subscription you already have, plus Claude usage"
timeToSetup: "An afternoon to wire up, a few weeks to trust it"
originalSource: "https://www.reddit.com/r/openclaw/comments/1u1rv2u/my_asap_guide_to_fire_human_employees_and_replace/"
originalAuthor: "hawkph (r/openclaw)"
tags:
  - bookkeeping
  - accounting
  - quickbooks
  - automation
  - small-business
  - finance
  - claude
  - openclaw
  - cost-cutting
permalink: /playbooks/fire-the-bookkeeper/
---

## Tools

- [**QuickBooks**](#aff-quickbooks): where the books live and where your taxes get filed. You probably already pay for it. The trick is when you actually use it.
- [**Claude Code**](#aff-claude-code): the agent that reads each transaction and decides which category it belongs in, all year long.
- [**OpenClaw**](#aff-openclaw): the connector that lets the agent reach into QuickBooks and your transaction data instead of you copying numbers around by hand.
- Your bank feed or a CSV export from your bank and card accounts, so the agent has transactions to work with.
- A spreadsheet for the running ledger if you would rather hold the year's data outside QuickBooks until tax time.

## What You'll Build

An agent that categorizes every transaction the moment it lands, so your books are never behind, and you only pay your accounting software when you actually need it.

A guy on Reddit, posting under hawkph, runs his wife's business and went looking for line items he could cut. The bookkeeper was one of them. So he wired up an agent that watches transactions come in and files each one into the right category automatically, using a QuickBooks connection. His words: "Now I got the transaction categorized by a skill automatically."

Here is the clever part. He still uses QuickBooks. He just does not pay for it all year. He lets the agent categorize everything as it happens, then at year end he imports the whole clean pile into QuickBooks "for like a month fee so we can file our taxes." The bookkeeper that used to cost him $500 a month is gone. He reports saving that $500 every month.

You are not building a tax-filing robot. You are building the thing that sits between your bank and your books: an agent that sorts every transaction into the right bucket the day it shows up, so the year-end scramble never happens and the monthly bookkeeper bill stops.

## Why This Works

Bookkeeping is not hard. It is just relentless. Every charge, every deposit, every transfer has to land in the right category, and it never stops coming. That is exactly the kind of small, repetitive, judgment-light work a person hates and an agent is good at.

A bookkeeper is expensive mostly because of timing, not difficulty. You pay a monthly retainer so someone keeps up with the flow. But the flow is the same handful of decisions over and over. "This is a software subscription." "This is a client payment." "This is fuel." An agent that has seen your last few hundred transactions makes those calls instantly, and it never falls a month behind because it got busy.

That last bit is the real prize. Most small business books are a mess not because anyone is incompetent, but because categorizing slips, then slips again, and by tax time it is a panic. An agent working in the background does it continuously. The books stay clean because the work never piles up.

And it flips the economics of your accounting software. If your transactions are already categorized and waiting in a clean ledger, you do not need to be paying a bookkeeper to maintain them inside QuickBooks all year. You can pull everything in at the end, when you actually need QuickBooks to do the one thing only it does well: file your taxes.

## Prerequisites

- A QuickBooks account, or a plan to use one at tax time. You may already have this.
- Claude Code installed, with OpenClaw set up so the agent can connect to QuickBooks and read your transactions.
- Access to your transaction data: a bank feed connection, or the ability to export CSVs from your bank and card accounts.
- Your chart of accounts, meaning the list of categories you actually use. If you do not have one, your accountant does.
- An accountant or CPA you trust to review the year before you file (see Gotchas, this is not optional).

## Step-by-Step Setup

### Step 1: Decide Where the Books Live During the Year

You have two clean options. One, keep using QuickBooks all year and let the agent categorize directly inside it through the connection. Two, hold the running ledger in a spreadsheet that the agent maintains, and only import into QuickBooks at year end for filing. The Reddit approach leans on the second to avoid paying for the software year-round. Pick based on whether you want live books in QuickBooks or just clean books ready to import.

### Step 2: Connect the Agent to Your Transactions

Wire Claude Code to your transaction source through OpenClaw. That means either reading the QuickBooks transaction feed directly, or pointing the agent at CSV exports from your bank and cards. Either way, the agent now sees every line item: date, amount, merchant, and whatever description the bank attached.

### Step 3: Teach It Your Categories

Give the agent your chart of accounts and a plain-language rule for each category. "Anything from these vendors is cost of goods." "Recurring charges under this list are software subscriptions." "Deposits from clients are revenue." The first pass is the one that takes thought. After that, the agent applies your rules every time.

### Step 4: Let It Categorize as Transactions Land

Set the agent to run on a schedule, daily or weekly, so it processes new transactions as they come in and files each into the right category. This is the whole point: the work happens continuously, in small batches, instead of in one ugly catch-up session in March.

### Step 5: Review the Uncertain Ones

The agent should not silently guess on transactions it is unsure about. Have it flag anything ambiguous into a short list you eyeball, rather than forcing a category. A two-minute weekly glance at the flagged items keeps the agent honest and your books accurate.

### Step 6: Import and File at Year End

When taxes are due, bring the full categorized year into QuickBooks. If you held the ledger in a spreadsheet, this is the moment you pay for the software, import everything at once, and file. Clean data in, taxes out. Then your accountant reviews before anything is submitted.

## Adapting This for Your Business

The pattern is the same for anyone with a bank account and a tax return. What changes is the categories and how messy the transactions are.

- **Service businesses and freelancers.** Mostly client payments in and a short list of expenses out. The agent practically runs itself once it learns your handful of vendors.
- **Retail and ecommerce.** More volume and more cost-of-goods nuance. Lean harder on vendor-based rules and review the flagged pile more often.
- **Trades and contractors.** Fuel, materials, tools, subcontractors. Give the agent clear rules per supplier and it sorts the receipts you used to shoebox.
- **Anyone paying a bookkeeper a monthly retainer.** That retainer is the line item this pattern is aimed at. Run the agent in parallel for a few months first, then make the call.

## Gotchas and Tips

- **The agent will miscategorize. Plan for it.** It will occasionally file a personal lunch as a business meal or miss that a "transfer" was actually income. Have it flag low-confidence transactions instead of guessing, and review that list. Trust comes from watching it work, not from hoping.
- **A real accountant still reviews the year before you file.** This pattern replaces the monthly categorizing grind, not professional judgment on deductions, depreciation, and what the IRS will accept. Have a CPA review the categorized year before it goes in. That review is cheap insurance and far cheaper than a monthly bookkeeper.
- **Keep an audit trail.** Every category the agent assigns should be logged with the original transaction, so you can show your work if you ever get questioned. Do not let the agent overwrite history. Append, do not erase.
- **Do not let it touch payroll or tax filing unsupervised.** Categorizing transactions is low-risk and reversible. Cutting payroll, moving money, or submitting a return is not. Keep the agent on sorting duty. A human pulls the trigger on anything that leaves the building.
- **Run it in parallel before you cut anyone.** The Reddit poster's own hard-won advice from elsewhere in his setup was to "dry run in parallel for months" before making a cut. Do the same. Let the agent categorize alongside your current process until you have a few months of clean, matching books. Then drop the bookkeeper.
- **You are now maintaining a system, not paying for a service.** One commenter made this point and it is fair. If the agent breaks, your books stop. Build it simply, keep the audit trail, and know how to do it by hand in a pinch.

## What This Replaces

Before this, keeping your books meant one of two things:

- **A bookkeeper on monthly retainer**, often $400 to $600 a month, who keeps up with categorizing and maintains your books inside QuickBooks all year. Roughly $6,000 a year, every year, for work that is mostly the same decisions on repeat.
- **Doing it yourself and falling behind**, then losing a weekend to a frantic catch-up before taxes, with books messy enough that you are never quite sure they are right.

After this, an agent categorizes every transaction the day it lands, the books stay clean because the work never piles up, and you only pay for QuickBooks when you actually need it: at filing time. The Reddit poster reports the bookkeeper line, $500 a month, simply went away. A CPA still reviews the year before you file, which is where your accounting dollars should have been going all along.

---

## Keep Reading

- **[This Accountant Trained Her AI to Close the Books Every Month](/playbooks/cpa-quickbooks-monthly-close/)**: the professional's version of this, from a CPA who automated the monthly close inside QuickBooks.
- **[The 5-Day Automation Sprint: $22K Found in Tax Deductions](/playbooks/five-day-automation-sprint/)**: what clean, agent-maintained books make possible when you finally point AI at the whole year.
- **[Replace Your SaaS Stack With One AI Agent](/playbooks/replace-saas-stack/)**: the same cost-cutting instinct applied to every other monthly subscription you are quietly bleeding on.
