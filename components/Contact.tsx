"use client";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SVC = "service_2mc4egg";
const T1  = "template_heebwvf";
const T2  = "template_l5fuk9s";
const PUB = "CcRdtK6BPbiRDsFV1";

const SUBJECTS = ["Job Opportunity","Collaboration Proposal","Business Inquiry","General Question","Other"];

export default function Contact() {
  const secRef   = useRef<HTMLElement>(null);
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => { emailjs.init(PUB); }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      leftRef.current?.classList.add("in");
      setTimeout(() => rightRef.current?.classList.add("in"), 130);
    }, { threshold: 0.06 });
    if (secRef.current) obs.observe(secRef.current);
    return () => obs.disconnect();
  }, []);

  const [form, setForm]     = useState({ from_name:"", from_email:"", subject:"", message:"" });
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"err">("idle");
  const [errMsg, setErrMsg] = useState("");
  const [focused, setFocused] = useState("");

  const set = (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
      setForm(p => ({ ...p, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { from_name, from_email, subject, message } = form;
    if (!from_name || !from_email || !subject || !message) {
      setStatus("err"); setErrMsg("Please fill in all required fields."); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from_email)) {
      setStatus("err"); setErrMsg("Please enter a valid email address."); return;
    }
    setStatus("loading");
    const time = new Date().toLocaleString("en-US", {
      month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",timeZone:"Asia/Kathmandu",
    }) + " NST";
    try {
      await emailjs.send(SVC, T1, { ...form, time, name: from_name, email: from_email });
      await emailjs.send(SVC, T2, { ...form, time, name: from_name, email: from_email });
      setStatus("ok");
      setForm({ from_name:"", from_email:"", subject:"", message:"" });
    } catch {
      setStatus("err");
      setErrMsg("Could not send. Please email manisha.basnet4090@gmail.com directly.");
    }
  };

  const inputBase: React.CSSProperties = {
    width: "100%", padding: "12px 14px",
    background: "#14120c",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#363020",
    borderRadius: 10,
    color: "#faf5e8",
    fontSize: "0.875rem",
    fontFamily: "var(--font-inter), sans-serif",
    outline: "none",
    transition: "border-color .2s, box-shadow .2s",
  };

  const focusStyle = (key: string): React.CSSProperties => focused === key
    ? { borderColor: "rgba(212,160,48,.65)", boxShadow: "0 0 0 3px rgba(212,160,48,.1)" }
    : {};

  return (
    <section id="contact" ref={secRef} className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 py-32">
      <div className="gold-line mb-20" />

      <div className="sec-label">Contact</div>
      <h2
        className="font-[family-name:var(--font-grotesk)] font-black tracking-tight mb-4"
        style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#faf5e8" }}
      >
        Get In <span className="g-text">Touch</span>
      </h2>
      <p className="mb-16" style={{ color: "#c4a878", fontSize: "0.9375rem", lineHeight: 1.8, maxWidth: 460 }}>
        Have an opportunity or just want to connect? I typically respond within 24 hours.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-14 items-start">

        <div ref={leftRef} className="reveal flex flex-col gap-3">
          {[
            { label:"Email",        value:"manisha.basnet4090@gmail.com", href:"mailto:manisha.basnet4090@gmail.com" },
            { label:"Phone",        value:"+977 9764506070",              href:"tel:+9779764506070" },
            { label:"Location",     value:"Gorkha-5, Gorkha, Nepal",      href: undefined },
            { label:"Availability", value:"Open to new opportunities",    href: undefined },
          ].map(({ label, value, href }) => (
            <div
              key={label}
              className="rounded-xl px-5 py-4"
              style={{ background: "#1e1b12", border: "1px solid #363020" }}
            >
              <span className="block text-[10px] uppercase tracking-widest mb-1.5" style={{ color: "#7a6848" }}>
                {label}
              </span>
              {href ? (
                <a href={href} className="text-sm font-medium transition-colors" style={{ color: "#c4a878" }}
                   onMouseEnter={e => (e.currentTarget.style.color = "#ecc050")}
                   onMouseLeave={e => (e.currentTarget.style.color = "#c4a878")}>
                  {value}
                </a>
              ) : (
                <span className="text-sm font-medium" style={{ color: "#c4a878" }}>{value}</span>
              )}
            </div>
          ))}

          <div
            className="rounded-xl px-5 py-4 flex items-start gap-3 mt-1"
            style={{ background: "rgba(212,160,48,.05)", border: "1px solid rgba(212,160,48,.18)" }}
          >
            <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 pulse-dot" style={{ background: "#22c55e" }} />
            <div>
              <div className="text-sm font-semibold mb-0.5" style={{ color: "#faf5e8" }}>Quick response guaranteed</div>
              <div className="text-xs" style={{ color: "#7a6848" }}>Usually within 24 hours.</div>
            </div>
          </div>
        </div>

        <div ref={rightRef} className="reveal">
          <div
            className="rounded-2xl p-8"
            style={{ background: "#1e1b12", border: "1px solid #363020" }}
          >
            <form onSubmit={submit} noValidate className="flex flex-col gap-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { k:"from_name",  label:"Full Name",     type:"text",  ph:"Your full name"  },
                  { k:"from_email", label:"Email Address", type:"email", ph:"you@example.com" },
                ].map(({ k, label, type, ph }) => (
                  <div key={k}>
                    <label className="block text-xs font-semibold mb-2" style={{ color: "#7a6848", letterSpacing:"0.05em" }}>
                      {label} *
                    </label>
                    <input
                      type={type} placeholder={ph}
                      value={form[k as keyof typeof form]} onChange={set(k)}
                      style={{ ...inputBase, ...focusStyle(k) }}
                      onFocus={() => setFocused(k)} onBlur={() => setFocused("")}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: "#7a6848", letterSpacing:"0.05em" }}>
                  Subject *
                </label>
                <div className="relative">
                  <select
                    value={form.subject} onChange={set("subject")}
                    style={{ ...inputBase, ...focusStyle("subject"), appearance:"none", WebkitAppearance:"none", paddingRight:32, cursor:"pointer" }}
                    onFocus={() => setFocused("subject")} onBlur={() => setFocused("")}
                  >
                    <option value="" disabled>Select a subject…</option>
                    {SUBJECTS.map(s => (
                      <option key={s} value={s} style={{ background: "#1e1b12" }}>{s}</option>
                    ))}
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs pointer-events-none" style={{ color: "#7a6848" }}>▾</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: "#7a6848", letterSpacing:"0.05em" }}>
                  Message *
                </label>
                <textarea
                  placeholder="Write your message here…"
                  value={form.message} onChange={set("message")} maxLength={1200}
                  style={{ ...inputBase, ...focusStyle("message"), minHeight: 128, resize:"vertical" }}
                  onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                />
                <div className="text-right text-xs mt-1" style={{ color: "#7a6848" }}>{form.message.length}/1200</div>
              </div>

              <button
                type="submit" disabled={status === "loading"}
                className="flex items-center justify-center gap-2.5 py-3.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-200 hover:opacity-88 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(120deg,#d4a030,#ecc050)", color: "#14120c" }}
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 rounded-full spin-el" style={{ border:"2px solid rgba(20,18,12,.3)", borderTopColor:"#14120c" }} />
                    Sending…
                  </>
                ) : "Send Message →"}
              </button>

              {status === "ok" && (
                <div className="rounded-lg px-4 py-3.5 text-sm"
                  style={{ background:"rgba(22,163,74,.07)", border:"1px solid rgba(22,163,74,.2)", color:"#4ade80" }}>
                  ✓ Message sent. I&apos;ll respond within 24 hours — check your inbox for a confirmation.
                </div>
              )}
              {status === "err" && (
                <div className="rounded-lg px-4 py-3.5 text-sm"
                  style={{ background:"rgba(225,29,72,.07)", border:"1px solid rgba(225,29,72,.2)", color:"#fb7185" }}>
                  ✕ {errMsg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
