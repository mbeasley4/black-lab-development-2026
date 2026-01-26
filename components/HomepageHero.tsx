import React from "react";

interface HeroProps {
    backgroundMobileImage?: string;
    backgroundImage?: string;
    backgroundVideoMp4?: string;
    backgroundVideoWebm?: string;
}

const HomepageHero: React.FC<HeroProps> = ({
    backgroundMobileImage = "/images/homepage-hero-bg.png",
    backgroundImage = "/images/homepage-hero-bg-b.png",
    backgroundVideoMp4 = "/videos/homepage-hero-bg.mp4",
    backgroundVideoWebm = "/videos/homepage-hero-bg.webm",
}) => {
    return (
        <section className="relative w-full min-h-[750px] overflow-hidden">
            {/* Desktop Video Background */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={backgroundImage}
                aria-hidden="true"
            >
                {/* WebM first */}
                <source src={backgroundVideoWebm} type="video/webm" />
                {/* MP4 fallback */}
                <source src={backgroundVideoMp4} type="video/mp4" />
            </video>

            {/* Mobile Image Background */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 block md:hidden"
                style={{ backgroundImage: `url(${backgroundMobileImage})` }}
                aria-hidden="true"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/75 z-10" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-20 flex items-center min-h-[750px]">
                <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl text-white">
                        <span className="inline-block mb-4 text-sm tracking-widest uppercase text-white/60">
                            Black Lab Development
                        </span>

                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
                        The Right Technology
                        <br className="hidden sm:block" />
                        Designed Around Your Business
                        </h1>

                        <p className="text-lg md:text-xl text-white/85 mb-10 max-w-3xl">
                            I build digital solutions designed around how organizations actually work. From choosing the right platforms to developing custom systems, I focus on technology that fits your needs, scales with your growth, and stays reliable long-term. No unnecessary complexity — just smart, purposeful development.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-md bg-white text-black px-8 py-4 font-semibold hover:bg-gray-100 transition"
                            >
                                Start a Project
                            </a>

                            <a
                                href="/work"
                                className="inline-flex items-center justify-center rounded-md border border-white/40 px-8 py-4 font-semibold text-white hover:bg-white/10 transition"
                            >
                                View Case Studies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomepageHero;
