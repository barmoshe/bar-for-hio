"use client";

import { useEffect, useRef, useState } from "react";
import {
  conversations,
  CHANNEL_LABEL,
  type Urgency,
} from "@/lib/demoData";
import ChannelIcon from "./ChannelIcon";

const URGENCY_DOT: Record<Urgency, string> = {
  high: "bg-magenta-brand",
  medium: "bg-blue-brand",
  low: "bg-mint",
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

export default function InboxDemo() {
  const reduced = usePrefersReducedMotion();

  // id -> the text that was actually sent (presence == replied).
  const [sent, setSent] = useState<Record<string, string>>({});
  const [selectedId, setSelectedId] = useState<string>(conversations[0].id);
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState("");

  // Typewriter for the active draft.
  const [typed, setTyped] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const selected = conversations.find((c) => c.id === selectedId)!;
  const isSent = selectedId in sent;

  // Type out (or reveal) the draft whenever the active conversation changes.
  // All setState happens inside timer callbacks to satisfy the
  // react-hooks/set-state-in-effect lint gate.
  useEffect(() => {
    const conv = conversations.find((c) => c.id === selectedId)!;
    const full = selectedId in sent ? sent[selectedId] : conv.draft;

    if (reduced || selectedId in sent) {
      const id = setTimeout(() => {
        setTyped(full);
        setIsTyping(false);
      }, 0);
      return () => clearTimeout(id);
    }

    let i = 0;
    const t = setInterval(() => {
      i += 1;
      if (i === 1) setIsTyping(true);
      setTyped(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(t);
        setIsTyping(false);
      }
    }, 14);
    return () => clearInterval(t);
  }, [selectedId, reduced, sent]);

  const detailRef = useRef<HTMLDivElement>(null);

  function select(id: string) {
    setSelectedId(id);
    setEditing(false);
    // On mobile the panes stack, so reveal the reply after tapping a message.
    if (window.matchMedia("(max-width: 767px)").matches) {
      requestAnimationFrame(() =>
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
    }
  }

  function approve(text: string) {
    setSent((s) => ({ ...s, [selectedId]: text }));
    setEditing(false);
  }

  const pendingCount = conversations.length - Object.keys(sent).length;

  return (
    <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-black/5 bg-white shadow-soft-lg md:grid-cols-[300px_1fr]">
      {/* List pane */}
      <div className="flex flex-col border-b border-black/5 bg-surface md:border-b-0 md:border-r">
        <div className="flex items-center justify-between gap-2 px-4 py-3.5">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-navy text-xs font-black text-white">
              S
            </span>
            <div className="leading-tight">
              <p className="text-[13px] font-bold text-navy">Stone &amp; Crumb</p>
              <p className="text-[11px] text-muted">Unified inbox</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-body shadow-soft-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
            </span>
            {pendingCount} to review
          </span>
        </div>

        <ul className="flex flex-col gap-1 px-2 pb-3" aria-label="Customer messages">
          {conversations.map((c, i) => {
            const done = c.id in sent;
            const active = c.id === selectedId;
            return (
              <li
                key={c.id}
                className="animate-rise"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <button
                  type="button"
                  onClick={() => select(c.id)}
                  aria-current={active ? "true" : undefined}
                  className={`flex w-full items-start gap-2.5 rounded-2xl px-2.5 py-2.5 text-left transition ${
                    active ? "bg-white shadow-soft-md" : "hover:bg-white/70"
                  }`}
                >
                  <ChannelIcon channel={c.channel} />
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="truncate text-[13px] font-bold text-navy">
                        {c.customer}
                      </span>
                      <span className="shrink-0 text-[10px] text-muted">{c.timeAgo}</span>
                    </span>
                    <span className="mt-0.5 flex items-center gap-1.5">
                      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${URGENCY_DOT[c.urgency]}`} />
                      <span className="truncate text-[11px] font-medium text-body">
                        {done ? "Replied" : c.tag}
                      </span>
                    </span>
                    <span className="mt-1 line-clamp-1 block text-[11px] text-muted">
                      {c.incoming}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Detail pane */}
      <div ref={detailRef} className="flex min-h-[420px] flex-col bg-white scroll-mt-20">
        <div className="flex items-center gap-2.5 border-b border-black/5 px-5 py-3.5">
          <ChannelIcon channel={selected.channel} size={32} />
          <div className="leading-tight">
            <p className="text-sm font-bold text-navy">{selected.customer}</p>
            <p className="text-[11px] text-muted">
              {CHANNEL_LABEL[selected.channel]} · {selected.handle}
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 px-5 py-5">
          {/* Incoming */}
          <div className="max-w-[85%] self-start rounded-2xl rounded-tl-md bg-surface-2 px-4 py-3 text-[13px] leading-relaxed text-navy">
            {selected.incoming}
          </div>

          {/* What hio noticed */}
          <div className="frosted flex items-start gap-2.5 self-start rounded-2xl px-4 py-3">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-navy text-[10px] font-black text-white">
              ✦
            </span>
            <p className="text-[12px] leading-relaxed text-body">
              <span className="font-semibold text-navy">hio noticed:</span>{" "}
              {selected.signal}
            </p>
          </div>

          {/* Draft / sent */}
          <div className="mt-auto">
            <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
              {isSent ? "Sent in your voice" : "Drafted in your voice"}
            </p>

            {editing ? (
              <textarea
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                rows={4}
                aria-label="Edit the drafted reply"
                className="w-full resize-none rounded-2xl border border-blue-brand/30 bg-surface px-4 py-3 text-[13px] leading-relaxed text-navy outline-none focus:ring-2 focus:ring-blue-brand/30"
              />
            ) : (
              <div
                aria-live="polite"
                className={`max-w-[92%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed text-white ${
                  isSent
                    ? "ml-auto bg-navy"
                    : "bg-gradient-to-br from-blue-brand to-purple-brand"
                }`}
              >
                {typed}
                {isTyping && <span className="cursor-blink">▍</span>}
                {isSent && (
                  <span className="mt-2 flex items-center justify-end gap-1 text-[11px] text-mint">
                    <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m5 12 4 4 10-10" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Sent via {CHANNEL_LABEL[selected.channel]}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Actions */}
          {!isSent && (
            <div className="flex flex-wrap items-center gap-2.5">
              {editing ? (
                <>
                  <button
                    type="button"
                    onClick={() => approve(editText.trim() || selected.draft)}
                    className="rounded-full bg-lime px-5 py-2.5 text-[13px] font-bold text-navy shadow-soft-sm transition hover:bg-lime-hover"
                  >
                    Send edited reply
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditing(false)}
                    className="rounded-full px-4 py-2.5 text-[13px] font-semibold text-muted transition hover:text-navy"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    disabled={isTyping}
                    onClick={() => approve(typed)}
                    className="rounded-full bg-lime px-5 py-2.5 text-[13px] font-bold text-navy shadow-soft-sm transition hover:bg-lime-hover disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Approve &amp; send
                  </button>
                  <button
                    type="button"
                    disabled={isTyping}
                    onClick={() => {
                      setEditText(selected.draft);
                      setEditing(true);
                    }}
                    className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-[13px] font-semibold text-navy shadow-soft-sm transition hover:bg-surface disabled:opacity-50"
                  >
                    Edit
                  </button>
                  <span className="text-[11px] text-muted">
                    One tap. It learns from every edit.
                  </span>
                </>
              )}
            </div>
          )}

          {isSent && (
            <p className="text-[11px] text-muted">
              Nice. Pick another message on the left, the rest are still waiting.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
