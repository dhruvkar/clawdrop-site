---
layout: learn.njk
title: "OpenClaw Browser Automation: The Complete Guide to Browser Relay, Multi-Profile, and Web Scraping"
description: "OpenClaw can control Chrome like a human. Here's how to set up browser relay, run parallel profiles, scrape websites, and automate anything that lives in a browser."
date: 2026-03-31
lastUpdated: "March 2026"
readTime: "18 min read"
audience: "Everyone"
tags: learn
permalink: /learn/openclaw-browser-automation/
---

**OpenClaw can control a web browser.** Not through some hacky workaround or screen recording. It connects to Chrome (or Brave, or Edge) via the Chrome DevTools Protocol and can click, type, scroll, screenshot, and read pages like a human sitting at the keyboard.

This is arguably OpenClaw's most powerful feature. It's what lets people build automations that interact with websites that have no API: posting to social media, filling out forms, scraping data from dashboards, monitoring competitors, and running entire business workflows through web apps.

But the setup has layers. There's the simple "just let my agent browse" mode, multi-profile parallel automation, remote browser control via nodes, and hosted cloud browsers. This guide covers all of it.

## The 60-Second Version

| What You Want | What You Need | Difficulty |
|---|---|---|
| Agent can browse the web | Enable browser in config, done | Easy |
| Agent uses your logged-in Chrome | `user` profile + approve attach prompt | Easy |
| Agent runs its own isolated Chrome | `openclaw` profile (default) | Easy |
| Multiple isolated browsers in parallel | Multiple named profiles, each with its own CDP port | Medium |
| Control a browser on another machine | Node host on remote machine | Medium |
| Cloud browser (no local Chrome needed) | Browserless or Browserbase account | Medium |

## Part 1: How Browser Control Works

OpenClaw doesn't "see" your screen. It connects to Chrome through a debugging protocol called CDP (Chrome DevTools Protocol). Same thing Chrome's developer tools use internally.

When you enable browser control, OpenClaw:

1. Launches a separate Chrome instance with its own profile (your personal Chrome is untouched)
2. Connects to it via CDP on a local port
3. Uses Playwright on top of CDP for actions (click, type, screenshot, etc.)
4. Exposes all of this through the `browser` tool that your agent can call

The agent sees pages as an accessibility tree (like a screen reader would), not as pixels. It gets a structured snapshot of every button, link, text field, and heading on the page. Then it can reference specific elements by ID to interact with them.

This is more reliable than pixel-based automation because it doesn't break when a website moves a button 10 pixels to the left.

## Part 2: Basic Setup

### Enable the Browser

Browser control is enabled by default in OpenClaw. Check with:

```bash
openclaw browser status
```

If it says "disabled", add this to your `~/.openclaw/openclaw.json`:

```json
{
  "browser": {
    "enabled": true
  }
}
```

Restart the gateway (`openclaw gateway restart`), then:

```bash
openclaw browser start
openclaw browser open https://example.com
openclaw browser snapshot
```

You should see a structured text representation of the page. That's what your agent sees.

### The Three Built-In Profiles

OpenClaw comes with three browser profiles out of the box:

**`openclaw` (default):** A completely isolated Chrome instance. Its own cookies, history, logins. Nothing shared with your personal browser. This is the safe default for automation.

**`user`:** Attaches to your real, running Chrome with all your logins intact. Useful when you need the agent to access sites you're already logged into. Requires Chrome 144+ and you must approve a connection prompt.

**`chrome-relay`:** Uses the OpenClaw Chrome extension to control specific tabs in your browser. You click the extension icon on a tab to "attach" it, then the agent can control just that tab.

For most automation, stick with `openclaw`. Only use `user` or `chrome-relay` when you specifically need your logged-in sessions.

### Choosing Your Browser

OpenClaw auto-detects Chromium-based browsers in this order: Chrome, Brave, Edge, Chromium, Chrome Canary.

To force a specific browser:

```json
{
  "browser": {
    "executablePath": "/usr/bin/brave-browser"
  }
}
```

Common paths:
- **macOS Chrome:** `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`
- **macOS Brave:** `/Applications/Brave Browser.app/Contents/MacOS/Brave Browser`
- **Linux Chrome:** `/usr/bin/google-chrome`
- **Windows Chrome:** `C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe`

## Part 3: Multi-Profile Parallel Automation

This is where it gets interesting. You can run **multiple isolated Chrome instances simultaneously**, each with its own login sessions, cookies, and CDP port.

Why would you want this? Real examples:

