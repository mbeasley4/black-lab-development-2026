import Image from "next/image";

const audiences = [
    {
        label: "Small & Growing Businesses",
        image: "/images/home/audience-small-business.jpg",
        alt: "Boutique retail shop with clothing on display",
        description: "A professional site that brings in calls, bookings, and quotes — not just exists.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
        ),
    },
    {
        label: "Agencies & Strategy Firms",
        image: "/images/home/audience-agency.jpg",
        alt: "Agency team working together on laptops",
        description: "White-label build and SEO capacity under your brand. You keep the client.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
            </svg>
        ),
    },
    {
        label: "Healthcare & Clinics",
        image: "/images/home/audience-healthcare.jpg",
        alt: "Bright, modern dental clinic treatment room",
        description: "Appointment bookings, patient acquisition, and local visibility.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        ),
    },
    {
        label: "Ecommerce & DTC",
        image: "/images/home/audience-ecommerce.jpg",
        alt: "Branded shopping bags on a dark background",
        description: "Higher AOV, faster pages, and conversion paths that close.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
        ),
    },
];

export default function RevenueFramework() {
    return (
        <section className="w-full bg-linear-to-b from-slate-950 to-slate-900 text-white py-20 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-150 h-150 bg-volt-500/6 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/20 to-transparent" />

            <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
                <div className="mb-14">
                    <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                        Who It&apos;s For
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
                        <span className="text-white">For Businesses That </span>
                        <span className="text-volt-500">Depend on Their Website</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Whether you&apos;re a small business that needs a site built right, or an agency that needs a technical partner you can white-label — I build it.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {audiences.map((item) => (
                        <div
                            key={item.label}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/40 transition-all duration-500 hover:-translate-y-1.5 hover:border-volt-500/40 hover:shadow-xl hover:shadow-volt-500/10"
                        >
                            <div className="relative h-44 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover grayscale-[60%] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent" />
                                <div className="absolute bottom-4 left-5 w-10 h-10 rounded-lg bg-black/60 backdrop-blur-md border border-volt-500/30 flex items-center justify-center text-volt-400 group-hover:bg-volt-500 group-hover:text-black transition-all duration-300">
                                    {item.icon}
                                </div>
                            </div>
                            <div className="flex-1 p-6">
                                <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-volt-400 transition-colors duration-200">
                                    {item.label}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-200">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
