"use client";

import { useEffect, useRef, useState } from "react";

export interface FrameworkStep {
  step: string;
  tag: string;
}

export interface Principle {
  h: string;
  tag: string;
  desc: string;
}

export default function LanternFramework({
  framework,
  principles,
}: {
  framework: FrameworkStep[];
  principles: Principle[];
}) {
  const [active, setActive] = useState(0);
  const [beamHeight, setBeamHeight] = useState(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const dotRefs = useRef<(HTMLElement | null)[]>([]);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cardRefs.current.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const measure = () => {
      const trackEl = trackRef.current;
      const dotEl = dotRefs.current[active];
      if (!trackEl || !dotEl) return;
      const trackRect = trackEl.getBoundingClientRect();
      const dotRect = dotEl.getBoundingClientRect();
      setBeamHeight(dotRect.top + dotRect.height / 2 - trackRect.top);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  return (
    <div className="la-cols">
      <div className="fw-track-wrap">
        <div className="fw-eyebrow">Understand &rarr; Realise</div>
        <div className="fw-track" ref={trackRef}>
          <div className="fw-beam-fill" style={{ height: `${beamHeight}px` }}>
            <span className="fw-beam-tip"></span>
          </div>
          {framework.map((f, i) => (
            <div key={f.step} className={`fw-step${i === active ? " active" : ""}`}>
              <span className="fw-dot" ref={(el) => { dotRefs.current[i] = el; }}></span>
              <div className="fw-nm">{f.step}</div>
              <div className="fw-tag">{f.tag}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pr-grid">
        {principles.map((p, i) => (
          <article
            key={p.h}
            ref={(el) => { cardRefs.current[i] = el; }}
            className={`pr-card${i === active ? " active" : ""}`}
          >
            <h2 className="pr-h">{p.h}</h2>
            <p className="pr-tag">{p.tag}</p>
            <p className="pr-desc">{p.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
