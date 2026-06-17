"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => ref.current?.classList.add("in"), delay); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

const FACTS = [
  { k: "Current Role",  v: "Samsung Experience Consultant" },
  { k: "Company",       v: "Samsung Nepal" },
  { k: "Region",        v: "Gorkha, Nepal" },
  { k: "Languages",     v: "Nepali · English · Hindi" },
  { k: "Education",     v: "BBS, Tribhuvan University" },
  { k: "Status",        v: "Open to opportunities" },
];

export default function About() {
  const left  = useReveal(0);
  const right = useReveal(120);

  return (
    <section id="about" className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 py-32">
      <div className="gold-line mb-20" />

      <div className="sec-label">About</div>
      <h2
        className="font-[family-name:var(--font-grotesk)] font-black tracking-tight mb-16"
        style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#faf5e8" }}
      >
        The Person <span className="g-text">Behind the Results</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

        <div ref={left} className="reveal flex flex-col gap-6">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ height: 280, border: "1px solid rgba(212,160,48,.25)", background: "#1e1b12", position: "relative" }}
          >
            <Image
              src="/manisha-certified.jpeg"
              alt="Manisha Basnet — Samsung Certified Consultant holding award"
              fill
              sizes="(max-width: 768px) 100vw, 380px"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
            <div
              style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: 72,
                background: "linear-gradient(to top, rgba(20,18,12,.92), transparent)",
              }}
            />
            <div style={{ position: "absolute", bottom: 14, left: 16 }}>
              <div className="text-xs font-bold uppercase tracking-widest" style={{ color: "#d4a030" }}>
                Samsung Certified Consultant
              </div>
            </div>
          </div>

          <div className="card rounded-2xl p-6">
            <div className="flex flex-col">
              {FACTS.map(({ k, v }, i) => (
                <div
                  key={k}
                  className="grid py-3"
                  style={{
                    gridTemplateColumns: "120px 1fr",
                    gap: "0 12px",
                    borderBottom: i < FACTS.length - 1 ? "1px solid #363020" : "none",
                  }}
                >
                  <span className="text-xs font-medium" style={{ color: "#7a6848" }}>{k}</span>
                  <span className="text-xs font-medium" style={{ color: "#c4a878" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={right} className="reveal">
          <p className="mb-6" style={{ color: "#c4a878", fontSize: "1rem", lineHeight: 1.9 }}>
            I&apos;m a dynamic and results-oriented retail sales professional with over{" "}
            <span style={{ color: "#faf5e8", fontWeight: 500 }}>two and a half years</span> of
            demonstrated experience as a{" "}
            <span style={{ color: "#ecc050", fontWeight: 500 }}>Samsung Experience Consultant</span>.
            My expertise spans consultative product selling, customer relationship management, and
            consistently meeting sales targets within competitive retail environments.
          </p>

          <blockquote
            className="text-sm italic mb-8 px-6 py-5 rounded-xl"
            style={{
              background:  "rgba(212,160,48,.06)",
              borderLeft:  "2px solid rgba(212,160,48,.45)",
              color:       "#c4a878",
              lineHeight:  1.85,
            }}
          >
            &ldquo;Adept at translating technical product knowledge into customer-centric
            recommendations that drive revenue growth and lasting brand loyalty.&rdquo;
          </blockquote>

          <p className="mb-12" style={{ color: "#c4a878", fontSize: "1rem", lineHeight: 1.9 }}>
            A motivated team contributor with strong communication skills and an unwavering
            commitment to delivering exceptional experiences that build long-term brand advocacy.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "Email",    value: "manisha.basnet4090@gmail.com" },
              { label: "Phone",    value: "+977 9764506070"              },
              { label: "Location", value: "Gorkha-5, Gorkha, Nepal"     },
              { label: "Open to",  value: "Full-time opportunities"      },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl px-4 py-3.5 transition-all duration-200"
                style={{ background: "#1e1b12", borderWidth: "1px", borderStyle: "solid", borderColor: "#363020" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(212,160,48,.35)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#363020"; }}
              >
                <span className="block text-[10px] uppercase tracking-widest mb-1" style={{ color: "#7a6848" }}>
                  {label}
                </span>
                <span className="block text-sm leading-snug" style={{ color: "#c4a878" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
