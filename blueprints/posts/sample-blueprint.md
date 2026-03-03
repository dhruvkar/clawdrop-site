---
layout: blueprint.njk
title: "Auto-Post Twitter Threads from Google Docs"
description: "Write threads in Google Docs, then let OpenClaw format and post them to X automatically on a schedule."
date: 2026-03-01
difficulty: Beginner
cost: Free
timeToSetup: "15 min"
originalSource: "https://x.com/example/status/123"
originalAuthor: "clawdrop"
tags:
  - twitter
  - google-docs
  - scheduling
permalink: /blueprints/auto-post-twitter-threads/
---

## What You'll Build

An automation that watches a Google Doc for new thread drafts, formats them into tweet-sized chunks, and posts them to X on a schedule.

## Prerequisites

- An OpenClaw instance (local or cloud)
- Google Workspace account
- X/Twitter developer credentials

## Step 1: Set Up the Google Doc

Create a Google Doc with a simple format: each tweet separated by `---`.

```
This is tweet one. It can be up to 280 characters.
---
This is tweet two. A reply to the first.
---
And the final tweet in the thread.
```

## Step 2: Configure the Automation

Add this to your OpenClaw config:

```yaml
trigger:
  schedule: "0 9 * * 1-5"  # 9 AM weekdays
action:
  - read_google_doc
  - format_thread
  - post_to_x
```

## Step 3: Test It

Run a dry-run to see the formatted output before going live.

## Tips

- Keep tweets under 260 chars to leave room for thread numbering
- Use the `delay` option to space out tweets by 30 seconds
- Add images by including URLs in the doc
