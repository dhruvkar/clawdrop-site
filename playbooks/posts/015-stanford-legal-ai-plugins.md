---
layout: playbook.njk
title: "Stanford Built 12 AI Plugins for Lawyers. Here's How Your Firm Gets the Same Edge."
description: "Stanford Law shipped a 12-pack of practice-area Claude Code plugins covering M&A diligence, privacy, employment, and more. Here's why solo practices and small firms have the most to gain, and how to build the same stack."
date: 2026-05-27
difficulty: Intermediate
cost: "$20-100/month per plugin in use"
timeToSetup: "One weekend per practice area"
originalSource: "https://www.youtube.com/watch?v=_ig8ihUKyOk"
originalAuthor: "Stanford Law School"
issueNumber: 15
permalink: /playbooks/stanford-legal-ai-plugins/
tags:
  - legal
  - law-firm
  - professional-services
  - claude-code-plugins
  - solo-practitioner
---

## Tools

- [**Claude Code**](#aff-claude-code): the host for the plugin layer and the chat interface for working with each plugin
- [**OpenClaw**](#aff-openclaw): can run the same plugins inside a self-hosted agent
- [**Anthropic**](#aff-anthropic): Claude API powering the plugin logic
- [**Notion**](#aff-notion): one place to keep matter notes that the plugins can reference
- [**Clio**](#aff-clio): practice management system most plugins can read from and write to
- [**iManage**](#aff-imanage): document management system for firms that have one

## What You'll Build

A pack of practice-area AI plugins that each act like a junior associate trained in one specific area of law. Each plugin lives inside Claude Code (or any OpenClaw setup) and handles the recurring research, drafting, and review tasks for one practice area.

Stanford released 12 of them in May. The areas, paraphrased from the public release:

1. M&A due diligence
2. Privacy and data protection
3. Employment law
4. Real estate
5. Intellectual property
6. Securities and corporate finance
7. Tax
8. Litigation discovery
9. Bankruptcy and restructuring
10. Antitrust
11. Family law
12. Estate planning

Each plugin is not a general assistant. It is a specialist. The M&A plugin knows the standard reps and warranties, the deal-stage checklist, the diligence categories, and the common pitfalls. The privacy plugin knows GDPR, CCPA, HIPAA, and the cross-border data flows. The employment plugin knows ADA, FMLA, FLSA, state-by-state non-compete rules.

The pack is publicly visible. The pattern is reproducible. The question for your firm is which three or four matter most to your practice, and whether you build them this quarter or watch a competitor do it.

## Why This Works

Big law has been throwing money at AI for two years. The headline projects all look the same: a "firm-wide AI platform" with a $300K vendor contract, a steering committee, a 12-month rollout, and a final product that's basically Word with a chat bubble.

Stanford did the opposite. They built **practice-area plugins**, not a firm-wide platform. Each plugin is small, specific, and tunable. A senior partner in one practice area can adjust their plugin without breaking anyone else's. The plugins ship as code, version-controlled, reviewable.

For a solo lawyer or a 5-30 person firm, this is the unlock. You do not need a firm-wide platform. You do not need a vendor contract. You need three or four plugins, tuned to the work that actually pays your bills, and a workflow that uses them every day.

The economics are not subtle. A first-year associate at a regional firm bills out at $300-500/hour. A specialist plugin runs the same routine work for cents. The plugin does not replace the associate. The plugin replaces the *first 70% of the work* the associate would have done before a partner reviewed it. The associate then spends their hours on the 30% that needs judgment.

## What's Actually In a Plugin

Each Stanford plugin has roughly the same shape. Pull it apart and the structure is:

- **A knowledge base** of the practice area. Statutes, case law summaries, regulatory guidance, secondary sources. The plugin loads this as context every time it's invoked.
- **A set of checklists.** The diligence categories for M&A. The privacy compliance questions. The employment law screen. Reusable prompts that the lawyer triggers with one command.
- **A drafting library.** Boilerplate clauses, standard agreements, motion templates, retainer letters. The plugin generates first drafts and the lawyer reviews.
- **Tool access.** The plugin can read the firm's document management system, pull a specific case file from the practice management tool, or search Westlaw if the firm has an account.
- **A skills layer.** Specific reusable tasks: redline this agreement against the standard, summarize this deposition transcript, generate a discovery request based on the case theory.

The genius of the plugin architecture is that none of this requires a vendor. It is all definitions in markdown and code, sitting in a repo your firm controls. You can version it. You can audit it. You can fork it.

## How to Build Your Own (Pattern from Stanford's Release)

### Step 1: Pick One Practice Area

If your firm does seven things, pick the *one* where you do the most repeat work. For most small firms that's one of:

- Employment law (the volume work is mostly handbooks, separation agreements, and unemployment responses).
- Estate planning (the volume work is wills, trusts, and powers of attorney with predictable variations).
- Real estate (the volume work is residential closings, leases, and standard purchase agreements).
- Family law (the volume work is divorce filings, custody motions, and discovery).

Pick the one where you bill the most hours. The plugin pays for itself fastest in the area you do most.

### Step 2: Inventory the Recurring Tasks

For the practice area you picked, write down every task you do more than once a month. For estate planning, that might be:

- Intake interview and conflict check
- First draft of a will from intake notes
- First draft of a revocable trust from intake notes
- First draft of a power of attorney
- Healthcare directive draft
- Cover letter and execution instructions
- Annual review checklist for existing clients

Each task becomes one capability of the plugin.

### Step 3: Capture the Practice Knowledge

Before you write a single prompt, gather the inputs:

- **Statutes.** The state-specific code sections that govern your practice. PDF or URL.
- **Standard forms.** Your firm's templated documents, the ones you start every matter from.
- **Checklists.** The mental checklists you've built over years. Get them out of your head and into a document.
- **Common pitfalls.** The mistakes you've seen junior associates make. The edge cases that bite people.

These become the knowledge base the plugin loads as context. Quality of inputs determines quality of output. If your standard will is great, the plugin's first draft will be great. If your standard will is sloppy, the plugin will produce sloppy first drafts faster than ever.

### Step 4: Write the Plugin Definition

A plugin is a folder. Inside the folder:

- A `plugin.md` file that describes the plugin's purpose, its capabilities, and the rules it must follow.
- A `knowledge/` directory with the statutes, forms, and checklists from Step 3.
- A `skills/` directory with one file per recurring task. Each skill is a prompt template plus the tools it can use.
- A `safety.md` file with the hard rules. *Never give legal advice to a non-client. Always flag jurisdictional uncertainty. Always recommend human review on first-time matters.*

Claude Code loads the plugin folder when you invoke it. OpenClaw runs the same definitions in a self-hosted setup.

### Step 5: Run It on a Closed Matter

Before you point it at a live matter, run it on a matter you closed six months ago. Ask the plugin to draft the will. Compare what it produces to the final document your firm actually signed. Note every place the plugin got it wrong.

The first run is 60-70% there. The second run, after you've tuned the prompts, is 80-85% there. The third run, with the knowledge base properly indexed, is 90-95%. That is your operating quality. The plugin is now ready for live matters where the lawyer reviews every output.

### Step 6: Lock the Safety Rails

For legal work specifically, the safety rules matter more than the productivity gains. Hard rules to encode:

- The plugin never sends output directly to a client. Every output is reviewed by the lawyer.
- The plugin always flags when a matter has jurisdictional questions outside its training.
- The plugin never makes confident claims about case law without citing the case and verifying the citation.
- The plugin escalates to the lawyer when a fact pattern is novel or the client's situation is unusual.

These are non-negotiable for the same reason the bar makes you supervise paralegals. The plugin is a paralegal that never sleeps. Supervise it like one.

### Step 7: Train Your Team to Invoke It

If the plugin is on every associate's machine but nobody actually uses it, the project failed. Two things drive adoption:

- **One-keystroke invocation.** The plugin should be in the firm's standard Claude Code setup so any associate can call it without configuration.
- **A weekly internal review.** Once a week, the team picks one output the plugin produced and walks through it together. What was good? What was off? What would the lawyer have done differently? The plugin gets better. The team gets sharper.

After three or four weeks, the plugin becomes the default starting point for every matter in that practice area. After three months, your associates won't remember how they used to start a matter without it.

## Adapting This for Other Professional Service Practices

The plugin architecture is not legal-specific. The pattern applies to any practice where:

- The work is repeatable in shape but unique in detail
- A knowledge base of statutes, codes, or standards governs the work
- A senior practitioner reviews the work of a junior practitioner

**Accounting firms.** Plugins per service line: tax prep, audit, advisory, bookkeeping. Each plugin knows the relevant code, the standard checklists, the firm's working papers format.

**Architecture and engineering firms.** Plugins per discipline: structural, mechanical, electrical, code compliance. Each plugin knows the building codes, the firm's drawing standards, the typical review checklist.

**Financial planning practices.** Plugins per service line: retirement planning, estate planning, business owner exit planning. Each plugin knows the relevant tax code, the firm's planning checklist, the standard deliverables.

**Insurance brokerages.** Plugins per coverage area: property, casualty, life, health, employee benefits. Each plugin knows the policy forms, the underwriting questions, the standard renewal checklist.

**Medical and dental practices.** Plugins per specialty area: insurance coding, prior authorization, post-op instructions, treatment planning. Each one tuned to the specific clinical workflow.

The throughline is specialist knowledge plus repeatable tasks. Wherever that combination exists, the plugin pattern beats the platform pattern.

## Gotchas and Tips

- **Do not start with M&A or litigation.** The Stanford pack includes these because Stanford has the M&A and litigation faculty to oversee them. For a small firm, the high-value first plugin is the volume practice area, not the prestige practice area.
- **The knowledge base ages.** Statutes change. Case law evolves. Set a quarterly calendar reminder to refresh the plugin's knowledge base. A stale plugin is worse than no plugin.
- **Cite everything.** Configure the plugin to cite its source for every legal claim it makes. A plugin that asserts a rule without a citation is a malpractice complaint waiting to happen.
- **Audit the model's confidence.** Newer Claude models will tell you they're uncertain. Tune the plugin to surface those moments to the lawyer rather than papering over them.
- **Conflict checks are not optional.** Wire the plugin to run a conflict check against the firm's client list before it starts work on a new matter. The plugin should refuse to proceed if a conflict is detected.
- **Talk to your malpractice carrier.** Some carriers want to know if you're using AI on client work. Most policies are silent on the question. Get clarity before you have a problem.

## What This Replaces

Before this stack:
- **First-year associate salary:** $90K-200K depending on market, billed at $300-500/hour
- **Paralegal salary:** $50K-80K, billed at $150-250/hour
- **Per-matter intake time:** 2-4 hours of attorney time before drafting starts
- **First-draft turnaround:** 4-8 hours for a standard will, longer for complex documents

After this stack:
- **Per-matter intake time:** 30 minutes of attorney review of plugin output
- **First-draft turnaround:** 15-20 minutes for the plugin to produce, 30 minutes for attorney review
- **Effective practice area capacity:** roughly doubles without adding headcount

For a solo or small firm, this is the difference between turning down work and taking it. The Stanford pack is the public proof that the architecture works at the top of the profession. Your firm's job is to ship the small-firm version before another small firm in your market does.

---

## Keep Reading

- **[How an AI Helps You Buy a Business (Without a $50K Broker)](/playbooks/buying-a-business-with-ai/)**: The buyer's-side companion. Same plugin pattern applied to deal sourcing and diligence instead of legal practice.
- **[This Accountant Trained Her AI to Close the Books Every Month](/playbooks/cpa-quickbooks-monthly-close/)**: The accounting parallel. A specialist practitioner builds a plugin for one recurring task and turns it into a moat.
- **[The Four-Piece AI Front Desk Every SMB Should Have Running by Friday](/playbooks/ai-front-desk/)**: For the client-facing layer most professional services firms also need. Stack it alongside the practice-area plugins for a complete operating system.
