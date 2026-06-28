const STEPS = [
  {
    n: "01",
    title: "You describe",
    body: "A few lines on the idea is enough. No spec, no deck, half-baked is fine. I ask the questions that matter.",
  },
  {
    n: "02",
    title: "I build",
    body: "A real first version you can open and click, usually within days. This page is a fair sample of the pace.",
  },
  {
    n: "03",
    title: "We decide together",
    body: "You react to something real instead of a promise. It's the cheapest moment to change direction, so we use it.",
  },
];

export default function HowIWork() {
  return (
    <section id="how" className="bg-white px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-blue-brand">
            How I work
          </p>
          <h2 className="mt-3 text-[clamp(1.8rem,1.2rem+2.4vw,2.8rem)] font-black leading-[1.1] tracking-[-1px] text-navy">
            Built with you, not instead of you.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-3xl bg-surface p-7 ring-1 ring-black/5">
              <span className="gradient-text text-3xl font-black">{s.n}</span>
              <h3 className="mt-3 text-lg font-extrabold tracking-tight text-navy">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
