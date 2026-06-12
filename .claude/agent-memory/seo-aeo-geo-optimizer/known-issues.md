---
name: known-issues
description: Open SEO/technical/AEO/GEO issues for blacklabdev.com found in 2026-06-12 audit, with status
metadata:
  type: project
---

# Known Issues (audit 2026-06-12) — OPEN unless marked

## HIGH
- Broken internal links on /wordpress-development → /shopify-development, /custom-web-development, /website-performance-optimization (all 404; routes do not exist). Also links in code at line ~301.
- CTAs link to /work which 301-redirects to /case-studies (extra hop). Found in b2b-website-design PageClose secondaryHref, services page (View Work), articles PageClose, about. Should link directly to /case-studies.
- /work still in sitemap.ts (line 32) but is a redirect — remove.
- /case-studies/[slug] has NO JSON-LD and NO canonical — missing Article/CreativeWork schema + self-canonical.
- /wordpress-development has visible FAQ content but NO FAQPage JSON-LD.

## MEDIUM
- Missing canonical on /industries, /wordpress-development, /articles, /case-studies (list).
- /industries & /wordpress-development use untyped `metadata` (no `satisfies Metadata`), no OG/twitter blocks.
- personSchema.sameAs on /about is empty array — add LinkedIn.
- No dedicated Cincinnati local landing page (e.g., /cincinnati-web-developer).
- ItemList on /services points 3 of 5 services to /services itself (no target pages).
- No BreadcrumbList on article/case-study detail pages (visible breadcrumb exists, no schema).

## LOW / CONTENT
- No glossary/definitions page for AEO.
- Article list has no Blog/CollectionPage schema.
- Demo subdomains not referenced in sameAs or schema.

## RESOLVED
(none yet)
