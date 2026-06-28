import InboxDemo from "./InboxDemo";

export default function DemoSection() {
  return (
    <section id="demo" className="bg-white px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-blue-brand">
            The live demo
          </p>
          <h2 className="mt-3 text-[clamp(1.8rem,1.2rem+2.4vw,2.8rem)] font-black leading-[1.1] tracking-[-1px] text-navy">
            One inbox. Every channel.{" "}
            <span className="gradient-text-mint">A draft in your voice.</span>
          </h2>
          <p className="mt-4 leading-relaxed text-body">
            This is hio&apos;s loop, rebuilt client-side: messages from every
            channel land in one place, the urgent ones rise to the top, and a
            reply is drafted in the owner&apos;s voice. Pick a message, watch it
            draft, then approve or edit it. Nothing is hardcoded to one path:
            try them all.
          </p>
        </div>

        <InboxDemo />

        <p className="mx-auto mt-6 max-w-2xl text-center text-[13px] text-muted">
          Built for this application in an afternoon. The real thing would put a
          model behind the draft and a Node service behind the channels; the
          front-end craft is the same.
        </p>
      </div>
    </section>
  );
}
