interface PageHeroProps {
  label: string;
  title: string;
  titleHighlight?: string;
  description: string;
  backgroundImage: string;
  badges?: string[];
}

export default function PageHero({
  label,
  title,
  titleHighlight,
  description,
  backgroundImage,
  badges,
}: PageHeroProps) {
  const renderTitle = () => {
    if (!titleHighlight) {
      return <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight mb-6 text-white leading-[1.1] text-balance">{title}</h1>;
    }

    const parts = title.split(titleHighlight);
    return (
      <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight mb-6 text-white leading-[1.1] text-balance">
        {parts[0]}
        <span className="text-neutral-400">{titleHighlight}</span>
        {parts[1]}
      </h1>
    );
  };

  return (
    <section className="relative overflow-hidden border-b border-neutral-800">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        {/* Light veil only: the photo stays bright; the content panel carries legibility */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0f2138]/25 via-[#0f2138]/5 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="hero-frame relative z-10">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 w-full">
          <div className="relative max-w-3xl overflow-hidden rounded-2xl bg-[#ffffff]/95 p-7 text-center shadow-[0_30px_80px_-30px_rgba(15,33,56,0.45)] ring-1 ring-[#0f2138]/10 backdrop-blur-md sm:p-10 md:p-12 md:text-left">
            {/* Lime accent edge */}
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-volt-500" />
            <span className="eyebrow inline-block mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
              {label}
            </span>

            {renderTitle()}

            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mx-auto md:mx-0">
              {description}
            </p>

            {/* Badges */}
            {badges && badges.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center gap-4 justify-center md:justify-start">
                {badges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {index > 0 && <span className="text-neutral-500" aria-hidden="true">•</span>}
                    <div className="flex items-center gap-2 text-sm text-neutral-300">
                      <svg className="w-4 h-4 text-volt-700" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
