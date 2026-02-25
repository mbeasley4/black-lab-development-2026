import ContactForm from "@/components/ContactForm"
import PageClose from "@/components/PageClose";
import PageHero from "@/components/PageHero"

export const metadata = {
  title: "Start a Project | Black Lab Development",
  description:
    "Work directly with a senior engineer with 15+ years of experience. Discuss custom web development, SEO, integrations, and platform modernization for your next project.",
};

export default function ContactPage() {
  return (
    <main className="w-full bg-black text-white">
      {/* ================= HERO ================= */}
      <PageHero
        label=" Contact Me"
        title="Let's Talk About Your "
        titleHighlight="Platform"
        description="If you're building new, modernizing, or reducing technical debt, I partner with you to create clean, scalable, lasting systems."
        backgroundImage="/images/contact-hero-bg.png"
        badges={["Senior-led execution", "Production systems", "Direct collaboration"]}
      />

      {/* ================= CONTENT + FORM ================= */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-375 px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="flex items-center gap-6 mb-6">
              <div>
                <span className="inline-block mb-3 text-xs tracking-[0.5em] uppercase text-cyan-400 font-mono drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
                  // About
                </span>
                <h2 className="text-3xl md:text-5xl font-bold">
                  <span className="bg-linear-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                    Work Directly With a Senior Engineer
                  </span>
                </h2>
              </div>
              <div className="flex-1 h-px bg-linear-to-r from-cyan-500/80 via-cyan-500/30 to-transparent" />
            </div>

            <p className="text-neutral-400 leading-relaxed mb-6">
              I'm a senior engineer with over 15 years of experience building and
              supporting high-traffic, enterprise-grade digital platforms. Every
              project is approached hands-on — from architecture and implementation
              to performance and long-term maintainability.
            </p>

            <p className="text-neutral-400 leading-relaxed mb-6">
              You work directly with me — the person making the technical decisions,
              writing the code, and accountable for the outcome. No project managers
              in the middle, no rotating junior team. Just clear communication and
              solutions that fit your actual problem.
            </p>

            <h3 className="text-xl font-medium mb-4">
              Common Reasons Clients Reach Out
            </h3>

            <ul className="space-y-3 text-neutral-400 mb-8 list-disc list-inside">
              <li>Rebuilding or modernizing a high-traffic website</li>
              <li>Improving performance, SEO, and conversion rates</li>
              <li>Integrating CRMs, marketing automation, or third-party APIs</li>
              <li>Building custom software or internal tools</li>
              <li>Replacing unreliable vendors or legacy systems</li>
            </ul>

            <p className="text-neutral-500 text-sm leading-relaxed">
              The focus is always on solving the right problem — not selling a
              predefined solution.
            </p>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-cyan-400/50 bg-neutral-950 p-8 lg:p-10 shadow-[0_0_60px_rgba(34,211,238,0.18)]">
            <h3 className="text-2xl font-medium mb-6">
              Start the Conversation
            </h3>

            <p className="text-neutral-400 leading-relaxed mb-8">
              Share a bit about your project, goals, or challenges. You’ll hear
              back directly to discuss next steps and determine whether there’s
              a good fit.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* ================= SEO CONTENT ================= */}
      <section className="relative overflow-hidden border-t border-neutral-900">
        {/* ================= CLOSE ================= */}
        <PageClose
          title="Custom Web Development & Digital Strategy"
          bodyPrimary="I provide custom web development, software engineering, SEO, and digital
              platform optimization for organizations that need scalable, secure, and
              maintainable solutions. Work ranges from WordPress and Shopify to custom
              Laravel and headless architectures."
          bodySecondary="If you need a senior engineer who combines technical leadership, business
              insight, and hands-on execution — that’s exactly what this is."
          secondaryHref="/services"
          secondaryLabel="Explore Services"
        /> 
      </section>
    </main>
  );
}
