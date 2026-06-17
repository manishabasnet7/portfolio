import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Manisha Basnet — Samsung Experience Consultant";
export const size    = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%",
          display: "flex", flexDirection: "column",
          alignItems: "flex-start", justifyContent: "center",
          background: "#14120c",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Gold accent bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: "linear-gradient(90deg, #d4a030, #ecc050, #d4a030)",
          display: "flex",
        }} />

        {/* Subtle background glow */}
        <div style={{
          position: "absolute", top: -100, right: -100,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,160,48,0.12) 0%, transparent 70%)",
          display: "flex",
        }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <span style={{
            fontSize: 18, fontWeight: 600, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "#d4a030", marginBottom: 20,
            display: "flex",
          }}>
            Portfolio
          </span>

          <span style={{
            fontSize: 80, fontWeight: 900, lineHeight: 1,
            color: "#faf5e8", marginBottom: 4, display: "flex",
          }}>
            Manisha
          </span>
          <span style={{
            fontSize: 80, fontWeight: 900, lineHeight: 1,
            color: "#d4a030", marginBottom: 36, display: "flex",
          }}>
            Basnet
          </span>

          <div style={{
            width: 64, height: 2, background: "rgba(212,160,48,0.5)",
            marginBottom: 36, display: "flex",
          }} />

          <span style={{
            fontSize: 28, fontWeight: 500, color: "#c4a878",
            marginBottom: 12, display: "flex",
          }}>
            Samsung Experience Consultant
          </span>
          <span style={{
            fontSize: 20, color: "#7a6848", display: "flex",
          }}>
            2.5+ Years · Gorkha, Nepal · Open to Opportunities
          </span>
        </div>

        <div style={{
          position: "absolute", bottom: 48, right: 80,
          fontSize: 16, color: "#7a6848", display: "flex",
        }}>
          manisha-basnet.com.np
        </div>
      </div>
    ),
    { ...size }
  );
}
