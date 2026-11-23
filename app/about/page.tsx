import type { Metadata } from "next";
import Image from "next/image"
import Link from "next/link"
import { Factory, FerrisWheel, HeartPulse, type LucideIcon } from "lucide-react"
import PageHero from "@/components/PageHero"
import PageClose from "@/components/PageClose"
import LabFramework from "@/components/LabFramework"
import JsonLd from "@/components/JsonLd";
import FaqSection from "@/components/FaqSection";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import SelectedWork from "@/components/SelectedWork";

export const metadata: Metadata = {
  title: "About | Senior Web Developer in Cincinnati",
  description:
    "Michael Beasley is a senior web developer in Cincinnati and founder of Black Lab Development, with 15+ years building fast, revenue-focused websites.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Senior Web Developer in Cincinnati | Black Lab Dev",
    description:
      "Michael Beasley is a senior web developer in Cincinnati and founder of Black Lab Development, with 15+ years building fast, revenue-focused websites.",
    url: "/about",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "About | Senior Web Developer in Cincinnati | Black Lab Dev",
    description:
      "Michael Beasley is a senior web developer in Cincinnati and founder of Black Lab Development, with 15+ years building fast, revenue-focused websites.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://blacklabdev.com/about#michael-beasley",
  name: "Michael Beasley",
  jobTitle: "Senior Web Developer & Founder",
  description:
    "Michael Beasley is a Cincinnati-based senior web developer with 15+ years of experience building scalable, revenue-focused digital platforms for B2B and industrial companies. Founder of Black Lab Development.",
  worksFor: {
    "@type": "Organization",
    "@id": "https://blacklabdev.com/#business",
    name: "Black Lab Development",
    url: "https://blacklabdev.com",
  },
  founder: {
    "@type": "Organization",
    name: "Black Lab Development",
    url: "https://blacklabdev.com",
  },
  url: "https://blacklabdev.com/about",
  image: "https://blacklabdev.com/images/michael-beasley.webp",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    postalCode: "45202",
    addressCountry: "US",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Web Developer",
    occupationLocation: {
      "@type": "City",
      name: "Cincinnati",
    },
    description:
      "Senior web developer specializing in B2B website design, conversion optimization, and digital platform architecture for manufacturing and industrial companies.",
    skills: [
      "B2B Website Design",
      "Conversion Rate Optimization",
      "Manufacturing Website Design",
      "Next.js",
      "WordPress",
      "Shopify",
      "Technical SEO",
      "Software Architecture",
      "HubSpot Integration",
      "Cloudflare Configuration",
      "CDN & WAF Security",
      "Uptime & Performance Monitoring",
    ],
  },
  knowsAbout: [
    "B2B Website Design",
    "Web Development",
    "Conversion Optimization",
    "Manufacturing Websites",
    "Next.js",
    "WordPress",
    "Shopify",
    "Technical SEO",
    "Software Architecture",
    "Pipeline Generation",
    "Lead Generation",
    "Cloudflare Configuration",
    "CDN and WAF Security",
    "Uptime and Performance Monitoring",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Northern Kentucky University" },
    { "@type": "CollegeOrUniversity", name: "Wright State University" },
  ],
  sameAs: [
    "https://www.linkedin.com/in/michaelkbeasley/",
    "https://www.linkedin.com/company/blacklabdevelopment/",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Michael Beasley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Michael Beasley is a senior web developer and founder of Black Lab Development, based in Cincinnati, Ohio. He has 15+ years of experience building B2B websites, manufacturing platforms, and revenue-focused digital infrastructure. He specializes in conversion architecture, technical SEO, and custom development in Next.js and WordPress for industrial and B2B companies.",
      },
    },
    {
      "@type": "Question",
      name: "What is Black Lab Development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Black Lab Development is Michael Beasley's independent web development practice, based in Cincinnati, OH, focused on B2B website design and pipeline generation. Michael personally handles manufacturing website design, B2B conversion optimization, and custom web development for companies whose websites need to generate qualified leads and support complex buying decisions — no account managers, no bench of junior developers.",
      },
    },
    {
      "@type": "Question",
      name: "What is the LAB Framework?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The LAB Framework is Black Lab Development's proprietary delivery methodology: Learn (understand business goals, users, and technical constraints), Architect (define the content strategy, conversion paths, and integration map), and Build (develop, optimize, and launch with measurement in place before go-live). The framework ensures every engagement produces predictable outcomes rather than depending on who happens to be assigned to the project.",
      },
    },
    {
      "@type": "Question",
      name: "Why hire a freelance developer instead of an agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you hire an agency, you pay for a sales team, a project manager, account management overhead, and a junior developer assigned after the senior who sold the project closes the deal. With Black Lab Development, you work directly with the person writing the code, making architecture decisions, and accountable for whether it works in production. There's no translation layer where requirements get distorted — direct access, senior-level thinking on every decision.",
      },
    },
  ],
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

