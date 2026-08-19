---
name: feedback-faq-schema-dual-purpose
description: FAQPage JSON-LD acceptedAnswer.text objects in this codebase are the same strings rendered as visible on-page FAQ copy, not schema-only plumbing
metadata:
  type: feedback
---

On blacklabdev.com, FAQ content is defined once as a JS object (e.g. `faqSchema` in `app/page.tsx`,
`app/services/website-performance-optimization/page.tsx`, each industry page, etc.) and that same
object is used both to emit the `FAQPage` JSON-LD `<script>` tag AND to render the visible
on-page FAQ accordion/list. There is no separate "schema-only" copy — the `acceptedAnswer.text`
string IS the user-facing answer text.

**Why this matters for review**: any voice/positioning/wording change to visible FAQ copy
necessarily changes what's inside the JSON-LD, and vice versa. Confirmed in the 2026-08-17
"agency → solo practice" voice pass: converting these answer strings from "we" to "I" was the
correct call, not just for on-page consistency but for AEO/GEO — the FAQPage schema is exactly
what answer engines (Google AI Overviews, Perplexity, ChatGPT browsing) extract and may quote
verbatim. A mismatch between the LocalBusiness/Person entity description ("independent practice
run by Michael Beasley") and the FAQ answer voice ("we'll give you an honest estimate") is a real
entity-clarity/consistency problem for GEO — AI systems pattern-match across a page's text to
infer business structure (solo vs. team), and mixed signals dilute that inference.

**How to apply**: Do not treat `text`/`a` fields inside `faqSchema`/`faqs` objects as
"structural JSON-LD, leave alone" — they are content and should be reviewed as content. Only the
actual schema keys (`@type`, `acceptedAnswer`, `mainEntity`, etc.) are structural and should not
be touched during a copy/voice pass. See [[project-solo-positioning]] and
[[feedback-self-description-audit]].
