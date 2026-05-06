---
layout: blueprint.njk
title: "He Built a 5-Tool Claude Stack to Pick Out a Puppy. The Pattern Works for Anything New in Your Life."
description: "A creator at Blazing Zebra walked through every surface of Claude (chat, Cowork, Code, Office, Chrome, Dispatch) using one running example: adopting a new puppy. Folder scaffolding, milestone tracker app, vaccine schedule Excel, Petfinder shortlist, trainer research from his phone, all in one afternoon. The puppy is the storyline. The methodology works for any new chapter in your life: new baby, new house, new business, new health challenge."
date: 2026-05-06
difficulty: Beginner
cost: "$20-100/month Claude subscription depending on tier"
timeToSetup: "An afternoon for the full stack, an evening for any single piece"
originalSource: "https://www.youtube.com/watch?v=fs8pKudeloY"
originalAuthor: "Blazing Zebra"
originalAuthorUrl: "https://www.youtube.com/@BlazingZebra"
issueNumber: 12
permalink: /blueprints/puppy-claude-stack/
tags:
  - personal
  - family
  - claude-cowork
  - claude-code
  - claude-office
  - claude-chrome
  - claude-dispatch
  - life-event
  - methodology
  - beginner
---

## Tools

- [**Claude**](#aff-claude): the umbrella product, all surfaces share one subscription
- [**Claude Cowork**](#aff-claude-cowork): the project workspace where folders and files live
- [**Claude Code**](#aff-claude-code): builds real apps in local mode from plain English
- [**Claude Office**](#aff-claude-office): Excel and PowerPoint surfaces for spreadsheets and decks
- [**Claude Chrome**](#aff-claude-chrome): browser extension that rides along on logged-in sessions
- [**Claude Dispatch**](#aff-claude-dispatch): text Claude from your phone, work runs on your desktop
- [**Anthropic**](#aff-anthropic): the company behind Claude and the model layer
- [**Petfinder**](#aff-petfinder): adoption search target for the Chrome demo
- [**Microsoft Excel**](#aff-excel): vaccine schedule output
- [**PowerPoint**](#aff-powerpoint): matching slide deck output
- [**Google Drive**](#aff-google-drive): where the spreadsheet ended up for sharing

## What You'll Build

The creator behind Blazing Zebra opens his video with a quiet line. He lost his little puppy not long ago, and he and his wife are getting excited about looking for a new one. Then he spends the next 30 minutes walking through every surface of Claude using that adoption as the running example.

On the surface, this is a Claude product tour. Watch closer and it is something more useful: a methodology for handling any new chapter in your life using AI as a research, planning, and execution team. The puppy is the storyline. The five steps are the pattern.

New baby. New house. New business launch. New diagnosis. New role at work. Same stack. Same five steps. One folder on your computer that captures everything you need to know about the new thing in your life. A research doc, a custom app, a spreadsheet, a slide deck, and a vetted list of local services that you actually use.

You walk away with one folder on your computer that captures everything you need to know about the new thing in your life, plus five working artifacts (a research doc, a custom app, a spreadsheet, a slide deck, a list of vetted local services) that you actually use.

## Why "New Thing" Research Always Goes Sideways

New things in life arrive with research debt. 50 browser tabs open across two devices. Three half-read articles. A Google Doc that goes stale by week two. A list of local providers you screenshotted on your phone and never called. By month three you have forgotten what you researched in month one, and you are starting over from a worse position because now you also feel behind.

Most of us have lived this. New baby and the registry research you did at 26 weeks is useless by 38. New house and the contractor list you built last spring has phone numbers that go to voicemail. New diagnosis and the specialist names from your first appointment are buried in a thread with the receptionist. New business and the competitive research from week one is wrong by week six.

The cost is not really time. It is decision fatigue and context loss. By the time you actually need the information, it is scattered across five places and none of it is current. You make the decision tired, with bad data, and then you live with it.

The pattern in this blueprint replaces all of that with one folder, one workspace, and a research team that picks up where you left off. You stop having to remember. The folder remembers for you.

## The 5 Surfaces (Demoed on a Puppy)

### 1. Chat: The Front Door

The chat is the surface you already know. Type a question, get an answer, you are done. No folder, no setup. The creator calls it "the front door."

For the puppy, he asks Claude to shortlist five dog breeds for an active outdoorsy couple living rurally. He uses the desktop app rather than the web because the desktop app gives him faster access to other surfaces later. He picks Opus 4.7 specifically for this question because it is a planning moment, not a quick lookup.

Worth flagging: model picking matters more than most people realize. At the $20 a month tier, Sonnet is your daily driver and Opus is rationed. The creator's heuristic is to live in Sonnet by default and flip to Opus for the big planning moments. Breed shortlist is a big planning moment. Asking what time to feed a puppy at 8 weeks is not.

The same surface for a new house: "shortlist 5 neighborhoods for a remote-working couple with a toddler, prioritize walkability, schools above an 8 rating, under $1.2M, within 30 minutes of downtown." For a new business: "shortlist 5 niches inside boutique fitness that have low competition and high willingness to pay." The shape of the prompt is the same. The constraints change.

### 2. Cowork: The Folder That Knows Everything

Cowork is the project workspace. It can read, write, and manipulate files on your local machine. It manages context across long projects so you do not start over every time you open a new chat.

For the puppy, the creator selects an empty folder on his desktop named `new puppy`. He asks Cowork to scaffold it with everything he needs: subfolders for feeding, supplies, training, and vet, each populated with starter documentation. Two minutes later he has a real folder with real files in it. Feeding has a starter doc on puppy nutrition by age. Training has a starter doc on the first 30 days. Vet has a placeholder for the vaccine schedule.

This is the unlock. From now on, every other surface reads from and writes to this folder. The chat is one-shot. Cowork is the long memory.

For a new baby, the same scaffold gives you a `newborn-prep` folder with feeding, sleep, medical, and registry subfolders. For a new business, it is the founder context OS pattern: company, customers, product, finance, legal. For a new diagnosis, it is condition, medications, specialists, journal. The folder structure changes. The pattern is identical.

The thing the creator emphasizes here, and that most people miss, is that **the folder is the difference between this working in month 3 and not**. Without the anchor, you are back to scattered tabs.

### 3. Code: One Prompt, One Working App

From inside the Cowork puppy folder, the creator opens Claude Code in local mode. He picks the `tracker app` subfolder and types one sentence: "Build me a puppy milestone tracker with charts."

Five minutes later he has a working web app. Real local database behind the scenes. Charts that update as he logs milestones. Exportable data so he can hand it to a vet. A "Live Artifact" share option so he can send it to friends and family without setting up hosting.

Stop and feel what that means. He did not write code. He did not pick a framework. He did not configure a database. He typed a sentence and got a real, working, share-able app.

For a new baby, the same prompt gives you a feeding and sleep tracker that beats most of the $9-a-month apps in the App Store. For a new business, it is a customer onboarding tracker. For a new diagnosis, a symptom journal with charts the doctor will actually look at. For a new house, a closing-cost calculator your spouse can poke at.

The mental model shift is this: any time you would have downloaded an app to track something, build the app instead. The "build" is one sentence. The app fits your life instead of the other way around.

### 4. Office: Excel + Slide Deck in One Pass

Office is the Excel and PowerPoint surface. This used to be the weakest part of the Claude stack. It is now real.

The creator asks Claude to build an Excel file for the vaccine schedule with multiple tabs, including a vet-questions tab. Claude produces a real `.xlsx` file with formatted columns, dates, dropdowns, and a separate tab where he can pre-write the questions he wants to ask the vet at each visit. Then he asks Claude to turn the spreadsheet into a matching slide deck for sharing with his wife. Claude produces a real `.pptx`. The numbers match. The tabs match.

The integration between Excel and PowerPoint is the part that was missing six months ago. You can now move structured data from one to the other in one pass. No copy-paste. No chart re-creation. The deck reads from the spreadsheet's logic.

For a new house, this is the closing-cost spreadsheet plus a slide for your co-buyer. For a new business, it is the financial model plus the investor-update template that pulls from it. For a new diagnosis, the medication schedule plus a one-page slide for the family meeting.

The creator drops the file into Google Drive at the end so his wife can review it on her phone. Worth noting: he started in Office, ended in Drive. The surfaces hand off cleanly.

### 5. Chrome and Dispatch: Research Without Sitting at the Computer

These are two different surfaces but they solve the same problem: research that needs to happen while you are doing something else.

**Chrome** is the side panel extension. It rides along in your already-logged-in browser session. The creator points it at Petfinder and asks it to shortlist medium-energy Labrador retrievers within 50 miles. Because it is logged in as him, it can see the same listings he would see, including the saved searches and account-specific filters. It returns a summary of each candidate with the shelter, the distance, and a one-paragraph readout.

He says this saved him hours of manual scrolling. With Opus 4.7 driving, the shortlist was good enough that he flagged three to call. Worth flagging: this is what the Chrome extension is for. Logged-in tasks. Petfinder, Zillow, GreatSchools, your bank, your insurance portal. Anything that requires "I have an account here."

**Dispatch** is the surface most people have never tried. The creator texts Claude from his phone while he is out walking: "Research puppy trainers in my area based on reviews, compile a Word doc on my desktop with top recommendations and next steps." The agent runs the work on his desktop while he is anywhere with internet, then emails or texts the doc back when done.

This is Anthropic's safe-and-manageable answer to OpenClaw's autonomy. Your computer does the work. You do your life. The two stay synced through your phone.

For a new baby, this combo finds 5 daycare options near your house and texts back the call list while you are at the pediatrician. For a new house, it pulls 3 contractor bids while you are at work. For a new role at work, it summarizes the latest internal docs while you are commuting.

The creator also mentions the surface he is *not* demoing: Computer Use. He flags it as around 70% reliable today and says, "the people who learn to use it now will have a real advantage when it gets to 110%." Worth knowing it exists. Not worth putting it in the critical path of anything that matters.

## What Makes This Pattern Work

**One folder is the anchor.** Cowork holds the context. Every other surface reads from and writes to it. Without this anchor, you are back to scattered tabs and stale Google Docs. The folder is what makes the system survive month 3, when you stop remembering what you researched in month 1.

**The right surface for the job.** Do not try to do everything in chat. Excel goes to Office. Apps go to Code. Logged-in browser tasks go to Chrome. Phone-while-out-of-the-house tasks go to Dispatch. The chat is for thinking out loud, not for doing the work. Most people get trapped in chat because it is the surface they discovered first.

**Skills before scheduled tasks.** Once a workflow works manually, turn it into a reusable skill. Then, and only then, automate it via scheduled task. The creator is blunt about this: "Don't try to create a scheduled task before you've worked through it manually. Been there, done that." Skipping the skill step gets you brittle automations that break the second the world changes slightly.

**Memory is where the wheels come off.** Claude stores memories in many places. Project memory, account memory, the new "auto dream" memory that surfaces patterns across your sessions. Knowing where each lives, and where each can go stale, is, in the creator's words, "the number one way to get AI to produce the results you want." If a session is producing weird results, the answer is almost always memory drift. Start a new session.

## The Setup

1. **Create one folder for the new chapter.** Name it after the actual thing: `new puppy`, `kitchen remodel`, `baby due october`, `crohns workup`. This folder is the anchor for everything else. Pick a name your future self will recognize at a glance.

2. **Open Cowork in that folder. Ask it to scaffold.** One prompt: "Set up this folder for [the thing], with subfolders and starter docs for the things I will need to track." Liam Ottley calls this the Context OS step in his AIOS blueprint. The same pattern works at family scale, not just business scale.

3. **Ask Chat for an opinion before you commit.** Breed shortlist, neighborhood shortlist, daycare shortlist, specialist shortlist. Pick Opus 4.7 if you have access. Sonnet otherwise. Save the answer as a markdown file inside your scaffold folder so it survives the chat session.

4. **Build one custom app in Code.** Local mode, plain English, working in five minutes. Not every chapter needs an app, but most do. The Petfinder researcher does not need one. The milestone tracker does. So does the symptom journal. So does the closing-cost calculator. So does the feeding and sleep log.

5. **Push the messy data into Office.** Excel for the schedule, PowerPoint for the share with a co-decision-maker (spouse, family, partner, advisor). Drop the result into Google Drive so the other person can read it on their phone.

6. **Wire your phone in via Dispatch.** When you are at the park or in the car and you remember a question, text Claude. The work happens on your desktop while you live your life. The doc lands in your inbox. You read it that evening.

## Lanes That Work

**New baby.** Feeding tracker app, sleep schedule spreadsheet, daycare shortlist via Chrome, pediatrician research via Dispatch. Hospital bag checklist as a Cowork doc. Registry research as a chat. The folder lives for two years and saves you in week 6 when you have not slept.

**New house.** Neighborhood shortlist, closing-cost calculator app, contractor research, school zone lookup, mortgage rate spreadsheet. Chrome rides along on Zillow and Redfin. Dispatch handles "find me 3 inspectors with reviews above 4.5" while you are at work.

**New business.** Founder context OS folder, lead tracker app, market research spreadsheet, competitor shortlist. Chrome handles LinkedIn and Crunchbase. Dispatch researches potential customers while you are running the business. Office produces the investor update.

**New diagnosis.** Symptom tracker app, medication schedule spreadsheet, specialist shortlist, peer-support research. The folder organizes appointments, lab results, questions for each visit. Worth saying clearly: Claude is not a doctor. Use it for organizing and shortlisting, not diagnosis.

**New role at work.** First-90-day folder, stakeholder map spreadsheet, decision tracker app, internal research. Chrome reads your company wiki while you are logged in. Dispatch summarizes Slack threads while you are in meetings. The deck for your 30-day check-in writes itself from the folder.

**New hobby.** Equipment shortlist, learning roadmap, local class research, progress tracker app. Lower stakes, but the same pattern is the difference between picking it up for real and quitting in week three because the gear research never ended.

## What Changes After Setup

**Day 1.** You spend an afternoon with the stack. You get one folder, one scaffold, one shortlist, one custom app, one spreadsheet, one slide. You text Claude one question from your phone before bed. You go to sleep feeling weirdly organized.

**Week 1.** You stop opening browser tabs and never closing them. Every research thread now has a home. The puppy tracker has 14 logged events. Your wife has actually opened the slide deck twice. You used Dispatch from the grocery store to add "ask vet about giardia screening" to the vet-questions tab.

**Month 1.** You are three vet visits in. The folder has grown. The vaccine schedule is half checked off. The trainer shortlist Claude built from your phone gave you a name you actually hired. You have stopped doing manual Petfinder scrolling because the Chrome agent runs it weekly.

**Month 3.** The puppy is home. You barely think about the folder anymore, but it is doing work in the background. The milestone tracker is the most-used app on your laptop. When a friend asks you for puppy advice, you send them the slide deck and they ask you who built it. You realize the methodology, not the puppy, is the thing you built.

The same arc plays out for every other lane. New baby, the folder is your sanity at week 6. New house, the folder is what survives the move. New business, the folder is the founder context OS that every contractor and hire reads to get up to speed.

## Gotchas and Tips

**Don't try to do everything in chat.** The folder is the difference between this working in month 3 and not. If you skip Cowork and live in chat, you are rebuilding context every week.

**Pick the right model for the surface.** Opus for planning, Sonnet for the daily, Haiku for the format conversions. At the $20 tier, Opus is rationed, so use it intentionally on the planning moments and live in Sonnet the rest of the time.

**Run the workflow manually before you turn it into a skill, and skill it before you schedule it.** Skipping steps gets you brittle automation. The creator's exact framing: been there, done that. Believe him.

**Don't sleep on the Chrome extension.** The logged-in session is what makes Petfinder, Zillow, GreatSchools, and any other "I have an account here" tool actually useful. This is the surface most people have never opened, and it is one of the highest-leverage ones.

**Dispatch is the unlock for new parents and anyone whose life happens away from a desk.** If you are in the car, at the park, in a hospital waiting room, on a job site: Dispatch is how Claude works for you anyway. Most people have never tried it. Try it.

**Memory is the silent killer.** Start a new session if results get weird. Don't fight a session past 30% of the context window. The new "auto dream" memory feature helps, but understanding where memories live is what separates good results from bad ones.

**Live Artifacts is great for sharing the puppy tracker with the kids or the closing-cost calculator with your spouse.** Don't share business artifacts this way without checking the privacy settings. The default is generous on purpose; that is fine for a puppy app, not fine for revenue numbers.

**Computer Use is at 70%.** Don't put it in the critical path of anything important. But do start practicing on low-stakes tasks now so you are ready when it gets to 100%. The people who wait until it is "done" will be six months behind.

**If your new chapter is medical, Claude is not a doctor.** Use it for organizing and shortlisting, not for diagnosis. The folder, the symptom tracker, the medication schedule: yes. The treatment plan: no. Bring the artifacts to the appointment, not the verdict.

**The puppy folder generalizes.** Same exact pattern, different folder name. Treat this blueprint as a template, not a one-off. Build it once, run it for every new chapter for the rest of your life.

---

## Keep Reading

- **[6 Non-Technical Founders Wrapped Their Businesses in Claude Code in 8 Hours. Here's What They Built.](/blueprints/aios-wrap-your-business/)**: The business-scale version of the Cowork scaffold, taught by Liam Ottley to founders with no engineering background.
- **[Build an AI Life OS That Knows Your Entire Day (Before You Do)](/blueprints/ai-life-os/)**: The personal-life version of the same idea. Take the puppy folder, expand it to your whole life.
- **[He Gave His Home a Brain. 50 Days Later, His AI Wakes Him Up, Cleans His House, and Judges His Sleep.](/blueprints/g-bot-home-brain/)**: What happens when you push the methodology even further into your physical environment, not just your folder structure.
