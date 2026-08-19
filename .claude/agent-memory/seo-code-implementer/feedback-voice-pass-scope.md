---
name: feedback-voice-pass-scope
description: Rules for pronoun/voice conversion passes on blacklabdev.com — what counts as editorial "we" vs. client "we", and which surfaces are off-limits
metadata:
  type: feedback
---

On copy/voice conversion passes for this site, convert only **editorial** first-person-plural — "we/our" describing Black Lab Dev's or Michael's own actions, process, or opinions. Leave these alone:

- **Client-POV "we/our/your team"** — e.g. "a handoff your team can actually maintain", "Can you integrate booking with **our** existing EHR?", "What do you need from **us** to get started?", quoted client-internal speech like `"we'll fix it later"` has become a load-bearing wall. These refer to the reader's org.
- **Genuinely mutual "we"** — "We talk... and figure out if we're a fit" means Michael *and* the client. Converting it to "I" changes the meaning.
- **Client testimonials** (`components/Testimonial.tsx`) — the customer's own words.
- **Agency-contrast copy** — "Most agencies rely on prebuilt themes… I don't." Keep the word "agency" as the contrast point; only the pronoun converts.
- **Headings, eyebrow/kicker `<span>`s, and nav labels**, plus JSX/code comments and `metadata` objects.
- **Legal pages** (`privacy`, `terms`, `cookies`) and `CookieConsent` — corporate-entity "we" is correct there.

**Why:** The user framed this explicitly as "a pronoun/voice conversion, not a rewrite," and called out headings, JSX structure, class names, metadata, and JSON-LD as out of bounds. Heading text also carries SEO keyword targeting, so changing it is a separate decision.

**How to apply:** Preserve sentence structure and meaning exactly; adjust grammar only as the pronoun forces it ("we've" → "I've", "Our builds" → "My builds", "from us" → "from me"). Report skipped-but-qualifying instances rather than silently converting them.

One live nuance: several pages define FAQ content once as `faqSchema.mainEntity` and render it through `FaqSection` *and* emit it as JSON-LD. That prose is user-visible copy, so it does get converted despite living inside a schema object — the "don't touch JSON-LD" rule protects structural/entity fields (`@type`, `provider`, `url`, org `name`), not dual-purpose answer text. See [[project-solo-repositioning]].
