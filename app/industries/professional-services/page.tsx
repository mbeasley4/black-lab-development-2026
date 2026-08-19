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
  title: "B2B & Professional Services Web Design",
  description:
    "Web development for consultancies, financial firms, and service businesses — high-trust sites built for complex sales cycles and pipeline-driven growth.",
  alternates: { canonical: "/industries/professional-services" },
  openGraph: {
    title: "B2B & Professional Services Web Design",
    description:
      "Web development for consultancies, financial firms, and service businesses — high-trust sites built for complex sales cycles and pipeline-driven growth.",
    url: "/industries/professional-services",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "B2B & Professional Services Web Design",
    description:
      "Web development for consultancies, financial firms, and service businesses — high-trust sites built for complex sales cycles and pipeline-driven growth.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://blacklabdev.com/industries" },
    { "@type": "ListItem", position: 3, name: "Professional Services", item: "https://blacklabdev.com/industries/professional-services" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "B2B & Professional Services Web Design",
  serviceType: "Web Design and Development",
  description:
    "Web development for consultancies, financial firms, and service businesses — high-trust sites built for complex sales cycles and pipeline-driven growth.",
  areaServed: ["Cincinnati, OH", "United States"],
  provider: {
    "@type": "Organization",
    "@id": "https://blacklabdev.com/#business",
    name: "Black Lab Development",
    url: "https://blacklabdev.com",
  },
  audience: {
    "@type": "Audience",
    audienceType: "B2B companies, consultancies, financial firms, law firms, professional services firms",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes a good B2B website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good B2B website builds trust with multiple stakeholders quickly, supports complex sales cycles with relevant content at each stage, and converts qualified traffic into pipeline — not just visitors. That means clear positioning, proof (case studies, credentials, client logos), a frictionless path to contact, and performance that doesn't punish mobile decision-makers researching vendors.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a B2B website build take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most B2B professional services website builds take 6–10 weeks. Engagements involving CRM integrations, gated content portals, or large content migrations run longer. I scope timelines before anything starts and don't adjust them to win the project.",
      },
    },
    {
      "@type": "Question",
      name: "How should a B2B website handle multiple decision-makers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B2B purchases typically involve 3-7 stakeholders. An effective site has content layers — executive-level positioning for leadership, technical detail for evaluators, and ROI framing for finance. Navigation and content architecture should be organized around buyer role or pain point, not internal service taxonomy. Clear case studies that speak to specific outcomes close more deals than capability lists.",
      },
    },
    {
      "@type": "Question",
      name: "Do professional services firms need case studies on their website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — case studies are the highest-converting content for professional services firms. They demonstrate results (not just capabilities), reduce perceived risk, and give sales teams shareable material. The format matters: problem → approach → measurable outcome, with specifics. Vague case studies create no trust. Specific ones close deals.",
      },
    },
    {
      "@type": "Question",
      name: "What's the ROI of a new professional services website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For professional services firms, even a single additional qualified engagement per quarter typically pays for a website build several times over. ROI calculation depends on deal size and close rates, but the compounding effect of improved positioning, SEO, and conversion architecture is measurable. I track baseline metrics before launch and compare against post-launch pipeline.",
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
    title: "Trust Architecture",
    description: "Positioning, social proof, and content hierarchy that builds credibility with technical evaluators, executive stakeholders, and procurement — simultaneously.",
  },
  {
    title: "Lead Generation & Pipeline CTAs",
    description: "Contact flows, audit offers, and consultation booking designed around your sales cycle — not generic lead forms.",
  },
  {
    title: "Case Study Pages",
    description: "High-converting case study templates with problem/approach/outcome structure and measurable results that close deals.",
  },
  {
    title: "CRM Integration",
    description: "Form-to-CRM connections with HubSpot, Salesforce, or Pipedrive — so leads land in your pipeline, not a spreadsheet.",
  },
  {
    title: "B2B SEO",
    description: "Targeting the service and solution terms your buyers use when evaluating vendors — not generic industry keywords that don't convert.",
  },
  {
    title: "Thought Leadership Infrastructure",
    description: "Content systems (articles, resources, downloads) that support long-cycle sales and keep prospects engaged between touchpoints.",
  },
];

const clients = [
  {
    name: "Luma Financial Technologies",
    detail: "Complex B2B platform web presence for a financial technology company serving institutional clients with long sales cycles.",
  },
  {
    name: "Enduir Cybersecurity",
    detail: "High-trust website and positioning for a cybersecurity firm where buyer confidence and technical credibility are table stakes.",
  },
];

export default function ProfessionalServicesIndustryPage() {
  return (
    <main className="w-full bg-[#0b0b0c] text-white">
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />

      <PageHero
        label="B2B & Professional Services"
        title="Websites That Support Complex Sales Cycles"
        titleHighlight="Complex Sales Cycles"
        description="B2B buyers don't convert on first visit. They evaluate, compare, and bring in stakeholders before a decision is made. Your website needs to build trust at each stage — not just look professional."
        backgroundImage="/images/background-bld.png"
        badges={["Multi-stakeholder trust", "Pipeline generation", "CRM integration"]}
      />

      <QuickAnswerBlock
        question="What makes a good B2B website?"
        answer="A good B2B website builds trust fast, supports complex sales cycles with relevant content for each stakeholder, and converts qualified traffic into pipeline — not just visitors. That means clear positioning, case studies with real results, a frictionless path to contact, and performance that doesn't punish mobile decision-makers. Black Lab Development builds B2B websites for consultancies and professional services firms in Cincinnati and across the U.S."
      />

      {/* What We Deliver */}
      <section className="py-20 border-b border-slate-800/50">
        <div className="mx-auto max-w-375 px-6">
          <div className="mb-12">
            <span className="inline-block mb-3 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">What I Build</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Built for Long-Cycle B2B Sales</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white">B2B & Professional Services Clients</h2>
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

      {/* Cross-link */}
      <section className="py-16 border-b border-slate-800/50">
        <div className="mx-auto max-w-375 px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-xl border border-volt-500/20 bg-volt-500/5">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold mb-1">Related Service</p>
              <h3 className="text-lg font-bold text-white">B2B Website Design</h3>
              <p className="text-sm text-slate-400 mt-1">Full breakdown of the service, process, and what to expect on a B2B engagement.</p>
            </div>
            <Link
              href="/services/b2b-website-design"
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

      <FaqSection faqs={faqs} headingId="professional-services-faq" />

      <FounderByline />

      <PageClose
        title="Ready to Turn Your Website Into a Sales Asset?"
        bodyPrimary="Most B2B websites describe what the firm does — they don't help prospects understand why it matters or make it easy to take the next step."
        bodySecondary="I fix positioning, trust signals, and conversion architecture so your site actually generates pipeline."
        secondaryHref="/services/b2b-website-design"
        secondaryLabel="View B2B Service"
      />
    </main>
  );
}
