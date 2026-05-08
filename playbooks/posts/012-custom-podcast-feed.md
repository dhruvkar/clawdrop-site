---
layout: playbook.njk
title: "His AI Builds Him a 30-Minute Podcast Every Morning. From the 50 Podcasts He'll Never Have Time to Listen To."
description: "Ryan Eade was losing 45 minutes a morning to AI newsletters and a podcast queue he could never finish. So he built an OpenClaw agent that distills 50 podcasts and dozens of newsletters into a single 30-minute custom audio digest, every day, on a $24/month VPS. The whole thing rides on the ElevenLabs free tier. Here's the stack."
date: 2026-05-05
difficulty: Intermediate
cost: "$24/month VPS + $0 ElevenLabs free tier (or $5/mo for more audio)"
timeToSetup: "A weekend to wire it, a week to tune the source list"
originalSource: "https://www.youtube.com/watch?v=0TpDF_ihFdE"
originalAuthor: "Ryan Eade (via NC Tweener Talks)"
originalAuthorUrl: "https://www.youtube.com/watch?v=0TpDF_ihFdE"
issueNumber: 12
permalink: /playbooks/custom-podcast-feed/
tags:
  - podcast
  - elevenlabs
  - audio
  - newsletters
  - daily-digest
  - openclaw
  - personal-productivity
  - founder-ops
  - solopreneur
  - parks-and-rec
---

## Tools

