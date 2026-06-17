"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ROLES = [
  "Samsung Experience Consultant",
  "Retail Sales Professional",
  "Customer Experience Expert",
];

const STATS = [
  { value: 2.5,  suffix: "+", label: "Years at Samsung",  decimal: true  },
  { value: 100,  suffix: "%", label: "Sales Targets Met", decimal: false },
  { value: 3,    suffix: "",  label: "Languages Spoken",  decimal: false },
];

function useTyping(roles: string[]) {
  const [text, setText] = useState("");
  const ri = useRef(0), ci = useRef(0), del = useRef(false);
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const cur = roles[ri.current];
      if (del.current) {
        setText(cur.slice(0, --ci.current));
        if (ci.current < 0) { del.current = false; ri.current = (ri.current + 1) % roles.length; t = setTimeout(tick, 420); return; }
        t = setTimeout(tick, 32);
      } else {
        setText(cur.slice(0, ++ci.current));
        if (ci.current > cur.length) { del.current = true; t = setTimeout(tick, 2600); return; }
        t = setTimeout(tick, 56);
      }
    };
    t = setTimeout(tick, 1000);
    return () => clearTimeout(t);
  }, [roles]);
  return text;
}

function Counter({ value, suffix, decimal }: { value: number; suffix: string; decimal: boolean }) {
  const [disp, setDisp] = useState("0");
  const ref  = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || done.current) return;
      done.current = true;
      const step = value / 50;
      let cur = 0;
      const t = setInterval(() => {
        cur = Math.min(cur + step, value);
        setDisp((decimal ? cur.toFixed(1) : Math.round(cur)) + suffix);
        if (cur >= value) clearInterval(t);
      }, 26);
    }, { threshold: 0.5 });
    obs.observe(ref.current!);
    return () => obs.disconnect();
  }, [value, suffix, decimal]);
  return <span ref={ref}>{disp}</span>;
}

export default function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section id="home" className="relative z-10 min-h-screen flex flex-col justify-center" style={{ paddingTop: 80 }}>
      <div className="max-w-6xl mx-auto w-full px-6 md:px-14 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* Left — text */}
          <div>
            <div
              className="inline-flex items-center gap-2.5 mb-10 text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#c4a878" }}
            >
              <span className="w-6 h-px" style={{ background: "rgba(212,160,48,.5)" }} />
              Gorkha, Nepal
              <span className="w-6 h-px" style={{ background: "rgba(212,160,48,.5)" }} />
            </div>

            <h1
              className="font-[family-name:var(--font-grotesk)] font-black leading-[0.95] tracking-tight mb-8"
              style={{ fontSize: "clamp(3.5rem,9vw,7.5rem)", color: "#faf5e8" }}
            >
              Manisha<br />
              <span className="g-text">Basnet</span>
            </h1>

            <div className="flex items-center gap-1.5 mb-8 h-7">
              <span className="font-medium tracking-wide" style={{ fontSize: "1rem", color: "#c4a878" }}>
                {typed}
              </span>
              <span className="caret inline-block w-px h-4" style={{ background: "#d4a030" }} />
            </div>

            <div className="w-16 h-px mb-8" style={{ background: "rgba(212,160,48,.45)" }} />

            <p
              className="max-w-xl mb-12 leading-relaxed"
              style={{ color: "#c4a878", fontSize: "0.9875rem", lineHeight: 1.85 }}
            >
              Dynamic retail sales professional with{" "}
              <span style={{ color: "#faf5e8", fontWeight: 500 }}>2.5+ years</span> of excellence
              as a Samsung Experience Consultant — translating product knowledge into exceptional
              customer experiences that drive loyalty and revenue growth.
            </p>

            <div className="flex flex-wrap gap-4 mb-20">
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3 text-sm font-bold tracking-wide transition-all duration-200 hover:opacity-85 hover:-translate-y-px rounded"
                style={{ background: "linear-gradient(120deg,#d4a030,#ecc050)", color: "#14120c" }}
              >
                Get In Touch
              </a>
              <a
                href="/manisha-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium tracking-wide transition-all duration-200 rounded"
                style={{ border: "1px solid rgba(212,160,48,.4)", color: "#c4a878" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(212,160,48,.7)"; e.currentTarget.style.color = "#faf5e8"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(212,160,48,.4)"; e.currentTarget.style.color = "#c4a878"; }}
              >
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
                Resume
              </a>
              <a
                href="#experience"
                className="inline-flex items-center px-7 py-3 text-sm font-medium tracking-wide transition-all duration-200 rounded"
                style={{ color: "#7a6848" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#c4a878"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#7a6848"; }}
              >
                Experience →
              </a>
              <a
                href="https://www.linkedin.com/in/manisha-basnet119"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium tracking-wide transition-all duration-200 rounded"
                style={{ border: "1px solid rgba(212,160,48,.4)", color: "#c4a878" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(212,160,48,.7)"; e.currentTarget.style.color = "#faf5e8"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(212,160,48,.4)"; e.currentTarget.style.color = "#c4a878"; }}
              >
                <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap gap-12">
              {STATS.map(({ value, suffix, label, decimal }) => (
                <div key={label}>
                  <div className="font-[family-name:var(--font-grotesk)] font-black text-3xl g-text leading-none mb-1.5">
                    <Counter value={value} suffix={suffix} decimal={decimal} />
                  </div>
                  <div className="text-xs tracking-wider uppercase" style={{ color: "#7a6848" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — profile photo */}
          <div className="hidden lg:flex items-center justify-center">
            <div style={{ position: "relative", width: 300, height: 300 }}>
              <div
                style={{
                  position: "absolute", inset: -3, borderRadius: "50%",
                  background: "conic-gradient(from 0deg, #d4a030, #ecc050, #f5d06e, #ecc050, #d4a030, #8b6420, #d4a030)",
                  animation: "spin-border 6s linear infinite",
                }}
              />
              <div style={{ position: "absolute", inset: 3, borderRadius: "50%", background: "#14120c" }} />
              <Image
                src="/manisha.jpeg"
                alt="Manisha Basnet"
                width={300}
                height={300}
                priority
                style={{
                  position: "absolute", inset: 6,
                  width: "calc(100% - 12px)", height: "calc(100% - 12px)",
                  borderRadius: "50%", objectFit: "cover", objectPosition: "center top",
                }}
              />
              <div
                style={{
                  position: "absolute", inset: -24, borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(212,160,48,.18) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #14120c)" }}
      />

    </section>
  );
}
