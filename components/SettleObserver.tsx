"use client";

import { useEffect } from "react";

/** Adds `in` to every `.settle` element as it scrolls into view, so it eases up into place. */
export default function SettleObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".settle:not(.in)"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
