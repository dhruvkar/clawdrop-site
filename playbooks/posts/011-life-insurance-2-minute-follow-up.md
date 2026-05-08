---
layout: playbook.njk
title: "His Life Insurance Agency Texts and Calls New Leads in 2 Minutes. Automatically."
description: "How an insurance agent built an agent named Apollo that handles every step of follow-up: instant lead response, sequenced cadence, appointment reminders, no-show recovery, post-application updates. He focuses on closing. Apollo handles the rest."
date: 2026-04-29
difficulty: Intermediate
cost: "~$50/mo (Twilio + agent API costs; works on top of any CRM you already use)"
timeToSetup: "A weekend to wire up the lead-flow and appointment-confirmation cadences. Two weeks to tune the messages."
originalSource: "https://discord.com/channels/1456350064065904867/1456609488202105005/1496428197565436046"
originalAuthor: "Jose Benites"
originalAuthorUrl: "https://discord.com/users/apollobenites"
issueNumber: 11
permalink: /playbooks/life-insurance-2-minute-follow-up/
tags:
  - insurance
  - sales
  - follow-up
  - appointment-booking
  - lead-response
  - sms
  - voice
  - twilio
  - small-business
  - vertical-specific
  - openclaw
---

## Tools

- [**OpenClaw**](#aff-openclaw): the agent runtime that runs Apollo's cadence
- [**Twilio**](#aff-twilio): SMS and voice provider for the 2-minute response and the cadence
- [**Google Calendar**](#aff-google-calendar): calendar surface the agent reads slots from and books into
- [**Calendly**](#aff-calendly): alternative booking surface; the agent generates a personalized link
- [**Zapier**](#aff-zapier): webhook glue for lead-source forms that lack a native one
- [**Make**](#aff-make): alternative webhook router for the same job
- [**Salesforce**](#aff-salesforce): example lead-source CRM the cadence plugs into
- [**Anthropic**](#aff-anthropic): model provider behind the agent's drafting and judgment

## What You'll Build

A lead-handling system that responds to every new inquiry with a text and a call attempt inside 2 minutes, runs a sequenced follow-up cadence on no-responses, books appointments and sends three rounds of reminders, recovers no-shows with one reschedule attempt, and keeps the client looped in after the application is submitted.

You stop responding to leads. The agent does. You stop sending appointment reminders. The agent does. You stop chasing no-shows. The agent does. You stop drafting "checking in" emails after applications are out. The agent does.

What you do is talk to qualified humans, close them, and help families get covered. Which is what you got into the business for.

The original builder of this system, Jose Benites (apollobenites in the OpenClaw community), runs a life insurance agency. He named his agent Apollo. The setup is the cleanest example we've seen of an appointment-based service business handing the entire bottom of the funnel to AI while keeping the part where humans actually close.

Insurance is the case study. The pattern works just as well for any business where someone fills out a form expecting a callback: financial advisors, mortgage brokers, dental and medical practices, legal intake, real estate agents, home services, fitness studios, anywhere a fast, persistent follow-up routine is the difference between booked and lost.

## Why 2-Minute Lead Response Is the Whole Game

There's a study every sales trainer has cited for fifteen years. The Lead Response Management Study, originally from MIT and InsideSales. The headline finding: the odds of contacting a web lead drop by a factor of 21 if you call them in 30 minutes vs. 5 minutes. By an hour, you're effectively done. By 24 hours, the lead is cold.

Most insurance agents know this. Most insurance agents still respond to leads the next morning. Why? Because the lead came in at 8:47pm while they were eating dinner. Because the next lead came in at 6:13am while they were still asleep. Because they have 23 other leads in the queue and they batch their callbacks at 10am and 2pm. Because they have a life.

The agent has no life. The agent never eats dinner. The agent does not sleep. The agent fires a personal text and queues a call attempt within 90 seconds of the form submission, regardless of when the form came in.

The math works out absurdly in the agent's favor. If the average insurance agent contacts 30% of their inbound leads, the 2-minute responder contacts something like 80%. Same lead source, same cost per lead, almost three times the conversations. Multiply by the close rate, and you've effectively tripled the value of your marketing spend without spending another dollar on it.

That's the opportunity. The reason most agents haven't grabbed it is that "instant response" used to mean "hire a 24/7 BDR" or "buy an answering service that books at 3am." Both options were expensive enough to wipe out the gain. The agent costs about $50 a month and outperforms either of them on consistency.

## The Pattern

The pattern has 5 stages, mapping directly to the lead's journey from form submission to policy in force.

**Stage 1. Instant response.** A lead fills out a form. Inside 90 to 120 seconds, the agent fires a personal-feeling text ("Hey, this is Jose from [agency]. Saw you requested a life insurance quote. When's a good time to chat?") and places an outbound call to the same number. The call rings on the prospect's phone with a real caller ID. If they pick up, they're connected to you. If not, voicemail.

**Stage 2. Sequenced cadence.** No response in 5 minutes? Second text. No response in 30 minutes? Second call. No response in 2 hours? Third text with a different angle. No response in 24 hours? One follow-up email. No response in 3 days? Move to a slower nurture sequence. The exact cadence is yours; the agent runs it without missing a step.

**Stage 3. Appointment booking and reminders.** When a lead replies "yes, let's talk," the agent surfaces your calendar (Google Calendar, Calendly, Acuity, whatever you use) and books the slot. Then it queues 3 reminder texts: 24 hours before, 2 hours before, 15 minutes before. Each reminder gets confirmation back into the lead's record.

**Stage 4. No-show recovery.** Appointment time passes, no show. The agent sends 1 well-crafted reschedule message ("Hey, looks like we missed each other. No worries. Want to grab a slot tomorrow morning?"). If they engage, it books. If not, the lead moves to the nurture lane.

**Stage 5. Post-application loop.** Once a quote is submitted and an application is out, the agent owns the status updates. "Just heard from underwriting, they need one more document." "Approved! Documents will be in your inbox today." "Policy is now in force. Welcome to the agency." The client never feels dropped. You never write the same email twice.

## Step-by-Step Setup

### 1. Pick the lead-source webhook

Whatever form your leads come from (Facebook lead ads, your website's contact form, an aggregator like EverQuote, Salesforce, or a custom landing page) needs to fire a webhook on submission. Almost all of them have webhooks built in. If yours doesn't, drop the form behind a service like Zapier or Make for the webhook, then route the actual lead processing to your agent.

The webhook is the trigger. Everything else flows from it.

### 2. Wire up Twilio (or your SMS/voice provider)

The cheapest, most reliable way to send the instant text and place the outbound call is Twilio. ~$0.0079 per outbound SMS in the US, ~$0.014 per minute for voice. For a typical 30-leads-a-day agency, you're looking at $20-40/mo of usage. Programmable Messaging API for texts, Programmable Voice API for calls.

Alternatives if you don't want to manage Twilio yourself: Bandwidth, Vonage, Telnyx (often cheaper at scale), or a turnkey product like Telavant or Convoso if you want a UI.

The agent gets credentials, a sending number, and a recipe for "send text" and "place call."

### 3. Connect your calendar

Whatever you use. Google Calendar, Calendly, Acuity, Square Appointments. The agent needs to read available slots and book new ones. Most calendar tools have an API; the agent's recipe is "find the next 5 open slots that match these constraints" and "book this time."

If you use Calendly, the integration is even simpler: the agent generates a personalized booking link and texts it to the lead. They click, they pick, the appointment lands in your calendar with all the right metadata.

### 4. Build the cadence map

This is where most builders rush and pay for it later. The cadence map is a single markdown file the agent reads at every step. It looks like:

```
# Lead Cadence

## After form submission
- T+90s: SMS "instant response" + place outbound call
- T+5m if no reply: SMS "follow-up 1"
- T+30m if no reply: place call attempt 2
- T+2h if no reply: SMS "follow-up 2 (different angle)"
- T+24h if no reply: email "follow-up 3"
- T+3d if no reply: move to nurture sequence

## After appointment booked
- T-24h: SMS reminder
- T-2h: SMS reminder
- T-15m: SMS confirmation
- T+0 (if no-show after 5m): SMS "missed-each-other reschedule"

## After application submitted
- On underwriter request: SMS update
- On approval: SMS + email confirmation
- On policy in force: SMS welcome + nurture sequence opt-in
```

Each line is a triggerable rule. The agent reads this file, knows where every lead is in the cadence, and runs the next step the moment it's due.

### 5. Write the messages in your voice

Generic SMS sequences are why people complain about "robotic" follow-up. Yours should not feel that way. Write each message in your actual voice. Read them out loud. The 2-hour follow-up should sound different from the 5-minute one. The reschedule message should not be a guilt trip, it should be a casual "happens, let's grab a new slot."

The agent will help you draft these. Have it propose 3 versions of each message and pick the one that sounds most like you. Then iterate after the first 50 leads using actual reply rates.

### 6. Set the kill switches

Every prospect needs a clean way out. The agent should respect "STOP" and "QUIT" replies (Twilio handles this automatically by default), should never message after 9pm or before 8am local time, and should hand the conversation off to a human the moment a lead writes anything that requires real judgment ("I'm thinking about my mom's policy", "I just got diagnosed with X").

The agent's job is to handle the procedural mechanics. The agent's job is not to be your underwriter or your therapist. Set the boundaries.

## Lanes That Work

The exact same machine plugs into a dozen other businesses. Swap the form, swap the cadence map, swap the messages.

**Mortgage brokers.** Lead requests a rate quote. Agent texts in 90 seconds, books a discovery call, sends 3 reminders, follows up after the call with rate sheet, follows up after closing day with refinance-watch email cadence.

**Real estate agents.** Buyer requests a property tour. Agent texts in 90 seconds, books the showing, sends reminders, follows up after the showing with comparable listings, drops into a buyer-nurture sequence if they don't write an offer.

**Dental and medical practices.** New patient fills out the new-patient form. Agent confirms the appointment, sends pre-visit paperwork link, sends reminders, follows up after visit with care instructions, schedules the next checkup 6 months out.

**Financial advisors.** Lead requests a portfolio review. Agent texts, books the discovery call, sends reminders, follows up after the call with the prep doc, drops into the long-cycle nurture for prospects who aren't ready yet.

**Home services (HVAC, plumbing, roofing).** Customer requests a quote. Agent confirms, schedules the on-site visit, sends a 24h "we're heading your way" reminder, follows up after the visit with the written quote, follows up 3 days later if they haven't accepted.

**Fitness studios.** Free-trial signup. Agent confirms the trial slot, sends prep info, sends reminder, follows up after the trial with the membership offer, drops into a 30-day nurture if they don't convert.

**Legal intake.** Prospect submits a case-evaluation form. Agent texts immediately, runs a 5-question screener, books the consultation if qualified, sends reminders, follows up after with a personalized engagement letter or a referral if it's not your case type.

The pattern is the same in every lane: form → instant response → cadence → booking → reminders → no-show recovery → post-event update loop. You change the cadence and the messages. The mechanics stay identical.

## What Changes After Setup

Within the first week, your contact rate climbs. The agency's been chasing leads for years, and suddenly it's catching them. Conversations you wouldn't have had on a Saturday because you were at your kid's soccer game now happen because the agent fired a text in the middle of the first quarter.

Within the first month, your booking rate climbs. The reminders cut your no-show rate by 30 to 50 percent. The reschedule message recovers a chunk of the no-shows. Your calendar starts looking fuller without you adding a single new lead source.

Within the first quarter, your closing rate climbs. The post-application loop is the underrated piece. Clients who were used to "agents who disappear after they collect their commission" notice. They refer their cousin. They refer their coworker. The repeat-and-referral business that used to be 20% of your book becomes 40%.

The financial picture: if you're spending $5,000/month on lead acquisition and converting 8% to policies, you're closing 25 to 30 deals (depending on lead quality). Lift the contact rate from 30% to 80%, the booking rate from 50% to 75%, the show rate from 75% to 90%, and the close rate by even 5 percentage points, and you're looking at 50+ closed deals for the same lead spend. Your effective cost per closed deal drops by half. That's the math behind every "AI is going to change the insurance industry" headline. It's just true.

The qualitative change is bigger. You stop dreading the 7am scroll-through-yesterday's-leads. You stop missing date night because a lead came in at 8:46pm. You stop carrying a phone full of half-finished follow-up threads. The work-life balance that the industry's been promising forever finally arrives, because the boring repetitive part of the work is done by something that doesn't have a life to balance.

## Gotchas and Tips

**The 2-minute promise is non-negotiable.** If your system can take up to 5 minutes to respond, the math falls apart. Build for 90 seconds. Test it on real form submissions before you trust it on a real lead.

**Compliance matters more in insurance than almost any other industry.** TCPA, state-specific consent rules, do-not-call lists, recorded-call disclosures. Whatever rules apply to you doing it manually apply to the agent doing it. Bake the consent capture into the form, store the proof, and include the required disclaimers in your message templates. If you're not sure, talk to an insurance compliance lawyer for an hour. Cheapest insurance you'll buy this year.

**Personalize the first text. Generic = ignored.** The instant SMS should say the lead's first name, reference what they actually asked about, and feel like it came from a human. "Hey Mike, this is Jose. Saw you requested a 20-year term quote. When's a good time to chat about it?" not "We received your request and will be in touch shortly."

**Use a real number, not a shortcode.** Shortcodes feel like spam to consumers. A 10-digit local-presence number with your agency's actual area code works dramatically better. Twilio's local-presence dialing is worth the extra few cents.

**The reschedule message is your highest-leverage rewrite.** A no-show isn't a dead lead. It's a lead who had something come up. The "happens, let's grab a new slot" message recovers 30 to 50% of no-shows when written well. Don't underwrite it. Get on the phone with someone in your office and brainstorm 5 versions, then test.

**The agent should always identify itself the first time, not pretend to be you.** Some agents try to make the system pretend to be the agent. Don't. The lead figures it out, gets annoyed, and you've burned the relationship. The cleanest framing is "I'm Jose's assistant. He'll be calling shortly." Honest, sets the right expectation, lets the human conversation start fresh.

**Hand off to a human the moment the conversation needs judgment.** "I'm comparing two policies, what's the difference?" Hand off. "I had a heart attack last year, will I qualify?" Hand off. "I want to add my spouse." Hand off. The agent runs the procedural cadence and steps back the moment the conversation becomes a conversation.

**Run a weekly review.** Pull the last week's lead funnel: contact rate, booking rate, show rate, close rate. Compare to your 4-week average. Numbers slipping? Look at the cadence. Numbers climbing? Don't change anything. The agent gives you a tighter feedback loop on your funnel than any CRM dashboard does, because every step is automated and measurable.

**Don't try to launch the whole system in week one.** Start with stage 1 only: instant response. Get that right for two weeks. Then add stage 2: cadence. Then stage 3: booking. Then 4 and 5. Each stage has its own learning curve. Stack them and you'll never debug which one is broken.

---

## Keep Reading

- **[AI Whispers What to Say During Your Cold Calls in Real Time](/playbooks/ai-cold-call-coach/)**: The other half of the sales-process automation story. Apollo handles the follow-up; this is the live-call coach for when you're actually on with a prospect.
- **[The Playbook for Running LinkedIn Outreach Through an AI Agent](/playbooks/linkedin-outreach-while-you-sleep/)**: The outbound counterpart. Same agent pattern, different starting move. Combined with this playbook you have inbound + outbound on autopilot.
- **[Your AI Remembers Everything So You Don't Have To](/playbooks/ai-real-time-assistant/)**: The always-on memory layer. When the agent remembers every prior conversation with a lead, the follow-up cadence stops feeling automated and starts feeling like attention.

**Want the full deep dive?** Read our [Best OpenClaw Skills](/learn/best-openclaw-skills/) guide for the foundational skill patterns this playbook depends on.
