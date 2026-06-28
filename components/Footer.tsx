export default function Footer() {
  return (
    <footer className="bg-navy px-5 pb-10 pt-2 text-white/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-[13px] sm:flex-row">
        <p className="font-semibold text-white/70">Bar Moshe</p>
        <p>
          Built for hio with Next.js, React and TypeScript. Not affiliated with
          hio.
        </p>
      </div>
    </footer>
  );
}
