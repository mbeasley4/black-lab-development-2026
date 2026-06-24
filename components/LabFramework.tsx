const steps = [
  {
    letter: "L",
    title: "Learn",
    body: "Understand your business goals, target buyers, and technical constraints before touching a line of code or a single design element. Discovery isn't billable overhead — it's the work that makes everything else cost less.",
  },
  {
    letter: "A",
    title: "Architect",
    body: "Define the information architecture, content strategy, integration map, and conversion paths. Decisions made here prevent expensive course-corrections later — and produce websites that scale.",
  },
  {
    letter: "B",
    title: "Build",
    body: "Develop, optimize, and launch. Clean code, measurable performance, and a handoff your team can actually maintain. Measurement is in place before go-live, not added as an afterthought.",
  },
];

interface LabFrameworkProps {
  compact?: boolean;
}

export default function LabFramework({ compact = false }: LabFrameworkProps) {
  return (
    <section
      className={`w-full border-t border-volt-500/15 ${compact ? "py-16" : "py-28"} bg-linear-to-b from-[#0b0b0c] to-slate-950 relative overflow-hidden`}
      aria-labelledby="lab-framework-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-volt-500/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="mx-auto max-w-375 px-6">
        <div className="mb-12">
          <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
            Delivery Methodology
          </span>
          <h2
            id="lab-framework-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            The{" "}
            <span className="text-cyan-400">LAB Framework™</span>
          </h2>
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            Every Black Lab Dev engagement follows the same structured methodology — so outcomes are predictable, not dependent on who gets assigned to the project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-800/30">
          {steps.map((step) => (
            <div
              key={step.letter}
              className="group relative bg-slate-950/80 hover:bg-cyan-500/5 p-10 transition-colors duration-300 overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-[6rem] font-black font-mono text-cyan-500/5 group-hover:text-cyan-500/10 transition-colors duration-500 leading-none select-none pointer-events-none">
                {step.letter}
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-5xl font-black font-mono text-cyan-400 leading-none">
                    {step.letter}
                  </span>
                  <div className="h-px flex-1 bg-cyan-500/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
