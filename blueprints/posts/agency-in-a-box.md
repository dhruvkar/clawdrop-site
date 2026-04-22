---
layout: blueprint.njk
title: "How One Operator Turned OpenClaw Into a Client-Ready Platform in Two Weeks"
description: "An agency owner spent two weeks packaging OpenClaw into a multi-tenant platform his clients could log into. Here's what broke, what he fixed, and the business model that makes this the move for agencies right now."
date: 2026-04-22
difficulty: Advanced
cost: "$80-200/month infrastructure. Clients pay $500-5,000/month."
timeToSetup: "Two weeks (the honest answer)"
originalSource: "https://www.reddit.com/r/openclaw/comments/1sogwrv/i_almost_quit_openclaw_5_times_in_2_weeks_heres/"
originalAuthor: "r/openclaw agency operator"
issueNumber: 10
permalink: /blueprints/agency-in-a-box/
tags:
  - agency
  - consulting
  - multi-tenant
  - packaging
  - saas
  - operators
  - services
  - client-delivery
---

## What You'll Build

A version of OpenClaw your clients can use without touching anything technical. They log in to a branded web interface. They see the agents you built for them, scoped to their own data, their own credentials, their own usage. They interact with those agents via chat, via scheduled runs, or via triggers you set up. They get results. They pay you monthly.

You built one platform. You deploy a tailored copy per client. The underlying skills (lead-gen, inbox triage, shift ops, whatever you sell) are yours. The platform that runs them is yours. The surface your client sees is yours. You are no longer a service provider charging hourly. You are a product owner with a high-touch delivery model charging monthly retainers.

The operator this blueprint is based on spent two weeks building it. He is an experienced agency owner. He picked the docker-compose route because he needed a client-ready platform, not a pile of custom scripts. He documented every failure mode. His honest take: "I almost quit five times. Here's what kept breaking and how I fixed it." We are sharing his path so you do not find the hard parts by hitting them yourself.

If you run an agency or a consulting practice and you have built the same custom AI thing for three different clients, this is the packaging playbook.

## Why Services Don't Scale And Pure SaaS Doesn't Stick

You have been selling services. It works. It does not scale.

Each client gets a bespoke build. You spend the first two weeks of every engagement wiring things up. You spend the next three months running it for them. Then you spend the last two weeks handing it off to them, which means writing documentation they will not read and training their team on something they will forget the day after you leave.

The alternative most agencies default to is retainer. Charge $5,000 to $15,000 a month to keep the thing running. The client stays dependent. You stay busy. Nobody scales.

There is a pure SaaS alternative. Build a product, sell it self-serve, never talk to customers again. This is what every agency owner dreams about at 2 AM. It also fails for almost everyone who tries it, because selling AI tools to non-technical buyers requires a sales motion the agency owner already has, not a self-serve funnel they have never built.

The middle path is the pattern in this blueprint. You keep the high-touch sales motion you already have. You keep the ongoing monthly revenue. You stop rebuilding the same thing from scratch for every client. You build a platform once. You deploy a configured copy per client. You charge a productized monthly fee. You get the unit economics of software plus the close rate of services.

The math works. If you land five clients at $3,000 a month, that is $180,000 ARR on a platform that cost you under $25,000 to build and costs under $500 a month to run. A ten-client book is $360,000 ARR at roughly the same infrastructure cost. That is the scaling curve agencies never get from pure services and never get from pure SaaS.

## The Pattern

The packaging has four layers. You build them in order. You do not skip any of them.

```
[1] TENANT ISOLATION         <-- docker + per-client config
        |
        v
[2] CREDENTIAL VAULT         <-- encrypted, per-client, rotatable
        |
        v
[3] CLIENT-FACING SURFACE    <-- chat UI, run log, billing view
        |
        v
[4] ADMIN OPERATIONS         <-- deploy, monitor, update across all clients
```

Layer 1 is the hard engineering problem. Layer 2 is the security problem. Layer 3 is the UX problem. Layer 4 is the operational problem that makes this sustainable.

Skip any of them and the operator who built this will tell you about the specific way it comes back to bite you at month two. We have his scar tissue. Use it.

## Step-by-Step Setup

### Step 1: Decide The Deployment Model

Two realistic options. Pick one and commit.

**Option A: Single-platform, multi-tenant.** One OpenClaw install. Tenants are separated by namespace inside the install. Cheaper infrastructure. Harder isolation. Best for clients who do not need stringent data residency.

