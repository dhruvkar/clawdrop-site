---
layout: playbook.njk
title: "A team of AI channels built a dog trainer directory"
description: "A product designer set up Claude Duet like a small company, one chat per job, and it went from niche research to a live site on its own domain in one recorded sitting. It's an experiment with no revenue. The org chart is the lesson."
date: 2026-11-10
difficulty: Intermediate
cost: "A Claude Pro or Max plan, plus whatever the paid services you connect charge: keyword data, the domain, the web host."
timeToSetup: "The whole build is on one unedited 1h48m recording. Writing good instructions for each role is the real work."
originalSource: "https://www.reddit.com/r/ClaudeAI/comments/1xk7g9q/i_tried_running_a_small_company_of_channels_in/"
originalAuthor: "u/BeautifulDataViz (r/ClaudeAI)"
issueNumber: 35
permalink: /playbooks/duet-channel-team-directory/
tags:
  - claude-duet
  - claude
  - seo
  - directory-site
  - websites
  - agencies
  - lead-gen
  - small-business
  - smb
---

## Tools

- [**Claude Duet**](#aff-claude-duet): Anthropic's new app where Claude works on its own computer in the cloud, messages you first, and asks before it acts
- [**DataForSEO**](#aff-dataforseo): a paid service with real Google search data, like what people search for and how hard each phrase is to rank for
- [**Hostinger**](#aff-hostinger): where the domain name was checked and bought
- [**Vercel**](#aff-vercel): the website host
- [**GitHub**](#aff-github): where the website's code is stored
- [**Resend**](#aff-resend): a service for sending email from your own domain
- [**Google Sheets**](#aff-google-sheets): where the list of trainers to contact went

## What you'll build

A small AI "company" where each worker has one job.

A boss that hands out work and reports to you.
A researcher.
A content writer.
A developer.
A marketer.

The demo here is a find-a-dog-trainer directory.
The real idea is the org chart.

## What Claude Duet is

Duet is Anthropic's new app where Claude works on its own computer in the cloud.
It messages you first, and it asks before it acts.

It's a research preview, for US Pro and Max plans.

Work happens in "channels."
Think of a channel as a separate chat with its own memory, its own to-do list, and its own standing instructions.

One channel, one employee.

## The story

The poster is a product designer in Houston.
They wanted to test Duet on something bigger than inbox and calendar chores.

> So, each channel does one job and one job only.

They started with a CEO channel.
Its instructions: watch every other channel, and send a status report every weekday at 7am.

Then they asked the CEO to set up an office just for the dog directory, so it wouldn't mix with their other projects.

The CEO created it.
That office created three more channels: research, build and growth.
The poster renamed them researcher, developer and distribution.

Then they noticed a gap.
Nobody was writing the words.
So they asked for a content strategist, and got one.

## The boss pushed back

The poster's first brief was a directory of dog trainers "in the world."

The new channel said no:

> Directory wins by being deep in one place, not everywhere.

It asked whether to start with the US or just Houston.
They picked the US.

The poster asked the directory's manager for a daily report from its team.
It picked 6:21am on its own, so the report lands before the 7am CEO brief.

## What the researcher found

The researcher was hooked up to DataForSEO, so it pulled real search numbers.

The ask: 20 long-tail search phrases, low difficulty, real volume.

It came back with:

> 20 keywords, all difficulty under 20.

> Search peaks in February

> No single city is big.

It saved a full 167-keyword table and passed the list straight to the content strategist.
The poster then told it to do that automatically every time.

The content strategist cut the list to 14 phrases worth building pages for.
City pages, service pages like puppy training, and guides like how to stop biting.

## What the rest of the team did

The developer got standing instructions: what tools to build with, mobile first, fast enough to score 90+ on Google's page speed test.
Then it built the site from the content plan.

Distribution wrote a go-to-market plan.
Start with Chicago only, email independent trainers, and invite them to claim their listing.
It built a list of top trainers with their sites, reviews and ratings, and drafted the outreach email.

None of that email was sent on camera.

## The domain mix-up

Partway through, the poster said "find dog trainer online" out loud.
The developer had been building on finddogtrainer.online.
The plan was findadogtrainer.online.

One of the channels caught it.

> it figured out we have we're working on the wrong domain name.

The poster told it to tell the manager.
The manager told everyone else.

## It asked before buying the domain

The domain search ran through Hostinger.

Duet came back with the name available and an offer:

> Oh, I can buy it for you.

The poster said:

> All right, go ahead and buy.

Right before that, they didn't expect it could:

> I don't think it's going to buy because it doesn't have the authority key to buy and the card is on Hostinger

It went through.

Distribution did the same thing with its own spending:

> I'll bring the cost back before anything.

## The Vercel snag

Getting the site onto the host stalled.
The poster stepped in, made a code repository by hand, and pointed the developer at it.

> Sorry about the snag, guys. Um it was just some Vercel issues going on.

In the Reddit post, they own it:

> It had some issues with Vercel but eventually it turned out it was my fault.

After that, the developer reported:

> The code in the repo and Vercel built all 369 pages in about 30 seconds.

The domain still showed Hostinger's parked page.
The task said done.
The poster asked it to double check, and then:

> we have a site up and running findadogtrainer.online.

## The honest part

This is an experiment.

> not that I would be promoting the site, it was just an experiment to see the possibilities.

No revenue.
No traffic numbers.
No trainers signed up.

On the recording, some guide pages were still deploying at the end.
The poster said the design still looked "boxy."

## How it works

1. Make a boss channel. Tell it what to watch and when to report to you.
2. Make one channel per role. Researcher, writer, developer, marketer.
3. Give each one standing instructions: its job, its tools, its limits, and what "done" looks like.
4. Connect the paid services each role needs. Search data for the researcher, the domain and web host for the developer.
5. Have each role hand its finished work to the next one automatically.
6. Talk to the boss for status. Step into a role's channel only to correct it.
7. Keep approvals on, so anything that costs money comes to you first.

## The business angle

If you run a small web or SEO agency, this is your discovery-to-launch project.

Keyword research.
A content plan.
A site.
A domain and DNS.
An outreach list.

Usually that's several people and several weeks.
Here it fit in one recorded sitting, with the owner steering.

That doesn't mean the site is good, or that it ranks.
Nobody has shown that yet.
But the first draft of a new local site or lead-gen page is the part that eats your hours.

The bigger lesson is for any owner.
Split the work into jobs.
Give each job one "employee" with written rules and a clear finish line.
Then you manage the manager.

## Who should steal this idea

Small web and SEO agencies spinning up local sites and lead-gen pages.

Directory builders.

Any owner who wants to see their business as an org chart before hiring for it.

## How hard is it

Set it up in an afternoon, then expect to babysit it.

The poster already knew how websites get built.
They wrote technical instructions for the developer and fixed the hosting snag themselves.

Cost: a Claude Pro or Max plan.
On top of that, whatever the connected services charge: DataForSEO, the domain, the web host.
The video doesn't give those numbers.

## Gotchas and tips

### One channel per role

From the post:

> One channel per role works way better than one giant chat. Context stays clean and you can see who did what.

Their top-level CEO kept pulling in their older projects.
That's why they gave the directory its own office.

### Define "done"

> Let the CEO channel hand off work, but tell it exactly what "done" looks like for each role, or it drifts.

### Approvals on for spending

> Keep approvals on for anything that spends money. It messaged me before buying the domain, which is exactly what you want.

### Hold back payment authority

From the poster's comment:

> For the payments I would not give it full authority to spend just yet, I would do it later once I know that it has guardrails around spending and it does not get leaked somehow.

### Put guardrails in each role's instructions

> The guardrails are important for each role so this way they don't step on each other.

### Check "done" yourself

The DNS task said done while the domain still showed a parked page.
Open the site in your own browser.

## Keep Reading

- [Set Up a 4-Agent Business Team on a Mac Mini](/playbooks/four-agent-team/) Another take on giving each AI worker one job.
- [Stop Paying $10,000 for a Custom Website](/playbooks/stop-paying-for-custom-websites/) The site-building half of this, on its own.

If you split your business into one-job employees, which job would you hand off first?
