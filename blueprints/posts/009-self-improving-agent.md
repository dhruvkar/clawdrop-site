---
layout: blueprint.njk
title: "Teach Your AI to Stop Making the Same Mistake Twice"
description: "The layer that catches AI mistakes, writes them down, and promotes the lessons into permanent context. Your agent gets smarter every week, not dumber."
date: 2026-04-15
difficulty: Intermediate
cost: "$0 (works on top of any existing agent setup)"
timeToSetup: "An hour to wire up, weeks to see the compounding"
originalSource: "https://github.com/peterskoett/self-improving-agent"
originalAuthor: "Peter Skoett"
issueNumber: 9
permalink: /blueprints/self-improving-agent/
tags:
  - self-improvement
  - memory
  - agent-layer
  - learnings
  - claude-code
  - solopreneur
  - meta
  - drift
---

## What You'll Build

A layer that sits on top of your existing AI agent and turns its failures into permanent knowledge. Every time the agent makes a mistake, gets corrected, runs into an error, or discovers a better way to do something, that lesson gets written down in a structured format. Every time a lesson recurs, it gets promoted to your agent's system prompt so the mistake physically cannot happen again.

The output is an agent that gets measurably smarter every week. Not because the underlying model improved. Because your system learned from its own history and stopped repeating the same 14 dumb errors you're tired of correcting.

This layer is free. It runs on top of Claude Code, OpenClaw, Hermes, Codex, Copilot, or any agent runtime you're already using. The original implementation comes from Peter Skoett's `self-improving-agent` skill, and it's one of those rare additions that changes how you relate to your AI once you actually set it up.

The first week, nothing noticeable happens. You're just logging. By week 4, you stop typing "no, that's wrong, remember I told you last time" because your agent has already read the lesson from last time and adjusted. By week 12, the lessons that used to live in your head now live in the system, and a fresh agent session on day 1 is already smarter than your old agents were on day 90.

## Why Your AI Keeps Making the Same Mistakes

Here's the thing nobody writes about. An LLM doesn't have a memory. Every session starts from zero. If you corrected Claude last Tuesday and told it to stop using `async def` in a sync file, it will happily do it again today, unless you remind it. If you told OpenClaw that your test suite uses pytest and not unittest, it will forget next time. If you explained to Copilot that your project uses pnpm and not npm, you will explain it again. And again. And again.

The default assumption is that this is fine because you just correct the AI in the moment and move on. But stop and count how many times you've typed some variation of "remember, we use X not Y" in the last month. For most founders running agents daily, the number is shockingly high. Tens of corrections per week. Hundreds per quarter. Thousands per year.

Every one of those corrections is a small tax on your time. And every one of them is information your system should have learned permanently but didn't, because you had no layer for promoting corrections into permanent memory.

The second problem is drift. Over time, your agent starts doing things slightly wrong in ways you stop noticing. You catch the big mistakes. The small ones slip through. Your code quality drops 5%. Your email drafts start sounding slightly less like you. Your task breakdowns get lazier. You don't notice until you look back at output from six months ago and realize something changed and you can't pinpoint when.

The self-improving agent layer solves both problems at once. Corrections get captured the moment they happen, so they don't rely on your memory. Recurring corrections get promoted to the system prompt, so they stop being corrections and start being rules. Drift gets caught because you're running a weekly review of what's actually been logged, and patterns become visible.

The whole thing is disarmingly simple. Three markdown files, a logging format, and a promotion rule. That's it.

## The Pattern

The layer has 4 parts.

```
1. THREE LOG FILES
   .learnings/LEARNINGS.md    (corrections, knowledge gaps, best practices)
   .learnings/ERRORS.md       (command failures, exceptions)
   .learnings/FEATURE_REQUESTS.md (capabilities the user wanted)
        |
        v
2. DETECTION TRIGGERS
   "No, that's wrong" → log to LEARNINGS.md
   Command returns exit code 1 → log to ERRORS.md
   "Can you also..." → log to FEATURE_REQUESTS.md
        |
        v
3. RECURRING PATTERN DETECTION
   grep for similar entries, link them, bump priority
        |
        v
4. PROMOTION TO PERMANENT CONTEXT
   3+ occurrences → promote to CLAUDE.md / AGENTS.md / SOUL.md
```

The core insight: **corrections that stay in `.learnings/` are tactical. Corrections that get promoted to the system prompt are structural.** You want every recurring mistake to eventually become structural so it stops being your problem.

## Step-by-Step Setup

