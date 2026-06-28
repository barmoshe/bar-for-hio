const GITHUB = "https://github.com/barmoshe/bar-for-hio";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight text-navy">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-blue-brand to-magenta-brand text-sm text-white">
            B
          </span>
          Bar Moshe
        </a>

        <div className="hidden items-center gap-7 text-sm font-semibold text-body sm:flex">
          <a href="#demo" className="transition hover:text-navy">The demo</a>
          <a href="#why" className="transition hover:text-navy">Why me</a>
          <a href="#how" className="transition hover:text-navy">How I work</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-semibold text-body transition hover:text-navy sm:block"
          >
            Code
          </a>
          <a
            href="#contact"
            className="rounded-full bg-blue-brand px-4 py-2 text-sm font-bold text-white shadow-brand transition hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
