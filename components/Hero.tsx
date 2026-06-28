const GITHUB = "https://github.com/barmoshe/bar-for-hio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-surface to-white"
    >
      {/* Soft brand blobs behind the headline. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-4 h-72 w-72 rounded-full bg-blue-brand/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-magenta-brand/15 blur-3xl" />
        <div className="absolute left-1/3 -top-10 h-64 w-64 rounded-full bg-mint/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 pb-16 pt-20 text-center sm:pt-28">
        <span className="frosted mx-auto inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-navy">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-brand" />
          Full Stack Engineer · application for hio
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl text-[clamp(2.4rem,1.4rem+4vw,4.5rem)] font-black leading-[1.02] tracking-[-1.5px]">
          <span className="text-navy">So I rebuilt </span>
          <span className="gradient-text">hio&apos;s core loop.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[clamp(1rem,0.9rem+0.5vw,1.25rem)] leading-relaxed text-body">
          I&apos;m Bar Moshe, a full stack engineer in Tel Aviv. You&apos;re hiring
          someone to build real-time, AI-native customer experiences, so instead
          of a CV I rebuilt a piece of yours. Try it below.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#demo"
            className="rounded-full bg-blue-brand px-7 py-3.5 text-[15px] font-bold text-white shadow-brand transition hover:opacity-90"
          >
            Try the live demo
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-[15px] font-bold text-navy shadow-soft-sm transition hover:bg-surface"
          >
            Read the code
          </a>
        </div>

        <p className="mt-5 text-[13px] text-muted">
          No backend, no model call. Just React and TypeScript, the stack
          you&apos;re hiring for.
        </p>
      </div>
    </section>
  );
}
