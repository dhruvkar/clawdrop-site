---
layout: blueprint.njk
title: "Your AI Now Trades Like a Congressman (And It's Beating the S&P 500)"
description: "Build an AI trading bot that monitors congressional stock disclosures and automatically copies the best-performing politicians' trades. Uses Capitol Trades data, Alpaca brokerage, and Claude. Paper trade first, go live when ready."
date: 2026-04-08
difficulty: Intermediate
cost: "$0 to paper trade, $20-50/month live"
timeToSetup: "1-2 hours"
originalSource: "https://www.youtube.com/watch?v=lH5wrfNwL3k"
originalAuthor: "Samin Yasar"
originalAuthorUrl: "https://www.youtube.com/@SaminYasar_"
issueNumber: 7
permalink: /blueprints/trade-like-a-politician/
tags:
  - trading
  - stocks
  - automation
  - finance
  - solopreneur
  - claude-code
  - alpaca
  - politics
---

## What You'll Build

An AI trading bot that does something most retail investors can't do manually: track what members of Congress are buying and selling, figure out which politicians have the best track record, and automatically mirror their trades in your own brokerage account.

Members of Congress are required by law to disclose their stock trades within 45 days. This data is public. Sites like Capitol Trades aggregate it into a searchable database. The problem is that by the time most people find out what Nancy Pelosi or Michael McCaul bought last month, the opportunity window has shrunk. And manually checking disclosures, comparing performance, and placing trades is tedious enough that almost nobody does it consistently.

An AI bot does it around the clock without getting bored.

This comes from Samin Yasar's tutorial that pulled 145,000 views in two days. The video walks through three levels, from making your first AI-assisted trade all the way to a fully autonomous copy-trading system. We're focusing on the politician copy-trading angle because that's the part that makes people's jaws drop.

## Why Politicians Beat the Market

This isn't conspiracy theory territory. It's public data.

Members of Congress consistently outperform the stock market. Studies have shown that congressional stock portfolios beat the S&P 500 by significant margins. Whether that's because of superior information access, industry briefings, or just dumb luck depends on who you ask. The point is: the data is there, it's legal to follow, and it's free.

Michael McCaul, for example, has a stock portfolio that has outperformed the S&P 500. When the bot in Samin's tutorial was told to find the best-performing politician to copy, it picked McCaul automatically based on historical returns.

The 45-day disclosure delay means you're not front-running anything. You're following public information that's weeks old. But even delayed by 45 days, the data has shown to be profitable for certain politicians who tend to hold positions for months or longer.

Is it guaranteed to make money? No. Nothing is. But it's a strategy backed by real public data, and the AI removes the one thing that kills most trading strategies: inconsistency.

## The Three Levels

The original tutorial builds up gradually. You don't need to jump straight to autonomous trading.

### Level 1: Your First AI Trade (15 minutes)

This is just getting the pipes connected. Claude talks to your brokerage and can execute trades on command.

**What you need:**
- Claude (desktop app or Claude Code)
- An Alpaca brokerage account (free, takes 5 minutes to set up)
- Alpaca API keys (generated in your dashboard)

Alpaca is a commission-free brokerage with a proper API. It's built for exactly this kind of automation. The key feature: it offers paper trading, which means you can run the entire system with fake money first.

Once connected, you can say things like "Buy 10 shares of AAPL" or "What's my portfolio worth?" and Claude executes it through your Alpaca account. Not revolutionary on its own, but it proves the connection works.

### Level 2: Automated Trading Strategies (30 minutes)

Now you give the bot a strategy and let it run without you.

The tutorial demonstrates a trailing stop strategy on Tesla stock. Here's how it works in plain English:

1. The bot buys Tesla at the current price
2. It sets a "trailing stop" that follows the price upward
3. If Tesla goes up 5%, the stop moves up with it, always staying a fixed percentage below the peak
4. If Tesla drops and hits the stop, the bot sells automatically
5. This locks in gains while limiting losses

You can also set up "ladder buys" where instead of buying all at once, the bot buys in smaller chunks at different price points. This smooths out your entry price and reduces the risk of buying at the top.

The bot runs on a schedule. Set it to check every hour, every 15 minutes, or whatever interval you want. Claude Code's built-in scheduling handles this.

### Level 3: Copy-Trading Politicians (1 hour)

This is the one everyone came for.

**How it works:**

1. **Data source:** Capitol Trades (capitoltrades.com) aggregates congressional stock disclosure filings into a clean, searchable format. The bot connects to this data via an MCP (Model Context Protocol) integration, which lets Claude pull in external data sources.

