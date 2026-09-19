---
layout: playbook.njk
title: "The \"AI Crawler\" Hitting Your Site Is Probably a Thief. The Real One You Just Blocked."
description: "One admin checked 44,000 visits claiming to be OpenAI, Anthropic, Google or Perplexity against the IP lists those companies publish. 38% of the fakes went looking for API keys. Zero of the real ones did. An agent runs the same check on your logs."
date: 2026-09-19
difficulty: Intermediate
cost: "$20/mo. Claude plus whatever already hosts your site."
timeToSetup: "An evening to wire it to your logs. Then it runs nightly."
originalSource: "https://www.reddit.com/r/selfhosted/comments/1waq7qn/fake_ai_crawlers_are_hunting_for_my_api_keys_and/"
originalAuthor: "u/startages (r/selfhosted)"
issueNumber: 30
permalink: /playbooks/fake-ai-crawlers/
tags:
  - security
  - ai-search
  - seo
  - web-hosting
  - logs
  - small-business
---

## Tools

- [**Claude**](#aff-claude): reads the log lines and writes the nightly note
- [**OpenClaw**](#aff-openclaw): runs the check every night and posts the result
- [**Cloudflare**](#aff-cloudflare): or whatever sits in front of your site. Where the block rules go
- The published crawler lists: [OpenAI](https://openai.com/gptbot.json), [Anthropic](https://claude.com/crawling/bots.json), [Perplexity](https://www.perplexity.ai/perplexitybot.json), [Google](https://developers.google.com/static/search/apis/ipranges/googlebot.json)

## What You'll Build

A nightly check that reads your web server logs, pulls out every visit that called itself an AI crawler, and asks one question: did it come from an address its owner actually publishes?

The real ones get through. The impostors get blocked. You get a short note each morning saying how many of each, and what the fakes were looking for.

## The Story

Someone running their own servers got curious about the traffic wearing AI crawler names. OpenAI, Anthropic, Google, Microsoft and Perplexity each publish a list of the IP addresses their crawlers use. He matched five months of visits against those lists.

> The IP can't be faked because the reply has to go back to it.

The numbers:

> 43,967 visits. Two thirds could not be checked at all, because whoever runs those crawler names publishes no list. Of the 14,771 that could, 9,194 were real and 5,577 were not.

> Zero of the 9,194 real ones asked for a password, key or config file in five months. 38.3 percent of the fake ones did.

What the fakes were after is the new part. The paths are ones that did not exist two years ago:

> /.config/anthropic/credentials/default.json
> /.mcp.json
> /.claude.json
> /.cursor/mcp.json
> /.claude/settings.json
> /claude_desktop_config.json
> /.openai/config.json

> .env scanning is ancient and boring. These paths are new.

And it was steady: 78 separate days, 726 separate hours. The busiest day was about a tenth of the total.

He was careful about the limits of his own data. A real crawler fetching from an address its owner forgot to publish fails the check the same way an impostor does, so he wouldn't say how many of the 5,577 were malicious versus sloppy. The part he stood behind: zero versus 38.3 percent, measured on the same server over the same window.

## Why This Matters to a Business That Isn't a Server Farm

Two things are true at once, and most small business sites get both wrong.

First, if you block the real crawlers, you disappear from AI answers. The previous two playbooks are about getting quoted by ChatGPT and Perplexity. None of it works if GPTBot and ClaudeBot get a 403 at your front door. A lot of sites block them without knowing, because a security plugin or a host default did it.

Second, something calling itself GPTBot is not GPTBot. A third of the checkable visits in this study were lying, and those are the ones probing for keys. A blanket "allow anything with AI in the name" rule opens the door to exactly the wrong visitors.

The published lists resolve both. Allow the addresses on the list. Treat everything else claiming the name as hostile.

## How to Run It

**Step 1. Find your logs.** Your host has them. Cloudflare, Netlify, WordPress hosts, a plain nginx box. The agent needs read access to the access log or the equivalent export.

**Step 2. Fetch the lists nightly.** The four URLs in the Tools section. They change, so pull fresh each run.

**Step 3. Match.** For every request whose user-agent claims GPTBot, ClaudeBot, PerplexityBot or Googlebot, check whether the source address falls inside that company's published ranges. Pass or fail.

**Step 4. Look at what the failures asked for.** Any request for a path ending in `.json`, `.env`, `credentials` or `config` from a failed crawler is the signal. Log it.

**Step 5. Block the failures, keep the passes.** Push the failing addresses to a block rule in Cloudflare or your firewall. Never block by user-agent string alone, or you'll block the real ones too.

**Step 6. The morning note.** "Last night: 212 crawler visits. 140 verified. 72 failed. 19 of the failures probed for config files. Blocked 31 new addresses. Real crawlers fetched 38 pages, including your pricing page." That last line is the one you'll come to like.

## The Business Angle

The security side is plain. Those paths are where developers leave API keys. A leaked Anthropic or OpenAI key gets run up to its limit inside a day, and the bill is yours.

The marketing side is the part nobody connects. Your host's "block AI bots" toggle, which sounds prudent, is the reason you are not in the answer when a customer asks. This check lets you allow the real ones with a clear conscience.

Nobody sells this as a service. It's an evening of setup and a $20 subscription.

## Who Should Steal This Idea

Anyone who has ever put a `.env` file on a server.

Anyone who flipped a "block AI crawlers" switch in 2025 and hasn't thought about it since.

Agencies hosting client sites. Run it across all of them, one report.

## How Hard Is It

Needs a developer, but just once. The log access and the block rule are the only technical steps, and they're an evening.

Cost: $20 a month.

## Gotchas and Tips

**Verify by IP.** The name is free to claim. The address has to be real for the reply to arrive.

**Don't over-read the failures.** He didn't. A failed check means "not on the published list." Most of those are hostile. Some are the company's own crawler from an unlisted address. Block the ones that probe; watch the ones that don't.

**Two thirds of AI crawlers publish no list at all.** You can't verify those. Decide on purpose whether to allow or block them, and write the decision down.

**Check what you've already blocked.** Before you build any of this, look at your robots.txt and your host's bot settings. Many sites will find the real crawlers already locked out.

**None of those config paths should exist on a web server.** If the agent ever sees a 200 response to `/.mcp.json`, stop reading the report and go fix that.

**Rotate any key that was ever in a web root.** Even if the logs look clean. The five months in this study are one server. Yours may have a different history.

## Keep Reading

- [Eight Months of "Brand Awareness." ChatGPT Has Never Heard of Them.](/playbooks/agency-cant-see-chatgpt/) Why you want the real crawlers to get in.
- [Your Monitoring Agent Is Reading Login Walls and Calling It Research](/playbooks/real-scraping-stack/)
- [He Spent $1,263 on AI in One Month. Then He Capped It.](/playbooks/ai-budget-cap/) What a leaked key costs, from the other side.
