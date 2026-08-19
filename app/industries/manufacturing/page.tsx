import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import FounderByline from "@/components/FounderByline";

export const metadata: Metadata = {
  title: "Manufacturing Web Design & Development",
  description:
    "Websites for manufacturers and industrial firms — RFQ generation, product catalogs, and distributor portals built to win engineers and procurement teams.",
  alternates: { canonical: "/industries/manufacturing" },
  openGraph: {
    title: "Manufacturing Web Design & Development",
    description:
      "Websites for manufacturers and industrial firms — RFQ generation, product catalogs, and distributor portals built to win engineers and procurement teams.",
    url: "/industries/manufacturing",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Manufacturing Web Design & Development",
    description:
      "Websites for manufacturers and industrial firms — RFQ generation, product catalogs, and distributor portals built to win engineers and procurement teams.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://blacklabdev.com/industries" },
    { "@type": "ListItem", position: 3, name: "Manufacturing", item: "https://blacklabdev.com/industries/manufacturing" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Manufacturing Web Design & Development",
  serviceType: "Web Design and Development",
  description:
    "Websites for manufacturers and industrial firms — RFQ generation, product catalogs, and distributor portals built to win engineers and procurement teams.",
  areaServed: ["Cincinnati, OH", "United States"],
  provider: {
    "@type": "Organization",
    "@id": "https://blacklabdev.com/#business",
    name: "Black Lab Development",
    url: "https://blacklabdev.com",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Manufacturing companies, industrial firms, distributors",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a manufacturing web developer do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A manufacturing web developer builds websites designed for industrial buyers — engineers, procurement managers, and distributors. That means RFQ forms that actually convert, searchable product catalogs, spec sheet downloads, and technical SEO that gets your site in front of buyers actively searching for your capabilities.",
      },
    },
    {
      "@type": "Question",
      name: "How should a manufacturing company website generate leads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manufacturing websites generate leads through RFQ forms placed close to product or capability pages, clear contact pathways for engineering inquiries, and technical SEO targeting the specific materials, processes, or certifications buyers search for. Generic 'contact us' forms buried in footers don't work for technical buyers.",
      },
    },
    {
      "@type": "Question",
      name: "Do manufacturing websites need to be ITAR or compliance-aware?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depends on your product categories. Defense and aerospace work often requires careful handling of technical specifications. At minimum, manufacturing websites should avoid publishing ITAR-controlled data in public catalogs. I scope compliance requirements during discovery so nothing ships that creates liability.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a manufacturing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most manufacturing website builds take 6–10 weeks from kickoff to launch. Larger engagements involving product catalog migrations, ERP integrations, or distributor portals run longer. I scope timelines honestly before anything starts.",
      },
    },
    {
      "@type": "Question",
      name: "What platforms work best for manufacturing websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next.js with a headless CMS (Sanity) is the best choice for most manufacturers — it gives you fast load times, a maintainable content structure, and the flexibility to add RFQ workflows or product configurators. WordPress with a custom theme works well for smaller operations that need their team to manage content independently.",
      },
    },
  ],
};

const faqs = faqSchema.mainEntity.map((f) => ({
  question: f.name,
  answer: f.acceptedAnswer.text,
}));

const deliverables = [
  {
    title: "RFQ & Lead Generation",
    description: "Forms engineered for technical buyers — not generic contact forms. Placed where engineers are making purchasing decisions.",
  },
  {
    title: "Product Catalog Architecture",
    description: "Structured catalogs with spec sheets, filterable attributes, and downloadable documentation that procurement teams actually need.",
  },
  {
    title: "Distributor & Partner Portals",
    description: "Protected portals for distributor pricing, deal registration, and partner resources — built to reduce sales team overhead.",
  },
  {
    title: "Technical SEO",
    description: "Targeting the specific materials, certifications, and capabilities your buyers search for — not generic industry terms.",
  },
  {
    title: "Core Web Vitals",
    description: "Fast load times and clean code that ensures your site performs under real conditions, not just in a staging environment.",
  },
  {
    title: "CMS for Non-Technical Teams",
    description: "A content system your operations or marketing team can maintain without a developer for routine updates.",
  },
];

const clients = [
  { name: "Haag-Streit USA", detail: "WordPress platform for a medical device manufacturer in regulated environments." },
  { name: "FAZTEK", detail: "Engineering support for an industrial automation platform requiring reliability and systems integration." },
  { name: "Plastech Molding", detail: "Custom WordPress theme for a precision plastics manufacturer — responsive, SEO-optimized, lead-generating." },
  { name: "Melink Solar", detail: "Custom plugin and API integration work for a solar energy platform focused on technical precision." },
];

export default function ManufacturingIndustryPage() {
  return (
    <main className="w-full bg-[#0b0b0c] text-white">
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />

      <PageHero
        label="Manufacturing & Industrial"
        title="Websites That Win Engineers and Procurement Teams"
        titleHighlight="Win Engineers and Procurement Teams"
        description="Manufacturing buyers don't fill out generic contact forms. They evaluate specs, compare capabilities, and submit RFQs. Your website needs to support that process — or they'll find a competitor's that does."
        backgroundImage="/images/background-bld.png"
        badges={["RFQ generation", "Product catalog architecture", "Technical SEO"]}
      />

      <QuickAnswerBlock
        question="What does a manufacturing web developer do?"
        answer="Black Lab Development builds manufacturing websites designed for industrial buyers — engineers, procurement managers, and distributors. That means RFQ forms that convert, searchable product catalogs with spec sheets, and technical SEO targeting the specific materials, certifications, and capabilities buyers search for. Based in Cincinnati and working with manufacturers across the U.S."
      />

      {/* What We Deliver */}
      <section className="py-20 border-b border-slate-800/50">
        <div className="mx-auto max-w-375 px-6">
          <div className="mb-12">
            <span className="inline-block mb-3 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">What I Build</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Built for Technical Buyers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/40 hover:border-volt-500/30 hover:bg-volt-500/5 transition-all duration-300">
                <div className="w-6 h-px bg-volt-500 mb-4" />
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Proof */}
      <section className="py-20 border-b border-slate-800/50 bg-slate-950/50">
        <div className="mx-auto max-w-375 px-6">
          <div className="mb-12">
            <span className="inline-block mb-3 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">Client Proof</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Manufacturing Companies Worked With</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {clients.map((c) => (
              <div key={c.name} className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/30">
                <p className="text-sm font-semibold text-volt-500 mb-2">{c.name}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link to service page */}
      <section className="py-16 border-b border-slate-800/50">
        <div className="mx-auto max-w-375 px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-xl border border-volt-500/20 bg-volt-500/5">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold mb-1">Related Service</p>
              <h3 className="text-lg font-bold text-white">Manufacturing Website Design</h3>
              <p className="text-sm text-slate-400 mt-1">Full breakdown of the service, process, and what to expect.</p>
            </div>
            <Link
              href="/services/manufacturing-website-design"
              className="shrink-0 inline-flex items-center gap-2 rounded-md bg-volt text-black px-6 py-3 text-sm font-bold hover:brightness-110 transition-all duration-200"
            >
              View Service Page
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} headingId="manufacturing-faq" />

      <FounderByline />

      <PageClose
        title="Ready to Build a Website That Generates RFQs?"
        bodyPrimary="Most manufacturing websites are digital brochures — they exist, but they don't generate qualified pipeline. That gap is fixable."
        bodySecondary="Schedule a discovery call. I'll talk through exactly what's costing you leads and what it would take to fix it."
        secondaryHref="/services/manufacturing-website-design"
        secondaryLabel="View Manufacturing Service"
      />
    </main>
  );
}
