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
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold text-white">
            Featured Demo Projects
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Production-ready applications built with modern frameworks.
          </p>
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
                  className={`relative ${
                    isReversed ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-white shadow-2xl">
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
                  <span className="inline-block rounded-full bg-slate-700 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
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
                    className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                  >
                    View Live Demo
                    <span className="transition-transform group-hover:translate-x-1">
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
