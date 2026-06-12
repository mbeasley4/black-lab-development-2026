---
name: site-architecture
description: blacklabdev.com page inventory, metadata, schema coverage, and tech stack as of 2026-06-12 audit
metadata:
  type: project
---

# blacklabdev.com Architecture & SEO Baseline (audited 2026-06-12)

Next.js 14+ App Router, TypeScript, Sanity CMS, Vercel (Analytics + SpeedInsights), Aptabase analytics. Tailwind. metadataBase = https://blacklabdev.com.

## Pages & current state
- `/` (app/page.tsx) — H1 in HomepageHero. Has Organization (LocalBusiness+ProfessionalService w/ hasOfferCatalog + sameAs LinkedIn), WebSite, FAQPage (6 Qs) JSON-LD. NAP: phone +15135204362, Cincinnati OH 45202, geo 39.1031/-84.512. `revalidate=60`. NOTE (2026-06-12 re-audit): WebSite schema has NO potentialAction/SearchAction; Organization streetAddress="Cincinnati" is a placeholder (not a real street).
- `/about` — Person schema (Michael Beasley). Good local + E-E-A-T. canonical set. NOTE: personSchema.sameAs is STILL EMPTY array (line 85) as of 2026-06-12 re-audit — homepage Org sameAs DOES have LinkedIn, but /about Person does not.
- `/contact` — ProfessionalService schema (lighter, no geo/postalCode). canonical set.
- `/services` — BreadcrumbList + ItemList (5 services). canonical set. NOTE: ItemList services 1,4,5 all point to /services (no dedicated pages exist for them).
- `/services/b2b-website-design` — Breadcrumb + Service + FAQPage (5 Qs). Full. canonical set. CTA links to /work.
- `/services/conversion-optimization` — Breadcrumb + Service + FAQPage (5 Qs). canonical set.
- `/services/manufacturing-website-design` — Breadcrumb + Service + FAQPage (5 Qs), areaServed includes Cincinnati. canonical set.
- `/industries` — NO canonical, NO JSON-LD, plain `metadata` (not typed Metadata). H1 via PageHero.
- `/wordpress-development` — NO canonical, NO JSON-LD, NO FAQPage schema (has visible FAQ content but no schema!). Links to 3 MISSING routes.
- `/articles` — list, force-dynamic, NO canonical, NO CollectionPage/Blog schema.
- `/articles/[slug]` — BlogPosting schema (good), canonical set, pulls seo.title/seo.metaDescription from Sanity. force-dynamic.
- `/case-studies` — list, NO canonical, NO schema. Mixes Sanity caseStudy docs + hardcoded `projects` array (TODO to migrate).
- `/case-studies/[slug]` — NO JSON-LD (no canonical, no Article/CreativeWork schema), pulls seo fields from Sanity.
- `/work` — redirects to /case-studies via app/work/page.tsx AND via next.config.ts redirect (double redirect, redundant).

## robots.ts
Allows all, plus explicit AI agents (GPTBot, ClaudeBot, CCBot, anthropic-ai, Google-Extended, Amazonbot) with /api/ and /studio/ disallowed. Sitemap referenced.

## sitemap.ts
Static routes + dynamic article/caseStudy slugs from Sanity. Includes /work (priority 0.8) which is a redirect — should be removed.

## public/llms.txt
Present and good quality. Covers services, articles, about, contact, key facts. Lists 4 services.

## Components
- PageHero renders the page H1. JsonLd component = simple script injector.
- Header nav: Website Development(/services), Industries, Case Studies, SEO & Insights(/articles), About, Schedule a Call(/contact).
- Footer: NAP (513.520.4362, Cincinnati OH), LinkedIn, demo subdomains (dog/fit30/vault.blacklabdev.com).

## Positioning / keywords targeted
B2B website design, manufacturing website design, conversion optimization, custom web development, WordPress development, technical SEO, Core Web Vitals, pipeline generation. Local: Cincinnati, OH (nationwide service).
