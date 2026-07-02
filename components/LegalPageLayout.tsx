import PageHero from "./PageHero";

type Section = { id: string; title: string };

export default function LegalPageLayout({
  label = "Legal",
  title,
  description,
  backgroundImage = "/images/background-bld.png",
  sections,
  children,
}: {
  label?: string;
  title: string;
  description: string;
  backgroundImage?: string;
  sections: Section[];
  children: React.ReactNode;
}) {
  return (
    <main className="w-full bg-[#0b0b0c] text-white">
      <PageHero
        label={label}
        title={title}
        description={description}
        backgroundImage={backgroundImage}
      />

      <div className="mx-auto max-w-375 px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr]">
          <nav aria-label="Table of contents" className="h-fit lg:sticky lg:top-24">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-volt-500">
              On This Page
            </p>
            <ul className="space-y-3 border-l border-white/10 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block -ml-px border-l border-transparent pl-4 text-slate-400 transition-colors hover:border-volt-500/60 hover:text-white"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="prose prose-invert max-w-none">{children}</article>
        </div>
      </div>
    </main>
  );
}
