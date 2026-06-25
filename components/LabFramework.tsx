"use client";

import { useRef } from "react";

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

function LabCard({ step }: { step: (typeof steps)[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current?.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current?.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative bg-[#0a0a0f] p-10 transition-all duration-300 overflow-hidden"
    >
      {/* Radial glow that follows cursor */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(227,245,68,0.08), transparent 60%)",
        }}
      />

      {/* Giant background letter */}
      <div className="absolute -top-2 -right-2 text-[8rem] font-black font-mono text-volt-500/5 group-hover:text-volt-500/15 transition-all duration-500 leading-none select-none pointer-events-none group-hover:scale-110 origin-top-right">
        {step.letter}
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-6xl font-black font-mono text-volt-400 leading-none drop-shadow-[0_0_18px_rgba(227,245,68,0.5)] group-hover:drop-shadow-[0_0_30px_rgba(227,245,68,0.8)] group-hover:scale-110 transition-all duration-300 origin-left">
            {step.letter}
          </span>
          <div className="h-px flex-1 bg-volt-500/15 group-hover:bg-volt-500/50 transition-all duration-300 group-hover:shadow-[0_0_8px_rgba(227,245,68,0.3)]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-volt-50 transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
          {step.body}
        </p>
      </div>

      {/* Bottom edge glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-volt-500/0 group-hover:bg-volt-500/40 transition-all duration-500 group-hover:shadow-[0_0_12px_rgba(227,245,68,0.4)]" />
    </div>
  );
}

export default function LabFramework({ compact = false }: LabFrameworkProps) {
  return (
    <section
      className={`w-full border-t border-volt-500/15 ${compact ? "py-16" : "py-32"} bg-linear-to-b from-[#0b0b0c] to-slate-950 relative overflow-hidden`}
      aria-labelledby="lab-framework-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/40 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-volt-500/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="mx-auto max-w-375 px-6">
        <div className="mb-16 text-center md:text-left">
          <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold drop-shadow-[0_0_8px_rgba(227,245,68,0.4)]">
            Delivery Methodology
          </span>
          <h2
            id="lab-framework-heading"
            className="text-4xl md:text-6xl font-bold text-white mb-5"
          >
            The{" "}
            <span className="inline-flex gap-1">
              {["L", "A", "B"].map((char) => (
                <span
                  key={char}
                  className="text-volt-400 drop-shadow-[0_0_24px_rgba(227,245,68,0.6)] hover:drop-shadow-[0_0_40px_rgba(227,245,68,0.9)] hover:scale-110 transition-all duration-200 inline-block cursor-default"
                >
                  {char}
                </span>
              ))}
            </span>{" "}
            Framework™
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Every Black Lab Dev engagement follows the same structured methodology — so outcomes are predictable, not dependent on who gets assigned to the project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-volt-500/20 rounded-2xl overflow-hidden border border-volt-500/20 shadow-[0_0_40px_rgba(227,245,68,0.06)]">
          {steps.map((step) => (
            <LabCard key={step.letter} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
