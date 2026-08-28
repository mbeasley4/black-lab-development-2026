import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import JsonLd from "@/components/JsonLd";
import FaqSection from "@/components/FaqSection";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import FounderByline from "@/components/FounderByline";

export const metadata: Metadata = {
  title: "White-Label Web Development for Agencies | Black Lab Dev",
  description:
    "How white-label web development works: the handoff model, what your client sees, deliverables, IP ownership, and timelines. Senior engineering shipped under your agency's brand.",
  alternates: { canonical: "/partners/white-label-web-development" },
  openGraph: {
    title: "White-Label Web Development for Agencies | Black Lab Dev",
    description:
      "How white-label web development works: the handoff model, what your client sees, deliverables, IP ownership, and timelines. Senior engineering shipped under your agency's brand.",
    url: "/partners/white-label-web-development",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "White-Label Web Development for Agencies | Black Lab Dev",
    description:
      "The white-label delivery model in detail — handoff, deliverables, IP ownership, and timelines for builds shipped under your agency's brand.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
    { "@type": "ListItem", position: 2, name: "Partners", item: "https://blacklabdev.com/partners" },
    { "@type": "ListItem", position: 3, name: "White-Label Web Development", item: "https://blacklabdev.com/partners/white-label-web-development" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "White-Label Web Development",
  serviceType: "Web Development",
  description:
    "White-label web development for agencies — Next.js, Sanity, WordPress, and Shopify builds delivered under the agency's brand with full IP assignment.",
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
    audienceType: "Marketing agencies, creative studios, and consulting firms",
  },
  areaServed: { "@type": "Country", name: "United States" },
  isPartOf: {
    "@type": "Service",
    name: "White-Label Web Development & SEO for Agencies",
    url: "https://blacklabdev.com/partners",
  },
  url: "https://blacklabdev.com/partners/white-label-web-development",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who owns the code and the intellectual property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You do — or your client does, whichever your contract with them specifies. Every partner engagement includes full IP assignment on final payment: source code, design files, content models, and documentation transfer to you with no license-back, no proprietary framework you have to keep paying for, and no hosting you're locked into. I keep no rights to reuse the build. Nothing in the codebase phones home to me.",
      },
    },
    {
      "@type": "Question",
      name: "What exactly do I receive at handoff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Git repository with readable commit history, the production build deployed to hosting you control, CMS schemas and seeded content, environment variable documentation, a redirect map if it was a migration, QA and accessibility results, and a written handoff doc plus a short screen-recorded walkthrough — all unbranded, so you can forward them to your client or your own team as-is. If you want the handoff doc in your agency's template, send it and I'll write into it.",
      },
    },
    {
      "@type": "Question",
      name: "What does my client see during the project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your agency, and nothing else. Staging links live on a neutral or your-branded domain, commits and CMS entries carry no Black Lab attribution, and there's no footer credit or backlink in the delivered site. If I join a client call, it's under your agency's name and email as a member of your team. Your client only learns a partner was involved if you decide to tell them.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a white-label build take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A landing page or template build runs 3–7 business days. A marketing site of 8–15 pages runs 3–6 weeks. A larger custom build with integrations, a migration, or a complex content model runs 6–12 weeks. Those clocks start when design and content are approved on your side — the most common cause of slippage on partner projects is content arriving in pieces, so I flag the dependency in the scope rather than absorbing it silently.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work from our designs, or do you design too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both, though most agencies use me for build only — you have designers, and they should stay in charge of how the client's brand looks. Send Figma and I'll build it faithfully and flag the two or three places where the comp will cause a responsive, accessibility, or CMS-editability problem before I build them. If you don't have design capacity for a given project, I can design and build, but that's a separate line in the quote.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after launch — who supports the site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You do, with me behind you. Every build includes a post-launch support window for defects at no additional cost. After that, most partners keep a monthly retainer so client requests, dependency updates, and small features have somewhere to go — you bill it as your maintenance plan. If you'd rather take full ownership at launch, the handoff documentation is written so your team or the client's can pick it up cold.",
      },
    },
  ],
};

const visibility = [
  {
    surface: "Site footer & credits",
    agency: "Your agency's credit, or none at all",
    me: "No Black Lab name, logo, or backlink",
  },
  {
    surface: "Staging & review links",
    agency: "Neutral or your-branded domain",
    me: "No developer branding on the environment",
  },
  {
    surface: "Client calls & email",
    agency: "You lead; I join under your name if asked",
    me: "Never contacts your client independently",
  },
  {
    surface: "Repository & CMS",
    agency: "Transfers to you, history intact",
    me: "No attribution in commits or content",
  },
  {
    surface: "Case studies & portfolio",
    agency: "Yours to publish",
    me: "Never published without written approval",
  },
  {
    surface: "Invoicing",
    agency: "You invoice the client at your rate",
    me: "I invoice you at partner rate",
  },
];

const deliverables = [
  {
    title: "Source code, assigned",
    description:
      "A Git repository with readable history and a clean branching model, transferred to your organization. Full IP assignment on final payment — no license-back, no proprietary framework, no lock-in.",
  },
  {
    title: "A CMS the client can run",
    description:
      "Sanity, WordPress, or whatever the stack calls for — with a content model built for the client's actual editing patterns, not a generic page-builder free-for-all that degrades within six months.",
  },
  {
    title: "Deployment you control",
    description:
      "Production deployed to hosting in your account or the client's, with environment variables documented, DNS and caching configured, and monitoring in place before the cutover.",
  },
  {
    title: "QA and accessibility results",
    description:
      "Cross-browser and device testing, Core Web Vitals numbers, WCAG checks, and a redirect map for migrations — written up so you can hand the evidence to a client who asks for it.",
  },
  {
    title: "Unbranded handoff docs",
    description:
      "A written handoff document and a short screen-recorded walkthrough with no developer branding, ready to forward to the client or drop into your own onboarding materials.",
  },
  {
    title: "A support window",
    description:
      "A defect-support period after launch at no extra cost, so the first month of client questions doesn't turn into a change order or an emergency for your team.",
  },
];

