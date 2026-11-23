import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import FounderByline from "@/components/FounderByline";
import SelectedWork from "@/components/SelectedWork";

export const metadata: Metadata = {
  title: "Healthcare & Medical Website Design",
  description:
    "Healthcare website design for clinics and medical practices: accessible, fast sites built for online booking, patient acquisition and local SEO.",
  alternates: { canonical: "/industries/healthcare" },
  openGraph: {
    title: "Healthcare & Medical Website Design | Black Lab Dev",
    description:
      "Healthcare website design for clinics and medical practices: accessible, fast sites built for online booking, patient acquisition and local SEO.",
    url: "/industries/healthcare",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Healthcare & Medical Website Design | Black Lab Dev",
    description:
      "Healthcare website design for clinics and medical practices: accessible, fast sites built for online booking, patient acquisition and local SEO.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://blacklabdev.com/industries" },
    { "@type": "ListItem", position: 3, name: "Healthcare", item: "https://blacklabdev.com/industries/healthcare" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Healthcare Web Design & Development",
  serviceType: "Web Design and Development",
  description:
    "Accessible, compliant websites for clinics, medical practices, and health device companies — built for patient acquisition, online bookings, and local visibility.",
  areaServed: ["Cincinnati, OH", "United States"],
  provider: {
    "@type": "Organization",
    "@id": "https://blacklabdev.com/#business",
    name: "Black Lab Development",
    url: "https://blacklabdev.com",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Healthcare providers, medical practices, health device companies",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should a healthcare website include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A healthcare website needs fast page load times, clear contact and appointment booking pathways, mobile-first design (most patients search on phone), accessible markup (WCAG 2.1 AA), local SEO signals for clinic location pages, and trust indicators like provider credentials and patient reviews. Booking integrations with EHR systems vary by practice — I scope those requirements during discovery.",
      },
    },
    {
      "@type": "Question",
      name: "Do healthcare websites need to be HIPAA compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HIPAA compliance applies to systems that store or transmit protected health information (PHI). A marketing website with a basic contact form generally falls outside HIPAA scope. Patient portals, appointment scheduling systems that collect health data, and form submissions stored server-side may require compliance considerations. I identify the scope during discovery and recommend appropriately without creating unnecessary overhead.",
      },
    },
    {
      "@type": "Question",
      name: "How do you increase patient appointment bookings through a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The highest-impact levers are: (1) reducing friction in the booking flow — one click from homepage to booking, (2) mobile optimization since most patients search on phone, (3) local SEO for the specific services and location patients search for, and (4) social proof placement near booking CTAs. For DexaFit Cincinnati, an SEO overhaul moved the average Google position for “DEXA scan near me” from #14.5 to #3.7 in the first six weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What platforms work best for healthcare websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WordPress with a custom theme works well for most medical practices — it's maintainable by office staff, familiar to marketing agencies, and has a strong plugin ecosystem for booking integrations. Larger health systems or device manufacturers often benefit from headless architectures with Next.js for performance and editorial flexibility. The right choice depends on your team's needs and content volume.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate appointment booking with our existing EHR or practice management system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depends on the system. Most modern EHRs and practice management platforms (Athena, Kareo, SimplePractice, etc.) offer booking widgets or API access that can be integrated into a website. Others require embedded iframes or direct patient portal redirects. I evaluate the integration options during discovery and build whatever produces the least friction for patients.",
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
    title: "Patient Acquisition Design",
    description: "Conversion-focused layouts that move patients from search to booked appointment — not just informational pages that look professional.",
  },
  {
    title: "Appointment Booking Integration",
    description: "Booking flows connected to your EHR or practice management system. Evaluated per platform and built to minimize friction.",
  },
  {
    title: "Accessibility (WCAG 2.1 AA)",
    description: "Accessible markup, keyboard navigation, and contrast ratios that serve all patients and satisfy legal requirements.",
  },
  {
    title: "Local SEO for Medical Practices",
    description: "Location pages, Google Business Profile optimization, and schema markup for medical practices serving specific geographic areas.",
  },
  {
    title: "Provider & Credential Pages",
    description: "Trust-building provider profiles with credentials, specializations, and patient-facing copy that converts visitors into appointments.",
  },
  {
    title: "Mobile-First Build",
    description: "Most healthcare searches happen on mobile. Sites are built mobile-first — not desktop-first with a mobile afterthought.",
  },
];

