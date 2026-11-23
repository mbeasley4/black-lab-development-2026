import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { getProjectDetail } from "@/data/projectDetails";

/**
 * "Selected Work / Results, Not Brochures" — a light band with a diagonal-line texture of three
 * project cards. Each card leads with a real, verified number where one exists.
 * Pass `slugs` to show the projects most relevant to the page.
 */

// Headline stats for projects whose measured results live in Sanity rather
// than data/projectDetails.ts. Keep these in sync with the project pages.
const STAT_OVERRIDES: Record<string, { value: string; label: string }> = {
    "ecommerce-website-redesign-increase-aov": { value: "+164%", label: "Average order value" },
    "zero-gravity-performance-rebuild": { value: "80ms", label: "Total blocking time, down from 400ms" },
};

const DEFAULT_SLUGS = [
    "city-view-tavern-wordpress-block-theme",
    "ecommerce-website-redesign-increase-aov",
    "dexafit-cincinnati-squarespace-seo",
];

function statFor(slug: string) {
    if (STAT_OVERRIDES[slug]) return STAT_OVERRIDES[slug];
    const detail = getProjectDetail(slug);
    const m = detail?.results?.[0] ?? detail?.metrics?.[0];
    return m ? { value: m.value, label: m.label } : null;
}

export default function SelectedWork({
    slugs = DEFAULT_SLUGS,
    title = "Results, Not",
    titleHighlight = "Brochures",
    intro = "Every project is judged by what it changes: more people finding the site, more of them getting in touch, and pages that load fast.",
}: {
    slugs?: string[];
    title?: string;
    titleHighlight?: string;
    intro?: string;
}) {
    const items = slugs
        .map((slug) => projects.find((p) => p.slug === slug))
        .filter((p): p is (typeof projects)[number] & { slug: string } => Boolean(p?.slug))
        .slice(0, 3);

    if (items.length === 0) return null;

    return (
        <section className="band-light relative w-full overflow-hidden border-y border-neutral-200 bg-neutral-100 py-24 text-neutral-950 md:py-28">
            {/* Diagonal line texture, matching the "More Work" band on project pages */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: "repeating-linear-gradient(135deg, #000 0 1px, transparent 1px 14px)" }}
            />

            <div className="relative z-10 mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
                <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                            Selected Work
                        </span>
                        <h2 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
                            {title} <span className="text-neutral-600">{titleHighlight}</span>
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-neutral-600">{intro}</p>
                    </div>
                    <Link
                        href="/work"
                        className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-neutral-950 transition-colors duration-200 hover:text-neutral-600"
                    >
                        View all work
                        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {items.map((p) => {
                        const stat = statFor(p.slug);
                        return (
                            <Link
                                key={p.slug}
                                href={`/work/${p.slug}`}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(15,33,56,0.01)] transition-all duration-300 hover:border-neutral-300 hover:shadow-[0_24px_50px_-24px_rgba(15,33,56,0.09)] motion-safe:hover:-translate-y-1"
                            >
                                <div className="relative aspect-16/10 w-full overflow-hidden border-b border-neutral-200 bg-neutral-100">
                                    <Image
                                        src={p.screenshot}
                                        alt={`${p.name} website`}
                                        fill
                                        sizes="(min-width: 768px) 33vw, 100vw"
                                        className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
                                    />
                                </div>
                                <div className="flex grow flex-col p-6 md:p-7">
                                    <div className="mb-4 flex items-center justify-between gap-3">
                                        <span className="text-sm font-semibold text-neutral-950">{p.name}</span>
                                        <span className="shrink-0 rounded-full border border-neutral-200 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-600">
                                            {p.platform}
                                        </span>
                                    </div>
                                    {stat ? (
                                        <>
                                            <p className="text-4xl font-bold leading-none tracking-tight md:text-5xl">{stat.value}</p>
                                            <p className="mt-2 text-sm leading-snug text-neutral-600">{stat.label}</p>
                                        </>
                                    ) : (
                                        <p className="text-sm leading-relaxed text-neutral-600 line-clamp-3">{p.summary}</p>
                                    )}
                                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-neutral-950">
                                        See the project
                                        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
