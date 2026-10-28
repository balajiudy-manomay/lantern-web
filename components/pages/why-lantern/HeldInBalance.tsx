"use client";

import { useEffect, useRef } from "react";
import { cl01, createScrollScrub, ez, lerp, mixc, sel, sg, stx } from "./svg-anim";

// Icon paths on a 40x40 grid, one per area
const AREAS = [
  { t: "Market & Business Intelligence", lines: ["Market & Business", "Intelligence"], icon: <><circle cx="18" cy="18" r="10" /><path d="M26 26l9 9" /></>, d: "Understand business challenges, market opportunities, competitive dynamics, current-state maturity and the latest industry trends." },
  { t: "Strategy & Transformation", lines: ["Strategy &", "Transformation"], icon: <path d="M10 35V6M10 8h20l-4 6 4 6H10" />, d: "Define business priorities, target outcomes, transformation roadmaps, investment priorities and execution plans." },
  { t: "Technology, Data, AI & Automation", lines: ["Technology, Data,", "AI & Automation"], icon: <><rect x="10" y="10" width="20" height="20" rx="2" /><rect x="16" y="16" width="8" height="8" /><path d="M15 4v6M25 4v6M15 30v6M25 30v6M4 15h6M4 25h6M30 15h6M30 25h6" /></>, d: "Identify and implement technology, data, AI and automation capabilities aligned with business priorities and desired outcomes." },
  { t: "Process & Operating Model Transformation", lines: ["Process & Operating", "Model Transformation"], icon: <><rect x="14" y="5" width="12" height="8" rx="1" /><rect x="4" y="27" width="12" height="8" rx="1" /><rect x="24" y="27" width="12" height="8" rx="1" /><path d="M20 13v7M10 27v-7h20v7" /></>, d: "Redesign business processes, operating models, organisational structures, roles and capabilities to improve efficiency and performance." },
  { t: "Governance, Risk & Performance", lines: ["Governance, Risk", "& Performance"], icon: <><path d="M20 5l13 5v10c0 8-6 13-13 16C13 33 7 28 7 20V10z" /><path d="M14 20l4 4 8-9" /></>, d: "Establish governance, controls, compliance, risk management, KPIs and benefits realisation to ensure accountability and measurable outcomes." },
  { t: "Change, Adoption & Enablement", lines: ["Change, Adoption", "& Enablement"], icon: <path d="M8 20a12 12 0 0 1 21-8M32 8v6h-6M32 20a12 12 0 0 1-21 8M8 32v-6h6" />, d: "Enable people to adopt new technologies, processes and ways of working through training and communication for sustainable change." },
];

// Seconds at which each area is added. Scrolling plays the timeline from 0 to BAL_END (the solution
// has just settled into alignment), and STILL is the frame shown with reduced motion.
const BAL_AT = [1.5, 4.1, 6.7, 9.3, 11.9, 14.5], BAL_END = 16.8, STILL = 20;

