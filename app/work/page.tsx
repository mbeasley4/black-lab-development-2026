import type { Metadata } from "next";
import Link from "next/link";
import PageClose from "@/components/PageClose";
import JsonLd from "@/components/JsonLd";
import WorkShowcase from "@/components/WorkShowcase";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import FaqSection from "@/components/FaqSection";
import { projects } from "@/data/projects";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";

export const revalidate = 3600;

const PAGE_TITLE = "Web Design & Development Portfolio";
const PAGE_DESCRIPTION =
  "Web design and development work from Cincinnati's Black Lab Development: custom WordPress, Next.js and Shopify builds for B2B, healthcare and local brands.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/work" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/work",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

// Every answer is grounded in the portfolio below; keep them in sync when
// projects change.
const faqs = [
  {
    question: "What platforms does Black Lab Development build websites on?",
    answer:
      "Mostly custom WordPress, plus custom Next.js, Laravel, Shopify and Drupal, and SEO overhauls on hosted platforms like Squarespace. WordPress builds use custom block themes and native Gutenberg blocks, like the Global Environmental Products catalog and the National Management Association platform. Next.js builds are often paired with Sanity CMS, like Rev & Rinse and Zoo Printables AI. Laravel powers custom applications like the Whole30 SMS platform, which connects Shopify orders to SlickText. Shopify work uses custom Liquid themes, like The Shortening Shuttle storefront.",
  },
  {
    question: "Do you use page builders like Elementor or Divi?",
    answer:
      "No. Themes are built with native Gutenberg blocks designed for each site: 15 custom blocks for Global Environmental Products, 21 for Globe Iron Roofing and 46 for the National Management Association. That keeps markup clean and pages fast, and lets editors update content without a page builder's overhead.",
  },
  {
    question: "Can you redesign my website without losing search rankings?",
    answer:
      "Yes. Every URL on the old site is mapped to its new home and 301-redirected before launch. When Global Environmental Products replaced its 2011-era site, 57 legacy URLs were redirected so existing rankings and inbound links carried over.",
  },
  {
    question: "What industries have you built websites for?",
    answer:
      "Manufacturing and industrial supply, healthcare and medical aesthetics, restaurants and hospitality, professional associations, financial services, construction and roofing, education, health and wellness, marketing agencies, publishing, cybersecurity and ecommerce. Each project above is tagged by platform, and each detail page covers the industry-specific work involved.",
  },
  {
    question: "Are your websites built for AI search and answer engines?",
    answer:
      "Yes. Sites ship with structured data matched to the business, such as LocalBusiness, RoofingContractor, BarOrPub, Product and FAQPage schema. They also get clean semantic markup and, where it fits, a generated llms.txt that indexes pages for AI answer engines like ChatGPT, Claude and Perplexity.",
  },
  {
    question: "Will I be able to update my website myself?",
    answer:
      "Yes. WordPress sites use editor-friendly blocks and a single settings screen for business details like hours, address and phone. Next.js sites include an embedded Sanity Studio. Routine updates don't need a developer.",
  },
  {
    question: "Do you offer ongoing website support?",
    answer:
      "Yes. Several engagements above are ongoing, including Mona Dermatology, Zero Gravity of Northern Kentucky and Frisch's Big Boy, covering performance, security, updates and new features after launch.",
  },
  {
    question: "Do you work with agencies as a white-label development partner?",
    answer:
      "Yes. Black Lab Development builds and maintains sites for agencies under their brand. See the white-label web development page for how partnerships work.",
  },
];

const industryLinks = [
  { href: "/industries/manufacturing", label: "Manufacturing" },
  { href: "/industries/healthcare", label: "Healthcare" },
  { href: "/industries/professional-services", label: "Professional Services" },
  { href: "/industries/education", label: "Education" },
  { href: "/industries/ecommerce", label: "Ecommerce" },
  { href: "/industries/technology", label: "Technology" },
];

const platformCounts = projects.reduce<Record<string, number>>((acc, p) => {
  acc[p.platform] = (acc[p.platform] ?? 0) + 1;
  return acc;
}, {});
const platformSummary = Object.entries(platformCounts)
  .sort((a, b) => b[1] - a[1])
  .map(([name, count]) => `${count} ${name}`)
  .join(", ");

