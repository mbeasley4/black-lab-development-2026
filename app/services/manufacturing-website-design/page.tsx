import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import LabFramework from "@/components/LabFramework";
import JsonLd from "@/components/JsonLd";
import FaqSection from "@/components/FaqSection";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";

export const metadata: Metadata = {
  title: "Manufacturing Website Design | Built for Technical Buyers & RFQs",
  description:
    "Websites for manufacturers built for engineers and procurement teams. SEO-ready, fast, and structured to generate qualified leads and RFQ submissions.",
  alternates: { canonical: "/services/manufacturing-website-design" },
  openGraph: {
    title: "Manufacturing Website Design | Built for Technical Buyers & RFQs",
    description:
      "Websites for manufacturers built for engineers and procurement teams. SEO-ready, fast, and structured to generate qualified leads and RFQ submissions.",
    url: "/services/manufacturing-website-design",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Manufacturing Website Design | Built for Technical Buyers & RFQs",
    description:
      "Websites for manufacturers built for engineers and procurement teams — structured to generate RFQ submissions.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://blacklabdev.com/services" },
    { "@type": "ListItem", position: 3, name: "Manufacturing Website Design", item: "https://blacklabdev.com/services/manufacturing-website-design" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Manufacturing Website Design",
  serviceType: "Web Design",
  description:
    "Websites for manufacturers built for engineers and procurement teams. SEO-ready, fast, and structured to generate qualified leads and RFQ submissions.",
  provider: {
    "@type": "Organization",
    name: "Black Lab Development",
    url: "https://blacklabdev.com",
    telephone: "+15135204362",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cincinnati",
      addressRegion: "OH",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Cincinnati" },
    { "@type": "Country", name: "United States" },
  ],
  url: "https://blacklabdev.com/services/manufacturing-website-design",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes a manufacturing website different from other B2B sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manufacturing buyers — engineers, procurement managers, and operations leads — need technical specificity fast. They're evaluating capabilities, tolerances, certifications, and lead times, not brand stories. A manufacturing website must surface specs, process descriptions, and RFQ paths quickly, for buyers who won't wait for a phone call to get basic answers.",
      },
    },
    {
      "@type": "Question",
      name: "Why don't most manufacturing websites generate RFQs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most manufacturing sites are digital catalogs — they list capabilities, post a phone number, and wait. Buyers who can't quickly find the information they need to evaluate a vendor move on. The absence of clear capability pages, technical content, industry-specific SEO, and low-friction RFQ forms is what kills pipeline.",
      },
    },
    {
      "@type": "Question",
      name: "How do you generate more RFQ submissions through a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By building the site around how procurement and engineering teams actually evaluate vendors: buyer persona mapping to define what each role needs, industry SEO targeting buyer-intent searches (specific processes, materials, and geographies), technical content structured for both engineers and procurement, and low-friction RFQ forms that reduce submission barriers without sacrificing lead quality.",
      },
    },
    {
      "@type": "Question",
      name: "Do manufacturers need a custom website or can they use a template?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Templates create generic positioning — and if your site looks like your five nearest competitors, buyers can't differentiate you. Manufacturing websites need capability-specific content architecture, industry SEO, and conversion paths designed for technical buyers. That's hard to achieve with a template built for everyone.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with manufacturers outside of Cincinnati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Black Lab Development is based in Cincinnati, OH, but works with manufacturers and industrial companies nationwide. The engagement is fully remote-friendly — you work directly with the engineer, not a project manager relay.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a manufacturing website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manufacturing website projects at Black Lab Development typically range from $10,000 to $40,000 depending on the number of capability pages, content complexity, RFQ workflow requirements, and integration needs (ERP, distributor portals, CAD file downloads). Engagements start with a discovery call so scope and pricing are grounded in what you actually need, not a templated package.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a manufacturing website take to build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most manufacturing website builds run 8–16 weeks from signed contract to launch. The timeline is driven by the number of capability and industry pages that need technical content written, stakeholder review cycles, and any custom RFQ or integration work. A clear project timeline is scoped before work begins — manufacturing buyers expect partners who deliver on time.",
      },
    },
  ],
};

