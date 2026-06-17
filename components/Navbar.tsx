"use client";
import { useState, useEffect } from "react";

const LINKS = [
  { href: "#about",      label: "About" },
  { href: "#skills",     label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education",  label: "Education" },
  { href: "#contact",    label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const ids = LINKS.map(l => l.href.slice(1));
    const obs = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-14"
        style={{
          height: 64,
          background: scrolled ? "rgba(20,18,12,.97)" : "rgba(20,18,12,.5)",
          backdropFilter:       "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: scrolled ? "1px solid rgba(212,160,48,.2)" : "1px solid transparent",
          transition: "background .3s, border-color .3s",
        }}
      >
        <a href="#home" className="font-[family-name:var(--font-grotesk)] font-black text-sm tracking-widest uppercase g-text">
          Manisha Basnet
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {LINKS.map(({ href, label }) => {
            const isActive = active === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm font-medium tracking-wide transition-colors duration-200"
                  style={{ color: isActive ? "#ecc050" : "#7a6848" }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "#c4a878"; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "#7a6848"; }}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:opacity-85"
          style={{ background: "transparent", border: "1px solid rgba(212,160,48,.55)", color: "#ecc050" }}
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Menu"
        >
          <span className={`block w-5 h-px transition-all duration-300 ${open ? "rotate-45 translate-y-[5px]" : ""}`} style={{ background: "#c4a878" }} />
          <span className={`block w-5 h-px transition-all duration-300 ${open ? "opacity-0 w-0" : ""}`}  style={{ background: "#c4a878" }} />
          <span className={`block w-5 h-px transition-all duration-300 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} style={{ background: "#c4a878" }} />
        </button>
      </nav>

      <div
        className="fixed inset-x-0 z-40 md:hidden overflow-hidden transition-all duration-300"
        style={{
          top: 64,
          maxHeight: open ? 380 : 0,
          background: "rgba(20,18,12,.98)",
          borderBottom: open ? "1px solid rgba(212,160,48,.18)" : "none",
        }}
      >
        <div className="flex flex-col px-6 py-5 gap-0.5">
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="py-3.5 text-sm font-medium border-b transition-colors"
              style={{ color: active === href.slice(1) ? "#ecc050" : "#7a6848", borderColor: "rgba(54,48,32,.8)" }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 py-3 text-center text-xs font-bold tracking-widest uppercase rounded"
            style={{ border: "1px solid rgba(212,160,48,.45)", color: "#ecc050" }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}
