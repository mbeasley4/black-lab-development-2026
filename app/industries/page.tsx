import Image from "next/image"
import PageHero from "@/components/PageHero"
import PageClose from "@/components/PageClose"

export const metadata = {
  title: "Industries | Black Lab Development",
  description:
    "Black Lab Development works across healthcare, SaaS, manufacturing, e-commerce, and enterprise platforms—building scalable, production-grade digital systems shaped by real-world constraints.",
};

const industries = [
  {
    title: "Healthcare & Medical",
    image: "/images/industries/healthcare.png",
    description: (
      <>
        <p className="mb-4">
          Experience supporting healthcare organizations and medical platforms
          where reliability, accuracy, and long-term maintainability are
          non-negotiable. Work often involves regulated environments, legacy
          systems, and complex integrations.
        </p>
        <p className="text-neutral-500 text-sm">
          Common work includes custom CMS platforms, performance optimization,
          integrations, and long-term technical stewardship.
        </p>
      </>
    ),
  },
  {
    title: "SaaS & Technology Platforms",
    image: "/images/industries/saas.png",
    description: (
      <>
        <p className="mb-4">
          Building and modernizing SaaS platforms that need to scale alongside
          product growth. Emphasis is placed on clean architecture, performance,
          and avoiding technical debt that slows teams down over time.
        </p>
        <p className="text-neutral-500 text-sm">
          Typical challenges include CRM integrations, analytics, and content
          systems that support rapid iteration.
        </p>
      </>
    ),
  },
  {
    title: "Manufacturing & Industrial",
    image: "/images/industries/manufacturing.png",
    description: (
      <>
        <p className="mb-4">
          Supporting manufacturers and industrial companies with digital
          platforms that are often mission-critical but historically
          underinvested. Work frequently involves untangling legacy workflows
          and modernizing infrastructure.
        </p>
        <p className="text-neutral-500 text-sm">
          Focus areas include reliability, clarity, and systems that remain
          maintainable long after launch.
        </p>
      </>
    ),
  },
  {
    title: "E-commerce & Digital Products",
    image: "/images/industries/ecommerce.png",
    description: (
      <>
        <p className="mb-4">
          High-traffic e-commerce platforms where performance, SEO, and
          conversion directly impact revenue. Experience includes custom themes,
          headless builds, and performance tuning under real customer load.
        </p>
        <p className="text-neutral-500 text-sm">
          Platforms commonly include WordPress, Shopify, and custom integrations
          with marketing and fulfillment systems.
        </p>
      </>
    ),
  },
  {
    title: "Enterprise & Internal Systems",
    image: "/images/industries/enterprise.png",
    description: (
      <>
        <p className="mb-4">
          Working within enterprise environments where incremental, low-risk
          improvements are often preferred over disruptive rewrites. These
          projects require careful coordination and long-term thinking.
        </p>
        <p className="text-neutral-500 text-sm">
          This includes audits, stabilization, architectural guidance, and
          hands-on execution.
        </p>
      </>
    ),
  },
];

export default function IndustriesPage() {
  return (
    <main className="w-full bg-black text-white">
      {/* ================= HERO ================= */}
      <PageHero
        label="Industries"
        title="Experience Across Real-World Systems"
        titleHighlight="Real-World Systems"
        description="Industry experience shaped by production systems, real users, and long-term responsibility — not templates or theoretical architectures."
        backgroundImage="/images/industries-hero-bg.png"
        badges={["Enterprise platforms", "Regulated environments", "High-traffic systems"]}
      />



      {/* ================= INDUSTRIES ================= */}
      <section className="py-32 relative overflow-hidden">
        {/* Ambient neon glows */}
        <div className="absolute top-40 -left-20 w-175 h-175 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-40 -right-20 w-125 h-125 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-[1500px] px-6">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-white">Industries Served</h2>
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-cyan-500/40 via-cyan-500/10 to-transparent" />
          </div>

          <div className="space-y-0">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20 relative ${
                  index < industries.length - 1
                    ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-linear-to-r after:from-transparent after:via-neutral-800 after:to-transparent"
                    : ""
                }`}
              >
                {/* Text */}
                <div className={`max-w-xl ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  {/* Eyebrow */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-mono tracking-[0.3em] text-cyan-500/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px w-8 bg-cyan-500/40" />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-medium mb-5 text-white">
                    {industry.title}
                  </h2>

                  <div className="text-neutral-400 leading-relaxed">
                    {industry.description}
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`group relative h-90 w-full rounded-xl overflow-hidden border border-neutral-800 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_50px_rgba(6,182,212,0.12)] ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  {/* Neon tint overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-black/50 via-black/20 to-cyan-900/10 group-hover:to-cyan-900/25 transition-all duration-500" />
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/60 transition-all duration-500" />
                  {/* Industry label overlay */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-mono tracking-[0.2em] uppercase text-cyan-400/80">
                      {industry.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLOSE ================= */}
      <PageClose
        title="Industry Experience Without Industry Lock-In"
        bodyPrimary="While each industry comes with its own constraints, the underlying challenges tend to be the same: performance, maintainability, and systems that continue to hold up as real usage and complexity grow."
        bodySecondary="Black Lab Development brings cross-industry experience without forcing one-size-fits-all solutions — focusing instead on what actually works for your platform."
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />

    </main>
  );
}
