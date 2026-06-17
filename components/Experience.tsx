"use client";
import { useEffect, useRef } from "react";

const DUTIES = [
  "Conducted product demonstrations and consultations across Samsung's smartphone, tablet, and accessories portfolio",
  "Assessed customer requirements and delivered tailored recommendations to maximise satisfaction and conversion",
  "Executed merchandise displays and maintained planogram compliance to strengthen in-store brand visibility",
  "Monitored daily and monthly KPIs, consistently achieving and surpassing designated sales targets",
  "Maintained current knowledge of Samsung's latest product launches, features, and competitive landscape",
  "Managed post-sales support and resolved customer inquiries within agreed service timelines",
  "Cultivated long-term customer relationships to drive repeat business and brand advocacy",
];

const WINS = [
  "Consistently surpassed monthly sales targets throughout the full tenure of employment",
  "Developed in-depth technical expertise across Samsung's core product categories",
  "Maintained exemplary customer satisfaction ratings across both contract periods",
  "Contributed to measurable store sales growth and strengthened Samsung's brand presence in the Gorkha region",
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.classList.add("in"); },
      { threshold: 0.06 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 py-32">
      <div className="gold-line mb-20" />

      <div className="sec-label">Experience</div>
      <h2
        className="font-[family-name:var(--font-grotesk)] font-black tracking-tight mb-16"
        style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#faf5e8" }}
      >
        Work <span className="g-text">History</span>
      </h2>

      <div className="relative pl-8">
        <div
          className="absolute left-0 top-2 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, rgba(212,160,48,.55) 70%, transparent)" }}
        />

        <div ref={ref} className="reveal">
          <div
            className="absolute left-0 top-[11px] w-2 h-2 rounded-full -translate-x-[3px]"
            style={{ background: "#d4a030", boxShadow: "0 0 8px rgba(212,160,48,.5)" }}
          />

          <div
            className="rounded-2xl p-8 transition-all duration-300"
            style={{ background: "#1e1b12", borderWidth: "1px", borderStyle: "solid", borderColor: "#363020" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(212,160,48,.35)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#363020"; }}
          >
            <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
              <h3
                className="font-[family-name:var(--font-grotesk)] font-black"
                style={{ fontSize: "1.1rem", color: "#faf5e8" }}
              >
                Samsung Experience Consultant
              </h3>
              <span
                className="text-xs font-semibold px-3 py-1.5 rounded flex-shrink-0"
                style={{ background: "rgba(212,160,48,.12)", border: "1px solid rgba(212,160,48,.25)", color: "#d4a030" }}
              >
                Oct 2023 – Apr 2026
              </span>
            </div>

            <p className="text-sm font-medium mb-5" style={{ color: "#ecc050" }}>
              Samsung Nepal &nbsp;·&nbsp; Gorkha, Nepal
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Rolling Plans Pvt. Ltd. · Oct 2023 – Jan 2025",
                "Catalyst Management Service (CMS) · Feb 2025 – Apr 2026",
              ].map(t => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded"
                  style={{ background: "#252218", border: "1px solid #363020", color: "#7a6848" }}
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="space-y-3 mb-8">
              {DUTIES.map(d => (
                <li key={d} className="flex gap-3 text-sm" style={{ color: "#c4a878", lineHeight: 1.75 }}>
                  <span className="flex-shrink-0 mt-[7px] w-1 h-1 rounded-full" style={{ background: "rgba(212,160,48,.55)" }} />
                  {d}
                </li>
              ))}
            </ul>

            <div
              className="rounded-xl p-6"
              style={{ background: "rgba(212,160,48,.05)", border: "1px solid rgba(212,160,48,.18)" }}
            >
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#d4a030" }}>
                Key Achievements
              </div>
              <ul className="space-y-3">
                {WINS.map(w => (
                  <li key={w} className="flex gap-3 text-sm" style={{ color: "#c4a878", lineHeight: 1.75 }}>
                    <span className="flex-shrink-0" style={{ color: "#d4a030" }}>✦</span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
