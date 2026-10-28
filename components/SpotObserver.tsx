"use client";

import { useEffect } from "react";

/** Moves the `.spot` card glow to follow the pointer (sets --mx / --my on the card under it). */
export default function SpotObserver() {
  useEffect(() => {
    function onMove(e: PointerEvent) {
      const t = e.target as Element | null;
      const s = t && t.closest ? (t.closest(".spot") as HTMLElement | null) : null;
      if (!s) return;
      const b = s.getBoundingClientRect();
      s.style.setProperty("--mx", e.clientX - b.left + "px");
      s.style.setProperty("--my", e.clientY - b.top + "px");
    }
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}
