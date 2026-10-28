"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../why-lantern/svg-anim";

const SECTORS = ["Technology & AI", "Financial & Business Services", "Healthcare & Life Sciences", "Professional Services", "Logistics & Operations", "Government Organisations"];
const FUNCS = ["Strategy", "Operations", "Finance", "HR", "Technology", "Data", "Sales & Marketing", "Customer Experience"];

const colX = (i: number) => 36 + i * 47;
const rowY = (j: number) => 34 + j * 44;

/** Dot grid of industries (rows) by functions (columns); the crosshair follows the pointer, else wanders on its own. */
export default function WhereTheyMeet() {
  const pointerAt = useRef(-99999);
  const [at, setAt] = useState<[number, number]>([2, 4]);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = setInterval(() => {
      if (document.hidden) return;
      if (performance.now() - pointerAt.current < 3500) return;
      setAt([Math.floor(Math.random() * 8), Math.floor(Math.random() * 6)]);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  function onPointerMove(e: React.PointerEvent<SVGSVGElement>) {
    const b = e.currentTarget.getBoundingClientRect();
    const sx = ((e.clientX - b.left) / b.width) * 400, sy = ((e.clientY - b.top) / b.height) * 290;
    const i = Math.max(0, Math.min(7, Math.round((sx - 36) / 47)));
    const j = Math.max(0, Math.min(5, Math.round((sy - 34) / 44)));
    pointerAt.current = performance.now();
    setAt((p) => (p[0] === i && p[1] === j ? p : [i, j]));
  }

  const [i, j] = at;
  const x = colX(i), y = rowY(j);

  return (
    <div className="mx">
      <svg
        viewBox="0 0 400 290"
        role="img"
        aria-label="A grid of dots. Rows are industries and columns are business functions. A highlighted point shows where an industry and a function meet."
        onPointerMove={onPointerMove}
      >
        <defs>
          <linearGradient id="mG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E7AA51" />
            <stop offset=".5" stopColor="#FFE499" />
            <stop offset="1" stopColor="#E5C971" />
          </linearGradient>
        </defs>
        {SECTORS.map((_, r) => FUNCS.map((_, c) => <circle key={`${r}-${c}`} className="mx-dot" cx={colX(c)} cy={rowY(r)} r="3.2" />))}
        <line className="mx-line" x1="10" y1="0" x2="390" y2="0" style={{ transform: `translateY(${y}px)` }} />
        <line className="mx-line" x1="0" y1="8" x2="0" y2="280" style={{ transform: `translateX(${x}px)` }} />
        <g className="mx-g" style={{ transform: `translate(${x}px,${y}px)` }}>
          <circle className="mx-ring" r="13" />
          <circle r="5.5" fill="url(#mG)" />
        </g>
      </svg>
      <div className="mx-read" aria-live="polite">
        <span className="lab">Where they meet</span>
        <p>{SECTORS[j]} <span>×</span> {FUNCS[i]}</p>
      </div>
    </div>
  );
}
