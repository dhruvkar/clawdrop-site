---
layout: blueprint.njk
title: "Record Your Screen Once. Your AI Cuts the Shorts, Writes the Captions, and Posts Everywhere."
description: "htekdev built a three-piece content stack (VidPipe, VidRecord, VidSpec) that records his screen, edits the long-form video, cuts shorts, generates captions and thumbnails, and auto-posts to every social platform. The whole thing runs on a Terraform-provisioned OpenClaw sandbox. His content ideas live as GitHub Issues. The agent closes them when it ships the video."
date: 2026-05-05
difficulty: "Needs a developer, but just once"
cost: "$24/mo VPS + Late/Zeronia API ($30-50/mo) + ElevenLabs optional"
timeToSetup: "A weekend for v1, two weekends for the full pipeline"
originalSource: "https://www.youtube.com/watch?v=Bm8gq99SvJE"
originalAuthor: "htekdev"
originalAuthorUrl: "https://www.youtube.com/watch?v=Bm8gq99SvJE"
issueNumber: 12
permalink: /blueprints/vidpipe-content-pipeline/
tags:
  - content-pipeline
  - youtube
  - shorts
  - social-media
  - openclaw
  - terraform
  - infrastructure-as-code
  - github-issues
  - late-api
  - zeronia
  - content-creator
  - solopreneur
---

## What You'll Build

A content pipeline that takes one screen recording and turns it into a YouTube long-form upload, three or four YouTube Shorts, captioned cuts for X and LinkedIn, custom thumbnails, and auto-posts the whole bundle to every social platform you have an account on. You hit record. You stop recording. The next thing you see is the published video on six platforms.

Concretely, three small repos do the work in sequence. VidRecord captures the screen and your voice. VidPipe takes that raw recording and runs it through an editing agent that cuts the long-form, slices Shorts at the high-energy moments, generates captions in your style, and builds platform-specific thumbnails. A posting layer (originally Late, now rebranded to Zeronia) ships the bundle out to YouTube, X, LinkedIn, Instagram, TikTok, and wherever else you publish.

The killer pattern is the idea management. Your content backlog does not live in a Notion doc that goes stale. It lives as GitHub Issues. Every video idea is an open issue. Every piece of context you want to mention is a comment on that issue. When you record a video that satisfies an issue, the agent closes the matching issue automatically. Your repo becomes your kanban. Your kanban becomes your output. Closed issues are shipped videos.

The whole thing runs on a sandboxed OpenClaw instance provisioned by Terraform on a cheap VPS. Prod and dev are recreated from `main` on every merge with state preserved. A policy file says the agent can only reach Perplexity, YouTube, Anthropic, and Telegram. Nothing else. If the agent goes weird, you redeploy in two minutes from version control.

You walk away with: a single command that turns "I had a thought worth recording" into a published multi-platform video, a content backlog that manages itself, and an infrastructure setup you can blow away and rebuild from `main` whenever you want.

## Why Most Content Pipelines Break

The gap between "I made a video" and "the video is live on six platforms with the right thumbnail per platform" is where 90% of creators give up.

Recording is the easy part. Anyone can hit record on QuickTime or OBS. The death spiral starts at step two. You have a 47-minute raw recording with three "uhs" per sentence. Now you need to cut the long-form down to 12 tight minutes. Now you need to find the three best 30-second moments and reframe them vertically for Shorts. Now you need captions for the platforms that need captions. Now you need thumbnails, plural, because YouTube wants 16:9 with big text and Instagram wants 1:1 with a tasteful crop and TikTok wants something else entirely.

Then you cross-post. Six tabs open. Six different upload UIs. Six different "schedule for later" buttons that all behave slightly differently. Each platform has its own caption length limit. Each one wants the description formatted just so. By the time you finish posting, three hours have gone by and you are angry at the internet.

So you do what every creator does. You skip Shorts this week. You skip LinkedIn entirely because it feels weird to post there. You promise yourself you will batch on Sunday. Sunday comes and you cut grass instead. The video sits in a folder called `to-post` for six months and then you delete it because you have learned to live with the shame.

