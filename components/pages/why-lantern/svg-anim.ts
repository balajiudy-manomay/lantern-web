// Small helpers shared by the Why Lantern SVG animations (ported from Lantern_Website_V4_Final.html).

const NS = "http://www.w3.org/2000/svg";

export function sel<K extends keyof SVGElementTagNameMap>(tag: K, a: Record<string, string | number>, p?: Element): SVGElementTagNameMap[K] {
  const e = document.createElementNS(NS, tag);
  for (const k in a) e.setAttribute(k, String(a[k]));
  if (p) p.appendChild(e);
  return e;
}
export function stx(p: Element, x: number, y: number, s: string, cls: string, anchor?: string) {
  const t = sel("text", { x, y, class: cls, "text-anchor": anchor || "start" }, p);
  t.textContent = s;
  return t;
}
export function cl01(x: number) { return x < 0 ? 0 : x > 1 ? 1 : x; }
export function sg(t: number, a: number, b: number) { return cl01((t - a) / (b - a)); }
export function ez(x: number) { x = cl01(x); return x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; }
export function lerp(a: number, b: number, u: number) { return a + (b - a) * u; }
export function mixc(c1: string, c2: string, u: number) {
  const a = [1, 3, 5].map((i) => parseInt(c1.substr(i, 2), 16)), b = [1, 3, 5].map((i) => parseInt(c2.substr(i, 2), 16));
  return "rgb(" + a.map((v, i) => Math.round(lerp(v, b[i], u))).join(",") + ")";
}
export function prefersReducedMotion() {
  return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
}

/**
 * Plays a looping timeline of length `L` seconds, only while `root` is on screen,
 * holding while the pointer is over it. With reduced motion it shows the frame at `still`.
 */
export function createRunner(root: Element, L: number, render: (t: number) => void, still: number) {
  const reduce = prefersReducedMotion();
  let t = 0, last = 0, visible = false, held = false, raf = 0, alive = true;
  function frame(now: number) {
    raf = 0;
    if (!visible || !alive) return;
    if (!held && !reduce) t = (t + Math.min(.05, (now - (last || now)) / 1000)) % L;
    last = now; render(t);
    if (!reduce) raf = requestAnimationFrame(frame);
  }
  function wake() { if (!raf && alive) { last = 0; raf = requestAnimationFrame(frame); } }
  let io: IntersectionObserver | null = null;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver((en) => en.forEach((e) => { visible = e.isIntersecting; if (visible) wake(); }), { threshold: 0.2 });
    io.observe(root);
  } else {
    visible = true;
  }
  const onEnter = () => { held = true; };
  const onLeave = () => { held = false; };
  root.addEventListener("mouseenter", onEnter);
  root.addEventListener("mouseleave", onLeave);
  if (reduce) t = still;
  render(t);
  return {
    reduce,
    seek(s: number) { t = s; render(t); wake(); },
    destroy() {
      alive = false;
      if (raf) cancelAnimationFrame(raf);
      io?.disconnect();
      root.removeEventListener("mouseenter", onEnter);
      root.removeEventListener("mouseleave", onLeave);
    },
  };
}
