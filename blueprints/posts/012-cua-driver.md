---
layout: blueprint.njk
title: "Your AI Can Now Run Your Mac in the Background. Without Stealing Your Mouse."
description: "Cua Driver fixes the single biggest reason most people don't run AI agents on their daily-driver Mac. The agent can click, type, scroll, and read inside any macOS app in the background. Your cursor stays put. Your active app stays put. Your Space stays put. You keep working. The agent works. Same machine, no fight."
date: 2026-05-05
difficulty: Intermediate
cost: "Free (open source). $0 to install."
timeToSetup: "30 minutes to install, an afternoon to wire your first agent flow"
originalSource: "https://news.ycombinator.com/item?id=47936312"
originalAuthor: "Francesco (Cua)"
originalAuthorUrl: "https://github.com/trycua/cua"
issueNumber: 12
permalink: /blueprints/cua-driver/
tags:
  - macos
  - desktop-automation
  - ui-automation
  - claude-code
  - openclaw
  - background-agents
  - cua
  - open-source
  - accessibility-api
  - founder-ops
---

## What You'll Build

An AI agent that does real work on your Mac while you keep using the same Mac for your real work. Both happening at once. No fighting. No tug-of-war over the mouse.

Concretely, the agent can do four things in the background. It can click buttons inside any macOS app. It can type text into fields. It can scroll through windows. It can read what is on the screen. All of that happens without ever moving your cursor, raising the agent's window to the front, or yanking you off the Space you are working on.

Picture three scenes. You are on a Zoom call and the agent is answering iMessages on your behalf in the Messages app. You are writing code in your editor and the agent is reproducing a bug in Chrome to confirm your fix. You are reading a PDF and the agent is filling out a form in a CAD app two windows back. In all three scenes, you do not see the agent moving. You just see the result, after the fact, when you go check.

This is the thing every operator who tried desktop automation in the last two years gave up on. The agent always took over the screen. The cursor jumped. The active window flipped. Your music app stole focus. You turned the agent off after 20 minutes and went back to doing it by hand.

Cua Driver is the open-source project that fixes that. macOS 14 and up. Free. One bash command to install. Built by Francesco at Cua.

You walk away with a Mac that genuinely runs two operators at once. You and an AI. On the same machine. Without flinching.

## Why The Cursor Wars Have Held Desktop Agents Back

You bought a $3,000 Mac. You wanted an AI agent on it.

You installed something that promised to "automate your desktop." You pointed it at a simple task. Maybe filing receipts in Mail. Maybe replying to LinkedIn DMs. Maybe a multi-step thing in Notion.

Then the agent started running.

Your cursor flew to the top of the screen on its own. The Notion window jumped in front of the email you were reading. Your Spaces switched without warning. You tried to type a sentence in Slack while the agent was working and your keystrokes ended up inside the agent's task. You alt-tabbed back. The agent fought you for it. Three minutes in, you killed the agent and went back to doing the thing yourself.

This is the cursor war. It is the single biggest reason desktop AI agents have not gone mainstream, even though every part of the stack except this one is ready.

The reason it happens is simple. On macOS, the standard way to fake a click or a keystroke is to send a system-wide event. The system-wide event is, by design, the same thing that happens when *you* click. So the system raises the window. It moves the cursor. It changes focus. It does the things macOS always does when a human takes an action. The agent and the human are using the same channel and the system cannot tell them apart.

The cloud-based agents got around this by giving the AI its own virtual desktop. That works, but you are now paying for and managing two computers. And you cannot do anything that lives on your real Mac. Your iMessages, your Keychain, your local design files, your Dropbox, your CAD software, your build tools. None of it is on the cloud Mac.

What operators actually want is this. The AI on my Mac. Doing work I would otherwise do. While I keep using the Mac for the work I want to keep doing myself. Same machine. Same files. Same logged-in apps. No fight.

That is what Cua Driver delivers.

## What Cua Actually Does

Through some clever lower-level macOS plumbing, Cua tells your apps to receive clicks without ever raising the window or moving your cursor. It is the same idea as a developer talking to a window over a private side door instead of yelling through the front door where everyone hears it.

