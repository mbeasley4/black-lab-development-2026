import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Black Lab Development | Senior Web & Software Engineering",
  description:
    "Contact Black Lab Development to discuss custom web development, SEO, integrations, and scalable digital platforms. Work directly with a senior engineer delivering measurable results.",
};

export default function ContactPage() {
  return (
    <main className="w-full bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/contact-hero-bg.png')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/78" aria-hidden="true" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-[450px] flex items-center">
          <div className="mx-auto max-w-[1500px] px-6">
            <div className="max-w-12xl">
              <span className="inline-block mb-6 text-xs tracking-[0.3em] uppercase text-neutral-500">
                Contact Us
              </span>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Let’s Talk About Your Platform
              </h1>

              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                If you’re planning a new build, modernizing an existing platform,
                or untangling technical debt, Black Lab Development works directly
                with you to design and build systems that are clean, scalable,
                and built to last.
              </p>

              {/* Individualized meta */}
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-neutral-400">
                <span>Senior-led execution</span>
                <span className="opacity-40">/</span>
                <span>Production systems</span>
                <span className="opacity-40">/</span>
                <span>Direct collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT + FORM ================= */}
      <section className="pt-20 pb-32">
        <div className="mx-auto max-w-[1500px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">
              Work Directly With a Senior Engineer
            </h2>

            <p className="text-neutral-400 leading-relaxed mb-6">
              Black Lab Development is led by a senior engineer with over 15 years
              of experience building and supporting high-traffic, enterprise-grade
              digital platforms. Every project is approached hands-on — from
              architecture and implementation to performance and long-term
              maintainability.
            </p>

            <p className="text-neutral-400 leading-relaxed mb-6">
              Clients work directly with the person responsible for technical
              decisions, execution, and outcomes — not a project manager or a
              rotating team. This ensures clarity, accountability, and solutions
              that fit your business instead of forcing a generic stack.
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
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-8 lg:p-10">
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
      <section className="relative overflow-hidden border-t border-neutral-900 py-28">
        {/* Background layers */}
        <div className="absolute inset-0">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/close-bg.png')",
            }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/85" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1500px] px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-2xl md:text-5xl font-bold mb-6">
              Custom Web Development & Digital Strategy
            </h2>

            <p className="text-neutral-300 leading-relaxed mb-6">
              Black Lab Development provides custom web development, software
              engineering, SEO, and digital platform optimization for organizations
              that need scalable, secure, and maintainable solutions. Work ranges from
              WordPress and Shopify to custom Laravel and headless architectures.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              If you’re looking for a development partner who combines technical
              leadership, business insight, and hands-on execution, Black Lab
              Development is built for that kind of work.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
