---
id: verify-a-licence
title: Verify a SlackVault licence
sidebar_label: Verify a licence
description: How to check that a copy of SlackVault is licensed, by its licence key or by its domain, and what the licence file on a deployment contains.
keywords: [verify slackvault licence, slackvault licence file]
last_update:
  date: 2026-11-13
  author: Ahsan Mahmood
---

# Verify a SlackVault licence

Anyone can check a copy on the [verify page](https://slackvault.aoneahsan.com/verify-license). Verification is run by our licensing service.

## By key

Enter the licence key, which starts with `SLACKVAULT-WL`. The answer is one of: valid, issued and still being
set up, revoked, or no such key. A valid answer names the licence holder, the domains it covers and the date its
updates run to. It never shows an email address or a price.

## By domain

Enter the domain where the copy runs. Our licensing service reads the licence file from that domain over HTTPS and
checks the key it names.

## The licence file

Every white-label deployment serves:

- `/.well-known/slackvault-white-label-license.json`: the product, the public licence key, the licence holder,
  the domain, a link to the verify page, and the issue date;
- `/.well-known/slackvault-white-label-license.pdf`: the licence certificate.

We add both when we deploy a copy; a licence holder does not need to.

## When a licence is not active

A white-label copy checks its own licence when it starts and when it is reopened. If the licence has been revoked,
or the copy runs on a domain the licence does not cover, the app shows "This licence is not active" with a link to
the verify page. No data is deleted. If our licensing service cannot be reached, the copy keeps working and checks
again next time.
