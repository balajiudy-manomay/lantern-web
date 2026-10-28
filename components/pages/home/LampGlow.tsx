"use client";

import { useEffect, useRef } from "react";

/**
 * Lantern light on the opening section: a warm glow that drifts on its own
 * and follows the pointer while it is over the section.
 */
export default function LampGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const open = glow?.parentElement;
    if (!glow || !open) return;

    const reduce = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const lamp = { x: 0, y: 0, tx: 0, ty: 0, ready: false };
    let pointerAt = -99999, running = false, rafId = 0;

    function lampUpdate(t: number) {
      const r = open!.getBoundingClientRect();
      if (!reduce && (t - pointerAt) > 2600) {
        lamp.tx = r.left + r.width * (0.62 + 0.3 * Math.sin(t * 0.00032));
        lamp.ty = r.top + r.height * (0.5 + 0.34 * Math.sin(t * 0.00047 + 1.3));
      }
      if (!lamp.ready) { lamp.x = lamp.tx; lamp.y = lamp.ty; lamp.ready = true; }
      const k = reduce ? 1 : 0.09;
      lamp.x += (lamp.tx - lamp.x) * k;
      lamp.y += (lamp.ty - lamp.y) * k;
      glow!.style.transform = "translate3d(" + (lamp.x - r.left - 300).toFixed(1) + "px," + (lamp.y - r.top - 300).toFixed(1) + "px,0)";
    }
    function lampLoop(t: number) { if (!running) return; lampUpdate(t); rafId = requestAnimationFrame(lampLoop); }
    function lampStart() { if (running || reduce) return; running = true; rafId = requestAnimationFrame(lampLoop); }
    function lampStop() { running = false; if (rafId) cancelAnimationFrame(rafId); }

    function onMove(e: PointerEvent) {
      lamp.tx = e.clientX; lamp.ty = e.clientY; pointerAt = performance.now();
      if (reduce) lampUpdate(performance.now());
    }
    function onLeave() { pointerAt = performance.now() - 1800; }
    open.addEventListener("pointermove", onMove, { passive: true });
    open.addEventListener("pointerleave", onLeave);

    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) lampStart(); else lampStop(); });
      }, { threshold: 0.01 });
      io.observe(open);
    } else {
      lampStart();
    }
    if (reduce) {
      const r = open.getBoundingClientRect();
      lamp.tx = r.left + r.width * 0.7; lamp.ty = r.top + r.height * 0.45;
      lampUpdate(performance.now());
    }

    return () => {
      lampStop();
      io?.disconnect();
      open.removeEventListener("pointermove", onMove);
      open.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div className="open-glow" ref={glowRef} aria-hidden="true"></div>;
}
