import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import JsonLd from "@/components/JsonLd";
import FaqSection from "@/components/FaqSection";
import FounderByline from "@/components/FounderByline";

export const metadata: Metadata = {
  title: "Custom Laravel Development | APIs, Integrations & Web Apps",
  description:
    "Custom Laravel development for APIs, platform integrations, and internal tools — clean architecture, no framework bloat, built to run in production.",
  alternates: { canonical: "/laravel-development" },
  openGraph: {
    title: "Custom Laravel Development | APIs, Integrations & Web Apps | Black Lab Dev",
    description:
      "Custom Laravel development for APIs, platform integrations, and internal tools — clean architecture, no framework bloat, built to run in production.",
    url: "/laravel-development",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Custom Laravel Development | APIs, Integrations & Web Apps | Black Lab Dev",
    description:
      "Custom Laravel development for APIs, platform integrations, and internal tools — clean architecture, built to run in production.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const services = [
  {
    title: "Custom API Development",
    body: "RESTful and GraphQL APIs built with clean routing, proper validation, and authentication — designed to be consumed by frontends, mobile apps, and third-party systems without friction.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Platform Integrations",
    body: "Shopify, SlickText, Stripe, HubSpot, Salesforce — I connect Laravel to the platforms your business already runs on. Clean service classes, proper error handling, and webhook processing that doesn't break.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Internal Tools & Admin Portals",
    body: "Custom dashboards, order management systems, and operational tools that replace spreadsheets and manual processes. Built for the people who actually use them — not for a demo.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
  {
    title: "Queue & Job Processing",
    body: "Background jobs, scheduled tasks, and queue-driven workflows for SMS delivery, data syncing, report generation, and anything that shouldn't block a user request.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Laravel + React / Vue SPAs",
    body: "Full-stack applications with Laravel APIs powering React or Vue frontends. Clean separation of concerns, token-based auth, and real-time features when the project calls for them.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
];

const processSteps = [
  { step: "01", title: "Requirements & Data Modeling", body: "I define the domain model, integration points, and data flow before writing code. Eloquent relationships, migration strategy, and API contracts are planned upfront." },
  { step: "02", title: "Architecture & Service Design", body: "Clean service classes, repository patterns where they earn their keep, and a folder structure that scales. No god controllers, no 500-line models." },
  { step: "03", title: "Integration Engineering", body: "Third-party APIs get their own service layers with proper error handling, retry logic, and webhook verification. Shopify webhooks, SMS delivery callbacks, payment events — handled correctly." },
  { step: "04", title: "Build & Test", body: "Feature tests for critical paths, unit tests for business logic, and integration tests for third-party connections. Code is deployed with confidence, not crossed fingers." },
  { step: "05", title: "Queue, Cache & Performance", body: "Redis-backed queues for async processing, proper cache invalidation, and database query optimization. The app stays fast as data grows." },
  { step: "06", title: "Deploy & Monitor", body: "CI/CD pipeline, environment configuration, error tracking, and performance monitoring. I don't disappear after deployment — I make sure it runs." },
];

const faqs = [
  {
    q: "Why choose Laravel over other PHP frameworks?",
    a: "Laravel provides the best balance of developer productivity and production-grade architecture in the PHP ecosystem. Its Eloquent ORM, queue system, job scheduling, and first-party packages for authentication, API development, and event broadcasting mean less custom plumbing and more focus on your actual business logic.",
  },
  {
    q: "Can Laravel handle enterprise-scale applications?",
    a: "Yes. Laravel powers production applications handling millions of requests daily. With proper architecture — queue-driven processing, caching layers, database optimization, and horizontal scaling — Laravel applications perform at scale. The framework isn't the bottleneck; the architecture decisions are.",
  },
  {
    q: "How do you handle third-party integrations like Shopify and SlickText?",
    a: "Every integration gets its own service class with proper error handling, retry logic, and webhook verification. I don't scatter API calls across controllers. Integration failures are logged, retried where appropriate, and surfaced to admins — not silently swallowed.",
  },
  {
    q: "Do you build frontends too, or just the Laravel backend?",
    a: "Both. I build full-stack applications with Laravel APIs powering React or Vue frontends, as well as Laravel apps with Blade/Livewire for admin tools and internal platforms. The frontend choice depends on your team and your users.",
  },
  {
    q: "How long does a custom Laravel project take?",
    a: "Most Laravel projects run 6–14 weeks depending on integration complexity, data modeling requirements, and frontend scope. API-first builds with clean integrations can ship faster. Complex platforms with multiple third-party connections and admin interfaces take longer. I scope accurately upfront.",
  },
  {
    q: "How much does custom Laravel development cost?",
    a: "Custom Laravel projects at Black Lab Development range from $5,000 for focused API builds and internal tools to $28,000+ for complex platforms with multiple integrations, queue-driven workflows, and custom admin interfaces. Pricing reflects actual scope and complexity.",
  },
];

const useCases = [
  "SaaS platforms needing clean API architecture and multi-tenant support",
  "E-commerce businesses connecting Shopify with SMS, CRM, and fulfillment systems",
  "Companies replacing manual processes with custom internal tools",
  "Teams needing queue-driven workflows for data processing and notifications",
  "Businesses outgrowing off-the-shelf solutions like Zapier and Make",
  "Organizations needing custom admin portals for operations teams",
];

const performancePoints = [
  { label: "Queue-driven architecture", detail: "Background jobs for SMS delivery, data syncing, and anything that shouldn't block a web request." },
  { label: "Redis caching & session management", detail: "Proper cache layers that reduce database load and keep response times low as data scales." },
  { label: "Database optimization", detail: "Eloquent eager loading, indexed queries, and migration discipline — not N+1 queries discovered in production." },
  { label: "Horizontal scaling ready", detail: "Stateless request handling, queue workers, and configuration that supports load balancing from day one." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://blacklabdev.com/laravel-development#service",
  name: "Custom Laravel Development",
  url: "https://blacklabdev.com/laravel-development",
  description:
    "Custom Laravel development for APIs, platform integrations, and internal tools — clean architecture, no framework bloat, built to run in production.",
  provider: { "@type": "Organization", "@id": "https://blacklabdev.com/#business" },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Laravel Development",
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

const caseStudies = [
  {
    title: "Whole30 — Shopify + SlickText SMS Platform",
    description:
      "A custom Laravel admin portal connecting Shopify order data with SlickText SMS delivery. Manages subscriber lifecycles, automates daily SMS sequences, and gives the Whole30 operations team full visibility into order status, message delivery, and opt-out handling.",
    stats: [
      { value: "Shopify", label: "Order sync", detail: "Real-time webhook processing from Shopify to Laravel" },
      { value: "SlickText", label: "SMS automation", detail: "Daily message sequences with delivery tracking and opt-out management" },
      { value: "Custom", label: "Admin portal", detail: "Order management, subscriber tracking, and email/SMS logs" },
    ],
    images: [
      { src: "/images/w30-app-imgs/w30-screenshot-login.png", alt: "Whole30 Admin Portal — login screen with dashboard preview" },
      { src: "/images/w30-app-imgs/w30-screenshot-active-list.png", alt: "Whole30 Admin Portal — active orders list showing SMS delivery status" },
      { src: "/images/w30-app-imgs/w30-screenshot-individual.png", alt: "Whole30 Admin Portal — individual order with SlickText and Shopify connections and sent messages" },
    ],
  },
  {
    title: "Fit30 Community — Laravel + React",
    description:
      "A full-stack fitness community platform built with a Laravel API backend and React frontend. User management, community features, and program tracking — built for scale from day one.",
    stats: [
      { value: "Laravel", label: "API backend", detail: "RESTful API with token-based authentication and role management" },
      { value: "React", label: "Frontend SPA", detail: "Responsive single-page application with real-time updates" },
      { value: "Full-stack", label: "Custom platform", detail: "End-to-end build from data model to deployed application" },
    ],
    link: { href: "https://fit30.blacklabdev.com", label: "Visit fit30.blacklabdev.com" },
  },
  {
    title: "SiteMonitor — Uptime & Performance Monitoring",
    description:
      "A Laravel-powered site monitoring tool with scheduled health checks, alerting, and performance tracking. Queue-driven architecture handles check scheduling without blocking the application.",
    stats: [
      { value: "Queue", label: "Driven checks", detail: "Scheduled monitoring jobs processed through Redis-backed queues" },
      { value: "Real-time", label: "Alerting", detail: "Notifications triggered by downtime and performance threshold breaches" },
      { value: "Dashboard", label: "Monitoring UI", detail: "Status overview, response time history, and incident tracking" },
    ],
    link: { href: "https://mntr.blacklabdev.com", label: "Visit mntr.blacklabdev.com" },
  },
];

export default function LaravelDevelopmentPage() {
  return (
    <main className="w-full bg-[#0b0b0c] text-white">
      <JsonLd data={[serviceSchema, faqSchema]} />
      <PageHero
        label="Laravel Development"
        title="Laravel, Minus the Spaghetti Code."
        titleHighlight="Minus the Spaghetti Code."
        description="Most Laravel apps rot into fat controllers and silent queue failures nobody monitors. I build custom — service architecture, integration resilience, zero spaghetti code."
        backgroundImage="/images/laravel-hero-bg.jpg"
        badges={["Clean architecture", "Production-grade integrations", "Full-stack Laravel"]}
      />

      {/* Hero CTAs */}
      <section className="border-b border-slate-800 bg-[#111214]">
        <div className="mx-auto max-w-375 px-6 py-8 flex flex-wrap gap-4">
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
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                The Problem
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Custom Laravel Development Built for Real Integrations
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Most Laravel projects fail not because of the framework — but because of how they&apos;re built. Business logic scattered across controllers, integrations that break silently, and queue jobs that nobody monitors.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                At Black Lab Dev, I build Laravel applications with clean service architecture, proper integration engineering, and the kind of error handling that means your operations team doesn&apos;t discover problems from angry customers.
              </p>
              <p className="text-slate-400 leading-relaxed font-medium">
                No god controllers. No silent failures. No &ldquo;it works on my machine.&rdquo;
              </p>
            </div>
            <div className="space-y-4">
              {[
                { problem: "Integration spaghetti", impact: "API calls scattered across controllers with no error handling, no retry logic, and no logging. When Shopify's webhook fails, nobody knows until a customer complains." },
                { problem: "Fat controllers, thin models", impact: "Business logic lives in controllers instead of service classes. Testing is impossible, reuse is impossible, and every change risks breaking something unrelated." },
                { problem: "Queue jobs without monitoring", impact: "Background jobs fail silently. SMS messages don't send, data doesn't sync, and reports don't generate — but the app looks healthy because the web layer still responds." },
                { problem: "No deployment discipline", impact: "Manual deployments, environment configuration drift, and no rollback plan. Every deploy is a coin flip." },
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
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
              What I Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Laravel Development Services
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Full-service Laravel development for businesses that need production-grade applications — not a tutorial-quality prototype.
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

      {/* Built right */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                Why I&apos;m Different
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Built for Production, Not for Demos
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Most Laravel shops build to get something running. I build to keep it running — under real traffic, real data, and real integration failures. The difference shows up at 2 a.m. when a webhook stops firing.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Your Laravel application becomes infrastructure your business depends on — not a fragile prototype that needs constant babysitting.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Service-oriented architecture", detail: "Business logic in service classes, not controllers. Testable, reusable, and maintainable by the next developer." },
                { label: "Integration resilience", detail: "Every third-party connection has error handling, retry logic, and logging. Failures are surfaced, not swallowed." },
                { label: "Queue monitoring & reliability", detail: "Failed jobs are tracked, retried, and escalated. Background processing is treated as production infrastructure." },
                { label: "Proper test coverage", detail: "Feature tests for critical paths, integration tests for API connections. Deploys ship with confidence." },
                { label: "CI/CD & environment parity", detail: "Automated deployments, environment configuration management, and staging that matches production." },
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
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
              My Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Architecture First, Code Second
            </h2>
            <p className="text-slate-400 leading-relaxed">
              I don&apos;t start with `laravel new` and figure it out as I go. Every project starts with domain modeling, integration mapping, and service architecture — then I build exactly what&apos;s needed.
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
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                Performance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Built to Scale Under Real Load
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Laravel applications that perform well at demo scale often fall apart under production traffic. The difference is architecture decisions made early — queue strategy, caching layers, and database optimization that&apos;s baked in, not bolted on.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I build applications that stay fast as your data grows and your integrations multiply.
              </p>
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
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                Use Cases
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                When Laravel Is the Right Choice
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Laravel excels at backend-heavy applications with complex integrations, queue-driven workflows, and structured APIs. If your project is mostly content, a CMS is probably the better fit — but if it&apos;s mostly logic, Laravel is hard to beat.
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

      {/* Case Studies */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-volt-500/35 bg-volt-500/8 text-volt-500 text-xs font-bold tracking-[0.2em] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-volt-500 shadow-[0_0_8px_rgba(227,245,68,0.9)]" />
              Laravel Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Recent Laravel Builds
            </h2>
            <div className="mt-4 h-px w-32 bg-linear-to-r from-volt-500/60 via-volt-500/25 to-transparent" />
          </div>

          <div className="space-y-20">
            {caseStudies.map((study, i) => (
              <div key={study.title} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{study.description}</p>
                    {"link" in study && study.link && (
                      <a
                        href={study.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-volt-500 hover:text-volt-400 transition-colors duration-200"
                      >
                        {study.link.label}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {study.stats.map((stat) => (
                      <div key={stat.label} className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-5 text-center transition-all duration-300 hover:border-volt-500/30 hover:shadow-[0_0_30px_rgba(227,245,68,0.05)]">
                        <div className="text-lg font-black text-volt-500 drop-shadow-[0_0_10px_rgba(227,245,68,0.4)] mb-1">{stat.value}</div>
                        <div className="text-xs font-semibold text-white mb-1">{stat.label}</div>
                        <div className="text-[11px] text-slate-500 leading-snug">{stat.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Whole30 screenshots */}
                {"images" in study && study.images && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {study.images.map((img) => (
                      <div
                        key={img.src}
                        className="group relative aspect-video rounded-xl overflow-hidden border border-neutral-800 hover:border-volt-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(227,245,68,0.08)]"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                )}

                {i < caseStudies.length - 1 && (
                  <div className="h-px bg-linear-to-r from-transparent via-volt-500/15 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        faqs={faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
      />

      {/* Internal links */}
      <section className="py-16 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <h2 className="text-lg font-bold text-white mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-lg border border-volt-500/30 bg-volt-500/8 px-6 py-3 text-sm font-semibold text-volt-400 hover:border-volt-400 hover:bg-volt-500/15 transition-all duration-200"
            >
              All Services →
            </Link>
            <Link
              href="/services/custom-web-development"
              className="rounded-lg border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              Custom Web Development →
            </Link>
            <Link
              href="/wordpress-development"
              className="rounded-lg border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              WordPress Development →
            </Link>
            <Link
              href="/drupal-development"
              className="rounded-lg border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              Drupal Development →
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
        title="Work With a Laravel Developer Who Builds for Production"
        bodyPrimary="If your application needs clean integrations, reliable queue processing, and architecture that scales — not just a working prototype — let's talk about what you're building."
        bodySecondary="No framework tourism. No tutorial-quality code. Just production-grade Laravel built by an engineer who's accountable for whether it runs."
        secondaryHref="/case-studies"
        secondaryLabel="View Case Studies"
      />
    </main>
  );
}
