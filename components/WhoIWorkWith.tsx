import Link from "next/link";
import { Check, Handshake, Store, type LucideIcon } from "lucide-react";

type Audience = {
    icon: LucideIcon;
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
    cta: string;
    href: string;
    related: { label: string; href: string }[];
    relatedLabel: string;
};

const audiences: Audience[] = [
    {
        icon: Store,
        eyebrow: "Small Businesses",
        title: "A website that brings in customers",
        description:
            "Custom-built, fast, and designed around how your customers decide — not a template with your logo dropped in.",
        points: [
            "Custom design, no templates or page builders",
            "Local SEO and fast load times built in",
            "Easy to update yourself after launch",
        ],
        cta: "Small business websites",
        href: "/services/small-business-website-design",
        relatedLabel: "Recent work",
        related: [
            { label: "City View Tavern", href: "/work/city-view-tavern-wordpress-block-theme" },
            { label: "Globe Iron Roofing", href: "/work/globe-iron-roofing-wordpress-theme" },
            { label: "Zero Gravity NKY", href: "/work/zero-gravity-performance-rebuild" },
        ],
    },
    {
        icon: Handshake,
        eyebrow: "Agency Partners",
        title: "Senior dev capacity, under your brand",
        description:
            "White-label builds delivered on time and to spec, with no client contact unless you want it. Your margins stay intact.",
        points: [
            "Delivered under your brand, to your client",
            "NDA-friendly, with no client poaching",
            "WordPress, Shopify, Next.js and technical SEO",
        ],
        cta: "Partner with me",
        href: "/partners",
        relatedLabel: "How it works",
        related: [
            { label: "White-label web development", href: "/partners/white-label-web-development" },
            { label: "Technical SEO fulfillment", href: "/partners/seo-fulfillment" },
        ],
    },
];

export default function WhoIWorkWith() {
    return (
        <section className="w-full bg-neutral-100 text-neutral-950 py-28 relative overflow-hidden">
            <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
                <div className="mb-14 max-w-2xl">
                    <span className="inline-block mb-4 text-xs tracking-[0.2em] uppercase text-neutral-500 font-semibold">
                        Who It&apos;s For
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                        Websites for Small Businesses<br />
                        <span className="text-neutral-500">and Agency Partners.</span>
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-neutral-600">
                        Two kinds of clients, one standard: a custom site built and supported directly by a senior developer.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {audiences.map((a) => {
                        const Icon = a.icon;
                        return (
                            <article
                                key={a.href}
                                className="flex flex-col rounded-2xl bg-neutral-950 p-8 md:p-10 text-white shadow-[0_24px_50px_-24px_rgba(0,0,0,0.45)] ring-1 ring-black/5"
                            >
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.08] text-white" aria-hidden="true">
                                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                                    </span>
                                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">{a.eyebrow}</span>
                                </div>

                                <h3 className="mb-3 text-2xl md:text-3xl font-bold leading-snug">{a.title}</h3>
                                <p className="mb-6 max-w-md leading-relaxed text-neutral-400">{a.description}</p>

                                <ul className="mb-8 space-y-3 border-t border-white/10 pt-6">
                                    {a.points.map((point) => (
                                        <li key={point} className="flex items-start gap-3 text-neutral-200">
                                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" strokeWidth={2.5} aria-hidden="true" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto flex flex-col gap-5">
                                    <Link
                                        href={a.href}
                                        className="group inline-flex w-fit items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-black hover:bg-neutral-200 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                                    >
                                        {a.cta}
                                        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                                    </Link>
                                    <p className="text-sm text-neutral-500">
                                        <span className="mr-1">{a.relatedLabel}:</span>
                                        {a.related.map((r, i) => (
                                            <span key={r.href}>
                                                {i > 0 && <span aria-hidden="true"> · </span>}
                                                <Link
                                                    href={r.href}
                                                    className="text-neutral-300 underline decoration-neutral-700 underline-offset-4 hover:text-white hover:decoration-neutral-400 transition-colors duration-200"
                                                >
                                                    {r.label}
                                                </Link>
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
