---
layout: playbook.njk
title: "He Gave Claude 3 Contractor Bids. It Found $1.4M Worth of Scope Gaps."
description: "A multifamily developer dropped three GC bid packages into a folder and ran one prompt. Claude built a 4-tab Excel workbook with leveled comparison, scope gap matrix, unbalanced line items, and risk-weighted recommendation. Found exclusions worth seven figures."
date: 2026-05-13
difficulty: Beginner
cost: "$20/month (Claude Pro or Max)"
timeToSetup: "An afternoon for the first run, 15 minutes after"
originalSource: "https://www.youtube.com/watch?v=CPvVsieoooE"
originalAuthor: "AI for CRE"
permalink: /playbooks/contractor-bid-leveler/
tags:
  - construction
  - real-estate
  - cre
  - procurement
  - bid-leveling
  - developer
  - project-management
  - claude-code
---

## Tools

- [**Claude Code**](#aff-claude-code): the desktop app version of Claude. Gets folder access, reads PDFs natively. Opus 4.7 is the model used.
- [**Claude**](#aff-claude): the underlying model. A Pro or Max subscription covers it.
- [**Excel**](#aff-excel): the output format. Claude generates a four-tab workbook plus a recommendation memo.
- [**Google Drive**](#aff-google-drive): alternative for storing the bid packages and sharing the output.

## What You'll Build

A pre-award bid review system that takes three to six contractor bid packages (PDFs) and produces a four-tab Excel workbook plus a written recommendation memo. The workbook tells you which bidder to award, which scope gaps to clarify before signing, and which line items are so unbalanced that they should worry you.

The work that used to take a week of nights cross-referencing line items in Excel happens in about ten minutes. The catches are sharper than what most humans find because Claude actually reads every page of every document instead of skimming.

This comes from a CRE professional who leveled real GC bids on a 79-unit multifamily project. The findings he walked away with included scope exclusions worth seven figures on a $25M project. Caught pre-award.

## The Problem Every Developer and Owner's Rep Has Lived

You issued an RFP. Three GCs responded. Three proposals, three schedules of values, all in different formats. None of them are comparable to each other and that's the point.

Bid A excluded low voltage entirely. It's in their exclusions list, page 8, paragraph 3. You didn't see it.

Bid B carries Division 28 (security and fire alarm) as an allowance only. Everyone else priced it firm. The headline number looks the same; the actual risk profile is wildly different.

Bid C left exterior improvements off entirely. They told you in the cover letter that they "assumed exterior is by others." You read the cover letter at 11pm. You missed it.

Bid B's drywall line is 300% over the median. They padded it because they think you'll fight harder on the framing line. You don't know that yet.

You spend the next week building an Excel sheet to compare them. You miss two of these things. You award the lowest bid because the owner is pushing for the lowest cost. Three months later, you're processing change orders for the exclusions you missed. The "cheapest" bid ends up being the most expensive.

Every developer, owner's rep, and project manager has lived this. Scope gaps always come back to bite. Catching them on the front end is where the real money is.

## How It Works

The whole setup is one folder, one prompt, one Claude Code session. The output is a workbook your owner can sign off on.

### The Inputs

You drop the bid packages into a folder on your desktop. For each GC, that's typically:

- The proposal (cover letter, narrative, exclusions, qualifications)
- The schedule of values (the line-item pricing breakdown)

For three bidders, that's six PDFs. Optionally include the construction drawings. The video author skipped the plans and called it out as the one thing he'd do differently — including them makes the scope-gap matrix dramatically more accurate.

### The Prompt

Open Claude Code (desktop app). Give it access to the folder. Paste a prompt with this structure:

```
You are an experienced owner's rep and construction cost manager helping me
level three GC bids for [project name].

Project context:
- [Location, type, scale, structural system]
- [Number of units, square footage, stories]
- [Any relevant context that affects scope]

I have three bid packages in the folder. For each contractor, there is a
proposal and a schedule of values.

Build me a single Excel workbook with four tabs:

  Tab 1: Leveled bid comparison
    - Side-by-side line items normalized to a common breakdown
    - Subtotals by CSI division or trade
    - Total normalized for P&P bonds, contingency, and missing scope

  Tab 2: Scope gap matrix
    - Every scope item listed once
    - For each bidder: included / excluded / allowance only / unclear
    - Flag any item where bidders disagree

  Tab 3: Unbalanced line items
    - Identify line items where one bidder is significantly above or
      below the median of the others
    - Flag anything more than 100% over or under the median

  Tab 4: Risk-weighted recommendation
    - Rank the bidders by total apples-to-apples cost
    - Adjust for the risk score of their exclusions and unbalanced items
    - Recommend a winner and explain why

Then produce a written recommendation memo I can give my owner.
```

That's the whole prompt. Claude reads all six PDFs and builds the workbook.

### What It Caught on a Real Project

The video author ran this on "The Vermont" — a 79-unit multifamily at 1247 N Vermont Ave, Los Angeles. Type III wood frame over Type I concrete podium, five stories. Three GC bids from real firms.

Claude's findings:

- **Bidder A** excluded low voltage entirely (caught in the exclusions list)
- **Bidder B** carried Division 28 as allowance only, not firm pricing
- **Bidder C** left exterior improvements out completely
- **One bidder** was 300% over the median on a single line item

Once Claude normalized for performance and payment bonds, contingency reserves, and the missing scope, the apples-to-apples spread between bidders went from a misleading $25-28M range to a real $5.4M difference.

The recommendation: do not award to the cheapest headline bidder. Their bid was structurally unbalanced. Award to the middle bidder, the one whose number was higher but whose scope was complete.

The owner saved seven figures by not awarding the bid the spreadsheet said to.

### The Setup (One Afternoon)

**What you need:**
- Claude Pro or Max subscription (the desktop app runs Claude Code)
- The bid packages from your most recent project (or current one)
- A clean folder on your desktop
- An afternoon for the first run

**Step 1: Install Claude Code (desktop app).** This is the version with folder access. Sign in with your Claude account.

**Step 2: Gather your bid packages.** Drop them in a folder. Name files clearly: `BidderA-Proposal.pdf`, `BidderA-SOV.pdf`, etc. Optionally include the construction drawings.

**Step 3: Give Claude Code folder access.** In the desktop app, click "Open Folder" and select the folder.

**Step 4: Run the prompt above.** Adapt the project context section to your actual project. Be specific about structural system and scope.

**Step 5: Review the output.** Claude generates the Excel workbook. Open it. Sanity check against the actual bids. Look for places where Claude made assumptions that don't match how you'd categorize things.

**Step 6: Iterate the prompt.** Add things you want it to weight more heavily. "Always include a tab on schedule risk." "Flag any allowance items over $50K." Your prompt gets sharper with use.

## What Changes After Setup

**First run:** You spend an afternoon learning the workflow. Output is 80% useful, 20% needs tweaking. You walk into your bid leveling meeting with a real recommendation memo.

**Second project:** You reuse the prompt. Output is 95% there on the first try. The afternoon becomes 30 minutes.

**Three projects in:** This becomes your standard pre-award procedure. Every project gets a Claude bid review before the owner signs anything. The owner's rep role doesn't go away — your judgment is still required — but the cross-referencing work that consumed weeks is now an hour.

**One year in:** You've caught scope gaps on every project that paid back the entire Claude subscription many times over. Your owner trusts the workflow and is asking why other developers in their portfolio aren't doing this.

## Where This Sits in Your Workflow

Before:

```
RFP issued → bids received → [1-2 weeks of manual cross-referencing] →
bid leveling meeting → award decision
```

After:

```
RFP issued → bids received → [10 min Claude run + 30 min review] →
bid leveling meeting with finished memo → award decision
```

The bracketed step is where this build lives. It doesn't change the judgment work. It eliminates the clerical work that was crowding out the judgment.

## The Numbers Worth Caring About

**Scope gaps caught pre-award routinely save $200K-$1M+ per project.** On the example project, the catches were worth over $1.4M.

**Time saved:** A bid leveling exercise on a $25M project typically eats 40-80 hours of an owner's rep or PM's time. This drops it to 4-8 hours including review.

**Cost:** $20/month for the Claude subscription. That's the entire infrastructure.

**ROI:** Pays for itself approximately 5,000x over on the first catch.

## Beyond Multifamily

The exact same pattern works anywhere multiple parties bid on the same scope:

**GCs leveling sub bids.** You're a general contractor with three electrical sub bids. Same workflow, same prompt structure. The scope gaps are different but the pattern is identical.

**Homeowners leveling ADU or renovation bids.** Three contractors bid on your ADU. You're not a construction professional, you don't know what to look for. Claude flags the exclusions and unbalanced items that would otherwise cost you mid-project.

**Commercial tenant improvement.** Multiple GC bids on a TI buildout. Same exercise.

**Vendor RFP responses.** Software vendors, equipment suppliers, anyone responding to an RFP with line-item pricing. The matrix structure transfers.

**Government procurement.** Public sector RFPs are notorious for incomparable response formats. This is the exact tool for them.

The common thread: anywhere you have three or more parties bidding on the same scope in different formats, this normalizes them.

## Gotchas and Tips

- **Include the construction drawings.** The video author's biggest regret was skipping the plans. With plans included, the scope-gap matrix gets dramatically more accurate. Claude can cross-reference what's drawn versus what's priced.
- **Be specific in your project context.** "Five-story Type III over Type I podium with concrete shear walls" gives Claude the structural context to spot when a framing bid is missing the seismic detailing. Vague context produces vague output.
- **The first run is calibration. Don't ship it raw.** Always have an experienced owner's rep or PM eyeball the output before showing the owner. Claude is sharp but not infallible.
- **Watch for assumptions Claude makes.** If a bidder is silent on something, Claude has to assume. Sometimes it assumes included, sometimes excluded. Verify against the actual bid language.
- **Don't substitute this for the bid leveling meeting.** Run this before the meeting. The meeting is where the GCs answer clarifying questions and you renegotiate. The workbook is the prep, not the substitute.
- **Save your prompt as a template.** Once you have a prompt that works on your first project, save it. Future projects only need the context section updated.
- **The catch is the value, not the speed.** The time savings are nice. The real ROI is the scope gap caught pre-award that would have shown up as a $300K change order in month four.

---

## Keep Reading

- **[This HVAC Guy Spent Friday Night Setting Up AI. Now His Estimates Write Themselves.](/playbooks/hvac-estimate-autopilot/)**: The contractor side of construction AI. Builds outbound estimates instead of leveling received ones.
- **[The 5-Day Automation Sprint: $22K Found in Tax Deductions](/playbooks/five-day-automation-sprint/)**: Another "AI finds money you didn't know you were leaving on the table" build, in a different vertical.
- **[Build an AI Agent That Finds Real Estate Deals Before Anyone Else](/playbooks/real-estate-deal-hunter/)**: Earlier in the CRE workflow. This one finds the deal; the bid leveler runs the procurement once you've got it.
