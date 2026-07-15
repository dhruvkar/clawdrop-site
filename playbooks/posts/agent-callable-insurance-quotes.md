---
layout: playbook.njk
title: "Customers Ask AI Where to Buy Insurance Now. This Agency Owner Built the Pipe So Their AI Can Order From Him."
description: "A non-developer insurance agency owner vibe-coded a server that lets any AI assistant answer coverage questions with his verified facts and submit a real quote request straight into his CRM."
date: 2026-07-14
difficulty: Intermediate
cost: "A Claude subscription you probably already have, plus hosting that fits in Cloudflare's free tier. Call it $20 a month, total."
timeToSetup: "A few evenings of vibe-coding, plus honest review and testing before anything ships."
originalSource: "https://news.ycombinator.com/item?id=48865825"
originalAuthor: "tobylason (Hacker News)"
issueNumber: 22
tags:
  - insurance
  - lead-generation
  - ai-visibility
  - mcp
  - salesforce
  - cloudflare-workers
  - agent-commerce
permalink: /playbooks/agent-callable-insurance-quotes/
---

## Tools

- [**Claude Code**](#aff-claude-code): the coding agent that wrote the whole thing. The owner says flat out he is not a developer. He described what he wanted, reviewed what came back, and tested it before shipping.
- [**MCP**](#aff-mcp): short for Model Context Protocol. Think of it as a standard plug that lets AI assistants use your business like an app instead of just reading your website. Claude, ChatGPT, and most serious assistants can connect to one.
- [**Cloudflare Workers**](#aff-cloudflare-workers): dirt-cheap hosting that runs small pieces of code without you managing a server. The whole build lives in one Worker, and the free tier covers a lot of traffic.
- [**Salesforce web-to-lead**](#aff-salesforce): the same path your website contact form already uses to drop a new lead into the CRM. Nothing new was built on the CRM side. That's the trick.

## The Story

You've heard the warning by now. Customers don't Google "disability insurance broker" anymore. They ask ChatGPT or Claude what coverage to buy and who to buy it from, and whatever the assistant says is the whole shortlist.

Most business owners respond to that by playing defense. Publish more content, hope the AI reads your site, hope you get mentioned.

A Hacker News user named tobylason, who owns Seaworthy, an online agency selling disability insurance to high-income professionals like physicians and attorneys, decided to play offense instead. His reasoning: today people ask agents where to get quotes. Soon they'll just ask the agent to go get the quotes. And eventually to set up the coverage entirely. He wants to be the first one in his niche who can take that call.

So he built a small server that AI assistants can plug into directly. It exposes seven tools. Six of them are read-only: a verified-facts knowledge base, a comparison of five major disability carriers, guides for specific professions, education articles, benefit-cap math that shows a high earner how much of their income a policy actually replaces, and plain-English definitions of policy riders. When a prospect's assistant answers an insurance question, it can pull from his checked facts instead of guessing.

The seventh tool is the one that matters: a quote request. When the prospect says "get me a quote," the assistant collects the normal lead fields, name, email, profession, state, income, and submits them through the exact same Salesforce web-to-lead path his website form already uses. The lead lands in his CRM tagged as agent-originated, and a licensed human broker follows up the traditional way. No robot sells anyone insurance. The robot just fills out the form.

Here's the part that makes it a real story and not a press release: he is not a developer. He vibe-coded the entire thing in Claude Code, reviewed it, tested it, and shipped it. His own words: a small firm with curious, reasonably capable people can now operate infrastructure that would have required a contractor two years ago.

## How It Works

```
PROSPECT asks their AI assistant:
"What disability coverage should a
surgeon making $400K actually buy?"
      |
      v
Assistant is connected to his server
      |
      +-- answers from his verified fact
      |   library: carrier comparison,
      |   benefit-cap math, rider definitions
      |
      +-- prospect: "OK, get me a quote"
      |
      v
Quote request tool fires
(name, email, profession, state, income;
never SSN, medical, or banking info)
      |
      v
Lead lands in Salesforce, tagged
"came from an AI agent"
      |
      v
Licensed human broker calls back,
same as any website lead
```

Two design choices are worth stealing on their own.

First, the knowledge base isn't a second copy of his website that will drift out of date. It compiles at deploy time from the same source file that feeds his site's chatbot. Update the facts once, and the website, the chatbot, and the AI-assistant tools all update together.

Second, the action tool changes nothing downstream. Because it rides the same web-to-lead path as the site form, his brokers, his CRM reports, and his follow-up process all work exactly as before. The new channel just feeds the old machine.

## The Security Call That Will Make Developers Wince

He originally built it with a proper login flow. Then he watched auth friction kill test interaction after test interaction, so he ripped it out. The server is open. No credentials. Anyone's assistant can call it.

Before you gasp, walk through his worst case the way he did. The read tools only serve information he already publishes. The quote tool only collects the same fields as his public website form. So the worst realistic outcome is junk leads, not a data leak. Against the junk he stacked layers: strict input validation, a check that the email domain can actually receive mail, per-IP rate limiting, and short-window duplicate suppression. And since every agent-originated lead carries a tag in the CRM, garbage is one filter away from gone.

That's a genuinely useful way to think about giving AI any door into your business. Don't ask "is this secure" in the abstract. Ask "what is the worst thing a stranger can do through this door," and if the answer is "submit a fake contact form," you already live with that risk today.

Full disclosure, which he offers himself: this is an experiment. He hasn't received a single lead through it yet and doesn't expect to for a while. He published the code openly and invited people to poke holes in it. The bet isn't this month's pipeline. The bet is being the only firm in his corner of insurance that's ready when the wave arrives, at a cost of a few evenings and pocket change.

## The Bigger Play: Offense, Not Defense

Every AI-visibility conversation you've heard is about getting read. Write content the assistants cite, check whether ChatGPT mentions you, tune your site for AI crawlers. All defense. All hoping.

This flips it. Instead of hoping an assistant paraphrases your website correctly, you hand it verified answers. Instead of hoping the prospect clicks through to your form, you let their assistant submit the form. You stop being a page the AI might read and become a service the AI can use.

And the moat right now is embarrassingly wide. He believes he's the first agent-callable quote action in his corner of insurance. Not the best one. The first one. In your niche, that seat is probably still empty, and the price of taking it has collapsed from "hire a contractor" to "spend a few evenings with Claude Code and describe your intake form."

## Who Should Steal This

Any business where the sale starts with a research phase and ends with a human conversation: insurance agencies, mortgage brokers, law firms, accountants, financial advisors, contractors, med spas, anyone with a quote form. If your customers are already asking AI assistants who to hire, and they are, you can either hope the assistant mentions you or give it a button that requests the appointment. Start with your FAQ as the read-only tools and your existing contact form as the one action. That's the whole recipe.

---

## Keep Reading

- **[Is Your Business Invisible When Customers Ask ChatGPT? This Agent Checks Every Saturday.](/playbooks/invisible-in-chatgpt/)**: the defense half of this exact problem. Find out whether the assistants mention you at all, then come back here and build the pipe.
- **[His Life Insurance Agency Texts and Calls New Leads in 2 Minutes. Automatically.](/playbooks/life-insurance-2-minute-follow-up/)**: what to bolt onto the other end of the CRM, so the leads this playbook generates get worked before they go cold.
- **[6 Non-Technical Founders Wrapped Their Businesses in Claude Code in 8 Hours. Here's What They Built.](/playbooks/aios-wrap-your-business/)**: more proof that "I'm not a developer" stopped being a blocker.
