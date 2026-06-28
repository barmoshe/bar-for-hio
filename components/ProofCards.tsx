type Link = { label: string; href: string };
type Card = {
  badge: string;
  title: string;
  body: string;
  links: Link[];
};

const CARDS: Card[] = [
  {
    badge: "Frontend",
    title: "Polished React, by default",
    body: "Real-time React that makes AI feel human is the demo above: a streaming inbox, a typed draft, one-tap approve. Before that, Israelify was a Spotify-style app with my own Node and MongoDB behind a React front end.",
    links: [
      { label: "Israelify (front end)", href: "https://github.com/Gal-Or/IsraelifyApp" },
      { label: "Node + Mongo backend", href: "https://github.com/barmoshe/Israelify-backend" },
    ],
  },
  {
    badge: "Backend + systems",
    title: "Orchestration that holds up",
    body: "Agent workflows at scale need more than CRUD. I built a pipeline on Temporal: one workflow coordinating Go, Python and TypeScript workers across their own queues, end to end. It's featured on Temporal's Code Exchange.",
    links: [
      { label: "Temporal Code Exchange", href: "https://temporal.io/code-exchange/cross-language-data-processing-service-with-temporal" },
      { label: "The repo", href: "https://github.com/barmoshe/data-processing-service" },
    ],
  },
  {
    badge: "AI in practice",
    title: "Agents I actually run",
    body: "I build with AI agents on Claude Code every day, so a short brief becomes working software in days, the architecture and prompts done by me. Biome Synth is one result, an AI instrument that began as an interview skill and shipped live.",
    links: [
      { label: "Biome Synth (live)", href: "https://biome-synth.lovable.app/" },
      { label: "More of my work", href: "https://github.com/barmoshe" },
    ],
  },
];

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" className="transition group-hover:translate-x-0.5">
      <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProofCards() {
  return (
    <section id="why" className="bg-surface px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-blue-brand">
            Why me
          </p>
          <h2 className="mt-3 text-[clamp(1.8rem,1.2rem+2.4vw,2.8rem)] font-black leading-[1.1] tracking-[-1px] text-navy">
            The demo is the pitch. Here&apos;s the track record behind it.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-soft-md ring-1 ring-black/5"
            >
              <span className="mb-4 inline-flex w-fit items-center rounded-full bg-surface-2 px-3 py-1 text-[12px] font-bold text-blue-brand">
                {c.badge}
              </span>
              <h3 className="text-xl font-extrabold tracking-tight text-navy">{c.title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-body">{c.body}</p>
              <div className="mt-5 flex flex-col gap-2">
                {c.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[13px] font-bold text-blue-brand transition hover:text-purple-brand"
                  >
                    {l.label}
                    <Arrow />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
