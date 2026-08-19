import type { Metadata } from "next";
import Image from "next/image"
import Link from "next/link"
import PageHero from "@/components/PageHero"
import PageClose from "@/components/PageClose"
import CaseStudies from "@/components/CaseStudies";
import JsonLd from "@/components/JsonLd";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import FounderByline from "@/components/FounderByline";

export const metadata: Metadata = {
  title: "Web Development & Conversion Optimization Services",
  description:
    "Custom website development, lead generation, ecommerce optimization, site speed improvements, and technical SEO — built right from the start.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Web Development & Conversion Optimization Services",
    description:
      "Custom website development, lead generation, ecommerce optimization, site speed improvements, and technical SEO — built right from the start.",
    url: "/services",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Web Development & Conversion Optimization Services",
    description:
      "Custom website development, conversion optimization, and technical SEO for B2B companies.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://blacklabdev.com/services" },
  ],
};

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Web Design & Development Services",
  description: "B2B website design, development, and optimization services from Black Lab Development in Cincinnati, OH.",
  numberOfItems: 5,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Custom Web Development",
        url: "https://blacklabdev.com/services",
        description:
          "Custom website development built from the architecture out — WordPress, headless CMS, Shopify, or fully custom. No templates, no page builders.",
        provider: { "@type": "Organization", "@id": "https://blacklabdev.com/#business" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Software Engineering & Architecture",
        url: "https://blacklabdev.com/services",
        description:
          "Backend development, API design, data modeling, and architecture decisions with full accountability for the outcome.",
        provider: { "@type": "Organization", "@id": "https://blacklabdev.com/#business" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Performance, SEO & Optimization",
        url: "https://blacklabdev.com/services",
        description:
          "Core Web Vitals, technical SEO remediation, accessibility, and performance audits — real improvements with data attached.",
        provider: { "@type": "Organization", "@id": "https://blacklabdev.com/#business" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Integrations & Automation",
        url: "https://blacklabdev.com/services",
        description:
          "HubSpot, Salesforce, Marketo, Stripe, and custom API integrations — clean connections that don't require babysitting.",
        provider: { "@type": "Organization", "@id": "https://blacklabdev.com/#business" },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Platform Audits & Technical Leadership",
        url: "https://blacklabdev.com/services",
        description:
          "Deep-dive audits of existing systems — surfaces the real problems and tells you plainly what to fix, what to leave alone, and what's quietly on fire.",
        provider: { "@type": "Organization", "@id": "https://blacklabdev.com/#business" },
      },
    },
  ],
};