// Career facts below come from Michael's LinkedIn profile (checked Nov 23, 2026).
// The brand list also includes clients Michael named directly.
const stats = [
  { value: "15+", label: "Years building websites and web applications" },
  { value: "30+", label: "Brands delivered for, from Fortune 500 to local" },
  { value: "60% → 97%", label: "Whole30 site health after technical SEO work" },
  { value: "6K+", label: "Daily users on Whole30.com, with peaks above 10K" },
];

// The national names lead in large type; the other groups sit on cards below.
const featuredBrands: { name: string; note?: string }[] = [
  { name: "Procter & Gamble", note: "Tide, Bounce" },
  { name: "Johnson & Johnson" },
  { name: "Best Buy" },
  { name: "FedEx Office" },
  { name: "Eddie Bauer" },
  { name: "Whole30" },
  { name: "Red Robin" },
  { name: "Kroger i\u2011Wireless" },
  { name: "Chiquita" },
  { name: "Isotoner" },
  { name: "Frisch's Big Boy" },
  { name: "T. Marzetti" },
];

const brandGroups: { label: string; icon: LucideIcon; brands: string[] }[] = [
  {
    label: "Parks, sports & entertainment",
    icon: FerrisWheel,
    brands: [
      "Herschend Family Entertainment",
      "Dollywood",
      "Wild Adventures",
      "Jellystone Parks",
      "Coney Island Park",
      "Cincinnati Bengals",
    ],
  },
  {
    label: "Healthcare & wellness",
    icon: HeartPulse,
    brands: [
      "St. Elizabeth Healthcare",
      "Haag-Streit USA",
      "Mona Dermatology",
      "Zero Gravity Aesthetics",
      "DexaFit Cincinnati",
    ],
  },
  {
    label: "B2B, industrial & local business",
    icon: Factory,
    brands: [
      "Veritiv",
      "Global Environmental Products",
      "Cohen Recycling",
      "DelCam Capital",
      "Globe Iron Roofing",
      "Legacy Financial Advisors",
      "Qvidian",
      "Enduir Cybersecurity",
      "Easy Way Products",
      "The Shortening Shuttle",
      "Golf Exchange",
      "City View Tavern",
    ],
  },
];

const career = [
  {
    years: "2010 – Present",
    company: "Black Lab Development",
    role: "Founder & Principal Developer",
    body: "Websites and platforms for startups, agencies and enterprise clients, owned end to end: scoping, architecture, development, optimization and long-term support.",
  },
  {
    years: "2022 – Present",
    company: "Whole30",
    role: "Principal Software Developer, now retained Technical Advisor",
    body: "Took over the Whole30 platform from an outside agency and brought strategy, development and operations in-house. Built custom WordPress themes, plugins and blocks, plus Laravel services connecting Shopify and SlickText.",
  },
  {
    years: "2013 – 2022",
    company: "The Creative Department",
    role: "Principal Software Developer",
    body: "Technical lead on WordPress, Drupal and Shopify platforms for enterprise and healthcare clients, including phone purchase and activation for Kroger i-Wireless and integrations with Salesforce, Marketo and Eloqua.",
  },
  {
    years: "2009 – 2013",
    company: "Empower MediaMarketing",
    role: "Senior Web Developer, joined through Powerhouse Factories",
    body: "Campaign platforms for national consumer and retail brands, including Red Robin, T. Marzetti and a gamified sweepstakes for Chiquita and the Fox film Rio.",
  },
];

const skills = [
  "WordPress",
  "Drupal",
  "Shopify",
  "Laravel",
  "Next.js",
  "Vue.js",
  "Sanity",
  "API integrations",
  "Technical SEO",
  "AI search",
  "Core Web Vitals",
  "Conversion optimization",
];

