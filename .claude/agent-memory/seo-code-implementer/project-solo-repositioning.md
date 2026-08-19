---
name: project-solo-repositioning
description: blacklabdev.com is being repositioned from "agency" to "solo/personal developer" framing in phases; Phase 1 (schema/metadata) and Phase 2 (voice pass) done as of 2026-08-17
metadata:
  type: project
---

blacklabdev.com is mid-migration from **agency** positioning to **personal/solo web developer** positioning (Michael Beasley trading as Black Lab Development). It is being executed in deliberate phases, not one sweep:

- **Phase 1** — self-description contradictions in structured data + metadata (LocalBusiness/Organization/FAQ `description` fields saying "agency", Article author defaults). Done.
- **Phase 2** (2026-08-17) — editorial first-person-plural → first-person-singular voice pass across service, industry, and platform pages + shared components. Done.
- **Still outstanding**: section headings, eyebrow/kicker labels, and nav labels still read "What We Do", "What We Build", "Our Approach", "Why We're Different", "Industries We Serve", "Our Work", "Symptoms We Treat", "How We Fix Conversion Problems", "Manufacturing Websites We've Built". Also `app/page.tsx` metadata description ("we build websites that actually do their job"), repeated in `openGraph` and `twitter`. These were deliberately left alone in Phase 2 — see [[feedback-voice-pass-scope]].

**Why:** `/about` already establishes the singular voice ("I'm Michael Beasley", "I founded Black Lab Development"), and the plural voice elsewhere was leftover agency framing that contradicted it — a credibility and entity-consistency problem, not a style preference.

**How to apply:** When touching copy on this site, default to first-person-singular for anything describing Michael's own work, process, or opinions. Do not reintroduce "we/our" self-description. Expect a possible Phase 3 covering the heading/nav/metadata items listed above.
