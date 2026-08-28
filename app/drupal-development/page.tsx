import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import JsonLd from "@/components/JsonLd";
import FaqSection from "@/components/FaqSection";
import FounderByline from "@/components/FounderByline";

export const metadata: Metadata = {
  title: "Custom Drupal Development | Clean Code, No Contrib Sprawl",
  description:
    "Custom Drupal development with clean architecture, performance-first builds, and structured content modeling — no contrib bloat, no shortcuts.",
  alternates: { canonical: "/drupal-development" },
  openGraph: {
    title: "Custom Drupal Development | Clean Code, No Contrib Sprawl | Black Lab Dev",
    description:
      "Custom Drupal development with clean architecture, performance-first builds, and structured content modeling — no contrib bloat, no shortcuts.",
    url: "/drupal-development",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Custom Drupal Development | Clean Code, No Contrib Sprawl | Black Lab Dev",
    description:
      "Custom Drupal development with clean architecture, performance-first builds, and structured content modeling.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const services = [
  {
    title: "Custom Drupal Theme Development",
    body: "I build fully custom Drupal themes tailored to your design and content architecture — no starter kits bolted together, no contrib theme overrides fighting your markup.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Content Architecture & Entity Modeling",
    body: "Drupal's entity system is powerful — when used correctly. I design content types, taxonomies, paragraphs, and entity references that scale without becoming a maintenance nightmare.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
  {
    title: "Custom Module Development",
    body: "When contrib modules don't fit cleanly — or introduce too much overhead — I build custom modules scoped to your exact requirements. Clean, testable, well-documented.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Headless / Decoupled Drupal",
    body: "For teams that need Drupal's content modeling with a modern frontend. I build decoupled architectures using JSON:API or GraphQL with React or Next.js on the presentation layer.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    title: "Performance & Security Hardening",
    body: "I optimize caching layers, audit contrib dependencies, lock down permissions, and tune server-side rendering — so your Drupal site is fast and secure, not just functional.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const processSteps = [
  { step: "01", title: "Discovery & Content Audit", body: "I start by understanding your content model, editorial workflows, and technical constraints — before writing any code or choosing any modules." },
  { step: "02", title: "Architecture & Entity Design", body: "Content types, taxonomies, views, and integrations are mapped out upfront. No retrofitting entity references after the build is half done." },
  { step: "03", title: "Performance Planning", body: "Caching strategy, render pipeline decisions, and asset loading are evaluated against Core Web Vitals targets from the start — not patched in post-launch." },
  { step: "04", title: "Custom Development", body: "Clean theme code, purpose-built modules, and no unnecessary contrib dependencies. Everything built is scoped to your actual requirements." },
  { step: "05", title: "Security & QA", body: "Permissions audit, update path verification, cross-browser testing, and accessibility review. I find the problems before your users and your security team do." },
  { step: "06", title: "Launch & Ongoing Support", body: "Deployment is planned, not improvised. I handle module updates, security patches, and performance monitoring so your Drupal site stays healthy long-term." },
];

const faqs = [
  {
    q: "Why choose Drupal over WordPress?",
    a: "Drupal excels at complex content modeling, granular access control, and enterprise-scale content architectures. If your site has multiple content types with complex relationships, role-based editorial workflows, or needs to serve content across multiple channels — Drupal's entity system handles that natively where WordPress requires layers of plugins.",
  },
  {
    q: "Is Drupal still relevant in 2026?",
    a: "Yes. Drupal 11 is modern, actively maintained, and has a clear roadmap. It's the right choice when the problem calls for its strengths: structured content models, granular permissions, and multi-site architectures. If your content needs are straightforward, a lighter platform is usually the better fit — I'll tell you which one your project actually needs.",
  },
  {
    q: "How long does a custom Drupal project take?",
    a: "Most Drupal builds run 8–16 weeks depending on content architecture complexity, custom module requirements, and integration scope. Projects with complex migrations or multi-site setups can extend beyond that. I scope accurately upfront — no discovery phases that turn into open-ended billing.",
  },
  {
    q: "Can you improve an existing Drupal site?",
    a: "Yes. I regularly audit and optimize underperforming Drupal installations — cleaning up contrib bloat, improving caching, fixing content architecture issues, and upgrading from older Drupal versions. Not every project needs a rebuild.",
  },
  {
    q: "Do you handle Drupal migrations and upgrades?",
    a: "Yes. Whether you're migrating from Drupal 7/8/9 to Drupal 11, moving from another CMS to Drupal, or migrating away from Drupal to a headless setup — I handle the full migration path including content, configuration, and redirects.",
  },
  {
    q: "How much does custom Drupal development cost?",
    a: "Custom Drupal projects at Black Lab Development range from $8,000 for focused rebuilds to $38,000+ for complex platforms with custom modules, multi-site architectures, and extensive content migrations. Pricing reflects actual scope — not a packaged tier.",
  },
];

const useCases = [
  "Content-heavy websites with complex content models and editorial workflows",
  "Organizations needing granular role-based access control",
  "Multi-site architectures serving multiple brands or regions",
  "Government, healthcare, and higher-ed sites with compliance requirements",
  "Businesses migrating from legacy Drupal versions to Drupal 11",
  "Teams that need structured content delivered across multiple channels",
];

const performancePoints = [
  { label: "Render caching & page cache optimization", detail: "Drupal's caching system is powerful but misconfused by default. I configure it correctly from day one." },
  { label: "Minimal contrib overhead", detail: "Every contributed module is evaluated against its performance cost. If custom code is cleaner, I write it." },
  { label: "Efficient asset loading", detail: "Libraries loaded only where needed. No global CSS/JS payloads from modules you barely use." },
  { label: "Clean, semantic markup", detail: "Twig templates built for performance and accessibility — not generated by a theme engine you can't control." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://blacklabdev.com/drupal-development#service",
  name: "Custom Drupal Development",
  url: "https://blacklabdev.com/drupal-development",
  description:
    "Custom Drupal development with clean architecture, performance-first builds, and structured content modeling — no contrib bloat, no shortcuts.",
  provider: { "@type": "Organization", "@id": "https://blacklabdev.com/#business" },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Drupal Development",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function DrupalDevelopmentPage() {
  return (
    <main className="w-full bg-[#0b0b0c] text-white">
      <JsonLd data={[serviceSchema, faqSchema]} />
      <PageHero
        label="Drupal Development"
        title="Structured Content, Not Contrib Chaos."
        titleHighlight="Not Contrib Chaos."
        description="Most Drupal sites drown in contrib modules before anyone touches content architecture. I build custom — clean entity design, purpose-built modules, no maintenance nightmares."
        backgroundImage="/images/drupal-hero-bg.jpg"
        badges={["No contrib bloat", "Structured content modeling", "Clean, maintainable code"]}
      />

      {/* Hero CTAs */}
      <section className="border-b border-slate-800 bg-[#111214]">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 py-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-volt-500 text-black px-7 py-3.5 text-sm font-semibold hover:bg-volt-400 transition-colors duration-200 shadow-lg shadow-volt-500/25"
          >
            Start a Project →
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-md border-2 border-volt-500/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-volt-500/10 hover:border-volt-400 transition-all duration-200"
          >
            View Case Studies →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                The Problem
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Custom Drupal Development Built for Complex Content
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Most Drupal sites are over-moduled, under-architected, and slow. That&apos;s not a platform problem — it&apos;s a build problem. Drupal&apos;s entity system and content architecture tools are best-in-class when used correctly.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                At Black Lab Dev, I approach Drupal from an engineering perspective. Every site is custom-built with clean content modeling, purpose-built modules, and performance tuned from the architecture layer — not patched in after launch.
              </p>
              <p className="text-slate-400 leading-relaxed font-medium">
                No contrib sprawl. No theme engine fighting your markup. No technical debt by default.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { problem: "Contrib module sprawl", impact: "Every unnecessary module is a security surface, a performance hit, and a future upgrade blocker. Most solve problems that purpose-built code handles more cleanly." },
                { problem: "Content model complexity", impact: "Poorly designed entity relationships create editorial friction, broken views, and content that can't be reused across contexts." },
                { problem: "Untuned caching", impact: "Drupal's cache system is powerful but misconfigured by default. Uncached or over-invalidated pages mean slow load times despite a capable platform." },
                { problem: "Upgrade path neglect", impact: "Sites built without upgrade discipline become stuck on outdated core versions — exposed to security vulnerabilities and locked out of new features." },
              ].map((item) => (
                <div key={item.problem} className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">{item.problem}</div>
                      <div className="text-xs text-slate-400 leading-relaxed">{item.impact}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#111214] border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
              What I Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Drupal Development Services
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Full-service Drupal development for organizations that need more than a default install with a pile of contrib modules.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-neutral-800 bg-neutral-950 p-8 transition-all duration-300 hover:border-volt-500/40 hover:shadow-[0_0_40px_rgba(227,245,68,0.06)]"
              >
                <div className="h-px bg-linear-to-r from-volt-500/0 via-volt-500/0 to-volt-500/0 group-hover:from-volt-500/40 group-hover:via-volt-500/60 group-hover:to-volt-500/0 transition-all duration-500 -mx-8 -mt-8 mb-8" />
                <div className="w-10 h-10 rounded-lg bg-volt-500/10 border border-volt-500/20 flex items-center justify-center text-volt-500 mb-5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-volt-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built without the bloat */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                Why I&apos;m Different
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Built Without the Contrib Bloat
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Most agencies install 80+ contrib modules and call it architecture. I don&apos;t. Instead, I use Drupal&apos;s core systems correctly and write custom code where contrib introduces more problems than it solves.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Your Drupal site becomes an asset your team can maintain — not a black box only the original agency can touch.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Faster load times", detail: "No unnecessary module overhead shipped on every request. Caching tuned from day one." },
                { label: "Cleaner upgrade paths", detail: "Fewer contrib dependencies means fewer blockers when upgrading Drupal core." },
                { label: "Stronger security posture", detail: "Less contrib surface area means fewer vulnerability vectors and faster security patch cycles." },
                { label: "Better editorial experience", detail: "Content types and admin UX designed for your editors — not dictated by a module's default UI." },
                { label: "Real maintainability", detail: "Code your next developer can read, understand, and extend without reverse-engineering a contrib stack." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
                  <div className="w-6 h-6 rounded-full bg-volt-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-volt-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-0.5">{item.label}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#111214] border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
              My Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Architecture First, Modules Second
            </h2>
            <p className="text-slate-400 leading-relaxed">
              I don&apos;t start with a list of contrib modules and work backwards. Every project starts with content architecture, entity relationships, and performance planning — then I build only what&apos;s needed.
            </p>
          </div>
          <div className="space-y-10">
            {processSteps.map((item) => (
              <div key={item.step} className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 items-start">
                <div className="text-5xl font-black font-mono text-volt-500/20 leading-none">{item.step}</div>
                <div className="border-b border-slate-800 pb-10 last:border-0 last:pb-0">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                Performance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Optimized for Speed and Security
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Drupal can be fast — most Drupal sites just aren&apos;t. The difference is architecture decisions made at the right time, not performance patches applied after launch.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I build Drupal sites that pass Core Web Vitals, load efficiently, and maintain a strong security posture through disciplined contrib management and regular updates.
              </p>
              <div className="mt-8">
                <Link
                  href="/services/website-performance-optimization"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-volt-500 hover:text-volt-400 transition-colors duration-200"
                >
                  Learn more about performance optimization →
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {performancePoints.map((item) => (
                <div key={item.label} className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-volt-500 shadow-[0_0_8px_rgba(227,245,68,0.7)] shrink-0 mt-2" />
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                      <div className="text-xs text-slate-400 leading-relaxed">{item.detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-[#111214] border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                Use Cases
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                When Drupal Is the Right Choice
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Drupal isn&apos;t always the answer — but when you need structured content at scale, granular permissions, or multi-site architectures, it&apos;s hard to beat.
              </p>
            </div>
            <div className="space-y-3">
              {useCases.map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-950 px-6 py-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-volt-500 shadow-[0_0_6px_rgba(227,245,68,0.7)] shrink-0" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="max-w-2xl mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-volt-500/35 bg-volt-500/8 text-volt-500 text-xs font-bold tracking-[0.2em] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-volt-500 shadow-[0_0_8px_rgba(227,245,68,0.9)]" />
              Featured Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Vault Cybersecurity — Drupal Build
            </h2>
            <p className="text-slate-400 leading-relaxed">
              A Drupal-powered cybersecurity platform with tiered service architectures, structured content modeling, and an industrial design language — built from scratch with zero contrib bloat.
            </p>
            <div className="mt-4 h-px w-32 bg-linear-to-r from-volt-500/60 via-volt-500/25 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "Custom", label: "Entity architecture", detail: "Structured content types for tiered security service offerings" },
              { stat: "Zero", label: "Contrib bloat", detail: "Purpose-built modules replacing off-the-shelf dependencies" },
              { stat: "100%", label: "Custom theme", detail: "Industrial design language built from Twig templates — no starter kit" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-neutral-800 bg-neutral-950 px-8 py-8 text-center transition-all duration-300 hover:border-volt-500/30 hover:shadow-[0_0_40px_rgba(227,245,68,0.05)]">
                <div className="text-3xl font-black text-volt-500 drop-shadow-[0_0_10px_rgba(227,245,68,0.4)] mb-2">{item.stat}</div>
                <div className="text-sm font-semibold text-white mb-2">{item.label}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{item.detail}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://vault.blacklabdev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-volt-500 hover:text-volt-400 transition-colors duration-200"
            >
              Visit vault.blacklabdev.com
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <FaqSection
        faqs={faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
      />

      {/* Internal links */}
      <section className="py-16 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <h2 className="text-lg font-bold text-white mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-lg border border-volt-500/30 bg-volt-500/8 px-6 py-3 text-sm font-semibold text-volt-400 hover:border-volt-400 hover:bg-volt-500/15 transition-all duration-200"
            >
              All Services →
            </Link>
            <Link
              href="/wordpress-development"
              className="rounded-lg border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              WordPress Development →
            </Link>
            <Link
              href="/services/custom-web-development"
              className="rounded-lg border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              Custom Web Development →
            </Link>
            <Link
              href="/services/website-performance-optimization"
              className="rounded-lg border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              Website Performance →
            </Link>
            <Link
              href="/shopify-development"
              className="rounded-lg border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              Shopify Development →
            </Link>
          </div>
        </div>
      </section>

      <FounderByline />

      <PageClose
        title="Work With a Drupal Development Partner That Builds It Right"
        bodyPrimary="If your current Drupal site is slow, over-moduled, or stuck on an outdated version — it's time for a better foundation. I build Drupal platforms that perform, scale, and stay maintainable for years."
        bodySecondary="No contrib sprawl. No theme engine compromises. Just clean, performant Drupal built the right way."
        secondaryHref="/case-studies"
        secondaryLabel="View Case Studies"
      />
    </main>
  );
}
