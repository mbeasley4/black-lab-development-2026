import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import JsonLd from "@/components/JsonLd";
import FaqSection from "@/components/FaqSection";
import FounderByline from "@/components/FounderByline";

export const metadata: Metadata = {
  title: "Custom Shopify Development | Themes, Apps & Storefront Builds",
  description:
    "Custom Shopify development — Liquid themes, Online Store 2.0 sections, custom apps, integrations, and headless storefronts built for speed and conversion.",
  alternates: { canonical: "/shopify-development" },
  openGraph: {
    title: "Custom Shopify Development | Themes, Apps & Storefront Builds | Black Lab Dev",
    description:
      "Custom Shopify development — Liquid themes, Online Store 2.0 sections, custom apps, integrations, and headless storefronts built for speed and conversion.",
    url: "/shopify-development",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Custom Shopify Development | Themes, Apps & Storefront Builds | Black Lab Dev",
    description:
      "Custom Shopify development — Liquid themes, custom apps, integrations, and headless storefronts built for speed and conversion.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const services = [
  {
    title: "Custom Shopify Theme Development",
    body: "Themes built from the ground up in Liquid with Online Store 2.0 sections and blocks — so your team can rearrange pages in the theme editor without a developer, and without the 400 settings nobody uses.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v3H4V5zm0 5h6v10H5a1 1 0 01-1-1V10zm8 0h8v9a1 1 0 01-1 1h-7V10z" />
      </svg>
    ),
  },
  {
    title: "Shopify Plus Builds",
    body: "Work inside Plus environments — Shopify Functions for custom discounts and checkout logic, checkout extensions, B2B catalogs and company accounts, Flow automations, and multi-store setups for separate regions or brands.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14l-1.5 11a1 1 0 01-1 .9H7.5a1 1 0 01-1-.9L5 8zm3.5 0V6.5a3.5 3.5 0 017 0V8" />
      </svg>
    ),
  },
  {
    title: "Custom & Private App Development",
    body: "When no app in the store does what you need, I build one. Custom apps using the Admin API, Shopify Functions, and app extensions — scoped to your store, not published to a marketplace, and without a monthly per-seat bill.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Third-Party Integrations",
    body: "ERP, CRM, marketing automation, SMS, and fulfillment systems connected through Shopify's Admin API and webhooks. Every integration gets verified webhook handling, retry logic, and logging — so a failed sync surfaces before a customer notices.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Headless Shopify Storefronts",
    body: "Storefront API and Hydrogen builds for teams that genuinely need them — custom merchandising logic, content living in a separate CMS, or a storefront that has to share a design system with an existing app. I'll tell you honestly if a Liquid theme gets you there faster.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    title: "Storefront Performance Optimization",
    body: "Auditing what your apps actually inject, removing the script tags left behind by uninstalled apps, deferring what doesn't need to block render, and fixing the LCP and CLS problems that Core Web Vitals flags on product and collection pages.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const processSteps = [
  { step: "01", title: "Store & Catalog Audit", body: "I start in your admin: how products, variants, and metafields are actually structured, which apps are installed, what each one injects into the storefront, and where your current theme is fighting you." },
  { step: "02", title: "Data Modeling with Metafields", body: "Merchandising details, spec tables, and editorial content belong in metafields and metaobjects — not hardcoded in Liquid or pasted into product descriptions. I model that before building templates." },
  { step: "03", title: "Theme Architecture", body: "Sections, blocks, and snippets planned so your team can build new pages in the theme editor. Clear naming, real presets, and settings scoped to what merchandisers will actually change." },
  { step: "04", title: "Build in Liquid", body: "Templates built directly in theme code with version control and a development theme for review. No page builder app layered on top of the theme, and no rented visual editor holding your layouts hostage." },
  { step: "05", title: "Integrations & Custom Logic", body: "Admin API integrations, verified webhooks, and custom apps or Shopify Functions where the platform needs extending. Errors are logged and retried, not silently dropped." },
  { step: "06", title: "Performance Pass & Handoff", body: "Core Web Vitals measured on real product and collection pages, app scripts audited and trimmed, then a walkthrough of the theme editor so your team can run the store without me." },
];

