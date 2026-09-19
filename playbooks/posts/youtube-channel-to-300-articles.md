---
layout: playbook.njk
title: "He Used to Charge $750 an Article. His Agent Wrote 300 of Them From One YouTube Channel."
description: "A former SEO writer pointed his agent at an entire YouTube channel. It pulled every video, turned each one into a long article in a well-known SEO writer's style, had a second agent make it read human, and dropped 300 finished pieces in a Drive folder."
date: 2026-09-19
difficulty: Intermediate
cost: "$20-60/mo depending on volume. Claude plus Google Drive."
timeToSetup: "A weekend. Most of it deciding whose style you want and what the editor should catch."
originalSource: "https://discord.com/channels/1456350064065904867/1456609488202105005/1472088984321523848"
originalAuthor: "deguere (OpenClaw Discord)"
issueNumber: 30
permalink: /playbooks/youtube-channel-to-300-articles/
tags:
  - content
  - seo
  - youtube
  - repurposing
  - marketing
  - small-business
---

## Tools

- [**OpenClaw**](#aff-openclaw): runs the whole chain, one video at a time
- [**Claude**](#aff-claude): writes the article, then a second pass edits it
- [**YouTube**](#aff-youtube): the channel you already have, or the one you wish you'd been taking notes on
- [**Google Drive**](#aff-google-drive): where the finished articles land, one document each

## What You'll Build

An agent that turns a YouTube channel into a library of long articles, with a second agent reading behind it as the editor.

You give it a channel. It works through every video, pulls the transcript, writes a 2,000 to 4,000 word article from it in a style you picked, hands that to an editor agent whose only job is to make it read like a person wrote it, and saves the result to a Drive folder.

## The Story

A member of the OpenClaw Discord posted this, and I've left his numbers as he wrote them:

> I got my openclaw to scrape all the videos off a YouTube channel, turn them into SEO written articles in the style of Brian Dean (a well known SEO guy), then humanized by an editor sub agent and uploaded to my Google Drive folder.

> So far - 300+ articles ready for posting. Just FYI I used to be paid $750 per article for writing in depth 2000-4000 word SEO articles for companies - no way these days though haha.

> So this is already mind blowing to me.

Three hundred articles at the rate he used to charge is $225,000 of writing.

One practical note he left: the Drive upload only worked on a paid Google Workspace account. Free Gmail Drive did not cooperate.

## Why It Works

The hard part of a long article was never the typing. It was having something to say.

A YouTube channel with 300 videos is 300 sessions where someone who knows the subject explained it out loud, with examples, for twenty minutes. The transcript is a first draft nobody wrote down. The agent's job is structure and style.

The editor pass is what makes it usable. A single agent writing 300 articles drifts into the same rhythm every time. A second agent, told only to find the tells and fix them, catches what the first one can't see in its own work.

## How to Run It

**Step 1. Pick the channel.** Your own is the obvious one. A channel you have permission to repurpose is the other. Do not do this to someone else's channel and publish it under your name. That is plagiarism with extra steps, and the models that decide who gets quoted are getting better at spotting it.

**Step 2. Pick the style.** He chose a named SEO writer. You might choose your own past writing. Give the agent three or four samples and tell it what you like about them.

**Step 3. Set the chain.** For each video: pull the transcript, write the article, pass it to the editor agent, save to Drive as its own document with the video title and link at the top.

**Step 4. Write the editor's brief.** This is the step people skip. Tell it exactly what to hunt: sentences that all run the same length, filler openers, the word "delve," lists of three, claims with no number. Its job is to cut.

**Step 5. Run ten, read them all.** Then run the rest. You are checking the style, the facts, and whether the editor is earning its keep.

## The Business Angle

At his old rate, 300 articles is $225,000. At a cheap content mill rate, call it $100 an article, it's $30,000. His cost was a Claude subscription and a weekend.

For a business, the win is smaller and more useful. Every service you've ever explained on camera, or in a webinar, or on a recorded sales call, becomes a page someone can find. Three hundred is his number. Thirty would change most small companies' sites.

This is also the fastest way to get the answer blocks from the previous playbook. The video already answers the question. The agent just writes it down.

## Who Should Steal This Idea

Anyone who has been posting videos for years and has a website with six pages.

Coaches, consultants and trainers with a webinar archive.

Trades and home services with a "here's how we do it" channel and nothing in writing.

Agencies who bill for content and have a client with a YouTube channel nobody has mined.

## How Hard Is It

Weekend project.

Cost: $20 to $60 a month depending on how many videos you run through it. A 300-video channel in one go will cost more in tokens than a trickle of five a week.

## Gotchas and Tips

**Your channel, or one you have rights to.** Say it twice because someone will skip it.

**Paid Workspace for the Drive step.** His note. Free Gmail Drive did not cooperate with the upload.

**Two agents.** The writer and the editor need different instructions. One agent asked to "write it and then edit it" edits nothing.

**Give the editor a list of tells.** Vague "make it sound human" gets you nothing. A list of ten specific patterns to delete gets you a different article.

**Keep the video link at the top.** For your own sanity, and because a page that embeds the video it came from does better than one that doesn't.

**Facts drift in transcription.** Numbers said out loud get mangled by auto-captions. Have the writer flag every figure so you can check it.

**Publish slowly.** Three hundred articles appearing on one site in a week looks like what it is. Ten a week looks like a company that writes.

## Keep Reading

- [The Pages ChatGPT Quotes Have a Question for a Heading and a Table Under It](/playbooks/answer-blocks-for-ai-search/)
- [This AI Content Factory Writes, Researches, and Designs While You Sleep](/playbooks/ai-content-factory/)
- [Build a Full YouTube Channel Without Touching Editing Software](/playbooks/no-code-youtube-pipeline/) The other direction: articles to video.
