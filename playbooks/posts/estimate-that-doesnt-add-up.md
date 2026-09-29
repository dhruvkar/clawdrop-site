---
layout: playbook.njk
title: "A Contractor Walked Us Through His Bid on Video. Halfway Through, He Couldn't Make It Add Up."
description: "He prices every job on a legal pad, from memory and a rate card. When we added up his own numbers, two subtotals were wrong in opposite directions, the final price was below what his rates supported, and a habitual 10% discount cost him more than every mistake combined. Here is the sheet that fixes it without making him change how he works."
date: 2026-09-28
difficulty: Beginner
cost: "$20-50/mo. Claude plus a phone and whatever CRM you already run."
timeToSetup: "A weekend. Most of it goes on writing down what your estimate sheet actually contains."
originalAuthor: "Clawdrop"
issueNumber: 31
permalink: /playbooks/estimate-that-doesnt-add-up/
tags:
  - trades
  - estimating
  - flooring
  - pricing
  - margin
  - vision
  - small-business
  - smb
---

## Tools

- [**Claude**](#aff-claude): reads the handwriting and the photos and pulls out rooms, dimensions and line items
- [**OpenClaw**](#aff-openclaw): runs the flow and holds every quote for your approval
- [**Google Drive**](#aff-google-drive): where the photos of the sheet land from the phone
- [**HubSpot**](#aff-hubspot): the CRM in the second story. Any CRM with an API works
- [**Telegram**](#aff-telegram): where the checked quote shows up for a yes or no

## What you'll build

A digital copy of the estimate sheet the owner already uses.

He measures the job exactly the way he always has.
The sheet works out the square footage of every room, adds up every line, and shows him his margin *before* he knocks anything off.
It never changes his numbers.
When his number disagrees with the math, it shows both and lets him decide.

Then it turns the finished sheet into a quote in the CRM, ready for one last yes.

## The story

We work with a hardwood flooring contractor.
Sanding and refinishing is the core of it.
Tile tear-out, stair work and installs go to subcontractors.

He prices every job the same way.
He walks the house with a two-page job sheet.
He writes each room's dimensions in feet and inches, adds the square footage in the margin, and highlights the rooms in scope.
Then he carries it all to a yellow legal pad.

On the pad, the left column is what he charges.
The right column is what his subs charge him.

> I take the difference between this and this, that's my margin.

We asked him to show us how a real bid comes together.
He sent five photos and a 90 second video of himself walking through one.

Here's what the math on his own paper says.
(We changed the dollar figures to protect the job. The errors are the same size and go the same direction.)

| On the pad | He wrote | The lines actually add to | Off by |
|---|---|---|---|
| First subtotal | $16,720 | $17,480 | -$760 |
| Second subtotal | $24,280 | $23,850 | +$430 |
| Final price, before discount | $24,610 | $24,950 | -$340 |

The first two mistakes go in opposite directions and mostly cancel.
That's exactly why nobody catches it.
The final number *looks* right.
It's just a few hundred dollars short of what his own rate card says, every time, invisibly.

Partway through the video he stops, looks at the pad, and says:

> I don't know why this is missing... it didn't make sense.

He couldn't reconcile his own sheet while filming it.

He's good at this.
He's also doing four columns of arithmetic on a legal pad at the end of a long day, the same way he always has.

## The discount costs more than the mistakes

Then there's the line at the bottom of every pad: 10% off.

He gives it on every job.
On this one it was $2,461.
That's more than seven times what the arithmetic errors cost him.

The addition errors are the cheap part to fix.
Here's the expensive part:

**He gives up 10% before he can see what it does to his margin.**

His markups range from roughly break-even on some sub work to six times cost on demolition.
A flat 10% off a job heavy on break-even lines can wipe out the profit on the whole job.
On a legal pad he'd never know.

So the feature that matters is one line on the screen, right before he commits:

`Margin after discount: $X.`

## The square footage doesn't add up either

Room by room, his written square footage came to 37 sq ft more than the exact rectangles his own dimensions describe.
A separate slip of 18 sq ft happened on the way from the job sheet to the pad.

We looked for a rounding rule.
There isn't one.
Some rooms are rounded up to the next six inches.
One kitchen is rounded *down* by almost 8 sq ft.
One bedroom is rounded up by almost 28.

That's judgment.
He knows the kitchen has a cabinet run and the bedroom has a bay.

So the tool never applies a rounding rule, and it never overwrites his number.
It works out the exact figure, keeps his, and puts a small badge on every room where the two disagree.
He decides.

## The second half: photo to quote

The sheet solves pricing.
A different owner on r/smallbusiness [solved what happens next](https://www.reddit.com/r/smallbusiness/comments/1vnuvvf/).

Their owner is also elite at walking a site and pricing work, and also finished with software.
Every job starts as a handwritten estimate that someone in the office retypes into the CRM.

> Instead of trying to "fix" the owner, I just accepted the constraint and built around it.

Snap a photo of the estimate.
The agent reads it and pulls out the client, the scope, the line items and the totals.
A human checks it and taps yes.
A second flow creates the CRM record with the right links and leaves one click to send it to the client.

They got five to eight hours a week back.

Put the two together and the owner keeps his clipboard.
The math adds up and the margin shows before the discount.
The quote goes out the same day, and nobody retypes it.

## How it works

1. Rebuild his sheet with the same fields in the same order, using his shorthand. Feet and inches like `13'9" x 15'9"`. Closets priced separately. Rooms marked in or out of scope. If he has to learn a new layout, you've already lost.
2. Parse the dimensions and work out the square footage in code. Show his number next to it. Keep his number. Badge the difference.
3. Load his rate card as editable defaults. Per-square-foot rates, per-foot shoe molding, per-item stair treads and vents, plus the dozen lump sums he prices by judgment. Every rate can be changed on every job, because he changes them job to job.
4. Keep his sub-cost column. It's the most useful thing on the pad. Put it next to each line and total it.
5. Show margin before and after the discount, live, as he types the discount.
6. On approval, send the photo or sheet to the CRM. Claude pulls the fields, your code checks the totals, a human taps yes, and the quote goes out.

## The business angle

A few hundred dollars under-billed on a $25,000 job looks like rounding.
If he wins 80 jobs a year at that size, it's $27,000.
And that's before the discount.

Say seeing the margin makes him drop the automatic 10% on even a quarter of his jobs.
That's about $49,000 more a year at this job size.
He doesn't change his prices or his process.
He doesn't open a laptop in front of a customer.

And someone in the office gets five to eight hours a week back from retyping.

## Who should steal this idea

Flooring, roofing, painting, HVAC, remodeling, landscaping, fencing, concrete, countertops.
Anyone whose price is built on a clipboard and finished on a calculator.

It also works for anyone who subcontracts part of the job and works out margin in their head.

## How hard is it

The photo-to-CRM half takes an afternoon if the sheet is consistent.

The digital sheet takes a weekend.
Almost all of it goes on the take-off: parsing feet and inches, per-wall lengths for molding, closets split out, everything rolling up to one total.
The pricing is the easy part.

Cost: $20 to $50 a month.

## Gotchas and tips

### Speed is a wash

Measuring one house on the prototype took about 235 taps.
That's roughly even with a pen.
So sell what's true: no retyping onto the pad, totals that always add up, and margin you can see before the discount.

### Never let the model do the arithmetic

Claude reads the handwriting.
Your code adds it up.
A model re-totaling a column will eventually be confidently wrong, and it'll look exactly like his pad does now.

### Never overwrite his number

Show the exact figure and his figure side by side.
The day the tool "corrects" a room he rounded on purpose, he stops trusting it.

### Don't lock the pricing

Every rate is a default he can change.
If he has to ask someone to change a rate, he'll go back to the pad.

### Keep the approval step forever

Handwriting gets misread.
A 7 read as a 1 on a four-figure line is one screen and one yes away from being caught.

### Check his old bids first

Photograph five old bids and add them up before you build anything.
The gap between what he wrote and what his rates say is the reason he'll say yes.
It's his own paper.
Nobody can argue with it.

### Start with his most common job

For him that's a sand-and-refinish job.
Get that one perfect before you touch tile, stairs or installs.

## Keep Reading

- [This HVAC Guy Spent Friday Night Setting Up AI. Now His Estimates Write Themselves.](/playbooks/hvac-estimate-autopilot/)
- [He Gave Claude 3 Contractor Bids. It Found $1.4M Worth of Scope Gaps.](/playbooks/contractor-bid-leveler/)
- [He Quoted 20 Hours. He Worked 43. He Got Paid for 20.](/playbooks/scope-creep-change-order-agent/)
