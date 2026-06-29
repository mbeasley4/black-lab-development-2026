---
name: project-brand-voice-entity
description: Brand entity-name inconsistency (Black Lab Dev vs Black Lab Development) and first-person voice notes for blacklabdev.com GEO consistency
metadata:
  type: project
---

Two brand-voice/entity inconsistencies to normalize across blacklabdev.com for GEO entity consistency:

1. **Entity name:** Logo + image alt say "Black Lab Development"; page `<title>` tags and schema say "Black Lab Dev." Pick ONE canonical name. Recommendation: "Black Lab Dev" in titles/meta (shorter, fits ≤60 char), but ensure Organization schema `name` + `sameAs` and the logo align so AI engines resolve a single entity.

2. **Voice/person:** Homepage `IndustriesWeServe.tsx` uses first person ("Industries I Serve", "I work with…"); `app/industries/page.tsx` hub uses "we." Solo operator (Michael Beasley) — first-person "I" is a credible differentiator but must be consistent within a page and ideally sitewide.

**Why:** Mixed entity names and shifting person weaken GEO entity resolution and read as inconsistent to humans.
**How to apply:** When rewriting any page, match the chosen entity name and voice; don't alternate. Domain is blacklabdev.com, Cincinnati OH. See [[project-industries-taxonomy]].
