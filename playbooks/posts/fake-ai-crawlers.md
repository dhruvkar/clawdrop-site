---
layout: playbook.njk
title: "The \"AI Crawler\" Hitting Your Site Is Probably a Thief. The Real One You Just Blocked."
description: "One admin checked 44,000 visits claiming to be AI crawlers against the IP lists the companies publish. 38% of the fakes hunted for API keys. Zero real ones did."
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

A nightly check on your web logs.

It pulls every visit that called itself an AI crawler. Then it asks one thing. Did it come from an address its owner publishes?

Real ones get through. Impostors get blocked.

You get a short note each morning. How many of each, and what the fakes were after.

## The Story

Someone running his own servers got curious about the traffic wearing AI crawler names.

OpenAI, Anthropic, Google, Microsoft and Perplexity each publish the IP addresses their crawlers use. He matched five months of visits against those lists.

> The IP can't be faked because the reply has to go back to it.

The numbers:

> 43,967 visits. Two thirds could not be checked at all, because whoever runs those crawler names publishes no list. Of the 14,771 that could, 9,194 were real and 5,577 were not.

> Zero of the 9,194 real ones asked for a password, key or config file in five months. 38.3 percent of the fake ones did.

Here's what the fakes were after. These paths did not exist two years ago:

> /.config/anthropic/credentials/default.json
> /.mcp.json
> /.claude.json
> /.cursor/mcp.json
> /.claude/settings.json
> /claude_desktop_config.json
> /.openai/config.json

> .env scanning is ancient and boring. These paths are new.

It was steady. 78 separate days, 726 separate hours. The busiest day was about a tenth of the total.

He was careful about his own data. A real crawler from an address its owner forgot to publish fails the check the same way an impostor does. So he wouldn't say how many of the 5,577 were malicious. The part he stood behind: zero versus 38.3 percent, same server, same window.

## Why This Matters to a Business That Isn't a Server Farm

Two things are true at once. Most small business sites get both wrong.

First. Block the real crawlers and you disappear from AI answers. The previous two playbooks are about getting quoted by ChatGPT and Perplexity. None of it works if GPTBot and ClaudeBot get a 403 at your front door. A lot of sites block them without knowing. A security plugin or a host default did it.

Second. Something calling itself GPTBot is often lying. A third of the checkable visits in this study were. Those are the ones probing for keys. A rule that allows anything with "AI" in the name opens the door to exactly the wrong visitors.

The published lists settle both. Allow the addresses on the list. Treat everything else claiming the name as hostile.

## How to Run It

**Step 1. Find your logs.** Your host has them. Cloudflare, Netlify, WordPress hosts, a plain nginx box. The agent needs read access to the access log or an export of it.

**Step 2. Fetch the lists nightly.** The four URLs in the Tools section. They change, so pull fresh each run.

**Step 3. Match.** Every request claiming GPTBot, ClaudeBot, PerplexityBot or Googlebot gets its source address checked against that company's published ranges. Pass or fail.

**Step 4. Look at what the failures asked for.** Any request from a failed crawler for a path ending in `.json`, `.env`, `credentials` or `config` is the signal. Log it.

**Step 5. Block the failures, keep the passes.** Push the failing addresses to a block rule in Cloudflare or your firewall. Block by address only. Block by user-agent string and you lose the real ones too.

**Step 6. The morning note.** "Last night: 212 crawler visits. 140 verified. 72 failed. 19 of the failures probed for config files. Blocked 31 new addresses. Real crawlers fetched 38 pages, including your pricing page." That last line grows on you.

## The Business Angle

The security side is plain. Those paths are where developers leave API keys. A leaked Anthropic or OpenAI key gets run up to its limit inside a day. The bill is yours.

The marketing side is the part nobody connects. Your host's "block AI bots" toggle sounds prudent. It is also the reason you are missing from the answer when a customer asks. This check lets you allow the real ones with a clear conscience.

Nobody sells this as a service. It's an evening of setup and a $20 subscription.

## Who Should Steal This Idea

Anyone who has ever put a `.env` file on a server.

Anyone who flipped a "block AI crawlers" switch in 2025 and hasn't thought about it since.

Agencies hosting client sites. Run it across all of them, one report.

## How Hard Is It

Needs a developer, but just once. Log access and the block rule are the only technical steps. They're an evening.

Cost: $20 a month.

## Gotchas and Tips

**Verify by IP.** The name is free to claim. The address has to be real for the reply to arrive.

**Don't over-read the failures.** He didn't. A failed check means "not on the published list." Most of those are hostile. Some are the company's own crawler from an unlisted address. Block the ones that probe. Watch the ones that don't.

**Two thirds of AI crawlers publish no list at all.** You can't verify those. Do you allow them or block them? Decide on purpose, and write the decision down.

**Check what you've already blocked.** Before you build any of this, look at your robots.txt and your host's bot settings. Many sites will find the real crawlers already locked out.

**None of those config paths should exist on a web server.** If the agent ever sees a 200 response to `/.mcp.json`, stop reading the report and go fix that.

**Rotate any key that was ever in a web root.** Even if the logs look clean. The five months in this study are one server. Yours may have a different history.

## Keep Reading

- [Eight Months of "Brand Awareness." ChatGPT Has Never Heard of Them.](/playbooks/agency-cant-see-chatgpt/) Why you want the real crawlers to get in.
- [Your Monitoring Agent Is Reading Login Walls and Calling It Research](/playbooks/real-scraping-stack/)
- [He Spent $1,263 on AI in One Month. Then He Capped It.](/playbooks/ai-budget-cap/) What a leaked key costs, from the other side.
