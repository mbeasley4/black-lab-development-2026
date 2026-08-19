import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import JsonLd from "@/components/JsonLd";
import FounderByline from "@/components/FounderByline";

export const metadata: Metadata = {
  title: "Web Development for B2B, Manufacturing & Ecommerce",
  description:
    "Industry-specific website development for manufacturing, B2B, and ecommerce brands — built for technical buyers and real business outcomes.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Web Development for B2B, Manufacturing & Ecommerce",
    description:
      "Industry-specific website development for manufacturing, B2B, and ecommerce brands — built for technical buyers and real business outcomes.",
    url: "/industries",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Web Development for B2B, Manufacturing & Ecommerce",
    description:
      "Industry-specific website development for manufacturing, B2B, and ecommerce brands — built for technical buyers and real business outcomes.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const industries = [
  {
    title: "Healthcare & Medical",
    href: "/industries/healthcare",
    image: "/images/industries/healthcare.png",
    description: (
      <>
        <p className="mb-4">
          Healthcare platforms don't get the luxury of "move fast and break things."
          When the system goes down or the data is wrong, real people are affected.
          That weight shapes how this work gets done — carefully, with an eye on what
          lasts, not just what ships.
        </p>
        <p className="text-neutral-500 text-sm">
          Regulated environments, legacy system integrations, custom CMS platforms,
          and long-term technical stewardship — with the discipline the domain demands.
        </p>
      </>
    ),
  },
  {
    title: "SaaS & Technology Platforms",
    href: "/industries/technology",
    image: "/images/industries/saas.png",
    description: (
      <>
        <p className="mb-4">
          SaaS companies have a habit of building fast, then spending the next two years
          paying the tab. Technical debt compounds quietly until it doesn't — and then
          it's all anyone talks about. I help teams clean up what they've accumulated
          and build systems that don't become anchors.
        </p>
        <p className="text-neutral-500 text-sm">
          CRM integrations, analytics infrastructure, content systems, and architecture
          that lets teams move fast without leaving a trail of wreckage.
        </p>
      </>
    ),
  },
  {
    title: "Manufacturing & Industrial",
    href: "/industries/manufacturing",
    image: "/images/industries/manufacturing.png",
    description: (
      <>
        <p className="mb-4">
          It's not unusual to find a manufacturer running world-class physical operations
          on software that looks like it was built during the Clinton administration.
          The gap between operational capability and digital infrastructure is a real
          problem — and a solvable one, without blowing everything up to do it.
        </p>
        <p className="text-neutral-500 text-sm">
          Legacy modernization, workflow untangling, and systems that will still be
          standing — and maintainable — long after the project is closed.
        </p>
      </>
    ),
  },
  {
    title: "E-commerce & Digital Products",
    href: "/industries/ecommerce",
    image: "/images/industries/ecommerce.png",
    description: (
      <>
        <p className="mb-4">
          In e-commerce, a slow page isn't a minor inconvenience — it's a sale you
          didn't make. Every second of load time is a customer you lost to a competitor
          with a faster checkout. I fix the things that actually cost you money, with
          data to prove it.
        </p>
        <p className="text-neutral-500 text-sm">
          WordPress, Shopify, headless builds, and performance tuning that holds up
          under real traffic — not just a localhost demo.
        </p>
      </>
    ),
  },
  {
    title: "Internal Tools & Systems",
    href: "/industries/professional-services",
    image: "/images/industries/enterprise.png",
    description: (
      <>
        <p className="mb-4">
          Internal tooling projects have a reputation for taking forever, costing twice
          the budget, and delivering half the scope. I don't run that playbook. Incremental,
          low-risk, and actually shipped — because a working system beats a perfect plan
          that's still in review.
        </p>
        <p className="text-neutral-500 text-sm">
          Audits, stabilization, architectural guidance, and hands-on execution for
          teams tired of consultants who hand off decks instead of working software.
        </p>
      </>
    ),
  },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://blacklabdev.com/industries#webpage",
  name: "Web Development for B2B, Manufacturing & Ecommerce",
  url: "https://blacklabdev.com/industries",
  description:
    "Industry-specific website development for manufacturing, B2B, and ecommerce brands — built for technical buyers and real business outcomes.",
  publisher: { "@type": "Organization", "@id": "https://blacklabdev.com/#business" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://blacklabdev.com/industries" },
    ],
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Industries Served by Black Lab Development",
  url: "https://blacklabdev.com/industries",
  numberOfItems: 6,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Manufacturing & Industrial", url: "https://blacklabdev.com/industries/manufacturing" },
    { "@type": "ListItem", position: 2, name: "B2B & Professional Services", url: "https://blacklabdev.com/industries/professional-services" },
    { "@type": "ListItem", position: 3, name: "Healthcare & Life Sciences", url: "https://blacklabdev.com/industries/healthcare" },
    { "@type": "ListItem", position: 4, name: "SaaS & Technology", url: "https://blacklabdev.com/industries/technology" },
    { "@type": "ListItem", position: 5, name: "Ecommerce & DTC", url: "https://blacklabdev.com/industries/ecommerce" },
    { "@type": "ListItem", position: 6, name: "Education & Training", url: "https://blacklabdev.com/industries/education" },
  ],
};

