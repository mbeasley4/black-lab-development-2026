import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import LabFramework from "@/components/LabFramework";
import JsonLd from "@/components/JsonLd";
import FaqSection from "@/components/FaqSection";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import FounderByline from "@/components/FounderByline";

export const metadata: Metadata = {
  title: "Small Business Website Design | Built to Generate Business",
  description:
    "Professional small business website design built by a senior engineer — not a template, not a junior freelancer. Fast, credible, and built to bring in calls and leads.",
  alternates: { canonical: "/services/small-business-website-design" },
  openGraph: {
    title: "Small Business Website Design | Built to Generate Business",
    description:
      "Professional small business website design built by a senior engineer — not a template, not a junior freelancer. Fast, credible, and built to bring in calls and leads.",
    url: "/services/small-business-website-design",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Small Business Website Design | Built to Generate Business",
    description:
      "Professional small business website design built by a senior engineer — fast, credible, and built to bring in calls and leads.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://blacklabdev.com/services" },
    { "@type": "ListItem", position: 3, name: "Small Business Website Design", item: "https://blacklabdev.com/services/small-business-website-design" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is this different from Wix or Squarespace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wix and Squarespace give you a template and a drag-and-drop editor. That works until you need something the template doesn't do — a custom booking flow, a real content structure, page speed that passes Core Web Vitals, or a layout that doesn't look like every other business in your category. I build custom in Next.js or WordPress, so the site is designed around how your customers actually buy from you, loads in about a second, and can be extended later without a rebuild. You also get a person who reads the code, not a support ticket queue.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a small business website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most small business website projects at Black Lab Development start at $4,000 and run to about $12,000 depending on page count, custom functionality, and whether you need integrations like booking, payments, or a CRM. You get a fixed quote before anything starts — no hourly meter, no change-order surprises mid-build. If the scope you want doesn't fit your budget, I'll tell you that on the first call instead of quoting it and cutting corners later.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a small business website take to build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most small business websites launch in 6–10 weeks from signed contract. Smaller sites can move faster. The single biggest factor is content — photos, service descriptions, and pricing you're comfortable publishing. If content is ready at kickoff, the timeline holds. I scope the schedule before work begins so you know the launch date going in.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with small businesses outside Cincinnati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Black Lab Development is based in Cincinnati, OH, and I meet local clients in person when it helps — but most of my work is with small and mid-sized businesses across the United States. The process is fully remote-friendly: you talk directly to me over calls, email, and a shared review link. There's no account manager in between and no time-zone lag.",
      },
    },
    {
      "@type": "Question",
      name: "What if I already have a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Then the first question is whether it needs a rebuild or a repair. Sometimes the fix is a performance pass, better conversion paths, and a content cleanup on the site you already own — cheaper and faster than starting over. Sometimes the platform itself is the problem and rebuilding is the only honest answer. I'll audit what you have and tell you which one it is, including when the answer is 'keep it and fix three things.'",
      },
    },
    {
      "@type": "Question",
      name: "Will I be able to update the website myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every build ships on a CMS you can actually use — editable pages, services, staff, and blog posts without touching code or calling me for a phone number change. I hand off a short walkthrough recording and written documentation at launch. You own the site, the code, the domain, and the hosting account.",
      },
    },
    {
      "@type": "Question",
      name: "Who actually builds the website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I do. Michael Beasley — 15+ years as a senior web developer. There's no sales rep who disappears after the contract and no junior developer assigned post-kickoff. The person you talk to on the first call is the person writing the code and the person accountable when something breaks.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Small Business Website Design",
  serviceType: "Web Design",
  description:
    "Professional small business website design built by a senior engineer — custom, fast, and structured to generate calls, bookings, and qualified leads.",
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
  url: "https://blacklabdev.com/services/small-business-website-design",
};

