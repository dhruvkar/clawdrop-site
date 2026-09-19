---
layout: playbook.njk
title: "The $5,000-a-Month Agency's Checklist, as 50 Commands You Can Run Yourself"
description: "Corey Haines gave away 50 marketing skills for AI agents: SEO audit, schema, pricing, cold email. Copy the folder in, type the command. 50,000 stars on GitHub."
date: 2026-09-19
difficulty: Beginner
cost: "$20/mo. Claude. The library is free and MIT-licensed."
timeToSetup: "Ten minutes to install. The first audit runs while you get coffee."
originalSource: "https://github.com/coreyhaines31/marketingskills"
originalAuthor: "Corey Haines (GitHub), via AI Parameters (YouTube)"
issueNumber: 30
permalink: /playbooks/marketing-skills-library/
tags:
  - marketing
  - seo
  - cro
  - skills
  - claude-code
  - small-business
---

## Tools

- [**Claude Code**](#aff-claude-code): the agent that runs the skills. Codex and Cursor work too
- [**marketingskills**](https://github.com/coreyhaines31/marketingskills): the library itself. Free, MIT, about 50,000 GitHub stars
- [**DataForSEO**](https://app.dataforseo.com/?aff=56e4b89f-a710-4a77-b8a0-346ef560d1f3): the raw search numbers, pay per lookup, no subscription. Several of the SEO skills want real volume data and this is where it comes from

## What You'll Build

Nothing. That's the point of this one.

Corey Haines published a folder of 50 skills.

A skill is a text file. It teaches your agent one marketing job the way a practitioner does it. What to look at. In what order. What good looks like. What to hand back.

You copy the folder into your project.

You type `/seo-audit` or `/pricing` or `/cold-email`.

The agent does that job on your site, with your numbers.

## What's in the Box

The ones a small business owner will actually use, from the current list of 50:

- `seo-audit` and `schema`: the technical read of your site and the markup that tells search engines and AI models what each page is
- `ai-seo`: the check for whether the AI engines can read and quote you
- `programmatic-seo` and `site-architecture`: how to lay out a site with forty service pages so they don't cannibalize each other
- `cro`, `signup`, `popups`, `paywalls`: conversion, from the homepage down to the button
- `pricing` and `offers`: how to structure and present what you charge
- `copywriting`, `copy-editing`, `emails`: the writing jobs
- `cold-email`, `prospecting`, `lead-magnets`: outbound
- `competitor-profiling`, `customer-research`: the research an agency does in month one and bills for
- `directory-submissions`: the boring local-SEO listings work
- `marketing-plan`, `marketing-council`: the strategy sessions

The rest cover ads, attribution, referrals, launches, onboarding, PR, events and video. Full list is in the repo.

## Why Bother

An agency's real product is a checklist they've run a hundred times.

You pay the retainer for the checklist and the hands.

This is the checklist. Written by someone who ran an agency. Given away.

The hands are the $20 agent.

It also ties the other four playbooks together. `ai-seo` and `schema` run the audit from the Astra piece. `seo-audit` and `site-architecture` tell you which pages to turn into answer blocks. `content-strategy` tells you what to write from the YouTube transcripts.

## How to Run It

**Step 1.** Install Claude Code if you haven't. Open it in the folder where your website lives. If your site is on WordPress and you just want the reports, an empty folder works.

**Step 2.** One command, from the repo README:

```bash
npx skills add coreyhaines31/marketingskills -a claude-code
```

**Step 3.** Type `/seo-audit https://yoursite.com` and read what comes back.

**Step 4.** Pick the three findings that matter. Ignore the other thirty.

Same rule as the Astra playbook. The library supplies knowledge. You supply judgment.

## Who Should Steal This Idea

Every owner paying a retainer who wants to know what the retainer is for.

Solo marketers and one-person agencies. A second brain that already knows the checklists.

Anyone about to hire their first marketing person. Run the audit first so you know what you're hiring for.

## How Hard Is It

Set it up in an afternoon. Ten minutes, honestly.

Cost: $20 a month for Claude. The library is free.

## Gotchas and Tips

**Fifty skills is too many.** Use four. `seo-audit`, `ai-seo`, `cro`, and whichever one matches the thing you're stuck on this month.

**It's a checklist.** The output is only as good as what you feed it. Real site, real numbers, real customers' words.

**The repo has sponsors.** Some tool integrations are labeled as paid partners. The core skills are neutral and the partner rules are public in the repo. Read the label.

**Check the date.** The library updates often. Pull the latest before a big audit.

**Judgment, every time.** `seo-audit` will hand you forty items. Doing all forty on a live site in one afternoon is how you break something. Three a week.

Which one are you stuck on this month? Start there.

## Keep Reading

- [Eight Months of "Brand Awareness." ChatGPT Has Never Heard of Them.](/playbooks/agency-cant-see-chatgpt/)
- [The Pages ChatGPT Quotes Have a Question for a Heading and a Table Under It](/playbooks/answer-blocks-for-ai-search/)
- [The One-Person Agency: Charge Agency Rates as a Solo Operator](/playbooks/one-person-agency/)
