---
layout: playbook.njk
title: "Describe the Part. Your Printer Prints It. No CAD."
description: "Kiln is an open-source tool that lets an AI agent run your 3D printer end to end. Say what you need in one sentence and it designs, slices, and prints it."
date: 2026-07-21
difficulty: Beginner to Intermediate
cost: "Free + open source (you need a 3D printer you already own) + agent API costs"
timeToSetup: "An afternoon"
originalSource: "https://github.com/codeofaxel/Kiln"
originalAuthor: "codeofaxel"
originalAuthorUrl: "https://github.com/codeofaxel"
issueNumber: 23
permalink: /playbooks/kiln-3d-printing-agent/
tags:
  - 3d-printing
  - mcp
  - makers
  - print-shop
  - hardware
  - claude-code
  - automation
  - open-source
  - prototyping
---

## Tools

- [**Kiln**](#aff-kiln): the open-source connector that lets an AI agent design, check, slice, queue, and monitor a real 3D print end to end
- [**Claude Desktop**](#aff-claude-desktop): the chat app where you type "I need a 40mm spacer with four M3 holes" and the agent takes it from there
- [**Claude Code**](#aff-claude-code): the terminal version of the agent that can run the whole Kiln setup from a single prompt
- [**OpenClaw**](#aff-openclaw): alternative agent runtime that speaks the same connector language and drives Kiln the same way
- [**Bambu Lab**](#aff-bambu-lab): one of the supported printer brands, the one from the real 41-minute demo
- [**Prusa**](#aff-prusa): another supported printer brand, connected over its own link software

## What You'll Build

A 3D printer that takes plain-English orders. You install one free tool, point it at the printer you already own, and connect it to an AI agent. From then on, you describe the part you need in a sentence, and the agent designs it, confirms it will actually print, prepares it for your specific machine, queues it, and watches the camera while it runs.

The output is a shop where the person who knows what the part should be is no longer forced to also be the person who knows CAD software and slicer software. "I need a 40mm spacer with four M3 holes" goes from idea to the print bed without anyone opening a design program.

This is the first 3D-printing build we've featured, and it's a clean example of a bigger shift. The skill bottleneck in a print shop was never the printer. It was the two pieces of software between a customer's request and a finished part. Kiln removes that bottleneck.

## The Story

Here's the demo that made us stop and look. The author, who goes by codeofaxel, typed one request to his AI agent: make a coaster with a photo of my dog Ash on it.

Forty-one minutes later, a finished coaster came off a Bambu A1 printer. Photo of the dog, printed into the surface, done.

No CAD program. No slicer. No exporting files and dragging them between apps. One sentence in, one physical object out.

The tool that made this happen is called Kiln. It's free, it's open source, and you install it with a single command: `pip install kiln3d`. Under the hood it's what's called an MCP server, which is just the connector that lets an AI agent reach out and control a real app or device. In this case, the device is your 3D printer.

Before Kiln, running a 3D printer meant a chain of skilled steps. You needed someone who could model the part in CAD software like Fusion 360. Then someone who could take that model into a slicer (the software that turns a 3D model into the actual instructions your printer follows, layer by layer). Then someone who knew how to load it onto the right machine, start it, and babysit it for failures. Every one of those steps was a place a job could stall while you waited on the one person who knew that software.

Kiln hands that entire chain to the AI agent.

## What It Actually Does

Kiln doesn't just "print a file." It runs the whole job the way a skilled shop tech would, and it does every step for you.

**It designs the part.** You describe what you need in words. The agent generates the actual 3D model. No CAD seat, no design hours.

**It checks the part will print.** Before wasting an hour of machine time and a spool of filament, the agent confirms the design is physically printable on your setup. This is the step beginners skip and pay for in failed prints.

**It slices the part.** It converts the model into the layer-by-layer instructions your specific printer needs. That's the slicer job, handled automatically, tuned to the machine you're sending it to.

**It queues it on the right printer.** If you run more than one machine, it sends the job to the correct one instead of you walking files around on a USB stick.

**It monitors the print.** It watches through the camera while the job runs.

**It recovers from failures.** When something goes wrong mid-print, it can react instead of quietly wasting the next four hours on a spaghetti pile of failed plastic.

That last two matter more than they sound. Anyone who has run a printer knows the real cost isn't the first hour, it's the failed overnight job you discover at 8am with a full spool wasted.

## The Printers It Already Speaks To

You do not need to buy anything new. Kiln works with the machines makers and shops already own, across the common brands: Bambu Lab, Creality, Prusa, Elegoo, Voron, Sovol, AnkerMake, Artillery, FlashForge, QIDI, RatRig, and SparkX.

It connects to them through whatever control software you're already using: OctoPrint, Moonraker/Klipper, PrusaLink, or a plain direct USB cable. If you've got a printer running in the back of your shop right now, odds are Kiln can talk to it this afternoon.

## Setting It Up

This is genuinely an afternoon, not a weekend, and not a developer project.

**Step one: install it.** Run `pip install kiln3d`. That's the whole install.

**Step two: sign in.** Run `kiln signin` to create a free account.

**Step three: connect it to your agent.** Run `kiln install-mcp`. This auto-connects Kiln to your AI agent, whether that's Claude Desktop (the chat app), Claude Code (the terminal version), or Codex. You don't hand-edit config files. It wires itself up.

If you're using Claude Code or Codex, you can skip the manual steps entirely. Those agents can run the whole setup from a single prompt. You tell the agent "install Kiln and connect it to my printer," and it does the install, the sign-in, and the connection itself. The tool that removes your CAD bottleneck also removes its own setup bottleneck.

Then you point it at your printer using whichever connection your machine uses, and you're printing from sentences.

## The Business Angle

Here's the money question for anyone running a print shop, a maker business, or a repair shop with a printer in the back: what does this actually replace?

It replaces the CAD skill bottleneck. Today, when a customer walks in and says "I need a bracket that holds this pipe to that wall," somebody in your shop has to sit down and model it. Either that's you, spending an hour you could have billed elsewhere, or it's a CAD designer you hired, or it's a freelancer you're paying $40 to $75 an hour to turn simple requests into files. A basic custom part on a freelance site routinely runs $50 to $150 in design time alone, before a gram of plastic is used.

For simple, well-defined parts, the spacers, brackets, jigs, replacement knobs, custom mounts, gaskets, and fixtures that make up a huge share of real print-shop volume, that design step is now a sentence. "40mm spacer, four M3 holes" doesn't need a designer. It needs a description.

That changes the math on who you hire and what you outsource. You stop paying per-part design fees on simple jobs. You stop losing a day waiting on your one CAD person to free up. And the person at your front counter who understands the customer's need, but never learned Fusion 360, can now take a job all the way to the print bed themselves.

The second thing it replaces is wasted machine time. The automatic printability check and the failure monitoring mean fewer overnight jobs that fail silently. In a shop running machines around the clock, a failed 6-hour print isn't just wasted filament, it's a slot on the schedule you can't get back. Catching failures as they happen is throughput you're currently leaving on the floor.

Keep the honesty here: this is not going to design a complex, tolerance-critical mechanical assembly for you. Your skilled CAD people still matter for the hard stuff. What this kills is the tax you pay to route every simple part through a specialist. That tax is most of the volume in a lot of shops.

## Who Should Steal This Idea

This is for any business with a 3D printer and more part requests than CAD hours.

A **print shop** taking custom one-off jobs. The front counter can now quote and start simple parts without kicking every one back to a designer.

A **maker or Etsy business** selling printed goods. Personalized items (the photo coaster is the perfect example) go from customer request to print queue in one step, at the volume personalization demands.

A **prototyping studio** that iterates fast. "Same bracket but 3mm taller and move the holes out 5mm" becomes a sentence instead of a CAD revision cycle.

A **repair shop with a printer in the back.** The tech who diagnoses the broken part doesn't need to also be the tech who models the replacement. They describe it, it prints.

A **dental lab, prop and cosplay shop, or sign shop.** Any operation where the person who knows what the object should be has been bottlenecked by the software between them and the machine.

The common thread: you already own the printer, you already have the demand, and the thing slowing you down is the specialized software skill sitting between a request and a finished part.

## Gotchas and Tips

**Start with simple, well-defined parts.** The sentence-to-part magic is strongest on geometrically simple items with clear specs: spacers, brackets, holders, jigs, mounts. Describe those precisely (dimensions, hole sizes, thread specs) and you'll get clean results. Save the complex organic or tight-tolerance work for your CAD people.

**Be specific in your descriptions.** "A spacer" is a bad order. "A 40mm outer diameter spacer, 10mm tall, with four M3 clearance holes on a 30mm bolt circle" is a good one. The agent is only as good as the spec you hand it, exactly like a human machinist. The clearer your sentence, the better the part.

**Let it run the printability check every time.** It costs seconds and it saves failed prints. Don't skip it because you're in a hurry. The whole point is catching problems before you burn machine time.

**Use the camera monitoring on long jobs.** The failure recovery only helps if the agent can see the print. Get your camera connected so overnight and multi-hour jobs are actually being watched.

**Let Claude Code or Codex do the setup.** If the install steps feel intimidating, don't do them by hand. Open Claude Code, tell it to install Kiln and connect your printer, and let the agent run its own setup. This is the lowest-friction path in.

**It's free and open source, so check it out first.** The tool itself costs nothing. Your only running cost is the agent's API usage per job, which is small for simple parts, plus the filament and the printer you already own. Try it on scrap before you put it in front of a paying customer.

---

## Keep Reading

- **[This Accountant Trained Her AI to Close the Books Every Month](/playbooks/cpa-quickbooks-monthly-close/)**: The same idea in a different shop. Take the tool you already run your business on, put an AI agent on top, and hand it the repetitive skilled work.
- **[Run Your Business on AI (While Living Your Life)](/playbooks/founder-runs-business-on-ai/)**: The bigger picture for any small-shop owner. What it looks like when AI handles the operational grind and you handle the customers.

**Want the full deep dive?** Read our [Best OpenClaw Skills](/learn/best-openclaw-skills/) guide for the foundational patterns this playbook builds on.
