---
layout: playbook.njk
title: "Every Vendor Sends Prices in a Different Format. The Sales Reps Stopped Retyping Them."
description: "New price lists arrive as PDFs, spreadsheets and CSVs. An agent watches the inbox, loads every price into one database, and fills it into the quote with a flag when a price is old or was hard to read. The reps just double-check and send."
date: 2026-10-14
difficulty: Intermediate
cost: "$20-50/mo. Claude plus the email inbox and spreadsheet or database you already have."
timeToSetup: "A weekend. Most of it goes on your three or four messiest vendor price sheets."
originalSource: "https://discord.com/channels/1456350064065904867/1456609488202105005/1476280870280233101"
originalAuthor: "houston (OpenClaw Discord)"
issueNumber: 32
permalink: /playbooks/vendor-price-lists-one-database/
tags:
  - pricing
  - quoting
  - vendors
  - distribution
  - wholesale
  - sales
  - data-entry
  - small-business
  - smb
---

## Tools

- [**OpenClaw**](#aff-openclaw): watches the inbox and runs the whole flow
- [**Claude**](#aff-claude): reads each price list, whatever shape it arrives in, and pulls out the item, the price and the unit
- [**Gmail**](#aff-gmail): or [**Outlook**](#aff-outlook). The inbox your vendors already send price lists to
- [**Google Sheets**](#aff-google-sheets): the simple version of the price database. One row per item, per vendor
- [**PostgreSQL**](#aff-postgresql): the bigger version, once you have thousands of items
- [**Airtable**](#aff-airtable): the middle ground, if your team wants something that looks like a spreadsheet but behaves like a database

## What you'll build

One price book for every vendor you buy from.

Vendors keep sending price lists the way they always have.
PDF, Excel, CSV, whatever.
An agent watches the inbox, opens each one, and loads the prices into one table.

When a rep builds a quote, the prices fill in by themselves.
Next to each price is a flag.
It says how sure the system is about that number.

The rep doesn't look anything up.
They check the flagged lines and send the quote.

## The story

This one comes from a single short post in the OpenClaw community's showcase channel.
The poster goes by houston.
They didn't say what their company sells.

Here it is, in full:

> For my company it is very time consuming and difficult to keep our prices up-to-date because we have so many vendors and they all send us prices in different formats. I have a workflow that watches an inbox for new price lists, pdf, xls, csv or whatever. It automatically and intelligently enters those prices into a structured database. Now when my team does quotes their prices autopopulate from the database and the pricing confidence is shown. Sometimes prices are old or maybe this particular row was hard to read. This helps my sales reps quote 20x faster because instead of doing all kinds of lookups and data entry, they just double check a price here or there and send it!

That's the whole source.
No screenshots, no code, no numbers beyond the "20x."
The 20x is their own estimate, not a measurement.

We're running it anyway because the pattern is the point.
If you buy from a dozen vendors, you already know this problem.

## Where the time actually goes

Writing the quote isn't the slow part.
Finding the price is.

A rep needs the current price on one item.
Which vendor?
Which email was the latest list in?
Is it the PDF from March or the spreadsheet from last week?
Is that price per box or per unit?

Then they type it in by hand.
Then they do it again for the next line.

Multiply that by every line on every quote.
That's the job this setup takes away.

## The flag is the clever part

Most people who build this stop at "the prices fill in."

houston's version also shows how much to trust each price.
They named two reasons a price might be shaky:

> Sometimes prices are old or maybe this particular row was hard to read.

Those are two different problems.

**An old price** was read correctly.
It's just stale.
The vendor may have raised it since.

**A hard-to-read row** might be wrong today.
A blurry scanned PDF, a merged cell, a price that landed in the wrong column.

Both get flagged.
The rep checks the flagged lines and trusts the rest.

That's how you get speed without sending a customer a wrong number.
The machine does the lookups.
A human checks the risky ones.

## How it works

1. Give vendors one address to send price lists to. A dedicated inbox like prices@yourcompany.com makes the agent's job simple.
2. The agent watches that inbox. When a new email has an attachment, it opens it, whether it's a PDF, an Excel file or a CSV.
3. Claude reads the file and pulls out each item: vendor, item number, description, unit and price. It reads scans and odd layouts the way a person would.
4. Every row goes into the price database with three extra fields: the date of the price list, the file it came from, and a confidence flag.
5. Mark a row low confidence when the read was shaky. A missing unit, a price that doesn't look like a price, or a number far from last time's.
6. When a rep starts a quote, the prices fill in from the database. Each line shows how old the price is and whether it was flagged.
7. The rep checks the flagged lines against the original file, fixes anything wrong, and sends.

## The business angle

Say each rep spends an hour a day hunting prices and typing them in.
That's an assumption, but anyone who quotes from vendor sheets will tell you it's low.

With three reps, that's about 15 hours a week of lookups and data entry.
That's close to half of a full-time job.

Most businesses either eat that time or hire someone to keep the price book current.
Either way, the price book is usually behind.

This keeps it current the day the vendor emails.

Then there's the money you don't see.
A rep quoting off last quarter's price list after a vendor raised prices loses margin on every line.
Nobody notices until the invoice comes.
The "old price" flag catches that before the quote goes out.

Speed counts too.
In a lot of businesses, the first good quote wins the job.

## Who should steal this idea

Distributors and wholesalers.
Contractors and installers who price materials from several suppliers.
Equipment dealers, parts counters, building supply yards.

Anyone whose quote is built from other people's price sheets.

## How hard is it

Intermediate.

Reading the files is the easy part now.
Claude handles PDFs, spreadsheets and scans well.

The work is in your vendors' quirks.
One lists prices per case, another per unit.
One sends a full list, another only sends changes.
Expect to spend most of a weekend teaching the setup your three or four messiest vendors.

Hooking the price book into your quoting tool depends on what you use.
A spreadsheet-based quote is an afternoon.
A quoting system that only takes manual entry may need a developer, but just once.

Cost: $20 to $50 a month.

## Gotchas and tips

### Never let the model do the arithmetic

Claude reads the price.
Your code does any math: unit conversions, markups, totals.
A model converting "per case of 12" in its head will eventually be confidently wrong.

### Keep the date and the source file on every price

Every row should say which file it came from and when.
When a customer asks why the price changed, you can show them the vendor's own sheet in one click.
It's also how the "old price" flag knows what's old.

### A human checks every low-confidence row

That's the whole deal.
If a flagged price goes out without a look, sooner or later a quote goes out wrong.
The flag only works if someone acts on it.

### Never overwrite history

When a new list arrives, add the new prices.
Don't delete the old ones.
Price history tells you which vendors raise prices often, and by how much.

### Watch for big jumps

If a price is suddenly ten times last month's, it's almost always a misread.
A decimal moved, or a case price landed in the unit column.
Flag it instead of trusting it.

### Start with one vendor

Pick the vendor you quote from most.
Get that one perfect.
Then add the next.

### Test it on your old quotes first

Run last month's price lists through it.
Compare what it loaded with what your reps actually quoted.
Every mismatch is either a bug in the setup or a rep who quoted an old price.
Both are worth knowing.

## Keep Reading

- [A Contractor Walked Us Through His Bid on Video. Halfway Through, He Couldn't Make It Add Up.](/playbooks/estimate-that-doesnt-add-up/) The other half of quoting: making sure the math on the quote is right.
- [He Bought the Shop in August. In October the Supplier Sent Him a $7,000 Bill for a Couch He'd Already Sold.](/playbooks/hidden-supplier-bills-before-you-buy/) What happens when nobody checks the vendor side.
- [This HVAC Guy Spent Friday Night Setting Up AI. Now His Estimates Write Themselves.](/playbooks/hvac-estimate-autopilot/)