const faqs = [
  {
    q: "Should I build a Liquid theme or go headless?",
    a: "For most stores, a custom Liquid theme with Online Store 2.0 sections is the right answer — it ships faster, keeps the native checkout, and your team can edit pages in the theme editor without a deploy. Headless makes sense when you need custom merchandising logic Liquid can't express, when content lives in a separate CMS that drives the storefront, or when the storefront has to share a design system with an existing application. Headless also means you now own the hosting, caching, and preview infrastructure that Shopify handles for you. I'll recommend a theme unless there's a concrete reason not to.",
  },
  {
    q: "Do I need Shopify Plus?",
    a: "Only if you need what Plus actually unlocks: checkout customization through Shopify Functions and checkout extensions, B2B company accounts and catalogs, multiple storefronts under one organization, or higher API limits for heavy integration traffic. Plenty of stores are on Plus for features they never turned on. If you're already on Plus, I'll use those capabilities properly. If you're not, I'll tell you honestly whether your requirements need it.",
  },
  {
    q: "Can you migrate my store from WooCommerce, BigCommerce, or Magento?",
    a: "Yes. Migrations are mostly a data problem, not a design problem: mapping products, variants, and custom fields into Shopify's product model and metafields, moving customer records without breaking password resets, preserving order history where the platform allows it, and — the part most migrations get wrong — mapping every old URL to a 301 redirect so you don't lose the search rankings you've already earned. I plan the redirect map before launch, not after traffic drops.",
  },
  {
    q: "How much do Shopify apps hurt my site speed?",
    a: "More than most merchants realize. Each app that injects a script tag adds render-blocking JavaScript, and uninstalled apps often leave their script tags and theme snippets behind. A store running fifteen apps is frequently loading code from apps nobody uses anymore. I audit what's actually loading on your storefront, remove the orphaned leftovers, and replace the worst offenders with theme code or a custom app where it's worth doing.",
  },
  {
    q: "How long does a custom Shopify build take?",
    a: "Most custom theme builds run 5–10 weeks depending on catalog complexity, how many templates need custom treatment, and whether metafield modeling is involved. Adding a custom app or a significant third-party integration extends that. Headless storefronts take longer because you're building the infrastructure the theme layer normally provides. I scope from your actual catalog and requirements, not a package tier.",
  },
  {
    q: "How much does custom Shopify development cost?",
    a: "Custom Shopify projects at Black Lab Development range from $4,000 for a focused custom theme build to $24,000+ for headless storefronts or builds with custom apps and multiple system integrations. Migrations and performance remediation sit in between depending on catalog size and how much cleanup the existing store needs. Pricing reflects actual scope — I quote after the audit, not before.",
  },
];

const useCases = [
  "Brands outgrowing a premium theme that's been customized past the point of maintainability",
  "Stores where app subscriptions cost more each month than the functionality is worth",
  "Merchants who need order and customer data flowing into an ERP, CRM, or SMS platform",
  "Shopify Plus stores needing custom checkout logic, B2B catalogs, or multi-store setups",
  "Storefronts failing Core Web Vitals because of accumulated app and script bloat",
  "Teams with an existing design system that need the storefront to match it exactly",
];

