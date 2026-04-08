---
layout: blueprint.njk
title: "Give Your AI a Second Brain That Gets Smarter Every Day ($0/Month)"
description: "Build a personal knowledge base using Karpathy's LLM wiki method. Markdown files + Obsidian + Claude Code. Your AI remembers everything you've ever read, saved, or learned. Zero cost, 10 minutes to set up."
date: 2026-04-08
difficulty: Beginner
cost: "$0/month"
timeToSetup: "10-15 minutes"
originalSource: "https://www.youtube.com/watch?v=lnsExa1UbnM"
originalAuthor: "Julian Oczkowski (AI for Work)"
originalAuthorUrl: "https://www.youtube.com/@aiforwork_app"
issueNumber: 7
permalink: /blueprints/ai-second-brain-karpathy/
tags:
  - knowledge-management
  - second-brain
  - obsidian
  - productivity
  - solopreneur
  - claude-code
  - karpathy
---

## What You'll Build

A personal knowledge base that makes your AI smarter every single day. Not a chatbot. Not a RAG pipeline. Just a folder of plain text files that your AI reads, organizes, and connects automatically.

You clip an article about your industry. You save notes from a podcast. You drop in a competitor's pricing page. Your AI reads all of it, links related ideas together, and builds a living knowledge graph that grows over time.

Next time you ask your AI to write a proposal, plan a campaign, or research a market, it doesn't start from zero. It draws on everything you've ever saved. It remembers what you've forgotten. It connects dots you didn't know existed.

This is Andrej Karpathy's "LLM wiki" method. Karpathy is the guy who built Tesla's self-driving AI. When he shares how he organizes knowledge for AI, people pay attention. His approach went viral because it's almost stupidly simple: markdown files in a folder. No databases. No vector embeddings. No monthly subscription. Just files.

The concept blew up across YouTube in April 2026, with Nate Herk's 2-minute take pulling 27,000 views and Julian Oczkowski's full tutorial hitting 3,000+ views, both within days of posting.

## Why This Matters for Your Business

Every conversation you have with AI starts from scratch. You explain your business, your audience, your tone, your preferences. Every. Single. Time.

It's like hiring someone new every Monday morning and spending the first hour re-training them on everything the last person knew. Except this happens dozens of times a day.

A second brain fixes that permanently. Here's what changes:

**Before (no second brain):**
- "Write me a blog post about X" and the AI produces generic content that could be for anyone
- You spend 30 minutes giving context before the AI can do anything useful
- Every session is a blank slate

**After (with second brain):**
- "Write me a blog post about X" and the AI already knows your industry, your competitors, your audience, your voice, and your past content
- The AI references articles you saved three months ago that are suddenly relevant
- Every session builds on everything that came before

The difference compounds. After a month, your AI knows more about your business than most employees. After six months, it's like having a research department that never forgets anything.

## The Setup (10 Minutes, Seriously)

### What You Need

- **Obsidian** (free): a note-taking app that stores everything as local markdown files
- **Obsidian Web Clipper** (free): a browser extension that saves any webpage into your vault
- **Claude Code** (or any AI with file access): reads and organizes your vault
- A computer. That's it.

### Step 1: Install Obsidian

