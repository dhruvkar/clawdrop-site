---
layout: learn.njk
title: "How to Install OpenClaw on Windows (With Telegram, Step by Step)"
description: "A practical walkthrough for getting OpenClaw running on Windows via WSL, hooked up to Telegram, locked down, and ready to use. Based on a live install walkthrough."
date: 2026-04-18
lastUpdated: "April 2026"
readTime: "10 min read"
audience: "Windows users, first-time installers"
tags: learn
permalink: /learn/openclaw-windows-install/
---

**OpenClaw runs natively on Mac and Linux. On Windows, it runs through WSL (Windows Subsystem for Linux), which is basically Ubuntu running inside Windows.** That sounds intimidating if you've never touched a terminal, but Windows handles almost all of the setup for you. This guide walks through the full install end to end, including the gotchas that cost people the most time.

By the end, you'll have OpenClaw installed, connected to Telegram, and responding to DMs from your phone.

## Before You Start: Build Your Own Support Channel

Before you install anything, do this. It'll save you hours.

Go to [context7.com](https://context7.com), search for **OpenClaw**, and click the result that points to `docs.openclaw.ai`. You'll see a token slider. Add a zero at the end of the number to max it out (this grabs the complete documentation instead of a summary). Hit **Copy**.

Now open ChatGPT or Claude.ai and create a new **Project** called "OpenClaw Support." Paste the documentation you just copied as a text file in the project's sources.

From now on, when you hit an error or can't remember a command, ask that project. It has the full, current OpenClaw docs and will give you step-by-step answers instead of sending you Googling.

## Step 1: Check WSL

Right-click the Start menu and open **Terminal (Admin)**. Type:

```
wsl
```

If WSL is installed, you'll drop into a Linux prompt. If not, Windows will prompt you to install it and restart. Do that, then come back.

Everything from this point runs **inside WSL**, not native Windows. The Linux prompt is where you'll work.

## Step 2: Run the Install Command

Inside WSL, paste the install command from the OpenClaw docs. It looks like this:

```
curl -fsSL https://get.openclaw.ai | bash
```

If you hit a permissions error, prefix it with `sudo`. When typing your sudo password, nothing will appear on screen. That's normal. Just type it and press Enter.

## Step 3: Let It Install Dependencies

The installer handles **Homebrew, Git, and Node.js** automatically. Yes, WSL runs Homebrew too. The Node.js step can stall for 20 minutes on a fresh machine. Don't cancel it. Go get coffee.

### The Most Common Gotcha

Once install finishes, you type `openclaw` and see:

```
command not found: openclaw
```

**Fix: close the terminal and reopen it.** Your shell needs to reload its PATH to see the new command. This trips up almost everyone.

## Step 4: Run the Setup Wizard

Run `openclaw` to launch the interactive setup. Use arrow keys to navigate.

Here's what to pick:

- **Lockdown prompt:** Yes
- **Setup mode:** Quick Start
- **LLM provider:** OpenAI Codex (recommended)
- **Model:** GPT 5.4
- **Search provider:** Brave Search if you want web search, otherwise skip
- **Skills:** GitHub, GOG (Gmail/Google Workspace), Session Logs, Summarize
- **Hooks:** enable "log all commands to a centralized audit file" and "session memory"

### Why OpenAI Codex?

OpenAI Codex uses **OAuth through your ChatGPT login**. That means no API key, no per-request charges, and it works on the standard $20/month ChatGPT Personal plan. It's the cheapest, smoothest option for most people.

Anthropic works too but requires a paid API key and pay-per-request billing. OpenAI's own API also works but costs more than the ChatGPT subscription model.

### About Brave Search

Brave's free tier gives you 1,000 searches per month, which is plenty. The catch: it requires a credit card even for the free tier. If that's annoying, skip it for now. You can add it later.

## Step 5: Start the Gateway

When the wizard finishes, the **gateway service** starts automatically. The gateway is what lets external channels like Telegram, Discord, or Slack talk to OpenClaw.

Open your browser to [http://localhost:8789](http://localhost:8789). Paste the gateway token when prompted. You'll see a dashboard with chat, channels, and cron jobs.

## Step 6: Connect Telegram

This is where people get stuck. Follow these steps exactly.

### Why Telegram (and why a dedicated account)

Telegram is the easiest channel to connect and the one this guide covers. Discord and Slack work too but aren't walked through here.

**Strong recommendation: use a Telegram account that only talks to OpenClaw.** Don't hook OpenClaw to your personal Telegram that you use for friends and family.

The reason is prompt injection. If OpenClaw can read your personal DMs, a bad actor can message you saying "Hey this is you, locked out, send me my SSN." If OpenClaw has access to your credentials, it might comply. Keeping Telegram isolated removes that risk entirely.

### Install Telegram Desktop

Download Telegram Desktop for Windows. The mobile app works too, but desktop makes copy-paste much easier.

### Create a Bot With BotFather

BotFather is Telegram's official bot creator. It's a bot that makes other bots.

1. Open Telegram and search for **@BotFather**. Start the chat.
2. Send `/newbot`.
3. BotFather asks for a **display name**. Any string works. Try "My OpenClaw."
4. BotFather asks for a **username**. It must be globally unique and **must end in `bot`**. Pure numeric usernames get rejected. Add letters if your first pick is taken. Example: `dhruvopenclawbot`.
5. BotFather replies with a link to your bot and a **token** that looks like this:

```
8234567890:AAFcdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIj
```

The format is: 8 digit ID, a colon, then about 35 characters of letters and numbers.

### Paste the Token Into OpenClaw (Carefully)

Back in OpenClaw, the setup will ask for your bot token. Paste it in.

**Critical: do not type the token manually.** If you mistype even one character, OpenClaw will not give you an error. It just silently fails to pair. There's no feedback because pairing hasn't happened yet, so nothing is there to validate against.

Always copy-paste directly from BotFather. If you need to bounce the token through another app to copy it, that's fine. Just don't retype it.

### Pick an Allowlist, Not Open Access

OpenClaw now asks about channel access:

- **Allow list:** pick this. You whitelist specific Telegram chats or channels your bot can see.
- **Open all:** avoid. This gives the bot access to every channel you're in.

### Pair Your Account

The default DM access policy is **pairing mode**. Leave it there for first-time setup.

1. Click the link BotFather gave you to open your new bot in Telegram.
2. Send it any message. Try `start`.
3. The bot replies with a **pairing code**.
4. Paste the pairing code back into OpenClaw.

You're now paired. The bot will respond as OpenClaw from here on.

## Step 7: Lock It Down

After pairing works, tighten security.

1. Run `openclaw configure` to re-open the settings wizard.
2. Re-enter your bot token if prompted.
3. Change **DM Access Policy** from "pairing" to "allowlist" (or leave on pairing if you're the only user).
4. **Restart the gateway** to apply changes.

Your bot now only responds to the specific accounts or channels you've whitelisted.

## Test It

Try one of these:

- Run `openclaw tui` in your terminal for a text interface
- DM your bot in Telegram from your phone
- Open the dashboard at [http://localhost:8789](http://localhost:8789)

All three talk to the same OpenClaw instance. You should see the same conversation from any of them.

## Power Tips for Later

**Multi-channel Telegram setup:** Create separate Telegram channels for different contexts, like one for daily briefings, one for inbox management, one for client work. OpenClaw keeps separate conversation context per channel, so you don't pollute your morning brief with work-project chatter.

**Skip the menus:** The setup wizard writes to a plain text config file. Once you know its path, editing the file directly is much faster than clicking through the wizard every time. Ask your OpenClaw Support project: "Which file does `openclaw configure` write Telegram settings to?"

**Cron jobs:** The dashboard at `localhost:8789` has a Cron Jobs tab. Set up a recurring task like "every morning at 7am, send me my calendar and top three emails." That single automation alone makes the install worth it.

## Common Issues

**"command not found: openclaw"** after install: close and reopen your terminal.

**Bot not responding after pasting token:** you mistyped the token. Copy-paste again from BotFather.

**Setup wizard stuck on Node.js install:** it's slow, not stuck. Wait it out.

**Gateway won't start:** restart your WSL terminal and run `openclaw` again. If it still fails, check port 8789 isn't already in use.

**Prompt injection paranoia:** good. Keep your OpenClaw Telegram separate from personal messaging. Don't give OpenClaw access to credentials it doesn't need.

## You're Done

You now have an AI agent that lives on your Windows machine, reads your Gmail if you gave it GOG access, and responds to Telegram DMs from anywhere.

Next up: figure out what you actually want it to do for you. That's the fun part.
