---
name: project-solo-repositioning
description: Site is repositioning to solo-practitioner + SMB targeting — first-person "I" voice, SMB-scaled pricing, no enterprise lead messaging, no fabricated case studies
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

**Why:** The user is selling direct access to one accountable developer to smaller businesses; invented proof points, "we" language, and big-company posturing all undercut that positioning.

**How to apply:** When writing or reviewing page copy, grep the file for `\b(we|our|ours|us)\b` before finishing. When a page needs case studies, ask which real work applies instead of inventing plausible-sounding examples. Platform pages also share a fixed section order and a `FounderByline` immediately before `PageClose` — read the most recently built sibling page as the template.
