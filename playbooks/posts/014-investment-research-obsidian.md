---
layout: playbook.njk
title: "Build Your Own Bloomberg Terminal with Obsidian and Claude"
description: "An equity analyst who ran $60M in a direct-stock portfolio rebuilt his research stack on Obsidian plus Claude. Every article, earnings call, and market thread he's ever read is now one chat query away. The setup replaces the $24K/year Bloomberg seat for independent analysts."
date: 2026-05-20
difficulty: Beginner-Intermediate
cost: "$10-30/month (Obsidian Sync optional, Claude API for queries)"
timeToSetup: "An afternoon for the vault + MCP, a few weeks to populate it with research that matters"
originalSource: "https://www.youtube.com/watch?v=-PuIwRbZ0n8"
originalAuthor: "Shubham (Alpha with AI)"
issueNumber: 14
permalink: /playbooks/investment-research-with-obsidian/
tags:
  - investment-research
  - equity-analysis
  - finance
  - knowledge-management
  - obsidian
  - independent-analyst
---

## Tools

- [**Obsidian**](#aff-obsidian): the local-first markdown vault that holds every note, article, and transcript
- [**MCPVault**](#aff-mcpvault): open-source MCP server that gives Claude structured, frontmatter-aware access to your Obsidian vault
- [**Claude Code**](#aff-claude-code): the chat interface where you query the entire research library
- [**Anthropic**](#aff-anthropic): Claude API powering the queries

## What You'll Build

A research stack that turns every article you've ever read, every earnings call you've taken notes on, every sell-side report you've annotated, every conversation with a fellow investor, into **one queryable knowledge base** that Claude reads on demand.

Three pieces wired together:

1. **Obsidian** holds everything you've ever read or written about the markets, locally, in plain markdown files you own forever.
2. **MCPVault** is a small piece of free software that makes the vault readable by Claude.
3. **Claude Code** is the chat where you ask questions that span years of your research.

Sample queries the setup lets you answer in 5 seconds instead of an afternoon:

- *"Pull everything I've written about supply-chain risk at AAPL in the last three years."*
- *"What did management say about pricing power in the last four MSFT earnings calls?"*
- *"Find every time I flagged a stock as overvalued and then it doubled. What did I miss?"*
- *"Give me the bear case across my notes on NVDA, plus every counter-argument I logged."*
- *"Which of my long ideas from 2024 are still active and which did I quietly drop?"*

This is what a Bloomberg seat costs $24,000 a year to give you, except yours is built on your own thinking.

## Why This Works

The hard part of being a good investor is not reading. It is *remembering what you read*, six months later, when it matters.

Every analyst has the same workflow problem. You spend hours reading a 10-K, take notes in Notion. You watch an earnings call, drop highlights into a Google Doc. You exchange a thoughtful email with a friend about a position, the email is forgotten in your inbox forever. You annotate a sell-side PDF that lives in your downloads folder until your laptop dies.

By the time the position matters — when the stock drops, when an earnings event approaches, when a competitor's news hits the tape — the research is *somewhere*. You just cannot find it. You re-read the 10-K. You re-watch the earnings call. The work compounds slowly because every retrieval is starting from scratch.

The fix is two parts. **One**, get every piece of your research into one local, durable, plain-text vault. Obsidian is the right answer here because the files are yours forever, the format will outlive any subscription, and the tagging is rich. **Two**, put an AI on top of the vault that can read across years of notes in seconds.

That second part is what changed in the last twelve months. Claude with an MCP connection to Obsidian doesn't just search the vault — it *reads* it, synthesizes across notes, and gives you the through-line.

An analyst who builds this stack is not just faster. They are working with leverage their younger self did not have. Every note from five years ago is still alive. The mistakes are catalogued. The good calls are documented. The themes the analyst saw before anyone else are searchable by the analyst who saw them.

This is what compounding research actually means.

## How the Three Pieces Fit Together

### Layer 1: Obsidian as the Vault

Obsidian is a free local-first markdown editor. Every note is a plain `.md` text file in a folder on your machine. No cloud lock-in. No SaaS that can change pricing on you. No vendor that can delete your archive.

You organize your vault into folders that match how you think about the market. A reasonable starting structure:

```
/Vault/
  /Companies/
    AAPL.md
    MSFT.md
    NVDA.md
  /Themes/
    AI infrastructure.md
    EV adoption.md
    Healthcare cost compression.md
  /Earnings/
    2026/Q1/AAPL Q1 2026 notes.md
  /Reading/
    2026-05-15 Stratechery on TSMC.md
    2026-05-12 Damodaran NVDA valuation.md
  /Conversations/
    2026-05-10 lunch with Vikram (oil thesis).md
```

The folders matter less than the **frontmatter** on each note. Frontmatter is the small block of metadata at the top of every markdown file:

```yaml
---
ticker: AAPL
event: earnings
date: 2026-04-25
sentiment: bullish
themes: [pricing-power, services-mix, gross-margin]
sources: [10-Q, earnings-call]
---
```

This metadata is what makes the vault queryable. Every note is tagged. Tags are searchable. The AI can filter on them.

### Layer 2: MCPVault Reads the Vault

MCPVault is a free open-source MCP server. You install it once. It runs on your machine alongside Obsidian. It exposes a small set of tools that let Claude:

- Read any note by path.
- Search across all notes by keyword.
- Filter notes by frontmatter (e.g. *"every note where ticker is AAPL"*).
- Read all notes that link to a specific note (Obsidian's backlink graph).
- Write new notes back into the vault when you want Claude to capture a synthesis.

The point is structured access. A plain "read files" tool would dump 47 raw markdown files into Claude's context and burn through tokens. MCPVault parses the frontmatter, returns structured records, and only sends the parts of notes that match the query. The token efficiency is the difference between this being usable and being unusable.

### Layer 3: Claude Code on Top

Claude Code is the chat interface where you do the work. With the MCP connection live, every question you ask is grounded in your actual vault.

The way a session looks:

- *"NVDA reports tomorrow. Pull my last three notes on the stock and summarize what I'm watching for."* Claude reads the three latest dated notes tagged `ticker: NVDA`, summarizes them, and gives you a focused pre-earnings briefing.
- *"During the call, I'll be watching for commentary on data-center growth, gross-margin, and inventory. Set up a template."* Claude generates a markdown template in your vault for the live notes.
- *"Here are my live notes from the call."* You paste them into the template. Claude reads them, compares against the prior three notes, flags what changed.
- *"Write a synthesis note for the vault."* Claude writes a new file into `Earnings/2026/Q2/NVDA Q2 2026.md` with proper frontmatter, links to the prior notes, and tags the themes you flagged.

The whole loop runs inside a single chat. The vault gets richer with every cycle.

## Step-by-Step Setup

### Step 1: Install Obsidian and Create the Vault

Obsidian is free for personal use. Download it. Create a new vault — call it whatever you want (`Research`, `Markets`, `Investing`). Save the vault folder somewhere durable (a local SSD is fine; iCloud Drive or Dropbox work for cross-device sync but are slower).

Pick a folder structure that matches your thinking. The structure above (Companies / Themes / Earnings / Reading / Conversations) is a reasonable starting point. Don't overthink it. Folders are easy to refactor later because Obsidian rewrites every cross-link automatically.

### Step 2: Establish Your Frontmatter Schema

This is the most important decision in the entire setup. Spend an hour deciding what every note will be tagged with. A starting schema:

- `ticker`: the primary stock symbol the note is about (or `null` for theme notes).
- `tickers`: a list of secondary tickers mentioned.
- `event`: what kind of note this is — `earnings`, `10K`, `news`, `conversation`, `note`, `synthesis`.
- `date`: ISO date.
- `sentiment`: your current view — `bullish`, `bearish`, `neutral`, `watching`.
- `themes`: a list of macro or industry themes the note touches.
- `sources`: where the information came from.

Save a markdown template in Obsidian's `Templates/` folder with this frontmatter block at the top. Now every new note starts with the schema in place.

### Step 3: Backfill Two Years of Notes

The setup is only useful if the vault is populated. Plan a weekend to migrate two years of past research into the vault. Order of priority:

1. **Your current portfolio.** Every position you hold today, with the most recent thesis note for each.
2. **Earnings notes for your portfolio companies.** At least the last four quarters per name.
3. **Themes you actively track.** One note per theme, with frontmatter and links to the relevant tickers.
4. **Any conversation or sell-side report that materially shaped a position.**

Don't try to backfill *everything*. The vault gets useful at maybe 50-100 notes. It gets powerful at 300+. Backfill the parts that matter, and let the rest accumulate organically going forward.

### Step 4: Install MCPVault

MCPVault is on GitHub at `bitbonsai/mcpvault`. Installation is a one-line command in your terminal:

```
npx -y mcpvault@latest --vault /path/to/your/Obsidian/vault
```

This starts a local MCP server that watches your vault and exposes it to any MCP-compatible client.

### Step 5: Wire Claude Code to MCPVault

In Claude Code (or Claude Desktop), add the MCP connection:

```
claude mcp add mcpvault npx -y mcpvault@latest --vault /path/to/your/vault
```

The first time you query the MCP, Claude verifies the connection and reads the vault index. Test by asking *"how many notes do I have tagged ticker: AAPL?"*. If it answers with a real number, you're wired.

### Step 6: Build Your First Workflow

Pick one stock you cover. Run the full loop on it:

1. *"Summarize my current view on $TICKER from the most recent notes in the vault."*
2. *"What's been the consistent bull case across my notes? What's been the bear case? Which side has more recent data?"*
3. *"What did I get right in my $TICKER notes from 2024? What did I get wrong? What was I uncertain about that has since been resolved?"*

These three questions, asked of your own historical thinking, will produce something you have never had before — a structured view of how your investment process actually performs.

### Step 7: The Daily and Quarterly Cycle

Build the habit. Two cadences:

**Daily** (15-30 min before market open or after close): drop notes from anything you read that day into the vault. Use the template. Tag aggressively. Don't write essays — even three bullet points per article is enough as long as the frontmatter is right.

**Quarterly** (a half-day at the start of each earnings season): run the full Claude-assisted review on each name in your portfolio. Pre-earnings synthesis. Live notes during the call. Post-call comparison. Synthesis note written back to the vault.

After four quarters of this, the vault becomes your research moat.

## Adapting This for Other Information-Heavy Work

The Obsidian + MCPVault + Claude stack works for anyone whose job is to read, remember, and decide.

**Corporate strategy.** Replace tickers with competitors. Replace earnings with product launches and press cycles. The same pattern produces a competitive intelligence library that compounds.

**Venture capital.** Tag notes by company, sector, stage, and thesis. Every deal memo, every conversation with a founder, every back-channel reference, lives in the vault. The fund's institutional memory becomes queryable.

**Legal practice.** Replace tickers with case names. Replace earnings with hearings and filings. A litigator's case archive becomes searchable by argument, judge, opposing counsel, and precedent.

**Medical practice.** Replace tickers with patient cases (with HIPAA-compliant local-only storage). Themes become symptoms and treatments. The vault becomes a clinical reasoning aide.

**Journalism and investigative research.** Sources, dates, quotes, documents — all tagged. A reporter's notebook that the reporter can actually query years later.

**Academic research.** Papers, citations, hypotheses, results. The vault becomes the literature review that updates itself as you read.

The pattern: *one local plain-text vault, rich frontmatter, AI on top.* The output is the same across every domain. Your past thinking becomes available to your future self.

## Gotchas and Tips

- **The vault is only as good as the frontmatter.** Notes without frontmatter are invisible to the AI's filtering. The discipline of tagging every note is the price of admission. Build it as a habit from day one.
- **Don't paste raw earnings transcripts into the vault.** Transcripts are 30-60 pages each. They will bloat your vault and burn Claude's tokens. Instead, paste your *notes on* the transcript, with a link to where the raw transcript lives (a separate transcripts folder, or a service like Quartr).
- **Use links liberally.** Obsidian's `[[double-bracket]]` syntax creates links between notes. Every note about an earnings call should link to the company's main note. Every theme note should link to the relevant tickers. The link graph is what MCPVault uses to find related notes.
- **Sentiment tags are for *you*, not for the AI.** Claude won't trade on the `sentiment: bullish` tag. You will, when you look back at how often your `bullish` calls actually worked.
- **Back up the vault.** It's plain text in a folder. Push it to a private GitHub repo with daily commits. Versioned forever, recoverable from any machine, costs zero.
- **Resist the urge to put it in the cloud.** Obsidian Sync ($10/month) is the simplest cross-device option. Self-hosted Syncthing is free and works well. Putting your research vault in a generic cloud (Dropbox, iCloud Drive) works but adds latency and occasional sync conflicts.
- **The first month feels like overhead.** Tagging discipline is annoying when the vault is small and the queries are not yet useful. Push through it. Month two is when the magic shows up.
- **Keep the vault private.** This is your edge. It is also full of opinions about public companies that you do not want public. Local-only by default. Personal GitHub repo if you back up. Never push to a public repo.

## What This Replaces

| Tool | Old cost | What it did |
|------|----------|-------------|
| Bloomberg Terminal | ~$24,000/year | Real-time data and historical research |
| FactSet | $10,000+/year | Estimates and screening |
| Sentieo | $5,000+/year | Earnings transcripts and sell-side research |
| Junior analyst | $60-80K/year | Synthesis and research compilation |
| Your scattered notes | unmeasured | The work you've already done, mostly lost |

| What replaces it | New cost | What you get |
|------|------|------|
| Obsidian + MCPVault + Claude | $10-30/month | A queryable research vault that compounds forever |
| Quartr (transcripts) | $50-100/month optional | Earnings transcripts (still useful for raw data) |
| Your own time, structured | same as before | But now the time has leverage |

The Bloomberg seat is still better at one thing: real-time market data and screening. If you need that, keep it (or use a cheaper substitute like Koyfin at $30/month). What you do not need to pay $24K/year for anymore is *somewhere to put your research*. That problem is solved.

---

## Keep Reading

- **[Your Meetings Are Now a Searchable Knowledge Base (Fathom + Claude)](/playbooks/meeting-memory-fathom/)**: The conversation-side companion. Fathom captures every investor meeting, management call, and team discussion. Wired with the Obsidian vault, your entire information surface — what you read, what you heard — is queryable from one chat.
- **[Give Your AI a Second Brain That Gets Smarter Every Day ($0/Month)](/playbooks/ai-second-brain/)**: The general version of this playbook for non-finance use cases. Same architecture, different content.
- **[How an AI Helps You Buy a Business (Without a $50K Broker)](/playbooks/buying-a-business-with-ai/)**: The acquisition-research sibling. Different vertical, same disciplined-research compounding pattern.
