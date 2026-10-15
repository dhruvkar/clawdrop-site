---
layout: playbook.njk
title: "A Flooring Estimator Didn't Want Another Software Subscription. So They Built a Free Takeoff Tool."
description: "Every bid starts with measuring the plans. A commercial flooring estimator built OpenTakeoff, a free browser app that measures floors, walls and counts off a PDF, and an AI agent can run the same measurements. Here is how an owner can use it without renting another seat."
date: 2026-10-14
difficulty: Beginner
cost: "Free. Optional: the Claude subscription you already pay for, if you want an agent to do the first pass."
timeToSetup: "Ten minutes to open it in a browser. An afternoon to run your first real bid through it."
originalSource: "https://www.reddit.com/r/selfhosted/comments/1wxurgc/opentakeoff_selfhosted_pdf_measurements_for/"
originalAuthor: "u/Ok-Educator5318 (r/selfhosted)"
issueNumber: 32
permalink: /playbooks/free-takeoff-tool/
tags:
  - trades
  - estimating
  - takeoff
  - flooring
  - construction
  - open-source
  - small-business
  - smb
---

## Tools

- [**OpenTakeoff**](https://opentakeoff.kentucky-ai.com): the free browser app. Drag in a plan, set the scale, measure
- [**Claude**](#aff-claude): optional. The AI that can do a first-pass takeoff for you to check
- [**OpenClaw**](#aff-openclaw): optional. Runs the agent and hands you the marked-up plan for review
- [**MCP**](#aff-mcp): the plug that lets an AI agent use OpenTakeoff's measuring tools directly

## What you'll build

Not much, honestly.
That's the point.

You open a web page.
You drag in a PDF of the plans.
You tell it the scale of each sheet.
Then you trace floors, walls, lengths and counts, and it adds them up.

You get a marked-up PDF and a quantity report to price from.

Nothing gets uploaded.
There's no account.
The plans stay on your computer.

If you want, an AI agent can do the first pass and you check its work.

## The story

Before anyone can price a flooring job, a roofing job, or a drywall job, somebody has to measure the plans.
In the trade that's called a takeoff.

Most estimators do it in paid takeoff software.
One seat per estimator.

A commercial flooring estimator posted in r/selfhosted about why they stopped:

> My background is commercial flooring estimating, and this started with a fairly ordinary need: open a PDF plan, measure it and keep the work without another software subscription.

So they built OpenTakeoff, a free, open-source app that runs in a web browser.

> You can use the public copy or host the static files yourself.

> It measures areas, lengths, wall surfaces and counts, with scale set per sheet. You can mark up the drawing and export a marked PDF and quantity reports.

And it isn't just for flooring:

> That covers basic takeoff across different construction trades, not just flooring.

They were also straight about the limits:

> You still need to check the drawings, scope and quantities.

## The part your agent cares about

Here's what makes this more than a free tool.

The project page says it was built so an AI agent can drive it, "and so an estimator wants to."
An agent can open a plan, read the title block, set the scale, trace the rooms, and hand back a marked-up plan set.

The project has a video titled "hospital finish plan → report in about a minute."

Every shape the agent draws is marked as the agent's.
You review it.
You correct a room if it's wrong.
The tool keeps both the agent's version and your fix.

So the job changes.
You stop tracing every room.
You start checking rooms.

## The commenters tested it

A janitorial owner wanted photos on the plans for a quick size estimate.
The builder said photo overlays already exist.

One person worried about the classic mistake:

> Does it give you a very obvious warning before measuring an uncalibrated sheet? That's the kind of tiny mistake that could make a very expensive rectangle.

The answer:

> It won't put proposed takeoffs on the sheets unless scale is set.

Not everyone was sold.
One commenter installed it and called the manual process fine "for a small house" but not a real workflow yet.
They said they'd look again in a couple of months.

That's fair.
It's free and new.
Try it on one bid before you cancel anything.

## How it works

1. Open the [public copy](https://opentakeoff.kentucky-ai.com) in any current browser. No install, no account.
2. Drag in the PDF plan set.
3. Set the scale on every sheet. It won't let you measure until you do.
4. Pick what you're measuring (a floor finish, a wall base, a fixture count) and trace it.
5. Export the marked-up PDF and the quantity report. Price from that.
6. Optional: connect an AI agent through the tool's agent plug. Let it do the first pass. Review every room it traced before you trust the totals.
7. Optional: if you have someone technical, host your own copy on your own website. The builder posted the steps.

## The business angle

You can drop a paid seat on takeoff software, or at least stop adding one every time you hire an estimator.

The bigger win is time.
Measuring is the slow, boring part of every bid.
If an agent does the first pass and a person checks it, your estimator spends the afternoon on pricing and scope instead of tracing rooms.

And the measurements stay on your computer.
Nobody else sees your plans or your bids.

## Who should steal this idea

Flooring, drywall, painting, roofing, tile, janitorial, landscaping, concrete.
Any contractor who measures off PDF plans before they can quote.

Also any owner paying for takeoff seats for estimators who only bid a few jobs a month.

## How hard is it

Using it takes an afternoon.
Open the page, drag in a plan you already bid, and measure it again.

Connecting an AI agent is a weekend project for someone comfortable with setup.
Hosting your own copy needs a developer, but just once.

Cost: free.

## Gotchas and tips

### Re-measure a bid you already won

Take a job you've already priced.
Measure it again in OpenTakeoff.
If the numbers match your old takeoff, you know you can trust it.

### Scale every sheet

Plans mix scales across sheets.
One wrong scale makes an expensive rectangle.
The tool blocks measuring until scale is set, but check it anyway.

### Export your backups

The work lives in your browser, not on a server.
One commenter warned that Safari can clear a site's saved data after a few weeks of not visiting.
Export every project when you finish it.

### The one-click room tool is switched off for now

There's a feature that finds a room's edges with one click.
It's disabled by default while it gets more testing.
Manual tracing works.

### Watch where your plans go

The browser app keeps plans on your machine.
If you connect a cloud AI model, the builder says plan content can go to that provider.
That's your call, especially on jobs with confidentiality terms.

### Check the agent's rooms before the totals

The agent's shapes are marked as unreviewed.
Look at each one.
A missed closet or a door opening traced wrong goes straight into your price.

## Keep Reading

- [A Contractor Walked Us Through His Bid on Video. Halfway Through, He Couldn't Make It Add Up.](/playbooks/estimate-that-doesnt-add-up/)
- [He Gave Claude 3 Contractor Bids. It Found $1.4M Worth of Scope Gaps.](/playbooks/contractor-bid-leveler/)
- [This HVAC Guy Spent Friday Night Setting Up AI. Now His Estimates Write Themselves.](/playbooks/hvac-estimate-autopilot/)
