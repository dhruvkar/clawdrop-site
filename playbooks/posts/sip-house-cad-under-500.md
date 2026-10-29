---
layout: playbook.njk
title: "He couldn't justify learning Revit for a few houses. So he built his own CAD for under $500."
description: "A designer who can't code built a tool that turns a 3D house model into factory panels, cutting plans, a parts list, a cost estimate and an assembly guide. It took about a month."
date: 2026-10-28
difficulty: Advanced
cost: "Under $500 total, by the builder's count. Claude Max 5x plan, Lovable for hosting."
timeToSetup: "About a month for the first version that truly worked. Still being fixed."
originalSource: "https://www.reddit.com/r/vibecoding/comments/1xcl8ck/noncoder_here_one_month_of_vibecoding_got_me_a/"
originalAuthor: "u/damz1132 (r/vibecoding)"
issueNumber: 34
permalink: /playbooks/sip-house-cad-under-500/
tags:
  - construction
  - manufacturing
  - design
  - documentation
  - claude-code
  - lovable
  - small-business
  - smb
---

## Tools

- [**Claude**](#aff-claude): did the coding, on the Max 5x plan
- [**Lovable**](#aff-lovable): builds and hosts web apps, with a live preview
- [**GitHub**](#aff-github): holds the code, so Claude and Lovable work on the same copy
- [**ElevenLabs**](#aff-elevenlabs): the AI narration in his video about it

## What you'll build

Your own version of an expensive industry program.

Only the parts you use.

## The story

He's an architectural designer.
SketchUp and interiors.

A manufacturer of SIP houses asked him for production and assembly documents.

SIP stands for structural insulated panels.
The walls and roof get made in a factory as big insulated panels, then put together on site.
The factory needs exact drawings for every panel.

The industry tools for that are Revit and ArchiCAD.

> the industry tools (Revit, ArchiCAD) were too expensive to learn for a few projects.

> So I tried building my own tool. I can't code.

## What it does now

He sketches the rough shape of the house, presses one button, and gets:

- The SIP panels and the timber frame, sized by calculation
- Plans, sections and elevations
- Panel sheets and cutting plans for the factory
- A bill of materials and a cost estimate
- A step-by-step 3D assembly guide, which checks that each panel can actually slide into place

All of it comes from one 3D model.
Change the model and everything else follows.

There's also a built-in assistant that edits the model when you ask.

In his video, a scanned plan becomes full documentation in about 20 minutes.
He also tests it on a plan with pen corrections, a ChatGPT image, and no reference at all.

## The setup

Three pieces, all cheap:

1. Lovable hosts the app and shows a live preview.
2. The code lives on GitHub, connected to Lovable.
3. Claude works directly in that same code.

The point of the setup is cost:

> the heavy lifting runs on my subscription, not on per-prompt credits

## His honest notes

> first truly working version took about a month; it still needs a lot of fixes and I keep working on it

> total cost was under ~$500 and could have been lower; I made plenty of beginner mistakes and used several paid models

> structural checks are built in, but every house is still signed off by a licensed structural engineer

## The business angle

He had a customer asking for factory documents, and a few projects to do them on.

Paying for a big program, and the months to learn it, for a few projects didn't add up.

So he paid under $500 and a month of his time for a tool that does his exact job.

His own line from the video:

> software built around your work, instead of you adapting to expensive licences.

And the factory gets cutting plans and a parts list straight from one model.

## Who should steal this idea

Designers, fabricators and small manufacturers who make documents from drawings.

Cabinet shops, timber framers, sign makers, metal fabricators.

Anyone paying for a big industry program to use a small part of it.

## How hard is it

Hard, but he did it without code.

A month of steady work for the first real version.
More months of fixes after.

Cost: under $500, including the Claude plan and several paid models. He says it could have been lower.

## Gotchas and tips

### A licensed person still signs

The software runs structural checks.
An engineer still signs off every house people will live in.

### Pick one subscription

He used several paid models while learning, and made plenty of beginner mistakes.
He says the total could have been lower.

### Start from a real job

He built it because a real customer asked for real documents.
That kept the scope small.

### Test it on messy input

His tests used a scan with pen marks and a rough AI image.
That's what real customers send.

## Keep Reading

- [A Flooring Estimator Didn't Want Another Software Subscription. So They Built a Free Takeoff Tool.](/playbooks/free-takeoff-tool/) Same move, for measuring floors off plans.
- [This Baker Couldn't Learn to Code. So They Told an AI How the Shop Orders Flour, and It Built the Reorder List.](/playbooks/bakery-reorder-list/) Another owner who described the job and got the tool.

[Watch his walkthrough →](https://youtu.be/K6UjRZ0gSWo)

What expensive program are you paying for to use one corner of it?
