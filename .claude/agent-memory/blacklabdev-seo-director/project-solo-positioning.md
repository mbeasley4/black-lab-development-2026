---
name: project-solo-positioning
description: Site repositioned from "agency" framing to Michael Beasley's independent/solo practice; brand name and services unchanged
metadata:
  type: project
---

As of 2026-08-17, blacklabdev.com is being repositioned from "agency" self-description to
"independent/solo developer practice" self-description. Decided and implemented in two phases
(uncommitted as of first review):

- **Phase 1**: fixed outright self-description contradictions — LocalBusiness schema description,
  About page FAQ schema answer, Cincinnati local page JSON-LD description, BlogPosting author
  fallback (was incorrectly falling back to the org name "Black Lab Development" inside a `Person`
  schema field — now falls back to "Michael Beasley").
- **Phase 2**: voice pass converting editorial "we/our" → "I/my" across service pages, platform
  pages (WordPress/Drupal/Laravel), industry pages, and shared components — to match `/about`'s
  established first-person-singular voice.

Key facts:
- Brand name "Black Lab Development" / "Black Lab Dev" stays as-is — only the *self-description*
  changed (agency → independent practice), not the brand.
- Niche and services are unchanged: B2B website design, manufacturing websites, conversion
  optimization, custom web dev (Next.js/WordPress/Drupal/Laravel), performance optimization.
- Guardrails used during the voice pass: leave client-directed "your team/we" language alone,
  leave "agency" comparison-contrast copy alone (e.g. "Most agencies sell strategy and outsource
  execution" — that's a *contrast* with a competitor category, not self-description), don't touch
  JSON-LD structural fields (`@type`, property keys) or legal pages (privacy/terms).

**Why**: the previous "agency" framing directly contradicted the actual delivery model (solo
dev, no account managers, no bench of junior devs), which is both a trust/credibility risk with
prospects and an entity-clarity problem for AI answer engines trying to determine who/what
Black Lab Dev actually is.

**How to apply**: Any future SEO/content review of this site should assume first-person-singular
("I build...", "I work with...") is the correct voice for entity-description prose (FAQ answers,
service descriptions, JSON-LD description fields), while headings/nav chrome ("What We Do", "Our
Approach", "Our Work") were *deliberately* left plural as of this pass — see
[[feedback-self-description-audit]] for the open question of whether those should eventually
convert too. Comparison-contrast copy that describes *other* agencies (not Black Lab Dev itself)
correctly stays plural/third-person and should not be "fixed."
