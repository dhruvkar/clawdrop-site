---
layout: playbook.njk
title: "A Manufacturing AI Company Plugged Claude Into Fusion 360. Repetitive CAD Work Just Became a Prompt."
description: "A San Diego manufacturing software company wired Claude Code into Autodesk Fusion 360, and the hours of repetitive solid modeling that shops pay drafters for started happening by typed request."
date: 2026-07-14
difficulty: Intermediate
cost: "The Fusion 360 license your shop already pays for (there's a free hobbyist tier), a Claude subscription at $20 to $100 a month, and a free open-source connector."
timeToSetup: "An afternoon to wire up, a week or two of supervised use before you trust it."
originalSource: "https://www.youtube.com/watch?v=h44_8k16Bp0"
originalAuthor: "WeCr8 Solutions (YouTube)"
issueNumber: 22
tags:
  - manufacturing
  - cad
  - fusion-360
  - machine-shop
  - engineering
  - product-design
  - mcp
  - automation
permalink: /playbooks/claude-fusion-cad-automation/
---

## Tools

- [**Claude Code**](#aff-claude-code): an AI agent that normally writes software. Here it's been handed the controls to a CAD program instead. You describe the part or the change in plain English, it does the clicking.
- [**Autodesk Fusion 360**](#aff-fusion-360): the CAD software half the small shops and product design firms in America already run. It's where parts get sketched, modeled, and prepped for the machine. If your shop designs anything, there's a decent chance this is already on a computer in the front office.
- [**Fusion 360 MCP connector**](#aff-fusion-mcp-bridge): a free, open-source bridge that lets Claude operate Fusion. Think of it as a universal adapter: one end plugs into the AI, the other into your CAD program. There are at least half a dozen of these on GitHub right now, all free.

## The Story

WeCr8 Solutions is not a YouTube tech-hype channel. It's a San Diego company that builds AI products for manufacturing: shop-floor software that replaces paper travelers in CNC shops, tool crib tracking, free G-code training for machinists. These are people who spend their days around job shops, not startup demo days.

In July 2026 they posted a demo with a title that doesn't hedge: "Claude Code + Autodesk Fusion MCP Changes CAD Forever." In it, they connect Claude Code directly to Autodesk Fusion through something called MCP, and show AI automating CAD workflows, accelerating solid modeling, and knocking out the repetitive engineering tasks that eat a designer's week. Their own framing: "This is just the beginning of how AI is changing manufacturing, product development, and mechanical engineering."

Here's the plain-English version of what MCP is, because you'll see the acronym everywhere soon. It's a standard plug that lets an AI agent operate other software. The same trick that lets Claude read your email or update your CRM also lets it drive a CAD program. Someone writes a small connector once, and suddenly the AI can push the buttons.

For Fusion 360, those connectors already exist, they're open source, and they're free. Different builders have published bridges that let Claude create sketches, extrude them into solids, cut holes, add fillets and chamfers, change parameters, assemble multi-part designs, take a screenshot of the viewport to check its own work, and export finished files. One project's README says it best: "We taught Claude how to drive Fusion 360. Sketches, extrusions, assemblies, exports, all through natural language."

So this isn't one company's party trick. It's a demo of a capability anyone with Fusion and a Claude subscription can set up this week.

## How It Works

Three pieces, all on one computer:

```
YOU (plain English request)
      |
      v
Claude Code ("the agent")
      |
      v
Free connector (the adapter)
      |
      v
A small add-in running inside Fusion 360
      |
      v
Your actual CAD model, updating on screen
```

You keep Fusion open with a design loaded. The add-in sits inside Fusion and listens for instructions. Claude sends them, one modeling operation at a time, and the model updates in front of you like a ghost is driving the mouse. Some connectors also let Claude grab a screenshot of the 3D view, so it can look at what it just built and fix its own mistakes.

Then the request itself is just a sentence. "Make a mounting plate, 100 by 60 millimeters, 5 thick, four clearance holes for M6 bolts on an 80 millimeter pattern, round the corners." Sketch, extrude, holes, fillets. Work that's fifteen minutes of clicking becomes a sentence and a review.

But the single part is the demo, not the payoff. The payoff is the repetitive stuff:

- **Variants.** The customer wants the same bracket in 12 sizes. That's an afternoon of parametric grunt work, or it's one instruction and a coffee.
- **Revisions.** "Change the bore to 10 millimeters across all the configurations and re-export everything."
- **Exports.** Generating STEP or STL files for every part in a project, named correctly, every time, without anyone sighing.
- **Cleanup.** Renaming components, organizing timelines, standardizing parameters across a messy folder of inherited files.

Nobody became an engineer to do any of that. It's exactly the work shops hire junior drafters for.

## The Replacement Math

A junior CAD drafter costs $45,000 to $60,000 a year plus benefits. Outsourced drafting services bill $30 to $75 an hour. And an honest look at where that money goes shows most of it isn't design. It's variants, revisions, exports, and file housekeeping. Click-labor.

If an agent absorbs the repetitive parametric slab, the math changes in two directions. A one-person product design shop stops farming out drafting at $50 an hour. A five-person engineering firm stops burning its senior engineer's $100-plus-an-hour attention on work a sentence can trigger. Even reclaiming five hours a week of drafting time is real money: at outsourced rates, that's roughly $12,000 a year, for a setup that costs a Claude subscription and an afternoon.

This is also the first time this newsletter has covered manufacturing and CAD, and that's the bigger signal. For two years, AI automation has eaten paperwork businesses: bookkeeping, email, marketing, CRMs. This is it reaching the software that makes physical parts. The shops that learn to supervise an agent in their CAD seat first will quote faster and iterate cheaper than the ones that wait.

## What It Won't Do

It will not replace your engineer, and anyone who tells you otherwise is selling something.

Language models are genuinely mediocre at spatial reasoning. The builder of one Fusion connector admits the hard part "wasn't the code, it was getting Claude to understand where things go in 3D space." Expect the agent to occasionally put a hole on the wrong face or extrude in the wrong direction, which is why the good connectors let it screenshot the model and check itself.

So treat it like a fast, tireless junior drafter with no shame about being corrected. Everything it produces gets reviewed by a human before it goes anywhere near a machine or a customer. Tolerances, fits, material choices, and "will this actually survive in the field" remain your engineer's job. The agent's job is to make sure your engineer spends time on that, instead of on export dialogs.

One more honest note: the demo video itself is a teaser, not a tutorial. The setup path runs through the open-source connectors, which involve installing an add-in and pointing Claude at it. It's documented and free, but it's a "comfortable following a README" afternoon, not a one-click install. If nobody in your shop is that person, this is a few hundred dollars of one-time help from any local techie, not a development project.

## Who Should Steal This

Machine shops and fabricators that already run Fusion 360 and quote custom work, because faster modeling means faster quotes. Product design firms and solo industrial designers drowning in client revision cycles. Engineering firms paying drafting services by the hour for variant and export work. And any owner whose senior engineer keeps saying "I spent all day doing CAD monkey work," because that sentence is now a line item you can delete.

---

## Keep Reading

- **[Let an AI Run Your Equipment Without Letting It Break Anything](/playbooks/greenhouse-ai-with-safety-rails/)**: the same "agent drives real equipment, humans set the guardrails" pattern, applied to physical hardware.
- **[This HVAC Guy Spent Friday Night Setting Up AI. Now His Estimates Write Themselves.](/playbooks/hvac-estimate-autopilot/)**: another trades business turning its most repetitive technical chore into a prompt.
- **[He Gave Claude 3 Contractor Bids. It Found $1.4M Worth of Scope Gaps.](/playbooks/contractor-bid-leveler/)**: AI reading dense technical documents so a builder's senior people don't have to.
