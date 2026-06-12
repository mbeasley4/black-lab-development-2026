---
name: schema-conventions
description: blacklabdev.com structured-data + metadata conventions — schema @ids, OG image strategy, list-page schema
metadata:
  type: project
---

Structured-data and metadata conventions on blacklabdev.com (Next.js 14 App Router + Sanity). Established/extended during the 2026-06-12 audit pass.

**Why:** Keep schema graph self-referential and consistent so Google/AI engines resolve entities across pages.

**How to apply:** Reuse these `@id` anchors and patterns rather than inventing new ones.

## Canonical schema @ids (reference these, don't redefine)
- Organization/business: `https://blacklabdev.com/#business` — full `LocalBusiness`+`ProfessionalService` defined ONLY on homepage (`app/page.tsx`). Everywhere else, reference by `@id`.
- WebSite: `https://blacklabdev.com/#website` — defined on homepage `websiteSchema`. `isPartOf` on list pages points here.
- Person (Michael Beasley): `https://blacklabdev.com/about#michael-beasley` — full Person defined on `/about`.

## OG image strategy
- Site-wide default OG image set in `app/layout.tsx` metadata: `/images/homepage-hero-bg.png` (1200x630). Child pages inherit it unless they override `openGraph.images`.
- Article + case-study DETAIL pages generate a per-item OG card from the Sanity `mainImage` via `urlFor(img).width(1200).height(630).fit("crop").url()`, set in `generateMetadata` (both `openGraph.images` and `twitter.images`, card `summary_large_image`). Added 2026-06-12 — detail pages previously had NO image.
- `urlFor` is the standard `@sanity/image-url` builder (`sanity/lib/image.ts`); `.fit("crop")` is valid.

## List-page schema (added 2026-06-12)
- `/articles`: `CollectionPage` with nested `Blog` + `blogPost[]` (BlogPosting per visible article) + standalone `BreadcrumbList`. Injected via `<JsonLd>`.
- `/case-studies`: `CollectionPage` with nested `ItemList` of case studies + `BreadcrumbList`.

## Detail-page schema fields standardized
- BlogPosting (`/articles/[slug]`) and Article (`/case-studies/[slug]`) both carry: `datePublished`, `dateModified` (from `_updatedAt ?? publishedAt`), `inLanguage: "en-US"`, `mainEntityOfPage: { @type: WebPage, @id: <canonical> }`, `publisher` → `#business`, `author` Person.

## Global viewport/theme
- `export const viewport: Viewport` in `app/layout.tsx` sets `themeColor: "#0b0b0c"` and `colorScheme: "dark"`. (Next.js viewport export, not metadata.)

## Known-deferred (not yet done)
- Organization `streetAddress`: placeholder `"Cincinnati"` was REMOVED 2026-06-12 (invalid value worse than absent). Add a real street address only when GBP NAP is confirmed — do not invent one.
- No WebSite `SearchAction` (no on-site search exists).

See also [[audit-2026-06-12]].