const clients = [
  {
    name: "DexaFit Cincinnati",
    detail: "Average Google position for “DEXA scan near me” rose from #14.5 to #3.7 in the six weeks after an SEO overhaul with per-page structured data and clearer booking CTAs.",
  },
  {
    name: "Zero Gravity Aesthetics",
    detail: "Ongoing WordPress engineering for a Northern Kentucky medical spa — WooCommerce replaced with a dedicated booking platform and page speed rebuilt from the ground up.",
  },
];

export default function HealthcareIndustryPage() {
  return (
    <main className="w-full bg-surface text-white">
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />

      <PageHero
        label="Healthcare & Life Sciences"
        title="Healthcare Website Design That Turns Searches Into Appointments"
        titleHighlight="That Turns Searches Into Appointments"
        description="Healthcare searches happen on phones, in moments of need. Your website needs to be fast, accessible, and remove every obstacle between a patient finding you and scheduling a visit."
        backgroundImage="/images/industries-healthcare-hero-bg.jpg"
        imagePosition="72% 50%"
        badges={["Patient acquisition", "WCAG 2.1 AA accessibility", "Local SEO"]}
      />

      <QuickAnswerBlock
        question="What should a healthcare website include?"
        answer="A healthcare website needs fast load times, frictionless appointment booking, mobile-first design, WCAG 2.1 AA accessibility, and local SEO signals for each clinic location. For DexaFit Cincinnati, an SEO overhaul moved the average Google position for “DEXA scan near me” from #14.5 to #3.7 in the first six weeks. Black Lab Development builds healthcare sites in Cincinnati and for practices across the U.S."
      />

      {/* What We Deliver */}
      <section className="py-20 border-b border-neutral-800/50">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="mb-12">
            <span className="eyebrow inline-block mb-3 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">What I Build</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Built for Patient Acquisition</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/40 hover:border-neutral-500 hover:bg-white/5 transition-all duration-300">
                <div className="w-6 h-px bg-neutral-600 mb-4" />
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Proof */}
      <section className="bg-charcoal py-20 border-b border-neutral-800/50">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="mb-12">
            <span className="eyebrow inline-block mb-3 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">Client Proof</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Healthcare Organizations Worked With</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {clients.map((c) => (
              <div key={c.name} className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/30">
                <p className="text-sm font-semibold text-white mb-2">{c.name}</p>
                <p className="text-sm text-neutral-400 leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link */}
      <section className="band-navy py-16">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-xl border border-neutral-800 bg-white/[0.04]">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold mb-1">Related Service</p>
              <h3 className="text-lg font-bold text-white">Conversion Rate Optimization</h3>
              <p className="text-sm text-neutral-400 mt-1">How I increase bookings, form fills, and patient actions on your existing site.</p>
            </div>
            <Link
              href="/services/conversion-optimization"
              className="shrink-0 inline-flex items-center gap-2 rounded-md bg-volt-500 text-neutral-100 px-6 py-3 text-sm font-bold hover:brightness-110 transition-all duration-200"
            >
              View Service Page
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <SelectedWork slugs={["dexafit-cincinnati-squarespace-seo", "zero-gravity-performance-rebuild", "mona-dermatology-wordpress-woocommerce"]} />

      <FaqSection faqs={faqs} headingId="healthcare-faq" />

      <FounderByline />

      <PageClose
        title="Get More Patient Bookings Online"
        body="I'll show you what's blocking bookings on your site and how to fix it."
        secondaryHref="/work"
        secondaryLabel="View My Work"
      />
    </main>
  );
}
