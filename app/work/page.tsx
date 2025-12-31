import Image from "next/image";

export const metadata = {
  title: "Work | Black Lab Development",
  description:
    "Selected work from Black Lab Development across healthcare, SaaS, e-commerce, and enterprise platforms. Senior-led engineering focused on real-world production systems.",
};

const projects = [
  {
    name: "Whole30",
    logo: "/images/work/whole30-logo.png",
    screenshot: "/images/work/whole30-screenshot.png",
    summary:
      "Ongoing engineering and platform optimization for a high-traffic consumer brand with complex content, SEO, and performance requirements.",
    details: [
      "Custom WordPress architecture",
      "SEO & Core Web Vitals optimization",
      "High-traffic performance tuning",
      "Custom tooling and integrations",
    ],
  },
  {
    name: "Frisch’s Big Boy",
    logo: "/images/work/frischs-logo.png",
    screenshot: "/images/work/frischs-screenshot.jpg",
    summary:
      "Modernization and long-term support of a multi-location restaurant platform with legacy constraints and ongoing operational needs.",
    details: [
      "Custom WordPress development",
      "Location & content management systems",
      "Performance and reliability improvements",
      "Ongoing platform support",
    ],
  },
  {
    name: "Haag-Streit USA",
    logo: "/images/work/haag-streit-logo.png",
    screenshot: "/images/work/haag-streit-screenshot.jpg",
    summary:
      "Enterprise web platform and marketing automation support for a medical device manufacturer operating in regulated environments.",
    details: [
      "Enterprise WordPress platform",
      "CRM & marketing automation integrations",
      "SEO and performance improvements",
      "Long-term technical stewardship",
    ],
  },
  {
    name: "FAZTEK",
    logo: "/images/work/faztek-logo.png",
    screenshot: "/images/work/faztek-screenshot.jpg",
    summary:
      "Engineering support for a fintech platform requiring reliability, scalability, and clean integration between systems.",
    details: [
      "Enterprise WordPress platform",
      "CRM & marketing automation integrations",
      "SEO and performance improvements",
      "Long-term technical stewardship",
    ],
  },
  {
    name: "Epoxies",
    logo: "/images/work/epoxies-logo.png",
    screenshot: "/images/work/epoxies-screenshot.jpg",
    summary:
      "Engineering support for a fintech platform requiring reliability, scalability, and clean integration between systems.",
    details: [
      "Enterprise WordPress platform",
      "CRM & marketing automation integrations",
      "SEO and performance improvements",
      "Long-term technical stewardship",
    ],
  },
  {
    name: "Enduir Cybersecurity",
    logo: "/images/work/enduir-logo.png",
    screenshot: "/images/work/enduir-screenshot.jpg",
    summary:
      "Engineering support for a fintech platform requiring reliability, scalability, and clean integration between systems.",
    details: [
      "Drupal development",
      "Performance optimization",
      "Technical leadership and execution",
    ],
  },
  {
    name: "Melink Solar",
    logo: "/images/work/melink-logo.png",
    screenshot: "/images/work/melink-screenshot.jpg",
    summary:
      "Engineering support for a fintech platform requiring reliability, scalability, and clean integration between systems.",
    details: [
      "Custom WordPress Plugin",
      "API Integration",
      "Technical leadership and execution",
    ],
  },
  {
    name: "Mona Dermatology",
    logo: "/images/work/mona-logo.png",
    screenshot: "/images/work/mona-screenshot.png",
    summary:
      "Engineering support for a fintech platform requiring reliability, scalability, and clean integration between systems.",
    details: [
      "Custom WordPress Plugin",
      "API Integration",
      "Technical leadership and execution",
    ],
  },
  {
    name: "Luma Financial Technologies",
    logo: "/images/work/luma-logo.png",
    screenshot: "/images/work/luma-screenshot.png",
    summary:
      "Engineering support for a fintech platform requiring reliability, scalability, and clean integration between systems.",
    details: [
      "API integrations",
      "WordPress Plugin Development"
    ],
  },
];

export default function WorkPage() {
  return (
    <main className="w-full bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-neutral-900">
        {/* Background layers */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/work-hero-bg.png')",
            }}
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 h-[450px] flex items-center">
          <div className="mx-auto max-w-[1500px] px-6">
            <div className="max-w-12xl">
              <span className="inline-block mb-6 text-xs tracking-[0.3em] uppercase text-neutral-500">
                Work
              </span>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Production Systems, Not Portfolio Pieces
              </h1>

              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                Selected work across healthcare, SaaS, e-commerce, and enterprise
                platforms. These are real systems with real users, traffic, and
                long-term operational responsibility.
              </p>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-neutral-400">
                <span>High-traffic platforms</span>
                <span className="opacity-40">/</span>
                <span>Long-term ownership</span>
                <span className="opacity-40">/</span>
                <span>Senior-led execution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORK ================= */}
      <section className="py-32">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950"
              >
                {/* Screenshot */}
                <div className="relative h-[260px] w-full">
                  <Image
                    src={project.screenshot}
                    alt={`${project.name} screenshot`}
                    fill
                    className="object-cover object-top opacity-90 transition group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Logo */}
                  <div className="mb-4 h-8 flex items-center">
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      height={20}
                      width={100}
                      className="object-contain opacity-90"
                    />
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  <ul className="space-y-1 text-neutral-500 text-xs list-disc list-inside">
                    {project.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
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
              Work Built for the Long Term
            </h2>

            <p className="text-neutral-300 leading-relaxed mb-6">
              Many of these platforms have been supported and evolved over multiple
              years — not just launched and abandoned. The focus is always on
              stability, clarity, and systems that continue to perform as business
              needs change.
            </p>

            <p className="text-neutral-300 leading-relaxed mb-10">
              If you’re looking for a development partner who understands the
              responsibility that comes with production systems, this is the kind of
              work Black Lab Development is built around.
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
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
