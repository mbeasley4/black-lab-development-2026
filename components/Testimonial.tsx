import Link from "next/link";

export default function Testimonial() {
  return (
    <section className="band-navy watermark watermark-light w-full overflow-hidden border-y-4 border-volt-500 py-24 md:py-28">
      <figure className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-14">
          <svg className="h-16 w-16 text-volt-500 lg:h-28 lg:w-28" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
          </svg>

          <div className="max-w-5xl">
            <blockquote className="font-(family-name:--font-heading) text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl lg:text-[2.5rem] lg:leading-[1.25]">
              &ldquo;Michael didn&apos;t just build us a website — he rebuilt how we think about our online presence. Within 7 days of launch,{" "}
              <strong className="font-bold text-[#d3de5c]">our average order value jumped 164%.</strong>{" "}
              The ROI was immediate and measurable.&rdquo;
            </blockquote>

            <figcaption className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-volt-500 text-base font-bold" aria-hidden="true">
                  BT
                </span>
                <div>
                  <p className="text-base font-semibold text-white">Brian T.</p>
                  <p className="text-sm text-neutral-300">CEO, The Shortening Shuttle</p>
                </div>
              </div>
              <Link
                href="/work/ecommerce-website-redesign-increase-aov"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#d3de5c] underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:decoration-current"
              >
                See the project
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </figcaption>
          </div>
        </div>
      </figure>
    </section>
  );
}