const services = [
  {
    title: "Custom Web Development",
    image: "/images/services/web-development.png",
    description: (
      <>
        <p className="mb-4">
          If your current site was born from a template and raised by a page builder,
          it's probably already showing its limits. I build from the architecture out —
          custom, deliberate, and designed to last longer than the next platform trend.
        </p>
        <p className="text-neutral-500 text-sm">
          WordPress, headless CMS, Shopify, or fully custom — the right tool for
          the problem, not the one I already had open.
        </p>
      </>
    ),
  },
  {
    title: "Software Engineering & Architecture",
    image: "/images/services/software-architecture.png",
    description: (
      <>
        <p className="mb-4">
          Someone has to actually read the codebase before touching it. That's the job.
          Backend development, API design, data modeling, and architecture decisions made
          by an engineer who's accountable for the outcome — not just the sprint velocity.
        </p>
        <p className="text-neutral-500 text-sm">
          Reliability, security, and systems your team won't dread opening — for when
          "we'll fix it later" has quietly become a load-bearing wall. Includes Cloudflare
          configuration, CDN and WAF setup, and uptime/performance monitoring.
        </p>
      </>
    ),
  },
  {
    title: "Performance, SEO & Optimization",
    image: "/images/services/performance-seo.png",
    description: (
      <>
        <p className="mb-4">
          A slow site isn't a cosmetic problem — it's revenue walking out the door.
          I dig into the actual numbers, fix what's broken at the source, and measure
          the difference. No vague recommendations. No findings buried in a PDF.
        </p>
        <p className="text-neutral-500 text-sm">
          Core Web Vitals, SEO remediation, accessibility, and performance audits —
          real improvements with data attached, not a report you file away and forget.
        </p>
      </>
    ),
  },
  {
    title: "Integrations & Automation",
    image: "/images/services/integrations.png",
    description: (
      <>
        <p className="mb-4">
          If someone on your team is copy-pasting between platforms to keep the data
          straight, that's a technical problem with a technical solution. I build the
          connections that make systems actually talk to each other — and stay talking.
        </p>
        <p className="text-neutral-500 text-sm">
          HubSpot, Salesforce, Marketo, Stripe, and whatever else is in the stack —
          clean integrations that don't require babysitting.
        </p>
      </>
    ),
  },
  {
    title: "Platform Audits & Technical Leadership",
    image: "/images/services/technical-leadership.png",
    description: (
      <>
        <p className="mb-4">
          Before you burn it down and rebuild, it's worth knowing what you actually have.
          I dig into existing systems, surface the real problems, and tell you plainly
          what to fix, what to leave alone, and what's quietly on fire.
        </p>
        <p className="text-neutral-500 text-sm">
          The go-to for teams replacing vendors, inheriting a mess, or tired of making
          expensive guesses about their own infrastructure.
        </p>
      </>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, serviceListSchema]} />
      <main className="w-full bg-[#0b0b0c] text-white">
      {/* ================= HERO ================= */}
      <PageHero
        label="Services"
        title="Engineering That Ships and Holds"
        titleHighlight="Ships and Holds"
        description="I build things that work in production — not just in a demo. Senior-led, hands-on, and allergic to solutions that look great until they don't."
        backgroundImage="/images/services-hero-bg.png"
        badges={["No templates", "No offshore handoffs", "No 40-slide decks"]}
      />

      {/* ================= B2B CORE SERVICES ================= */}
      <section className="py-16 border-b border-volt-500/8 bg-[#111214]/50">
        <div className="mx-auto max-w-375 px-6">
          <div className="mb-10">
            <span className="inline-block mb-3 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
              B2B Specializations
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Revenue-Focused Service Lines</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "B2B Website Design",
                href: "/services/b2b-website-design",
                description: "Conversion architecture built for long sales cycles and multiple buying-committee stakeholders.",
                color: "volt",
              },
              {
                label: "Conversion Optimization",
                href: "/services/conversion-optimization",
                description: "Audit, diagnose, and fix exactly why your site isn't generating qualified leads.",
                color: "blue",
              },
              {
                label: "Manufacturing Websites",
                href: "/services/manufacturing-website-design",
                description: "Industry-specific design for engineers, procurement, and operations buyers — built to generate RFQs.",
                color: "volt",
              },
            ].map((s) => {
              const border = s.color === "volt" ? "hover:border-volt-500/50" : "hover:border-volt-500/50";
              const text = s.color === "volt" ? "text-volt-500" : "text-volt-400";
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  className={`group rounded-xl border border-slate-800 bg-slate-900/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${border} flex flex-col`}
                >
                  <span className={`text-xs uppercase tracking-widest font-semibold mb-3 ${text}`}>{s.label}</span>
                  <p className="text-sm text-slate-400 leading-relaxed grow group-hover:text-slate-300 transition-colors duration-200">{s.description}</p>
                  <div className={`flex items-center gap-2 mt-5 text-sm font-semibold ${text}`}>
                    <span>Learn more</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-6 md:py-9 relative overflow-hidden">
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(227,245,68,0.20) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Ambient glows */}
        <div className="absolute top-20 -left-40 w-175 h-175 bg-volt-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-20 -right-40 w-150 h-150 bg-volt-600/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-375 px-6">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-6 md:mb-9">
            <div>
              <span className="inline-block mb-3 text-xs tracking-[0.5em] uppercase text-volt-500 font-mono drop-shadow-[0_0_12px_rgba(227,245,68,0.7)]">
                // Services
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                What I Do
              </h2>
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-volt-500/60 via-volt-500/20 to-transparent" />
          </div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center py-6 md:py-9 relative ${
                  index < services.length - 1
                    ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-linear-to-r after:from-transparent after:via-volt-500/20 after:to-transparent"
                    : ""
                }`}
              >
                {/* Giant ghost number */}
                <div
                  className={`absolute text-[18rem] md:text-[22rem] font-black font-mono text-volt-500/3 pointer-events-none leading-none select-none top-0 ${
                    index % 2 === 1 ? "-right-4 text-right" : "-left-4"
                  }`}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Text */}
                <div className={`max-w-xl relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-black font-mono text-volt-500/20 leading-none tracking-tighter">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px w-14 bg-linear-to-r from-volt-500/60 to-volt-500/10 shadow-[0_0_10px_rgba(227,245,68,0.4)]" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-white">
                    {service.title}
                  </h2>

                  <div className="text-neutral-400 leading-relaxed">
                    {service.description}
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`group relative h-95 w-full rounded-xl overflow-hidden border border-volt-500/20 shadow-[0_0_50px_rgba(227,245,68,0.08)] transition-all duration-500 hover:border-volt-500/50 hover:shadow-[0_0_100px_rgba(227,245,68,0.20)] ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-65 group-hover:opacity-90 group-hover:scale-[1.05] transition-all duration-700"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-black/65 via-black/20 to-volt-900/10 group-hover:to-volt-900/25 transition-all duration-500" />
                  {/* Scanline texture */}
                  <div
                    className="absolute inset-0 opacity-[0.08] pointer-events-none"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)",
                    }}
                  />
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/40 to-transparent group-hover:via-volt-500/80 transition-all duration-500" />
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/15 to-transparent group-hover:via-volt-500/50 transition-all duration-500" />
                  {/* Corner glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-volt-500/10 blur-3xl rounded-full group-hover:bg-volt-500/25 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-volt-600/8 blur-2xl rounded-full group-hover:bg-volt-500/20 transition-all duration-500" />
                  {/* Corner brackets */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-volt-500/40 group-hover:border-volt-400 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-volt-500/40 group-hover:border-volt-400 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-volt-500/40 group-hover:border-volt-400 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-volt-500/40 group-hover:border-volt-400 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  {/* Service label on hover */}
                  <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    <span className="text-xs font-mono tracking-[0.3em] uppercase text-volt-400 drop-shadow-[0_0_12px_rgba(227,245,68,0.9)]">
                      {service.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= PROCESS ================= */}
      <section className="py-16 md:py-24 border-t border-volt-500/8 bg-[#0d0d0f] relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-48 bg-volt-500/5 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-375 px-6">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-12 md:mb-16">
            <div>
              <span className="inline-block mb-3 text-xs tracking-[0.5em] uppercase text-volt-500 font-mono drop-shadow-[0_0_12px_rgba(227,245,68,0.7)]">
                // How I Work
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                The Process
              </h2>
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-volt-500/60 via-volt-500/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-volt-500/8 rounded-xl overflow-hidden border border-volt-500/10">
            {[
              {
                step: "01",
                title: "Discovery",
                body: "Before writing a line of code I need to understand what you're actually trying to solve — the business goal, the technical constraints, and where the current setup is failing. I'll talk with you, ask uncomfortable questions, and figure out if it's a fit.",
              },
              {
                step: "02",
                title: "Architecture",
                body: "I map out the technical approach: stack, integrations, data model, and anything that's going to bite you later if you get it wrong early. No code yet — just a clear plan so nothing gets built twice.",
              },
              {
                step: "03",
                title: "Build",
                body: "Hands on keyboard. I build incrementally, keep you looped in on real progress (not status theater), and make decisions in the open. You'll see working software early and often, not at the end of a long runway.",
              },
              {
                step: "04",
                title: "Review & QA",
                body: "Everything gets tested against real scenarios — not just happy paths. Performance, accessibility, cross-browser behavior, and the edge cases that always show up in production. I find the problems before your users do.",
              },
              {
                step: "05",
                title: "Launch",
                body: "Deployment is planned, not improvised. DNS, caching, redirects, monitoring — the details that make the difference between a clean cutover and a 2 a.m. fire. I stay available through go-live.",
              },
              {
                step: "06",
                title: "Iterate",
                body: "Shipping isn't the finish line. I track what the data shows after launch, flag what needs attention, and keep improving. If something isn't working, you'll hear it from me first — not from your bounce rate.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-[#0d0d0f] p-8 md:p-10 group hover:bg-[#111214] transition-colors duration-300 relative"
              >
                <div className="flex items-start gap-5 mb-5">
                  <span className="text-4xl font-black font-mono text-volt-500/20 leading-none tracking-tighter group-hover:text-volt-500/40 transition-colors duration-300 shrink-0 pt-1">
                    {item.step}
                  </span>
                  <div className="h-px w-10 bg-linear-to-r from-volt-500/50 to-volt-500/10 mt-5 shrink-0" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-volt-100 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-300">
                  {item.body}
                </p>
                {/* Bottom accent on hover */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-volt-500/0 to-transparent group-hover:via-volt-500/30 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudies />

      <FounderByline />

      {/* ================= CLOSE ================= */}
      <PageClose
        title="No Roadmaps to Nowhere"
        bodyPrimary="Not every problem is a rebuild. Not every slowdown needs a new framework. The best engineering decisions match the actual problem — not the fashionable solution, not the vendor pitch, not whatever worked at the last job."
        bodySecondary="If you want someone who will dig in, tell you what's actually wrong, and do the work — not just draft a proposal — that's what these services are for."
        secondaryHref="/case-studies"
        secondaryLabel="View Work"
      />
      </main>
    </>
  );
}
