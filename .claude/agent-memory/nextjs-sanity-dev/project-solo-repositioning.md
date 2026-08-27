---
name: project-solo-repositioning
description: Site positioning — solo practitioner serving TWO audiences (direct SMB + white-label agency partners); first-person "I" voice, SMB-scaled pricing, no B2B/manufacturing-vertical framing, no fabricated proof
metadata:
  type: project
---

blacklabdev.com is mid-repositioning from agency framing to Michael Beasley's independent solo practice. Brand name "Black Lab Development" stays; all copy uses first-person "I", never "we/our". A site-wide voice pass is already complete.

Two hard content constraints on service/platform/industry pages:
- **No fabricated clients, stats, credentials, or partner statuses.** Case study sections may only cite already-documented work. When real work only partially fits a page's topic (e.g. Whole30's Shopify webhook integration on a Shopify page, where the storefront isn't Shopify-hosted), frame the actual scope honestly rather than implying more.
- **shortening-shuttle.com is the stated design/dev quality bar** for Shopify work — the user calls it out as the reference for both design and development quality, so it leads the case studies on `/shopify-development` with an outbound live link.

**2026-08-17 — SMB audience shift (owner-confirmed).** The target buyer is now small-to-medium business, not mid-market/enterprise. Two standing rules came out of this:
- Pricing across all service/platform pages was cut roughly 40–55% to SMB-scaled bands, keeping relative order intact (CRO/audits cheapest → Drupal/Laravel/custom platforms highest). Any new pricing copy should be quoted in that same band range, not the old figures.
- Lead messaging (metadata titles, H1s, hero badges, nav descriptions, section headings) must not use "enterprise" / "Fortune 500" / scale-bragging as the hook — that signals "not for you" to an SMB reader. Deeper technical FAQ answers explaining *when* a platform fits (e.g. Drupal's structured content and permissions strengths, Laravel at scale) are fine and should stay, as is any factual capability stat or real client description.

**2026-08-27 — two-audience repositioning (owner-approved, executed).** The narrow "B2B buying committee" and "manufacturing RFQ" verticals were retired site-wide. The site now serves two audiences under one brand:
1. **Direct SMB clients** — one or two decision-makers, not a 6-person committee. Hooks are credibility, leads/calls, speed, and self-serve editability — not sales-cycle length or stakeholder mapping.
2. **Agency / strategy-firm partners** — white-label web dev + technical SEO fulfillment. Four standing value props: capacity extension (agency keeps client + margin, written non-solicitation), technical depth they lack in-house, agency-shaped workflow (comms through the agency, NDA-friendly), and speed/reliability. Partner pricing is framed as wholesale-you-mark-up; ongoing retainers quoted "around $1,500/month".

Do **not** reintroduce "buying committee", "6.8 stakeholders", "3–9 month sales cycle", or manufacturing-RFQ framing as lead messaging. `/industries/manufacturing` still legitimately describes manufacturing as a served vertical, and real client descriptors ("manufacturing client", Faztek, PlastechMold) stay — retiring the vertical *framing* is not the same as erasing documented work.

**Why:** The user is selling direct access to one accountable developer — to smaller businesses directly, and to agencies as invisible capacity. Invented proof points, "we" language, big-company posturing, and hyper-vertical framing all undercut that positioning. Agency-partner pages have an extra sensitivity: never imply existing agency partnerships that don't exist (that's a fabricated partner status), so proof sections are framed as "direct engagements I can name."

**How to apply:** When writing or reviewing page copy, grep the file for `\b(we|our|ours|us)\b` before finishing. When a page needs case studies, ask which real work applies instead of inventing plausible-sounding examples. Platform pages also share a fixed section order and a `FounderByline` immediately before `PageClose` — read the most recently built sibling page as the template.
