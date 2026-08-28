export default function Testimonial() {
  return (
    <section className="w-full py-20 border-t border-slate-800/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black to-slate-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-volt-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <svg className="w-10 h-10 mx-auto mb-6 text-volt-500/30" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
          </svg>
          <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
            &ldquo;Michael didn&apos;t just build us a website — he rebuilt how we think about our online presence. Within 7 days of launch, our average order value jumped 164%. The ROI was immediate and measurable.&rdquo;
          </blockquote>
          <div>
            <p className="text-sm font-semibold text-white">Brian T.</p>
            <p className="text-xs text-slate-500">CEO, The Shortening Shuttle</p>
          </div>
        </div>
      </div>
    </section>
  );
}