The result is the only thing that matters. The agent's clicks land. Your cursor stays where it is. The window that was on top stays on top. Your Space does not switch. You do not feel anything.

Under the hood, Cua does three things at once. It uses an internal macOS channel that delivers click events directly to a target app's process, not to the whole desktop. It uses a window-focus pattern made famous by the yabai tiling window manager that lets an app receive input without ever being raised to the front. And it does a tiny invisible "primer" click off the edge of the screen first, which is the bit of magic that makes Chromium-based apps (Chrome, Edge, Brave, Arc) actually accept the events instead of silently dropping them.

You do not need to understand any of that to use it. You install the driver, you point your agent at the app you want it to drive, and the events go to the right place. Quietly. Out of your way.

The team built this because every other path failed. Sending a normal cursor event moves your cursor. Sending a process-targeted event without the primer gets dropped by Chrome. Activating the target app raises the window. Cua's stack threads all three needles. That is the whole story.

## The Pattern

```
                    YOUR MAC, ONE SCREEN, TWO OPERATORS
                    ===================================

    YOU                                    AGENT
    ---                                    -----
    [keyboard]                             [Cua Driver]
       |                                       |
       v                                       v
    APP A (foreground)                     APP B (background)
    Slack                                  Chrome
    cursor here -> |                       agent clicking here
    you typing                             agent reading DOM
       |                                       |
       v                                       v
    your message sends                     ticket gets filed
    your cursor                            no window raise
    never moves                            no cursor move
    your space                             no space switch
    never switches                         you never see it
       |                                       |
       +------------- SAME MAC ----------------+
                  no fight, no flinch
```

You stay in App A. The agent stays in App B. The Mac runs both at full speed. You are not aware of the agent unless you go look at App B's window directly.

## Step-by-Step Setup

### Step 1: Install Cua Driver

You need a Mac running macOS 14 (Sonoma) or higher. Anything older will not have the system APIs Cua hooks into. Apple Silicon and Intel both work.

Open Terminal. Paste the install one-liner from the Cua GitHub repo. Hit enter. The installer pulls the binary, signs it for your machine, and registers it as a helper that your agent can call.

The first time you run it, macOS will ask for two permissions. Accessibility (so the driver can read what is on your screen, which is how it knows where the buttons are) and Screen Recording (for the apps where reading the screen is the only way to know what is there, like CAD tools). Grant both. They are scoped per-app, you can revoke them in System Settings any time.

Test the install with the sample script that ships with the repo. It opens a target app of your choice, clicks a button in it, and exits. The whole thing should run while your cursor stays exactly where you parked it. If your cursor moves, the install did not take. Re-run the installer.

Total time on this step: 5 to 10 minutes.

### Step 2: Pick Which Agent Harness You Are Driving

Cua Driver is just the muscle. It is the thing that does the clicking. You still need a brain that decides what to click.

You have three sensible options.

- **Claude Code.** The simplest path if you already use it. You write a small skill or command that hands the task to Cua Driver. Claude Code plans and Cua Driver executes.
- **OpenClaw.** The same idea but self-hosted. Better if you are running this 24/7 on a Mac mini and do not want to keep a Claude Code session alive.
- **Codex CLI.** Lighter and cheaper for purely repetitive tasks. Good for the tenth time you have automated the same workflow.

Pick one. Do not run all three at once on the same Mac. They will collide.

The team's recommendation, based on what they ship internally, is Claude Code for early experiments and OpenClaw once a workflow is dialed in.

### Step 3: Pick Your First Use Case (One App, Not Seven)

The biggest mistake people make on day one is trying to wire up an end-to-end workflow that touches Mail, Calendar, Notion, Slack, and a browser all at once.

Do not do that. Pick one app. Pick one task in that app. Get that one task working flawlessly in the background while you do something else in the foreground.

Good first use cases:

- The agent files yesterday's iMessages into folders, while you are on a call.
- The agent runs a saved search in your email, replies to two specific senders with templates, and exits.
- The agent opens Notion, finds a specific page, appends a daily journal entry, and closes the window.
- The agent opens Chrome to one URL, fills out a form with values from a CSV, and submits.

Pick one. The rest comes later, on the foundation of "I have already proven this works on my Mac for one thing."

