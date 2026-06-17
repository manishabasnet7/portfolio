"use client";
import { useState } from "react";

export default function CVButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-1.5 px-3 py-4 rounded-xl transition-all duration-200 hover:-translate-y-[calc(50%-2px)]"
        style={{
          background: "rgba(124,58,237,.12)",
          border: "1px solid rgba(124,58,237,.35)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        aria-label="View Resume"
        onMouseEnter={e => { e.currentTarget.style.background = "rgba(124,58,237,.22)"; e.currentTarget.style.borderColor = "rgba(167,139,250,.5)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "rgba(124,58,237,.12)"; e.currentTarget.style.borderColor = "rgba(124,58,237,.35)"; }}
      >
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#a78bfa" strokeWidth="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
        <span
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#a78bfa",
          }}
        >
          Resume
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,.75)", backdropFilter: "blur(8px)" }}
          onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div
            className="relative w-full flex flex-col"
            style={{
              maxWidth: 860,
              height: "90vh",
              background: "#16161c",
              border: "1px solid rgba(124,58,237,.3)",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <div
              className="flex items-center justify-between px-5 py-3.5 flex-shrink-0"
              style={{ borderBottom: "1px solid #2a2a34" }}
            >
              <div>
                <span className="text-sm font-semibold" style={{ color: "#f9fafb" }}>Manisha Basnet</span>
                <span className="text-xs ml-2" style={{ color: "#4b4a55" }}>— Curriculum Vitae 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/manisha-cv.pdf"
                  download="Manisha_Basnet_CV_2026.pdf"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all duration-200 hover:opacity-85"
                  style={{ background: "linear-gradient(120deg,#7c3aed,#a855f7)", color: "#f9fafb" }}
                >
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="w-7 h-7 flex items-center justify-center rounded-lg transition-colors"
                  style={{ background: "#2a2a34", color: "#94939e" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#3a3a48"; e.currentTarget.style.color = "#f9fafb"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#2a2a34"; e.currentTarget.style.color = "#94939e"; }}
                >
                  ✕
                </button>
              </div>
            </div>

            <iframe
              src="/manisha-cv.pdf"
              title="Manisha Basnet CV"
              className="flex-1 w-full"
              style={{ border: "none", background: "#1c1c24" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
