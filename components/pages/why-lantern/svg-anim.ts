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
 * Plays a timeline from 0 to `end` seconds as the page scrolls.
 * Where `pin` fits on screen (allowing `slack` px to tuck under the header) it stays stuck while the
 * visitor scrolls through `track`, which is given `scrollVh` viewport heights of extra length.
 * Otherwise the timeline plays as `follow` (default `pin`) moves up through the viewport. With reduced motion it shows
 * the frame at `still`.
 */
export function createScrollScrub(opts: {
  track: HTMLElement;
  pin: HTMLElement;
  end: number;
  still: number;
  render: (t: number) => void;
  follow?: Element;
  scrollVh?: number;
  slack?: () => number;
}) {
  const { track, pin, end, still, render } = opts;
  const scrollVh = opts.scrollVh ?? 2.4;
  const reduce = prefersReducedMotion();
  let pinned = false, stickyTop = 0, scrollLen = 0, raf = 0;

  function layout() {
    const vh = window.innerHeight;
    const navH = document.getElementById("nav")?.offsetHeight ?? 72;
    // Measure in the pinned layout (which may be more compact), with transitions paused
    track.classList.add("pinned", "measuring");
    const pinH = pin.offsetHeight, room = vh - navH;
    track.classList.remove("measuring");
    pinned = !reduce && pinH - (opts.slack?.() ?? 0) <= room - 16;
    if (pinned) {
      stickyTop = Math.min(navH + Math.max(16, (room - pinH) / 2), vh - pinH - 16);
      scrollLen = Math.round(vh * scrollVh);
      pin.style.top = stickyTop + "px";
      track.style.height = pinH + scrollLen + "px";
    } else {
      pin.style.top = "";
      track.style.height = "";
    }
    track.classList.toggle("pinned", pinned);
  }
  // Not pinned: start as `follow` comes up into view, finish once its middle reaches the top third
  function flowRange() {
    const vh = window.innerHeight, r = (opts.follow ?? pin).getBoundingClientRect();
    return { top: r.top, start: vh * .85, end: vh * .3 - r.height * .5 };
  }
  function progress() {
    if (pinned) return cl01((stickyTop - track.getBoundingClientRect().top) / scrollLen);
    const f = flowRange();
    return cl01((f.start - f.top) / (f.start - f.end));
  }
  function update() { raf = 0; render(reduce ? still : progress() * end); }
  function onScroll() { if (!raf) raf = requestAnimationFrame(update); }
  function onResize() { layout(); update(); }

  layout();
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  // Re-measure when the block's width changes (fonts loading, the window or pane resizing), but not for the
  // small height changes as copy swaps while scrolling, which would make the pinned block jump
  let lastW = pin.offsetWidth;
  const ro = "ResizeObserver" in window ? new ResizeObserver(() => {
    if (pin.offsetWidth === lastW && pinned) return;
    lastW = pin.offsetWidth;
    onResize();
  }) : null;
  ro?.observe(pin);

  return {
    reduce,
    /** Scrolls to the point where the timeline reaches `t` (or renders it directly with reduced motion). */
    seek(t: number) {
      if (reduce) { render(t); return; }
      let y: number;
      if (pinned) y = window.scrollY + track.getBoundingClientRect().top - stickyTop + (t / end) * scrollLen;
      else { const f = flowRange(); y = window.scrollY + f.top - (f.start - (t / end) * (f.start - f.end)); }
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    },
    destroy() {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
      track.style.height = "";
      pin.style.top = "";
    },
  };
}
