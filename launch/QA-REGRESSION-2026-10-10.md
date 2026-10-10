# ULTRON launch QA regression — 2026-10-10

Product binaries remain private conversation artifacts, **not** committed to this public repository. Neither product is verified live.

## P001 — Home Service Profit & Pricing OS, $29

Customer ZIP v1.0: 33,118 bytes, SHA-256 `68d4ff01f781d6eb4a800e2adcea4a49495ce1ac373368e1c34a6c750d3ce2d2`. Contains 8-sheet XLSX + 2 PDFs; ZIP integrity passed. Both PDFs rendered (four pages total) and visually reviewed.

End-to-end **illustrative test in a separate workbook copy**: two completed jobs and one in-progress job, three leads across Jan/Feb 2026. Dashboard expected and observed: $2,500 completed billed revenue; $740 direct costs; $1,760 gross profit; 70.4% gross margin; $200 allocated overhead; $1,560 after-overhead profit; 62.4% after-overhead margin; 2 completed jobs; $1,250 average job revenue; $800 open pipeline; 2 active opportunities; 1 won lead; 2 overdue follow-ups. In-progress job excluded.

Monthly KPI expected and observed: January revenue $1,000, gross profit $704, 1 completed job, 1 new/1 won lead, $624 after-overhead profit. February revenue $1,500, gross profit $1,056, 1 completed job, 2 new/0 won leads, $800 open pipeline, $936 after-overhead profit. Numeric cached results independently checked in exported XLSX XML. No formula error tokens found. Note: artifact_tool's imported-value display incorrectly interpreted some numeric cached KPI cells as Excel epoch datetimes; raw XLSX numeric caches and formatting were correct. **Original customer ZIP unchanged.**

## P002 — Plumbing Business Operations Kit, $24

Customer ZIP v1.1: 20,944 bytes, SHA-256 `7e6795fdf7fd6266772ff58cf402112bd683a690a8db3607cb345aeb3828b939`. Contains 7-sheet XLSX + 1 PDF; ZIP integrity passed. PDF rendered and visually reviewed.

Illustrative quote test: 2 hours labor, $100 materials, $50 equipment, $25 permit, $25 other direct. Observed $450 direct cost; $67.50 allocated overhead; $517.50 fully loaded cost; $485 base quote; $940.91 target quote, ~45% after-overhead margin. A $700 override correctly flagged BELOW TARGET, ~26.07% margin. No formula error tokens found. **Original customer ZIP unchanged.**

## Gates

Desktop Microsoft Excel opening/recalculation remains untested. P002 full pipeline/recall/dashboard multirow test not repeated this run. Neither product has a verified public Gumroad/Etsy URL, paid order, visit count, or revenue metric. No authenticated marketplace seller tools are exposed in this environment. Etsy charges listing fees; owner prohibited unapproved spending, so Etsy is draft-only without separate authorization.

A private, checksum-verified 14-entry launch handoff ZIP was assembled with both unchanged customer ZIPs, two sets of marketing graphics, storefront copy, P002 Etsy draft, QA results, and organic posts. This handoff is not stored in this public repository.

**Next priority:** authenticated Gumroad upload of P001 then P002, public URL/checkout verification, then read genuine seller analytics before claiming any sales. No ads, purchases, banking changes, contracts or spending.
