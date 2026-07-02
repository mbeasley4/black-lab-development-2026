import Image from "next/image";

const demos = [
  {
    title: "Diamond Dogs - Headless CMS (WordPress)",
    description:
      "Headless WordPress demo using Vue 3, Vite, and Tailwind CSS with ACF-driven flexible content blocks and dynamic page rendering.",
    href: "https://dog.blacklabdev.com",
    badge: "WordPress • Headless CMS • Vue.js",
    image: "/images/demos/diamond-dogs.png",
  },
  {
    title: "Fit30 Community - Laravel & React",
    description:
      "Custom-built membership platform using Laravel and React with Stripe subscriptions, gated content, and user roles.",
    href: "https://fit30.blacklabdev.com",
    badge: "Laravel • React • Stripe",
    image: "/images/demos/fit30.png",
  },
  {
    title: "Vault Cybersecurity - Drupal 11",
    description:
      "Custom Drupal 11 website built with Paragraphs, pricing card modules, and flexible content architecture.",
    href: "https://vault.blacklabdev.com",
    badge: "Drupal 11 • Custom Build",
    image: "/images/demos/vault-cybersecurity.png",
  },
];

export default function DemoSection() {
  return (
    <section className="bg-[#0b0b0c] border-t border-b border-volt-500/15 py-6 md:py-9 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-175 h-175 bg-volt-500/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-125 h-125 bg-volt-500/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-150 h-150 bg-volt-500/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-volt-500/35 bg-volt-500/8 text-volt-500 text-xs font-bold tracking-[0.2em] uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-volt-500 shadow-[0_0_8px_rgba(227,245,68,0.9)]" />
            Live Experiments
          </span>
          <h2 className="text-5xl font-extrabold tracking-tight text-white">
            Featured{" "}
            <span className="text-volt-500">
              Demo Projects
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto">
            Production-ready applications built with modern frameworks.
          </p>
          {/* Underline accent */}
          <div className="mx-auto mt-6 w-32 h-px bg-linear-to-r from-transparent via-volt-500/60 to-transparent" />
        </div>

        {/* Demo Rows */}
        <div className="space-y-24">
          {demos.map((demo, index) => {
            const isReversed = index % 2 !== 0;
            const num = String(index + 1).padStart(2, "0");

            return (
              <div
                key={demo.title}
                className="grid items-center gap-12 md:grid-cols-2"
              >
                {/* Image */}
                <div className={`group ${isReversed ? "md:order-2" : "md:order-1"}`}>
                  <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-neutral-800 bg-white shadow-2xl transition-all duration-300 group-hover:border-volt-500/40 group-hover:shadow-[0_0_70px_rgba(227,245,68,0.15)]">
                    <Image
                      src={demo.image}
                      alt={demo.title}
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Amber tint on hover */}
                    <div className="absolute inset-0 bg-volt-950/0 group-hover:bg-volt-950/5 transition-all duration-400 rounded-2xl" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${isReversed ? "md:order-1" : "md:order-2"} relative`}>
                  {/* Ghost number */}
                  <span className="absolute -top-8 -left-1 text-8xl font-black text-volt-500/6 select-none pointer-events-none leading-none">
                    {num}
                  </span>

                  <span className="inline-flex items-center rounded-full bg-volt-500/8 border border-volt-500/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-volt-400">
                    {demo.badge}
                  </span>

                  <h3 className="mt-5 text-3xl font-bold text-white leading-snug">
                    {demo.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-base text-slate-300 leading-relaxed">
                    {demo.description}
                  </p>

                  <a
                    href={demo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn mt-8 inline-flex items-center gap-2.5 rounded-lg bg-volt-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-volt-400 hover:shadow-[0_0_30px_rgba(227,245,68,0.40)]"
                  >
                    View Live Demo
                    <span className="transition-transform duration-200 group-hover/btn:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
