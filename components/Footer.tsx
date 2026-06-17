"use client";
export default function Footer() {
  return (
    <footer className="relative z-10">
      <div
        className="h-px mx-6 md:mx-14"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,160,48,.28) 40%, rgba(236,192,80,.28) 60%, transparent)" }}
      />
      <div className="max-w-6xl mx-auto px-6 md:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
        <span className="font-[family-name:var(--font-grotesk)] font-black text-sm tracking-widest uppercase g-text">
          Manisha Basnet
        </span>

        <nav className="flex flex-wrap justify-center gap-7">
          {["About","Skills","Experience","Education","Contact"].map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-xs tracking-wider uppercase transition-colors duration-200"
              style={{ color: "#7a6848" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#c4a878")}
              onMouseLeave={e => (e.currentTarget.style.color = "#7a6848")}
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/manisha-basnet119"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors duration-200"
            style={{ color: "#7a6848" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#c4a878")}
            onMouseLeave={e => (e.currentTarget.style.color = "#7a6848")}
          >
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <p className="text-xs" style={{ color: "#7a6848" }}>
            © 2026 · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
