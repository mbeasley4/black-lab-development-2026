---
name: feedback-self-description-audit
description: A pronoun/voice pass over body copy is not enough to catch "agency" self-description — PageHero label+H1 title props are a separate, easy-to-miss location
metadata:
  type: feedback
---

When reviewing a "de-agency-ify the copy" pass (or any self-description consistency pass) on
blacklabdev.com, do not assume grepping/reading body paragraphs is sufficient. In the 2026-08-17
review, a full "we → I" voice pass converted every body paragraph on the WordPress, Drupal,
Laravel, and B2B service pages correctly — but left the page's `PageHero` `label` and `title`
props untouched:

- `app/wordpress-development/page.tsx` — `label="WordPress Development Agency"` and
  `title="WordPress Development Agency for Custom, High-Performance Websites"` (this title is
  literally the page's `<h1>`, rendered via `components/PageHero.tsx`)
- `app/drupal-development/page.tsx` — `label="Drupal Development Agency"`
- `app/laravel-development/page.tsx` — `label="Laravel Development Agency"`
- `app/services/b2b-website-design/page.tsx` — `label="B2B Website Design Agency"`

`PageHero`'s `label` prop renders as a prominent uppercase eyebrow directly above the `<h1>` — it
is some of the most visually and semantically weighted copy on the page, and in this case it sat
right above body copy freshly rewritten to "I build...". This is the single most visible
self-description contradiction that a pure body-copy pronoun pass will miss, because it isn't
phrased with "we/our" — it's phrased as a category noun ("Agency") applied to the business itself.

**Why**: this happened because the fix-pass targeted pronouns ("we"→"I"), and "Agency" isn't a
pronoun — it's a noun-form self-description that needs its own separate grep
(`\bagenc(y|ies)\b`, `\bstudio\b`) run across `label`/`title`/`metadata.title` props specifically,
not just prose paragraphs. Note that plenty of legitimate "agency" usage should NOT be touched —
comparison-contrast copy that describes competitors (e.g. "Most agencies sell strategy and
outsource execution", "Why hire a local Cincinnati web developer instead of a national agency?")
is intentional and correct to leave alone. Only self-referential uses are bugs.

**How to apply**: On any future pass that touches Black Lab Dev's self-description or positioning,
check three separate surfaces, not just body paragraphs:
1. `PageHero` `label` and `title` props (and any other component that renders an eyebrow/H1 from a
   string constant near the top of a page file)
2. `export const metadata` (`title`, `description`, `openGraph.*`, `twitter.*`)
3. JSON-LD `description`/`text` fields (see [[feedback-faq-schema-dual-purpose]])

Also see [[project-solo-positioning]] for the broader repositioning context, and the open
question (raised in the same review, not yet resolved) of whether plural headings like "What We
Do" / "Our Approach" / "Why We're Different" / "Our Work" (nav) should also convert to singular
for full consistency with the now-singular body copy beneath them. As of 2026-08-17 these were
deliberately left as a stylistic exception, pending explicit user decision.