export default function CaseStudiesPage() {
  // CollectionPage + ItemList exposes the case-study set as a structured,
  // ordered list for rich results and AI answer engines.
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://blacklabdev.com/work",
    isPartOf: { "@type": "WebSite", "@id": "https://blacklabdev.com/#website", name: "Black Lab Development", url: "https://blacklabdev.com" },
    publisher: { "@type": "Organization", "@id": "https://blacklabdev.com/#business" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.filter((p) => p.slug).map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://blacklabdev.com/work/${p.slug}`,
        name: p.name,
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
      { "@type": "ListItem", position: 2, name: "Work", item: "https://blacklabdev.com/work" },
    ],
  };

  return (
    <main className="w-full bg-surface text-white">
      <JsonLd data={[collectionSchema, breadcrumbSchema, faqSchema]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-neutral-800">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/case-studies-hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-surface/95 via-surface/88 to-surface/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative z-10 mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 py-20 md:py-28">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-300 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
            My Work
          </span>

          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.1] mb-8">
            <span className="block text-white">Web Design Portfolio.</span>
            <span className="block text-neutral-400">Real Work. Real Outcomes.</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mb-8">
            If a website doesn&apos;t generate leads, bookings, or pipeline — it&apos;s not doing its job. Here&apos;s what building it right actually produces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white text-black px-8 py-3.5 text-sm font-semibold hover:bg-neutral-200 transition-colors duration-200 shadow-lg"
            >
              Schedule a Call
            </Link>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-md border border-neutral-700 px-8 py-3.5 text-sm font-semibold text-neutral-300 hover:border-neutral-500 hover:text-white transition-all duration-200"
            >
              Browse the Work
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </section>

      <QuickAnswerBlock
        question="What kind of websites does Black Lab Development build?"
        answer={`Custom websites built from scratch, with no page builders and no stock themes. The ${projects.length} projects below span ${platformSummary}, for manufacturers, healthcare practices, restaurants, associations, contractors, schools and agencies. Each one links to a detail page covering what was built, the platform and the results.`}
      />

      {/* ── Work Accomplished ── */}
      <section id="portfolio" className="bg-charcoal py-20 md:py-24 relative overflow-hidden border-b border-neutral-800">

        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 relative">
          <div className="mb-12 md:mb-16 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-300 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
              Work Accomplished
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5">
              {projects.length}+ Projects,{" "}
              <span className="text-neutral-500">Shipped and Supported</span>
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed">
              15+ years building and maintaining production websites for manufacturers, healthcare providers, restaurants, and B2B platforms — on WordPress, Shopify, and custom Next.js builds.
            </p>
            <nav aria-label="Work by industry" className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="text-neutral-400">By industry:</span>
              {industryLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-neutral-300 underline decoration-neutral-700 underline-offset-4 hover:text-neutral-300 hover:decoration-white/60 transition-colors duration-200">
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 h-px w-64 bg-linear-to-r from-white/10 via-white/10 to-transparent" />
          </div>

          <WorkShowcase projects={projects} />
        </div>
      </section>

      {/* ── Featured work intro ── */}
      <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 pt-20 md:pt-24 pb-4">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-300 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
          Featured Work
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
          A Closer Look, <span className="text-neutral-500">With the Numbers</span>
        </h2>
        <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
          A handful of engagements broken down in detail — what was built, what changed, and what it produced.
        </p>
      </div>

      {/* ── Whole30 Featured Project ── */}
      <section className="relative py-20 overflow-hidden border-b border-neutral-800 bg-surface-raised">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">

          {/* Featured card */}
          <div className="relative rounded-2xl border border-neutral-800 overflow-hidden bg-neutral-950/80">
            <div className="absolute -inset-px rounded-2xl blur-lg bg-linear-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            <div className="h-0.5 bg-linear-to-r from-white/10 via-white/10 to-white/10" />

            {/* Hero metric row */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-neutral-800/80 bg-linear-to-br from-white/10 via-white/10 to-neutral-950 border-b border-neutral-800/80">
              <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                <div className="absolute right-0 top-0 bottom-0 w-96 bg-linear-to-l from-white/10 to-transparent" />
              </div>
              {[
                { value: "6,000+", label: "Daily Users", note: "Platform scale" },
                { value: "60%→97%", label: "SEO Health", note: "+37 points" },
                { value: "−25%", label: "Cost Reduction", note: "Infrastructure" },
                { value: "+50%", label: "Integrations", note: "API-driven" },
              ].map((m) => (
                <div key={m.label} className="relative px-4 sm:px-6 py-5 sm:py-7 text-center group hover:bg-white/5 transition-colors duration-300">
                  <div className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-1.5 transition-all duration-300 tabular-nums">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-white tracking-wide">{m.label}</div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">{m.note}</div>
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] divide-y lg:divide-y-0 lg:divide-x divide-neutral-800/80">

              {/* Left — title + description + bullets */}
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                    Featured Project
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-800 bg-white/[0.04] text-white text-xs font-semibold tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse" />
                    Ongoing Engagement
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-white mb-4">
                  Whole30 —{" "}
                  <span className="text-neutral-500">High-Traffic Platform</span>{" "}
                  &amp; React Engineering
                </h2>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
                  Whole30 is a high-traffic health and wellness platform serving thousands of daily users across recipe discovery, program guidance, and a curated partner marketplace — built on a performant WordPress foundation with key features delivered as embedded React components for speed and SEO control.
                </p>

                <h3 className="text-xs uppercase tracking-[0.25em] text-white font-semibold mb-4">What Was Built</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {[
                    "WordPress platform scaling to 6,000+ daily users",
                    "React components — Recipes, Articles, Testimonials, Approved Partners",
                    "Custom plugins, themes, and Gutenberg blocks",
                    "Shopify, CRM, SMS, and marketing automation via REST API",
                    "CI/CD, Cloudflare CDN, and WAF security hardening",
                    "Technical SEO rebuilt — 60% → 97% site health",
                    "Infrastructure costs reduced by 25%",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-300 text-sm leading-snug">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — stack + CTA */}
              <div className="p-8 md:p-10 flex flex-col gap-6 bg-neutral-950/40">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.25em] text-white font-semibold mb-3">Stack</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {["WordPress", "PHP", "React", "Gutenberg", "REST API", "Shopify", "Cloudflare", "GitHub Actions", "ActiveCampaign"].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded border border-neutral-700 bg-neutral-900 text-xs text-neutral-400 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-neutral-800/80">
                  <p className="text-[11px] text-neutral-500 leading-relaxed mb-6">Health &amp; Wellness · eCommerce · High-Traffic Content</p>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-md bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-neutral-200 transition-colors duration-200 shadow-lg hover:shadow-black/40"
                  >
                    Discuss Your Project
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} headingId="case-studies-faq" />

      <PageClose
        title="Ready to Be My Next Project?"
        body="Start with an audit of your current site and a clear plan to fix it."
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />
    </main>
  );
}