### Step 4: Decide Your Interaction Strategy Per App Class

This is the only step where you need to be slightly thoughtful, and Francesco's quote on it is the whole framing: *"The mistake is defaulting to pixels everywhere or defaulting to AX everywhere."*

What this means in plain English. Different apps expose their insides in different ways. The right way to drive each app depends on which kind of app it is. Three families.

- **Native macOS apps.** Mail, Calendar, Messages, Notes, Reminders, Finder, Notion (mostly), Slack (mostly), most Apple-flavored apps. These expose what is called the Accessibility tree, which is a structured map of every button, label, and field. Cua reads the AX tree, finds "the button that says Send," and clicks it. Fast. Reliable. No screenshots needed.
- **Chromium-based apps.** Chrome, Edge, Brave, Arc, and any Electron app that is really a Chromium browser in a costume (Slack, Discord, Notion's desktop app for some flows, VS Code). These have an AX tree, but it is incomplete. Cua uses a hybrid. It reads the AX tree for layout, plus a screenshot when the AX tree is missing pieces. This is what the off-screen primer click trick was built for.
- **Specialized apps.** Blender, Photoshop, AutoCAD, Logic Pro, Final Cut, anything with a custom drawing surface. The AX tree is essentially empty for these. Cua falls back to pure pixel reading. Slower, but the only thing that works.

You do not have to write code that picks. Cua Driver picks for you based on what it finds. But you should know which family your target app is in, because it changes how forgiving the agent will be when the layout shifts. Pixel-based agents break when an app updates and moves a button. AX-based agents do not.

### Step 5: Test In Observer Mode

Before you let the agent execute anything, run it in dry-run mode for an afternoon. The agent plans the task, logs every click and keystroke it would have made, and exits without actually firing them.

You read the log. You catch the "the agent was about to click the wrong Send button" cases. You fix the prompt. You run again.

Two or three observer-mode runs per task is usually enough. After that, turn on execution.

The reason this matters is that desktop automation has a much higher cost-of-failure than a script that runs in the cloud. A script in the cloud can be killed and re-run. A click on the wrong button in your real Mail app might send a half-finished email to a customer. Observer mode is the cheap insurance.

### Step 6: Wire The Trigger

Decide how the agent gets started. Three patterns, in order of how often operators use them.

- **Cron / scheduled.** "Every weekday at 8 AM, run the morning email triage in the background." Simplest. Set it and forget it.
- **Voice or hotkey.** Tie it to a Raycast shortcut, an Alfred workflow, or a Stream Deck button. You hit a key, the agent runs, you keep working.
- **Inbound message.** The agent listens for an iMessage, an email, or a Slack DM addressed to a specific channel. When something arrives that matches a rule, the agent runs the task in the background. This is the "personal assistant" pattern.

You do not need all three. Pick one for your first use case. Add others as you have more workflows live.

### Step 7: Add A Kill Switch

This is the one step nobody wants to do and everyone wishes they had.

Bind a keyboard shortcut to a script that does three things in sequence. It kills any running Cua Driver process. It revokes the helper's accessibility permission. It posts a message to your phone via Pushover or iMessage saying "agent killed at HH:MM, by manual switch."

You will never need it on a normal day. The day you do need it, you will need it in three seconds, not three minutes. Wire it before you turn the agent loose.

The kill switch is also what makes you psychologically comfortable letting the agent run while you are in another room. You know the off button is one keystroke away. So you stop watching the agent. So you actually get the leverage you set this up for.

## Lanes That Work

This blueprint is for anyone who has already tried desktop automation and bounced off, plus a few new lanes that did not have a path before.

**Solo founders on a single Mac.** Primary audience. You bought a high-end Mac for your work. You do not want a second cloud Mac. You want the agent on the machine you are already using. Cua Driver is the first project that lets you have both at once.

**Indie devs running QA agents alongside coding.** You are writing code. The agent is, in another window, running the code you just wrote against a battery of test cases. Both happening on the same machine. You see test results land in a log file as you keep typing. You are not babysitting the QA window.

**Content creators automating posting.** You are recording, editing, or writing. The agent is in the background pushing yesterday's content to Buffer, scheduling Bluesky posts, uploading the YouTube short, and renaming the Drive files. None of this interrupts your creative window.

**Anyone who has tried Robotic Process Automation tools and given up.** UiPath, Automa, Pulover. They all have the same cursor-stealing problem on macOS. Cua Driver is the missing piece that makes the same automation patterns work without taking over the machine.

**Operators using iMessage as a remote control.** You are out of the house. You text "file the receipts." The Mac at home runs the agent in the background and texts you back when it is done. The Mac is logged in to your real apps. The cloud cannot do this. Cua can.

**Solopreneurs running a 3-window business.** Customer support in one window. Order fulfillment in another. Inventory in a third. The agent runs the boring sweep across all three while you talk to your most important customer in the foreground.

What does not work: Windows users. Cua is Mac-first by deliberate design. The team is going deep on macOS instead of broad across operating systems. Linux is also not supported. If your daily driver is a PC, this blueprint is not for you yet.

## Use Cases the Team Has Already Wired Up

Four patterns the Cua team has built and tested internally. These are not future-roadmap items. They are working today.

**Delegated demo recording.** Claude Code drives the apps. Cua Driver does the clicking and typing. While the demo runs, Cua captures the trajectory (which actions happened in what order), the screenshots (what the screen looked like at each step), and the actions themselves (the click coords, the typed text, the wait times). The output is a perfect demo recording you can edit, narrate, or replay. The killer detail: the demo is recorded *while you keep working in another app on the same Mac*. You are not stuck watching the agent perform. You are getting other work done while it produces the artifact.

**Replacing browser automation frameworks.** If you have ever used Playwright, Puppeteer, or Selenium to drive Chrome, Cua Driver is a drop-in replacement that does not need Chrome DevTools Protocol at all. It just clicks the real Chrome window like a human would. This matters because CDP-based automation is detectable by anti-bot systems. Cua's clicks are real OS-level clicks routed through the SkyLight side door. Bot-detection sees nothing because there is nothing to see.

**Background QA agents.** You ship a bug fix. The QA agent reproduces the original bug in your test environment, applies your fix, and verifies the bug is gone. All in a window in the background. You keep coding the next feature. When the QA agent is done, it posts to your Slack with pass or fail. If pass, you ship. If fail, you have the trajectory recording from the previous use case to debug from.

**Personal assistant workflows using iMessage.** You text the agent. The agent receives the iMessage in the Messages app on your Mac (which is logged in to your account, with your contacts, your blue bubble identity, and your full history). The agent reads the message, does the task on the Mac, and replies via iMessage from your number. The recipient sees a normal message from you. There is no API key, no service account, no separate "AI assistant" identity. It is just you, with a brain that runs while you sleep.

**Extracting visual context from background windows.** Need to know what is in that other window without raising it? Cua Driver can read screen content from a window that is not in front, without bringing it to the front. This is how the agent answers questions like "what is the price in the cart in the Safari tab I opened an hour ago" without disturbing what you are doing now.

## What Changes After Setup

**Day 1.** You install Cua Driver. You wire one task in one app. You run it in observer mode. You watch the log. You feel mildly suspicious. The whole thing works while your cursor sits motionless in another window. You do not believe it on the first run. You run it again. It works again.

**Week 1.** You have three or four tasks wired. The morning email sweep. An afternoon Notion update. An end-of-day Drive file rename. You stop noticing they are happening. You realize you have not seen your cursor jump in seven days.

**Month 1.** You have stopped doing maybe a dozen small chores by hand. You estimate, very roughly, that you have gotten back about 90 minutes a day across the dozen chores combined. You used to do them in 10 minutes here and 5 minutes there, but the context-switch tax was punishing. Now they happen invisibly. You have your day back. Nothing in your foreground experience of the Mac has changed. Your cursor has not moved on its own once.

**Month 3.** You have wired a workflow you would never have considered before, because it would have been too disruptive to run during the day. Maybe it is the QA agent. Maybe it is the iMessage personal assistant. Maybe it is the demo recorder. The fact that the agent runs invisibly is what unlocked the workflow. You realize the cursor war was not a small annoyance. It was the thing that kept you from running real automation on your real Mac. With it gone, the Mac is now a different kind of machine.

## Gotchas and Tips

**Run macOS 14 or higher.** Cua Driver depends on internal system APIs that did not exist in earlier macOS versions. If you are on macOS 13 or older, the install will refuse. There is no older fallback. Update the OS or this blueprint is not for you.

**Chromium apps need the off-screen primer click.** This is the magic step you will forget the moment something goes wrong. Cua does it for you automatically, but if you ever go off-script and try to send a click directly to Chrome, Edge, Brave, or any Electron app, you will get nothing. The events get silently dropped. The fix is "go through Cua Driver." Do not try to outsmart this.

**Pixel-based fallback exists for a reason.** For specialized apps (Blender, Photoshop, CAD), Cua falls back to reading screenshots and clicking by coordinates. This is slower and breaks when the app updates and moves a button. If you are automating a specialized app, expect to re-tune your prompts every few months when the app changes. The native AX path does not have this problem. Pick the AX path when you can.

**Windows is deliberately not on the roadmap.** The team is going deep on macOS instead of broad. The undocumented system APIs Cua uses do not exist on Windows. There is no equivalent. If you have a mixed fleet, run Cua on the Macs and a separate Windows-flavored solution on the PCs. Do not wait for the Windows version, it is not coming any time soon.

**Telemetry is on by default.** This was the most-criticized part of the launch. The team has confirmed it is anonymous, command-level only, and does not include screenshots, prompts, file paths, or arguments. They are working on making opt-out clearer. To opt out today, set the environment variable the repo documents in the README and restart the driver. If you are running this on a Mac that handles client work, set the opt-out before you point it at anything sensitive.

**Always pair the driver with a kill switch.** This is not optional. Wire a keyboard shortcut that kills the helper process and revokes its accessibility permission in one step. You will need it once. That once will be enough to make you grateful you wired it.

**The off-screen primer click is the magic step you will forget.** Worth saying twice. When you are debugging and a click is not landing in Chrome, your first thought should not be "the agent is broken." It should be "did the primer happen." The driver does this automatically. If you have customized the flow, double-check.

**Do not automate anything destructive without a 2FA-style review step.** Sending email, posting to social, paying invoices, deleting files, sending iMessages to clients. All of these need a human-in-the-loop confirmation step before the agent is allowed to commit. Build the confirmation as a separate prompt the agent has to clear, ideally one that pings your phone. The cost of a wrong destructive action is much higher than the cost of one extra confirmation prompt.

**Embed CuaDriverCore in your own Swift app if you are building a product.** The Swift dependency `CuaDriverCore` is the same engine the CLI uses, packaged for embedding. If you are shipping a Mac app that needs to drive other Mac apps in the background (a launcher, an automation tool, a custom QA harness, an assistant), pull in CuaDriverCore as a Swift Package. You get the same SkyLight-side-door behavior without having to reinvent it.

**Watch your screen recording permission grants.** Each app you automate needs its own permission grant for the driver. macOS will pop a permission dialog the first time. If you skip the dialog or click Deny, the driver silently fails to read that app's screen and you will get confusing "no element found" errors. Re-grant in System Settings -> Privacy & Security -> Screen Recording.

**Keep one task per agent run for the first month.** Do not chain three tasks in a row before you trust each one individually. A failure in step 1 cascades. A failure in an isolated single-task run is easy to debug. Compose later.

## Keep Reading

- **[One Claude Code Subscription. Five Agents. Zero New Frameworks.](/blueprints/claude-code-command-center/)**. The harness pattern that pairs naturally with Cua Driver. Run multiple agents off one subscription, point one of them at Cua, and you have a fleet on a single Mac.
- **[Set Up a 4-Agent Business Team on a Mac Mini](/blueprints/four-agent-team/)**. The hardware companion. A dedicated Mac mini, four agents, Cua Driver doing the desktop work. The whole team runs on a $600 box.
- **[He Let an AI Triage 180 Emails a Day. Here's the Stack.](/blueprints/inbox-triage-agent/)**. The most popular first use case for a Cua-driven agent. Inbox triage with the cursor never moving. Your morning back, with no fight for the screen.