The other problem is the idea pile. You have a doc somewhere called "video ideas." It has 47 entries. You have shipped 4 of them. The other 43 mock you every time you open the doc. You have no way to tell which ones are still worth shipping, which ones got stale, which ones you actually started recording and abandoned. The doc is a graveyard with no headstones.

You do not need a better camera. You do not need a better mic. You need a layer that takes the raw recording and ships it. And you need an idea management system that closes the loop when an idea becomes a video.

The business math here is also clean. If a creator posts twice a week and spends 90 minutes per video on the post-production and crossposting tax, that is three hours a week, or about 156 hours a year. At any reasonable hourly rate, that is real money. More importantly, it is the bottleneck. Most creators ship 2 videos a week not because they cannot record more but because they cannot post more. Removing that bottleneck doubles or triples output without adding a single new working hour.

## The Pattern

The whole stack is one loop with five stages. You only touch stage 1 (write an idea) and stage 3 (record). The agent does the rest.

```
[1] IDEA
    -> open a GitHub Issue with a title and 2-3 lines of context
    -> tag with target platform (youtube, shorts, linkedin)
         |
         v
[2] PROMPT
    -> agent reads the issue and surfaces it on your dashboard
    -> "you opened this 6 days ago. record it today?"
         |
         v
[3] RECORD (your only manual step)
    -> VidRecord captures screen + voice
    -> recording saved with the issue number in the filename
         |
         v
[4] PROCESS (automatic)
    -> VidPipe edits long-form, cuts shorts, builds thumbnails
    -> VidSpec generates captions, descriptions, and platform variants
         |
         v
[5] PUBLISH (automatic)
    -> Late/Zeronia posts to every platform with the right format
    -> agent comments on the GitHub Issue with the published URLs
    -> agent closes the issue
```

The leverage point is stage 4. The agent doing the editing and platform-specific formatting is what collapses three hours of post-production into ten minutes of you watching a progress bar. Stage 5 is the second leverage point. One API call, six platforms posted, no tabs.

The clever bit is the loop closure. The agent comments on the issue with links to every published version. Then it closes the issue. Your "ideas" backlog becomes your "shipped" history. You can open the closed issues anytime and see exactly what you posted, where, and when. The graveyard becomes a museum.

## Step-by-Step Setup

### Step 1: Stand Up The OpenClaw Sandbox

This is the first weekend's first afternoon. You are setting up the box that everything else runs on.

Pick a small VPS. The original operator runs this on a $24-a-month box. That is enough for one creator pumping out 2-4 videos a week. If you batch heavier, go to a bigger box, but do not start there.

The setup uses Terraform plus an OpenShell sandbox layer on top. Terraform handles the box itself (provisioning, networking, the firewall). OpenShell handles the agent's permissions inside the box (what it can read, what it can run, what it can call). The two together mean your entire stack is described in version-controlled files. If the box explodes or you want to move providers, you `terraform apply` somewhere else and you are back online in five minutes.

The policy file is the part most people skip and regret. It is a small file that allowlists exactly which external services the agent can talk to. The original setup allows four:

- **Perplexity** for research (titles, hashtags, what is trending in the niche)
- **YouTube** for upload and metadata
- **Anthropic** for the agent itself
- **Telegram** for the "your video posted" notification

Nothing else. No general internet. No package install at runtime. No "let me just curl this real quick." If the agent ever tries to reach out to something not on the list, the call fails loudly. This is what lets you sleep when the agent is running unsupervised at 2 AM.

The other piece of infrastructure-as-code magic is the prod-and-dev pattern. Both environments redeploy from `main` on every merge. Terraform state is preserved across redeploys, so your secrets and your workspace volume survive, but the agent process and its dependencies get rebuilt clean every time. No drift. No "it works on my box." Your whole stack is the code.

### Step 2: Wire The Three Repos

VidPipe, VidRecord, and VidSpec each do one thing. Clone them into the sandbox in this order.