Download Obsidian from [obsidian.md](https://obsidian.md/). Create a new vault. Call it whatever you want. "Brain," "Wiki," "Knowledge." Doesn't matter.

Create three folders inside:

```
/raw          ← stuff you clip from the web, unprocessed
/organized    ← cleaned up, linked, categorized notes
/projects     ← active work that references your knowledge
```

That's your entire infrastructure. Three folders.

### Step 2: Install Web Clipper

Add the [Obsidian Web Clipper](https://obsidian.md/clipper) extension to your browser. When you read something worth saving, hit the clipper button. It drops the full article into your `/raw` folder as a markdown file.

Start clipping anything relevant to your work:
- Industry articles and reports
- Competitor websites and pricing pages
- Social media posts with insights
- Podcast summaries
- Customer reviews and testimonials
- Product documentation
- Anything you'd normally bookmark and forget about

### Step 3: Let Claude Code Organize It

Open Claude Code (or your AI tool of choice) and point it at your Obsidian vault. The original tutorial uses a setup script from the [karpathy-llm-wiki](https://github.com/julianoczkowski/karpathy-llm-wiki) repo that handles the initial configuration.

Once connected, ask your AI to:

1. **Ingest** the raw folder. It reads everything you've clipped.
2. **Organize** the content. It moves processed notes from `/raw` to `/organized`, adding tags, summaries, and links to related notes.
3. **Build connections.** This is the magic. The AI finds relationships between notes you didn't see. That article about pricing strategy links to the competitor analysis you saved last week, which connects to the customer feedback about value perception.

In Obsidian's graph view, you can literally see your knowledge base as a web of connected ideas. The more you feed it, the denser and more useful the web gets.

### Step 4: Use It Every Day

The system only works if you feed it. Make it a habit:

**Morning:** Clip 2-3 articles from your industry reading. Takes 30 seconds each.

**During work:** When you research something, save the sources into your vault instead of closing the tabs.

**End of day:** Drop in any notes, meeting summaries, or ideas. Even rough bullet points are fine. The AI will clean them up.

**When you need the AI:** Just ask. "What do we know about [competitor]?" or "Summarize everything we have on [topic]." The AI searches your vault and gives you answers grounded in your own curated knowledge, not generic internet content.

## Built-In Quality Control

The setup includes two features that keep your knowledge base healthy:

**Health checks:** Run a health check to find orphaned notes (not linked to anything), stale content (hasn't been referenced in months), and duplicates. Think of it as defragging your brain.

**Lint:** Like a spell-checker for your knowledge structure. Catches broken links, missing tags, and formatting issues. Keeps everything clean as the vault grows.

**Hot cache:** Frequently accessed notes stay prioritized so your AI doesn't waste time searching through thousands of files when you ask about something you reference daily.

## Who This Is For

This works for basically anyone who reads, researches, or needs to stay informed for their job. But it's especially powerful for:

**Solopreneurs and consultants:** Your knowledge IS your product. A second brain means your proposals, content, and client advice are informed by every article, case study, and insight you've ever encountered.

**Content creators:** Never stare at a blank page again. Your vault is full of ideas, research, and connections waiting to be turned into content.

**Agency owners:** Build a shared vault for your team. Institutional knowledge stops walking out the door when someone leaves.

**Sales and marketing:** Every competitor mention, market trend, and customer insight lives in one place. Your pitches get sharper because they're built on accumulated intelligence.

**Researchers and analysts:** Stop re-doing research you've already done. Search your vault before you search the internet.

## What Makes This Different

You might be thinking: "I already have Notion / Evernote / Google Drive full of notes I never look at."

The difference is the AI layer. A folder of notes is a graveyard. A folder of notes connected to an AI that reads, links, and retrieves them on demand is a living system.

Traditional note-taking apps store information. This system uses information. Every note you add makes every future AI interaction better. That's the compounding effect Karpathy was going for.

And because it's all local markdown files, you own everything. No vendor lock-in. No subscription. No data leaving your machine. If Obsidian disappears tomorrow, your files still work in any text editor.

## Scaling Up

**Start small.** Don't try to clip your entire browsing history on day one. Start with 5-10 articles about your core business. Let the AI organize them. See the connections. Then gradually expand.

**Create domain vaults.** If you work across multiple areas, consider separate vaults: one for your industry, one for marketing knowledge, one for client-specific research. Or use folders within a single vault. Whatever keeps things findable.

**Set up scheduled ingestion.** Once you're comfortable, have your AI run a nightly job that processes everything in `/raw`, organizes it, and sends you a summary of new connections it found. Wake up to a smarter brain every morning.

**Share with your AI across tools.** The vault is just files. Any AI tool that can read local files can access your knowledge base. Claude Code, OpenClaw agents, custom scripts. The knowledge is portable.

## Gotchas and Tips

- **Clip generously, organize lazily.** The AI handles organization. Your job is just to feed it raw material. If you find yourself spending more than 10 seconds deciding whether to clip something, just clip it. Let the AI sort it out.
- **Don't over-structure at the start.** Three folders is enough. You'll naturally develop a structure as your vault grows. Premature organization is the enemy of actually using the system.
- **The graph view is motivating.** Seeing your knowledge web grow visually is surprisingly addictive. Use it as motivation to keep feeding the system.
- **Quality in, quality out.** If you only clip clickbait listicles, your AI's knowledge base will be shallow. Clip substantive, high-quality sources. Your AI is only as smart as what you feed it.
- **It takes about 2 weeks to click.** The first few days feel pointless because the vault is too small to be useful. Stick with it. Around the 50-note mark, the connections start getting interesting. Around 200 notes, it becomes genuinely indispensable.
- **Back up your vault.** It's just a folder. Put it in Dropbox, iCloud, or a Git repo. These files are your accumulated knowledge. Treat them accordingly.

---

## Keep Reading

- **[The One-Person Agency](/blueprints/one-person-agency/)** — Pair your second brain with a service business and deliver agency-quality work as a solo operator.
- **[Build a 7-Agent Marketing Team](/blueprints/ai-marketing-team/)** — Give each of your marketing agents access to your knowledge base for smarter content and campaigns.
