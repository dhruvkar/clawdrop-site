---
layout: blueprint.njk
title: "Build an AI Job Search Agent That Applies While You Sleep"
description: "A developer doubled his salary in 3 days by letting his AI agent apply to 100+ jobs. Here's how to build the same system."
date: 2026-03-03
difficulty: Intermediate
cost: "$20-40/month (API + optional tools)"
timeToSetup: "2-3 hours"
originalSource: "https://reddit.com/r/openclaw/comments/1r8hek7/my_agent_doubled_my_salary_it_found_a_new_job_for/"
originalAuthor: "Anonymous (Brazilian software engineer)"
issueNumber: 3
permalink: /blueprints/ai-job-search/
tags:
  - business
  - job-search
  - automation
  - career
---

## What You'll Build

An AI agent that searches job boards, matches listings to your profile, customizes your resume for each role, drafts cover letters, and applies. You review a daily report of what it sent.

## Why It Works

Job searching is 90% repetitive grunt work: scrolling listings, tweaking resumes, writing cover letters, filling forms. An AI agent can do this 24/7 with zero burnout. A human applying to 5 jobs per day competes against an agent applying to 50.

**Results:** 100+ applications in 3 days. 6 interviews. 2 offers. Salary doubled from $2,500 to $5,000/month.

## Prerequisites

- OpenClaw installed and running
- Claude API key
- LinkedIn account (logged in via browser or API)
- Your work history (will be converted to structured format)
- Browser automation capability (for form filling)

## Architecture

```
┌─────────────┐     ┌──────────────┐     ┌─────────────────┐
│  Job Scanner │────▶│ Match Filter  │────▶│ Resume Tailorer  │
│              │     │              │     │                  │
│ - LinkedIn   │     │ - Role fit   │     │ - .md to PDF     │
│ - Indeed     │     │ - Salary     │     │ - Custom summary │
│ - Remote.co  │     │ - Location   │     │ - Highlight      │
│ - AngelList  │     │ - Tech stack │     │   relevant exp   │
└─────────────┘     └──────────────┘     └────────┬────────┘
                                                   │
                                          ┌────────▼────────┐
                                          │   Applicator     │
                                          │                  │
                                          │ - Cover letter   │
                                          │ - Form fill      │
                                          │ - Email apply    │
                                          │ - Track status   │
                                          └────────┬────────┘
                                                   │
                                          ┌────────▼────────┐
                                          │  Daily Report    │
                                          │                  │
                                          │ - Applied: 47    │
                                          │ - Matched: 12    │
                                          │ - Responses: 3   │
                                          │ - Interviews: 1  │
                                          └─────────────────┘
```

## Step-by-Step Setup

### Step 1: Structure Your Work History

Create markdown files the agent can reference and remix:

**`resume/base-resume.md`**
```markdown
# Your Name
**Title** | email@domain.com | LinkedIn | GitHub

## Summary
[2-3 sentences about your core value prop — the agent will customize this per job]

## Experience

### Senior Developer — Company Name (2023-Present)
- Built X that resulted in Y
- Led team of Z people
- Technologies: React, Node.js, PostgreSQL

### Developer — Previous Company (2021-2023)
- [accomplishments with numbers]

## Skills
- Languages: Python, JavaScript, TypeScript
- Frameworks: React, Next.js, Node.js
- Tools: Docker, AWS, PostgreSQL
- Soft: Team leadership, client communication
```

**`resume/projects.md`** — detailed project descriptions the agent can pull from
**`resume/achievements.md`** — quantified wins (saved $X, improved Y by Z%)

### Step 2: Define Your Job Search Criteria

Create a `job-search-config.md`:

```markdown
## Target Roles
- Software Engineer (Senior/Staff)
- Full-Stack Developer
- Backend Engineer

## Requirements
- Salary: $100K+ (or equivalent remote)
- Remote: preferred, open to hybrid in [city]
- Company size: 10-500 employees
- Industry: SaaS, fintech, dev tools (preferred)

## Deal Breakers
- No crypto/web3
- No agencies
- Must have health insurance

## Tech Stack Preferences
- Strong match: React, Node.js, PostgreSQL, AWS
- Good match: Python, Go, TypeScript
- Weak match: Java, C#, Angular

## Application Strategy
- Prioritize: roles posted in last 48 hours
- Skip: roles with 500+ applicants on LinkedIn
- Always apply if: company is in my target list (see below)

## Target Companies
- Stripe, Vercel, Linear, Notion, Figma, Supabase
```

### Step 3: Build the Job Scanner

The agent needs to find jobs. Several approaches:

**LinkedIn (browser automation):**
Give your agent browser access with LinkedIn logged in. It searches using your criteria, scrolls through results, and extracts job details.

**Job board APIs:**
- LinkedIn doesn't have a public job API, but you can scrape RSS feeds
- Indeed has an affiliate API
- Remote.co, AngelList, and WeWorkRemotely have feeds
- Hacker News "Who is Hiring" monthly threads

**Google Jobs:**
Search `site:linkedin.com/jobs "[your title]" "[your city]"` or use Google Jobs API.

### Step 4: Match and Rank

The agent reads each job description and scores it against your config:

```
Score = (role_match * 3) + (salary_match * 2) + (tech_match * 2) + (company_size * 1) + (recency * 1)
```

Only jobs scoring above your threshold get applications.

### Step 5: Customize and Apply

For each matched job, the agent:

1. **Reads the full job description**
2. **Customizes your resume summary** to highlight relevant experience
3. **Reorders skills** to match what the job asks for
4. **Writes a cover letter** (if required) that references specific things from the job post
5. **Converts resume to PDF** (use `pandoc` or a markdown-to-PDF tool)
6. **Applies** via the platform's easy-apply, email, or form fill

### Step 6: Track Everything

Create an `applications.md` or SQLite database:

```markdown
| Date | Company | Role | Status | Link | Notes |
|------|---------|------|--------|------|-------|
| 3/3 | Linear | Senior FE | Applied | [link] | Strong match, used React |
| 3/3 | Vercel | Staff Eng | Applied | [link] | Dream company |
| 3/4 | Notion | Backend | Interview | [link] | Phone screen 3/7 |
```

Daily report to your Telegram/email: what was applied, any responses, upcoming interviews.

## Customization Ideas

- **Freelancers:** Monitor Upwork, Fiverr, Toptal for matching gigs instead of full-time roles
- **Sales roles:** Focus on company research + personalized outreach rather than form applications
- **Recruiters:** Run this for multiple candidates simultaneously
- **Career changers:** Weight transferable skills and write cover letters that bridge the gap

## Gotchas & Tips

- **Don't apply to your current employer.** Add them to the exclusion list.
- **Review before dream companies.** Let the agent handle bulk applications, but personally review anything going to your top-5 target companies.
- **The flood is real.** The original builder had to shut it down because of overwhelming responses. Set a daily cap (20-30 applications/day is plenty).
- **LinkedIn has rate limits.** Space out actions. Don't apply to 50 jobs in 10 minutes or you'll get flagged.
- **Quality over quantity for senior roles.** For junior/mid roles, volume wins. For senior/staff, customize heavily and apply to fewer.
- **Track what works.** After a week, check which resume versions and cover letter styles got responses. Feed that back to the agent.
