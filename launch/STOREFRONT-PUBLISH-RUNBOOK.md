# ULTRON Storefront Publish Runbook

Purpose: remove decision-making during the authenticated storefront session and get P001 and P002 from READY to VERIFIED LIVE without inventing status.

## Publication order
1. P001 — Home Service Profit & Pricing OS — launch test $29
2. P002 — Plumbing Business Operations Kit — launch test $24

Do not start Product 003 until both products above have verified public URLs or a concrete marketplace rejection/blocker has been recorded.

## P001
Title: Home Service Profit & Pricing OS | Quote Calculator, Job Costing, Pipeline & KPI Dashboard

Positioning: An operating workbook for home-service owners who want a repeatable way to price work, protect margin, compare estimated vs. actual job costs, track leads/jobs, and monitor core business KPIs.

Primary outcomes:
- Build quotes from labor, material, overhead and margin assumptions
- Flag quotes that fall below target margin
- Compare estimated and actual job economics
- Keep leads and active jobs in one operating view
- Review profitability and operating KPIs regularly

Price: $29 launch test

Publish gate:
- customer XLSX opens without repair warnings
- no visible formula errors (#REF!, #DIV/0!, #VALUE!, #NAME?, #N/A)
- default/example quote produces sensible totals
- dashboard reconciles to underlying example data
- demo data is removed or explicitly labeled
- included guides open correctly
- customer-facing filenames are clean

## P002
Title: Plumbing Business Operations Kit | Estimate, Job Costing, Pipeline & KPI Tracker

Positioning: A plumbing-focused operating workbook for quoting, margin checks, lead/job tracking, actual job costing, maintenance recall and weekly KPI review.

Primary outcomes:
- Estimate labor, materials, equipment, permits and direct costs
- Compare quoted price with target-margin price
- Track leads and jobs through an operating pipeline
- Close the loop with actual job costs
- Record future maintenance/recall opportunities
- Review operating KPIs weekly

Price: $24 launch test

Required package:
- ULTRON-Product-002-Plumbing-Business-Operations-Kit.xlsx
- ULTRON-P002-Plumbing-Operations-Quick-Start.pdf

Known QA: workbook previously opened successfully; automated scan found no visible #REF!, #DIV/0!, #VALUE!, #NAME?, or #N/A errors. Recheck the final uploaded binary immediately before publication.

## Customer-facing disclaimer
This product is an operational planning tool and is not accounting, tax, legal, or financial advice. Users should verify business-specific requirements and customer-facing pricing before use.

## One-pass authenticated publishing procedure
For each product:
1. Create/open the marketplace product draft.
2. Enter the exact title and launch price above.
3. Add positioning and benefit copy from this runbook/launch pack.
4. Upload only the final customer package.
5. Add storefront preview images; do not use fabricated testimonials, fake review counts, fake sales numbers, or unsupported earnings claims.
6. Preview desktop/mobile presentation if the marketplace provides it.
7. Confirm checkout/product delivery settings without changing banking information.
8. Publish.
9. Open the public URL in a fresh view.
10. Verify title, price, description, preview media and checkout button.
11. Record the public URL and timestamp in STORE-LAUNCH-QUEUE.md.
12. Only after steps 9–11 may status become VERIFIED LIVE.

## First-sale measurement
After a verified public URL exists, record:
- storefront views/visits when available
- purchases
- gross revenue
- conversion rate = purchases / visits

Diagnosis:
- no visits: distribution problem
- visits but no purchases: offer/listing problem
- purchases: preserve the converting elements and expand distribution before major offer changes

## Guardrails
No paid ads, purchases, contracts, banking changes, fake scarcity, fabricated testimonials, fabricated revenue, or unverified claims. Marketplace publication is authorized by the owner; live status still requires URL verification.
