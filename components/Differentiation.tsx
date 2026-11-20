import Image from "next/image";

const failPoints = [
    "They look good but don't convert",
    "They rank poorly because of weak technical foundations",
    "They're slow, bloated, and hard to maintain",
    "They don't guide users to take action",
    "They create friction instead of trust",
];

export default function Differentiation() {
    return (
        <section className="w-full bg-charcoal text-white py-28 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

            <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left */}
                    <div className="lg:sticky lg:top-32">
                        <span className="inline-block mb-5 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
                            The Problem
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                           When Your Website<br/>
                           <span className="text-neutral-400">Has to Perform</span>
                        </h2>

                        <div className="group relative mt-10 aspect-[3/2] w-full overflow-hidden rounded-2xl border border-neutral-800/60">
                            <Image
                                src="/images/home/performance-dashboard.jpg"
                                alt="Website analytics dashboard showing load time and bounce rate"
                                fill
                                sizes="(min-width: 1024px) 45vw, 100vw"
                                className="object-cover grayscale-[40%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
                            <div className="absolute inset-0 bg-white/[0.04] mix-blend-overlay" />
                            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-400 opacity-75" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neutral-400" />
                                </span>
                                <p className="text-sm font-medium text-neutral-200">
                                    Speed, structure, and conversion — measured, not guessed.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: problem cards */}
                    <div className="flex flex-col gap-4">
                        {failPoints.map((item) => (
                            <div key={item} className="group flex items-center gap-4 p-5 rounded-xl border border-neutral-800/50 bg-neutral-900/30 hover:border-neutral-500 hover:bg-white/5 transition-all duration-300">
                                <span className="shrink-0 w-2 h-2 rounded-full bg-white/[0.04] group-hover:bg-volt-500 transition-colors duration-300" />
                                <p className="text-lg md:text-xl text-neutral-300 leading-snug font-medium group-hover:text-white transition-colors duration-300">
                                    {item}
                                </p>
                            </div>
                        ))}
                        <p className="mt-4 text-sm text-neutral-500 font-semibold tracking-wide uppercase">
                            That&apos;s not a marketing problem. It&apos;s a build problem.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
