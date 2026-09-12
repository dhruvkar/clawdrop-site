---
layout: playbook.njk
title: "He Scanned His House With an iPhone in 30 Minutes. Now His GC Sees the Same Kitchen He Does."
description: "A LiDAR phone scan and a free export give the homeowner, the spouse, the contractor and the engineer one walkable model to argue over. The scan is the cheap part. Everyone looking at the same house is the point."
date: 2026-09-11
difficulty: Beginner
cost: "Free to scan. Your existing AI subscription for the rest. Needs an iPhone 12 Pro or newer."
timeToSetup: "30 minutes to scan. A weekend to wire up the sandbox."
originalSource: "https://www.linkedin.com/feed/update/urn:li:activity:7503895591438172160/"
originalAuthor: "Matt Ferrante (LinkedIn)"
issueNumber: 29
permalink: /playbooks/walk-the-remodel-before-you-build-it/
tags:
  - remodeling
  - contractor
  - construction
  - trades
  - lidar
  - change-orders
  - client-alignment
  - small-business
---

## Tools

- [**Polycam**](#aff-polycam): the iOS app that does the scan and exports it. Free tier covers this
- [**Codex**](#aff-codex): what he used to build the sandbox around the file
- [**Claude**](#aff-claude): works the same way if that is what you already pay for

## What You'll Build

A model of a real room that anyone can walk through at eye level, on a phone or a laptop.

You scan the space once. You load the file into an AI. Then you ask it to move an island, relocate a pantry, open up a wall, and you walk around inside the answer.

Three steps, and the first two are free.

## The Story

Matt Ferrante builds agents and tools for a living. He kept seeing people post AI-generated home designs and wanted to work out how it was done.

> I scanned my entire house with an iPhone, and now I can walk through AI-generated redesigns of it. The whole thing took about 30 minutes and most of that was me walking around with my phone.

His process, in his words:

1. Use a phone with LiDAR. The iPhone 12 Pro and beyond has it.
2. Scan the space with Polycam for iOS, then use their free export to glTF format.
3. Load that file into AI. He used Codex with Astra.

That is the whole build. He called it super easy and he was not being modest about a weekend project. Most of the 30 minutes was walking.

What he ended up with runs in a browser as a remodel sandbox. An existing-house starting point, then lettered scenarios off it. Kitchen changes. Dining room to reclaimed entry. Ceiling and upper door.

## The Part That Actually Matters

He is blunt about the AI design quality.

> The design AI does is just okay, but the real win is that it gives me a harness to view and make changes and I can show a specific scenario to my wife and we know we're talking about the exact same house. Same when it goes to the GC or the engineers. Everyone is looking at the same house.

Read that again if you run a remodeling business.

The expensive failure in a remodel is not a bad design. It is four people who each agreed to a different kitchen. The homeowner pictured one thing, their spouse pictured another, you priced a third, and the engineer drew a fourth. Nobody finds out until the wall is open.

A scan costs nothing and takes half an hour. It puts all four of them in the same room before demo day.

He finishes with the bit that should interest anyone selling remodels:

> Pair this with an actual designer and I think you'd get results ridiculously fast. I'd be shocked if designers aren't already doing something like this.

## The Business Angle

Change orders are where remodel margin goes to die.

Not the priced ones. The ones that start with "this isn't what I pictured," land after the material is ordered, and end with you eating the difference to keep the relationship and the review.

The scan does not eliminate changes. It moves them to the week before you start, when a change is a conversation instead of a demolition.

It also sells. You are the contractor who walked them through their own house before quoting. The other three bidders emailed a PDF.

## Who Should Steal This Idea

Kitchen and bath remodelers. General contractors. Design-build firms. Interior designers.

Also anyone quoting work where the client cannot read a plan, which is most homeowners.

Real estate agents scanning a listing get the same file for a different reason.

## How Hard Is It

The scan is beginner. Download the app, walk the room, export.

The sandbox around it is a weekend if you want scenarios and a browser view. You can skip that entirely and still get most of the value by walking the raw scan on a phone with the client sitting next to you.

Cost: free to scan, then whatever you already pay for AI.

Hard requirement: an iPhone 12 Pro or newer. The LiDAR sensor is the whole thing and the base models do not have it.

## Gotchas and Tips

**Scan before you quote, not after you win.** The alignment is worth more during the bid than during the build, and it is the part your competition is not doing.

**Walk slowly and cover the corners.** Most of his 30 minutes was walking. Rushing the capture is the one way to get a bad file.

**The design output is just okay. Plan around that.** Treat the AI renders as a way to agree on the shape of a change, not as drawings anybody builds from. His words, not ours.

**Get the client on the model in the room with you.** The value is the shared reference. Emailing them a link and hoping they look at it gets you back to four different kitchens.

**Keep the original scan.** It is your dated record of what the space looked like before you touched it. That has a second use the first time somebody blames you for damage that was already there.

**Free export, so check the tier before you commit a client to it.** He used Polycam's free glTF export. Confirm that still covers what you need before you build a process on it.

## Keep Reading

- [He Gave Claude 3 Contractor Bids. It Found $1.4M Worth of Scope Gaps.](/playbooks/contractor-bid-leveler/)
- [Let Customers Design Their Own Order and Get a Price](/playbooks/visual-quote-agent/)
- [This HVAC Guy Spent Friday Night Setting Up AI. Now His Estimates Write Themselves.](/playbooks/hvac-estimate-autopilot/)