**Option B: Per-client isolated deployment.** One OpenClaw install per client, running in a separate docker container on shared infrastructure. Slightly more expensive. Much cleaner isolation. Easier to tell a client "your data never touches other clients."

For most agencies, option B is the right answer. The infrastructure cost difference is small. The isolation story is dramatically easier to sell. If a client asks "could my data leak to another client," your answer is "no, your deployment runs in its own container, with its own vault, on its own subdomain." That conversation takes 30 seconds with option B and 30 minutes with option A.

The operator this is based on picked option B. We are going to walk option B below.

### Step 2: Stand Up The Base Stack

Spin up a server with enough headroom for 10+ client containers. A $40-80/month VPS (Hetzner, DigitalOcean, or similar) is fine. You add capacity as you add clients.

Core stack, all free and open-source:

- **Docker and docker-compose.** The isolation layer.
- **Traefik or Caddy.** Reverse proxy with automatic HTTPS and per-subdomain routing.
- **PostgreSQL or SQLite per tenant.** One database file per client, isolated by volume mount.
- **A search layer.** SearXNG is free and avoids surprise search-API bills. Your agents query it.
- **A headless browser.** Chromium in a container. Your agents use it for any web task.
- **OpenClaw itself.** One container per tenant, configured from a template.

A simplified docker-compose for one tenant looks like:

```yaml
services:
  openclaw:
    image: openclaw/openclaw:latest
    container_name: acme-openclaw
    restart: unless-stopped
    environment:
      - TENANT_ID=acme
      - VAULT_URL=http://vault:8200
      - MODEL_PROVIDER=azure_openai
      - SEARCH_URL=http://searxng:8080
      - BROWSER_URL=http://chromium:9222
    volumes:
      - ./tenants/acme/workspace:/workspace
      - ./tenants/acme/db:/data
    networks:
      - acme-net

  vault:
    image: hashicorp/vault:latest
    # ... vault config
    networks:
      - acme-net

  chromium:
    image: browserless/chrome:latest
    # ... browser config
    networks:
      - acme-net

networks:
  acme-net:
    driver: bridge
```

Each client gets their own `tenants/[client]/` directory, their own network, and their own set of services. They cannot see each other. Deployments are by copy-the-template-and-rename.

### Step 3: Build The Credential Vault

This is the failure mode that bites hardest. Client credentials (API keys, OAuth tokens, SMTP passwords) need to be:

- Never stored in plaintext
- Never visible in logs
- Rotatable without the client noticing downtime
- Scoped so a compromise of one client never affects another

Use Hashicorp Vault (free, self-hostable) or a similar secret manager. One vault, namespaced per tenant. The OpenClaw container for each client can only read from its own namespace.

Your client onboarding flow:

1. Client logs in to your platform for the first time.
2. They paste their API keys into a form served over HTTPS.
3. The form posts directly to the vault (never through your app server's memory).
4. The form field clears, the vault stores the encrypted secret, your app never has a plaintext copy.
5. From that moment, the agent fetches the credential fresh from the vault on every use and never caches it.

The operator's first version of this stored credentials in plaintext for about 90 seconds between form submit and vault storage. That was fine technically and not fine sellably. Fix it before launch.

### Step 4: Build The Client-Facing Surface

Your client is not looking at a terminal. They are looking at a web interface.

Minimum viable surface, in order of importance:

1. **Chat.** A chat window to talk to their agents. This is what they do 90% of the time. Make it fast, mobile-friendly, and branded with their company colors if they want (optional but it converts the sales call).

2. **Run log.** A simple list of what their agents did this week. Each run has a title ("Daily email triage, 2026-04-22"), a status (ran clean, ran with warnings, failed), a duration, and a cost. This is what they show their boss or their accountant.

3. **Scheduled tasks view.** What the agents are going to do automatically, with the next run time. Gives them comfort that things are going to happen.

4. **Billing view.** Monthly usage, current period spend, previous periods. Their per-client budget from the cap layer, so they can see the predictability story themselves.

5. **Settings.** Update credentials, configure skill-specific knobs, invite teammates. Nobody uses this after setup but they need it to exist.

You can build this in a weekend with a basic web framework. Do not over-engineer. The value is not in the UI. The value is in what the agents do. The UI is just the window.

### Step 5: Add The Per-Client Spend Cap

Before you onboard your second client, put the cap layer from [our budget cap blueprint](/blueprints/ai-budget-cap/) in place. Per-tenant budgets, per-tenant daily caps, per-tenant alerts when approaching the cap.

Here is why this matters. The operator who built this had one client's agent get into a loop at 2 AM and spend $400 in two hours before he noticed. No cap. Nobody watching. The money came out of his margin, not the client's because his contract was a flat monthly fee.

One $400 incident on one client destroys the profitability of that client for three months. Per-tenant caps make this impossible.

### Step 6: Build The Admin Panel

This is the piece most agencies skip. They build the client-facing surface, onboard three clients, and then realize they have no way to update their platform across all of them.

Bare minimum admin panel:

1. **Deploy a new tenant.** One button or one command. Spins up a new container from the template, creates the vault namespace, pre-configures the skills.

2. **Update skill across all tenants.** You improve the email-triage skill. You want to push the update to all 7 tenants without touching each one. The admin panel handles that.

3. **Pause or sunset a tenant.** Client stops paying. You pause their container without deleting their data. Data retention configurable per-client.

4. **Health dashboard.** One screen showing all tenants, their current status, their current-month spend, and any active alerts. If a tenant is 90% through their budget, you see it here. If a container has crashed and restarted three times today, you see it here.

5. **Audit log.** Who did what, when. You updated a client's skill config. You rotated their credentials. It is all logged with your user, their client, and a timestamp.

Build the admin panel before your third client. Waiting until your fifth is when you regret it.

### Step 7: Sales Motion And Pricing

This blueprint is not just about the build. It is about the packaged business.

Three realistic pricing models. Pick one per client based on their size and their comfort.

**Platform subscription.** Client pays $500 to $2,500 a month to use your platform. Lower tier for smaller operations, higher tier for volume. Cleanest model. Works if your platform genuinely delivers recurring value with no hand-holding.

**Productized service.** Client pays $2,000 to $8,000 a month for the platform plus ongoing tuning and support. You keep the high-touch relationship. You keep the margin. You differentiate on "we run it for you" instead of "use our product." This is the sweet spot for most agencies.

**Equity or revenue share.** For the right client, you can offer the whole thing for a revenue share on what the AI produces. Works when the AI produces clear financial outcomes (leads, sales, saved costs). You eat the platform cost. They eat the implementation cost. You both win when it works.

Most operators running this model run a mix. Four or five high-touch productized-service clients paying $3,000 to $6,000/month, plus a handful of smaller clients on a platform subscription tier.

Sales motion: your existing agency sales motion. You sell the discovery call, you scope the engagement, you deploy a tenant, you onboard. The client never sees a self-serve signup flow. They see you and your team.

## What Breaks (And Why It Takes Two Weeks Not Two Days)

These are the five failure modes the operator hit on his build. Being warned saves you a weekend per issue.

**Environment isolation.** On the first real client deploy, his Client A's credentials ended up visible in Client B's agent logs when a task crossed containers. The fix was real Docker network isolation (one network per tenant, no shared bridges) and a per-container secret-scrubbing step on all log output.

**Cost runaway.** One client's agent got into a loop at 2 AM and spent $400 in two hours. The fix is per-tenant spend caps at the platform layer. Non-negotiable. Build this before client number two.

**Browser sessions dying silently.** The headless browser would crash on a memory spike and tasks would hang for hours with no error. Clients got nothing. The fix is health checks and automatic restarts on each browser session, plus dead-man-switch timeouts on tasks so a hung task gets flagged at 5 minutes instead of 5 hours.

**Credentials leaking in transit.** His first version stored credentials in plaintext for about 90 seconds between form submit and vault storage. Technically fine. Not fine in a sales conversation. The fix is posting credentials directly from the browser to the vault with a signed client-side encryption key that the server never sees.

**One client's update breaking another client's workflow.** Shared underlying code meant a deploy to fix Client A could break Client B. The fix is a client-specific configuration layer that isolates deployments per tenant, combined with staged rollouts (deploy to one tenant first, verify, then roll to the rest).

None of these are theoretical. They are the exact five things he listed. He finished the two weeks. The platform works. He went from "running custom OpenClaw for three clients" to "running a platform that could support thirty."

## Lanes That Work

This blueprint fits agencies and consultants who have proven out a delivery model and are ready to productize it.

**Agency owners already selling AI-adjacent services.** You sell automation, content, ops, or a similar workflow. You are rebuilding the same thing for every client. This is your leverage play.

**Consultants who have built the same custom thing three times.** The third time is the signal. The rule of three means this should have been a product after the first time and you knew it.

**Technical operators running your own profitable AI workflows.** You know your workflows work. You have clients asking "can you build this for me." The packaged platform is how you say yes without losing your weekends.

**Small firms offering outsourced operations.** If you run bookkeeping, recruiting, marketing, or a similar outsourced service for other small businesses, AI is about to eat half of what you do. You can be the agency that eats it first, or you can be the agency that gets eaten.

**Founders who considered building an AI SaaS and realized you'd rather sell to 10 clients you know than 1,000 you don't.** This is that path.

What does not work: you have no existing book of business and no sales motion. The platform does not sell itself. You need the sales motion first, the platform second.

## What Changes After Setup

**Week 1 (build).** You deploy the base stack and your first tenant. You onboard yourself as the first client. You run your own inbox triage through the platform for a week to find bugs.

**Week 2 (polish).** You hit the five failure modes from the section above. You fix them. You deploy client 1.

**Month 1.** Client 1 is live. You onboard client 2. Your sales pitch is sharper now because you have a demo environment that looks like a product. Client 3 signs at month end.

**Month 3.** Five clients live. Monthly revenue around $15,000. Infrastructure cost around $200. You are running the platform in about four hours a week of admin time. Client acquisition takes 2-4 hours of sales time per signed client.

**Month 6.** Ten clients live. Monthly revenue $30,000 to $40,000 depending on mix. Infrastructure cost $350. You hire your first part-time operations person to handle the admin panel stuff while you stay on sales and platform development.

**Month 12.** You are running an AI services agency that looks like a product company. You know exactly what each client costs you, what each client is worth, and where the next client comes from. This is a meaningful small business.

## Gotchas and Tips

**Do not launch until you have the cap layer.** Pre-cap, one runaway tenant can eat a month of profit across your whole book. Post-cap, the floor is yours and the ceiling is the client's.

**Do not skip the audit log.** When a client asks "what did you change last Tuesday" or "why is my bill $200 higher this month" you need to be able to answer in under 30 seconds. Log everything.

**Treat onboarding as the critical moment.** Most tenant churn happens in the first two weeks. If the client cannot see their agent doing something useful by day three, they cancel at month end. Invest in the onboarding week.

**Build a demo tenant.** One persistent tenant that is your sales demo. Never delete it. Update it with new features as they ship. Your discovery calls are 3x more effective when the prospect can see a live environment.

**Resist the urge to customize per client.** Every "just this one small thing" for a specific client is a fork in your codebase. Five clients in you are maintaining 12 different versions. The discipline is to offer the same platform to everyone, with per-client configuration but not per-client code.

**Stage your deploys.** Push to one tenant, watch for 4 hours, push to the next. Never to all ten at once. The operator's first all-tenant deploy broke three clients simultaneously and he spent a weekend untangling it.

**Keep a plain-text changelog.** Every tenant's changelog lives in their workspace directory. When a client emails asking what is new, you paste the last month of changelog entries. Looks professional, took no extra time.

**Price in monthly, not hourly.** The whole point of productizing is to get off the hours-based pricing model. Even your high-touch retainer clients pay monthly. Quote in months, not weeks. Let them feel the recurring relationship.

**Do not white-label immediately.** Clients will ask for their own branding on day one. Say no until month three. Every white-label customization is debt. Use your brand on the client-facing surface until you have enough customers to justify building the brand-theming system properly.

**The docs you write are a sales asset.** Every skill you offer should have a one-page "here is what this does and what it is worth" doc. These docs close deals because the client reads them, nods, and signs. Write them before launch.

**Run your own business on your own platform.** You are the best customer you have. Running your own email triage, outreach, and ops through your own platform means bugs hit you first and you fix them before clients see them.

---

## Keep Reading

- **[The One-Person Agency: Charge Agency Rates as a Solo Operator](/blueprints/one-person-agency/)** — The precursor pattern. If you are still delivering one-off services, start here and productize from there.
- **[He Spent $1,263 on AI in One Month. Then He Capped It.](/blueprints/ai-budget-cap/)** — The cost-control layer you must have before onboarding client number two.
- **[Teach Your AI to Stop Making the Same Mistake Twice](/blueprints/self-improving-agent/)** — The self-improvement layer that compounds across all your tenants. The whole book gets smarter every week without you touching each client.