/** Builds the balance drawing inside `svg` and returns a function that renders it at time t. */
function buildBalance(svg: SVGSVGElement, rows: HTMLElement[], capT: HTMLElement, capD: HTMLElement) {
  const O = [450, 320], RA = 225;
  const defs = sel("defs", {}, svg);
  defs.innerHTML = '<radialGradient id="balG"><stop offset="0" stop-color="#FFE499" stop-opacity=".9"/><stop offset="1" stop-color="#FFE499" stop-opacity="0"/></radialGradient>';
  const A: [number, number, number][] = [];
  for (let i = 0; i < 6; i++) { const a = (-90 + i * 60) * Math.PI / 180; A.push([O[0] + RA * Math.cos(a), O[1] + RA * Math.sin(a), a]); }
  const zone = sel("circle", { cx: O[0], cy: O[1], r: 52, class: "bal-zone", fill: "rgba(14,47,88,.05)", "stroke-width": 1.5, "stroke-dasharray": "5 6", "stroke-opacity": .6 }, svg); zone.style.stroke = "var(--navy)";
  const zl1 = stx(svg, O[0], O[1] + 86, "Aligned with", "bl-lbl", "middle"), zl2 = stx(svg, O[0], O[1] + 112, "your business", "bl-lbl", "middle");
  [zl1, zl2].forEach((z) => { z.style.fill = "var(--muted)"; z.style.paintOrder = "stroke"; z.style.stroke = "var(--page)"; z.setAttribute("stroke-width", "7"); z.setAttribute("stroke-linejoin", "round"); });
  const glow = sel("circle", { r: 95, fill: "url(#balG)", opacity: 0 }, svg);
  const lines = A.map((p) => sel("line", { x1: O[0], y1: O[1], x2: p[0], y2: p[1] }, svg));
  svg.appendChild(zl1); svg.appendChild(zl2);
  const anchors = A.map((p) => { const c = sel("circle", { cx: p[0], cy: p[1], r: 13, "stroke-width": 2 }, svg); c.style.stroke = "var(--navy)"; return c; });
  const labs = A.map((p, i) => {
    const c = Math.cos(p[2]), s = Math.sin(p[2]);
    const an = Math.abs(c) < .2 ? "middle" : c > 0 ? "start" : "end";
    const lx = p[0] + (an === "middle" ? 0 : c > 0 ? 22 : -22), ly = p[1] + (s < -.9 ? -50 : s > .9 ? 42 : -8);
    const g = sel("g", {}, svg);
    AREAS[i].lines.forEach((l, j) => { const t = stx(g, lx, ly + j * 25, l, "bl-lbl", an); t.style.fill = "var(--navy)"; });
    return g;
  });
  const node = sel("circle", { r: 26, "stroke-width": 3 }, svg); node.style.stroke = "var(--page)";
  const nl = stx(svg, 0, 0, "Solution", "bl-lbl", "middle"); nl.style.fill = "var(--navy)";
  function target(k: number) { let x = 0, y = 0; for (let i = 0; i < k; i++) { x += Math.cos(A[i][2]); y += Math.sin(A[i][2]); } return [O[0] + x * 74, O[1] + y * 74]; }
  let lastK = -1;

  return (t: number) => {
    let k = 0; for (let i = 0; i < 6; i++) if (t >= BAL_AT[i]) k = i + 1;
    const resetting = t > 23.5;
    const since = k ? t - BAL_AT[k - 1] : 0;
    let u = ez(cl01(since / 1.4)), a = target(Math.max(0, k - 1)), b = target(k);
    if (resetting) { a = O; b = O; u = 1; }
    let x = lerp(a[0], b[0], u), y = lerp(a[1], b[1], u);
    const w = Math.sin(since * 7) * Math.exp(-since * 2.6) * 10;
    if (k && k < 6) { x += w * Math.cos(A[k - 1][2]); y += w * Math.sin(A[k - 1][2]); }
    node.setAttribute("cx", String(x)); node.setAttribute("cy", String(y)); nl.setAttribute("x", String(x)); nl.setAttribute("y", String(y - 44));
    const fade = 1 - sg(t, 23.5, 25.2);
    lines.forEach((l, i) => {
      const on = i < k && !resetting;
      l.setAttribute("x1", String(x)); l.setAttribute("y1", String(y));
      l.style.stroke = on ? "#E7AA51" : "var(--navy)";
      l.setAttribute("stroke-opacity", String(on ? .95 * fade : .12)); l.setAttribute("stroke-width", on ? "3" : "1.5"); l.setAttribute("stroke-dasharray", on ? "none" : "4 6");
      anchors[i].style.fill = on ? "var(--navy-solid)" : "var(--page)";
      labs[i].setAttribute("opacity", String(on ? (i === k - 1 || k === 6 ? 1 : .6) : .4));
    });
    const done = k === 6 ? ez(cl01((since - .9) / 1)) * fade : 0;
    node.setAttribute("fill", mixc("#566C8A", "#E7AA51", done)); node.setAttribute("r", String(26 + done * 8));
    zone.style.stroke = done > .5 ? "#E7AA51" : "var(--navy)";
    [zl1, zl2].forEach((z) => { z.style.fill = done > .5 ? "var(--navy)" : "var(--muted)"; z.style.fontWeight = done > .5 ? "700" : "600"; });
    glow.setAttribute("cx", String(x)); glow.setAttribute("cy", String(y)); glow.setAttribute("opacity", String(done));
    // "open" marks the one row whose description shows while the section is pinned
    const openRow = Math.max(0, Math.min(5, k - 1));
    rows.forEach((r, i) => { r.classList.toggle("added", i < k && !resetting); r.classList.toggle("on", i === k - 1 && k < 6 && !resetting); r.classList.toggle("open", i === openRow); });
    if (k !== lastK) {
      lastK = k;
      let T, D;
      if (k === 0) { T = "A solution, shaped by six areas"; D = "Watch where the solution lands as each area is considered."; }
      else if (k === 1) { T = "Considering only " + AREAS[0].t; D = "Designed from one angle, the solution drifts away from what the business needs."; }
      else if (k < 6) { T = "Adding " + AREAS[k - 1].t; D = "Closer, but with any area left out, the solution is still not aligned with the business."; }
      else { T = "All six areas, considered together"; D = "Only now does the solution settle into alignment with your business, and stay there."; }
      capT.textContent = T; capD.textContent = D;
    }
  };
}

