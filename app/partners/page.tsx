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
  title: "White-Label Web Development & SEO for Agencies | Black Lab Dev",
  description:
    "White-label web development and technical SEO fulfillment for marketing agencies and strategy firms. Senior engineering under your brand — NDA-friendly, no client poaching.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "White-Label Web Development & SEO for Agencies | Black Lab Dev",
    description:
      "White-label web development and technical SEO fulfillment for marketing agencies and strategy firms. Senior engineering under your brand — NDA-friendly, no client poaching.",
    url: "/partners",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "White-Label Web Development & SEO for Agencies | Black Lab Dev",
    description:
      "White-label web development and technical SEO fulfillment for agencies and strategy firms — senior engineering delivered under your brand.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
    { "@type": "ListItem", position: 2, name: "Partners", item: "https://blacklabdev.com/partners" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "White-Label Web Development & SEO for Agencies",
  serviceType: "Web Development",
  description:
    "White-label web development and technical SEO fulfillment for marketing agencies, creative studios, and strategy firms — delivered under the agency's brand by a senior engineer.",
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
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Marketing agencies and strategy/consulting firms",
  },
  areaServed: { "@type": "Country", name: "United States" },
  url: "https://blacklabdev.com/partners",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you white-label your work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — that's the default for partner engagements. The work ships under your agency's brand: no Black Lab Development credit in the footer, no backlink, no logo, no attribution in the repository or the CMS. Deliverables are handed to you, and you present them to your client as your team's work. I don't publish white-label builds as case studies or name the end client anywhere unless you explicitly approve it in writing.",
      },
    },
    {
      "@type": "Question",
      name: "How does communication work — do you talk to our client directly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only if you want me to. The default is communicate-through-you: you own the client relationship, I work from your briefs, and everything goes back to you for review before it reaches the client. If it's more efficient, I'll join client calls as a member of your team, under your agency's name and email — plenty of partners prefer that for technical scoping sessions. Either way, I never contact your client outside a channel you set up, and I don't solicit your clients for direct work. That's a written term, not a handshake.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under NDA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I sign agency NDAs and mutual NDAs before scoping calls, and I'm happy to work under your standard subcontractor agreement including non-solicitation and IP assignment clauses. As an independent practice there's no offshore subcontractor chain and no one else with access to your client's credentials or code — it's one person under one agreement, which is a materially smaller surface than a dev shop that routes work to a team you never meet.",
      },
    },
    {
      "@type": "Question",
      name: "What's your capacity and turnaround for agency overflow work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I hold capacity for one to two active partner projects at a time alongside direct work, so I can usually start a scoped build within one to two weeks. Typical turnarounds: a landing page or template build in 3–7 business days, a marketing site of 8–15 pages in 3–6 weeks, and a technical SEO audit with a prioritized remediation plan in about a week. Small fixes and bug tickets from an existing partner project are usually turned around same-day or next-day. If I can't hit your deadline, I say so before you quote the client — never after.",
      },
    },
    {
      "@type": "Question",
      name: "What tech stacks do you support for agency client builds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next.js and React for custom front-ends, Sanity and headless CMS setups for structured content, WordPress with custom themes (no page builders), Shopify for commerce, and Drupal or Laravel where the client's requirements call for them. I also take over existing codebases — inheriting a client's WordPress install or a half-finished Next.js build is normal partner work. If your client's stack is fixed by their IT team, I build inside it rather than pitching you a migration you didn't ask for.",
      },
    },
    {
      "@type": "Question",
      name: "How is pricing structured for agency partners — reseller/wholesale or retail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partner pricing is wholesale: you get a fixed quote per project at a partner rate below my published direct rates, and you set your own client-facing price and keep the margin. Most partner builds are quoted as a flat project fee; ongoing work — SEO fulfillment, maintenance, iterative development — runs as a monthly retainer, typically starting around $1,500/month. Rush work is quoted separately rather than silently marked up. You invoice your client; I invoice you.",
      },
    },
  ],
};