- **Social media management:** One profile logged into Twitter, another into LinkedIn, a third into Facebook. Post to all three in parallel without session conflicts.
- **Competitor monitoring:** Three profiles scraping three different competitor dashboards simultaneously.
- **Account management:** Separate profiles for separate client accounts, no cross-contamination.
- **A/B testing:** Browse the same site from different profiles to see different experiences.

### Setting Up Multiple Profiles

In your `~/.openclaw/openclaw.json`:

```json
{
  "browser": {
    "enabled": true,
    "profiles": {
      "openclaw": { "cdpPort": 18800, "color": "#FF4500" },
      "twitter": { "cdpPort": 18801, "color": "#1DA1F2" },
      "linkedin": { "cdpPort": 18802, "color": "#0A66C2" },
      "facebook": { "cdpPort": 18803, "color": "#1877F2" }
    }
  }
}
```

Each profile gets:
- Its own Chrome instance
- Its own user data directory (cookies, history, saved passwords)
- Its own CDP port (18800-18899 range)
- Its own color accent so you can visually tell them apart

### Using Profiles

From the CLI:

```bash
openclaw browser --browser-profile twitter start
openclaw browser --browser-profile twitter open https://x.com
openclaw browser --browser-profile linkedin open https://linkedin.com
```

From the agent tool, the agent specifies which profile to use:

```
browser(action="open", url="https://x.com", profile="twitter")
browser(action="open", url="https://linkedin.com", profile="linkedin")
```

### Important: Profiles vs Tabs

**Multiple profiles = fully isolated.** Each is a separate Chrome process with its own memory, cookies, and network state. No cross-contamination. True parallel automation.

**Multiple tabs in the same profile = shared state.** Tabs within one profile share cookies and can interfere with each other. If you're automating two things that need different login states, use separate profiles, not separate tabs.

You can run up to 100 profiles (ports 18800-18899). In practice, 4-6 concurrent profiles is typical before you start hitting memory limits.

## Part 4: Remote Browser Control (Node Host)

What if your gateway runs on a VPS but you need to control a browser on your desktop? Or you want to automate a browser on a Windows machine from a Linux server?

This is what the **node host** is for.

### How It Works

1. Your OpenClaw gateway runs on Machine A (e.g., a VPS)
2. You run `openclaw node run` on Machine B (e.g., your Windows desktop with Chrome)
3. Machine B connects to Machine A via WebSocket
4. The gateway proxies browser commands to Machine B
5. Chrome runs on Machine B, controlled remotely from Machine A

This is zero-config for the browser part. The node host automatically exposes its local browser profiles to the gateway.

### Setup

On Machine B (the one with the browser):

```bash
openclaw node run --host your-gateway.example.com --port 443 --tls
```

You'll need the gateway token set as an environment variable:

```bash
# Windows PowerShell
$env:OPENCLAW_GATEWAY_TOKEN = "your-gateway-token"
openclaw node run --host your-gateway.example.com --port 443 --tls
```

```bash
# Linux/macOS
export OPENCLAW_GATEWAY_TOKEN="your-gateway-token"
openclaw node run --host your-gateway.example.com --port 443 --tls
```

Once connected, your agent can target that node's browser:

```
browser(action="open", url="https://example.com", profile="openclaw", target="node", node="MY-MACHINE")
```

### Tailscale Makes This Easy

If both machines are on the same Tailscale network, you don't need TLS certificates or public DNS. Just use the Tailscale hostname:

```bash
openclaw node run --host moltbot.tail82b91b.ts.net --port 443 --tls
```

Tailscale Serve can proxy HTTPS on port 443 to your gateway, making the connection seamless.

### Version Matching

The gateway and node **must run the same OpenClaw version**. Version mismatches cause silent failures where browser relay doesn't start and you get no error message. Always update both together.

## Part 5: Cloud Browsers (No Local Chrome)

If you don't want to run Chrome locally at all, you can point OpenClaw at a hosted browser service.

### Browserless

