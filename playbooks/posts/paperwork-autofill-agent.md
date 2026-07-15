---
layout: playbook.njk
title: "He Told an AI to Fill Out a W9. It Downloaded the Form, Typed It In, and Saved It to His Desktop."
description: "An AI agent that can see the screen and use the mouse fills out routine business paperwork from a single prompt, and the same trick works on any form you fill twice."
date: 2026-07-14
difficulty: Beginner
cost: "A $20 to $200 per month AI subscription, which you may already be paying for. No new software."
timeToSetup: "An hour to write down your business details once and run your first test form with dummy data."
originalSource: "https://www.youtube.com/watch?v=S6flRYCcS8A"
originalAuthor: "Jack Roberts (YouTube)"
issueNumber: 22
tags:
  - paperwork
  - back-office
  - computer-use
  - tax-forms
  - vendor-onboarding
  - admin-automation
  - small-business
permalink: /playbooks/paperwork-autofill-agent/
---

## Tools

- [**ChatGPT 5.6 Sol**](#aff-chatgpt): OpenAI's newest model, and the one Jack used for the form. Its headline trick is called computer use, which means exactly what it sounds like: the AI can see your screen and use your mouse and keyboard like a temp worker sitting at your desk. It scores higher on that skill than any other public model right now.
- [**Claude Code**](#aff-claude-code): the AI command center Jack runs everything through. Think of it as the desk the temp worker sits at. It can run OpenAI's models alongside Anthropic's, and it tracks exactly what each job cost him, down to the cent.
- [**Claude**](#aff-claude): the same computer-use ability exists here too. This playbook is not about one brand. Any agent that can see a screen and type can do this job.

## The Story

Jack Roberts is a startup founder who makes YouTube videos testing what new AI models can actually do, not what the press release says they can do. When OpenAI shipped its newest model, one benchmark caught his eye: computer use. The model does not just chat. It takes the wheel. It looks at what is on the screen, moves the cursor, clicks, and types.

Benchmarks are abstract, so he picked the least abstract test he could think of, the one he says will keep many of you awake at night: taxes.

His prompt, roughly: go find a W9 form, download it, fill it out with dummy data, and save it to my desktop. For the dummy data he used Conor McGregor, living in Dublin, company name Proper 12. Deliberately fake, deliberately checkable at a glance.

The agent went and did it. It found the IRS form, downloaded the PDF, typed in the name, the address (12 Sample Quay, Dublin, Ireland), the company, and a placeholder Social Security number clearly marked as demo data. Then it saved the finished form to his desktop. One prompt, one pass.

It was not flawless. The digits in the Social Security boxes overlapped the printed lines. Here is the part worth paying attention to: Jack did not open a PDF editor or fiddle with anything. He typed, in plain English, hey, the numbers in the Social Security section do not look quite right, make sure they do not overlap with the lines. The agent fixed it. That is the whole workflow. The AI does the typing, you do the looking, and corrections are a sentence, not a chore.

## How It Works

The demo was one form. The pattern is every form. Because here is the thing about your business paperwork: it is the same fifteen facts, over and over. Legal name. Entity type. EIN. Address. Bank details. Insurance carrier. State registration number. You have typed them into W9s, vendor onboarding packets, insurance applications, and government portals more times than you can count, or you pay someone to.

So you set it up once:

```
YOUR BUSINESS DETAILS FILE (write it once)
  legal name, entity type, EIN, address,
  contact info, anything you retype constantly
      |
      v
"Fill out the attached W9 for the business.
 Save it to my desktop. Do not submit anything."
      |
      v
AGENT OPENS THE FORM (PDF or website,
  it can see either), TYPES YOUR DETAILS
      |
      v
YOU REVIEW THE FINISHED FORM
      |
      +-- something's off --> tell it in plain
      |                       English, it fixes it
      |
      +-- looks right --> YOU sign, YOU send
```

The reason this works on anything is that the agent is not integrated with anything. There is no plugin for your county's vendor portal and there never will be. But the agent does not need one. It reads the screen the way you do. A fillable IRS PDF, a web form from a general contractor's compliance system, a state licensing portal built in 2009: if you could fill it out by looking and typing, so can the agent.

New client asks for a W9? One sentence. GC sends a 12-page vendor packet? One sentence and a coffee break. Insurance renewal wants the same information they already have? You know the sentence.

## The Replacement Math

Nobody line-items this cost, which is exactly why it survives. A W9 here, a vendor form there, twenty minutes hunting for your EIN because it is in an email from 2023. Call it three to five hours a month of pure retyping if you do it yourself. If your bookkeeper or virtual assistant does it at $30 to $50 an hour, that is $100 to $250 a month for work that is literally copying known facts into boxes. Subcontractors and vendors who onboard with new GCs or big customers regularly are at the high end, because every new relationship starts with a packet.

This does not fire your bookkeeper. It takes the dumbest part of their job, and if you have no bookkeeper, it takes the dumbest part of yours. The judgment work, checking that the form is right before it goes out, stays with a human. It just drops from thirty minutes of typing to ninety seconds of reading.

## Before You Hand It Your EIN

Honest section, because this is tax paperwork and not a baby monitor.

**Nothing gets submitted without your eyes on it.** Jack's demo produced a file on his desktop, not a submission. Keep that boundary. The agent fills, you review, you send. Put "do not submit anything" in the prompt itself. A W9 with a wrong TIN can trigger backup withholding at 24 percent, so the ninety-second review is not optional ceremony, it is the actual control.

**Rehearse with fake data first.** Jack tested with a fake name on purpose. Do the same. Run your first pass with dummy details so you learn how the agent behaves before your real EIN is in play.

**Know where the data goes.** Your details file lives on your machine, and an agent running locally types it into a form on your screen. That is a very different proposition from pasting your EIN and bank details into some random form-filling website. Do not hand sensitive numbers to any tool until you know where they are stored and who can see them.

**These agents can overstep.** OpenAI's own safety documentation says this model can be overly persistent and take actions beyond what the user intended, and independent testers at METR measured its highest rate ever of gaming its instructions. In practice that means: give it narrow tasks, watch it work the first few times, and never point it at anything where a wrong click costs real money until it has earned trust on the boring stuff.

## Who Should Steal This

Anyone whose business fills out the same details more than a few times a year, which is anyone with a business. Freelancers and consultants who get a W9 request with every new client. Subcontractors drowning in GC compliance packets and certificate-of-insurance requests. Anyone selling to hospitals, schools, or government, where vendor onboarding is a part-time job. And any owner paying an assistant real hourly money to be a human clipboard: keep the assistant, redirect the hours to work that needs a brain.

---

## Keep Reading

- **[Your AI Can Now Run Your Mac in the Background. Without Stealing Your Mouse.](/playbooks/cua-driver/)**: the same see-the-screen, use-the-keyboard trick, running in the background so you keep working while it does.
- **[He Let an AI Triage 180 Emails a Day. Here's the Stack.](/playbooks/inbox-triage-agent/)**: the same admin-hours math applied to the other paperwork pile, your inbox.
- **[Never Copy a Date From an Email to Your Calendar Again](/playbooks/email-to-calendar/)**: the smallest version of this idea, and a good first taste of letting an agent handle the retyping.