const failures = [
  {
    title: "You outgrew the DIY builder",
    description:
      "Wix, Squarespace, and GoDaddy get a business online. Then the template runs out of room — you can't add the page you need, the mobile layout breaks, and every fix costs another plugin. The site starts limiting the business instead of supporting it.",
  },
  {
    title: "The agency shipped it and vanished",
    description:
      "Launch day was the last time anyone answered. Now there's no one who knows how the site was built, updates sit in a queue for weeks, and small changes come back as a quote. You own a website nobody will touch.",
  },
  {
    title: "You look smaller than you are",
    description:
      "Your work is better than your competitors'. Your website isn't. When a customer opens three tabs to compare, the one that looks credible wins the call — and that judgment happens in a few seconds, before anyone reads a word.",
  },
  {
    title: "There's no obvious next step",
    description:
      "Someone lands on your site ready to hire you. What do they do? If the answer is 'find the contact page, fill out a nine-field form, and hope,' you're losing customers who were already sold.",
  },
  {
    title: "It's slow, and search noticed",
    description:
      "A page-builder site loaded with sliders and tracking scripts takes five seconds on a phone. Half the visitors leave before it renders, and Google ranks it below the competitor whose site loads instantly.",
  },
  {
    title: "You can't update it without help",
    description:
      "New hours, new service, new photos — and you have to email someone and wait. A website you can't edit is a website that slowly goes out of date until it's actively misleading customers.",
  },
];

const approach = [
  {
    step: "01",
    title: "Understand the Business",
    body: "Before design, I need to know how you actually make money — what a good customer looks like, what they ask before they buy, and what they compare you against. That conversation decides the site structure. Everything else follows from it.",
  },
  {
    step: "02",
    title: "Map the Path to Contact",
    body: "Every page gets one job and one clear next step: call, book, quote, or buy. I map how someone moves from landing on the site to reaching out, then remove the steps and the form fields that don't earn their place.",
  },
  {
    step: "03",
    title: "Design That Earns Trust Fast",
    body: "Clean, professional, and unmistakably yours — with the proof a first-time visitor needs up front: real photos, real reviews, clear pricing or ranges, service areas, and credentials. Credibility is a design problem before it's a copy problem.",
  },
  {
    step: "04",
    title: "Clean, Fast Build",
    body: "Custom Next.js or WordPress — no page builders, no bloated themes, no plugin stack held together with hope. Core Web Vitals that pass on a phone on cell service, and a CMS you can edit yourself without breaking the layout.",
  },
  {
    step: "05",
    title: "Launch, Measure, Improve",
    body: "Analytics, call tracking, and form tracking are configured before launch, not after. Post-launch I check what people actually do on the site and fix what's underperforming — so you find out what's working from data, not a hunch.",
  },
];

const results = [
  { metric: "+180%", label: "Conversion Rate", detail: "Average lift across website redesign engagements" },
  { metric: "4.3s → 1.2s", label: "Load Time", detail: "Custom rebuild replacing a bloated page-builder theme" },
  { metric: "43%", label: "Bounce Rate Drop", detail: "After messaging and UX realignment" },
];

const included = [
  { label: "Built with", value: "Next.js or custom WordPress" },
  { label: "Who writes the code", value: "Me — every line" },
  { label: "Typical timeline", value: "6–10 weeks" },
  { label: "Starting investment", value: "$4,000+, fixed quote" },
  { label: "You can edit it", value: "Yes — CMS + walkthrough" },
  { label: "Who owns it", value: "You — code, domain, hosting" },
];

export default function SmallBusinessWebsiteDesignPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <main className="w-full bg-black text-white">
      <PageHero
        label="Small Business Website Design"
        title="A Website Built to Bring You Business"
        titleHighlight="Bring You Business"
        description="Small businesses get one shot at looking credible online. I build professional, fast, custom websites for growing businesses — designed around how your customers actually decide to call you."
        backgroundImage="/images/services-hero-bg.png"
        badges={["Built by a senior engineer", "No templates", "You can update it yourself"]}
      />

      <QuickAnswerBlock
        question="What is small business website design?"
        answer="Small business website design is the process of building a custom website for a small or mid-sized business that needs to look credible, load fast, and turn visitors into calls, bookings, or quote requests. Unlike a drag-and-drop template, a custom small business website is structured around how that specific business earns customers — clear services, real proof, and one obvious next step on every page. The practical difference shows up in three places: how fast it loads on a phone, how easily a customer can reach you, and whether the owner can update it without hiring someone."
      />

      {/* What's different */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
                What&apos;s Different
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                A Senior Engineer, Not a Template or a Handoff
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Most small businesses have exactly two options: a template they fight with themselves, or an agency that sells them a senior team and staffs the project with whoever is available. Both end the same way — a site that technically exists and quietly underperforms.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I&apos;m a third option. One senior developer, 15+ years in, building the whole thing: strategy, design, code, launch. You talk to me directly, decisions get made in one conversation instead of three, and the person accountable for the result is the person doing the work.
              </p>
            </div>
            <div className="space-y-6">
              {included.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-6 border-b border-slate-800 pb-4">
                  <span className="text-slate-400 text-sm shrink-0">{item.label}</span>
                  <span className="text-volt-400 font-bold text-sm md:text-base text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common failures */}
      <section className="py-20 bg-slate-950/50 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              Common Failures
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Most Small Business Websites Don&apos;t Bring In Work
            </h2>
            <p className="text-slate-400 leading-relaxed">
              These aren&apos;t hypotheticals. They&apos;re what I find on almost every small business site I audit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {failures.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My approach */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              My Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              How I Build a Small Business Website
            </h2>
          </div>
          <div className="space-y-12">
            {approach.map((item) => (
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

      {/* Results */}
      <section className="py-20 bg-slate-950/50 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              Results
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What Changes After the Rebuild
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-700/40">
            {results.map((r) => (
              <div key={r.label} className="bg-slate-900 px-10 py-10 text-center">
                <div className="text-4xl md:text-5xl font-black bg-linear-to-r from-volt-400 to-volt-400 bg-clip-text text-transparent mb-2">{r.metric}</div>
                <div className="text-lg font-semibold text-white mb-2">{r.label}</div>
                <div className="text-sm text-slate-400">{r.detail}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600 mt-4 text-center">
            Metrics represent client results across redesign engagements. Individual results vary.
          </p>
        </div>
      </section>

      <LabFramework />

      <FaqSection
        headingId="small-business-faq-heading"
        faqs={faqSchema.mainEntity.map((faq) => ({ question: faq.name, answer: faq.acceptedAnswer.text }))}
      />

      {/* Related services */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/services/conversion-optimization" className="rounded-lg border border-volt-500/30 bg-volt-500/10 px-6 py-3 text-sm font-semibold text-volt-400 hover:border-volt-400 hover:bg-volt-500/20 transition-all duration-200">
              Website Conversion Optimization →
            </Link>
            <Link href="/partners" className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200">
              Agency &amp; Partner Services →
            </Link>
          </div>
          <p className="text-sm text-slate-500 mt-4 max-w-2xl leading-relaxed">
            Running an agency or consultancy and sizing me up as a delivery partner rather than a vendor? The partner page covers white-label builds and SEO fulfillment.
          </p>
        </div>
      </section>

      <FounderByline />

      <PageClose
        title="Ready for a Website That Actually Works for You?"
        bodyPrimary="Start with a website audit. I'll go through your current site the way a customer would, and show you exactly where you're losing them — and what I'd do about it."
        bodySecondary="No proposals to review. No 40-slide decks. Just a direct assessment of what's working, what isn't, and what it would cost to fix."
        secondaryHref="/case-studies"
        secondaryLabel="View Case Studies"
      />
      </main>
    </>
  );
}
