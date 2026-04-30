import Image from "next/image"
import Link from "next/link"
import PageHero from "@/components/PageHero"
import PageClose from "@/components/PageClose"
import CaseStudies from "@/components/CaseStudies";

export const metadata = {
  title: "B2B Web Development & Conversion Optimization Services | Black Lab Dev",
  description:
    "Senior-led web development, conversion optimization, and platform engineering built for performance, scalability, and real business impact.",
};

const services = [
  {
    title: "Custom Web Development",
    image: "/images/services/web-development.png",
    description: (
      <>
        <p className="mb-4">
          If your current site was born from a template and raised by a page builder,
          it's probably already showing its limits. I build from the architecture out —
          custom, deliberate, and designed to last longer than the next platform trend.
        </p>
        <p className="text-neutral-500 text-sm">
          WordPress, headless CMS, Shopify, or fully custom — the right tool for
          the problem, not the one I already had open.
        </p>
      </>
    ),
  },
  {
    title: "Software Engineering & Architecture",
    image: "/images/services/software-architecture.png",
    description: (
      <>
        <p className="mb-4">
          Someone has to actually read the codebase before touching it. That's the job.
          Backend development, API design, data modeling, and architecture decisions made
          by an engineer who's accountable for the outcome — not just the sprint velocity.
        </p>
        <p className="text-neutral-500 text-sm">
          Reliability, security, and systems your team won't dread opening — for when
          "we'll fix it later" has quietly become a load-bearing wall.
        </p>
      </>
    ),
  },
  {
    title: "Performance, SEO & Optimization",
    image: "/images/services/performance-seo.png",
    description: (
      <>
        <p className="mb-4">
          A slow site isn't a cosmetic problem — it's revenue walking out the door.
          I dig into the actual numbers, fix what's broken at the source, and measure
          the difference. No vague recommendations. No findings buried in a PDF.
        </p>
        <p className="text-neutral-500 text-sm">
          Core Web Vitals, SEO remediation, accessibility, and performance audits —
          real improvements with data attached, not a report you file away and forget.
        </p>
      </>
    ),
  },
  {
    title: "Integrations & Automation",
    image: "/images/services/integrations.png",
    description: (
      <>
        <p className="mb-4">
          If someone on your team is copy-pasting between platforms to keep the data
          straight, that's a technical problem with a technical solution. I build the
          connections that make systems actually talk to each other — and stay talking.
        </p>
        <p className="text-neutral-500 text-sm">
          HubSpot, Salesforce, Marketo, Stripe, and whatever else is in the stack —
          clean integrations that don't require babysitting.
        </p>
      </>
    ),
  },
  {
    title: "Platform Audits & Technical Leadership",
    image: "/images/services/technical-leadership.png",
    description: (
      <>
        <p className="mb-4">
          Before you burn it down and rebuild, it's worth knowing what you actually have.
          I dig into existing systems, surface the real problems, and tell you plainly
          what to fix, what to leave alone, and what's quietly on fire.
        </p>
        <p className="text-neutral-500 text-sm">
          The go-to for teams replacing vendors, inheriting a mess, or tired of making
          expensive guesses about their own infrastructure.
        </p>
      </>
    ),
  },
];

