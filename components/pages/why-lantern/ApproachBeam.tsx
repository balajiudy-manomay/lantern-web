"use client";

import { useEffect, useRef } from "react";
import { createRunner, ez, lerp, mixc, sel, sg, stx } from "./svg-anim";

const STAGES = [
  { v: "Understand", s: "Where you are coming from", lab: "Listen before we propose", h: "We start with you, not a solution.", p: "Instead of jumping to an answer the moment we hear a problem, we first understand where you are coming from: your organisation’s purpose, the principles it runs on, your aspirations, and why this challenge matters now." },
  { v: "Diagnose", s: "The underlying issue", lab: "Root cause, not symptoms", h: "We find what is really holding you back.", p: "We look at the challenge from multiple angles to uncover the core reason behind it, before any solution is designed." },
  { v: "Design", s: "The whole business", lab: "The bigger picture", h: "Solutions that fit the whole organisation.", p: "We look at the business as a whole and design solutions that don’t fix one issue in isolation, but fit the wider organisation and move it towards its aspirations." },
  { v: "Implement", s: "Partnering to execute", lab: "Partners in execution", h: "We don’t hand over a plan and walk away.", p: "Advice is easy to find. Execution is often left for organisations to manage on their own. We partner with you to put the solution we proposed into practice." },
  { v: "Realise", s: "Value, measured", lab: "Value, measured and improved", h: "We stay until the value is real.", p: "We define the value we expect, and how it will be measured, from the very start, which also guides course correction along the way. We stay through measurement, confirm the value is realised and use what we learn to keep improving." },
];

// Seconds into the beam timeline at which each stage begins, and the loop length
const STAGE_AT = [0, 4.6, 9.2, 13.8, 18.4], BM_L = 24.5;

// Area icons for the beam, drawn on a 40x40 grid
const ICONS: Record<string, string> = {
  strategy: '<circle cx="20" cy="20" r="14"/><path d="M26 14l-4 10-10 2 4-10z"/>',
  people: '<circle cx="14" cy="14" r="5"/><path d="M5 32a9 9 0 0 1 18 0"/><circle cx="28" cy="16" r="4"/><path d="M26 25a8 8 0 0 1 10 7"/>',
  process: '<path d="M8 20a12 12 0 0 1 21-8"/><path d="M32 8v6h-6"/><path d="M32 20a12 12 0 0 1-21 8"/><path d="M8 32v-6h6"/>',
  tech: '<rect x="10" y="10" width="20" height="20" rx="2"/><rect x="16" y="16" width="8" height="8"/><path d="M15 4v6M25 4v6M15 30v6M25 30v6M4 15h6M4 25h6M30 15h6M30 25h6"/>',
  data: '<ellipse cx="20" cy="10" rx="12" ry="4"/><path d="M8 10v20a12 4 0 0 0 24 0V10"/><path d="M8 20a12 4 0 0 0 24 0"/>',
  customers: '<path d="M20 33C9 25 5 19 8 13c2.6-5 9-5 12 0 3-5 9.4-5 12 0 3 6-1 12-12 20z"/>',
  model: '<rect x="14" y="5" width="12" height="8" rx="1"/><rect x="4" y="27" width="12" height="8" rx="1"/><rect x="24" y="27" width="12" height="8" rx="1"/><path d="M20 13v7M10 27v-7h20v7"/>',
};
function iconAt(parent: Element, key: string, cx: number, cy: number, size: number) {
  const g = sel("g", { transform: "translate(" + (cx - size / 2) + " " + (cy - size / 2) + ") scale(" + (size / 40) + ")", fill: "none", stroke: "#FFFFFF", "stroke-width": 2.4, "stroke-linecap": "round", "stroke-linejoin": "round" }, parent);
  g.innerHTML = ICONS[key];
  Array.from(g.children).forEach((c) => c.setAttribute("vector-effect", "non-scaling-stroke"));
  return g;
}

