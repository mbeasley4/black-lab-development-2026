import HeroSplit from "./HeroSplit";

interface PageHeroProps {
  label: string;
  title: string;
  titleHighlight?: string;
  description: string;
  backgroundImage: string;
  /** Focal point of the photo (CSS object-position), e.g. "40% 50%". */
  imagePosition?: string;
  badges?: string[];
}

export default function PageHero({
  label,
  title,
  titleHighlight,
  description,
  backgroundImage,
  imagePosition,
  badges,
}: PageHeroProps) {
  const renderTitle = () => {
    if (!titleHighlight) {
      return <h1 className="text-[1.75rem] sm:text-4xl lg:text-[2.1rem] xl:text-[2.75rem] font-bold tracking-tight mb-6 text-white leading-[1.1] text-balance">{title}</h1>;
    }

    const parts = title.split(titleHighlight);
    return (
      <h1 className="text-[1.75rem] sm:text-4xl lg:text-[2.1rem] xl:text-[2.75rem] font-bold tracking-tight mb-6 text-white leading-[1.1] text-balance">
        {parts[0]}
        <span className="text-neutral-400">{titleHighlight}</span>
        {parts[1]}
      </h1>
    );
  };

  return (
    <HeroSplit image={backgroundImage} imagePosition={imagePosition} className="text-center md:text-left">
        <span className="eyebrow inline-block mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
          {label}
        </span>

        {renderTitle()}

        <p className="text-lg xl:text-xl text-neutral-300 leading-relaxed mx-auto md:mx-0">
          {description}
        </p>

        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 justify-center md:justify-start">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
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
    </HeroSplit>
  );
}
