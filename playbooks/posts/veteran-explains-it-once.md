---
layout: playbook.njk
title: "Your factory's veteran can write the procedure by talking"
description: "A Japanese AI firm shared a prompt that turns a recorded explanation into a draft work procedure. Where the recording is unclear, Claude asks a question."
date: 2026-10-21
difficulty: Beginner
cost: "A Claude subscription. A phone that records audio."
timeToSetup: "One recording and one prompt. The first draft comes back in minutes."
originalSource: "https://www.youtube.com/watch?v=S3VsCBEDUl4"
originalAuthor: "FullValue Inc. (株式会社フルバリュー)"
issueNumber: 33
permalink: /playbooks/veteran-explains-it-once/
tags:
  - manufacturing
  - procedures
  - training
  - documents
  - claude-code
  - small-business
  - smb
---

## Tools

- [**Claude Desktop**](#aff-claude-desktop): the Code tab reads the files in a folder and writes the draft
- [**Claude**](#aff-claude): the subscription behind it
- Any transcription app: turns the recording into text

## What you'll build

A draft work procedure, written from a recording of the person who actually knows the job.

Plus a list of questions to hand back to that person.

The questions are the useful part.

## The story

Every small factory has the one person who knows how the machine really runs.

The written procedure is three years old, or it never existed.

Writing it down keeps getting pushed to next month.

FullValue, a Japanese firm that coaches small companies on Claude Code, posted a 38-second video about exactly this.

Their fix is small.

Record the veteran explaining the job, out loud, the way they'd teach a new hire.

Turn the recording into text.

Drop the text file into a folder.

Then open the Claude desktop app, go to the Code tab, and ask for this:

> Turn this explanation into a draft work procedure.
> Split it into: steps / tips / things never to do / how to check.
> Where something is unclear, don't fill it in with a guess. Ask a question.

That last line does the heavy lifting.

## The check

Read the draft for numbers.

Torque. Spindle speed. Temperatures. Anything with a unit.

If a number appears in the procedure and the veteran never said it out loud, the AI made it up.

**A procedure with an invented torque value is worse than no procedure at all.**

If the numbers are clean, the draft comes with a list of open questions.

Hand that list straight to the veteran.

They answer the gaps, and you never had to know which questions to ask.

## Two more documents from the same folder

FullValue uses the same move for two other jobs owners hate.

**Price increase evidence.**
Put your suppliers' price increase notices, your electricity bills, and the published minimum wage figures in the folder.
Then ask:

> From the supplier notices, the electricity bills and the minimum wage figures, make one table by cost item: when it went up, by how much, and where that number came from. Mark any row you couldn't read. Don't set unit prices or our prices.

Now you walk into the customer meeting with a sourced table.
You decide the new price yourself.

**Defect and complaint reports.**
Give it your notes on what happened and your company's own report form.
It drafts the report field by field.
Tell it to leave the cause and the countermeasure blank.

## How it works

1. Record the veteran explaining one job, start to finish. Let them ramble.
2. Transcribe it. Any transcription app works.
3. Put the text in a folder.
4. Open Claude Desktop, choose the Code tab, point it at the folder, and paste the prompt above.
5. Search the draft for every number. Cross out any that weren't in the recording.
6. Give the question list to the veteran.
7. Put their answers in the folder and ask for a revised draft.

## The business angle

The knowledge in a shop like this sits in two or three heads.

When one of them retires or quits, you find out what was never written down.

The usual fix is paying someone to interview people and write it all up, or a manager writing procedures on weekends.

This one costs a phone recording and a Claude subscription.

And the veteran only has to talk, which is the part they're good at.

## Who should steal this idea

Machine shops, food producers, print shops, and any small manufacturer with one person everyone calls when something breaks.

Also trades businesses training new hires on the same jobs every season.

## How hard is it

Beginner.

The recording is the hard part, because the veteran is busy.

Book thirty minutes and record one job at a time.

Cost: a Claude subscription.

## Gotchas and tips

### People keep the final say

FullValue draws the lines clearly.
The AI never edits inspection results or quality records.
A person writes the cause and the countermeasure.
A person sets the price.

### Test with fake names first

Their advice is to swap customer names and part numbers for codes in your first tries.

### Check your NDAs

Drawings and documents a customer gave you may be covered by a confidentiality agreement.
Check what it allows before you put them in any AI tool.

### This is a demo

The company names, part numbers and figures in FullValue's video are fictional, and the presenter's voice and avatar are AI generated.
The prompt is real, and you can run it today.
Anthropic publishes a similar process-documentation skill for its Cowork product.

## Keep Reading

- [This Baker Couldn't Learn to Code. So They Told an AI How the Shop Orders Flour, and It Built the Reorder List.](/playbooks/bakery-reorder-list/) Another owner who explained the job out loud and let the AI write it down.
- [An Attorney Turned Four Years of Client Emails Into a Subscription](/playbooks/expertise-to-subscription/) Knowledge stuck in one head, turned into something the business owns.