/** Builds the beam drawing inside `svg` and returns a function that renders it at time t. */
function buildBeam(svg: SVGSVGElement, onStage: (s: number) => void) {
  const defs = sel("defs", {}, svg);
  defs.innerHTML = '<linearGradient id="bmBeam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE499" stop-opacity=".5"/><stop offset=".8" stop-color="#FFE499" stop-opacity=".1"/><stop offset="1" stop-color="#FFE499" stop-opacity="0"/></linearGradient>' +
    '<radialGradient id="bmSpot"><stop offset="0" stop-color="#FFE499" stop-opacity=".42"/><stop offset=".7" stop-color="#FFE499" stop-opacity=".14"/><stop offset="1" stop-color="#FFE499" stop-opacity="0"/></radialGradient>' +
    '<radialGradient id="bmAll"><stop offset="0" stop-color="#FFE499" stop-opacity=".26"/><stop offset="1" stop-color="#FFE499" stop-opacity="0"/></radialGradient>';
  const allGlow = sel("ellipse", { cx: 420, cy: 330, rx: 430, ry: 240, fill: "url(#bmAll)", opacity: 0 }, svg);
  const cone = sel("polygon", { fill: "url(#bmBeam)" }, svg);
  const spot = sel("ellipse", { fill: "url(#bmSpot)" }, svg);
  const links = sel("g", {}, svg), field = sel("g", {}, svg), over = sel("g", {}, svg);
  const C: [string, string, number, number][] = [["Strategy", "strategy", 130, 230], ["People", "people", 320, 195], ["Processes", "process", 520, 205], ["Technology", "tech", 668, 268], ["Data", "data", 640, 430], ["Customers", "customers", 430, 470], ["Operating model", "model", 210, 430]];
  const ISS = [210, 430];
  const areas = C.map((c) => { const g = sel("g", {}, field); const dots = iconAt(g, c[1], c[2], c[3], 72); stx(g, c[2], c[3] + 64, c[0], "bm-lbl", "middle"); return { g, dots }; });
  const lk = C.map((c, i) => {
    if (i === 6) return null;
    const dx = c[2] - ISS[0], dy = c[3] - ISS[1], dl = Math.hypot(dx, dy), ex = c[2] - dx / dl * 46, ey = c[3] - dy / dl * 46;
    const l = sel("line", { x1: ISS[0], y1: ISS[1], x2: ex, y2: ey, stroke: "#E7AA51", "stroke-width": 1.8, "stroke-opacity": .75, pathLength: 1, "stroke-dasharray": 1, "stroke-dashoffset": 1 }, links);
    const p = sel("circle", { r: 4.5, fill: "#FFE499", opacity: 0 }, links);
    return { l, p, ex, ey };
  });
  const ring = sel("circle", { cx: ISS[0], cy: ISS[1], r: 10, fill: "none", stroke: "#FFE499", "stroke-width": 2, opacity: 0 }, over);
  const iss = sel("circle", { cx: ISS[0], cy: ISS[1], r: 0, fill: "#FFE499" }, over);
  const issLab = stx(over, ISS[0], ISS[1] - 50, "The real issue", "bm-lbl-s", "middle"); issLab.setAttribute("opacity", "0");
  const words = ([["Purpose", 170, 104], ["Principles", 640, 104], ["Aspirations", 110, 148], ["Why it matters now", 720, 148]] as [string, number, number][]).map((w) => { const t = stx(over, w[1], w[2], w[0], "bm-lbl-s", "middle"); t.setAttribute("opacity", "0"); return t; });
  const lan = sel("g", { transform: "translate(420 8) scale(1.25)" }, svg);
  sel("path", { d: "M-9 12 V8 C-9 -5 9 -5 9 8 V12", fill: "none", stroke: "#FFE499", "stroke-width": 2.6, "stroke-linecap": "round" }, lan);
  sel("path", { d: "M-13 12 H13 Q15 12 15 14 L16 42 Q16 44 14 44 H-14 Q-16 44 -16 42 L-15 14 Q-15 12 -13 12 Z", fill: "rgba(255,228,153,.08)", stroke: "#FFFFFF", "stroke-opacity": .8, "stroke-width": 1.8 }, lan);
  sel("path", { d: "M0 19 C6 26 6 33 0 40 C-6 33 -6 26 0 19 Z", fill: "rgba(231,170,81,.35)", stroke: "#E7AA51", "stroke-width": 2 }, lan);
  sel("circle", { cx: 0, cy: 18, r: 2.4, fill: "#FFE499" }, lan);
  sel("rect", { x: -19, y: 44, width: 38, height: 6, rx: 1, fill: "none", stroke: "#FFFFFF", "stroke-width": 2 }, lan);
  sel("path", { d: "M-15 50 L-18 58 M15 50 L18 58", fill: "none", stroke: "#FFFFFF", "stroke-width": 2, "stroke-linecap": "round" }, lan);
  const gg = sel("g", { transform: "translate(868 0)" }, svg);
  stx(gg, 0, 170, "Value", "bm-lbl-s", "middle");
  sel("rect", { x: -8, y: 186, width: 16, height: 300, rx: 8, fill: "rgba(255,255,255,.12)" }, gg);
  const gf = sel("rect", { x: -8, y: 486, width: 16, height: 0, rx: 8, fill: "#E7AA51" }, gg);
  const tick = sel("g", { opacity: 0 }, gg);
  sel("line", { x1: -18, y1: 0, x2: 18, y2: 0, stroke: "#FFE499", "stroke-width": 3 }, tick);
  const tickLab = stx(tick, -24, 5, "Target agreed", "bm-lbl", "end");

  function spotAt(t: number) {
    const W = { x: 420, y: 330, r: 420 }, N = { x: ISS[0], y: ISS[1], r: 50 };
    const u1 = ez(sg(t, 4.7, 6.5)), u2 = ez(sg(t, 9.3, 11));
    const a = { x: lerp(W.x, N.x, u1), y: lerp(W.y, N.y, u1), r: lerp(W.r, N.r, u1) };
    return { x: lerp(a.x, W.x, u2), y: lerp(a.y, W.y, u2), r: lerp(a.r, W.r + 20, u2) };
  }
  const set = (e: Element, k: string, v: number | string) => e.setAttribute(k, String(v));

  return (t: number) => {
    let s = 0; for (let i = 0; i < 5; i++) if (t >= STAGE_AT[i]) s = i;
    onStage(s);
    const sp = spotAt(t);
    set(cone, "points", "413,60 427,60 " + (sp.x + sp.r) + "," + sp.y + " " + (sp.x - sp.r) + "," + sp.y);
    set(spot, "cx", sp.x); set(spot, "cy", sp.y); set(spot, "rx", sp.r); set(spot, "ry", Math.max(30, sp.r * .55));
    const dim = 1 - .78 * ez(sg(t, 4.9, 6.1)) + .78 * ez(sg(t, 9.5, 10.7));
    areas.forEach((a, i) => {
      let op = ez(sg(t, .3 + i * .45, 1 + i * .45)) * (i === 6 ? 1 : dim);
      if (t >= 9.2) op = Math.max(op, ez(sg(t, 9.7 + i * .3, 10.5 + i * .3)));
      set(a.g, "opacity", op);
      set(a.dots, "stroke", mixc("#FFFFFF", "#FFE499", ez(sg(t, 14.2 + i * .5, 15 + i * .5))));
    });
    words.forEach((w, i) => set(w, "opacity", sg(t, .8 + i * .5, 1.4 + i * .5) * (1 - sg(t, 4.2, 4.8))));
    set(iss, "r", 8 * sg(t, 5.9, 6.7));
    const pu = (t * .9) % 1;
    set(ring, "r", 10 + pu * 26); set(ring, "opacity", t > 5.9 && t < 13.8 ? 1 - pu : 0);
    set(issLab, "opacity", sg(t, 6.3, 7) * (1 - sg(t, 9.7, 10.3)));
    lk.forEach((k, i) => {
      if (!k) return;
      set(k.l, "stroke-dashoffset", 1 - ez(sg(t, 9.5 + i * .35, 10.7 + i * .35)));
      const on = t > 13.8 && t < 18.8, u = ((t - 13.8) * .55 + i * .17) % 1;
      set(k.p, "cx", lerp(ISS[0], k.ex, u)); set(k.p, "cy", lerp(ISS[1], k.ey, u)); set(k.p, "opacity", on ? Math.sin(u * Math.PI) : 0);
    });
    set(allGlow, "opacity", ez(sg(t, 18.4, 20)) * (1 - sg(t, 23.7, 24.5)));
    const T1 = .55, T2 = .75, tg = lerp(T1, T2, ez(sg(t, 21.4, 22.4)));
    set(tick, "opacity", sg(t, 1.2, 2));
    set(tick, "transform", "translate(0 " + (486 - tg * 300) + ")");
    tickLab.textContent = t > 21.4 ? "Target raised" : "Target agreed";
    const f = T1 * ez(sg(t, 18.7, 20.9));
    set(gf, "height", f * 300); set(gf, "y", 486 - f * 300);
  };
}

