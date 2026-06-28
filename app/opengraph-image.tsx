import { ImageResponse } from "next/og";

export const alt = "Bar Moshe, for hio: a Full Stack Engineer application, built as a working mini-hio.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// HiO palette
const BLUE = "#0040ff";
const PURPLE = "#6937d4";
const MAGENTA = "#d12ea8";
const MINT = "#04ffc3";
const LIME = "#aadb1e";
const NAVY = "#0d1b2e";
const SURFACE = "#f7fbff";
const SURFACE2 = "#eef3fb";
const BODY = "#4a5568";
const MUTED = "#718096";

/** Load an Inter weight from Google Fonts. Returns null on any failure so the
 *  build never breaks: ImageResponse just falls back to its default font. */
async function loadInter(weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`,
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((r) => r.text());
    const url = css.match(/src:\s*url\((.+?)\)\s*format/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OgImage() {
  const [black, semi] = await Promise.all([loadInter(800), loadInter(500)]);
  const fonts = [
    black && { name: "Inter", data: black, weight: 800 as const, style: "normal" as const },
    semi && { name: "Inter", data: semi, weight: 500 as const, style: "normal" as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 800 | 500; style: "normal" }[];

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          background: `linear-gradient(135deg, ${SURFACE}, ${SURFACE2})`,
          fontFamily: "Inter, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Soft brand blobs */}
        <div style={{ position: "absolute", top: -160, left: -140, width: 520, height: 520, borderRadius: 9999, background: `radial-gradient(circle, rgba(0,64,255,0.30), rgba(0,64,255,0) 70%)`, display: "flex" }} />
        <div style={{ position: "absolute", bottom: -200, right: 120, width: 560, height: 560, borderRadius: 9999, background: `radial-gradient(circle, rgba(209,46,168,0.26), rgba(209,46,168,0) 70%)`, display: "flex" }} />
        <div style={{ position: "absolute", top: 120, right: -120, width: 420, height: 420, borderRadius: 9999, background: `radial-gradient(circle, rgba(4,255,195,0.22), rgba(4,255,195,0) 70%)`, display: "flex" }} />

        {/* Left: the pitch */}
        <div style={{ display: "flex", flexDirection: "column", padding: "70px 0 70px 72px", width: 660 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              alignSelf: "flex-start",
              padding: "10px 18px",
              borderRadius: 9999,
              background: "rgba(255,255,255,0.7)",
              boxShadow: "0 2px 8px rgba(13,27,46,0.10)",
              fontSize: 22,
              fontWeight: 500,
              color: NAVY,
            }}
          >
            <div style={{ display: "flex", width: 12, height: 12, borderRadius: 9999, background: BLUE }} />
            Full Stack Engineer · application for hio
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 34 }}>
            <span style={{ fontSize: 74, fontWeight: 800, letterSpacing: "-0.03em", color: NAVY, lineHeight: 1.04 }}>
              So I built you a
            </span>
            <span
              style={{
                fontSize: 86,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.04,
                backgroundImage: `linear-gradient(90deg, ${BLUE}, ${PURPLE}, ${MAGENTA})`,
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              working hio.
            </span>
          </div>

          <span style={{ fontSize: 27, fontWeight: 500, color: BODY, marginTop: 30, lineHeight: 1.4 }}>
            A live mini-hio, built in their own brand. One inbox, every channel, a draft in your voice.
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: "auto" }}>
            <div style={{ display: "flex", width: 16, height: 16, borderRadius: 9999, background: `linear-gradient(135deg, ${BLUE}, ${MAGENTA})` }} />
            <span style={{ fontSize: 26, fontWeight: 500, color: NAVY }}>Bar Moshe · full stack · Tel Aviv</span>
          </div>
        </div>

        {/* Right: a miniature of the product loop */}
        <div style={{ display: "flex", alignItems: "center", paddingRight: 64 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 380,
              padding: 26,
              borderRadius: 28,
              background: "#ffffff",
              boxShadow: "0 20px 60px rgba(13,27,46,0.18)",
            }}
          >
            {/* header */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 18, borderBottom: "1px solid rgba(13,27,46,0.07)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 38, height: 38, borderRadius: 11, background: `linear-gradient(135deg, #feda75, #d62976 45%, #962fbf)`, color: "#fff", fontSize: 20, fontWeight: 800 }}>◎</div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: NAVY }}>Dana R.</span>
                <span style={{ fontSize: 15, color: MUTED }}>Instagram · 4m</span>
              </div>
            </div>

            {/* incoming */}
            <div style={{ display: "flex", alignSelf: "flex-start", maxWidth: 300, marginTop: 18, padding: "12px 16px", borderRadius: 18, background: SURFACE2, color: NAVY, fontSize: 17, lineHeight: 1.35 }}>
              My order isn&apos;t here yet and the party starts at 2. Please help.
            </div>

            {/* drafted reply */}
            <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.06em", color: MUTED, marginTop: 18 }}>
              DRAFTED IN YOUR VOICE
            </span>
            <div style={{ display: "flex", alignSelf: "flex-start", maxWidth: 320, marginTop: 8, padding: "12px 16px", borderRadius: 18, backgroundImage: `linear-gradient(135deg, ${BLUE}, ${PURPLE})`, color: "#fff", fontSize: 17, lineHeight: 1.35 }}>
              Hi Dana, it&apos;s out for delivery now, ETA 12:40, so well before 2. I&apos;ll text you the second it lands.
            </div>

            {/* approve */}
            <div style={{ display: "flex", marginTop: 18, alignSelf: "flex-start", padding: "11px 20px", borderRadius: 9999, background: LIME, color: NAVY, fontSize: 17, fontWeight: 800 }}>
              Approve &amp; send
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