### Step 1: Create the `.learnings/` Directory

This goes in your agent's project root. For Claude Code that's wherever you launch from. For OpenClaw that's `~/.openclaw/workspace/.learnings/`. For Codex it's `.codex/.learnings/`. For project-level use, it's just `.learnings/` at the repo root.

Three files live inside:

```
.learnings/
├── LEARNINGS.md        # corrections, knowledge gaps, best practices
├── ERRORS.md           # command failures, exceptions
└── FEATURE_REQUESTS.md # capabilities the user wanted but didn't have
```

That's the entire "database." No SQL. No vector store. No embedding model. Just markdown files that humans and agents can both read.

### Step 2: Define the Logging Format

Every entry follows the same shape. Consistent structure matters because you're going to grep these files constantly.

For a **learning** entry (a correction or better approach):

```markdown
## [LRN-20260415-001] correction

**Logged**: 2026-04-15T14:22:00Z
**Priority**: medium
**Status**: pending
**Area**: backend

### Summary
User said we use pnpm, not npm. Agent tried to install dependencies with npm.

### Details
In the `setup-deps.sh` script, agent wrote `npm install` but the project uses pnpm workspaces. Lock file is `pnpm-lock.yaml`. User corrected immediately.

### Suggested Action
Before running any dependency install, check for lock file. If `pnpm-lock.yaml` exists, use pnpm. If `yarn.lock`, use yarn. If `package-lock.json`, use npm.

### Metadata
- Source: user_feedback
- Related Files: setup-deps.sh
- Tags: dependencies, pnpm, tooling
```

For an **error** entry (something failed):

```markdown
## [ERR-20260415-002] gh-pr-create

**Logged**: 2026-04-15T15:01:00Z
**Priority**: high
**Status**: pending

### Summary
`gh pr create` failed with auth error.

### Error
gh: Resource not accessible by integration

### Context
Tried to create PR from feature branch to main. Auth token lacked `pull_requests: write` scope.

### Suggested Fix
Check `GITHUB_TOKEN` scopes before running `gh pr create`. If missing, embed PAT in remote URL instead.

### Metadata
- Reproducible: yes
```

