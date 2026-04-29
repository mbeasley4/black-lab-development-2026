import Image from "next/image"
import PageHero from "@/components/PageHero"
import PageClose from "@/components/PageClose"

export const metadata = {
  title: "B2B Website Development Across Manufacturing, SaaS & Healthcare",
  description:
    "Industry-specific web development for healthcare, SaaS, manufacturing, and enterprise platforms built for performance and scalability.",
};

const industries = [
  {
    title: "Healthcare & Medical",
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
    title: "Enterprise & Internal Systems",
    image: "/images/industries/enterprise.png",
    description: (
      <>
        <p className="mb-4">
          Enterprise projects have a reputation for taking forever, costing twice the
          budget, and delivering half the scope. I don't run that playbook. Incremental,
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

export default function IndustriesPage() {
  return (
    <main className="w-full bg-black text-white">
      {/* ================= HERO ================= */}
      <PageHero
        label="Industries"
        title="Earned in the Field, Not the Classroom"
        titleHighlight="Earned in the Field"
        description="Real industry experience means knowing what breaks in production — not just what works in a pitch deck. Different sectors, same hard problems."
        backgroundImage="/images/industries-hero-bg.png"
        badges={["Regulated environments", "High-traffic systems", "Legacy nightmares survived"]}
      />



      {/* ================= INDUSTRIES ================= */}
      <section className="py-6 md:py-9 relative overflow-hidden">
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(34,211,238,0.35) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Ambient neon glows — aggressive */}
        <div className="absolute top-20 -left-40 w-175 h-175 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-20 -right-40 w-150 h-150 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-225 bg-cyan-500/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-87.5 h-87.5 bg-violet-600/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="mx-auto max-w-[1500px] px-6">
          {/* Section header — bolder */}
          <div className="flex items-center gap-6 mb-6 md:mb-9">
            <div>
              <span className="inline-block mb-3 text-xs tracking-[0.5em] uppercase text-cyan-400 font-mono drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
                // Industries
              </span>
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="bg-linear-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                  Industries Served
                </span>
              </h2>
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-cyan-500/80 via-cyan-500/30 to-transparent" />
          </div>

          <div className="space-y-0">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center py-6 md:py-9 relative ${
                  index < industries.length - 1
                    ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-linear-to-r after:from-transparent after:via-cyan-500/30 after:to-transparent"
                    : ""
                }`}
              >
                {/* Giant ghost number behind each row */}
                <div
                  className={`absolute text-[18rem] md:text-[22rem] font-black font-mono text-cyan-500/[0.035] pointer-events-none leading-none select-none top-0 ${
                    index % 2 === 1 ? "-right-4 text-right" : "-left-4"
                  }`}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Text */}
                <div className={`max-w-xl relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  {/* Eyebrow with big number */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-black font-mono text-cyan-400/25 leading-none tracking-tighter">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px w-14 bg-linear-to-r from-cyan-400 to-cyan-500/20 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                    <span className="bg-linear-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                      {industry.title}
                    </span>
                  </h2>

                  <div className="text-neutral-400 leading-relaxed">
                    {industry.description}
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`group relative h-95 w-full rounded-xl overflow-hidden border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.12),inset_0_0_40px_rgba(6,182,212,0.03)] transition-all duration-500 hover:border-cyan-400/70 hover:shadow-[0_0_100px_rgba(6,182,212,0.35),inset_0_0_60px_rgba(6,182,212,0.06)] ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover opacity-65 group-hover:opacity-90 group-hover:scale-[1.05] transition-all duration-700"
                  />
                  {/* Dark + neon tint overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-black/65 via-black/20 to-cyan-900/20 group-hover:to-cyan-900/45 transition-all duration-500" />
                  {/* Scanline texture */}
                  <div
                    className="absolute inset-0 opacity-[0.08] pointer-events-none"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)",
                    }}
                  />
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent group-hover:via-cyan-400 transition-all duration-500" />
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent group-hover:via-cyan-400/60 transition-all duration-500" />
                  {/* Corner glow — top right */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/15 blur-3xl rounded-full group-hover:bg-cyan-400/35 transition-all duration-500" />
                  {/* Corner glow — bottom left */}
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-blue-600/10 blur-2xl rounded-full group-hover:bg-blue-500/30 transition-all duration-500" />
                  {/* Corner brackets */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-cyan-400/50 group-hover:border-cyan-300 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-300 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-cyan-400/50 group-hover:border-cyan-300 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-300 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  {/* Industry label — slides up on hover */}
                  <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,1)]">
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
        title="Industries Change. Bad Engineering Stays Bad."
        bodyPrimary="The underlying problems look different in every sector, but they're usually the same problem: systems that weren't built to last, teams that inherited a mess, and platforms being asked to do more than they were designed for."
        bodySecondary="Cross-industry experience means solving the actual problem — not just the one that matches your sector's standard playbook."
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />

    </main>
  );
}
