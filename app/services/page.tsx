import Image from "next/image";

export const metadata = {
  title: "Services | Black Lab Development",
  description:
    "Black Lab Development provides senior-led web development, software engineering, performance optimization, and system integration services for production-grade digital platforms.",
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
      <section className="relative overflow-hidden border-b border-neutral-900">
        {/* Background layers */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/services-hero-bg.png')",
            }}
          />
          <div className="absolute inset-0 bg-black/78" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 h-[450px] flex items-center">
          <div className="mx-auto max-w-[1500px] px-6 w-full">
            <div className="max-w-5xl">
              <span className="inline-block mb-6 text-xs tracking-[0.3em] uppercase text-neutral-500">
                Services
              </span>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Senior-Led Engineering Services
              </h1>

              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                Black Lab Development provides hands-on engineering support for teams
                that need more than surface-level execution. Every service is delivered
                with long-term performance, maintainability, and accountability in
                mind.
              </p>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-neutral-400">
                <span>Hands-on execution</span>
                <span className="opacity-40">/</span>
                <span>Production systems</span>
                <span className="opacity-40">/</span>
                <span>No templates</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section className="py-32">
        <div className="mx-auto max-w-[1500px] px-6 space-y-32">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* Text */}
              <div
                className={`max-w-xl ${index % 2 === 1 ? "lg:order-2" : ""
                  }`}
              >
                <h2 className="text-2xl md:text-3xl font-medium mb-4">
                  {service.title}
                </h2>

                <div className="text-neutral-400 leading-relaxed">
                  {service.description}
                </div>
              </div>

              {/* Image */}
              <div
                className={`relative h-[320px] w-full rounded-xl overflow-hidden border border-neutral-800 ${index % 2 === 1 ? "lg:order-1" : ""
                  }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CLOSE ================= */}
      <section className="relative overflow-hidden border-t border-neutral-900 py-28">
        {/* Background layers */}
        <div className="absolute inset-0">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/close-bg.png')",
            }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/85" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1500px] px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-2xl md:text-5xl font-bold mb-6">
              Services Designed for Real Systems
            </h2>

            <p className="text-neutral-300 leading-relaxed mb-6">
              Not every project needs a full rebuild. Not every problem needs a new
              stack. Black Lab Development focuses on the work that actually moves
              systems forward — with clear tradeoffs and practical decisions.
            </p>

            <p className="text-neutral-300 leading-relaxed mb-10">
              If you need a senior engineer who can step into complex systems,
              identify real issues, and execute effectively, these services are
              designed for that kind of work.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap justify-center items-center gap-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white text-black px-6 py-3 text-sm font-medium transition hover:bg-neutral-200"
              >
                Start a Conversation
              </a>

              <a
                href="/work"
                className="text-sm text-neutral-400 underline underline-offset-4 hover:text-neutral-200 transition"
              >
                View Work
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