[Browserless](https://browserless.io) runs Chromium in the cloud and exposes CDP over HTTPS.

```json
{
  "browser": {
    "enabled": true,
    "defaultProfile": "browserless",
    "profiles": {
      "browserless": {
        "cdpUrl": "https://production-sfo.browserless.io?token=YOUR_API_KEY",
        "color": "#00AA00"
      }
    }
  }
}
```

### Browserbase

[Browserbase](https://www.browserbase.com) offers headless browsers with built-in CAPTCHA solving and residential proxies.

```json
{
  "browser": {
    "enabled": true,
    "defaultProfile": "browserbase",
    "profiles": {
      "browserbase": {
        "cdpUrl": "wss://connect.browserbase.com?apiKey=YOUR_API_KEY",
        "color": "#F97316"
      }
    }
  }
}
```

Cloud browsers are useful when:
- You're running OpenClaw on a headless server with no display
- You need residential IPs or CAPTCHA solving
- You want to avoid the memory overhead of running Chrome locally

The tradeoff is latency (every action goes over the network) and cost (metered usage).

## Part 6: What Can You Actually Automate?

Here's what people are building with OpenClaw browser automation. These aren't hypotheticals. These are real builds from the community.

### Social Media Posting

Post to Twitter/X, LinkedIn, Facebook, Instagram, Bluesky. Schedule content, engage with comments, monitor mentions. Multi-profile setup means you can manage multiple accounts without logging in and out.

One user runs [a content factory](/blueprints/ai-content-factory/) that posts to 5 platforms simultaneously, each from its own browser profile.

### Web Scraping and Data Extraction

Scrape any website that renders in a browser. Product prices, job listings, real estate data, competitor analysis. The agent reads the page structure and extracts what it needs.

Unlike traditional scraping tools, OpenClaw handles:
- JavaScript-rendered content (SPAs, React apps)
- Login-protected pages (using saved sessions in profiles)
- Anti-bot measures (real browser fingerprint, not headless detection)
- Pagination (agent can click "next" and keep going)

### Form Filling and Data Entry

Automate repetitive form submissions. CRM updates, invoice processing, application forms. The agent reads the form structure, fills in fields, and submits.

### Dashboard Monitoring

Log into a web dashboard on a schedule, screenshot it, extract key metrics, and send a summary. Works for analytics dashboards, ad platforms, financial tools, anything behind a login.

### E-commerce Operations

Monitor product listings, track prices, manage inventory through seller dashboards, handle customer support tickets through web interfaces.

### Browser-Based Testing

Navigate through user flows, check for broken links, verify that pages render correctly, screenshot comparison testing.

## Part 7: Practical Tips

### Snapshots Over Screenshots

The agent "sees" pages through snapshots (accessibility trees), not screenshots. A snapshot returns structured data like:

```
heading "Welcome to Example.com" [ref=1]
link "Sign In" [ref=2]
textbox "Email" [ref=3]
textbox "Password" [ref=4]
button "Log In" [ref=5]
```

The agent then says "type ref 3 'user@example.com'" and "click ref 5". This is fast and reliable.

Screenshots are useful for verification ("did the page actually change?") but shouldn't be the primary way the agent interacts with pages.

### Handle Dynamic Content

Web pages change. Refs from a snapshot become stale after navigation or significant page updates. The pattern is:

1. Take a snapshot
2. Do your action (click, type, etc.)
3. Take a new snapshot if the page changed
4. Use the new refs

Don't try to reuse refs across page navigations.

### Dealing with Anti-Bot Protection

The `openclaw` managed browser is a real Chrome instance with a real browser fingerprint. Most basic bot detection won't flag it. For tougher sites:

- **Use the `user` profile** with your real logged-in session
- **Use Browserbase** which includes stealth mode and residential proxies
- **Add delays** between actions (sites flag superhuman speed)
- **Rotate profiles** to avoid rate limits per session

### Login Persistence

When you log into a site through an OpenClaw browser profile, that login persists across restarts. The profile has its own user data directory just like a regular Chrome profile. Log in once, and the agent can access that site indefinitely (until the session expires).

### The Wait Pattern

After clicking something that triggers a page load or AJAX request, wait for the result:

```bash
openclaw browser wait --text "Dashboard"
openclaw browser wait --url "**/dashboard"
openclaw browser wait --load networkidle
```

This prevents the agent from trying to read a page that hasn't finished loading.

### Evaluate JavaScript

For complex extraction or manipulation, run JavaScript directly in the page:

```bash
openclaw browser evaluate --fn "document.querySelectorAll('.price').length"
```

This is powerful but carries risk. Prompt injection through page content could theoretically steer the JS execution. If you don't need it, disable with `browser.evaluateEnabled: false`.

## Part 8: Configuration Reference

Here's a complete configuration example with everything discussed:

```json
{
  "browser": {
    "enabled": true,
    "defaultProfile": "openclaw",
    "headless": false,
    "executablePath": "/usr/bin/google-chrome",
    "evaluateEnabled": true,
    "ssrfPolicy": {
      "dangerouslyAllowPrivateNetwork": true
    },
    "profiles": {
      "openclaw": {
        "cdpPort": 18800,
        "color": "#FF4500"
      },
      "work": {
        "cdpPort": 18801,
        "color": "#0066CC"
      },
      "user": {
        "driver": "existing-session",
        "attachOnly": true,
        "color": "#00AA00"
      },
      "chrome-relay": {
        "driver": "extension",
        "cdpUrl": "http://127.0.0.1:18792",
        "color": "#00AA00"
      },
      "cloud": {
        "cdpUrl": "https://production-sfo.browserless.io?token=YOUR_KEY",
        "color": "#9B59B6"
      }
    }
  }
}
```

### Key Settings

| Setting | Default | What It Does |
|---|---|---|
| `enabled` | `true` | Master switch for browser control |
| `defaultProfile` | `openclaw` | Which profile the agent uses when none is specified |
| `headless` | `false` | Run Chrome without a visible window |
| `executablePath` | Auto-detect | Path to Chrome/Brave/Edge binary |
| `evaluateEnabled` | `true` | Allow JS execution in pages |
| `noSandbox` | `false` | Disable Chrome sandbox (needed on some Linux setups) |
| `attachOnly` | `false` | Never launch Chrome, only attach to existing |
| `remoteCdpTimeoutMs` | `1500` | Timeout for remote CDP HTTP checks |
| `remoteCdpHandshakeTimeoutMs` | `3000` | Timeout for remote CDP WebSocket handshake |

### SSRF Protection

By default, OpenClaw allows navigating to private/internal network addresses (trusted-network model). For strict public-only browsing:

```json
{
  "browser": {
    "ssrfPolicy": {
      "dangerouslyAllowPrivateNetwork": false,
      "hostnameAllowlist": ["*.example.com"],
      "allowedHostnames": ["localhost"]
    }
  }
}
```

## Part 9: Troubleshooting

**"Browser disabled":** Enable in config and restart gateway.

**"Playwright is not available":** Some features (snapshots, actions, screenshots) need Playwright installed. Run `npx playwright install chromium` and restart.

**Refs not working after navigation:** Refs are not stable across page changes. Take a new snapshot after each navigation.

**"Strict mode violation":** Multiple elements matched. Take an interactive snapshot (`openclaw browser snapshot --interactive`) to see what's on the page and use a more specific ref.

**Chrome crashes on Linux:** Try `"noSandbox": true` in browser config. Also see the [Linux troubleshooting guide](https://docs.openclaw.ai/tools/browser-linux-troubleshooting).

**Node browser relay not starting:** Check that gateway and node are running the exact same OpenClaw version. Version mismatches cause silent failures.

**WSL2 + Windows Chrome:** WSL2 has its own network namespace. Chrome on Windows can't reach WSL2's localhost. Set `browser.relayBindHost: "0.0.0.0"` or use the node host approach instead.

## Frequently Asked Questions

**Does this work with Firefox?**
No. OpenClaw uses CDP (Chrome DevTools Protocol), which is Chrome/Chromium-only. Firefox has its own protocol. Stick with Chrome, Brave, or Edge.

**Will websites detect that I'm using automation?**
The `openclaw` profile runs a real Chrome instance, not headless Puppeteer. Most sites can't distinguish it from normal browsing. For extra stealth, use Browserbase (residential proxies + stealth mode) or your real `user` profile.

**Can I run this on a server with no display?**
Yes. Set `"headless": true` in config, or use a cloud browser (Browserless/Browserbase). On Linux, you can also use `xvfb` for a virtual display.

**How many profiles can I run at once?**
Up to 100 (ports 18800-18899). Practically, 4-6 before memory becomes an issue on a typical machine. Each Chrome instance uses 200-500MB RAM.

**Is this safe? Can the agent go rogue?**
The agent only controls the isolated `openclaw` profile by default. It can't touch your personal browser unless you explicitly give it access via the `user` or `chrome-relay` profile. SSRF protection prevents navigating to internal network addresses by default. And `evaluateEnabled: false` blocks arbitrary JS execution.

**Can I save and reuse browser sessions?**
Yes. Profile data (cookies, logins, history) persists in the profile's user data directory. Log in once, and it stays logged in across gateway restarts.

---

## Keep Reading

- **[How Much Does OpenClaw Cost?](/learn/openclaw-cost-breakdown/)** — The real pricing breakdown. Hosting, AI models, and what power users actually spend.
- **[Best OpenClaw Skills to Install](/learn/best-openclaw-skills/)** — 13,000+ skills on ClawHub. Here are the ones worth your time (and which to avoid).
