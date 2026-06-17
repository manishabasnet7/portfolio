"use client";
import { useEffect, useRef } from "react";

const CATS = [
  {
    title: "Sales & Retail",
    skills: [
      "Product Consultation",
      "Sales Achievement",
      "Merchandising",
      "Samsung Expertise",
      "Upselling & Cross-selling",
      "Target Execution",
    ],
  },
  {
    title: "Customer Experience",
    skills: [
      "Relationship Management",
      "Needs Analysis",
      "Problem Resolution",
      "Post-Sales Support",
      "Complaint Handling",
      "Customer Retention",
    ],
  },
  {
    title: "Work Effectiveness",
    skills: [
      "Time Management",
      "Team Collaboration",
      "Adaptability",
      "Attention to Detail",
      "Multitasking",
      "Reporting & Coordination",
    ],
  },
];

export default function Skills() {
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      secRef.current?.querySelectorAll<HTMLElement>(".reveal").forEach(el => el.classList.add("in"));
    }, { threshold: 0.08 });
    if (secRef.current) obs.observe(secRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={secRef} className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 py-32">
      <div className="gold-line mb-20" />

      <div className="sec-label reveal">Competencies</div>
      <h2
        className="font-[family-name:var(--font-grotesk)] font-black tracking-tight mb-4 reveal"
        style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#faf5e8" }}
      >
        Core <span className="g-text">Skills</span>
      </h2>
      <p className="mb-16 reveal" style={{ color: "#c4a878", fontSize: "0.9375rem", lineHeight: 1.8, maxWidth: 480 }}>
        Built through 2.5+ years of daily customer interaction and consistent performance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {CATS.map(({ title, skills }, ci) => (
          <div
            key={title}
            className="reveal rounded-2xl p-7 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1"
            style={{
              background:      "#1e1b12",
              borderWidth:     "1px",
              borderStyle:     "solid",
              borderColor:     "#363020",
              borderTopColor:  "rgba(212,160,48,.4)",
              transitionDelay: `${ci * 80}ms`,
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(212,160,48,.35)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#363020"; e.currentTarget.style.borderTopColor = "rgba(212,160,48,.4)"; }}
          >
            <h3
              className="font-[family-name:var(--font-grotesk)] font-bold text-xs uppercase tracking-widest"
              style={{ color: "#d4a030" }}
            >
              {title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skills.map(name => (
                <span
                  key={name}
                  className="text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(212,160,48,.07)",
                    border:     "1px solid rgba(212,160,48,.2)",
                    color:      "#c4a878",
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
