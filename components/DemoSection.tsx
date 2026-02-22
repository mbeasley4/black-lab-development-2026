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
    <section className="bg-black border-t border-b border-cyan-500/10 py-24 relative overflow-hidden">
      {/* Ambient neon glows */}
      <div className="absolute top-0 left-1/4 w-175 h-175 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-125 h-125 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
            Live Experiments
          </span>
          <h2 className="text-4xl font-extrabold text-white">
            Featured <span className="text-cyan-400">Demo Projects</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Production-ready applications built with modern frameworks.
          </p>
          {/* Neon underline accent */}
          <div className="mx-auto mt-6 w-24 h-px bg-linear-to-r from-transparent via-cyan-500/60 to-transparent" />
        </div>

        {/* Demo Rows */}
        <div className="space-y-28">
          {demos.map((demo, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={demo.title}
                className={`grid items-center gap-12 md:grid-cols-2 ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`group ${
                    isReversed ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-neutral-800 bg-white shadow-2xl transition-all duration-300 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_60px_rgba(6,182,212,0.15)]">
                    <Image
                      src={demo.image}
                      alt={demo.title}
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${
                    isReversed ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <span className="inline-block rounded-full bg-cyan-500/10 border border-cyan-500/30 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                    {demo.badge}
                  </span>

                  <h3 className="mt-6 text-3xl font-bold text-white">
                    {demo.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-lg text-slate-300">
                    {demo.description}
                  </p>

                  <a
                    href={demo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-cyan-400 hover:shadow-[0_0_24px_rgba(6,182,212,0.4)]"
                  >
                    View Live Demo
                    <span className="transition-transform group-hover/btn:translate-x-1">
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
