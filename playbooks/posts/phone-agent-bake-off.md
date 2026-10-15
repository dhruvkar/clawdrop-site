---
layout: playbook.njk
title: "Someone Gave 8 AI Phone Agents the Same Annoying Booking Call. Three Never Made a Real Call."
description: "Before paying for an AI that makes phone calls, one person ran the same test on eight of them: book a kid's checkup, after 3pm only, with a hard last name to spell. Two booked cleanly over a real phone line. Here is the test, the scorecard, and what to check before you sign up for anything."
date: 2026-10-14
difficulty: Beginner
cost: "Free credits on most of them. About $10 to $19 to try the rest. Plus the Claude subscription you already pay for."
timeToSetup: "A day and a half for all eight, most of it signups. One afternoon if you test two or three."
originalSource: "https://www.reddit.com/r/AI_Agents/comments/1wnxpb0/best_ai_phone_call_agent_i_tested_8_and_theyre/"
originalAuthor: "u/Evening_Hawk_7470 (r/AI_Agents)"
issueNumber: 32
permalink: /playbooks/phone-agent-bake-off/
tags:
  - voice-agents
  - phone
  - booking
  - vendor-selection
  - buying-guide
  - small-business
  - smb
---

## Tools

- [**Claude Code**](#aff-claude-code): did all the wiring. It read each vendor's instructions and set up the calls
- [**Retell**](#aff-retell): a build-it-yourself phone agent. The best-sounding call in the test
- [**Vapi**](#aff-vapi): build-it-yourself. Its daily limit on outbound calls stopped the test before it started
- [**Bland**](#aff-bland): build-it-yourself. The signup locked the tester out
- [**Twilio**](#aff-twilio): the phone-number company Vapi tells you to bring your own number from
- [**OpenAI**](#aff-openai): Ring-a-Ding runs on your own OpenAI account

The rest of the eight (PlaceCall, Ring-a-Ding, CALL-E, ClawCall, AgentPhone) are named in the story below.

## What you'll build

A test call.

Not a phone agent.
A tryout for one.

You write one short brief.
Every vendor gets the same brief.
Every agent calls your own cell phone.

You pick up and play the most annoying front desk in town.

Then you score each one on three things:
Did it follow the rules?
Did it get the details right?
Did it actually confirm before hanging up?

An afternoon of this tells you more than every demo video on every vendor's homepage.

## The story

Someone on r/AI_Agents wanted an AI to phone 15 event venues for them.

People in the comments suggested Bland, Vapi, Retell, and "check the recent YC batch."

So they tried all of them, plus a few more.

> Before letting anything loose on 15 venues I wanted to see it get through one annoying call.

Every tool got the same job:

> call a "dentist office" and book a kid's checkup, weekdays only, after 3pm because of school. The last name is long and a pain to spell.

They had Claude Code connect each tool.
Close to default settings.
No special tuning for any vendor.

> I wanted to see what you get out of the box.

Then they answered the phone and ran the same script every time.

First they offered today at 1pm or 2pm.
That breaks the after-3 rule.
Does it hold the line, or just take the slot?

Then they asked for the patient's full name and made it spell the last name.
Sometimes twice.

Then they offered next Tuesday at 4 or 5 and asked which one worked better for her.

> The agent is supposed to pick one, not throw the question back at me.

A pass meant three things.
A weekday slot after 3.
The name spelled right and on the booking.
A clear confirmation before hanging up.

## The scorecard

| Tool | Kind | Getting started | Call quality | Booked? |
|---|---|---|---|---|
| Retell | Build it yourself | Card, then ID check for a phone number | Best | Yes, but in a browser, not a phone line |
| PlaceCall | Just hand it the task | Email, key, dial | Great | Yes, over a real phone |
| Ring-a-Ding | Just hand it the task | Easy, but $19/mo plus your own OpenAI key | Good | Yes, loose ending |
| CALL-E | Just hand it the task | Easy, free credits | Mixed | Partly |
| ClawCall | Just hand it the task | Easy, free trial | Weak | No |
| AgentPhone | Build it yourself | About $10 before it would dial | OK, then quit | No |
| Vapi | Build it yourself | Outbound calls capped | Never called | No |
| Bland | Build it yourself | Locked out at signup | Never called | No |

Three of the eight never made a real phone call for the tester.

> Also, half my afternoon went to signups.

## There are two different products here

This is the part most people miss.

> Took me a couple of tools to realize these aren't the same thing at all.

**Build it yourself.**
You buy a number, write the instructions, pick a voice and a model.
Retell, Vapi, Bland and AgentPhone work this way.

**Just hand it the task.**
You tell it who to call and what you need.
It calls.
PlaceCall, Ring-a-Ding, CALL-E and ClawCall work this way.

Retell sounded the best by a lot.

> No lag, never repeated itself, sounded like a person.

It turned down 1pm, spelled the name, and picked 4pm on its own.
But getting a real phone number meant an ID check with documents.
The tester didn't finish it, so their Retell test was a call in the browser.

PlaceCall was the opposite.

> Entered my email, the API key showed up in my inbox with free credits, and I was dialing a few minutes later.

It turned down 1pm, booked after 3, spelled the name, and made sure it was on the appointment.
It also reported back on its own that the booking succeeded.
It wasn't perfect.
It repeated a sentence, and asked for the date and timezone again after they'd been given.

> Still the only one that booked over a real phone line without me setting anything up.

So decide which kind you want before you compare anything.
If you want to own the phone setup and fine-tune it, start with the build-it-yourself group.
If you want "give it a job, get the answer back," start with the other group.

## Watch what the tool says happened

Some of these tools write a report after the call.

The tester checked those reports against what they heard.

CALL-E fumbled the call.
It said it didn't have the last name, spelled it when asked again, then said "thank you, bye" and hung up.
But its report said the task wasn't completed.

> at least it didn't pretend.

ClawCall barely touched the last name.
Its report only said the call was "answered."

> I wouldn't call that a booking.

**"The call connected" is not "the appointment got booked."**

If you plan to act on the report without listening to every call, that difference is the whole thing.

## How it works

1. Write one brief. Who to call, what you need, and one rule that matters. Theirs was "weekdays only, after 3pm."
2. Make every agent call your own cell. Never a real business during a test.
3. Leave the settings mostly at default. You're testing what you get, not what a consultant could tune.
4. Answer as the difficult front desk. Offer a time that breaks the rule. Make it spell a hard name twice. Offer two good times and ask which it prefers.
5. Score by ear on the call: rule followed, details right, clear confirmation.
6. Then read what each tool's report says happened. Compare it to what you heard.
7. Give your top one or two a second run. The tester ran PlaceCall and Ring-a-Ding twice to rule out luck.

The tester used Claude Code to do the setup for each vendor.
You can do the same, or let each vendor's own dashboard place the call.

## The business angle

Plenty of owners are about to pay for an AI that makes or takes phone calls.
Booking appointments, chasing quotes, calling suppliers, confirming jobs.

Most will choose from a demo.

A demo is a call where nobody on the other end is difficult.

This test costs an afternoon, plus about $30 if you try the two paid ones ($10 and $19).
It shows you, before you sign anything, whether the agent can handle the one customer who doesn't follow the script.

Say a phone agent books 20 appointments a week.
If it takes a slot that breaks your rules even once a week, someone on your team is cleaning that up by hand.
And a customer got a wrong appointment.

That's the cost you're testing for.

## Who should steal this idea

Any owner shopping for an AI receptionist or an AI that makes calls for them.

Clinics, salons, home service companies, and anyone who books appointments by phone.

Agencies and consultants who recommend phone agents to clients.
Run this before you put your name on one.

## How hard is it

Beginner.

The calls are easy.
The signups are the slow part.

The tester spent about a day and a half on all eight, and most of that went to signing up.
Test two or three and it's an afternoon.

Cost: free credits on most of them.
About $10 to unlock AgentPhone.
$19 a month plus your own OpenAI key for Ring-a-Ding.
Retell wants a card up front.

## Gotchas and tips

### Pick the kind before you compare

Comparing a build-it-yourself platform with a just-hand-it-the-task service is comparing a kit car with a taxi.
Decide which one you want first.

### Count the signup cost

Card checks, ID checks, phone verification, paying before the first call.
Vapi's error told the tester to bring their own Twilio number even after paying for credits.
That friction is part of the product.

### Be difficult on purpose

A commenter put it well:

> that's exactly the kind of constraint that separates a script follower from something that actually understands the task.

Other commenters suggested adding interruptions, people changing their answer halfway through, and being put on hold.
The tester said they'd test those next.

### Never trust "answered"

Ask each vendor what its report says when the booking fails.
The honest ones tell you.

### Inbound is a different test

A commenter pointed out that doing well on outbound calls doesn't prove it handles incoming calls, and the other way around.
Test the direction you'll actually use.
(That commenter works at Getyn Phone, a phone vendor.)

### Vendors show up in the comments

ClawCall's creator replied and offered a free plan.
Another commenter recommended a tool with no details.
The poster didn't say they work for any of them, and asked one commenter directly whether they were affiliated.
Weigh comments from vendors accordingly.

### One run is one run

The tester said it plainly:

> One brief, one afternoon of calls, mostly default settings, so take it for what it is.

Their next step is the real job: 15 venues, one set of instructions, and a comparison table.

## Keep Reading

- [The €200 AI Voice Agent That Called 3,000 Businesses in a Weekend](/playbooks/guinndex-voice-agent/) What a phone agent looks like once it passes the test.
- [The Four-Piece AI Front Desk Every SMB Should Have Running by Friday](/playbooks/ai-front-desk/) The inbound side.
- [Three No-Shows in One Day Cost Her $600. The Reminder Text Was Never the Problem.](/playbooks/no-show-reconfirm-loop/)