- [**OpenClaw**](#aff-openclaw): agent runtime running the nightly digest skill on the VPS
- [**ElevenLabs**](#aff-elevenlabs): text-to-speech that turns the script into a 30-minute mp3
- [**DigitalOcean**](#aff-digitalocean): $24/month droplet hosting the always-on agent
- [**Substack**](#aff-substack): newsletter source via RSS
- [**Beehiiv**](#aff-beehiiv): alternative newsletter source via RSS
- [**Whisper**](#aff-whisper): transcribes podcast audio for the agent to score and digest
- [**YouTube**](#aff-youtube): channel transcripts as a source feed
- [**Gmail**](#aff-gmail): dedicated inbox for newsletters that refuse to expose RSS
- [**Slack**](#aff-slack): alternate delivery surface and per-agent channel split
- [**Telegram**](#aff-telegram): original delivery and notification surface

## What You'll Build

A 30-minute audio show, made fresh for you, dropped to your phone every morning before you wake up.

It pulls from every podcast you wish you had time for, every Substack you skim and feel guilty about, every YouTube channel you subscribed to and stopped watching. An AI agent reads, watches, and listens to all of it overnight. It picks the parts that matter to you specifically. It writes a script in your voice. ElevenLabs turns that script into clean audio. By 6 AM you have a personalized morning show waiting.

Concretely, the agent does four jobs every night. It pulls fresh content from every source you registered. It scores each item against a short taste document you wrote about what you care about. It compiles the survivors into a flowing 30-minute script with smooth transitions. It generates the audio and drops the file somewhere your phone can find it.

The operator this playbook is based on, Ryan Eade, used to spend 45 minutes every morning trying to keep up with the AI cycle. He now spends zero. He listens to his own custom show during his first walk of the day. He runs the whole stack on a $24-a-month DigitalOcean droplet and the ElevenLabs free tier. No app store. No subscription to a "podcast summarizer" SaaS. Just his own agent, his own taste, his own voice if he wants it.

You walk away with: a personal radio station tuned to exactly your interests, the end of newsletter guilt, and the strange new luxury of being caught up.

## Why The Morning Reading Pile Wins

Your podcast queue is not a podcast queue. It is a debt.

Every Monday a new batch of episodes drops. The AI shows alone produce 50-plus a week now. A serious operator's reading list runs another 30 newsletters, half a dozen Substacks, a YouTube subs feed that thinks you have eight free hours a day, and a Twitter list that never sleeps.

You cannot listen to all of it. You cannot read all of it. But you also cannot ignore it, because your work depends on knowing what just shipped.

So most mornings look like this. You wake up. You open Twitter and scroll for ten minutes. You open your inbox and skim three newsletters, half-reading. You see a podcast someone recommended and add it to a list you will not return to. You sit down to actually work and you have already burned 45 minutes and absorbed almost nothing.

Ryan said it plainly. "I get hundreds of podcasts and newsletters. I spend about 45 minutes in hard mornings just keeping up." That is most of an hour, every day, gone to anxious skimming.

The math gets uglier when you scale it. Forty-five minutes a day is five and a half hours a week. That is most of a working day, every week, lost to the feeling of falling behind. And the worst part is you do not even retain it. You skim, panic, close the tab, repeat tomorrow.

The fix is not "read less." The fix is "read better." You need a system that does the skimming for you, distills it down to what actually matters in your specific lanes, and gives it to you in the format you can actually consume.

For Ryan, that format is audio. He walks in the morning. He drives. He cooks. Audio fits where reading does not. So he built a 30-minute show that plays during the parts of the day that were already happening anyway.

The cost of zero. The output is a personal NPR. The newsletter guilt closet finally closes.

## The Pattern

The whole loop runs once, overnight, while you sleep.

```
[1] PULL
    -> RSS feeds, Substack, YouTube transcripts, podcast feeds
    -> dump everything new from the last 24 hours into a buffer
         |
         v
[2] FILTER
    -> read taste.md (what I care about, what I skip)
    -> score each item, drop the bottom 70%
         |
         v
[3] DISTILL
    -> for each survivor, pull the one or two real ideas
    -> dedupe across sources (the same news hit five places)
         |
         v
[4] SCRIPT
    -> stitch into a 30-minute flowing monologue
    -> intro, three or four segments, sign-off
         |
         v
[5] VOICE
    -> ElevenLabs reads the script (free tier = 30 min/day)
    -> output a clean mp3
         |
         v
[6] DELIVER
    -> drop file to phone via private podcast feed, Slack, or Drive
    -> ready before you wake up
```

The leverage point is step 2. Filter is where your taste lives. Get the taste doc right and the rest of the pipeline is plumbing. Get it wrong and you have a 30-minute show full of stuff you do not care about.

## Step-by-Step Setup

### Step 1: Stand Up An OpenClaw VPS

You need a small always-on server. Ryan's stack runs on a $24-a-month DigitalOcean droplet. You can go cheaper. A $6 droplet works fine for one person. The $24 box gives you headroom for multiple agents.

You do not run this on your laptop. The job runs at 4 AM. Your laptop is asleep at 4 AM. Pay the six bucks and stop thinking about it.

Install OpenClaw on the box. Add a single cron job that fires at 4 AM your local time and runs the daily digest skill.

That is the entire infrastructure. There is no Kubernetes here. There is no message queue. There is one cheap Linux box and one cron line.

### Step 2: Connect Your Sources

This is the part that takes a Saturday morning. You are going to register every place your reading lives.

The four source types worth wiring:

- **RSS and Atom feeds.** Most newsletters expose one even if they do not advertise it. Substack does. Beehiiv does. Ghost does. Your agent fetches the latest items each night.
- **Podcast feeds.** Every podcast has an RSS feed with audio enclosures. Your agent grabs the audio, transcribes it (Whisper or the OpenClaw audio skill), then treats the transcript like any other text source.
- **YouTube channels.** YouTube auto-generates transcripts for almost every video. Your agent pulls the transcript and skips the audio download entirely. Much faster.
- **Email newsletters that refuse to expose RSS.** Make a dedicated Gmail address. Subscribe with that address. Have the agent read the inbox each night and treat each email as a "feed item."

Aim for 30 to 60 sources to start. Less than 30 and your show is thin on the days when nothing happens. More than 60 and your filter has to do too much work.

### Step 3: Write Your Taste Document

This is the highest-leverage 20 minutes you spend on this build. You write one short markdown file that teaches the agent what you actually care about.

```markdown
# My Taste

## Topics I Care About
- AI agent infrastructure and OpenClaw specifically
- Voice AI (ElevenLabs, Cartesia, conversation design)
- Founder-operator stories with real numbers
- B2B SaaS pricing experiments
- The economics of one-person businesses

## Topics I Skip
- LLM benchmark drama (unless a model genuinely shipped)
- Crypto and token launches
- Politics, sports, entertainment news
- Generic "future of work" essays with no data
- Anything that mentions "synergy" or "leverage"

## What Makes Something Worth A Spot
- Specific numbers (revenue, costs, time, tokens)
- A real person's name attached to a real outcome
- A pattern I have not seen elsewhere this week
- Something I can act on in the next seven days

## What Earns An Instant Cut
- Press release reformatted as journalism
- An idea I have already heard three times this month
- Anything that is just a screenshot of a tweet
- Sponsored content disguised as analysis

## My Voice For The Script
- Conversational. Two operators talking over coffee.
- Short sentences. No corporate phrasing.
- Lead with the surprise, then explain it.
- Sign off the same way every day: "That's your thirty. See you tomorrow."
```

Keep it under 600 words. Long taste docs confuse the agent. The "what earns a cut" section is where most operators leave the most leverage on the table. Be brutal there. The cuts matter more than the inclusions.

### Step 4: Wire ElevenLabs For Voice

Sign up for ElevenLabs. The free tier gets you about 10,000 characters a day, which is roughly 30 minutes of audio at conversational pace. That is the whole budget for one daily show.

Pick a voice. You have three real options:

- **Stock voice.** Free. Sounds professional. The default. Ninety percent of people should start here.
- **Cloned voice.** Five minutes of your own speech becomes a voice profile. Now the show sounds like you. Slightly uncanny on day one, completely normal by day three.
- **Cloned voice of someone you admire.** Tempting. Legally fraught. Skip.

Set the speaking pace one notch slower than default. The default ElevenLabs pace is too fast for morning listening. You want to absorb, not race.

If 30 minutes is not enough, the $5 paid tier gets you about 100,000 characters a month. That is plenty for a daily 30-minute show plus weekend specials.

### Step 5: Decide Your Delivery

The audio file has to land somewhere your phone will play it. Four options, in rank order of how much they actually get used:

- **Private podcast feed.** Your agent writes an RSS feed file with one episode per day. You subscribe in your podcast app of choice (Overcast, Pocket Casts, Apple Podcasts). The show shows up like any other podcast. Best experience by a mile.
- **Slack channel.** The agent drops the mp3 into a dedicated channel. You play it from the Slack app. Works, but Slack is not built for audio playback.
- **Email with attachment.** Robust. Survives every other failure mode. Mediocre on phones.
- **Google Drive folder.** The agent uploads the file. You open Drive on your phone and play. Works but feels janky.

The private podcast feed is the answer. Your phone is already wired to play podcasts at 7 AM during a walk. Make your custom show fit that habit instead of fighting it.

Ryan started on Telegram for delivery and outgrew it. He moved to Slack for the multi-agent setup. For pure listening, a private RSS feed beats both.

### Step 6: Tune The Source List Weekly

The agent will only ever be as good as the sources you feed it. The taste doc is week one work. The source list is forever work.

Every Sunday, 15 minutes:

1. **Look at last week's seven shows.** Which segments were the best? Where did the good stuff come from? Add more sources like that.
2. **Cut the dead weight.** Any source that has not contributed a single segment in two weeks is probably noise. Remove it.
3. **Add one new source.** Someone you saw recommended this week, a new newsletter you bookmarked, a podcast a friend mentioned. One per week. The list grows slowly and stays sharp.
4. **Update the taste doc with one new "skip."** Whatever annoyed you most this week becomes a permanent rule. Make the filter sharper every week.

Fifteen minutes a week. That is the entire ongoing cost of a show that was costing you 45 minutes a morning.

### Step 7: Optional Multi-Agent Split For Different Shows

This is where Ryan's setup goes from neat to actually transformative.

He does not run one agent. He runs four. Each is named after a Parks and Recreation character. Each owns a different lane.

- **Ron** owns personal life management. Calendar, errands, household.
- **April** is dev and QA. Code reviews, ticket triage, deploy babysitting.
- **Ben** is research and finance. Numbers, analysis, the boring spreadsheet work.
- **Leslie** is content and strategy. Writing, brand, the long-arc thinking.

Each agent has its own Slack channel. Ryan moved from Telegram to Slack specifically because context was bleeding across topics. One channel per project gives the agent dedicated context. Slack threads keep sub-conversations contained.

For the podcast specifically, you can split it the same way. One show on AI news (10 minutes). One show on customer research (10 minutes). One show on personal stuff (10 minutes). Three short shows feel different from one long show. Some people prefer it.

Start with one show. Add the split only if you actually feel one show is the wrong shape. Most people do not need it.

## Lanes That Work

This playbook fits anyone whose job runs on staying current and whose time runs out before the reading does.

**Founders and solo operators in fast-moving fields.** Primary audience. AI, crypto, biotech, frontier hardware. The stuff happening this week genuinely matters. Falling two weeks behind is a real problem. The 30-minute morning show keeps you tracking the pulse without burning the morning.

**Knowledge workers in technical roles.** Senior engineers, ML researchers, product folks at AI companies. You are paid in part for taste about what is happening in your field. Maintaining that taste used to require a one-hour reading habit. Now it does not.

**Substack guilt closet sufferers.** You subscribed to 40 newsletters in 2024. You read maybe three. The rest sit in your inbox accumulating shame. The agent reads them all. You hear the parts that are worth hearing. The closet closes.

**Parents with commutes or morning chores.** You have 30 minutes of windshield time or 30 minutes of dish time. You are not going to read during that window. Audio fits exactly where the gap is.

**Investors and angels.** You need to track 50 portfolio companies and 100 sectors. The morning show gives you a finger on the pulse without making you read 30 newsletters yourself.

What does not work: anyone whose reading load is under five sources a day. The setup overhead exceeds the savings. You can just read your five sources.

What also does not work: anyone who needs to deeply read source material. The show is a trail map, not the trail. You will still want to read the original article if something hits. The show points you to the right ones to actually open.

## What Changes After Setup

**Day 1.** You spin up the droplet, install OpenClaw, write the taste doc, and register 30 sources. You run the agent manually once to test. You get a 30-minute mp3 back. It is decent. You hear three things you did not know.

**Day 3.** The cron job has fired three times. You have listened to two of three shows. The third you skipped because you slept in. You do not feel guilty about it. There will be another one tomorrow.

**Week 1.** You have noticed the show is best on Tuesday and Wednesday because Monday's drops feed it well. You have cut four dead sources and added two new ones. You have stopped opening Twitter in the morning because you already heard everything that mattered.

**Week 2.** Someone asks you "did you see what shipped from Anthropic this week?" You did. You heard it on Tuesday's show. You are now ahead of people who spend an hour a morning skimming.

**Month 1.** You stop checking newsletters in your inbox during the day. You trust the morning show to surface what matters. The stack of unread Substacks shrinks because you stopped feeling guilty about them. The taste doc has been edited four times and is sharper than week one.

**Month 3.** You take a five-day trip and skip listening. You come back, listen to one episode of the daily show on day six, and feel completely caught up. The agent did the keeping-up for you. This is the moment you realize you bought your mornings back permanently.

## Gotchas and Tips

**Source diversity beats source volume.** Five great newsletters in five different lanes beats fifteen newsletters all covering AI news. Diversity is what makes the show feel like a real briefing instead of a remix of yesterday.

**Pick a stock ElevenLabs voice for week one.** Do not waste day one on voice cloning. Get the pipeline working with a default voice. Clone yourself in week three once everything else is dialed in.

**Keep the taste doc under 600 words.** Long taste docs confuse the agent and make filtering inconsistent. Short, sharp, brutal cuts list. Edit the doc every week, do not extend it.

**When ElevenLabs runs out, fall back to a text digest.** Some days you will exceed the free tier (long news days, multiple episodes). Have the agent fall back to emailing you a written digest instead of skipping the day. A 5-minute read is better than a missed show.

**Watch the copyright line.** The agent should summarize and synthesize, never narrate someone else's article verbatim. Ten percent direct quote, ninety percent your agent in your voice. That is fair use territory. Word-for-word recitation of a paywalled Substack is not.

**Time the cron for your actual morning, not "early."** If your walk is at 7 AM, render at 5 AM. If your commute is at 8:30, render at 6:30. ElevenLabs takes 5-10 minutes to generate 30 minutes of audio. Build the buffer.

**Dedupe aggressively across sources.** When OpenAI ships something, every newsletter covers it that morning. Without a dedupe step, your show repeats the same news five times in 30 minutes. Tell the agent to merge overlapping items into one segment.

**Match the script length to the audio budget, not the content volume.** Some days there is six hours of source material. Resist the urge to make a longer show. Thirty minutes is a feature, not a constraint. The discipline of cutting is what makes it good.

**Save every script as text.** Audio is hard to search. The script is searchable. Six months from now you will want to look up "what did the show say about that pricing experiment in May," and the saved scripts make that a one-line grep.

**One agent, one Slack channel.** If you do the multi-agent split, give each agent its own dedicated channel. Ryan's biggest insight from his Telegram-to-Slack move was that context bleed between topics is what kills agents. Hard separation, one channel per agent, is the fix.

**Skip the audio entirely on weekends.** Most operators do not want a Saturday morning show. They want to actually read this weekend. Set the cron to fire Monday through Friday only. The agent gets a break. So do you.

**The first three shows will be mediocre.** That is normal. The taste doc has not been tuned. The source list is too broad. The voice is the default. Do not bail. By show seven it will be sharp. By show fifteen it will be one of the best things on your phone.

---

## Keep Reading

- **[Your AI Remembers Everything So You Don't Have To](/playbooks/ai-second-brain/).** The memory layer that pairs perfectly with the morning show. Whatever the show surfaces, the second brain catches and saves for later.
- **[Build an AI Life OS That Knows Your Entire Day (Before You Do)](/playbooks/ai-life-os/).** Same operator philosophy, broader scope. Your morning show is one slice of the larger Life OS pattern.
- **[He Let an AI Triage 180 Emails a Day. Here's the Stack.](/playbooks/inbox-triage-agent/).** The other half of the morning. Triage handles the inbox while the show handles the reading queue. Together they buy back the entire first hour of your day.
