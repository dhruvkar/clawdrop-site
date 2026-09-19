---
layout: playbook.njk
title: "Eight Months of \"Brand Awareness.\" ChatGPT Has Never Heard of Them."
description: "A founder paid an agency for eight months, then asked ChatGPT about his category. Competitors by name, him nowhere. A free plugin shows why. An agent fixes it."
date: 2026-09-19
difficulty: Beginner
cost: "$20/mo. Claude, plus a free open-source plugin."
timeToSetup: "Ten minutes for the check. An afternoon for the first round of fixes. Six to twelve weeks before it compounds."
originalSource: "https://www.reddit.com/r/digital_marketing/comments/1t8bnnr/spent_8_months_building_brand_awareness_with_an/"
originalAuthor: "u/Plenty-Shelter654 (r/digital_marketing) and u/johns10davenport (r/SaaS)"
issueNumber: 30
permalink: /playbooks/agency-cant-see-chatgpt/
tags:
  - ai-search
  - geo
  - seo
  - agencies
  - marketing
  - small-business
---

## Tools

- [**Claude Code**](#aff-claude-code): runs the audit and, once you say so, makes the edits
- [**claude-seo**](https://github.com/AgriciDaniel/claude-seo): the free open-source plugin that tells you exactly why the models can't quote you
- [**WordPress**](#aff-wordpress): or Webflow, Ghost, whatever your site runs on. The agent edits it through the site's own API
- [**DataForSEO**](https://app.dataforseo.com/?aff=56e4b89f-a710-4a77-b8a0-346ef560d1f3): the raw search numbers, pay per lookup, no subscription. It's how you find out a page is worth writing before you write it

## What You'll Build

Two things.

A ten-minute check. Type the question your customer asks into ChatGPT and Perplexity. Read the answer. Are you in it?

And an agent that fixes what the check turns up. A free plugin reads your site the way the models do and lists what's blocking you. The agent goes in and makes the changes, one at a time. You approve each one.

## The Story

A founder runs a fintech brand called Astra. Agency on retainer for eight months.

> Our agency kept talking about brand awareness. Blog posts, social mentions, some PR outreach. Felt productive.

Then he did the thing nobody on the retainer had done.

> I typed our product category into ChatGPT and Perplexity and just... read what came back. Competitors mentioned by name. Astra? Nothing.

He asked the agency.

> They said "that's not really trackable yet." That was the moment I knew we had a problem.

What it costs him:

> Our customers are literally asking AI assistants which product to use before they even Google anything. If Astra isn't in those answers, we're losing the consideration stage entirely and never even know it.

The thread underneath is a fight. Worth reading.

One commenter sided with the agency, hard. There is no ranked list inside an LLM. The same prompt gives a different answer at 9:00 and 9:05. Any tool selling a "visibility score" out of 100 is, in his words, "a horoscope with a logo on it."

He's right about the score.

He's wrong about the check. The founder ran it himself in a browser and got an answer he could act on. Absent is absent.

## Where the Fix Came From

Different thread. A SaaS founder explained how he gets daily referral traffic from the AI engines.

He uses a free plugin called claude-seo. His framing is the cleanest I've seen:

> Improving your SEO and GEO comes down to three things: Knowledge. What's wrong with your site and what needs to change. Judgment. Deciding what to actually change. Labor. Going in and changing all that stuff.
>
> The plugin solves knowledge. You solve judgment. You can automate labor with agents.

What the audit looks for, in his words:

> The AI crawler can't read you if your robots.txt blocks GPTBot, ClaudeBot, or PerplexityBot, or your content renders client-side, you're invisible no matter how good you are.

> AI models pull self-contained answer blocks. A 150-ish word chunk that fully answers one question, under a heading phrased as that question, gets quoted. A wall of prose does not.

> Schema.org markup (FAQ, Article, Product) tells the model what your content is so it can attribute it to you.

The timeline matters. Agencies get fired at month three.

> I submitted my first sitemap maybe two months back and the daily referrals built gradually as the models recognized the domain as a reliable source. Expect 6 to 12 weeks before it compounds, not days.

His one-liner: "90% of good GEO is good SEO."

## How to Run It

**Step 1. The check.** Write down five questions a real customer asks in your category. Add your city if you're local. "Best emergency electrician in Tucson." "Which payroll tool for a 10-person shop." Ask ChatGPT and Perplexity each one. Write down who got named. That's your baseline. Took the Astra founder one sitting.

**Step 2. The audit.** Install the plugin in Claude Code. Point it at your domain. It comes back with a list. Blocked crawlers. Pages that render nothing without JavaScript. Missing schema. Headings that match no question a person would ask.

**Step 3. Judgment.** Read the list. Cross off anything you don't understand or don't want. Do not skip this step. The SaaS founder learned it the hard way:

> I ran this thing on my repo, and it was like "you should normalize all your urls to lower case." I was not making judgement on actions at that point because I thought I could just let it do whatever safely. That broke logins.

**Step 4. Labor.** Connect the agent to your site. On WordPress, Webflow or Ghost that's an MCP server, a small connector that exposes your pages as things the agent can edit. It makes one change. Shows you. You approve. It makes the next one.

**Step 5. Re-run the check in six weeks.** Same five questions. Same notebook.

## The Business Angle

The retainer bought blog posts and PR for eight months. Nobody on either side asked whether the models could read the site.

The plugin is free. The agent is $20 a month. The check is a browser tab.

What an agency sells at this point is judgment. This playbook lets you supply that yourself.

Keeping the agency? Hand them the audit output. Ask which items they'll fix by Friday. That conversation tells you what you're paying for.

## Who Should Steal This Idea

Anyone paying an agency for "awareness" or "content" who has never typed their own category into ChatGPT.

Local service businesses. The question is "best [trade] near [town]" and the answer is three names.

Software and product companies. Buyers ask the AI to build the shortlist before they book a call.

## How Hard Is It

Ten minutes for the check. An afternoon for the fixes.

Cost: $20 a month for Claude. The plugin is free and MIT-licensed.

Which do you want first, the check or the audit? I'd run the check today. It costs nothing and it tells you whether the rest is worth an afternoon.

## Gotchas and Tips

**Don't buy a score.** The horoscope commenter had a point. Ask the five questions yourself. Present or absent is a real answer.

**Blocked crawlers first.** A surprising number of sites block GPTBot and ClaudeBot in robots.txt because a plugin or a host set it that way. If they can't read you, nothing else matters.

**One question per heading.** The models quote blocks that fully answer one question in about 150 words. A services page written as a wall of paragraphs gets skipped.

**Comparisons go in tables.** From the SaaS thread: "Models extract HTML tables almost verbatim."

**Third-party mentions carry more weight than your own blog.** Several people in the Astra thread landed on the same point. The models trust review roundups, comparison sites and forum threads. Get your own site readable first. Then get talked about somewhere else.

**Approve every edit.** The lowercase-URL story is what happens when you let it run unattended on a live site.

**Six to twelve weeks.** Judge it at week ten. The referrals build as the models decide your domain is a reliable source.

## Keep Reading

- [Is Your Business Invisible When Customers Ask ChatGPT? This Agent Checks Every Saturday.](/playbooks/invisible-in-chatgpt/) The monitoring half. This playbook is the fix half.
- [The Pages ChatGPT Quotes Have a Question for a Heading and a Table Under It](/playbooks/answer-blocks-for-ai-search/)
- [Customers Ask AI Where to Buy Insurance Now. This Agency Owner Built the Pipe So Their AI Can Order From Him.](/playbooks/agent-callable-insurance-quotes/)