The public umbrella tool that wraps the whole pipeline is [**htekdev/vidpipe**](https://github.com/htekdev/vidpipe). That is the CLI you actually install. There is also a [**htekdev/vidpipe-copilot-plugin**](https://github.com/htekdev/vidpipe-copilot-plugin) for driving the same pipeline from inside the GitHub Copilot CLI if that is your harness. The VidRecord and VidSpec layers below are conceptual stages inside the same tool. Treat them as how the work is organized rather than separate things to install.

**VidRecord** is the capture stage. It records your screen, your voice, and lets you switch between screens mid-recording without losing the take. The recordings get saved to a watched folder. The filename includes the GitHub issue number you are recording against. That filename is how the rest of the pipeline knows which idea this video closes.

**VidPipe** is the editor stage. It watches the recording folder. When a new file shows up, it runs the cut. The cut does four things: trims dead air and "uhs," produces a long-form edit, finds the three highest-energy moments and slices them as 30-60 second shorts, and generates platform-specific thumbnails using your brand colors and a consistent face placement.

**VidSpec** is the caption and metadata stage. It reads the cut video, transcribes it, and writes the YouTube description, the Shorts hook text, the LinkedIn post, the X thread, and any other platform-specific copy you have configured. It learns your style from a `voice.md` file in the repo. Same idea as the inbox triage agent's tone doc, applied to social copy.

The three stages talk to each other through the file system inside the sandbox. VidRecord drops a file. VidPipe picks it up, processes, drops the outputs in another folder. VidSpec picks those up and writes the metadata. A small posting service watches the final folder and pushes everything out. No API contracts to maintain. No queue infrastructure. Just folders.

### Step 3: Set Up Your Idea Backlog As GitHub Issues

This is the part that changes how you think about content.

Create a private GitHub repo called something like `content-backlog`. Every video idea is an issue. The title is the working title of the video. The body is two or three lines: what is the hook, what is the payoff, what is the call to action. Tags say which platform mix this is for: `youtube-long`, `shorts-only`, `linkedin-native`, etc.

Some examples of how an issue looks:

```
Title: "Why your AI keeps forgetting what you told it last week"
Body: Hook: agents have no memory by default. Payoff: how to give
yours a markdown second-brain in 20 minutes. CTA: link to second
brain blueprint.
Labels: youtube-long, shorts
```

```
Title: "I deleted 40 of my 47 cron jobs and nothing broke"
Body: Hook: half your automations are doing nothing. Payoff: a
3-question audit. CTA: subscribe.
Labels: shorts-only
```

You add ideas as they come. You do not need to write a script. You do not need to outline. The issue is just enough to remind you what you were thinking when you had the spark.

The agent reads open issues and surfaces them in three ways. A daily Telegram digest at 7 AM with the oldest 5 open issues, ranked by how long they have been sitting. A web dashboard inside your sandbox showing the queue. A nudge that pings you on Telegram if an issue has been open more than 14 days, asking "ship this or close it as won't-do?"

The discipline rule is one idea per issue. Resist the urge to put "and also a Short version" or "tie this to last week's video" in the body. If those are real ideas, open new issues. The agent's loop closure depends on one issue equals one shipped artifact.

### Step 4: Connect Late/Zeronia For Cross-Platform Posting

Late was the API that did the cross-platform publishing. They recently rebranded to Zeronia. Same product, same API, different name. Both names show up in the docs and in old code. Use whichever your account is on.

Sign up. Connect your platforms one at a time: YouTube, X, LinkedIn, Instagram, TikTok, Threads, Bluesky if you post there. Each one is an OAuth flow. Allow 20 minutes for the whole onboarding because some platforms throw weird auth challenges and you will end up on the phone with two-factor codes.

The agent posts through one API endpoint. You give it the video file, the caption, and the list of target platforms. It handles the rest. Each platform's quirks (caption length, hashtag rules, thumbnail format) are handled inside the API.

Test posting before you wire it into the pipeline. Pick a 30-second test video. Post it via the API to one platform first. Watch it land. Then test the multi-platform variant. Then delete the test posts. Now you trust the API.

The single-API-for-all-platforms move is what makes this whole thing tractable. Without it you would be writing six separate integrations and re-writing them every time a platform changes its API. With it you write one and let someone else worry about TikTok's monthly breakage.

### Step 5: Define Your Style

This is the second-highest-leverage 30 minutes after the SOUL.md file in the inbox blueprint. You write three small files that teach the pipeline what your stuff looks like.

**`brand.md`** for colors, fonts, thumbnail layout rules. "Primary color is #3B82F6. Headline font is Inter Bold. My face goes in the right third of the thumbnail. Headline text never exceeds 6 words." The agent uses this when generating thumbnails.

**`voice.md`** for how you write captions and descriptions. Tone, banned phrases, signature openings. Same shape as the SOUL.md from the inbox blueprint. Five real captions you wrote and were happy with goes a long way.

**`recipe.md`** for the editing recipe. "Cut all silence over 0.6 seconds. Cut all 'um' and 'uh.' Add a quick zoom on any sentence with a number. Add a 1-second outro card with my logo and 'subscribe' text." This is the file you tune the most over time. Start with five rules. Grow it weekly.

The first time you run the pipeline these files will be wrong. The second time they will be 70% right. By the fifth video they are tuned in and you stop touching them.

### Step 6: Record Your First Video With VidRecord

Pick the easiest open issue. Two or three minutes of content max. Hit record. Stop. Walk away.

VidRecord saves the file with the issue number embedded. VidPipe picks it up automatically. The progress dashboard inside your sandbox shows the cut happening: trimming, slicing shorts, generating thumbnails, writing captions. On a $24 box it takes about 8-12 minutes for a 5-minute raw recording.

You watch the long-form output. You watch the shorts. You eyeball the thumbnails. The first time, expect the cuts to be slightly off and the thumbnails to be slightly ugly. Tweak `recipe.md` and `brand.md`. Re-run the pipeline (it is one command). Watch again.

When it looks right, hit publish. The posting service pushes to every platform. Telegram pings you with the URLs. The agent comments on the original GitHub Issue with the published links and closes the issue.

You did not open six tabs. You did not open Premiere. You did not crop a thumbnail. You wrote an issue, you recorded the take, you watched the cut, you hit publish.

### Step 7: Watch The Pipeline Run End-To-End

The first week is observation week. Do not trust the auto-post yet. Run with `auto_publish: false` in the config. Every video gets cut, captioned, and queued, but the actual posting needs your one-tap approval on Telegram.

Look at the cuts critically. Are the shorts hitting the right moments or random ones? Tune the high-energy detection in `recipe.md` (volume threshold, words-per-minute spike, gesture detection if you have it).

Look at the captions. Are they in your voice or generic? Add three more sample captions to `voice.md` and re-run the pipeline on the same raw recording. Better? Keep going.

Look at the thumbnails. Are they consistent? Are your fonts right? Is your face in the same spot every time? Tune `brand.md`.

After a week of approve-each-post, flip the config to `auto_publish: true`. The posting happens unattended. You still get the Telegram ping with the links so you can spot-check after the fact. If something looks bad you delete the post and tune.

### Step 8: Tune The Recipe Weekly

Same Friday cadence as the inbox blueprint. 20 minutes per week.

1. **Review the week's posts.** Which short hit best? Why? Update the high-energy detector to favor that pattern.
2. **Review the closed issues.** Any issue close that should not have happened? (Wrong video matched to wrong issue.) Tighten the issue-number-in-filename convention.
3. **Prune `recipe.md`.** Any rule that has not fired in two weeks is probably dead. Delete it. Short recipes beat long ones.
4. **Add one new sample to `voice.md`.** Pick the caption you loved most this week. Drop it in.
5. **Skim open issues.** Any open more than 21 days? Either record them this week or close as won't-do. Stale issues poison the dashboard.

20 minutes a week. That is the entire ongoing cost of a pipeline that ships 8-15 pieces of content weekly without you opening a single tab.

## Lanes That Work

This blueprint fits anyone whose output is short videos plus the cuts and crossposts that go with them.

**Solo creators with day jobs.** You have 4 hours a week to do content, total. The pipeline gives you back the 3 hours you used to spend on post-production and posting. You spend those 3 hours recording instead. Output triples without adding a single working hour.

**Founders shipping build-in-public content.** You are already coding all day. Recording a 5-minute screen capture about what you just shipped is natural. The pipeline turns that capture into a YouTube long-form, three Shorts, an X thread, and a LinkedIn post. Your audience grows on autopilot while you keep building.

**Indie hackers documenting their journey.** Same pattern as build-in-public but pointed at one specific story arc. The GitHub Issues backlog becomes the chapter outline of your journey. Each closed issue is a chapter shipped.

**Agencies running multiple client channels.** The pipeline is a per-client deployment. Each client gets their own sandbox, their own `brand.md`, their own `voice.md`, their own GitHub Issues backlog. One operator can run 5-10 clients off the same template. The unit economics are obscene.

**Teachers and course creators.** Your raw lecture recordings become marketing. Record once for the course, the pipeline cuts a teaser short and a "best-of" reel for socials. The course itself stays gated. The pipeline-generated cuts are the funnel.

**Anyone with a "good ideas" doc that never gets shipped.** You know who you are. The pipeline plus the GitHub Issues idea management is the unstuck. The doc dies. The repo replaces it. The dashboard pushes the oldest unshipped idea in your face every morning until you record it or kill it.

What does not work: people who are not actually willing to record. The pipeline is end-to-end automation for everything except the recording itself. If you do not record, you have nothing to ship. The pipeline cannot fix the discipline problem. It can only remove the post-production excuse.

## What Changes After Setup

**Day 1.** You spend the day on Terraform and OpenShell. The sandbox boots. The policy file is restrictive. You do a hello-world recording with VidRecord just to confirm the file shows up where it should. Nothing publishes yet. You go to bed feeling like a serious person.

**Day 3.** The three repos are wired. The first real video runs through. The cuts are mediocre. The thumbnail looks like a college poster. You tune `brand.md` and `recipe.md`. Run two more videos that night. The second one is ugly but watchable. The third one is good.

**Week 1.** Four videos shipped. Each one took 12 minutes of attention from "stop recording" to "live on six platforms." You realize you have been holding back ideas because of the post-production tax. The dam breaks. You open 18 new GitHub Issues in a single sitting.

**Week 2.** First Short goes mildly viral. 28K views on the YouTube Short, which is more than your last 6 long-forms combined. You did not write the caption. The agent did. You did not crop the vertical. The agent did. You realize the leverage is real.

**Month 1.** You ship 11 videos. Three Shorts have over 10K views. Your follower count on three platforms is up materially. You have not opened Premiere or Final Cut once this month. You have not opened six platform tabs to crosspost once this month. You have spent your content time on what you actually like, which is recording.

**Month 3.** The closed-issues count is over 40. You can scroll back through them and see exactly what you have shipped, when, and where. The pipeline runs unsupervised. You record on a Tuesday and the videos are live by Wednesday morning. The Telegram pings start to feel routine.

**Month 6.** You go on vacation. You record three videos the week before. You schedule them through the pipeline's `publish_at` field. You are on a beach when the first one goes live. You see the Telegram ping. You read it. You go back to the beach. This is the moment you realize you have built a real piece of infrastructure, not a toy.

## Gotchas and Tips

**One idea per GitHub Issue. No exceptions.** The loop closure depends on a clean one-to-one between issue and shipped video. If you let yourself write "and also a follow-up short about X" in the body, the close logic gets confused, the agent closes the issue when only half the work is done, and the follow-up short never ships. New idea, new issue.

**Thumbnail style consistency beats thumbnail cleverness.** The agent will generate a thumbnail every time. The win is that they all look like yours. Do not change `brand.md` more than once a quarter. Viewers learn to recognize your thumbnails. Drift kills the recognition.

**Some videos should not become Shorts.** Tutorials with multi-step setup. Anything where the punchline only works after 90 seconds of context. Add a `no-shorts` label to issues you do not want sliced. Respect it. Bad shorts are worse than no shorts.

**The Late-to-Zeronia rebrand is a warning.** Anytime your stack depends on one third-party API, you are one rebrand or one acquisition away from a frantic weekend of rewiring. Keep your posting layer behind a thin wrapper of your own. When the API changes, you change one file. Do not let the third-party SDK leak into the rest of your codebase.

**Back up your Terraform state.** It is the most boring file in your stack and the most catastrophic to lose. State holds the link between your Terraform code and the actual cloud resources. Lose it, and `terraform apply` will try to recreate everything from scratch, possibly while the old resources are still running. Use a remote state backend (Terraform Cloud, S3, whatever). Set it up on day one.

**Do not record 90-minute monologues.** The pipeline can cut them but the cut quality drops fast past 15 minutes. Long recordings have more dead air, more "let me back up," more lost threads. Record in 5-12 minute takes. If a topic needs more, record it as a series and link them.

**Watch the policy file like a hawk.** Every time you add a new dependency to the agent, ask "does this need to call out to the internet?" If yes, that is a new entry in the allowlist, and it is a security review. If you can avoid it (use a local package, self-host the dependency, etc.) do that instead. The policy file is small for a reason. Keep it small.

**Telegram for notifications, not for control.** Use Telegram to know what the pipeline did. Do not build a Telegram bot that can trigger publishes or change configs. The blast radius if your Telegram is compromised should be near zero. Read-only pings, nothing else.

**Keep the sandbox stateless except for the workspace volume.** Everything except your raw recordings, brand files, and GitHub Issues data should be reproducible from the repo. If your box dies, you should be able to redeploy from `main` and lose nothing important. Test this monthly. Actually destroy the dev box and redeploy. If anything is missing, that is a state-leak you need to fix.

**The recipe file is your most expensive artifact.** Like the SOUL.md from the inbox blueprint. Check it into a private repo. Back it up. Treat it like the secret sauce it is. A six-month-tuned `recipe.md` is what separates "AI-generated cuts that look AI-generated" from "cuts indistinguishable from a human editor."

**Do not let the agent post your face to platforms you have not okayed.** The default config should be "post to YouTube and X only." Adding Instagram, TikTok, and the rest should be explicit, per-platform, after you have seen the platform-specific output and approved it. Auto-posting your face to a TikTok format you have never seen is how you become a meme.

**Resist the urge to record from inside the sandbox.** Recursive demos are fun but in production it gets fragile. Record on your local machine. Drop the recording into the watched folder via a sync. Keep the sandbox doing one thing: processing and posting. Recording in production sandboxes is for the demo video, not the everyday pipeline.

**The pipeline cannot fix bad ideas.** It can ship a bad idea to six platforms in ten minutes. That is not always good. Spend more time on the issue body than you think you should. The two minutes you put into framing the hook before recording is the two minutes that decides whether the video does anything.

---

## Keep Reading

- **[Post on X and LinkedIn Every Day Without Being a "Content Person"](/blueprints/daily-content-machine/)**. The text-first cousin to this blueprint. Same idea management pattern, different output format. Pair them and you have a video plus text engine running off the same backlog.
- **[Grow a Newsletter With AI Agents Across 4 Social Channels](/blueprints/newsletter-growth-machine/)**. Bolt this on after your video pipeline is humming. Every closed issue becomes an item in a weekly newsletter the agent assembles for you. Distribution gets compounding.
- **[The One-Person Agency: Charge Agency Rates as a Solo Operator](/blueprints/one-person-agency/)**. If the per-client deployment idea in "Lanes That Work" caught your eye, this is the blueprint that turns it into a business. Five clients, one operator, agency margins.