/**
 * Our approach: five stages on a timeline, with a lantern beam that opens wide, narrows onto
 * the real issue, then spreads across the business while value rises to the agreed target.
 */
export default function ApproachBeam() {
  const flowRef = useRef<HTMLUListElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const labRef = useRef<HTMLSpanElement | null>(null);
  const hRef = useRef<HTMLHeadingElement | null>(null);
  const pRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const flow = flowRef.current, stage = stageRef.current, svg = svgRef.current, copy = copyRef.current;
    if (!flow || !stage || !svg || !copy) return;
    const items = Array.from(flow.children) as HTMLLIElement[];
    const btns = items.map((li) => li.querySelector<HTMLButtonElement>(".fl-btn")!);
    let current = -1;

    // Stage classes and copy are driven straight from the animation frame, so React never re-renders here
    function selectFlow(i: number) {
      btns.forEach((btn, idx) => {
        items[idx].classList.toggle("is-active", idx === i);
        btn.setAttribute("aria-expanded", idx === i ? "true" : "false");
        btn.classList.toggle("active", idx === i);
        btn.classList.toggle("reached", idx <= i);
        btn.classList.toggle("fill", idx < i);
      });
      if (current === i) return;
      current = i;
      labRef.current!.textContent = STAGES[i].lab;
      hRef.current!.textContent = STAGES[i].h;
      pRef.current!.textContent = STAGES[i].p;
      copy!.classList.remove("swap"); void copy!.offsetWidth; copy!.classList.add("swap");
    }

    const render = buildBeam(svg, selectFlow);
    const run = createRunner(stage, BM_L, render, 21);
    const offs = btns.map((b, i) => {
      const onClick = () => run.seek(STAGE_AT[i] + .01 + (run.reduce ? 3 : 0));
      const onKey = (e: KeyboardEvent) => {
        let n: number | null = null;
        if (e.key === "ArrowRight") n = Math.min(btns.length - 1, i + 1);
        if (e.key === "ArrowLeft") n = Math.max(0, i - 1);
        if (n !== null) { e.preventDefault(); run.seek(STAGE_AT[n] + .01); btns[n].focus(); }
      };
      b.addEventListener("click", onClick);
      b.addEventListener("keydown", onKey);
      return () => { b.removeEventListener("click", onClick); b.removeEventListener("keydown", onKey); };
    });

    return () => {
      run.destroy();
      offs.forEach((off) => off());
      svg.replaceChildren();
    };
  }, []);

  return (
    <>
      <ul className="flow" ref={flowRef}>
        {STAGES.map((st, i) => (
          <li key={st.v}>
            <button className="fl-btn" type="button" aria-expanded={i === 0}>
              <span className="fl-v">{st.v}</span>
              <span className="fl-s">{st.s}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="beam-stage" ref={stageRef}>
        <div className="beam-copy" aria-live="polite" ref={copyRef}>
          <span className="lab" ref={labRef}></span>
          <h3 ref={hRef}></h3>
          <p ref={pRef}></p>
        </div>
        <div className="beam-fig">
          <svg
            ref={svgRef}
            viewBox="0 0 900 600"
            role="img"
            aria-label="A lantern lights seven areas of a business: strategy, people, processes, technology, data, customers and operating model. The light opens wide, narrows onto the real issue, then spreads across every area while value rises to the agreed target."
          ></svg>
        </div>
      </div>
    </>
  );
}
