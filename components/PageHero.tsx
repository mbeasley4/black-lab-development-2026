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
      return <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">{title}</h1>;
    }

    const parts = title.split(titleHighlight);
    return (
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
        {parts[0]}
        <span className="text-volt-500">{titleHighlight}</span>
        {parts[1]}
      </h1>
    );
  };

  return (
    <section className="relative overflow-hidden border-b border-volt-500/15">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#0b0b0c]/90 via-[#111214]/80 to-[#1f2328]/75" />
      </div>

      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-1/4 w-100 h-100 bg-volt-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-100 h-100 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Hero content */}
      <div className="relative z-10 py-12 md:py-24">
        <div className="mx-auto max-w-375 px-6 w-full">
          <div className="max-w-6xl text-center md:text-left">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
              {label}
            </span>

            {renderTitle()}

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto md:mx-0">
              {description}
            </p>

            {/* Badges */}
            {badges && badges.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center gap-4 justify-center md:justify-start">
                {badges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {index > 0 && <span className="text-volt-500/40">•</span>}
                    <div className="flex items-center gap-2 text-sm text-volt-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/40 to-transparent" />
    </section>
  );
}