/**
 * One holistic way of working: a solution held by threads to six areas settles into alignment only when all six are considered.
 * The areas are added as the page scrolls: where the diagram and list fit on screen they stay pinned while the visitor
 * scrolls through them; otherwise they play as the diagram scrolls past.
 */
export default function HeldInBalance() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const capTRef = useRef<HTMLElement | null>(null);
  const capDRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const track = trackRef.current, root = rootRef.current, svg = svgRef.current, list = listRef.current;
    if (!track || !root || !svg || !list || !capTRef.current || !capDRef.current) return;
    const rows = Array.from(list.children) as HTMLLIElement[];
    const scrub = createScrollScrub({
      track, pin: root, follow: svg, end: BAL_END, still: STILL,
      render: buildBalance(svg, rows, capTRef.current, capDRef.current),
    });
    // Clicking an area scrolls to the point where it has just been added
    const goTo = (i: number) => scrub.seek(Math.min(BAL_END, BAL_AT[i] + 1.6));
    const offs = rows.map((r, i) => {
      const onClick = () => goTo(i);
      const onKey = (e: KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goTo(i); } };
      r.addEventListener("click", onClick);
      r.addEventListener("keydown", onKey);
      return () => { r.removeEventListener("click", onClick); r.removeEventListener("keydown", onKey); };
    });
    return () => {
      scrub.destroy();
      offs.forEach((off) => off());
      svg.replaceChildren();
    };
  }, []);

  return (
    <div className="bal-track" ref={trackRef}>
      <div className="hw bal settle" ref={rootRef}>
        <figure className="bal-fig">
          <svg
            ref={svgRef}
            viewBox="0 0 900 640"
            role="img"
            aria-label="A solution held by threads to six areas of the business. With only some areas considered it is pulled away from alignment with the business; with all six it settles into alignment."
          ></svg>
          <figcaption className="bal-cap" aria-live="polite"><b ref={capTRef}></b><span ref={capDRef}></span></figcaption>
        </figure>
        <ul className="hw-list" ref={listRef}>
          {AREAS.map((a) => (
            <li className="hw-row" key={a.t} tabIndex={0}>
              <svg className="gi" viewBox="0 0 40 40" aria-hidden="true">{a.icon}</svg>
              <div>
                <h4>{a.t}</h4>
                <p>{a.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
