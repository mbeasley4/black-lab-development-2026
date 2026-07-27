import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";

export const metadata: Metadata = {
  title: "Education & EdTech Web Development",
  description:
    "Web development for schools, training platforms, and EdTech companies — enrollment-driven design, LMS integrations, and content-rich platforms built for learning at scale.",
  alternates: { canonical: "/industries/education" },
  openGraph: {
    title: "Education & EdTech Web Development",
    description:
      "Web development for schools, training platforms, and EdTech companies — enrollment-driven design, LMS integrations, and content-rich platforms built for learning at scale.",
    url: "/industries/education",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Education & EdTech Web Development",
    description:
      "Web development for schools, training platforms, and EdTech companies — enrollment-driven design, LMS integrations, and content-rich platforms built for learning at scale.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://blacklabdev.com/industries" },
    { "@type": "ListItem", position: 3, name: "Education & Training", item: "https://blacklabdev.com/industries/education" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Education & EdTech Web Development",
  serviceType: "Web Development",
  description:
    "Web development for schools, training platforms, and EdTech companies — enrollment-driven design, LMS integrations, and content-rich platforms built for learning at scale.",
  areaServed: ["Cincinnati, OH", "United States"],
  provider: {
    "@type": "Organization",
    "@id": "https://blacklabdev.com/#business",
    name: "Black Lab Development",
    url: "https://blacklabdev.com",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Schools, universities, EdTech companies, training organizations, corporate learning teams",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a good education or training website need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Education websites need to serve two goals simultaneously: inform and convert. For enrollment-driven organizations, that means clear program pages with outcomes-first copy, frictionless enrollment or inquiry flows, and social proof from outcomes (job placement rates, certifications earned). For content platforms, it means fast load times, accessible markup, and a content architecture that supports learning journeys — not just marketing pages.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate a website with our LMS (Learning Management System)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Common LMS integrations include Moodle, Canvas, Teachable, Thinkific, LearnDash, and Kajabi. Integration scope varies — some require single sign-on (SSO), others just need embedded enrollment flows or course preview widgets. We evaluate your specific LMS and build the integration that creates the least friction for learners, not the simplest implementation.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between an EdTech marketing site and a learning platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A marketing site converts visitors into enrolled students or paying subscribers. A learning platform delivers the actual content and tracks progress. Most EdTech companies need both — a marketing site that converts and a platform that retains. They have different success metrics: marketing sites are measured by enrollment conversion rate, platforms by completion rate and retention.",
      },
    },
    {
      "@type": "Question",
      name: "Do education websites need to meet accessibility standards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and often legally so. Public universities and schools receiving federal funding are required to meet WCAG 2.1 AA under Section 508 and the ADA. Private EdTech companies have increasing compliance exposure as accessibility litigation has grown. Beyond legal requirements, accessible design simply works better for learners with disabilities, which overlaps significantly with the adult learning audience.",
      },
    },
    {
      "@type": "Question",
      name: "What platforms work best for education and training websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WordPress with LearnDash works well for training organizations that need a CMS-driven marketing site plus course delivery in one platform. Next.js with a headless CMS is better for EdTech companies that need performance and design flexibility for their marketing site, with the LMS handled separately. Standalone LMS platforms (Teachable, Thinkific) are best for creators or small training businesses that don't need custom development.",
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
    title: "Enrollment & Lead Generation",
    description: "Program pages and enrollment flows optimized for the specific conversion goal — inquiry form, application, or direct enrollment.",
  },
  {
    title: "LMS Integration",
    description: "Connections to Moodle, Canvas, LearnDash, Teachable, Thinkific, and others — evaluated per platform, built for learner experience.",
  },
  {
    title: "Accessibility (WCAG 2.1 AA)",
    description: "Accessible markup, keyboard navigation, and screen reader support that meets Section 508 and ADA requirements for educational content.",
  },
  {
    title: "Content Architecture",
    description: "Program and course page structures designed to support learning journeys — not just list courses as if they were products.",
  },
  {
    title: "Performance at Scale",
    description: "Sites built to handle traffic spikes at enrollment periods without the load time degradation that costs you applications.",
  },
  {
    title: "SEO for Program Discovery",
    description: "Technical SEO and content architecture that gets your programs found by prospective students searching for specific credentials or topics.",
  },
];

export default function EducationIndustryPage() {
  return (
    <main className="w-full bg-[#0b0b0c] text-white">
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />

      <PageHero
        label="Education & Training"
        title="Platforms Built for Learning at Scale"
        titleHighlight="Learning at Scale"
        description="Education websites serve two masters: the marketing goal of enrollment conversion and the product goal of learning outcomes. Getting both right requires different thinking than a standard web project."
        backgroundImage="/images/background-bld.png"
        badges={["Enrollment optimization", "LMS integration", "WCAG 2.1 AA"]}
      />

      <QuickAnswerBlock
        question="What does a good education or training website need?"
        answer="Education websites need to serve two goals: convert visitors into enrolled students and support the learning experience. That means outcomes-first program pages, frictionless enrollment flows, accessible markup (WCAG 2.1 AA), LMS integration, and content architecture that supports learning journeys. Black Lab Development builds education and EdTech websites for training organizations and platforms across the U.S."
      />

      {/* What We Deliver */}
      <section className="py-20 border-b border-slate-800/50">
        <div className="mx-auto max-w-375 px-6">
          <div className="mb-12">
            <span className="inline-block mb-3 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">What We Build</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Built for Enrollment and Learning</h2>
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

      {/* Cross-links */}
      <section className="py-16 border-b border-slate-800/50">
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col justify-between gap-4 p-8 rounded-xl border border-volt-500/20 bg-volt-500/5">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold mb-1">Related Service</p>
                <h3 className="text-base font-bold text-white">Custom Web Development</h3>
                <p className="text-sm text-slate-400 mt-1">Full-stack builds and LMS integrations for education platforms with complex requirements.</p>
              </div>
              <Link
                href="/services/custom-web-development"
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
                <h3 className="text-base font-bold text-white">Conversion Rate Optimization</h3>
                <p className="text-sm text-slate-400 mt-1">Enrollment flow optimization and program page improvements that increase inquiry and application rates.</p>
              </div>
              <Link
                href="/services/conversion-optimization"
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

      <FaqSection faqs={faqs} headingId="education-faq" />

      <PageClose
        title="Building a Learning Platform or Enrollment-Driven Site?"
        bodyPrimary="Education is one of the few industries where both design and technical execution matter equally — a beautiful site that can't handle enrollment traffic, or a fast platform that doesn't convert visitors into students, both fail."
        bodySecondary="Start with a conversation about your specific requirements and enrollment goals."
        secondaryHref="/contact"
        secondaryLabel="Start a Conversation"
      />
    </main>
  );
}
