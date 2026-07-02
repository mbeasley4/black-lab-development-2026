interface QuickAnswerBlockProps {
  question: string;
  answer: string;
}

export default function QuickAnswerBlock({ question, answer }: QuickAnswerBlockProps) {
  return (
    <section className="border-b border-slate-800 bg-slate-950/80" aria-label="Quick Answer">
      <div className="mx-auto max-w-375 px-6 py-8">
        <div className="rounded-xl border border-volt-500/20 bg-volt-500/5 p-6 md:p-8">
          <span className="inline-block mb-3 text-xs font-mono tracking-[0.3em] uppercase text-volt-400 font-semibold">
            Quick Answer
          </span>
          <h2 className="text-lg font-semibold text-white mb-3">{question}</h2>
          <p className="text-slate-300 leading-relaxed text-[15px]">{answer}</p>
        </div>
      </div>
    </section>
  );
}
