import Image from "next/image";

export default function PositioningStrike() {
    return (
        <section className="w-full py-24 relative overflow-hidden border-t border-slate-800/50">
            <div className="absolute inset-0 bg-linear-to-br from-[#0b0b0c] via-[#111214] to-slate-950" />
            <div className="absolute inset-0 bg-linear-to-tr from-amber-500/4 via-transparent to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/30 to-transparent" />

            <div className="relative z-10 mx-auto max-w-375 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                    {/* Left: text */}
                    <div>
                        <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-amber-500 font-semibold">
                            The Bigger Picture
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-10">
                            Built to Support Growth
                        </h2>

                        <div className="space-y-4 max-w-xl">
                            <p className="text-xl text-slate-400 leading-relaxed">
                                Your website shouldn&apos;t hold back your marketing.
                            </p>
                            <p className="text-xl text-white leading-relaxed font-medium">
                                It should make everything work better — from SEO and paid traffic to content and campaigns.
                            </p>
                        </div>

                        <div className="mt-10 flex items-center gap-3">
                            <div className="h-px w-10 bg-amber-500" />
                            <div className="h-px w-5 bg-amber-500/40" />
                            <div className="h-px w-3 bg-amber-500/15" />
                        </div>
                    </div>

                    {/* Right: image */}
                    <div className="relative">
                        {/* Glow behind the image */}
                        <div className="absolute -inset-4 bg-amber-500/8 rounded-3xl blur-2xl" />

                        <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-black/60">
                            {/* Browser chrome bar */}
                            <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-900 border-b border-slate-800">
                                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                <div className="ml-3 flex-1 h-5 rounded bg-slate-800 max-w-45" />
                            </div>

                            <Image
                                src="/images/work/faztek-screenshot.jpg"
                                alt="Faztek industrial website — built for technical buyers"
                                width={800}
                                height={520}
                                className="w-full object-cover object-top"
                            />

                            {/* Subtle bottom fade */}
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-slate-950/60 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
