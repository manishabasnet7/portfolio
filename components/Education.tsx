"use client";
import { useEffect, useRef } from "react";

const EDU = [
  {
    year:   "2023",
    degree: "Bachelor of Business Studies",
    field:  "Commerce & Business",
    school: "Drabya Shah Multiple Campus",
    org:    "Tribhuvan University",
  },
  {
    year:   "2019",
    degree: "+2 Level — Higher Secondary",
    field:  "Science Faculty",
    school: "Takshashila Academy",
    org:    "National Examination Board (NEB)",
  },
  {
    year:   "2017",
    degree: "Secondary Education (SEE)",
    field:  "General Education",
    school: "Manakama English Boarding School",
    org:    "National Examination Board (NEB)",
  },
];

const LANGS = [
  { flag: "🇳🇵", name: "Nepali",  level: "Native"       },
  { flag: "🇬🇧", name: "English", level: "Professional" },
  { flag: "🇮🇳", name: "Hindi",   level: "Working"      },
];

function EduCard({ edu, delay }: { edu: typeof EDU[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => ref.current?.classList.add("in"), delay); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="reveal rounded-2xl p-7 flex flex-col gap-1.5 transition-all duration-300 hover:-translate-y-1"
      style={{ background: "#1e1b12", borderWidth: "1px", borderStyle: "solid", borderColor: "#363020" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(212,160,48,.35)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "#363020"; }}
    >
      <span className="text-xs font-bold tracking-widest" style={{ color: "#7a6848" }}>{edu.year}</span>
      <h3
        className="font-[family-name:var(--font-grotesk)] font-bold leading-snug"
        style={{ fontSize: "0.9375rem", color: "#faf5e8" }}
      >
        {edu.degree}
      </h3>
      <p className="text-sm font-medium" style={{ color: "#d4a030" }}>{edu.field}</p>
      <p className="text-sm" style={{ color: "#c4a878" }}>{edu.school}</p>
      <p className="text-xs" style={{ color: "#7a6848" }}>{edu.org}</p>
    </div>
  );
}

function LangCard({ flag, name, level, delay }: { flag: string; name: string; level: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => ref.current?.classList.add("in"), delay); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="reveal rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
      style={{ background: "#1e1b12", borderWidth: "1px", borderStyle: "solid", borderColor: "#363020" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(212,160,48,.35)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "#363020"; }}
    >
      <span className="text-4xl block mb-3">{flag}</span>
      <div className="font-[family-name:var(--font-grotesk)] font-bold text-sm" style={{ color: "#faf5e8" }}>
        {name}
      </div>
      <div className="text-xs mt-1" style={{ color: "#7a6848" }}>{level}</div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 py-32">
      <div className="gold-line mb-20" />

      <div className="sec-label">Education</div>
      <h2
        className="font-[family-name:var(--font-grotesk)] font-black tracking-tight mb-16"
        style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#faf5e8" }}
      >
        Academic <span className="g-text">Background</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {EDU.map((edu, i) => <EduCard key={edu.degree} edu={edu} delay={i * 80} />)}
      </div>

      <div className="sec-label">Languages</div>
      <div className="grid grid-cols-3 gap-4 mt-4" style={{ maxWidth: 360 }}>
        {LANGS.map(({ flag, name, level }, i) => (
          <LangCard key={name} flag={flag} name={name} level={level} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
