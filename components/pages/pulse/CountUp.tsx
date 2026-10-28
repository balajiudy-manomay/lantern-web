"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../why-lantern/svg-anim";

/** A figure that counts up from 0 once it is mostly in view. The final value is rendered first, so it reads correctly without JS. */
export default function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window) || prefersReducedMotion()) return;
    let raf = 0;
    function run() {
      const dur = 1100;
      let t0: number | null = null;
      el!.textContent = "0";
      function step(t: number) {
        if (t0 === null) t0 = t;
        const p = Math.min(1, (t - t0) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        el!.textContent = String(Math.round(to * e));
        if (p < 1) raf = requestAnimationFrame(step);
        else el!.textContent = String(to);
      }
      raf = requestAnimationFrame(step);
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { run(); io.unobserve(en.target); }
      });
    }, { threshold: 0.7 });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = String(to);
    };
  }, [to]);

  return <span className="count" ref={ref}>{to}</span>;
}