For a **feature request** (something the user wanted the agent to do but it couldn't):

```markdown
## [FEAT-20260415-003] telegram_voice_messages

**Logged**: 2026-04-15T16:42:00Z
**Priority**: medium
**Status**: pending

### Requested Capability
User wanted to send voice messages through Telegram, not just text.

### User Context
They're driving and can't type. Voice-first interaction would unblock their use of the agent in the car.

### Complexity Estimate
medium

### Suggested Implementation
Add Telegram voice message handler. Pipe to Whisper for transcription, then pass the text to the normal task router.
```

The format looks heavy. It isn't. Every entry takes 30 seconds to write once you've done it 5 times. The structure is what makes grepping useful later.

### Step 3: Detect When to Log

The rule is "log the moment something is surprising or corrected." That sounds vague. Here's a concrete trigger list:

**Log a learning when:**
- The user says "no, that's wrong" or "actually" or "you're confusing X with Y"
- The user tells you about a project convention you didn't know
- You referenced outdated documentation and it led you astray
- You found a better approach to a task you've done before

**Log an error when:**
- A command returns a non-zero exit code
- An API call fails or times out
- An unexpected exception propagates up the stack
- A test suddenly fails where it passed before

**Log a feature request when:**
- The user says "can you also..." and you can't
- The user says "I wish you could..."
- The user asks for something outside your current capability

If you're running Claude Code, you can automate this with hooks. A `UserPromptSubmit` hook runs a small script that checks the most recent interaction for trigger phrases and reminds you (or the agent) to log. A `PostToolUse` hook on Bash tool calls detects errors automatically and pre-fills an error entry.

If you're not running hooks, you manually log. The manual version works fine as long as you're honest about logging every time, which takes about 2 weeks of discipline before it becomes automatic.

### Step 4: Check for Recurring Patterns Before Logging

Before adding a new entry, grep the existing files for similar issues:

```bash
grep -r "pnpm" .learnings/
grep -r "gh pr create" .learnings/
```

If you find a related entry, link the new one to the old one with a `See Also` reference:

```markdown
### Metadata
- See Also: LRN-20260401-003
```

Then bump the priority on the original entry. A recurring issue is higher priority than a one-off by definition.

This is the step that most people skip and it's the most important one. The whole promotion system depends on knowing when a pattern is recurring versus novel. If you log the same mistake 5 times under 5 different IDs without linking them, the system thinks you have 5 separate problems. If you link them all, the system sees one compounding problem and flags it for promotion.

### Step 5: Promote Recurring Lessons to Permanent Context

Here's where the system earns its keep. Once a learning has recurred 3 times, move it out of `.learnings/` and into your agent's actual system prompt.

For Claude Code, that means `CLAUDE.md` at the project root.
For OpenClaw, that means `SOUL.md` (behavior), `TOOLS.md` (tool usage), or `AGENTS.md` (workflows) in `~/.openclaw/workspace/`.
For Copilot, that means `.github/copilot-instructions.md`.
For Codex, that means `AGENTS.md` at the project root.

The promoted version is short and declarative, not long and narrative. The raw learning might be 200 words describing the full incident. The promoted version is one sentence.

**Raw learning** (200 words, detailed):
> LRN-20260401-003: Agent kept using `npm install` in this project. Project uses pnpm workspaces. Lock file is `pnpm-lock.yaml`. Corrected 3 times by user. Root cause: agent defaults to npm when package.json exists without checking for lock files first.

**Promoted to CLAUDE.md** (1 sentence, declarative):
```markdown
## Build & Dependencies
- Package manager: pnpm (not npm). Always check for `pnpm-lock.yaml` before running install commands.
```

The learning entry gets marked `Status: promoted` and stops appearing in active review. It's now a permanent rule. The next time a fresh session fires up, `CLAUDE.md` loads with the new rule and the mistake cannot happen again.

The promotion rule is: **3 or more occurrences across at least 2 distinct tasks within a 30-day window**. Fewer than that and the pattern might be coincidence. More than that and you're letting a systemic problem persist.

### Step 6: Use Hooks to Automate the Reminders (Optional)

Manual logging is fine, but hooks make it much stickier. For Claude Code, create `.claude/settings.json`:

```json
{
  "hooks": {
    "UserPromptSubmit": [{
      "matcher": "",
      "hooks": [{
        "type": "command",
        "command": "./skills/self-improvement/scripts/activator.sh"
      }]
    }],
    "PostToolUse": [{
      "matcher": "Bash",
      "hooks": [{
        "type": "command",
        "command": "./skills/self-improvement/scripts/error-detector.sh"
      }]
    }]
  }
}
```

The `activator.sh` injects a short reminder into every prompt ("consider whether this interaction contains a learning worth logging"). The `error-detector.sh` watches bash tool calls for non-zero exit codes and pre-fills an error entry when one fires.

The hook overhead is about 50-100 tokens per prompt. For a founder running 200 prompts a day, that's 10k-20k tokens of overhead. At Haiku pricing, that's a few cents a day. At Opus pricing, it's maybe a dollar a day. Cheap compared to the value of not making the same mistake twice.

### Step 7: Set a Weekly Review Cadence

On Friday afternoon (or Monday morning, or whenever your week inflects), spend 15 minutes in `.learnings/`. The review has 4 steps:

1. **Count pending items.** `grep -c "Status.*pending" .learnings/*.md`. If the number is climbing week over week, you're logging but not resolving. Fix that.

2. **Promote high-priority recurrings.** Any learning with 3+ recurrences gets distilled and moved to `CLAUDE.md` / `AGENTS.md` / wherever. Mark the original `Status: promoted`.

3. **Resolve one-off fixes.** Any entry where you made the fix and it worked gets `Status: resolved` with a brief note.

4. **Kill stale entries.** Any entry older than 90 days that hasn't recurred is probably obsolete. Mark `Status: wont_fix` and move on. Stale learnings are worse than missing ones because they add noise without adding signal.

15 minutes a week. That's the entire maintenance cost of a system that replaces hours of "wait, didn't I tell you this already" frustration per month.

## Lanes That Work

This layer fits anyone who runs the same AI agent across more than a week.

**Technical founders using Claude Code daily.** You're the primary audience. You're already living in the terminal. You already have a `CLAUDE.md` file you barely maintain. Adding `.learnings/` takes an hour and compounds forever.

**Solo operators running OpenClaw or Hermes.** The workspace injection model is built for this. Your agent already reads `SOUL.md`, `TOOLS.md`, and `AGENTS.md` on every session. `.learnings/` is the place where new rules incubate before they earn a spot in those files.

**Anyone who's tired of explaining the same convention 10 times.** If you've thought "I wish Claude would just remember that" in the last week, this is the fix. You've been wishing for permanent memory. This is how you build it.

**Teams sharing an agent across multiple developers.** Check `.learnings/` into git. Every learning becomes shared knowledge. A new developer inheriting the repo also inherits every correction the previous developer gave the agent, automatically, without any handoff doc.

What doesn't work: **one-shot users.** If you're only asking Claude a handful of things per month, the system is overhead with no return. You need enough interaction volume (50+ prompts per week minimum) before the compounding starts to matter. Below that threshold, you're logging into a vacuum.

## What Changes After Setup

Week 1. You feel like you're adding paperwork. You log a few entries. Nothing feels different.

Week 2. You notice you're typing the same correction you typed last week. You check `.learnings/`. It's in there. You mark the recurrence, bump the priority.

Week 3. The first promotion happens. A learning that recurred 3 times this week gets distilled into a one-line rule in `CLAUDE.md`. You feel slightly smug.

Week 4. A fresh Claude session starts with the promoted rule already loaded. It doesn't make the mistake. You were waiting to correct it and the correction never came. This is the moment the system earns its keep.

Week 8. You look at `CLAUDE.md` and realize it's twice as long as it was at the start. Every new rule is a mistake that cannot happen anymore. The file is an artifact of your entire debugging history with the agent, distilled into declarative rules.

Week 12. You bring up the system to a friend and they ask why their Claude doesn't remember their project conventions. You send them this blueprint. They set it up. Two weeks later they message you: "okay, this actually works."

The daily cost after week 4 is about 15 minutes per week (the Friday review) plus the small hook overhead. The value is compounding and unbounded. Every week, your agent is slightly smarter than it was the week before, and the curve doesn't flatten because there are always new mistakes to catch.

## Gotchas and Tips

**Log immediately, even imperfectly.** The biggest failure mode is "I'll write it up properly later." You won't. Scribble a rough entry in the moment. Clean it up during the weekly review. The cost of a messy entry is zero. The cost of a forgotten one is permanent.

**Be specific about what went wrong.** "Agent made a mistake" is useless. "Agent used npm install in a pnpm workspace and broke the lockfile" is actionable. The more concrete the entry, the more useful the eventual promotion.

**Always write a suggested fix, not just a diagnosis.** A learning without a fix is a complaint. A learning with a fix is a rule you can actually apply. Every entry should end with "next time, do X instead."

**Grep before logging.** If the entry is similar to an existing one, link them. Don't create duplicate IDs for the same underlying issue. The whole promotion system depends on accurate recurrence counts.

**Promote aggressively after 3 recurrences.** Don't wait for 5, don't wait for 10. The pattern is clear at 3. Distill it, move it to `CLAUDE.md`, mark the original `promoted`. The longer you wait, the more tax you pay on the same mistake.

**Keep promoted rules short.** A 200-word learning distills to a 1-sentence rule. If your promoted rule is more than 2 sentences, you didn't distill enough. The point of promotion is that the rule becomes so concise the agent can't miss it.

**Review weekly, not daily.** Daily is too frequent (not enough has changed). Monthly is too rare (patterns get lost). Weekly hits the sweet spot. 15 minutes, Friday afternoon, before you shut down for the weekend.

**Don't log corrections you made up.** Some founders get into the habit of logging "learnings" that never actually came from a real failure. Don't. The whole system depends on the signal being real. Fake entries poison the promotion rules and waste context.

**Share the `.learnings/` directory with your team if you have one.** Git-checked, reviewable, inherited. Your agent's institutional knowledge becomes your team's institutional knowledge. The compounding gets bigger when more people contribute.

**This works on top of any other layer in this issue.** Cold email pipeline, content machine, command center, it doesn't matter. The self-improving layer sits above all of them and applies to all of them. If you build one of the other blueprints first, come back to this one and bolt it on. It's the highest-leverage thing you can add to any existing agent setup.

---

## Keep Reading

- **[One Claude Code Subscription. Five Agents. Zero New Frameworks.](/blueprints/claude-code-command-center/)** — The command center this layer bolts onto. Mark Kashef's 5-agent setup plus self-improvement is a complete personal AI stack.
- **[Give Your AI a Second Brain That Gets Smarter Every Day ($0/Month)](/blueprints/ai-second-brain-karpathy/)** — The knowledge-side complement. Self-improvement catches what goes wrong; the second brain stores what you learn.
- **[Your AI Remembers Everything So You Don't Have To](/blueprints/ai-real-time-assistant/)** — The memory-first pattern. If self-improvement is the correction layer, this is the retrieval layer.
