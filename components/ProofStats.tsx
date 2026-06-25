import Image from "next/image";

const logos = [
    { src: "/images/work/delcam-logo.svg", alt: "Delcam Capital" },
    { src: "/images/work/faztek-logo.png", alt: "Faztek" },
    { src: "/images/work/haag-streit-logo.png", alt: "Haag-Streit" },
    { src: "/images/work/melink-logo.png", alt: "Melink" },
    { src: "/images/work/plastechmold-logo.png", alt: "PlastechMold" },
    { src: "/images/work/shortening-shuttle-logo.png", alt: "The Shortening Shuttle" },
    { src: "/images/work/enduir-logo.png", alt: "Enduir" },
    { src: "/images/work/providence-logo-w.png", alt: "Providence" },
    { src: "/images/work/blum-logo.png", alt: "Blum" },
    { src: "/images/work/buzzworthy-logo.png", alt: "Buzzworthy" },
    { src: "/images/work/epoxies-logo.png", alt: "Epoxies" },
    { src: "/images/work/frischs-logo.png", alt: "Frisch's" },
    { src: "/images/work/mona-logo.png", alt: "Mona" },
    { src: "/images/work/seven-logo.png", alt: "Seven" },
    { src: "/images/work/zerogravity-logo.png", alt: "Zero Gravity" },
];

function LogoSet() {
    return (
        <div className="flex shrink-0 items-center gap-16 md:gap-20">
            {logos.map((logo) => (
                <div
                    key={logo.alt}
                    className="relative h-10 w-32 md:h-12 md:w-40 shrink-0 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(227,245,68,0.5)]"
                >
                    <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        sizes="(max-width: 768px) 160px, 240px"
                        unoptimized={logo.src.endsWith(".svg")}
                        className="object-contain"
                    />
                </div>
            ))}
        </div>
    );
}

export default function ProofStats() {
    return (
        <section className="w-full bg-black text-white py-20 border-t border-volt-500/10 border-b border-b-slate-800/60">
            <div className="mx-auto max-w-375 px-6 text-center">
                <h2 className="text-lg md:text-xl uppercase tracking-[0.28em] text-slate-300 mb-12">
                    Trusted by <span className="text-volt-400">growing businesses</span> and organizations
                </h2>
            </div>
            <div className="relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />
                <div className="flex w-max animate-marquee gap-16 md:gap-20">
                    <LogoSet />
                    <LogoSet />
                </div>
            </div>
        </section>
    );
}