const painPoints = [
  {
    title: "Your website was built for visibility, not pipeline",
    description:
      "Most manufacturing sites are digital catalogs. They list capabilities, post a phone number, and wait. Buyers who can't quickly find the information they need to evaluate you move on to whoever makes it easiest.",
  },
  {
    title: "Technical buyers need specs — fast",
    description:
      "Engineers evaluating vendors don't read marketing copy. They want certifications, tolerances, materials, lead times, and minimum order quantities. If those aren't findable in 30 seconds, you're out of the running.",
  },
  {
    title: "Procurement wants proof, not promises",
    description:
      "Procurement teams need to justify vendor selection internally. Your site needs case studies, quality documentation, and capacity information — the things that let them build a business case without calling you.",
  },
  {
    title: "SEO built for generic terms, not buyer intent",
    description:
      "Ranking for 'machining services' attracts students writing papers. Ranking for 'precision CNC machining Ohio aerospace' attracts buyers. Most manufacturing sites aren't built for the searches that matter.",
  },
];

const buyerTypes = [
  {
    role: "Design Engineer",
    needs: ["Technical specs and tolerances", "CAD file downloads", "Material compatibility", "Lead time estimates"],
    color: "cyan",
  },
  {
    role: "Procurement Manager",
    needs: ["Certifications and quality docs", "Capacity and scalability", "Case studies with similar projects", "Pricing structure (even if ranges)"],
    color: "blue",
  },
  {
    role: "Operations / Plant Manager",
    needs: ["On-time delivery record", "Quality control processes", "Communication and responsiveness", "References from similar manufacturers"],
    color: "emerald",
  },
];

const caseStudies = [
  {
    client: "Faztek",
    category: "Industrial Manufacturing",
    result: "+240% organic traffic",
    description: "SEO architecture rebuild and conversion-focused redesign for an aluminum framing manufacturer targeting engineers and system builders.",
    image: "/images/work/faztek-screenshot.jpg",
    logo: "/images/work/faztek-logo.png",
  },
  {
    client: "PlastechMold",
    category: "Precision Injection Molding",
    result: "3x qualified leads/month",
    description: "Full website redesign built around RFQ generation — technical content, buyer-specific pathways, and conversion architecture for a custom molding shop.",
    image: "/images/work/plastechmold-screenshot.png",
    logo: "/images/work/plastechmold-logo.png",
  },
  {
    client: "Haag-Streit",
    category: "Healthcare Manufacturing",
    result: "+180% lead quality",
    description: "Redesigned a global optics manufacturer's web presence with persona-based UX for clinical buyers, procurement, and distributor channels.",
    image: "/images/work/haag-streit-screenshot.jpg",
    logo: "/images/work/haag-streit-logo.png",
  },
  {
    client: "Melink",
    category: "Commercial HVAC / Industrial",
    result: "43% bounce rate drop",
    description: "Conversion architecture rebuild for a sustainable HVAC engineering firm — optimized for facility managers, contractors, and commercial buyers.",
    image: "/images/work/melink-screenshot.jpg",
    logo: "/images/work/melink-logo.png",
  },
];

const strategy = [
  {
    step: "01",
    title: "Buyer Persona Mapping",
    body: "We define who your real buyers are — their role, what they need to know before reaching out, and the questions they ask at each stage of their evaluation. Then we build the site around their journey, not your org chart.",
  },
  {
    step: "02",
    title: "Industry SEO Architecture",
    body: "We build keyword strategies around buyer-intent searches — specific processes, materials, industries, and geographies your buyers actually search for. Not generic terms that attract noise.",
  },
  {
    step: "03",
    title: "Technical Content Structure",
    body: "Engineers and procurement teams need different things from the same page. We structure content hierarchies that surface the right information to the right reader without requiring them to dig.",
  },
  {
    step: "04",
    title: "RFQ and Lead Flow Optimization",
    body: "We build contact and RFQ flows that reduce friction without reducing qualification. The right form length, the right placement, the right follow-up triggers — measured against real inquiry quality.",
  },
  {
    step: "05",
    title: "Build and Performance",
    body: "Fast, clean code on a platform your team can actually update. No $10,000 change requests to add a capability page. Core Web Vitals that hold under real traffic from mobile field buyers.",
  },
];

export default function ManufacturingWebsiteDesignPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <main className="w-full bg-black text-white">
      <PageHero
        label="Manufacturing Website Design"
        title="Websites That Generate RFQs — Not Just Visitors"
        titleHighlight="RFQs — Not Just Visitors"
        description="Manufacturing buyers are technical, skeptical, and slow to decide. We build websites designed for how they actually evaluate vendors — not how marketing wants them to behave."
        backgroundImage="/images/industries-hero-bg.png"
        badges={["Built for engineers", "RFQ-optimized", "Industry-specific SEO"]}
      />

      <QuickAnswerBlock
        question="What is manufacturing website design?"
        answer="Manufacturing website design is the process of building websites specifically for manufacturers that need to generate RFQ submissions from engineers, procurement managers, and operations leads. It requires technical content architecture surfacing certifications, tolerances, materials, and lead times quickly — alongside buyer-specific information pathways, industry-focused SEO targeting buyer-intent searches, and low-friction RFQ forms. Generic B2B templates fail manufacturing buyers because they don't surface technical specifications fast enough."
      />

      {/* Pain points */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              The Problem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Most Manufacturing Websites Don&apos;t Generate Pipeline
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer types */}
      <section className="py-20 bg-slate-950/50 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              Who You&apos;re Selling To
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Three Buyers. One Website. Each Needs Different Things.
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Manufacturing purchases involve multiple stakeholders. We build sites that serve all of them without overwhelming any of them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {buyerTypes.map((buyer) => {
              const borderColor = buyer.color === "cyan"
                ? "border-volt-500/30 hover:border-volt-400"
                : buyer.color === "blue"
                ? "border-volt-500/30 hover:border-volt-400"
                : "border-emerald-500/30 hover:border-emerald-400";
              const textColor = buyer.color === "cyan"
                ? "text-volt-400"
                : buyer.color === "blue"
                ? "text-volt-400"
                : "text-emerald-400";
              return (
                <div key={buyer.role} className={`rounded-xl border bg-slate-900/50 p-8 transition-colors duration-200 ${borderColor}`}>
                  <h3 className={`text-lg font-bold mb-5 ${textColor}`}>{buyer.role}</h3>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">What they need from your site</p>
                  <ul className="space-y-2">
                    {buyer.needs.map((need) => (
                      <li key={need} className="flex items-start gap-2 text-sm text-slate-400">
                        <svg className={`w-4 h-4 shrink-0 mt-0.5 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {need}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Manufacturing Websites We&apos;ve Built
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.client} className="group rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden hover:border-slate-700 transition-colors duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={cs.client}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <span className="text-sm font-bold text-volt-400">{cs.result}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">{cs.category}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{cs.client}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{cs.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-volt-500 hover:text-volt-400 transition-colors duration-200"
            >
              View case studies
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-20 bg-slate-950/50 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              How We Build Manufacturing Websites That Win Business
            </h2>
          </div>
          <div className="space-y-12">
            {strategy.map((item) => (
              <div key={item.step} className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 items-start">
                <div className="text-5xl font-black font-mono text-volt-400/20 leading-none">{item.step}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LabFramework />

      <FaqSection
        headingId="mfg-faq-heading"
        faqs={faqSchema.mainEntity.map((faq) => ({ question: faq.name, answer: faq.acceptedAnswer.text }))}
      />

      {/* Related */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/services/b2b-website-design" className="rounded-lg border border-volt-500/30 bg-volt-500/10 px-6 py-3 text-sm font-semibold text-volt-400 hover:border-volt-400 hover:bg-volt-500/20 transition-all duration-200">
              B2B Website Design →
            </Link>
            <Link href="/services/conversion-optimization" className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200">
              Conversion Optimization →
            </Link>
          </div>
        </div>
      </section>

      <PageClose
        title="Let's Build a Website That Gets You RFQs"
        bodyPrimary="Start with a manufacturing website audit. We'll show you exactly what buyers are finding (and not finding) on your current site, and what it would take to turn it into a lead generation asset."
        bodySecondary="We've done this for precision manufacturers, industrial suppliers, and complex B2B operations. We know the buyer behavior. We know what it takes."
        secondaryHref="/work"
        secondaryLabel="View Manufacturing Portfolio"
      />
      </main>
    </>
  );
}
