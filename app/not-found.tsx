import CallToAction from "@/components/CallToAction";

export default function NotFound() {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Background with gradient overlay - matching hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-slate-900/90 to-black/95 z-0" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-16">
          <div className="max-w-3xl w-full text-center">
            {/* 404 with floating dog */}
            <div className="mb-8 md:mb-12 relative">
              <h1 className="text-[clamp(6rem,20vw,12rem)] font-bold leading-none text-white/10 select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl md:text-7xl">🐕</div>
              </div>
            </div>

            {/* Label - matching hero style */}
            <span className="inline-block mb-4 text-xs md:text-sm tracking-[0.2em] uppercase text-cyan-400 font-medium">
              Page Not Found
            </span>

            {/* Main message - matching hero typography */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5 md:mb-6">
              <span className="block text-white">This page went</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                off-leash.
              </span>
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl text-blue-50/90 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
              I tried calling it back, but it's too busy chasing
              <span className="inline-block mx-1">🐿️</span>
              squirrels in the park. Happens to the best of me.
            </p>

            {/* Code block with matching color scheme */}
            <div className="bg-slate-950/80 backdrop-blur-sm border border-cyan-400/20 text-left p-6 md:p-8 rounded-lg mb-10 md:mb-12 shadow-2xl shadow-cyan-500/10 font-mono text-sm md:text-base overflow-x-auto max-w-2xl mx-auto">
              <div className="text-cyan-400 mb-2">{'// Developer\'s notes:'}</div>
              <div className="text-blue-50/80 mb-1">{'const page = await fetch(requestedUrl);'}</div>
              <div className="text-blue-50/80 mb-1">{'if (!page) {'}</div>
              <div className="text-yellow-400 ml-4 mb-1">{'  console.log("lol whoops 🤷");'}</div>
              <div className="text-red-400 ml-4 mb-1">{'  throw new Error("Page escaped");'}</div>
              <div className="text-blue-50/80">{'}'}</div>
            </div>

            {/* CTA Buttons - matching hero style */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-cyan-500 text-black px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-semibold hover:bg-cyan-400 transition-colors duration-200 shadow-lg shadow-cyan-500/30"
              >
                Back to Home
              </a>

              <a
                href="/work"
                className="inline-flex items-center justify-center rounded-md border-2 border-cyan-400/60 px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-semibold text-white hover:bg-cyan-500/10 hover:border-cyan-300 transition-all duration-200"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <CallToAction />
    </>
  );
}