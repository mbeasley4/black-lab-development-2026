import Image from "next/image"
import Link from "next/link"
import DemoSection from "@/components/DemoSection"
import PageHero from "@/components/PageHero"
import PageClose from "@/components/PageClose"

export const metadata = {
  title: "Client Work & Case Studies | Black Lab Development",
  description:
    "Selected client work across healthcare, SaaS, e-commerce, and enterprise platforms. Senior-led engineering delivering production systems built for the long term.",
};

const projects = [
  {
    name: "The Shortening Shuttle",
    logo: "/images/work/shortening-shuttle-logo.png",
    screenshot: "/images/work/shortening-shuttle-screenshot.png",
    summary:
      "Built a custom Shopify storefront for a specialty food brand using Liquid templating and Tailwind CSS, featuring a dynamic oil savings calculator to drive customer engagement and conversions.",
    details: [
      "Custom Shopify theme development with Liquid",
      "Tailwind CSS styling and responsive layout",
      "Interactive oil savings calculator built in JavaScript",
      "Product page and collection template customization",
      "Brand-aligned UI with performance optimization",
    ],
  },
  {
    name: "Blum Media Group",
    logo: "/images/work/blum-logo.png",
    screenshot: "/images/work/blum-screenshot.png",
    summary:
      "Designed and developed a modern, high-performance marketing website using Next.js and Vercel for fast load times, scalability, and streamlined content delivery.",
    details: [
      "Next.js application development",
      "Vercel hosting and deployment pipeline",
      "Performance and SEO optimization",
      "Responsive UI and component-based architecture",
    ],
  },
  {
    name: "Buzzworthy",
    logo: "/images/work/buzzworthy-logo.png",
    screenshot: "/images/work/buzzworthy-screenshot.png",
    summary:
      "Designed and developed a dynamic news and storytelling hub for Seven Hills School, showcasing student achievements, faculty insights, and school events through a structured, engaging, and easily navigable WordPress experience.",
    details: [
      "Custom WordPress templates for news articles and editorial content",
      "Responsive, mobile-first layout for accessible reading across all devices",
      "Optimized performance and usability to highlight ongoing student achievements and school updates",
    ],
  },
  {
    name: "Seven Hills School",
    logo: "/images/work/7hills-logo-v2.png",
    screenshot: "/images/work/7hills-screenshot.jpg",
    summary:
      "Designed and built a custom interactive campus map plugin for WordPress, delivering an intuitive user experience backed by performant PHP and JavaScript architecture.",
    details: [
      "Custom WordPress plugin development",
      "Interactive map UI built with JavaScript",
      "Dynamic data management via WordPress admin",
      "Performance-optimized PHP backend integration",
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
      "Ongoing WordPress engineering and WooCommerce support to maintain a reliable, high-performing patient and product experience.",
    details: [
      "WordPress maintenance and feature development",
      "WooCommerce configuration and support",
      "Performance, security, and reliability improvements",
    ],
  },
  {
    name: "Zero Gravity",
    logo: "/images/work/zerogravity-logo.png",
    screenshot: "/images/work/zerogravity-screenshot.png",
    summary:
      "Modernized a WordPress-based digital presence through Elementor cleanup, technical SEO improvements, and eCommerce support to enhance performance and user experience.",
    details: [
      "Elementor structure and styling refactor",
      "Technical SEO and site health optimization",
      "Page speed and Core Web Vitals improvements",
      "WooCommerce configuration and support",
    ],
  },
  {
    name: "Plastech Molding",
    logo: "/images/work/plastechmold-logo.png",
    screenshot: "/images/work/plastechmold-screenshot.png",
    summary:
      "Built and maintained a custom WordPress theme delivering a responsive, search-optimized website to support manufacturing brand visibility and lead generation.",
    details: [
      "Custom WordPress theme development",
      "Responsive design implementation",
      "SEO and site health optimization",
      "Ongoing development and support",
    ],
  },
  {
    name: "Luma Financial Technologies",
    logo: "/images/work/luma-logo.png",
    screenshot: "/images/work/luma-screenshot.png",
    summary:
      "Engineering support for a fintech platform requiring reliability, scalability, and clean integration between systems.",
    details: ["API integrations", "WordPress Plugin Development"],
  },
];

export default function WorkPage() {
  return (
    <main className="w-full bg-black text-white">
      {/* ================= HERO ================= */}
      <PageHero
        label="Work"
        title="Live Systems. Real Experiments. No Filler."
        titleHighlight="Real Experiments."
        description="Live production systems paired with deliberate demos built to test ideas and push architectures across healthcare, SaaS, e-commerce, and enterprise."
        backgroundImage="/images/work-hero-bg.png"
        badges={["Live traffic", "Long-term ownership", "Senior-led delivery"]}
      />
      {/* ================= FEATURED CASE STUDY ================= */}
      <section className="py-12 border-b border-slate-800 bg-slate-950/50">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="mb-8">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
              Featured Case Study
            </span>
          </div>
          <Link
            href="/work/ecommerce-website-redesign-increase-aov"
            className="group block rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content */}
              <div className="p-10 flex flex-col justify-center">
                <span className="inline-block text-xs uppercase tracking-widest text-slate-500 mb-4">eCommerce Redesign</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug group-hover:text-cyan-300 transition-colors duration-300">
                  eCommerce Website Redesign That Increased AOV 164% in 7 Days
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Most redesigns chase traffic. This one engineered buyer behavior — and moved the revenue numbers that actually matter, visible within a week of launch.
                </p>
                <div className="flex flex-wrap gap-6 mb-8">
                  {[
                    { metric: "+164%", label: "AOV" },
                    { metric: "+88%", label: "Revenue" },
                    { metric: "+320%", label: "Returning Customers" },
                    { metric: "+56%", label: "Conversion Rate" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-xl font-black text-cyan-400">{s.metric}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:gap-3 transition-all duration-200">
                  <span>Read the full case study</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              {/* Visual accent */}
              <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-cyan-950/50 via-blue-950/40 to-slate-900/50 p-10 border-l border-slate-800">
                <div className="text-center">
                  <div className="text-8xl font-black bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
                    +164%
                  </div>
                  <div className="text-slate-400 text-sm uppercase tracking-widest">Average Order Value</div>
                  <div className="text-slate-600 text-xs mt-2">in 7 days post-launch</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ================= Demo ================= */}
      <DemoSection />
      {/* ================= WORK ================= */}
      <section className="py-6 md:py-9 relative overflow-hidden">
        {/* Ambient neon glows — layered cyan + purple + blue */}
        <div className="absolute top-0 left-1/4 w-175 h-175 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/5 w-125 h-125 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-150 h-150 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="mx-auto max-w-[1500px] px-6 relative">
          {/* Section header */}
          <div className="mb-8 md:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)]" />
              {projects.length} Projects
            </span>
            <h2 className="text-5xl font-extrabold tracking-tight text-white">
              Client{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500">
                Work
              </span>
            </h2>
            <div className="mt-5 h-px w-64 bg-linear-to-r from-cyan-500/70 via-blue-500/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group flex flex-col rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 transition-all duration-300 hover:border-cyan-500/55 hover:shadow-[0_0_60px_rgba(6,182,212,0.13)]"
              >
                {/* Top accent line */}
                <div className="h-0.5 bg-linear-to-r from-purple-500/0 via-cyan-500/25 to-blue-500/0 group-hover:from-purple-500/50 group-hover:via-cyan-400/90 group-hover:to-blue-500/50 transition-all duration-500" />

                {/* Screenshot */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={project.screenshot}
                    alt={`${project.name} screenshot`}
                    fill
                    className="object-cover object-top opacity-90 group-hover:scale-[1.03] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-950/85 via-neutral-950/20 to-transparent" />
                  <div className="absolute inset-0 group-hover:bg-cyan-950/10 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-neutral-950 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  {/* Logo + name */}
                  <div className="mb-4 flex flex-col gap-1.5">
                    <div className="h-7 flex items-center">
                      <Image
                        src={project.logo}
                        alt={`${project.name} logo`}
                        height={20}
                        width={110}
                        className="object-contain object-left opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-neutral-600">
                      {project.name}
                    </span>
                  </div>

                  <p className="text-neutral-300 text-sm leading-relaxed mb-5 grow">
                    {project.summary}
                  </p>

                  <ul className="space-y-2 text-xs mt-auto border-t border-neutral-800/70 pt-4">
                    {project.details.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-neutral-400 group-hover:text-neutral-300 transition-colors duration-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_5px_rgba(6,182,212,0.65)] group-hover:shadow-[0_0_8px_rgba(6,182,212,1)] shrink-0 transition-all duration-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLOSE ================= */}
      <PageClose
        title="Work Built for the Long Term"
        bodyPrimary="Many of these platforms have been supported and evolved over multiple years — not just launched and abandoned. The focus is always on stability, clarity, and systems that continue to perform as business needs change."
        bodySecondary="If you’re looking for a development partner who understands the responsibility that comes with production systems, this is the kind of work Black Lab Development is built around."
        secondaryHref="/services"
        secondaryLabel="View Services"
      />
    </main>
  );
}
