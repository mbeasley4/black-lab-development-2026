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
];

export default function ProofStats() {
    return (
        <section className="w-full bg-black text-white py-14 border-t border-amber-500/10 border-b border-b-slate-800/60">
            <div className="mx-auto max-w-375 px-6 text-center">
                <h2 className="text-md uppercase tracking-[0.28em] text-slate-500 mb-10">
                    Trusted by growing businesses and organizations
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
                    {logos.map((logo) => (
                        <div
                            key={logo.alt}
                            className="relative h-7 w-24 opacity-35 hover:opacity-60 transition-opacity duration-300 grayscale hover:grayscale-0"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                fill
                                unoptimized={logo.src.endsWith(".svg")}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
