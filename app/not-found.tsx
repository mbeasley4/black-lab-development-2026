import CallToAction from "@/components/CallToAction";

export default function NotFound() {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0b0b0c]/95 via-[#111214]/90 to-black/95 z-0" />

        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-16">
          <div className="max-w-3xl w-full text-center">
            <div className="mb-8 md:mb-12 relative">
              <h1 className="text-[clamp(6rem,20vw,12rem)] font-bold leading-none text-white/10 select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl md:text-7xl">🐕</div>
              </div>
            </div>

            <span className="inline-block mb-4 text-xs md:text-sm tracking-[0.2em] uppercase text-volt-500 font-medium">
              Page Not Found
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5 md:mb-6">
              <span className="block text-white">This page went</span>
              <span className="block text-volt-500">
                off-leash.
              </span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-[#e5e7eb]/90 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
              I tried calling it back, but it&apos;s too busy chasing
              <span className="inline-block mx-1">🐿️</span>
              squirrels in the park. Happens to the best of me.
            </p>

            <div className="bg-slate-950/80 backdrop-blur-sm border border-volt-500/20 text-left p-6 md:p-8 rounded-lg mb-10 md:mb-12 shadow-2xl shadow-volt-500/10 font-mono text-sm md:text-base overflow-x-auto max-w-2xl mx-auto">
              <div className="text-volt-500 mb-2">{'// Developer\'s notes:'}</div>
              <div className="text-[#e5e7eb]/80 mb-1">{'const page = await fetch(requestedUrl);'}</div>
              <div className="text-[#e5e7eb]/80 mb-1">{'if (!page) {'}</div>
              <div className="text-yellow-400 ml-4 mb-1">{'  console.log("lol whoops 🤷");'}</div>
              <div className="text-red-400 ml-4 mb-1">{'  throw new Error("Page escaped");'}</div>
              <div className="text-[#e5e7eb]/80">{'}'}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-volt-500 text-black px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-semibold hover:bg-volt-400 transition-colors duration-200 shadow-lg shadow-volt-500/30"
              >
                Back to Home
              </a>

              <a
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-md border-2 border-volt-500/60 px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-semibold text-white hover:bg-volt-500/10 hover:border-volt-400 transition-all duration-200"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