2. **Pick the best politician:** You don't just randomly follow someone. The bot analyzes historical trading performance across all members of Congress and ranks them by returns. In the tutorial, it automatically selected Michael McCaul as the top performer.

3. **Mirror their trades:** When the bot detects a new trade from your selected politician, it places the same trade in your Alpaca account. Politician bought 500 shares of Nvidia? Your bot buys a proportional amount based on your portfolio size.

4. **Continuous monitoring:** The bot runs on a schedule, checking for new disclosures and executing trades automatically. You wake up to a notification: "Mirrored McCaul's purchase of XYZ. Current portfolio value: $XX,XXX."

**The setup flow:**

```
CAPITOL TRADES (public data)
    |
    v
CLAUDE (analyzes disclosures, picks politician, decides trades)
    |
    v
ALPACA API (executes trades in your account)
    |
    v
YOU (check your phone, see what happened)
```

## Start With Paper Trading

This cannot be stressed enough: start with paper trading.

Alpaca gives you a paper trading account with fake money that behaves exactly like the real market. Same prices, same execution, same everything. Just no real dollars at risk.

Run the politician copy-trading bot on paper for at least 2-4 weeks. Watch how it performs. See which trades it makes. Understand the strategy before you put real money behind it.

Switching from paper to live trading is literally changing one API key. The bot code stays identical.

## The Options Wheel (Bonus Level)

The tutorial goes one step further with an options strategy called "the wheel." This is more advanced, but the concept is simple:

Instead of just buying stocks, you sell options contracts. Think of it like being an insurance company. People pay you a premium for the right to buy or sell stock at a certain price. Most of the time, the option expires worthless and you keep the premium. When it doesn't, you end up buying stock at a discount or selling at a profit.

The wheel strategy cycles between selling puts (getting paid to agree to buy stock at a lower price) and selling covered calls (getting paid to agree to sell stock you already own at a higher price). It generates income regardless of whether the market goes up or down.

The AI handles the math, the timing, and the execution. You set the parameters (which stocks, how much risk, what premium targets) and let it run.

This is genuinely complex stuff that most retail investors don't attempt because the manual overhead is too high. An AI bot removes that barrier entirely.

## Who This Is For

**Side investors who don't have time to watch charts.** You have a day job. You want your money working while you're working. The bot handles everything.

**People who follow the "smart money" philosophy.** Instead of guessing what stocks to buy, you're following people who demonstrably have an edge, whether from better information or better analysis.

**Anyone who's tried trading and quit because of emotional decisions.** The bot doesn't panic sell on red days. It doesn't FOMO buy on green days. It follows the strategy. Period.

**Solopreneurs looking for passive income streams.** Once set up, this runs in the background. The politician copy-trading strategy in particular requires almost zero maintenance because it only trades when new disclosures come in.

## What This Costs

**Paper trading:** $0. Alpaca's paper trading is free. Claude Code has a free tier. You can test the entire system without spending a dollar.

**Live trading:** The main cost is the money you invest. Alpaca charges zero commissions. Claude Code costs around $20/month on a paid plan for reliable scheduled execution. The MCP integration for Capitol Trades data is free.

**Your time:** Initial setup is 1-2 hours if you follow the tutorial step by step. Ongoing maintenance is near zero. Check in weekly to make sure everything is running.

## Gotchas and Tips

- **The 45-day delay is real.** You're not getting insider information. You're getting delayed public disclosures. This strategy works best for politicians who hold positions for months, not day traders in Congress.
- **Not all politicians are good traders.** Some members of Congress have terrible track records. The whole point of the AI is to sort the winners from the losers using data, not vibes.
- **Diversify across politicians.** Don't put all your money behind one person. The bot can track multiple politicians and allocate accordingly.
- **Tax implications exist.** Automated trading can generate a lot of taxable events. Talk to a tax professional, especially if you're doing options.
- **Past performance doesn't guarantee future results.** The standard disclaimer exists for a reason. Congressional trading patterns could change with new regulations, political shifts, or market conditions.
- **Paper trade first.** Said it before, saying it again. Run this for weeks on fake money before going live. The bot might work perfectly. It might expose a flaw in the strategy. Better to find out with paper money.
- **Keep position sizes small.** When you go live, start with a fraction of your portfolio. Scale up only after you've seen consistent results over months.
- **Check the legality in your jurisdiction.** Copy-trading public disclosures is legal in the US. Rules may differ elsewhere.

---

## Keep Reading

- **[Build a Polymarket Trading Bot](/blueprints/polymarket-trading-bot/)** — Apply the same AI trading principles to prediction markets instead of stocks.
- **[The One-Person Agency](/blueprints/one-person-agency/)** — Put your trading profits to work building a service business that runs on AI.
