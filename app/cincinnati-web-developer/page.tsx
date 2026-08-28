import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import JsonLd from "@/components/JsonLd";
import FaqSection from "@/components/FaqSection";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";

export const metadata: Metadata = {
  title: "Cincinnati Web Developer | Small Business Websites",
  description:
    "Cincinnati-based web developer specializing in small business websites. Michael Beasley — 15+ years building revenue-focused platforms for Ohio and Tri-State companies.",
  alternates: { canonical: "/cincinnati-web-developer" },
  openGraph: {
    title: "Cincinnati Web Developer | Small Business Websites",
    description:
      "Cincinnati-based web developer specializing in small business websites. Michael Beasley — 15+ years building revenue-focused platforms for Ohio and Tri-State companies.",
    url: "/cincinnati-web-developer",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Cincinnati Web Developer | Small Business Websites",
    description:
      "Cincinnati-based web developer specializing in small business websites — 15+ years building revenue-focused platforms.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://blacklabdev.com/#business",
  name: "Black Lab Development",
  url: "https://blacklabdev.com",
  telephone: "+15135204362",
  email: "mbeasley4@gmail.com",
  description:
    "Cincinnati-based independent web development practice specializing in small business websites. Custom Next.js, WordPress, and headless CMS development for Ohio and Tri-State companies.",
  founder: { "@type": "Person", name: "Michael Beasley", url: "https://blacklabdev.com/about" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    postalCode: "45202",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 39.1031, longitude: -84.512 },
  areaServed: [
    { "@type": "City", name: "Cincinnati", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "Dayton", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "Columbus", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "Lexington", containedInPlace: { "@type": "State", name: "Kentucky" } },
    { "@type": "AdministrativeArea", name: "Greater Cincinnati" },
    { "@type": "Country", name: "United States" },
  ],
  sameAs: ["https://www.linkedin.com/company/blacklabdevelopment/"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you meet with Cincinnati clients in person?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I'm based in Cincinnati and available for in-person meetings with local clients. Most of my workflow is remote-friendly, but I regularly meet with Cincinnati-area businesses when it makes the project go better.",
      },
    },
    {
      "@type": "Question",
      name: "What areas around Cincinnati do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I work with companies throughout the Greater Cincinnati metro, including Northern Kentucky (Covington, Florence, Newport), Dayton, and Columbus. For the right project, I work with companies across the United States — fully remote.",
      },
    },
    {
      "@type": "Question",
      name: "Why hire a local Cincinnati web developer instead of a national agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With a local developer, you get direct access to the person writing your code — no account manager relay, no handoff to a junior developer after kickoff. You also get someone who understands the Cincinnati business landscape and can meet in person. The work doesn't get passed around.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you specialize in around Cincinnati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "My primary focus in the Cincinnati market is small-to-medium businesses across the region — professional services, trades and home services, clinics, restaurants, and specialty retail. The common thread isn't the industry, it's that the website has to earn trust in the first few seconds and make it obvious how to get in touch.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a website cost for a Cincinnati business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Engagements vary based on scope, but most Cincinnati small business website projects run from $4,000–$15,000+ depending on complexity, custom functionality, and ongoing support needs. I scope accurately upfront so there are no surprises. The conversation starts with a discovery call.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
    { "@type": "ListItem", position: 2, name: "Cincinnati Web Developer", item: "https://blacklabdev.com/cincinnati-web-developer" },
  ],
};

const services = [
  {
    title: "Small Business Website Design",
    description: "Custom, professional sites for growing Cincinnati businesses. Built to look credible next to bigger competitors and make the next step obvious.",
    href: "/services/small-business-website-design",
  },
  {
    title: "Agency Partner Services",
    description: "White-label web development and technical SEO fulfillment for agencies and strategy firms serving Cincinnati-area clients. Your brand, my engineering.",
    href: "/partners",
  },
  {
    title: "WordPress Development",
    description: "Custom WordPress with no page builders, no bloated themes. Clean code that performs — and stays maintainable long after the project closes.",
    href: "/wordpress-development",
  },
  {
    title: "Conversion Optimization",
    description: "Traffic without conversions is overhead. I diagnose exactly why your site isn't generating qualified leads, then fix it with data, not guesswork.",
    href: "/services/conversion-optimization",
  },
  {
    title: "Website Performance",
    description: "Core Web Vitals tuned to pass — not just pass, but score. 4.3s to 1.2s load time. 100/100 Lighthouse. Speed that translates to rankings and revenue.",
    href: "/services/website-performance-optimization",
  },
  {
    title: "Custom Web Development",
    description: "Bespoke builds in Next.js, headless CMS, and custom integrations for businesses that have outgrown templates and need something built exactly right.",
    href: "/services/custom-web-development",
  },
];