export default function ServicesPage() {
  return (
    <main className="w-full bg-[#0b0b0c] text-white">
      {/* ================= HERO ================= */}
      <PageHero
        label="Services"
        title="Engineering That Ships and Holds"
        titleHighlight="Ships and Holds"
        description="I build things that work in production — not just in a demo. Senior-led, hands-on, and allergic to solutions that look great until they don't."
        backgroundImage="/images/services-hero-bg.png"
        badges={["No templates", "No offshore handoffs", "No 40-slide decks"]}
      />

      {/* ================= B2B CORE SERVICES ================= */}
      <section className="py-16 border-b border-amber-500/8 bg-[#111214]/50">
        <div className="mx-auto max-w-375 px-6">
          <div className="mb-10">
            <span className="inline-block mb-3 text-xs tracking-[0.3em] uppercase text-amber-500 font-semibold">
              B2B Specializations
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Revenue-Focused Service Lines</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "B2B Website Design",
                href: "/services/b2b-website-design",
                description: "Conversion architecture built for long sales cycles and multiple buying-committee stakeholders.",
                color: "amber",
              },
              {
                label: "Conversion Optimization",
                href: "/services/conversion-optimization",
                description: "Audit, diagnose, and fix exactly why your site isn't generating qualified leads.",
                color: "blue",
              },
              {
                label: "Manufacturing Websites",
                href: "/services/manufacturing-website-design",
                description: "Industry-specific design for engineers, procurement, and operations buyers — built to generate RFQs.",
                color: "amber",
              },
            ].map((s) => {
              const border = s.color === "amber" ? "hover:border-amber-500/50" : "hover:border-blue-500/50";
              const text = s.color === "amber" ? "text-amber-500" : "text-blue-400";
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  className={`group rounded-xl border border-slate-800 bg-slate-900/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${border} flex flex-col`}
                >
                  <span className={`text-xs uppercase tracking-widest font-semibold mb-3 ${text}`}>{s.label}</span>
                  <p className="text-sm text-slate-400 leading-relaxed grow group-hover:text-slate-300 transition-colors duration-200">{s.description}</p>
                  <div className={`flex items-center gap-2 mt-5 text-sm font-semibold ${text}`}>
                    <span>Learn more</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-6 md:py-9 relative overflow-hidden">
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(245,158,11,0.20) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Ambient glows */}
        <div className="absolute top-20 -left-40 w-175 h-175 bg-amber-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-20 -right-40 w-150 h-150 bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-375 px-6">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-6 md:mb-9">
            <div>
              <span className="inline-block mb-3 text-xs tracking-[0.5em] uppercase text-amber-500 font-mono drop-shadow-[0_0_12px_rgba(245,158,11,0.7)]">
                // Services
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                What I Do
              </h2>
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-amber-500/60 via-amber-500/20 to-transparent" />
          </div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center py-6 md:py-9 relative ${
                  index < services.length - 1
                    ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-linear-to-r after:from-transparent after:via-amber-500/20 after:to-transparent"
                    : ""
                }`}
              >
                {/* Giant ghost number */}
                <div
                  className={`absolute text-[18rem] md:text-[22rem] font-black font-mono text-amber-500/3 pointer-events-none leading-none select-none top-0 ${
                    index % 2 === 1 ? "-right-4 text-right" : "-left-4"
                  }`}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Text */}
                <div className={`max-w-xl relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-black font-mono text-amber-500/20 leading-none tracking-tighter">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px w-14 bg-linear-to-r from-amber-500/60 to-amber-500/10 shadow-[0_0_10px_rgba(245,158,11,0.4)]" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-white">
                    {service.title}
                  </h2>

                  <div className="text-neutral-400 leading-relaxed">
                    {service.description}
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`group relative h-95 w-full rounded-xl overflow-hidden border border-amber-500/20 shadow-[0_0_50px_rgba(245,158,11,0.08)] transition-all duration-500 hover:border-amber-500/50 hover:shadow-[0_0_100px_rgba(245,158,11,0.20)] ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-65 group-hover:opacity-90 group-hover:scale-[1.05] transition-all duration-700"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-black/65 via-black/20 to-amber-900/10 group-hover:to-amber-900/25 transition-all duration-500" />
                  {/* Scanline texture */}
                  <div
                    className="absolute inset-0 opacity-[0.08] pointer-events-none"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)",
                    }}
                  />
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/40 to-transparent group-hover:via-amber-500/80 transition-all duration-500" />
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/15 to-transparent group-hover:via-amber-500/50 transition-all duration-500" />
                  {/* Corner glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 blur-3xl rounded-full group-hover:bg-amber-500/25 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-blue-600/8 blur-2xl rounded-full group-hover:bg-blue-500/20 transition-all duration-500" />
                  {/* Corner brackets */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-amber-500/40 group-hover:border-amber-400 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-amber-500/40 group-hover:border-amber-400 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-amber-500/40 group-hover:border-amber-400 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-amber-500/40 group-hover:border-amber-400 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  {/* Service label on hover */}
                  <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.9)]">
                      {service.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CaseStudies />

      {/* ================= CLOSE ================= */}
      <PageClose
        title="No Roadmaps to Nowhere"
        bodyPrimary="Not every problem is a rebuild. Not every slowdown needs a new framework. The best engineering decisions match the actual problem — not the fashionable solution, not the vendor pitch, not whatever worked at the last job."
        bodySecondary="If you want someone who will dig in, tell you what's actually wrong, and do the work — not just draft a proposal — that's what these services are for."
        secondaryHref="/work"
        secondaryLabel="View Work"
      />
    </main>
  );
}
