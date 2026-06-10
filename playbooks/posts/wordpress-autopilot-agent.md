---
layout: playbook.njk
title: "An Agent That Runs Your Entire Website"
description: "Automate WordPress with AI by texting an agent on Telegram. It researches, writes the SEO article, makes the featured image, and builds landing pages on command."
date: 2026-06-10
difficulty: Intermediate
cost: "The WordPress site you already run, plus Claude/OpenClaw usage. No new subscriptions."
timeToSetup: "A weekend"
originalSource: "https://www.youtube.com/watch?v=INbU5ej2GNI"
originalAuthor: "Muhamad Ali Ridho (AI & ngoprek)"
tags:
  - wordpress
  - content-marketing
  - seo
  - automation
  - telegram
  - openclaw
  - landing-pages
  - blogging
  - small-business
permalink: /playbooks/wordpress-autopilot-agent/
---

## Tools

- [**OpenClaw**](#aff-openclaw): the agent that does the work. It logs into your site through the back door, writes the article, makes the image, installs plugins, and builds pages.
- [**WordPress**](#aff-wordpress): the site you already have. Nothing changes about it. The agent just becomes another worker with a login.
- [**Telegram**](#aff-telegram): where you give the orders. You text the agent like an employee and it reports back when the work is done.
- The WordPress REST API application password: a separate, scoped login the agent uses instead of your real one. The "back door" that lets it work without you opening the dashboard.
- An SEO plugin (The SEO Framework): the agent installs and configures it for you so your posts are set up to rank.

## What You'll Build

An agent you text that runs your whole WordPress site for you.

A builder named Muhamad Ali Ridho connected an AI agent to a plain WordPress site and started giving it orders from his phone. He sent it a news link and said write an article about this, in English, make it SEO friendly, keep it human. A few minutes later there was a finished draft on the site. He told it to publish. It published. He told it to find a featured image. It generated one and set it. He told it to install and configure an SEO plugin. It did. Then he sent it a screenshot and said build a landing page that looks like this, and it built the page.

He never opened the WordPress dashboard. He never logged in to write a post. He sat in a Telegram thread and acted like a foreman.

You are not building a blog. You are building the worker that runs the blog. The thing that researches, writes, illustrates, configures, and publishes, all from a text message. The copywriter and the site admin, rolled into one chat thread.

## Why This Works

The production end of content marketing is mechanical, and mechanical work is exactly what an agent does well. Find a source. Rewrite it for your audience. Make it readable. Set a title and a category. Add an image. Hit publish. None of that requires taste on every single step. It requires someone reliable doing the same loop over and over without getting bored. That is the agent.

It works because it does not need a new system. You already have WordPress. The REST API is already built into it. The agent does not replace your site or ask you to migrate anything. It just gets its own login and becomes another set of hands on the site you already run.

And it works because the interface is a text message. There is no dashboard to learn, no editor to fight with on your phone. You say what you want in plain language, the agent goes and does it on the site, and it tells you when it is done. You stay the editor. It does the typing.

This is the production side of what a content agency or a part-time marketer charges you for every month. Not the strategy. The doing.

## Prerequisites

- A WordPress site you control, with admin access to the dashboard.
- OpenClaw set up and running, connected to a capable model.
- A Telegram account, with your agent wired to a Telegram bot so you can text it.
- A few minutes in your WordPress user settings to create a login for the agent.
- A clear idea of which work you actually want handed off, so you can tell it apart from the work you still want to do yourself.

## Step-by-Step Setup

### Step 1: Create a User for the Agent

Treat the agent like a new hire. In your WordPress dashboard, go to Users and add a new user for it. Give it a name you will recognize, like "agent" or "claude."

The important field is the role. WordPress roles decide how much the user can touch. A Contributor or Author can write posts but not much else. An Administrator can do everything: write and publish posts, add and edit pages, install and configure plugins, and add users.

Ridho chose Administrator because he wanted the agent to do all of it, including installing plugins and building pages. That is the most powerful setup and also the one to be careful with. If you only want the agent writing drafts, give it a smaller role. You can always raise it later. Start with the least access that gets the job done.

### Step 2: Create a REST API Application Password

This is the key step, and the one that keeps your real password safe.

WordPress has a feature called application passwords. Open the agent's user profile, scroll to the Application Passwords section near the bottom, give it a name, and generate one. WordPress shows you a long password once. Copy it and save it somewhere safe, because it will not show it again.

Here is what makes this safe. This password does not work for logging in through the normal /wp-admin screen. It only works through the REST API, the back door WordPress exposes for programs to connect. So the agent gets in through its own door, with its own credential, and your actual login stays untouched. If anything ever goes wrong, you revoke this one password and the agent is locked out instantly, without you changing anything else.

You now have two things: the agent's username and its application password. That is its entire identity on your site.

### Step 3: Connect the Agent

In your Telegram thread with the agent, just ask it. Tell it you want to connect it to your WordPress site and ask what it needs.

It will ask for your site's address and the credentials you just made: the username and the application password. Hand those over. The agent uses them to reach your site through the REST API and confirm it is connected.

That is the whole connection. One short exchange in a chat. From here on, you are talking to your website by texting the agent.

### Step 4: Publish an Article From a URL

Now the real work. Find a news article or source you want to write about and copy the link.

Send the agent something like: write an article based on the latest news at this link, put it in English, make it SEO friendly, and keep the language human and easy to read, not robotic. Paste the URL.

The agent reads the source, writes an original article in your language, and creates it on your site as a draft. It will report back with the draft and a title. Open it on your site and read it. When you are happy, text the agent to publish it. It flips the draft to live. Reload your blog and the post is there.

You wrote nothing. You edited and approved. That is the job now.

### Step 5: Generate a Featured Image

A published post with no image looks half finished, and your blog roll shows a blank where the thumbnail should be. Fix it with one more message.

Tell the agent to find or create a suitable featured image for the post and set it. The agent can generate an image and attach it as the featured image and cover. If you would rather control image rights yourself, tell it to use an image you send instead, and just attach your own. Either way, it sets the image so you do not have to fiddle with the media library on your phone.

### Step 6: Install and Configure the SEO Plugin

Most WordPress owners pay someone to set up SEO, or never do it. The agent handles both the install and the setup.

Send it something like: install a reputable SEO plugin on the site, configure it with good defaults, and tell me when it is done and what you recommend. The agent installs the plugin, in Ridho's case The SEO Framework, activates it, and configures it. It reports back when the work is finished along with its recommendations.

This is the kind of task that used to mean a support ticket or a freelancer. Now it is one text.

### Step 7: Build a Landing Page From a Screenshot

This is the step that surprises people. The agent does not only write posts. It builds pages.

Take a screenshot of a layout you like, your own old page, a competitor's, a design you found, and send it to the agent. Tell it to build a landing page like this for your product. The agent reads the screenshot and builds the page on your site. Ridho used this to turn a plain default theme into a styled product page, all from an image and a sentence.

Review the page on your site before you link to it anywhere. When it looks right, it is live and ready.

## Adapting This for Your Business

The build is the same. What changes is what you point it at and how much you let it do on its own.

- **Local service businesses.** Have it turn each finished job, season, or FAQ into a blog post that helps you show up in local search, with a featured image set every time.
- **E-commerce and product sellers.** Send a screenshot and build product landing pages on demand, and let the agent keep a steady drip of posts going around your products.
- **Professional services and consultants.** Feed it industry news and let it draft thought-leadership posts in your voice, which you then edit before publishing.
- **Anyone paying a content agency.** Keep your strategist if you have a good one. Hand the production, the writing, the images, the publishing, to the agent and stop paying agency rates for typing.

## Gotchas and Tips

- **Scope the application password tightly.** Give the agent the smallest WordPress role that still lets it do the job, and use a dedicated application password, never your real login. If anything looks wrong, revoke that one password and the agent is out, with nothing else affected.
- **Read every AI article before it goes live.** The agent will write confidently even when it is wrong. Check facts, names, and numbers, and make sure it sounds like your brand and not a robot. The source builder explicitly added "keep it human" to his prompts for this reason.
- **Google does not reward mass low-quality AI content.** Google's guidance rewards helpful, experience-backed content and demotes thin pages cranked out at scale. Use the agent to draft faster, then add your own expertise, examples, and point of view. Volume alone will hurt you.
- **Mind image rights.** A generated image is usually safe, but do not let the agent grab random images off the web for a featured image. Either generate them or send your own licensed ones.
- **Test on staging or low-stakes posts first.** Before you let the agent near your main pages or plugins, let it work on a draft, a test post, or a staging copy of the site. Plugin installs and page builds touch real settings.
- **Do not auto-publish unattended at first.** The agent can run on a schedule and post without you, but earn that. Keep yourself in the loop as the editor who approves each post until you trust the output. Foreman first, autopilot later.

## What This Replaces

Before this, the production side of your website ran one of two ways:

- **A content agency:** a $1,500 to $5,000 a month retainer for someone to research, write, illustrate, and publish your posts, plus the back and forth and the waiting.
- **A part-time marketer or VA:** hours every week logging in, writing posts, hunting for images, wrestling with SEO settings, and clicking publish, while the strategy that actually matters waits.

After this, the writing, the images, the SEO setup, and the publishing happen from a text thread on your phone, on command, on the site you already own. You keep the part that needs you, deciding what to say and approving how it sounds. You stop paying a retainer for the part that was always just doing.

---

## Keep Reading

- **[This AI Content Factory Writes, Researches, and Designs While You Sleep](/playbooks/ai-content-factory/)**: take the production engine further into a full hands-off content operation.
- **[Stop Paying $10,000 for a Custom Website](/playbooks/stop-paying-for-custom-websites/)**: the same agent-builds-your-site idea, applied to the whole site instead of just the posts.
- **[Your Business Invisible When Customers Ask ChatGPT? This Agent Checks Every Saturday.](/playbooks/invisible-in-chatgpt/)**: once your content is flowing, make sure AI search can actually find you.
