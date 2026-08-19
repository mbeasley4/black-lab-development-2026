---
name: reference-schema-locations
description: Where LocalBusiness/Person/FAQPage/BlogPosting JSON-LD objects live in the codebase, including duplicated LocalBusiness descriptions that must be kept in sync
metadata:
  type: reference
---

Structured data on blacklabdev.com is defined inline per-page as JS object literals passed into a
JSON-LD `<script>` renderer, not centralized in one place (with one partial exception):

- `app/lib/schema.ts` — exports a shared `localBusinessSchema` object (site-wide LocalBusiness,
  used on the homepage / global level).
- `app/cincinnati-web-developer/page.tsx` — defines its **own separate** `localBusinessSchema`
  object (page-specific, for the local-SEO landing page), with its own `description` field. This
  is a duplicate, not a re-export of `app/lib/schema.ts` — the two description strings are
  independently maintained and must be checked for NAP/positioning consistency by hand whenever
  either one changes. As of 2026-08-17 both were updated in the same pass to say "independent
  practice" instead of "agency," but future reviews should re-verify they haven't drifted.
- `app/about/page.tsx` — defines a `faqSchema` (FAQPage) including the canonical "What is Black
  Lab Development?" entity-definition answer — this is the most important single piece of GEO
  entity-clarity copy on the site (see [[project-solo-positioning]]).
- `app/articles/[slug]/page.tsx` — `BlogPosting` schema; `author` is typed `Person` and falls back
  to `"Michael Beasley"` (previously incorrectly fell back to the org name, a type mismatch inside
  a `Person` field — fixed 2026-08-17).
- `app/page.tsx` and most `app/services/*`, `app/industries/*` pages each define their own
  `faqSchema` object, dual-purposed as visible FAQ copy — see
  [[feedback-faq-schema-dual-purpose]].

**How to apply**: when auditing structured data changes, check both `app/lib/schema.ts` and the
page-specific duplicate in `app/cincinnati-web-developer/page.tsx` — a change to one without the
other is a NAP/positioning-consistency bug, not a one-file fix.
