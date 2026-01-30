import Image from "next/image";

const demos = [
  {
    title: "Fit30 Community Platform",
    description:
      "Custom-built membership platform using Laravel and React with Stripe subscriptions, gated content, and user roles.",
    href: "https://fit30.blacklabdev.com",
    badge: "Laravel • React • Stripe",
    image: "/images/demos/fit30.png",
  },
  {
    title: "Vault Cybersecurity Website",
    description:
      "Custom Drupal 11 website built with Paragraphs, pricing card modules, and flexible content architecture.",
    href: "https://vault.blacklabdev.com",
    badge: "Drupal 11 • Custom Build",
    image: "/images/demos/vault-cybersecurity.png",
  },
];

export default function DemoSection() {
  return (
    <section className="bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Live Demo Projects
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Real, production-ready applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {demos.map((demo) => (
            <a
              key={demo.title}
              href={demo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={demo.image}
                  alt={demo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="inline-block rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  {demo.badge}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-gray-900">
                  {demo.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {demo.description}
                </p>

                <div className="mt-6 flex items-center text-sm font-semibold text-black">
                  View Live Demo
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}