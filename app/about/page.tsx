import Image from "next/image"
import PageHero from "@/components/PageHero"
import PageClose from "@/components/PageClose"

export const metadata = {
  title: "About Black Lab Dev | Website Development That Works",
  description:
    "Black Lab Dev builds fast, scalable websites that convert — for B2B, industrial, and ecommerce brands that expect more from their web presence.",
};

const values = [
  {
    label: "01",
    title: "Read It Before You Touch It",
    body: "Every system I work on gets understood before it gets changed. This sounds obvious but it's apparently rare. Bad assumptions are how good systems become expensive problems.",
  },
  {
    label: "02",
    title: "Right Tool, Not Favorite Tool",
    body: "I don't have a stack I'm trying to sell you on. The right architecture is the one that fits your team, your constraints, and your actual scale — not mine.",
  },
  {
    label: "03",
    title: "Shipped Beats Perfect",
    body: "A working system in production is worth more than a flawless architecture that's still in review. I bias toward decisions that move things forward and can be corrected later.",
  },
  {
    label: "04",
    title: "No Hiding Behind Process",
    body: "Project management theater — status updates, velocity points, sprint reviews — doesn't fix code. I'd rather spend that time doing the work and telling you plainly where things stand.",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-[#0b0b0c] text-white">
      {/* ================= HERO ================= */}
      <PageHero
        label="About"
        title="The Engineer Behind the Work"
        titleHighlight="Behind the Work"
        description="Deep enough in the field to know which problems are real. No middlemen, no markup — just the engineer who owns the outcome."
        backgroundImage="/images/about-hero-bg.png"
        badges={["Senior-led", "Direct access", "Full ownership"]}
      />

      {/* ================= BIO ================= */}
      <section className="py-6 md:py-9 relative overflow-hidden">
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(245,158,11,0.25) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Ambient glows */}
        <div className="absolute top-20 -left-40 w-175 h-175 bg-amber-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-20 -right-40 w-150 h-150 bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-375 px-6">
          {/* Section eyebrow */}
          <div className="flex items-center gap-6 mb-10 md:mb-20">
            <div>
              <span className="inline-block mb-3 text-xs tracking-[0.5em] uppercase text-amber-500 font-mono drop-shadow-[0_0_12px_rgba(245,158,11,0.7)]">
                // Background
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Who I Am
              </h2>
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-amber-500/60 via-amber-500/20 to-transparent" />
          </div>

          {/* Bio content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
            <div className="flex flex-col gap-8">
              {/* Photo */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-amber-500/15 blur-2xl scale-110 pointer-events-none" />
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-amber-500/50 rounded-tl-lg pointer-events-none" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-amber-500/50 rounded-br-lg pointer-events-none" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-amber-500/25 shadow-[0_0_40px_rgba(245,158,11,0.12)]">
                  <Image
                    src="/images/michael-beasley.png"
                    alt="Michael Beasley"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Bio text */}
              <div className="max-w-xl">
                <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                  I'm Michael Beasley — a senior engineer in Cincinnati with enough production systems behind me to know what failure looks like before it ships.
                </p>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  I started Black Lab Development to do the kind of engineering work I actually respect:
                  direct engagement with complex problems, decisions made by the person who understands the
                  system, and outcomes tied to real business results — not billable hours.
                </p>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Most of my work involves stepping into systems that have accumulated years of shortcuts,
                  vendor lock-in, and technical debt — understanding what's actually there, and making it
                  better without blowing everything up in the process.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  I've worked embedded with in-house teams, as a primary vendor for agencies, and as the
                  solo engineer keeping mission-critical platforms running. I'm comfortable in all of those
                  contexts and honest about which one fits your situation.
                </p>
              </div>
            </div>

            {/* Stats / quick facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "15+", label: "Years building scalable platforms" },
                { value: "100K+", label: "Daily users supported" },
                { value: "20K+", label: "Peak sessions handled" },
                { value: "90%+", label: "SEO health improvement achieved" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="relative rounded-xl border border-amber-500/15 bg-[#111214]/60 p-6 overflow-hidden group hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.10)] transition-all duration-500"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/30 to-transparent group-hover:via-amber-500/70 transition-all duration-500" />
                  <div className="text-4xl font-black font-mono text-amber-500 drop-shadow-[0_0_20px_rgba(245,158,11,0.5)] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-400 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE HONEST PITCH ================= */}
      <section className="py-6 md:py-9 relative overflow-hidden border-t border-amber-500/8">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(245,158,11,0.25) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute top-0 right-0 w-150 h-150 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="mx-auto max-w-375 px-6">
          <div className="flex items-center gap-6 mb-10 md:mb-20">
            <div>
              <span className="inline-block mb-3 text-xs tracking-[0.5em] uppercase text-amber-500 font-mono drop-shadow-[0_0_12px_rgba(245,158,11,0.7)]">
                // The Case for Freelance
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Why It Matters Who Builds It
              </h2>
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-amber-500/60 via-amber-500/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start max-w-6xl">
            <div>
              <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                When you hire an agency, you pay for a sales team, a project manager, account
                management, and a junior developer who gets assigned to your project after the
                senior who sold you closes the deal. You get a lot of process and sometimes very
                little engineering.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                When you work with me, you talk directly to the person writing the code, making
                the architecture decisions, and accountable for whether it actually works in
                production. There's no translation layer where requirements get distorted and
                nobody claims ownership of the gap.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                That doesn't mean I can do everything. I'm honest about scope, about what
                requires additional specialists, and about when a problem is bigger than a single
                engagement. But for the things I take on, you get my full attention and full
                accountability — not a rotating cast.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  agency: "Sales engineer sells the project",
                  me: "I'm the one you talk to before, during, and after",
                },
                {
                  agency: "Junior developer gets assigned after kickoff",
                  me: "Senior-level thinking on every decision",
                },
                {
                  agency: "Requirements filtered through project management",
                  me: "Direct communication — no translation layer",
                },
                {
                  agency: "Responsibility diffused across a team",
                  me: "One person accountable for the outcome",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 gap-4 rounded-xl border border-neutral-800 overflow-hidden group hover:border-amber-500/25 transition-all duration-300"
                >
                  <div className="p-4 bg-neutral-950 text-sm text-neutral-500 leading-relaxed">
                    <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-600 mb-1">Agency</span>
                    {row.agency}
                  </div>
                  <div className="p-4 bg-[#111214]/60 text-sm text-neutral-300 leading-relaxed border-l border-amber-500/10 group-hover:border-amber-500/30 transition-colors duration-300">
                    <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-amber-500/60 mb-1">Black Lab Dev</span>
                    {row.me}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-6 md:py-9 relative overflow-hidden border-t border-amber-500/8">
        <div className="absolute bottom-0 left-1/4 w-175 h-175 bg-blue-600/6 rounded-full blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-375 px-6">
          <div className="flex items-center gap-6 mb-10 md:mb-20">
            <div>
              <span className="inline-block mb-3 text-xs tracking-[0.5em] uppercase text-amber-500 font-mono drop-shadow-[0_0_12px_rgba(245,158,11,0.7)]">
                // How I Work
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                What I Actually Believe
              </h2>
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-amber-500/60 via-amber-500/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.label}
                className="group relative rounded-xl border border-amber-500/15 bg-[#111214]/50 p-8 overflow-hidden hover:border-amber-500/35 hover:shadow-[0_0_60px_rgba(245,158,11,0.08)] transition-all duration-500"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/25 to-transparent group-hover:via-amber-500/60 transition-all duration-500" />
                <div className="absolute top-3 right-4 text-[6rem] font-black font-mono text-amber-500/4 leading-none pointer-events-none select-none" aria-hidden="true">
                  {value.label}
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-black font-mono text-amber-500/25 leading-none tracking-tighter">
                      {value.label}
                    </span>
                    <div className="h-px w-8 bg-linear-to-r from-amber-500/60 to-transparent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {value.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">
                    {value.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLOSE ================= */}
      <PageClose
        title="You'll Work Directly With Me"
        bodyPrimary="No kickoff calls with someone who disappears after the contract is signed. No project managers relaying messages between you and the engineer. Just direct access to the person making the technical decisions and writing the code."
        bodySecondary="If that sounds like what your project actually needs, I'd like to hear about it."
        secondaryHref="/services"
        secondaryLabel="See What I Do"
      />
    </main>
  );
}