const comparison = [
  { agency: "Sales engineer sells the project", me: "I'm the one you talk to before, during, and after" },
  { agency: "Junior developer gets assigned after kickoff", me: "Senior-level thinking on every decision" },
  { agency: "Requirements filtered through project management", me: "Direct communication — no translation layer" },
  { agency: "Responsibility diffused across a team", me: "One person accountable for the outcome" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[personSchema, faqSchema]} />
      <main className="w-full bg-surface text-white">
      {/* ================= HERO ================= */}
      <PageHero
        label="About"
        title="About Michael Beasley, the Engineer Behind the Work"
        titleHighlight="the Engineer Behind the Work"
        description="I'm a senior web developer in Cincinnati, Ohio with 15+ years of experience building websites and platforms for national brands, agencies and small businesses. No middlemen, no markup — just the engineer who owns the outcome."
        backgroundImage="/images/about-hero-bg.jpg"
        imagePosition="82% 40%"
        badges={["Senior-led", "Direct access", "Full ownership"]}
      />

      {/* ================= BIO ================= */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-20 items-start">
            {/* Photo + links */}
            <div className="mx-auto w-full max-w-100 lg:mx-0">
              <div className="relative">
                <span aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-volt-500" />
                <div className="relative aspect-square overflow-hidden rounded-2xl ring-4 ring-[#0f2138]">
                  <Image
                    src="/images/michael-beasley.webp"
                    alt="Michael Beasley, senior web developer and founder of Black Lab Development, based in Cincinnati, Ohio"
                    fill
                    sizes="400px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex flex-1 items-center justify-center rounded-md bg-volt-500 px-6 py-3.5 text-sm font-bold text-neutral-100 transition-colors duration-200 hover:bg-volt-400"
                >
                  Schedule a Call →
                </Link>
                <a
                  href="https://www.linkedin.com/in/michaelkbeasley/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Michael Beasley on LinkedIn"
                  className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-md border-2 border-white/80 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-black"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Bio text + stats */}
            <div>
              <span className="eyebrow mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
                Founder &amp; Principal Developer
              </span>
              <h2 className="mb-6 text-3xl md:text-5xl font-bold tracking-tight text-white">
                I Build It. <span className="text-neutral-400">I Own the Outcome.</span>
              </h2>
              <div className="max-w-2xl space-y-5 leading-relaxed text-neutral-400">
                <p className="text-lg text-neutral-300">
                  I&apos;m a hands-on developer and technical leader in Cincinnati. For more than 15 years
                  I&apos;ve designed, built and scaled websites and web applications for national brands,
                  agencies and small businesses, with a focus on conversion, technical SEO and speed.
                </p>
                <p>
                  I founded Black Lab Development to do the kind of engineering work I actually respect:
                  direct engagement with complex problems, decisions made by the person who understands the
                  system, and outcomes tied to real business results — not billable hours.
                </p>
                <p>
                  Much of my work means stepping into systems with years of shortcuts and vendor lock-in,
                  understanding what&apos;s actually there, and making it better without blowing everything
                  up. I&apos;ve done that embedded with in-house teams, behind agencies, and as the only
                  engineer on the job.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="band-navy rounded-xl border-l-4 border-volt-500 p-6">
                    <div className="mb-1.5 text-4xl font-bold tracking-tight text-white">{stat.value}</div>
                    <div className="text-sm leading-snug text-neutral-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BRANDS ================= */}
      <section className="band-navy watermark watermark-light overflow-hidden border-y-4 border-volt-500 py-20 md:py-28">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="mb-12 flex flex-col gap-6 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow mb-4 text-xs tracking-[0.2em] uppercase font-semibold">Experience With</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                Brands I&apos;ve <span className="text-neutral-400">Delivered For</span>
              </h2>
            </div>
            <p className="max-w-md text-lg text-neutral-300">
              Across in-house, agency and freelance roles, from Fortune 500 names to growing regional companies.
            </p>
          </div>

          <h3 className="sr-only">National &amp; consumer brands</h3>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#0f2138]/30 shadow-[0_30px_80px_-30px_rgba(168,181,34,0.6)] md:grid-cols-3 lg:grid-cols-4">
            {featuredBrands.map(({ name, note }) => (
              <li
                key={name}
                className="group flex min-h-24 flex-col items-center justify-center bg-[#a8b522] px-3 py-6 text-center font-(family-name:--font-heading) text-lg font-bold leading-tight tracking-tight text-[#0f2138] transition-colors duration-300 hover:bg-[#ffffff] md:min-h-32 md:text-[1.65rem]"
              >
                {name}
                {note && <span className="mt-1.5 text-sm font-semibold tracking-normal md:text-base">{note}</span>}
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr_1.5fr]">
            {brandGroups.map(({ label, icon: Icon, brands }) => (
              <div key={label} className="rounded-2xl border-t-8 border-[#a8b522] bg-[#ffffff] p-7 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0f2138] text-[#d3de5c]" aria-hidden="true">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-lg font-bold leading-snug text-[#0f2138]">{label}</h3>
                </div>
                <ul className={brands.length > 8 ? "grid grid-cols-1 gap-x-6 sm:grid-cols-2" : ""}>
                  {brands.map((brand) => (
                    <li key={brand} className="flex items-center gap-3 border-t border-[#e1e6ee] py-2.5 text-[15px] font-semibold text-[#24344b]">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#a8b522]" aria-hidden="true" />
                      {brand}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAREER ================= */}
      <section className="bg-charcoal py-20 md:py-24">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px] lg:gap-16 items-start">
            <div>
              <span className="eyebrow mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">Career</span>
              <h2 className="mb-10 text-3xl md:text-5xl font-bold tracking-tight text-white">
                How I <span className="text-neutral-400">Got Here</span>
              </h2>
              <ol className="relative space-y-5 border-l-4 border-volt-500 pl-7 sm:pl-9">
                {career.map((job) => (
                  <li key={job.company} className="relative rounded-xl border border-neutral-800 bg-[#ffffff] p-6 shadow-[0_12px_30px_-18px_rgba(15,33,56,0.25)] md:p-7">
                    <span aria-hidden="true" className="absolute -left-[2.4rem] top-8 h-5 w-5 rounded-full border-4 border-volt-500 bg-[#0f2138] sm:-left-[2.9rem]" />
                    <p className="mb-2 inline-block rounded bg-[#0f2138] px-2.5 py-1 text-xs font-semibold tracking-wide text-black">{job.years}</p>
                    <h3 className="text-xl font-bold text-white">{job.company}</h3>
                    <p className="mb-3 text-sm font-semibold text-neutral-400">{job.role}</p>
                    <p className="text-sm leading-relaxed text-neutral-400">{job.body}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="space-y-5 lg:sticky lg:top-32">
              <div className="rounded-xl border border-neutral-800 border-t-4 border-t-volt-500 bg-[#ffffff] p-6">
                <h3 className="mb-4 text-lg font-bold text-white">What I Work In</h3>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li key={skill} className="rounded-full bg-neutral-900 px-3 py-1.5 text-sm font-medium text-neutral-300 ring-1 ring-neutral-800">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-neutral-800 border-t-4 border-t-volt-500 bg-[#ffffff] p-6">
                <h3 className="mb-4 text-lg font-bold text-white">Education</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-white">Master&apos;s, Management Information Systems</dt>
                    <dd className="text-neutral-400">Northern Kentucky University</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-white">Bachelor&apos;s, Management Information Systems</dt>
                    <dd className="text-neutral-400">Wright State University</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE HONEST PITCH ================= */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <span className="eyebrow mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
                The Case for Freelance
              </span>
              <h2 className="mb-6 text-3xl md:text-5xl font-bold tracking-tight text-white">
                Why It Matters <span className="text-neutral-400">Who Builds It</span>
              </h2>
              <div className="space-y-5 leading-relaxed text-neutral-400">
                <p className="text-lg text-neutral-300">
                  When you hire an agency, you pay for a sales team, a project manager, account
                  management, and a junior developer who gets assigned after the senior who sold you
                  closes the deal. You get a lot of process and sometimes very little engineering.
                </p>
                <p>
                  When you work with me, you talk directly to the person writing the code, making the
                  architecture decisions, and accountable for whether it actually works in production.
                </p>
                <p>
                  That doesn&apos;t mean I can do everything. I&apos;m honest about scope and about when a
                  problem needs more specialists. But for the things I take on, you get my full attention
                  and full accountability — not a rotating cast.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-[0_30px_70px_-30px_rgba(15,33,56,0.4)] ring-1 ring-neutral-800">
              <div className="grid grid-cols-2 text-xs font-bold uppercase tracking-[0.15em]">
                <div className="bg-neutral-900 px-5 py-4 text-neutral-400">Typical agency</div>
                <div className="bg-volt-500 px-5 py-4 text-neutral-100">Black Lab Dev</div>
              </div>
              {comparison.map((row) => (
                <div key={row.agency} className="grid grid-cols-2 border-t border-neutral-800 text-sm leading-relaxed">
                  <div className="bg-[#ffffff] px-5 py-5 text-neutral-400">{row.agency}</div>
                  <div className="bg-[#0f2138] px-5 py-5 font-medium text-black">{row.me}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="band-accent py-20 md:py-24">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <span className="eyebrow mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">How I Work</span>
          <h2 className="mb-10 text-3xl md:text-5xl font-bold tracking-tight text-white">
            What I <span className="text-neutral-400">Actually Believe</span>
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.label} className="flex gap-5 rounded-xl border border-neutral-800 bg-[#ffffff] p-7 shadow-[0_12px_30px_-18px_rgba(15,33,56,0.25)]">
                <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0f2138] text-lg font-bold text-[#d3de5c]">
                  {value.label}
                </span>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-400">{value.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LAB FRAMEWORK ================= */}
      <LabFramework />

      {/* ================= FAQ ================= */}
      <SelectedWork />

      <FaqSection
        headingId="about-faq-heading"
       
        faqs={faqSchema.mainEntity.map((faq) => ({ question: faq.name, answer: faq.acceptedAnswer.text }))}
      />

      {/* ================= CLOSE ================= */}
      <PageClose
        title="Work Directly With Me"
        body="No account managers or handoffs — just the engineer who builds your site."
        secondaryHref="/services"
        secondaryLabel="See What I Do"
      />
      </main>
    </>
  );
}
