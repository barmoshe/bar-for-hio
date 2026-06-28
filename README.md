# bar-for-hio

A Full Stack Engineer application to [hio](https://hio.ai), with a live rebuild
of their core product loop instead of a cover letter.

The page is a one-screen pitch in hio's visual language, with a live demo at its
center: a unified inbox where messages from every channel land in one place, the
urgent ones rise to the top, and a reply is drafted in the owner's voice. Pick a
message, watch it draft, then approve or edit it.

The demo is fully client-side and deterministic: no backend and no model call,
just the front-end craft the role is hiring for. The real thing would put a model
behind the draft and a Node service behind the channels.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind v4 (CSS-first `@theme`), matching hio's own stack
- `next/og` for the share image

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Layout

- `app/` — layout, page, global tokens, generated OG image
- `components/InboxDemo.tsx` — the interactive demo (state machine, typewriter)
- `components/` — Hero, ProofCards, HowIWork, Contact and the rest of the page
- `lib/demoData.ts` — the scripted conversations

Built by Bar Moshe. Not affiliated with hio.
