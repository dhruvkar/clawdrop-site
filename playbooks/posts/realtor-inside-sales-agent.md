---
layout: playbook.njk
title: "The Inside Sales Agent That Never Sleeps (For Real Estate)"
description: "Real estate lead follow-up automation: an AI ISA that replies to every Zillow and website lead in under 60 seconds, in your voice, then follows up until they book a showing."
date: 2026-06-10
difficulty: Intermediate
cost: "A Claude subscription plus the Gmail and iMessage accounts you already pay nothing extra for."
timeToSetup: "A weekend"
originalSource: "https://www.reddit.com/r/automation/comments/1tx4704/i_built_an_agent_that_manages_my_email_from/"
originalAuthor: "GwinnettShawty (r/automation)"
tags:
  - real-estate
  - realtor
  - lead-generation
  - speed-to-lead
  - email
  - imessage
  - inside-sales
  - automation
  - claude
  - follow-up
permalink: /playbooks/realtor-inside-sales-agent/
---

## Tools

- [**Claude Code**](#aff-claude-code): the brain. It reads each incoming lead, decides if it matters, drafts a reply in your voice, and keeps the follow-up going. You can also run this on [**OpenClaw**](#aff-openclaw).
- [**Gmail**](#aff-gmail): where your portal leads already land. Zillow, Realtor.com, and your website all email you. The agent watches that inbox.
- [**iMessage**](#aff-imessage): how the agent reaches you. It texts you a short summary of each real lead and the draft it wrote, so you can approve from your phone between showings.
- Your CRM and your portal lead emails, used as-is. You do not have to move off Follow Up Boss, kvCORE, or whatever you run today.

## What You'll Build

An inside sales agent that answers every lead the second it comes in, sounds exactly like you, and chases the lead until they book a showing.

The original build is not a real estate tool. A developer who goes by GwinnettShawty built an agent named Sifta that manages his email from iMessage. It watches his Gmail, filters out the noise, and texts him only what matters as a short summary. The part that surprised him: after a couple of weeks it learned how he actually uses email. Who he replies to fast, who he ignores, how his tone shifts between a client and a vendor. When he asks it to draft a reply, it does not sound like generic AI. It sounds like him, because it read weeks of how he writes.

That is the whole pattern. And it maps perfectly onto the one job that decides who wins a real estate deal: speed-to-lead.

You are going to take that same email-watching, voice-learning agent and point it at your lead pipeline. A Zillow inquiry hits your inbox at 9:14pm while you are at a closing dinner. Within a minute, the lead gets a real, personal reply that sounds like you wrote it. You get a text with the draft and a one-line summary. If you do nothing, the agent follows up tomorrow, and the day after, until the lead books a showing or tells you to stop. This is the roughly $40,000-a-year ISA hire, running on your phone for the price of a subscription.

## Why This Works

Speed-to-lead is not a nice-to-have. It is the single biggest predictor of who closes the deal, and the numbers are brutal.

The often-cited Lead Response Management study found that contacting a web lead within 5 minutes makes you far more likely to reach and qualify them than waiting even 30 minutes. After the first 5 minutes, the odds of a meaningful connection fall off a cliff, and by an hour later you are mostly talking to people who have already filled out three other agents' forms. The lead who fills out a Zillow form is not browsing. They are shopping right now, and they are messaging more than one agent. Whoever replies first and sounds most like a real person gets the conversation.

Here is the problem every agent already knows. You cannot reply in 5 minutes when you are standing in someone's kitchen showing a house. You are at a closing, in the car, at your kid's game, asleep. The lead comes in, sits for two hours, and by the time you see it the buyer is already touring a listing with the agent who texted back at minute three. You did not lose that lead on price or service. You lost it on a notification you could not get to.

That is exactly the gap this fills. The agent never shows a house, never sleeps, never gets to a lead late. It replies in under a minute, every time, with a message that reads like you typed it. And because it learned your voice, the buyer is not talking to an obvious bot. They are talking to "you," fast, while they are still warm. You step in when it counts: the showing, the price talk, the offer.

## Prerequisites

- A Claude subscription, or Claude Code / OpenClaw set up to run the agent.
- The Gmail account where your portal and website leads arrive. If Zillow and Realtor.com currently email a different address, forward them into one inbox.
- iMessage on your phone, set up so the agent can text you summaries and drafts.
- A few weeks of your own sent emails and texts to leads, so the agent can learn how you actually write. The more real examples, the better the voice.
- Your CRM, however you use it today. The agent can log to it later, but you do not need that to start.
- Ten minutes to read your portals' and MLS's terms of service on automated messaging (see Gotchas).

## Step-by-Step Setup

### Step 1: Point All Your Leads at One Inbox

Get every lead source landing in a single Gmail. Zillow, Realtor.com, Homes.com, your IDX website form, and your Facebook lead ads all send email notifications. Set up forwarding so they all hit one inbox the agent watches. This is the same move the original builder made: the inbox is the trigger.

### Step 2: Teach the Agent Your Voice

Give Claude a stack of your real replies to past leads. Old "thanks for reaching out" emails, your follow-up texts, the way you open and sign off. The original agent learned its user's style by reading weeks of his email until the drafts sounded like him. Do the same on purpose. Tell it your name, your brokerage, your service area, and the three or four things you always say to a new buyer. This is what keeps the replies from sounding like a robot.

### Step 3: Tell It Which Emails Are Leads

Not everything in that inbox is a lead. There are newsletters, e-sign notifications, and vendor spam. Give the agent a simple rule for what counts: a real buyer or seller inquiry from a portal, a website form, or a referral. Everything else it leaves alone or summarizes quietly. The original build's whole point was filtering noise and texting only what matters. Here, "what matters" is a new lead.

### Step 4: Have It Reply in Under 60 Seconds

When a real lead lands, the agent drafts a reply in your voice that does three things: answers their actual question, sounds like a person, and asks for the showing. "Hey Maria, yes, 412 Oak is still available and it's a great one. I've got a couple of slots tomorrow afternoon, want me to grab one for you?" Start with draft-then-approve: it writes the reply, texts it to you, you tap to send. Once you trust it, you can let it auto-send the simple first replies and only flag the tricky ones.

### Step 5: Set Up the Text-Back to You

This is the iMessage piece. For every real lead, the agent texts your phone a one-line summary and the draft it wrote: "New Zillow lead, Maria, asking about 412 Oak. Drafted a reply offering a showing tomorrow. Send it?" You approve from wherever you are, between showings, in the car at a red light. Your inbox comes to you, instead of you having to go dig through it.

### Step 6: Turn On Follow-Up Until They Book

A single reply is not follow-up. Most leads do not answer the first message. Tell the agent to keep going on a schedule: a nudge the next day, another a few days later, then weekly, until the lead books a showing or asks to stop. This is the part a human ISA does badly because they get busy or quit. The agent does not forget and does not get discouraged on lead number forty.

### Step 7: Run It on Real Leads for a Week Before You Trust It

The first week is calibration, not launch. Watch every draft before it sends. Fix the voice where it sounds off, correct it when it misreads a lead, tighten the follow-up cadence. The original builder's whole story is that the agent got dramatically better after a couple of weeks of real use. Yours will too. Do not point it at your most expensive lead source on day one.

## Adapting This for Your Business

The build is the same. You change who it is, the lead sources, and how aggressive the follow-up is.

- **Solo agent.** This is your highest-leverage hire and you cannot afford the human version. Run it on every lead source you have. Keep draft-then-approve until you trust it, then let it auto-send first replies so you stop losing leads while you are showing.
- **Small team or brokerage.** Run an agent per agent, each trained on that agent's voice, or a single team agent that routes leads to whoever is up in the rotation and replies in the brand's voice. Now your speed-to-lead does not depend on which agent happened to be near their phone.
- **Mortgage brokers.** You live on the same speed-to-lead curve. A rate inquiry or pre-approval request that sits for an hour is gone. Same build, pointed at your application and rate-quote leads, replying fast and chasing the doc list.
- **Insurance agents.** A quote request is a now-or-never moment. The agent replies in under a minute, in your voice, and follows up until they bind. Swap "book a showing" for "finish the quote."

## Gotchas and Tips

- **Draft-then-approve before you ever auto-send.** Do not let the agent send unsupervised on day one. The original builder's hard rule is that it never sends a draft without approval. Earn the trust first. Auto-send the boring first replies only after a week of clean drafts, and keep the rest gated.
- **Never let it touch price or negotiation alone.** Replying "yes it's available, want to see it" is safe. Quoting a counteroffer, advising on price, or committing you to terms is not. Keep a human in the loop on anything financial or contractual. Always.
- **Fair-housing language is a real risk in AI-drafted copy.** An agent that "sounds friendly" can wander into steering, familial-status, or other protected-class language without meaning to. Tell it to never describe neighborhoods by who lives there, never reference schools as a selling point, and never comment on whether an area is "good for families." Review the drafts with this specifically in mind during your calibration week.
- **Read your portals' and MLS terms on automated messaging.** Zillow, Realtor.com, and your MLS have rules about automated and bulk contact, and some have opinions about bots messaging leads. Know them before you scale. The point is fast, personal replies, not blasting.
- **Honor opt-outs and do-not-contact instantly.** If a lead says stop, the follow-up stops, that second. Bake it in.
- **Watch for the buried-lead failure.** The agent builds a mental model of "important," and a one-line, oddly-worded inquiry can slip past it. Check the raw inbox for the first couple of weeks so a real lead never gets filed as noise.

## What This Replaces

Before this, the agent who answered fastest won, and answering fastest meant one of two things.

- **A real inside sales agent.** A good ISA runs roughly $40,000 a year plus commission, needs managing, takes vacations, and still goes home at night. Most solo agents and small teams cannot justify the hire, so the job does not get done.
- **You, trying to be the ISA between showings.** Which means the lead that came in while you were in someone's kitchen sat for two hours, and the buyer booked with whoever texted back at minute three. That is the lost lead. You never see the deal you didn't get.

After this, every lead gets a real, personal, in-your-voice reply in under a minute, day or night, followed up until they book or bow out. The job that justified a $40k hire, or quietly cost you deals you never knew you lost, now runs on your phone for the price of a subscription. You stop competing on who happened to be near their phone, and start competing on the part you are actually good at: the showing and the close.

---

## Keep Reading

- **[His Life Insurance Agency Texts and Calls New Leads in 2 Minutes. Automatically.](/playbooks/life-insurance-2-minute-follow-up/)**: the same speed-to-lead play in another industry that lives or dies on response time, with the texting and calling piece built out.
- **[He Lost a Client to a Missed Follow-Up Email. Then He Stopped Doing Follow-Ups.](/playbooks/freelancer-invoice-chaser/)**: the follow-up-until-they-respond engine, applied to chasing what slips through the cracks.
- **[The Four-Piece AI Front Desk Every SMB Should Have Running by Friday](/playbooks/ai-front-desk/)**: pair this lead-reply agent with the inbound phone and chat pieces so nothing reaches you unanswered.