const timeline = [
  {
    step: "01",
    title: "NDA & Scope",
    body: "Signed before the details. You send the brief, comps, or the client's problem; I return a fixed scope, a timeline with real dates, and a wholesale quote. If it doesn't fit, you find out here.",
  },
  {
    step: "02",
    title: "Kickoff & Access",
    body: "One kickoff call with you — plus the client if you want me there under your name. I take repository, hosting, and CMS access, audit anything I'm inheriting, and confirm the content dependencies that could move the date.",
  },
  {
    step: "03",
    title: "Build in Sprints You Can Show",
    body: "Work lands on a staging link continuously, so you always have something real to put in front of the client instead of a status update. Questions come to you, not around you, batched rather than trickled.",
  },
  {
    step: "04",
    title: "QA, Client Review, Revisions",
    body: "I QA before you see it. You review, the client reviews through you, and revisions run in one consolidated pass rather than a drip of one-off tickets — which is what keeps the launch date honest.",
  },
  {
    step: "05",
    title: "Launch & Transfer",
    body: "Planned cutover: DNS, redirects, caching, analytics verified, monitoring live. Then the repository, docs, and walkthrough transfer to you, and the support window starts.",
  },
];

export default function WhiteLabelWebDevelopmentPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <main className="w-full bg-black text-white">
      <PageHero
        label="Partners / White-Label Development"
        title="White-Label Web Development, Shipped Under Your Brand"
        titleHighlight="Shipped Under Your Brand"
        description="The delivery model in detail: how handoff works, what your client sees, what you actually receive, who owns the code, and how long it takes. No mystery, no surprises in front of your client."
        backgroundImage="/images/services-hero-bg.png"
        badges={["Full IP assignment", "Zero attribution", "Fixed scope and dates"]}
      />

      <QuickAnswerBlock
        question="How does white-label web development work?"
        answer="In a white-label web development engagement, the agency signs the client and owns the relationship; an outside developer builds the site and delivers it to the agency, who presents it to the client as their own work. In practice that means four things: an NDA and subcontractor agreement signed before scoping, communication that routes through the agency by default, a build carrying no developer branding or backlink, and full intellectual property assignment at handoff so the agency or its client owns the source code outright. The agency quotes the client at its own retail price and pays the developer a wholesale rate, keeping the margin."
      />

      {/* What the client sees */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              What Your Client Sees
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              You in Front, Me Behind — On Every Surface
            </h2>
            <p className="text-slate-400 leading-relaxed">
              White-label only works if it holds everywhere your client might look. Here&apos;s every place a subcontractor normally leaks through, and what happens instead.
            </p>
          </div>
          <div className="space-y-4">
            {visibility.map((row) => (
              <div
                key={row.surface}
                className="grid grid-cols-1 md:grid-cols-[220px_1fr_1fr] gap-4 rounded-xl border border-slate-800 overflow-hidden group hover:border-volt-500/25 transition-colors duration-300"
              >
                <div className="p-5 bg-slate-950 text-sm font-semibold text-white leading-relaxed">
                  {row.surface}
                </div>
                <div className="p-5 bg-slate-900/50 text-sm text-slate-300 leading-relaxed border-l border-volt-500/10">
                  <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-volt-500/60 mb-1">Your agency</span>
                  {row.agency}
                </div>
                <div className="p-5 bg-slate-900/30 text-sm text-slate-400 leading-relaxed border-l border-slate-800">
                  <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-slate-600 mb-1">Me</span>
                  {row.me}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-slate-950/50 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              Deliverables
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What You Actually Receive
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Everything below is unbranded and forwardable — written for your client&apos;s eyes, not mine.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {deliverables.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
                <div className="w-8 h-8 rounded-full bg-volt-500/15 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-volt-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              The Engagement
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              From NDA to Transfer
            </h2>
          </div>
          <div className="space-y-12">
            {timeline.map((item) => (
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

      <FaqSection
        headingId="white-label-faq-heading"
        faqs={faqSchema.mainEntity.map((faq) => ({ question: faq.name, answer: faq.acceptedAnswer.text }))}
      />

      {/* Related */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <h2 className="text-2xl font-bold text-white mb-8">Related</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/partners" className="rounded-lg border border-volt-500/30 bg-volt-500/10 px-6 py-3 text-sm font-semibold text-volt-400 hover:border-volt-400 hover:bg-volt-500/20 transition-all duration-200">
              Agency &amp; Partner Services →
            </Link>
            <Link href="/partners/seo-fulfillment" className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200">
              Technical SEO Fulfillment →
            </Link>
            <Link href="/services/custom-web-development" className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200">
              Custom Web Development →
            </Link>
          </div>
        </div>
      </section>

      <FounderByline />

      <PageClose
        title="Send Me the Build You Need Staffed"
        bodyPrimary="Brief, comps, or just the client's problem — I'll come back with a fixed scope, a real timeline, and a partner rate you can mark up. NDA first if you need one."
        bodySecondary="No reseller program, no minimum volume, no pitch deck. One senior engineer you can put on the work and take off it."
        secondaryHref="/partners"
        secondaryLabel="Back to Partner Services"
      />
      </main>
    </>
  );
}