const painPoints = [
  {
    title: "Hiring in-house dev doesn't pencil out",
    description:
      "A senior developer is a six-figure salary plus benefits plus the months of pipeline it takes to keep them busy. Web work at most agencies is lumpy — three builds this quarter, none the next. You end up either paying someone to idle or scrambling when two projects land the same week.",
  },
  {
    title: "The offshore shop was cheap until it wasn't",
    description:
      "The quote looked great. Then came the 12-hour feedback loop, the code nobody on your side can read, the QA cycles that found the same bug three times, and the account manager translating your brief into something else. The savings evaporated in project management hours.",
  },
  {
    title: "Junior shops build what you asked for, not what works",
    description:
      "They'll execute the comp pixel-perfect and ship a site that fails Core Web Vitals, has no content model, and can't be extended. Nobody pushed back on the requirement that was going to cause problems, because nobody had the experience to see it coming.",
  },
  {
    title: "Technical SEO gets sold, then can't get implemented",
    description:
      "Your strategist delivers a solid audit. Then it sits, because implementing structured data, fixing render-blocking resources, and running a migration without losing rankings is engineering work — and the client's developer either can't or won't do it.",
  },
  {
    title: "You're the one apologizing for someone else's delay",
    description:
      "When the subcontractor slips, your client doesn't hear from the subcontractor. They hear from you. Every missed date spends trust you built over years on a vendor relationship that took a week to set up.",
  },
  {
    title: "You need capacity, not a competitor",
    description:
      "Plenty of dev shops will happily take the overflow — and the relationship. Handing a client to a firm that also sells strategy and creative is a real risk, and you shouldn't have to run that risk to get a site built.",
  },
];