export default function IndustriesPage() {
  return (
    <main className="w-full bg-[#0b0b0c] text-white">
      <JsonLd data={[webPageSchema, itemListSchema]} />
      {/* ================= HERO ================= */}
      <PageHero
        label="Industries"
        title="Built for Real-World Demands"
        titleHighlight="Real-World Demands"
        description="I've worked across industries where performance matters — not just presentation."
        backgroundImage="/images/industries-hero-bg.png"
        badges={["Regulated environments", "High-traffic systems", "Legacy nightmares survived"]}
      />

      {/* ================= INDUSTRIES ================= */}
      <section className="py-6 md:py-9 relative overflow-hidden">
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(227,245,68,0.20) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Ambient glows */}
        <div className="absolute top-20 -left-40 w-175 h-175 bg-volt-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-20 -right-40 w-150 h-150 bg-volt-600/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-375 px-6">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-6 md:mb-9">
            <div>
              <span className="inline-block mb-3 text-xs tracking-[0.5em] uppercase text-volt-500 font-mono drop-shadow-[0_0_12px_rgba(227,245,68,0.7)]">
                // Industries
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Industries Served
              </h2>
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-volt-500/60 via-volt-500/20 to-transparent" />
          </div>

          <div className="space-y-0">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center py-6 md:py-9 relative ${
                  index < industries.length - 1
                    ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-linear-to-r after:from-transparent after:via-volt-500/20 after:to-transparent"
                    : ""
                }`}
              >
                {/* Giant ghost number */}
                <div
                  className={`absolute text-[18rem] md:text-[22rem] font-black font-mono text-volt-500/3 pointer-events-none leading-none select-none top-0 ${
                    index % 2 === 1 ? "-right-4 text-right" : "-left-4"
                  }`}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Text */}
                <div className={`max-w-xl relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-black font-mono text-volt-500/20 leading-none tracking-tighter">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px w-14 bg-linear-to-r from-volt-500/60 to-volt-500/10 shadow-[0_0_10px_rgba(227,245,68,0.4)]" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-white">
                    {industry.title}
                  </h2>

                  <div className="text-neutral-400 leading-relaxed">
                    {industry.description}
                  </div>
                  {industry.href && (
                    <Link
                      href={industry.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-volt-500 hover:text-volt-400 transition-colors duration-200"
                    >
                      Explore this vertical
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>

                {/* Image */}
                <div
                  className={`group relative h-95 w-full rounded-xl overflow-hidden border border-volt-500/20 shadow-[0_0_50px_rgba(227,245,68,0.08)] transition-all duration-500 hover:border-volt-500/50 hover:shadow-[0_0_100px_rgba(227,245,68,0.20)] ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover opacity-65 group-hover:opacity-90 group-hover:scale-[1.05] transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-black/65 via-black/20 to-volt-900/10 group-hover:to-volt-900/25 transition-all duration-500" />
                  <div
                    className="absolute inset-0 opacity-[0.08] pointer-events-none"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)",
                    }}
                  />
                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/40 to-transparent group-hover:via-volt-500/80 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/15 to-transparent group-hover:via-volt-500/50 transition-all duration-500" />
                  <div className="absolute top-0 right-0 w-40 h-40 bg-volt-500/10 blur-3xl rounded-full group-hover:bg-volt-500/25 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-volt-600/8 blur-2xl rounded-full group-hover:bg-volt-500/20 transition-all duration-500" />
                  <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-volt-500/40 group-hover:border-volt-400 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-volt-500/40 group-hover:border-volt-400 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-volt-500/40 group-hover:border-volt-400 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-volt-500/40 group-hover:border-volt-400 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    <span className="text-xs font-mono tracking-[0.3em] uppercase text-volt-400 drop-shadow-[0_0_12px_rgba(227,245,68,0.9)]">
                      {industry.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FounderByline />

      {/* ================= CLOSE ================= */}
      <PageClose
        title="Industries Change. Bad Engineering Stays Bad."
        bodyPrimary="The underlying problems look different in every sector, but they're usually the same problem: systems that weren't built to last, teams that inherited a mess, and platforms being asked to do more than they were designed for."
        bodySecondary="Cross-industry experience means solving the actual problem — not just the one that matches your sector's standard playbook."
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />
    </main>
  );
}