const performancePoints = [
  { label: "App script auditing", detail: "I measure what each installed app actually injects, then remove the orphaned script tags and snippets left behind by apps you already uninstalled." },
  { label: "Liquid rendering discipline", detail: "Section-level rendering kept lean, loops kept off unbounded collections, and expensive lookups cached rather than repeated on every page render." },
  { label: "Core Web Vitals on real templates", detail: "LCP and CLS measured on product and collection pages under real catalog data — not on a demo homepage with three products." },
  { label: "Image and asset delivery", detail: "Shopify's CDN used properly — responsive srcsets, correct sizing, and lazy loading below the fold instead of shipping full-resolution originals." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://blacklabdev.com/shopify-development#service",
  name: "Custom Shopify Development",
  url: "https://blacklabdev.com/shopify-development",
  description:
    "Custom Shopify development — Liquid themes, Online Store 2.0 sections, custom apps, integrations, and headless storefronts built for speed and conversion.",
  provider: { "@type": "Organization", "@id": "https://blacklabdev.com/#business" },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Shopify Development",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

type CaseStudy = {
  title: string;
  description: string;
  stats: { value: string; label: string; detail: string }[];
  images?: { src: string; alt: string }[];
  link?: { href: string; label: string };
};

const caseStudies: CaseStudy[] = [
  {
    title: "The Shortening Shuttle — Custom Shopify Storefront",
    description:
      "A custom Shopify storefront for a specialty food brand, built directly in Liquid with Tailwind CSS rather than customizing a premium theme. Product and collection templates were built to fit the catalog, and an interactive oil savings calculator gives customers a concrete number for what the product saves them — turning a spec sheet into a reason to buy.",
    stats: [
      { value: "Liquid", label: "Custom theme", detail: "Built from scratch with custom product and collection templates" },
      { value: "Tailwind", label: "Styling system", detail: "Responsive, brand-aligned UI with no page builder dependency" },
      { value: "Calculator", label: "Conversion tool", detail: "Interactive oil savings calculator built in JavaScript" },
    ],
    images: [
      { src: "/images/work/shortening-shuttle-screenshot.png", alt: "The Shortening Shuttle — custom Shopify storefront homepage" },
    ],
    link: { href: "https://shortening-shuttle.com/", label: "Visit shortening-shuttle.com" },
  },
  {
    title: "Whole30 — Shopify Order Data Integration",
    description:
      "Shopify integration engineering rather than a storefront build. I built a custom Laravel admin portal that processes Shopify order webhooks in real time and drives SlickText SMS sequences from that order data — subscriber lifecycles, daily message automation, and delivery tracking, with the operations team able to see exactly what fired and when. The storefront itself isn't part of this build; the Shopify work here is the API and webhook layer.",
    stats: [
      { value: "Webhooks", label: "Order sync", detail: "Real-time Shopify order webhook processing into a custom portal" },
      { value: "SlickText", label: "SMS automation", detail: "Daily message sequences with delivery tracking and opt-out handling" },
      { value: "Laravel", label: "Admin portal", detail: "Order management, subscriber tracking, and message logs" },
    ],
    images: [
      { src: "/images/w30-app-imgs/w30-screenshot-active-list.png", alt: "Whole30 Admin Portal — active orders list showing SMS delivery status" },
      { src: "/images/w30-app-imgs/w30-screenshot-individual.png", alt: "Whole30 Admin Portal — individual order showing SlickText and Shopify connections and sent messages" },
    ],
  },
];

export default function ShopifyDevelopmentPage() {
  return (
    <main className="w-full bg-[#0b0b0c] text-white">
      <JsonLd data={[serviceSchema, faqSchema]} />
      <PageHero
        label="Shopify Development"
        title="Shopify Development for Custom Themes, Apps & Storefront Builds"
        titleHighlight="Custom Themes, Apps & Storefront Builds"
        description="I build custom Shopify storefronts in Liquid — plus the apps, integrations, and performance work behind them — for brands that have outgrown a premium theme and a stack of app subscriptions."
        backgroundImage="/images/services-hero-bg.png"
        badges={["Custom Liquid themes", "App & integration engineering", "Core Web Vitals on Shopify"]}
      />

      {/* Hero CTAs */}
      <section className="border-b border-slate-800 bg-[#111214]">
        <div className="mx-auto max-w-375 px-6 py-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-volt-500 text-black px-7 py-3.5 text-sm font-semibold hover:bg-volt-400 transition-colors duration-200 shadow-lg shadow-volt-500/25"
          >
            Start a Project →
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-md border-2 border-volt-500/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-volt-500/10 hover:border-volt-400 transition-all duration-200"
          >
            View Case Studies →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                The Problem
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Custom Shopify Development Without the App Tax
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Shopify is an excellent platform. Most Shopify stores are still slow, and it usually isn&apos;t Shopify&apos;s fault — it&apos;s a premium theme customized past the point of maintainability, wrapped in a dozen apps that each inject their own JavaScript.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                At Black Lab Dev, I work directly in your theme code. Liquid, Online Store 2.0 sections, metafields, and the Admin API — the actual platform, not a page builder app rented on top of it.
              </p>
              <p className="text-slate-400 leading-relaxed font-medium">
                No page builder lock-in. No app for something the theme should just do. No monthly bill for functionality you own.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { problem: "Bloated premium themes", impact: "A theme with 300 settings, code paths for features you'll never enable, and customizations layered on until nobody can safely update it. Every change risks breaking something in a template you didn't touch." },
                { problem: "App sprawl killing performance", impact: "Fifteen apps, each injecting render-blocking scripts — and script tags still loading from apps that were uninstalled months ago. The storefront pays for all of it on every page view." },
                { problem: "Brittle integrations", impact: "Order data syncing to an ERP or CRM through an app that silently stops working. No retry logic, no alerting, and nobody notices until fulfillment falls behind by a week." },
                { problem: "Agencies that never open the theme", impact: "Work scoped entirely around installing apps and configuring theme settings, because nobody on the team writes Liquid. Every real requirement becomes another subscription." },
              ].map((item) => (
                <div key={item.problem} className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">{item.problem}</div>
                      <div className="text-xs text-slate-400 leading-relaxed">{item.impact}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#111214] border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
              What I Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Shopify Development Services
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Full-service Shopify development — from the theme your customers see to the integrations and custom apps your operations team depends on.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-neutral-800 bg-neutral-950 p-8 transition-all duration-300 hover:border-volt-500/40 hover:shadow-[0_0_40px_rgba(227,245,68,0.06)]"
              >
                <div className="h-px bg-linear-to-r from-volt-500/0 via-volt-500/0 to-volt-500/0 group-hover:from-volt-500/40 group-hover:via-volt-500/60 group-hover:to-volt-500/0 transition-all duration-500 -mx-8 -mt-8 mb-8" />
                <div className="w-10 h-10 rounded-lg bg-volt-500/10 border border-volt-500/20 flex items-center justify-center text-volt-500 mb-5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-volt-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why I'm different */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                Why I&apos;m Different
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                You Talk to the Developer Writing the Liquid
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Most Shopify agencies put an account manager between you and the person touching your theme. Your feedback gets summarized, priorities get translated, and the context is gone by the time it reaches whoever is actually in the code.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I&apos;m a solo developer. The person you scope the project with is the person who opens your theme, writes the sections, wires the webhooks, and answers the email when something looks wrong at checkout.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Direct access, no handoffs", detail: "One conversation from scope to launch. Nothing gets lost being relayed through a project coordinator." },
                { label: "Theme code, not app configuration", detail: "When a requirement needs Liquid, I write Liquid. Apps get installed because they're genuinely the best option — not because installing is easier than building." },
                { label: "Honest platform recommendations", detail: "If a Liquid theme beats headless for your store, I'll say so. If you don't need Shopify Plus for what you've described, I'll tell you that too." },
                { label: "Your team owns the store after launch", detail: "Sections and blocks built so merchandisers can build pages themselves, plus a real walkthrough of the theme editor. You shouldn't need me for a homepage change." },
                { label: "Accountable for what ships", detail: "There's no team to point at when a webhook stops firing or a template breaks on an edge-case variant. It's my name on the build." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
                  <div className="w-6 h-6 rounded-full bg-volt-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-volt-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-0.5">{item.label}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#111214] border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
              My Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Audit the Store Before Touching the Theme
            </h2>
            <p className="text-slate-400 leading-relaxed">
              I don&apos;t start by picking a theme and styling it. Every project starts in your admin — catalog structure, metafields, installed apps, and what each one is costing your storefront — then I build against what&apos;s actually there.
            </p>
          </div>
          <div className="space-y-10">
            {processSteps.map((item) => (
              <div key={item.step} className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 items-start">
                <div className="text-5xl font-black font-mono text-volt-500/20 leading-none">{item.step}</div>
                <div className="border-b border-slate-800 pb-10 last:border-0 last:pb-0">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                Performance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Fast Storefronts Are a Build Decision
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Shopify gives you a fast CDN and a fast checkout. What slows a store down is everything added on top — app scripts, oversized hero images, render-blocking third-party tags, and Liquid that does expensive work on every page load.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I treat performance as part of the build, not a cleanup project after launch. That means measuring on real product and collection pages under your actual catalog — where the problems actually live.
              </p>
            </div>
            <div className="space-y-4">
              {performancePoints.map((item) => (
                <div key={item.label} className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-volt-500 shadow-[0_0_8px_rgba(227,245,68,0.7)] shrink-0 mt-2" />
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                      <div className="text-xs text-slate-400 leading-relaxed">{item.detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-[#111214] border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                Use Cases
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                When Custom Shopify Work Pays Off
              </h2>
              <p className="text-slate-400 leading-relaxed">
                If a stock theme and a few apps are serving you well, keep them — that&apos;s the right answer for plenty of stores. Custom development earns its cost when the theme is fighting your catalog, when app subscriptions have outgrown their value, or when your store needs to talk to systems that apps don&apos;t handle reliably.
              </p>
            </div>
            <div className="space-y-3">
              {useCases.map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-950 px-6 py-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-volt-500 shadow-[0_0_6px_rgba(227,245,68,0.7)] shrink-0" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-volt-500/35 bg-volt-500/8 text-volt-500 text-xs font-bold tracking-[0.2em] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-volt-500 shadow-[0_0_8px_rgba(227,245,68,0.9)]" />
              Shopify Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Recent Shopify Work
            </h2>
            <div className="mt-4 h-px w-32 bg-linear-to-r from-volt-500/60 via-volt-500/25 to-transparent" />
          </div>

          <div className="space-y-20">
            {caseStudies.map((study, i) => (
              <div key={study.title} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{study.description}</p>
                    {study.link && (
                      <a
                        href={study.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-volt-500 hover:text-volt-400 transition-colors duration-200"
                      >
                        {study.link.label}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {study.stats.map((stat) => (
                      <div key={stat.label} className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-5 text-center transition-all duration-300 hover:border-volt-500/30 hover:shadow-[0_0_30px_rgba(227,245,68,0.05)]">
                        <div className="text-lg font-black text-volt-500 drop-shadow-[0_0_10px_rgba(227,245,68,0.4)] mb-1">{stat.value}</div>
                        <div className="text-xs font-semibold text-white mb-1">{stat.label}</div>
                        <div className="text-[11px] text-slate-500 leading-snug">{stat.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {study.images && (
                  <div className={`grid grid-cols-1 gap-4 ${study.images.length > 1 ? "md:grid-cols-2" : ""}`}>
                    {study.images.map((img) => (
                      <div
                        key={img.src}
                        className="group relative aspect-video rounded-xl overflow-hidden border border-neutral-800 hover:border-volt-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(227,245,68,0.08)]"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                )}

                {i < caseStudies.length - 1 && (
                  <div className="h-px bg-linear-to-r from-transparent via-volt-500/15 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        faqs={faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
      />

      {/* Internal links */}
      <section className="py-16 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <h2 className="text-lg font-bold text-white mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-lg border border-volt-500/30 bg-volt-500/8 px-6 py-3 text-sm font-semibold text-volt-400 hover:border-volt-400 hover:bg-volt-500/15 transition-all duration-200"
            >
              All Services →
            </Link>
            <Link
              href="/services/custom-web-development"
              className="rounded-lg border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              Custom Web Development →
            </Link>
            <Link
              href="/wordpress-development"
              className="rounded-lg border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              WordPress Development →
            </Link>
            <Link
              href="/drupal-development"
              className="rounded-lg border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              Drupal Development →
            </Link>
            <Link
              href="/laravel-development"
              className="rounded-lg border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              Laravel Development →
            </Link>
          </div>
        </div>
      </section>

      <FounderByline />

      <PageClose
        title="Work With a Shopify Developer Who Opens the Theme"
        bodyPrimary="If your storefront is slow, your app bill keeps growing, or your theme can't do what your catalog needs — let's talk about what you're actually trying to sell and what's getting in the way."
        bodySecondary="No page builder lock-in. No app for everything. Just clean Liquid, real integrations, and a developer who's accountable for how the store performs."
        secondaryHref="/case-studies"
        secondaryLabel="View Case Studies"
      />
    </main>
  );
}
