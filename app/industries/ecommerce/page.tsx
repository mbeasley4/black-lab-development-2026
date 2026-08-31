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
  title: "Ecommerce & DTC Web Development",
  description:
    "Ecommerce and DTC web development — fast storefronts, Shopify and WooCommerce builds, and conversion optimization that closes more sales and increases AOV.",
  alternates: { canonical: "/industries/ecommerce" },
  openGraph: {
    title: "Ecommerce & DTC Web Development",
    description:
      "Ecommerce and DTC web development — fast storefronts, Shopify and WooCommerce builds, and conversion optimization that closes more sales and increases AOV.",
    url: "/industries/ecommerce",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Ecommerce & DTC Web Development",
    description:
      "Ecommerce and DTC web development — fast storefronts, Shopify and WooCommerce builds, and conversion optimization that closes more sales and increases AOV.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://blacklabdev.com/industries" },
    { "@type": "ListItem", position: 3, name: "Ecommerce & DTC", item: "https://blacklabdev.com/industries/ecommerce" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ecommerce & DTC Web Development",
  serviceType: "Web Development",
  description:
    "Ecommerce and DTC web development — fast storefronts, Shopify and WooCommerce builds, and conversion optimization that closes more sales and increases AOV.",
  areaServed: ["Cincinnati, OH", "United States"],
  provider: {
    "@type": "Organization",
    "@id": "https://blacklabdev.com/#business",
    name: "Black Lab Development",
    url: "https://blacklabdev.com",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Ecommerce brands, DTC companies, Shopify merchants, online retailers",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does website performance affect ecommerce sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every additional second of load time reduces ecommerce conversion rates by 7-20% depending on the category. A page that takes 4 seconds to load loses roughly half the visitors a 1-second page would retain. For a store doing $500K/year, a 10% conversion improvement from performance alone is a $50K revenue difference. Page speed is not a technical nice-to-have — it's a direct revenue lever.",
      },
    },
    {
      "@type": "Question",
      name: "Shopify vs. WooCommerce — which is better for ecommerce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopify is better for most DTC brands: faster to launch, lower maintenance overhead, and a strong app ecosystem. WooCommerce is better when you need deep WordPress integration, complex product configurations, or want to avoid Shopify transaction fees on high-volume stores. For headless builds with custom UX requirements, Next.js with Shopify or Medusa is increasingly the right call. The platform choice should follow your product complexity, team, and volume — not trend.",
      },
    },
    {
      "@type": "Question",
      name: "What is average order value (AOV) optimization and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AOV optimization increases the amount customers spend per transaction through product bundling, upsell offers, cross-sells at checkout, and pricing architecture adjustments. For The Shortening Shuttle, a 7-day engagement focused on product page and checkout architecture produced a 164% increase in AOV. The highest-impact changes are usually in the add-to-cart flow and checkout — not homepage redesigns.",
      },
    },
    {
      "@type": "Question",
      name: "What ecommerce integrations do online stores typically need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common ecommerce integrations include: inventory/ERP (NetSuite, Inventory Planner), email marketing (Klaviyo, Mailchimp), loyalty and rewards (LoyaltyLion, Smile.io), reviews (Okendo, Judge.me), subscription management (Recharge), and analytics (GA4, Triple Whale). I scope integrations against your actual stack and only build what creates measurable business value.",
      },
    },
    {
      "@type": "Question",
      name: "How do you improve ecommerce checkout conversion rates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Checkout conversion improves by reducing steps, removing friction, building trust at the payment stage, and offering the right payment options. Specific levers: one-page checkout, guest checkout by default, visible security signals, address autocomplete, buy-now-pay-later options, and cart abandonment recovery. I test these against your current data before making recommendations — not guessing what applies.",
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
    title: "Shopify & WooCommerce Builds",
    description: "Custom themes and storefronts built for performance and conversion — not off-the-shelf templates that look like every other store.",
  },
  {
    title: "AOV & Conversion Optimization",
    description: "Product page, cart, and checkout improvements that increase what customers spend per order — tracked and measured from baseline.",
  },
  {
    title: "Site Speed & Core Web Vitals",
    description: "Performance audits and fixes that recover the sales lost to slow load times and poor mobile experience.",
  },
  {
    title: "Headless Ecommerce",
    description: "Next.js frontends with Shopify or Medusa backends for brands that need custom UX that off-the-shelf platforms can't deliver.",
  },
  {
    title: "Ecommerce Integrations",
    description: "Klaviyo, Recharge, Okendo, LoyaltyLion, and ERP integrations that connect your stack and eliminate manual workflows.",
  },
  {
    title: "Subscription & Recurring Revenue",
    description: "Recharge and subscription architecture for brands building recurring revenue — set up to reduce churn and increase LTV.",
  },
];

