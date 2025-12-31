import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="relative overflow-hidden w-full py-28 border-t border-neutral-900">
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
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl text-white md:text-5xl font-semibold tracking-tight mb-6">
                        Let’s Build Something That Performs
                    </h2>

                    <p className="text-lg md:text-xl text-white leading-relaxed mb-10">
                        Whether you’re modernizing an existing platform or building something
                        new, Black Lab Development partners with teams that value thoughtful
                        engineering, measurable results, and long-term scalability.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md bg-white px-10 py-4 text-sm font-medium uppercase tracking-wide text-black transition hover:bg-neutral-200"
                        >
                            Start a Conversation
                        </Link>

                        <Link
                            href="/work"
                            className="inline-flex items-center justify-center rounded-md border border-neutral-700 px-10 py-4 text-sm font-medium uppercase tracking-wide text-neutral-300 transition hover:border-white hover:text-white"
                        >
                            View Our Work
                        </Link>
                    </div>

                    {/* Trust line */}
                    <p className="mt-10 text-sm text-neutral-500">
                        Trusted by enterprise brands, agencies, and growth-focused teams.
                    </p>
                </div>
            </div>
        </section>
    );
}
