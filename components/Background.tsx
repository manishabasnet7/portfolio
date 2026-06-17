"use client";
import { useEffect, useRef } from "react";

export default function Background() {
  const cvRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = cvRef.current!;
    const cx = cv.getContext("2d")!;
    let raf: number;

    const resize = () => { cv.width = innerWidth; cv.height = innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    type P = { x:number; y:number; vx:number; vy:number; r:number; a:number };
    const mk = (): P => ({
      x:  Math.random() * cv.width,
      y:  Math.random() * cv.height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r:  Math.random() * 1.2 + 0.3,
      a:  Math.random() * 0.28 + 0.08,
    });
    const pts = Array.from({ length: 44 }, mk);

    const frame = () => {
      cx.clearRect(0, 0, cv.width, cv.height);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > cv.width || p.y < 0 || p.y > cv.height)
          Object.assign(p, mk());
        cx.save();
        cx.globalAlpha = p.a;
        cx.fillStyle = "#d4a030";
        cx.beginPath();
        cx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        cx.fill();
        cx.restore();
      }
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx*dx + dy*dy);
          if (d < 110) {
            cx.save();
            cx.globalAlpha = (1 - d / 110) * 0.09;
            cx.strokeStyle = "#d4a030";
            cx.lineWidth   = 0.5;
            cx.beginPath();
            cx.moveTo(pts[i].x, pts[i].y);
            cx.lineTo(pts[j].x, pts[j].y);
            cx.stroke();
            cx.restore();
          }
        }
      raf = requestAnimationFrame(frame);
    };
    frame();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className="absolute rounded-full"
        style={{
          width: 900, height: 900,
          background: "radial-gradient(circle, rgba(212,160,48,.07) 0%, transparent 65%)",
          top: "5%", left: "50%",
          transform: "translateX(-50%)",
          animation: "orb-drift 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(212,160,48,.2) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <canvas ref={cvRef} className="absolute inset-0 opacity-45" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(20,18,12,.6) 100%)" }}
      />
    </div>
  );
}
