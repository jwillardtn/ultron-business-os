# ULTRON Store Launch Queue

Last updated: 2026-10-02

This file is the source of truth for marketplace launch status. A product is never marked LIVE until its public storefront URL has been verified.

| Priority | Product | Test price | Product asset | Listing copy | QA | Marketplace | Verified sales |
|---|---|---:|---|---|---|---|---:|
| 1 | Home Service Profit & Pricing OS | $29 | Built previously; binary re-verification required | Ready | BLOCKED: customer binaries not accessible in current automation runtime | NOT LIVE / not verified | 0 |
| 2 | Plumbing Business Operations Kit | $24 | XLSX + Quick Start Guide built and previously QA checked | Ready | Passed prior workbook error scan; final upload package check remains | NOT LIVE / not verified | 0 |

## Publication gate

Before publishing:
1. Verify the exact customer-facing files that will be uploaded.
2. Confirm listing title, description, price, cover/preview assets, and package manifest.
3. Publish only through an authenticated seller session.
4. Open the public product page and record its URL here.
5. Only after a real order is visible may sales/revenue metrics change from zero.

## Current verified commercial metrics

- Verified live listings: 0
- Verified sales: 0
- Verified revenue: $0
- Paid-ad spend authorized: $0

## Immediate next action

Obtain authenticated Gumroad or Etsy storefront control in an execution environment capable of uploading the prepared assets. Publish P001 first, verify its public URL, then publish P002 and verify its public URL. Do not build P003 ahead of these publication gates unless storefront access remains blocked and all launch assets for P001/P002 are complete.

## Safety

No paid ads, purchases, banking changes, contracts, or unverified revenue claims.