const faqs = [
  {
    q: "Do you meet with Cincinnati clients in person?",
    a: "Yes. I'm based in Cincinnati and available for in-person meetings with local clients. Most of my workflow is remote-friendly, but I regularly meet with Cincinnati-area businesses when it makes the project go better.",
  },
  {
    q: "What areas around Cincinnati do you serve?",
    a: "I work with companies throughout the Greater Cincinnati metro, including Northern Kentucky (Covington, Florence, Newport), Dayton, and Columbus. For the right project, I work with companies across the United States — fully remote.",
  },
  {
    q: "Why hire a local Cincinnati web developer instead of a national agency?",
    a: "With a local developer, you get direct access to the person writing your code — no account manager relay, no handoff to a junior developer after kickoff. You also get someone who understands the Cincinnati business landscape and can meet in person. The work doesn't get passed around.",
  },
  {
    q: "What industries do you specialize in around Cincinnati?",
    a: "My primary focus in the Cincinnati market is small-to-medium businesses across the region — professional services, trades and home services, clinics, restaurants, and specialty retail. The common thread isn't the industry, it's that the website has to earn trust in the first few seconds and make it obvious how to get in touch.",
  },
  {
    q: "How much does a website cost for a Cincinnati business?",
    a: "Engagements vary based on scope, but most Cincinnati small business website projects run from $4,000–$15,000+ depending on complexity, custom functionality, and ongoing support needs. I scope accurately upfront so there are no surprises. The conversation starts with a discovery call.",
  },
];

export default function CincinnatiWebDeveloperPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, faqSchema, breadcrumbSchema]} />
      <main className="w-full bg-[#0b0b0c] text-white">
        <PageHero
          label="Cincinnati Web Developer"
          title="Cincinnati Web Developer for Small Businesses"
          titleHighlight="Small Businesses"
          description="Michael Beasley — senior web developer based in Cincinnati, Ohio. 15+ years building revenue-focused websites for small and mid-sized businesses across the Tri-State area."
          backgroundImage="/images/services-hero-bg.png"
          badges={["Based in Cincinnati, OH", "In-person available", "Direct access to the engineer"]}
        />

        {/* Hero CTAs */}
        <section className="border-b border-slate-800 bg-[#111214]">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 py-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-volt-500 text-black px-7 py-3.5 text-sm font-semibold hover:bg-volt-400 transition-colors duration-200 shadow-lg shadow-volt-500/25"
            >
              Start a Conversation →
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-md border-2 border-volt-500/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-volt-500/10 hover:border-volt-400 transition-all duration-200"
            >
              View Cincinnati Work →
            </Link>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                  Based in Cincinnati
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  A Cincinnati Web Developer Who Actually Builds It
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  I&apos;m Michael Beasley — a senior web developer and software engineer based in Cincinnati, Ohio. I founded Black Lab Development to work directly with small and mid-sized businesses that need a website built the right way: performant, conversion-focused, and built for the long term.
                </p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  No middlemen. No junior developers assigned after kickoff. When you work with me, you talk directly to the engineer making every decision and writing every line of code.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  I&apos;m available for in-person meetings with Cincinnati and Northern Kentucky businesses — and I work with companies across the United States remotely.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Experience", value: "15+ years" },
                  { label: "Location", value: "Cincinnati, OH 45202" },
                  { label: "Phone", value: "(513) 520-4362" },
                  { label: "Specialties", value: "Small business · WordPress · Next.js · SEO" },
                  { label: "Service area", value: "Cincinnati Metro · Tri-State · Nationwide" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start justify-between gap-6 border-b border-slate-800 pb-4">
                    <span className="text-slate-500 text-sm shrink-0">{item.label}</span>
                    <span className="text-white text-sm font-medium text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-[#111214] border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="max-w-2xl mb-14">
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                What Cincinnati Businesses Hire Me For
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Every engagement is scoped to the real problem — not a service package built to maximize invoice size.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-2xl border border-neutral-800 bg-neutral-950 p-8 transition-all duration-300 hover:border-volt-500/40 hover:shadow-[0_0_40px_rgba(227,245,68,0.06)]"
                >
                  <div className="h-px bg-linear-to-r from-volt-500/0 via-volt-500/0 to-volt-500/0 group-hover:from-volt-500/40 group-hover:via-volt-500/60 group-hover:to-volt-500/0 transition-all duration-500 -mx-8 -mt-8 mb-8" />
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-volt-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{service.description}</p>
                  <span className="text-xs font-semibold text-volt-500 group-hover:text-volt-400 transition-colors duration-200">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why local */}
        <section className="py-20 border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                  Why Local Matters
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  The Difference Between Local and Remote Isn&apos;t Geography
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Most Cincinnati businesses have worked with a national agency or offshore shop at some point. The outcome is usually the same: a handoff to someone who doesn&apos;t know your industry, slow communication across time zones, and a project that takes twice as long and costs more than scoped.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Working with a local Cincinnati developer means you&apos;re talking to one person — the person doing the work — from the first conversation to launch and beyond. The feedback loop is tighter. The decisions are faster. And the outcome is better because the person accountable for it is also the person building it.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { agency: "Account manager relays requirements", local: "You talk directly to the engineer" },
                  { agency: "Junior devs assigned post-kickoff", local: "Senior-level execution, every time" },
                  { agency: "Time zone delays on feedback", local: "Same-day turnaround, in-person when needed" },
                  { agency: "Diffused accountability", local: "One person owns the outcome" },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-2 gap-4 rounded-xl border border-neutral-800 overflow-hidden group hover:border-volt-500/25 transition-all duration-300"
                  >
                    <div className="p-4 bg-neutral-950 text-sm text-neutral-500 leading-relaxed">
                      <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-600 mb-1">Agency</span>
                      {row.agency}
                    </div>
                    <div className="p-4 bg-[#111214]/60 text-sm text-neutral-300 leading-relaxed border-l border-volt-500/10 group-hover:border-volt-500/30 transition-colors duration-300">
                      <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-volt-500/60 mb-1">Black Lab Dev</span>
                      {row.local}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cincinnati proof */}
        <section className="py-20 bg-[#111214] border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="max-w-2xl mb-14">
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                Cincinnati Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Trusted by Cincinnati-Area Organizations
              </h2>
              <p className="text-slate-400 leading-relaxed">
                From regional restaurant chains to private schools and local manufacturers, Black Lab Dev has built and optimized websites for Cincinnati-area businesses that compete and win online.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { stat: "4.3s → 1.2s", label: "Load time improvement", detail: "Custom rebuild replacing a bloated Elementor theme" },
                { stat: "100/100", label: "Lighthouse score", detail: "Core Web Vitals passing across all pages post-rebuild" },
                { stat: "3 → 27", label: "Qualified leads/month", detail: "Manufacturing client, 90-day conversion engagement" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-neutral-800 bg-neutral-950 px-8 py-8 text-center transition-all duration-300 hover:border-volt-500/30 hover:shadow-[0_0_40px_rgba(227,245,68,0.05)]"
                >
                  <div className="text-3xl font-black text-volt-500 drop-shadow-[0_0_10px_rgba(227,245,68,0.4)] mb-2">{item.stat}</div>
                  <div className="text-sm font-semibold text-white mb-2">{item.label}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{item.detail}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-md border-2 border-volt-500/40 bg-volt-500/8 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-volt-400 transition-all duration-300 hover:border-volt-400 hover:bg-volt-500/15 hover:text-white"
              >
                View Full Case Studies →
              </Link>
            </div>
          </div>
        </section>

        <FaqSection
         
          faqs={faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
        />

        <PageClose
          title="Let&apos;s Talk About Your Cincinnati Web Project"
          bodyPrimary="Whether you need a new website, a conversion audit, or a performance overhaul — the conversation starts with a direct assessment of where you are and what it would take to get where you want to be."
          bodySecondary="No boilerplate proposals. No discovery calls that turn into sales calls. Just an honest conversation about your project."
          secondaryHref="/about"
          secondaryLabel="About Michael Beasley"
        />
      </main>
    </>
  );
}
