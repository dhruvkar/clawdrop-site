---
layout: blueprint.njk
title: "Turn Any Windows PC Into a Web Automation Machine"
description: "Set up parallel browser automation on a spare PC. Your agent controls 4+ Chrome instances at once, each logged into different accounts. No code, no Selenium, no proxies."
date: 2026-03-16
difficulty: Beginner
cost: "$0 (uses existing hardware)"
timeToSetup: "30-60 minutes"
originalSource: "https://discord.com/channels/1456350064065904867/1457377479495913574"
originalAuthor: "dhruvkar"
tags:
  - business
  - automation
  - browser
  - scraping
---

## What You'll Build

A spare Windows PC (or laptop collecting dust) that your AI agent controls remotely. It runs multiple Chrome browsers simultaneously, each logged into different accounts. Your agent can:

- Post to social media across 4 platforms at once
- Monitor LinkedIn DMs and sync leads to your CRM
- Scrape competitor pricing daily
- Fill out forms, submit applications, check dashboards
- Do anything a human can do in a browser, but faster and on autopilot

All through natural language. Tell your agent "check my LinkedIn DMs for positive replies" and it does the rest.

## Why It Works

Most "browser automation" tools use headless browsers or API wrappers that get flagged instantly. This approach is different:

- **Real Chrome, real cookies.** You log in manually once. The agent uses that same session. Sites see a normal user, because it is one.
- **Separate profiles = separate identities.** Each Chrome instance has its own cookies, history, and logins. Your Twitter automation never touches your LinkedIn cookies.
- **No code required.** You don't write Puppeteer scripts or CSS selectors. You talk to your agent and it figures out how to click, type, and navigate.
- **Runs on hardware you already own.** That old laptop? It's now a 24/7 automation server.

**Real result:** One user runs 4 parallel Chrome profiles handling Twitter, LinkedIn, Facebook, and general web scraping, all controlled by a single OpenClaw agent running on a $200 VPS.

## Prerequisites

- A Windows PC (spare laptop, desktop, anything with Chrome)
- OpenClaw installed somewhere (Mac, Linux, VPS, or the same Windows PC)
- Google Chrome installed on the Windows PC
- 15 minutes of patience

## Step 1: Install the OpenClaw App on Windows

