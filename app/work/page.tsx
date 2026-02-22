import Image from "next/image"
import DemoSection from "@/components/DemoSection"
import PageHero from "@/components/PageHero"
import PageClose from "@/components/PageClose"

export const metadata = {
  title: "Work | Black Lab Development",
  description:
    "Selected work from Black Lab Development across healthcare, SaaS, e-commerce, and enterprise platforms. Senior-led engineering focused on real-world production systems.",
};

const projects = [
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
      {/* ================= Demo ================= */}
      <DemoSection />
      {/* ================= WORK ================= */}
      <section className="py-32 relative overflow-hidden">
        {/* Ambient neon glows */}
        <div className="absolute top-40 left-1/3 w-175 h-175 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-40 right-1/3 w-125 h-125 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-[1500px] px-6 relative">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-14">
            <div>
              <h2 className="text-2xl font-bold text-white">Client Work</h2>
              <p className="text-sm text-neutral-500 mt-1">{projects.length} projects</p>
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-cyan-500/40 via-cyan-500/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group flex flex-col rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.10)]"
              >
                {/* Top accent line */}
                <div className="h-px bg-linear-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/70 transition-all duration-500" />

                {/* Screenshot */}
                <div className="relative h-[260px] w-full overflow-hidden">
                  <Image
                    src={project.screenshot}
                    alt={`${project.name} screenshot`}
                    fill
                    className="object-cover object-top opacity-95 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  {/* Neon overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-950/70 via-transparent to-cyan-500/0 group-hover:to-cyan-500/8 transition-all duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  {/* Bottom fade into card */}
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-neutral-950 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  {/* Logo */}
                  <div className="mb-4 h-8 flex items-center">
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      height={20}
                      width={100}
                      className="object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-4 grow">
                    {project.summary}
                  </p>

                  <ul className="space-y-1.5 text-xs mt-auto">
                    {project.details.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-neutral-500 group-hover:text-neutral-400 transition-colors duration-200">
                        <span className="w-1 h-1 rounded-full bg-cyan-500/60 shrink-0" />
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