const valueProps = [
  {
    title: "Capacity extension",
    detail: "Not competition",
    points: [
      "You keep the client relationship and the margin",
      "Written non-solicitation, standard on every engagement",
      "I don't sell strategy, brand, or creative",
      "Scale up for overflow, scale down with no severance",
    ],
  },
  {
    title: "Technical depth",
    detail: "The part you don't have in-house",
    points: [
      "Next.js, React, Sanity, headless CMS architecture",
      "Technical SEO actually implemented, not just recommended",
      "Core Web Vitals, migrations, structured data",
      "Inherits and repairs existing codebases",
    ],
  },
  {
    title: "Built for agency workflows",
    detail: "One senior point of contact",
    points: [
      "Comms run through you by default",
      "NDA-friendly, subcontractor agreements welcome",
      "Staging links and review builds your client can see",
      "Clean handoff docs written for your team",
    ],
  },
  {
    title: "Speed and reliability",
    detail: "Dates you can quote to a client",
    points: [
      "Scoped timelines before you commit to the client",
      "Same-day or next-day turnaround on active-project tickets",
      "An honest no when a deadline isn't achievable",
      "No offshore chain, no handoff to a junior developer",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Scoping Under NDA",
    body: "NDA first, details second. You send the brief, the comps, or just the client's problem, and I come back with a fixed scope, a timeline, and a wholesale quote you can mark up. If the request doesn't fit — wrong stack, wrong timeline, wrong budget — you hear that in the scoping call, not three weeks in.",
  },
  {
    step: "02",
    title: "White-Label Handoff Model",
    body: "Before work starts you pick the comms model: fully behind the scenes, or on client calls under your agency's name and email. Everything routes through you for review by default. Nothing carries my brand, my footer credit, or my backlink, and your client never learns a second firm was involved unless you tell them.",
  },
  {
    step: "03",
    title: "Build in Whatever Fits the Client",
    body: "Next.js and Sanity when the client needs a fast, structured, modern site. Custom WordPress when their team needs a familiar admin. Shopify for commerce. Their existing stack when IT has already decided. You get staging links throughout, so there's always something real to show the client instead of a status update.",
  },
  {
    step: "04",
    title: "QA, Accessibility & Launch",
    body: "Cross-browser and device testing, Core Web Vitals, WCAG checks, redirects mapped, analytics and tracking verified against the client's existing setup. Launch is planned — DNS cutover, caching, monitoring — not improvised on a Friday afternoon. I stay available through go-live and the week after.",
  },
  {
    step: "05",
    title: "Ongoing Fulfillment & Retainer",
    body: "After launch, most partners keep me on a monthly retainer for the work that keeps arriving: SEO implementation, iterative development, performance monitoring, and the small client requests that would otherwise interrupt your team. You bill it as your maintenance or SEO service line.",
  },
];

const proof = [
  { metric: "100/100", label: "Lighthouse", detail: "Core Web Vitals passing across all pages post-rebuild" },
  { metric: "4.3s → 1.2s", label: "Load Time", detail: "Custom rebuild replacing a bloated page-builder theme" },
  { metric: "+240%", label: "Organic Traffic", detail: "SEO architecture rebuild, industrial manufacturer" },
];

export default function PartnersPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <main className="w-full bg-black text-white">
      <PageHero
        label="Agency & Partner Services"
        title="I Build It. You Brand It."
        titleHighlight="You Brand It."
        description="Senior engineering for agencies and strategy firms that don't want another full-time dev hire. No subcontractor pool, no offshore relay — you brief me, I build it, you ship it."
        backgroundImage="/images/partners-hero-bg.jpg"
        badges={["White-label delivery", "NDA-friendly", "Direct to a senior engineer"]}
      />

      <QuickAnswerBlock
        question="What is white-label web development for agencies?"
        answer="White-label web development is an arrangement where an agency subcontracts the technical build of a client's website to an outside developer, and delivers the finished work to the client under the agency's own brand. The developer stays invisible: no attribution, no footer credit, no direct client relationship unless the agency asks for one. For a marketing, creative, or strategy firm, it converts web development from a hiring decision into a per-project cost — the agency keeps the client relationship, sets its own retail price, and adds engineering capacity for overflow work without carrying a full-time developer between projects."
      />

      {/* Pain points */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              The Problem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Agencies Stop Trying to Solve Development In-House
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Every agency that sells websites eventually runs into the same six problems. Most of them cost more than the development did.
            </p>
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

      {/* Value props */}
      <section className="py-20 bg-slate-950/50 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              What You Get
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              A Technical Partner, Not Another Vendor to Manage
            </h2>
            <p className="text-slate-400 leading-relaxed">
              One senior engineer, working the way agencies actually operate — behind your brand, on your timeline, at your direction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="rounded-xl border border-volt-500/20 bg-slate-900/50 p-8 transition-colors duration-200 hover:border-volt-400"
              >
                <h3 className="text-lg font-bold text-volt-400 mb-1">{prop.title}</h3>
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-5">{prop.detail}</p>
                <ul className="space-y-2">
                  {prop.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-400">
                      <svg className="w-4 h-4 shrink-0 mt-0.5 text-volt-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              The Partner Engagement, Start to Finish
            </h2>
          </div>
          <div className="space-y-12">
            {process.map((item) => (
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

      {/* Proof */}
      <section className="py-20 bg-slate-950/50 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              The Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What Your Client Ends Up With
            </h2>
            <p className="text-slate-400 leading-relaxed">
              White-label work runs under your brand, so the numbers below come from direct engagements I&apos;m able to name. The engineering standard is the same either way.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-700/40">
            {proof.map((r) => (
              <div key={r.label} className="bg-slate-900 px-10 py-10 text-center">
                <div className="text-4xl md:text-5xl font-black bg-linear-to-r from-volt-400 to-volt-400 bg-clip-text text-transparent mb-2">{r.metric}</div>
                <div className="text-lg font-semibold text-white mb-2">{r.label}</div>
                <div className="text-sm text-slate-400">{r.detail}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600 mt-4 text-center">
            Metrics represent client results across engagements. Individual results vary.
          </p>
        </div>
      </section>

      {/* Partner service lines */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="max-w-2xl mb-10">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              Partner Service Lines
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Two Ways Agencies Use Me
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "White-Label Web Development",
                href: "/partners/white-label-web-development",
                description:
                  "The full delivery model: how handoff works, what your client sees, deliverables, IP ownership, and timelines for a build shipped under your brand.",
              },
              {
                title: "Technical SEO Fulfillment",
                href: "/partners/seo-fulfillment",
                description:
                  "Execution for firms whose service line is strategy: Core Web Vitals, structured data, technical audits, and migrations actually implemented in the code.",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-volt-500/50 hover:shadow-xl flex flex-col"
              >
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-volt-400 transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed grow">{card.description}</p>
                <div className="flex items-center gap-2 mt-5 text-sm font-semibold text-volt-400">
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LabFramework />

      <FaqSection
        headingId="partners-faq-heading"
        faqs={faqSchema.mainEntity.map((faq) => ({ question: faq.name, answer: faq.acceptedAnswer.text }))}
      />

      <FounderByline />

      <PageClose
        title="Let's Talk About Partnering"
        bodyPrimary="Send me the project you're trying to staff — or just the shape of the work you keep turning away. I'll tell you whether I'm the right fit, what it would cost you at partner rates, and how fast I could start."
        bodySecondary="NDA first if you need one. No pitch deck, no reseller program to enroll in, no minimum commitment. One senior engineer you can put on the work and take off it."
        secondaryHref="/case-studies"
        secondaryLabel="View Case Studies"
      />
      </main>
    </>
  );
}
