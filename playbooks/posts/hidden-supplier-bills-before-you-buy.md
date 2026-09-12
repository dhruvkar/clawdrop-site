---
layout: playbook.njk
title: "He Bought the Shop in August. In October the Supplier Sent Him a $7,000 Bill for a Couch He'd Already Sold."
description: "The POS showed those orders closed and profitable. Nobody had paid the suppliers. Match every closed sale against whether the supplier was actually paid, before you wire the money for the business."
date: 2026-09-11
difficulty: Beginner
cost: "$20/mo. The exports the seller already has."
timeToSetup: "A day, once you have the two exports in hand."
originalSource: "https://www.reddit.com/r/smallbusiness/comments/1ppoqt0/new_business_owner_blindsided_by_80k_in_hidden/"
originalAuthor: "u/nacciano (r/smallbusiness)"
issueNumber: 29
permalink: /playbooks/hidden-supplier-bills-before-you-buy/
tags:
  - buying-a-business
  - acquisitions
  - due-diligence
  - retail
  - accounts-payable
  - small-business
  - smb
---

## Tools

- [**Claude**](#aff-claude): reconciles the two lists and flags what does not match
- [**Google Sheets**](#aff-google-sheets): the POS export and the payables export, side by side
- [**QuickBooks**](#aff-quickbooks): where the supplier payment record lives, if they use it

## What You'll Build

A reconciliation between two lists the seller already has.

One list: every sale the POS shows as closed. The other: every supplier invoice, and whether it was actually paid.

Anything that appears as revenue on the first list with an unpaid bill behind it on the second is a liability you are about to buy.

Run it before you wire.

## The Story

He worked at the shop for two years before he bought it. Home goods and furniture. He saw the sales come through the register every day and thought it was a solid investment.

Five months after taking over, he found nearly $80,000 in unpaid supplier bills from before his time.

> The previous owner was ordering inventory to fulfill customer orders right before I bought the business, but never paid the suppliers. Now those bills are landing on my desk, and I'm stuck covering them with my own cash, even though the sales from that inventory were already counted as revenue when I took over.

He worked one order through, and it is the clearest explanation of the trap we have read:

> A customer ordered a $12k couch in July (before I owned it), paid a $5k deposit to the old owner. The old owner ordered the couch from the supplier for $7k but never paid. I took over in August, the couch arrived in September, I collected the remaining $7k from the customer, and thought "great, $5k profit!" Then in October, the supplier sent ME a $7k bill for the couch. Now I'm out $2k on that sale.

The deposit went in the old owner's pocket. The bill came to the new owner's desk. And the reason nobody caught it:

> The POS system showed those sales as "closed" and profitable when I bought the business, so I had no idea the suppliers were never paid.

> This has happened with dozens of orders.

His access as an employee is the other half of it:

> I never had access to the supplier invoices or full financials in my employee role. Just trusted that the numbers the owner shared were accurate.

## Why the POS Lies

It is not lying. It is answering a different question.

A point of sale system records that a customer bought a thing and paid for it. That is all it claims. Whether anybody ever paid for the thing you sold them lives in accounts payable, in a different system, often on a different desk.

For a business selling stocked goods off a shelf, the two rarely come apart. For anything ordered in against a customer deposit, they come apart constantly. Furniture, appliances, custom fabrication, special-order parts, building materials.

Every one of those orders is a sale the POS closes weeks before the supplier bill arrives.

## The Business Angle

This is a reconciliation, and a reconciliation is exactly what a model is good at. Two exports, thousands of rows, one question asked of every line: is there an unpaid invoice behind this closed sale?

By hand, over dozens of orders across a year, nobody does it. That is why it works as a con and why it survives as an accident.

The cost of running it is an afternoon. The cost of not running it, for this buyer, was $80,000 he is funding out of his own cash flow.

One more thing in his favour, and worth knowing if you are buying: the sale was seller-financed and he is still paying in monthly installments. Most buyers have already wired the whole amount. He still has payments to make.

## Who Should Steal This Idea

Anyone buying a small business, especially retail, trades, or anything holding inventory or taking customer deposits.

Brokers and acquisition advisors who want a diligence step nobody else runs.

Also current owners. Run it on your own books and you find the duplicate invoices and the bills nobody ever posted.

## How Hard Is It

A day, once you have the exports.

Getting the exports is the real work, and it is a negotiation, not a technical problem.

Cost: $20 a month.

## Gotchas and Tips

**Ask for the payables aging, in writing, before you sign anything.** A seller who will not produce it has told you what you needed to know.

**Customer deposits are the danger zone.** Money collected for goods not yet delivered is a liability wearing revenue's clothes. Get a list of every open deposit and who is holding the cash.

**Reconcile at the order level, not the month.** Monthly totals will look fine. The couch only shows up when you match one sale to one supplier invoice.

**Check for orders placed right before close.** That is the window where a seller has every incentive to order inventory and let the next owner pay for it.

**Working there is not diligence.** He watched the register for two years and never saw a supplier invoice. Seeing sales tells you nothing about what those sales cost.

**Structure for it before you find it.** Seller financing, an escrow holdback, or an indemnity clause on undisclosed payables are all easier to agree before closing than to argue after.

**Get a lawyer on the offset question.** Whether unpaid bills can come out of what you still owe the seller depends on your purchase agreement and your state. Do not decide that one with an agent.

## Keep Reading

- [How an AI Helps You Buy a Business (Without a $50K Broker)](/playbooks/buying-a-business-with-ai/)
- [Fire the Bookkeeper, Keep the Books](/playbooks/fire-the-bookkeeper/)
- [One AI Now Runs the Books for Six Companies at Once](/playbooks/multi-entity-quickbooks-agent/)