const clients = [
  {
    name: "The Shortening Shuttle",
    detail: "164% increase in average order value within 7 days from product page and checkout architecture improvements.",
  },
  {
    name: "Epoxies, Etc.",
    detail: "WooCommerce optimization and performance improvements for an industrial chemical ecommerce platform with complex product catalogs.",
  },
  {
    name: "Zero Gravity Fitness",
    detail: "Custom Shopify build and conversion architecture for a fitness equipment DTC brand scaling from startup to growth stage.",
  },
];

export default function EcommerceIndustryPage() {
  return (
    <main className="w-full bg-[#0b0b0c] text-white">
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />

      <PageHero
        label="Ecommerce & DTC"
        title="A Slow Storefront Costs You Real Revenue"
        titleHighlight="Real Revenue"
        description="A slow ecommerce page doesn't just frustrate visitors — it costs you sales in real time. Performance, conversion architecture, and checkout flow are revenue levers, not technical footnotes."
        backgroundImage="/images/industries-ecommerce-hero-bg.jpg"
        badges={["Shopify & WooCommerce", "AOV optimization", "Core Web Vitals"]}
      />

      <QuickAnswerBlock
        question="How does website performance affect ecommerce sales?"
        answer="Every additional second of load time reduces ecommerce conversion rates by 7-20%. For The Shortening Shuttle, a focused 7-day engagement on product page and checkout architecture produced a 164% increase in average order value. Page speed and conversion optimization are direct revenue levers — not nice-to-haves. Black Lab Development builds and optimizes ecommerce stores for DTC brands across the U.S."
      />

      {/* What We Deliver */}
      <section className="py-20 border-b border-slate-800/50">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="mb-12">
            <span className="inline-block mb-3 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">What I Build</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Built to Convert Traffic Into Revenue</h2>
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
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="mb-12">
            <span className="inline-block mb-3 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">Client Proof</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ecommerce Brands Worked With</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {clients.map((c) => (
              <div key={c.name} className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/30">
                <p className="text-sm font-semibold text-volt-500 mb-2">{c.name}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 border-b border-slate-800/50">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col justify-between gap-4 p-8 rounded-xl border border-volt-500/20 bg-volt-500/5">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold mb-1">Related Service</p>
                <h3 className="text-base font-bold text-white">Conversion Rate Optimization</h3>
                <p className="text-sm text-slate-400 mt-1">Product pages, cart, and checkout improvements that increase revenue without touching ad spend.</p>
              </div>
              <Link
                href="/services/conversion-optimization"
                className="inline-flex items-center gap-2 text-sm font-bold text-volt-500 hover:text-volt-400 transition-colors"
              >
                View Service
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex flex-col justify-between gap-4 p-8 rounded-xl border border-slate-800/60 bg-slate-900/30">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-1">Related Service</p>
                <h3 className="text-base font-bold text-white">Website Performance Optimization</h3>
                <p className="text-sm text-slate-400 mt-1">Speed audits and fixes that recover the sales lost to slow load times on product and checkout pages.</p>
              </div>
              <Link
                href="/services/website-performance-optimization"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
              >
                View Service
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} headingId="ecommerce-faq" />

      <FounderByline />

      <PageClose
        title="Ready to Get More Revenue From Existing Traffic?"
        bodyPrimary="Most ecommerce sites leave revenue on the table through slow pages, friction in checkout, and product pages that don't convert at the rate they should."
        bodySecondary="Schedule a discovery call. I'll talk through exactly what's costing you revenue and what the highest-ROI fix is."
        secondaryHref="/services/conversion-optimization"
        secondaryLabel="View Conversion Optimization"
      />
    </main>
  );
}