Download the OpenClaw desktop app from [openclaw.ai](https://openclaw.ai) and install it on the Windows PC.

This app runs as a "node," a lightweight bridge between your main OpenClaw gateway and the Windows machine. It doesn't run an AI model. It just receives commands and executes them locally.

Open the app. It will show a pairing screen with a code.

## Step 2: Pair It With Your Gateway

On your main OpenClaw machine (wherever your gateway runs), approve the new node:

```bash
openclaw devices list
openclaw devices approve <the-request-id-shown>
```

That's it. Your gateway can now send commands to the Windows PC. You can verify with:

```bash
openclaw nodes list
```

You should see your Windows machine listed with a green status.

## Step 3: Launch Chrome With Remote Debugging

This is the key step. You need to start Chrome in a way that lets OpenClaw control it. Open PowerShell on the Windows PC and run:

```powershell
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'

Start-Process $chrome -ArgumentList `
  "--remote-debugging-port=18800",
  "--user-data-dir=$env:USERPROFILE\.openclaw\browser-profiles\main"
```

A Chrome window opens. This is your first automation profile.

**What just happened:**
- `--remote-debugging-port=18800` tells Chrome to accept commands on port 18800
- `--user-data-dir=...` creates a completely separate Chrome profile (its own cookies, history, extensions)

## Step 4: Log Into Your Accounts (One Time)

In that Chrome window, manually log into whatever you need: Gmail, LinkedIn, Twitter, your CRM, your bank dashboard, whatever.

This is a one-time setup. The agent will reuse these sessions going forward. As long as Chrome stays open, the sessions persist.

## Step 5: Test It

From your main machine (or Telegram, Signal, wherever you talk to your agent), try:

> "Take a screenshot of my Chrome browser on the Windows PC"

Your agent will use the browser tool, connect to the Windows node, snap a screenshot, and send it back. If you see the page you left open, everything is working.

Try something more useful:

> "Go to linkedin.com/messaging and tell me if I have any unread messages"

The agent navigates, reads the page, and reports back. No API keys. No LinkedIn developer account. Just a real browser.

## Step 6: Add More Profiles (Parallel Automation)

Here's where it gets powerful. Launch more Chrome instances on different ports:

```powershell
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'

# Profile 2: Twitter/X automation
Start-Process $chrome -ArgumentList `
  "--remote-debugging-port=18801",
  "--user-data-dir=$env:USERPROFILE\.openclaw\browser-profiles\twitter"

# Profile 3: LinkedIn automation
Start-Process $chrome -ArgumentList `
  "--remote-debugging-port=18802",
  "--user-data-dir=$env:USERPROFILE\.openclaw\browser-profiles\linkedin"

# Profile 4: Facebook automation
Start-Process $chrome -ArgumentList `
  "--remote-debugging-port=18803",
  "--user-data-dir=$env:USERPROFILE\.openclaw\browser-profiles\facebook"
```

Log into the relevant accounts in each window. Now your agent can work across all four simultaneously. Twitter posting on port 18801 doesn't interfere with LinkedIn scraping on 18802.

**You can run up to 100 profiles** (ports 18800-18899). Most machines handle 4-8 comfortably.

## Step 7: Automate With Cron Jobs

Set up recurring tasks that run on autopilot:

**Morning LinkedIn check (every day at 9 AM):**
Your agent opens LinkedIn on the dedicated profile, checks DMs for positive replies to your outbound messages, and sends you a summary on Telegram.

**Social posting (3x per day):**
Your agent posts to Twitter, LinkedIn, and Facebook using three separate Chrome profiles in parallel. Each post is tailored to the platform. No scheduling tool needed.

**Competitor price monitoring (daily):**
Your agent visits 5 competitor websites, screenshots their pricing pages, and flags any changes.

**Lead scraping (weekly):**
Your agent searches Google Maps or industry directories for prospects, extracts contact info, and adds them to your CRM.

## What People Are Actually Building

From the OpenClaw community:

- **Roofing company** runs 4 agents (sales, field support, customer success, COO) each with browser access for CRM and scheduling
- **Trader** uses browser automation for live market monitoring and trade execution
- **Newsletter creator** scrapes Discord, Reddit, and Twitter for content via parallel browser profiles
- **Job seeker** had their agent browse LinkedIn, apply to jobs, and negotiate, doubling their salary
- **Agency owner** monitors 12 client dashboards daily across separate browser profiles, one per client

## Making It Persistent

Chrome profiles survive restarts (the user-data-dir keeps everything). But you need to re-launch Chrome with the debugging flags after a reboot.

**Auto-start on boot (PowerShell script):**

Create a file called `start-browsers.ps1`:

```powershell
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$profiles = @(
    @{Port=18800; Name="main"},
    @{Port=18801; Name="twitter"},
    @{Port=18802; Name="linkedin"},
    @{Port=18803; Name="facebook"}
)

foreach ($p in $profiles) {
    $dataDir = "$env:USERPROFILE\.openclaw\browser-profiles\$($p.Name)"
    Start-Process $chrome -ArgumentList `
      "--remote-debugging-port=$($p.Port)",
      "--user-data-dir=$dataDir"
    Start-Sleep -Seconds 2
}
```

Add it to Windows Task Scheduler to run at login, and your automation machine survives reboots.

## Gotchas and Tips

- **Sessions expire.** Some sites log you out after days or weeks. When that happens, the agent will tell you it hit a login page. Just log back in manually in that Chrome window.
- **Don't run multiple tabs on the same profile for automation.** Use separate profiles instead. Multiple tabs on one profile can cause the agent to accidentally interact with the wrong tab.
- **Keep Chrome updated.** The remote debugging protocol changes with Chrome versions. Staying on stable channel avoids surprises.
- **Rate limit yourself.** Just because you can post to 4 platforms every 5 minutes doesn't mean you should. Mimic human patterns. Space things out.
- **The PC needs to stay on.** Disable sleep mode. If it's a laptop, keep it plugged in with the lid closed (configure Windows to "do nothing" on lid close).
- **Headless mode works too.** Add `--headless=new` to the Chrome flags if you don't need to see the browser windows. Saves RAM and screen space.
- **Start small.** Get one profile working with one task before scaling to four profiles with twelve cron jobs. Build confidence first.
