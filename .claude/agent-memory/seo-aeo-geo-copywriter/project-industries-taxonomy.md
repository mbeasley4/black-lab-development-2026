---
name: project-industries-taxonomy
description: Canonical industry-vertical taxonomy for blacklabdev.com, the 3-taxonomy conflict, and the entity-naming inconsistency to keep consistent across pages
metadata:
  type: project
---

Recommended canonical industry taxonomy for blacklabdev.com — dedicated `/industries/{slug}` pages, prioritized by B2B search intent + portfolio proof:

- Manufacturing → `/industries/manufacturing` (proof: industrial clients, Haag-Streit; already has a related service page)
- B2B & Professional Services → `/industries/professional-services` (proof: Luma fintech, cybersecurity)
- Healthcare → `/industries/healthcare` (proof: dermatology clinics, Haag-Streit medical devices)
- SaaS & Technology → `/industries/technology` (proof: B2B SaaS, solar, cybersecurity)
- Ecommerce & DTC → `/industries/ecommerce` (proof: Whole30, The Shortening Shuttle)
- Education → `/industries/education` (proof: Seven Hills — single client, Tier-3, hold or keep as hub section)

**Why:** As of 2026-06, three competing taxonomies exist and don't agree:
1. `components/Header.tsx` INDUSTRY_LINKS — 4 of 5 links dump to `/industries`; only manufacturing points elsewhere (`/services/manufacturing-website-design`).
2. `components/IndustriesWeServe.tsx` (homepage) — links to 6 `/industries/{slug}` pages that DO NOT EXIST (live 404s).
3. `app/industries/page.tsx` (hub) — lists 5 different segments (Healthcare, SaaS, Manufacturing, Ecommerce, Enterprise) with no outbound links.
Only `app/industries/page.tsx` exists; no sub-routes do.

**How to apply:** Use the slugs above as the single source of truth when writing/menu copy so we stop creating divergent URLs. Slugs match the homepage links (avoids new broken links). Flag the manufacturing duplication (`/services/manufacturing-website-design` vs `/industries/manufacturing`) as a cannibalization risk — service page = conversion/service intent, industry page = vertical hub; cross-link and set canonicals carefully. See [[project-brand-voice-entity]].
