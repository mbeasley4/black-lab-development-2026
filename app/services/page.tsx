import Image from "next/image"
import PageHero from "@/components/PageHero"
import PageClose from "@/components/PageClose"

export const metadata = {
  title: "Engineering Services | Black Lab Development",
  description:
    "Senior-led web development, software engineering, performance optimization, and system integration services for production-grade digital platforms.",
};

const services = [
  {
    title: "Custom Web Development",
    image: "/images/services/web-development.png",
    description: (
      <>
        <p className="mb-4">
          Design and development of custom websites and web applications built
          to support real business needs. This work goes beyond templates,
          focusing on architecture, performance, and long-term maintainability.
        </p>
        <p className="text-neutral-500 text-sm">
          Common platforms include WordPress, headless CMS, Shopify, and custom
          frameworks depending on the problem being solved.
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
          Hands-on engineering support for complex systems, including backend
          development, API design, data modeling, and application architecture.
          Engagements often involve stabilizing or extending existing systems.
        </p>
        <p className="text-neutral-500 text-sm">
          Focus areas include scalability, reliability, security, and clarity
          for teams that need systems they can trust.
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
          Improving page speed, Core Web Vitals, search visibility, and overall
          platform performance. Work is data-driven and tied directly to user
          experience and conversion outcomes.
        </p>
        <p className="text-neutral-500 text-sm">
          Typical efforts include performance audits, SEO remediation,
          accessibility improvements, and ongoing optimization.
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
          Building and maintaining integrations between websites, CRMs,
          marketing platforms, analytics tools, and third-party services.
          The goal is reducing manual work and improving data flow.
        </p>
        <p className="text-neutral-500 text-sm">
          Common integrations include HubSpot, Marketo, Salesforce, ActiveCampaign,
          Stripe, and custom APIs.
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
          Providing senior-level technical oversight for teams that need clarity
          around architecture, tooling, and long-term direction. This often
          starts with a detailed audit and practical recommendations.
        </p>
        <p className="text-neutral-500 text-sm">
          Ideal for organizations replacing vendors, inheriting legacy systems,
          or preparing for growth.
        </p>
      </>
    ),
  },
];

export default function ServicesPage() {
  return (
    <main className="w-full bg-black text-white">
      {/* ================= HERO ================= */}
      <PageHero
        label="Services"
        title="Senior-Led Engineering Services"
        titleHighlight="Engineering"
        description="Black Lab Development delivers hands-on engineering support built for long-term performance and maintainability."
        backgroundImage="/images/services-hero-bg.png"
        badges={["Hands-on execution", "Production systems", "No templates"]}
      />


      {/* ================= SERVICES ================= */}
      <section className="py-32 relative overflow-hidden">
        {/* Ambient neon glows */}
        <div className="absolute top-40 -left-20 w-175 h-175 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-40 -right-20 w-125 h-125 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-[1500px] px-6">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-white">What We Do</h2>
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-cyan-500/40 via-cyan-500/10 to-transparent" />
          </div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20 relative ${
                  index < services.length - 1
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
                    {service.title}
                  </h2>

                  <div className="text-neutral-400 leading-relaxed">
                    {service.description}
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`group relative h-80 w-full rounded-xl overflow-hidden border border-neutral-800 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_50px_rgba(6,182,212,0.12)] ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  {/* Neon tint overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-black/50 via-black/20 to-cyan-900/10 group-hover:to-cyan-900/25 transition-all duration-500" />
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/60 transition-all duration-500" />
                  {/* Service label overlay */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-mono tracking-[0.2em] uppercase text-cyan-400/80">
                      {service.title}
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
        title="Services Designed for Real Systems"
        bodyPrimary="Not every project needs a full rebuild. Not every problem needs a new stack. Black Lab Development focuses on the work that actually moves systems forward — with clear tradeoffs and practical decisions."
        bodySecondary="If you need a senior engineer who can step into complex systems, identify real issues, and execute effectively, these services are designed for that kind of work."
        secondaryHref="/work"
        secondaryLabel="View Work"
      />

    </main>
  );
}
