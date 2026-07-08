---
layout: playbook.njk
title: "Turn Any Viral Video Into an Ad for Your Product, in Minutes"
description: "A Claude Code skill watches any viral video, breaks it into shot-by-shot beats, and recreates the format with your own product using Higgsfield's Seedance 2.0."
date: 2026-07-08
difficulty: Beginner
cost: "$20/month for Claude, plus Higgsfield credits per video. Rendering at 720p costs about half of what 1080p does."
timeToSetup: "An afternoon to build the skill, then a couple of minutes per video."
originalSource: "https://www.youtube.com/watch?v=Y2uCjv4RuDA"
originalAuthor: "Duncan Rogoff (YouTube)"
issueNumber: 20
permalink: /playbooks/viral-video-recreator/
tags:
  - video
  - marketing
  - content
  - social-media
  - advertising
  - small-business
  - cost-cutting
---

## Tools

- [**Claude Code**](#aff-claude-code): the AI assistant that lives in a terminal window. It watches the reference video, writes the shot breakdown, and drives the whole pipeline.
- [**Anthropic**](#aff-anthropic): the company behind Claude. One subscription covers the brains of this build.
- [**Higgsfield**](#aff-higgsfield): the platform that hosts the latest AI video models, including Seedance 2.0, the one that actually renders your footage.

## What You'll Build

A repeatable system that takes the link to any viral video and hands you back the same video format, rebuilt around your product.

You paste in a URL. The AI watches the video, breaks it down into precise beats with timestamps, camera moves, and on-screen text, then rewrites those beats for your brand and generates brand-new footage with an AI video model. What comes out is a short vertical video that follows the exact structure that already proved it can pull millions of views, except now it's selling your thing.

This comes from Duncan Rogoff, who runs a Claude Code learning community of over 6,700 members. He asked them what one thing he should build, and they nearly all said the same thing: a viral AI video generator. His answer was a custom skill, which is just a saved recipe the AI can run the same way every time. Build it once, reuse it forever.

The reference video in his demo had 1.8 million views. The recreation took a couple of minutes of his attention.

## The Problem: You Already Know What Works. You Just Can't Afford to Make It.

Ad creative is one of the most expensive line items in small-business marketing. Creative agencies typically charge $1,500 to $5,000 a month on retainer to produce short-form video ads. UGC creators, the people who film casual product videos for brands, typically charge per video, and a batch of ten test creatives adds up fast.

Here's the part that stings. Most of what you're paying those people for is not originality. It's pattern-matching. Good creative teams study what's already going viral in your niche, break down why it works, and produce a version for you. The hook in the first two seconds. The cut rhythm. Where the text lands on screen. That analysis is the actual product, and the footage is just execution.

But you can do that analysis yourself now. You already see the viral videos. Your feed shows you exactly which formats are working this month. What you've been missing is a way to go from "I know this format would work for us" to a finished video, without a camera crew, an editor, or a per-video invoice.

That gap is what this skill closes.

## How It Works

The system chains four steps that a creative team normally does by hand.

```
VIRAL VIDEO URL (the format that already works)
        |
        v
CLAUDE WATCHES IT
  pulls the frames, transcribes the audio
        |
        v
BEAT SHEET, second by second
  "0-3s: hook, hard push-in on subject
   3-7s: reveal, camera orbits left
   7-11s: on-screen text appears
   11-15s: payoff shot, cut to black"
        |
        v
CLAUDE REWRITES EACH BEAT
  same timing, same camera moves,
  YOUR product, YOUR script
        |
        v
SEEDANCE 2.0 (via Higgsfield) RENDERS
  15-second clips, vertical, 720p
        |
        v
FINISHED VIDEO, ready for your review
```

**Watching the video.** Out of the box, Claude can't really watch video. A free add-on skill fixes that: it extracts the frames, transcribes the audio, and hands all of it to the AI. From then on you have a watch command that works on any video URL.

**The beat sheet.** This is the heart of the build. The AI doesn't summarize the video, it scores it like a director's shot list: what happens at each timestamp, what the character or subject does, how the camera moves, what the style is, what text appears on screen. In Duncan's demo the breakdown read like "the two subjects grapple hand to hand, then one crouches to attack between seconds 1 and 4, then grits his teeth," with every beat time-coded.

**The rewrite.** The skill takes that beat sheet and generates a new video prompt with the same structure, but recast for your subject. The timing, pacing, and camera language stay. The content becomes yours.

**The render.** The prompt goes to Seedance 2.0 through Higgsfield's connection, which lets Claude call the video model directly without you ever opening a browser. Seedance handles clips up to 15 seconds. If the source video is longer, the skill breaks it into 15-second chunks, renders each one, and stitches them together into one longer video.

## Setting It Up

**Step 1: Get Claude Code running.** Claude Code is Anthropic's AI assistant that runs in a terminal, the plain text window on your computer. That sounds scarier than it is. You install it, sign in with a Claude subscription, and type to it in plain English. You can also do most of this in the Claude desktop app if you prefer buttons to text.

**Step 2: Install the free video-watching skill.** There's a free skill on GitHub (the "Claude video skill" by a builder called Brad Automates) that teaches Claude to watch videos. Installing it is absurdly simple: copy the link to the skill, paste it into Claude, and say "install this for me." A few seconds later you have a watch command. Test it by pasting in any video URL and reading the breakdown it produces.

**Step 3: Connect Higgsfield.** Higgsfield gives you access to the latest video models in one place. On their site, go to the MCP and CLI section. If you're in the desktop app, copy the connector link, then in the app go to connectors, add a custom connector, name it Higgsfield, paste the link, and sign in. If you're in the terminal, copy their one install command instead, paste it in, and sign in. Either way, Claude can now generate video directly.

**Step 4: Tell Claude to build the skill, as a goal.** This is the trick that makes modern AI models sing: give them the success state, not the instructions. Duncan's request, lightly trimmed: "I want to build a new skill designed to create viral AI videos. First, it uses the watch skill on the URL I give it. It breaks the video down into really specific beats, noting the character action, the camera movements, and the style. Then it generates a video prompt for Higgsfield using Seedance 2.0, as 15-second clips broken into sections with timestamps, so by the end we are remixing the viral video I gave you."

**Step 5: Review the plan before it builds.** Turn on plan mode (in the terminal you tap shift-tab a couple of times) so the AI writes out its full game plan and waits for your sign-off. This is where you catch settings before they cost you money. Duncan spotted that the plan defaulted to 1080p resolution and widescreen. He told it to use 720p, which cuts render costs by about half, and a 9 by 16 vertical aspect ratio for Shorts, Reels, and TikTok. The plan updated, he approved it, and the AI built the whole skill on its own.

**Step 6: Test it cold and ask dumb questions.** Open a fresh session, type the skill name, paste a viral video URL, and see what comes out. If any step in the finished skill confuses you, just ask. Duncan didn't understand two steps in his, asked about them in plain English, got a clear answer, and then told the AI to tighten the skill's wording. You cannot break anything by asking.

One cost tip from the source video: Claude Code lets you run an expensive, smarter model as the "advisor" that plans everything, while a cheaper model executes the actual work. Duncan estimates that setup saves about 80 percent on AI costs. Worth switching on if you'll run this a lot.

## The Brand-Safety Framing: You're Stealing the Format, Not the Video

This matters, so let's be precise about what this system does and doesn't do.

It does not download someone's video and re-upload it. It does not clone their footage. Nothing from the original video ends up in yours. What carries over is the format: the pacing, the shot structure, the camera language, the hook mechanics. Formats and hooks are not protectable, and every ad agency on earth already builds swipe files of top-performing creative and reverse-engineers them for clients. That's not a loophole. That's how the creative industry has always worked. This skill just does the reverse-engineering in seconds instead of a strategy meeting.

Duncan's skill actually asks you to choose: recast the video with a different subject or brand, or do a direct visual recreation. For learning and testing, direct recreation is fine. For anything you publish as your business, recast it. Your product, your script, your generated footage, wearing the skeleton of a video that already proved itself.

One plain-language rule to keep yourself clean: nothing in your finished video should belong to someone else. No competitor logos or footage. No real people's faces or voices who haven't said yes. No celebrities, and no copyrighted characters. Duncan's demo recreated a Goku versus Thanos fight, which is a fun way to test the pipeline, but you don't run recognizable characters in an ad for your business. Steal the beat sheet. Leave everything identifiable behind.

## The Business Angle

Run the replacement math.

A creative agency retainer for short-form ad creative typically runs $1,500 to $5,000 a month. UGC creators typically charge per video, and serious ad accounts burn through ten or twenty test creatives a month, because the whole game in paid social is testing volume: most creatives flop, a few win big, and you only find the winners by shipping lots of attempts.

This system flips the cost structure. Your fixed costs are a Claude subscription at $20 a month and Higgsfield credits that run a few dollars per rendered video at 720p. Every additional test creative costs you minutes and pocket change instead of another invoice. The businesses that win at paid social are the ones that test the most formats, and you just removed the per-test price tag.

Even if you keep an agency for your hero campaigns, this becomes your testing layer. Recreate five trending formats with your product, throw small budgets at them, and only hand the winners to humans for polish. You're paying agency rates for winners instead of paying agency rates to find them.

## Gotchas

- **Video models go down. The AI routes around it.** In the source video, Seedance failed on every attempt during the demo, which happens with image and video models from time to time. Claude noticed and automatically switched to Kling 3.0, a different model on Higgsfield, and still delivered. Kling caps clips at 10 seconds instead of 15, but the results were solid. Usually the primary model is back within a day.
- **15 seconds is the ceiling per clip.** Seedance renders up to 15 seconds at a time. Longer source videos get chopped into 15-second chunks and stitched back together. It works, but review the seams.
- **Resolution is your biggest cost lever.** Dropping from 1080p to 720p saves about 50 percent on render credits, and for phone-screen vertical video the difference is barely visible. Bake 720p into the skill so you never pay for pixels nobody sees.
- **Always review the plan before the build, and the video before it posts.** Plan mode exists so you catch wrong settings before they cost money. And AI footage still produces the occasional weird hand or garbled on-screen text, so keep a human eyeball between render and publish.
- **Watch your AI spend.** Video work chews through tokens. The advisor-plus-cheaper-executor setup mentioned above is the difference between this costing lunch money and costing real money.

## Who Should Steal This

E-commerce owners who need a steady stream of Reels and TikTok ad creative, local businesses tired of paying per-video rates for social content, marketers who want to test ten formats a month instead of two, and solo operators and small agencies who want to offer "trend-responsive video creative" without hiring an editor.

If you've ever watched a viral video and thought "this exact format would crush it for my product," this is the machine that acts on that thought.

---

## Keep Reading

- **[Turn a Property Listing Into a Finished Walkthrough Video, No Crew, No Camera](/playbooks/property-listing-video-autopilot/)**: the same generate-footage-from-a-plan pipeline, pointed at real estate listings.
- **[Research Your Competitors' Ads and Launch Your Own Campaign on Meta](/playbooks/meta-ads-pipeline/)**: the paid-social side of the same play, studying what already works and shipping your version.
- **[Record Your Screen Once. Your AI Cuts the Shorts, Writes the Captions, and Posts Everywhere.](/playbooks/vidpipe-content-pipeline/)**: a content pipeline for footage you already have, instead of footage you generate.
