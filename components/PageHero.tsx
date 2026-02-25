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
  // Split title to insert highlight
  const renderTitle = () => {
    if (!titleHighlight) {
      return <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">{title}</h1>;
    }

    const parts = title.split(titleHighlight);
    return (
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
        {parts[0]}
        <span className="text-cyan-400">{titleHighlight}</span>
        {parts[1]}
      </h1>
    );
  };

  return (
    <section className="relative overflow-hidden border-b border-cyan-500/20">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        {/* Simplified overlay - less heavy */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-950/80 to-cyan-950/75" />
      </div>

      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-3xl" />

      {/* Hero content */}
      <div className="relative z-10 py-12 md:py-24">
        <div className="mx-auto max-w-[1500px] px-6 w-full">
          <div className="max-w-6xl text-center md:text-left">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
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
                    {index > 0 && <span className="text-cyan-500/40">•</span>}
                    <div className="flex items-center gap-2 text-sm text-cyan-300">
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
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  );
}