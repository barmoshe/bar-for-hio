import type { Channel } from "@/lib/demoData";

const STYLE: Record<Channel, { bg: string; label: string }> = {
  instagram: { bg: "linear-gradient(135deg,#feda75,#d62976 45%,#962fbf)", label: "Instagram" },
  whatsapp: { bg: "linear-gradient(135deg,#25d366,#128c7e)", label: "WhatsApp" },
  email: { bg: "linear-gradient(135deg,#0040ff,#6937d4)", label: "Email" },
  facebook: { bg: "linear-gradient(135deg,#1877f2,#0a52c4)", label: "Facebook" },
};

const PATHS: Record<Channel, React.ReactNode> = {
  instagram: (
    <>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.4" cy="7.6" r="1.1" fill="currentColor" />
    </>
  ),
  whatsapp: (
    <path
      d="M12 4a8 8 0 0 0-6.8 12.2L4 20l3.9-1.1A8 8 0 1 0 12 4Zm-2.2 4.6c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.1.2-.2.3 0 .6a6 6 0 0 0 2.4 2.1c.3.2.5.1.6 0l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.3.1.4.3.4.5 0 .9-1 1.6-1.7 1.6-1.6 0-4.9-1.9-6-5-.3-.9.4-2.2 1.5-3a.7.7 0 0 1 .5-.1Z"
      fill="currentColor"
    />
  ),
  email: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m5 8 7 5 7-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  facebook: (
    <path
      d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.4V5.5c-.7-.1-1.4-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2.2H8.5V14h2.1v7h2.9Z"
      fill="currentColor"
    />
  ),
};

export default function ChannelIcon({
  channel,
  size = 28,
}: {
  channel: Channel;
  size?: number;
}) {
  const { bg, label } = STYLE[channel];
  return (
    <span
      role="img"
      aria-label={label}
      className="inline-grid place-items-center rounded-[8px] text-white shadow-soft-sm"
      style={{ background: bg, width: size, height: size }}
    >
      <svg width={size * 0.62} height={size * 0.62} viewBox="0 0 24 24" aria-hidden="true">
        {PATHS[channel]}
      </svg>
    </span>
  );
}
