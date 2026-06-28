const LINKS = [
  { label: "Email me", href: "mailto:1barmoshe1@gmail.com", primary: true },
  { label: "GitHub", href: "https://github.com/barmoshe", primary: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/barmoshe/", primary: false },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy px-5 py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-10 h-72 w-72 rounded-full bg-blue-brand/30 blur-3xl" />
        <div className="absolute -bottom-16 left-0 h-72 w-72 rounded-full bg-magenta-brand/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-[clamp(2rem,1.4rem+2.6vw,3rem)] font-black leading-[1.08] tracking-[-1px] text-white">
          Let&apos;s build hio for real.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
          Tel Aviv is home, so hybrid works well. I&apos;d rather show you
          something real than talk about it, which is the whole point of this
          page. If it landed, I&apos;m a reply or a coffee away.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className={
                l.primary
                  ? "rounded-full bg-lime px-7 py-3.5 text-[15px] font-bold text-navy shadow-soft-sm transition hover:bg-lime-hover"
                  : "rounded-full border border-white/20 px-7 py-3.5 text-[15px] font-bold text-white transition hover:bg-white/10"
              }
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
