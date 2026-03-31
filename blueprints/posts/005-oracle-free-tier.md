---
layout: blueprint.njk
title: "Run Your AI Assistant 24/7 for $0/Month"
description: "Set up an always-on AI agent on Oracle Cloud's free tier. 4 CPU cores, 24GB RAM, 200GB storage. No credit card charges, no trial period, no surprise bills. Ever."
date: 2026-03-18
difficulty: Beginner
cost: "$0/month (forever)"
timeToSetup: "30-45 minutes"
originalSource: "https://docs.openclaw.ai/platforms/oracle"
originalAuthor: "OpenClaw Community"
tags:
  - infrastructure
  - free
  - self-hosting
  - cloud
permalink: /blueprints/oracle-free-tier/
---

## What You'll Build

An AI agent that runs 24/7 on a cloud server you never pay for. Not a 30-day trial. Not a "free tier that quietly starts billing you." Oracle's Always Free ARM tier gives you a real server with 4 CPU cores, 24GB of RAM, and 200GB of storage, permanently, no credit card charges.

Your agent stays on while you sleep. It checks your email at 6am, pulls your calendar at 7, and sends you a morning briefing before you've had coffee. It monitors your inbox all day. It runs your automations overnight. And the hosting bill is exactly zero.

## Why This Works

Most people run OpenClaw on their laptop. Works great until you close the lid. Then your agent goes dark. No morning briefings. No background monitoring. No overnight automations. You open your laptop the next morning and your agent missed 12 hours of being useful.

The obvious fix is a cloud server, but that means $5-20/month for a VPS. Not a lot of money, but it's another subscription. Another thing to manage. Another bill.

Oracle's free tier is genuinely free. They make their money on enterprise customers spending millions. The free tier is marketing. That's it. They give you a server that would cost $30-50/month anywhere else, and they eat the cost because they're hoping you'll eventually become a big customer. You probably won't. But the server keeps running anyway.

## Prerequisites

- An Oracle Cloud account (free signup at [oracle.com/cloud/free](https://www.oracle.com/cloud/free/))
- A Tailscale account (free at [tailscale.com](https://tailscale.com))
- 30 minutes and a cup of coffee

**Heads up:** Oracle's free tier signup can be finicky. Some regions run out of capacity. If instance creation fails, try a different availability domain or wait a few hours. The community has a [signup guide](https://gist.github.com/rssnyder/51e3cfedd730e7dd5f4a816143b25dbd) for common issues.

## Step 1: Create Your Server

Log into [Oracle Cloud Console](https://cloud.oracle.com/) and go to Compute, then Instances, then Create Instance.

Configure it like this:

- **Name:** openclaw
- **Image:** Ubuntu 24.04 (aarch64)
- **Shape:** VM.Standard.A1.Flex (Ampere ARM)
- **OCPUs:** 2 (you get up to 4 for free)
- **Memory:** 12GB (you get up to 24GB for free)
- **Boot volume:** 50GB (you get up to 200GB for free)
- **SSH key:** Add your public key

Click Create and note the public IP address.

You're leaving half the resources unused on purpose. That gives you room to run other things later, like a local AI model, a database, or a second agent.

## Step 2: Initial Setup

SSH into your new server and get it ready:

```bash
ssh ubuntu@YOUR_PUBLIC_IP

# Update everything
sudo apt update && sudo apt upgrade -y
sudo apt install -y build-essential

# Set a hostname
sudo hostnamectl set-hostname openclaw

# Keep services running after you disconnect
sudo loginctl enable-linger ubuntu
```

## Step 3: Install Tailscale

Tailscale creates a private network between your devices. Your server gets a permanent address that works from anywhere, no need to remember IP addresses or open firewall ports.

```bash
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up --ssh --hostname=openclaw
```

From now on, connect via `ssh ubuntu@openclaw` from any device on your Tailscale network.

## Step 4: Install OpenClaw

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
source ~/.bashrc
```

When it asks "How do you want to hatch your bot?", select "Do this later." We'll configure it properly.

## Step 5: Configure the Gateway

Lock it down so only you can access it, then expose it securely through Tailscale:

```bash
# Keep gateway private on the VM
openclaw config set gateway.bind loopback

# Require a token to access
openclaw config set gateway.auth.mode token
openclaw doctor --generate-gateway-token

# Expose via Tailscale (encrypted, only your devices)
openclaw config set gateway.tailscale.mode serve
```

Save the gateway token somewhere safe. You'll need it to connect your phone, laptop, or any messaging app.

## Step 6: Connect Your AI Provider

You need a brain for your agent. Add your API key:

```bash
openclaw config set ai.provider anthropic
openclaw config set ai.apiKey sk-ant-your-key-here
```

Or use OpenAI, Gemini, or any provider you prefer. OpenClaw supports them all.

## Step 7: Start It Up

```bash
openclaw gateway start
```

That's it. Your agent is running. Access the dashboard at `https://openclaw.your-tailnet-name.ts.net` from any device on your Tailscale network.

## What You Get

For $0/month, you now have:

- **24/7 uptime.** Your agent never sleeps, even when you close your laptop.
- **4 CPU cores and 24GB RAM.** More than enough for OpenClaw plus local tools, scripts, and automations.
- **200GB storage.** Room for files, databases, logs, and anything your agent creates.
- **Secure access from anywhere.** Tailscale means no exposed ports, no VPN configs, no firewall headaches.
- **No billing surprises.** Oracle's free tier is free. Period. No gotcha after 12 months.

## ARM Gotcha

One thing to know: this is an ARM server, not x86. Almost everything works, but occasionally you'll hit a tool or binary that's x86-only. When that happens, check if there's an ARM build or use the `build-essential` package to compile from source. In practice, this rarely comes up with OpenClaw.

## The Math

Running this same setup elsewhere:

| Provider | Comparable specs | Monthly cost |
|----------|-----------------|-------------|
| Oracle Free | 2 OCPU, 12GB RAM | $0 |
| Hetzner CX22 | 2 vCPU, 4GB RAM | ~$4 |
| DigitalOcean | 2 vCPU, 4GB RAM | $24 |
| AWS Lightsail | 2 vCPU, 4GB RAM | $20 |

Over a year, you save $48-288 compared to paid alternatives. And you get 3x the RAM.

## What People Build on This

Once your agent is always on, things click. People set up morning briefings that land before their alarm goes off. Overnight inbox monitoring that triages email while they sleep. Automated social media posting on a schedule. Background web monitoring for competitor changes, stock alerts, or news tracking.

The server just sits there, running, costing nothing, doing work.

---

**Want the full cost picture?** Our [OpenClaw Pricing Guide](/learn/openclaw-cost-breakdown/) breaks down every dollar: hosting, AI models, and what real users spend from $0 to $150/month.
