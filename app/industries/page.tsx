import Image from "next/image";

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
      <section className="relative overflow-hidden border-b border-neutral-900">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/industries-hero-bg.png')" }}
          />
          <div className="absolute inset-0 bg-black/78" />
        </div>

        <div className="relative z-10 h-[450px] flex items-center">
          <div className="mx-auto max-w-[1500px] px-6 w-full">
            <div className="max-w-6xl">
              <span className="inline-block mb-6 text-xs tracking-[0.3em] uppercase text-neutral-500">
                Industries
              </span>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Experience Across Real-World Systems
              </h1>

              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                Industry experience shaped by production systems, real users, and
                long-term responsibility — not templates or theoretical architectures.
              </p>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-neutral-400">
                <span>Enterprise platforms</span>
                <span className="opacity-40">/</span>
                <span>Regulated environments</span>
                <span className="opacity-40">/</span>
                <span>High-traffic systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= INDUSTRIES ================= */}
      <section className="py-32">
        <div className="mx-auto max-w-[1500px] px-6 space-y-32">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* Text */}
              <div
                className={`max-w-xl ${index % 2 === 1 ? "lg:order-2" : ""
                  }`}
              >
                <h2 className="text-2xl md:text-3xl font-medium mb-4">
                  {industry.title}
                </h2>

                <div className="text-neutral-400 leading-relaxed">
                  {industry.description}
                </div>
              </div>

              {/* Image */}
              <div
                className={`relative h-[320px] w-full rounded-xl overflow-hidden border border-neutral-800 ${index % 2 === 1 ? "lg:order-1" : ""
                  }`}
              >
                <Image
                  src={industry.image}
                  alt={industry.title}
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
      <section className="relative overflow-hidden border-t border-neutral-800 py-28">
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
              Industry Experience Without Industry Lock-In
            </h2>

            <p className="text-neutral-300 leading-relaxed mb-6">
              While each industry comes with its own constraints, the underlying
              challenges tend to be the same: performance, maintainability, and
              systems that continue to hold up as real usage and complexity grow.
            </p>

            <p className="text-neutral-300 leading-relaxed mb-10">
              Black Lab Development brings cross-industry experience without forcing
              one-size-fits-all solutions — focusing instead on what actually works
              for your platform.
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
                href="/services"
                className="text-sm text-neutral-400 underline underline-offset-4 hover:text-neutral-200 transition"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
