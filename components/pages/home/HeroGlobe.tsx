"use client";

import { useEffect, useRef } from "react";
import { GLOBE_LAND } from "./globe-land";

type Vec = [number, number, number];

const D2R = Math.PI / 180;
const INTRO = 4.6;

function vec(lat: number, lon: number): Vec {
  lat *= D2R; lon *= D2R;
  return [Math.cos(lat) * Math.sin(lon), Math.sin(lat), Math.cos(lat) * Math.cos(lon)];
}
function rot(v: Vec, yaw: number, tilt: number): Vec {
  const cy = Math.cos(yaw), sy = Math.sin(yaw), x = v[0] * cy - v[2] * sy, z = v[0] * sy + v[2] * cy, y = v[1], ct = Math.cos(tilt), st = Math.sin(tilt);
  return [x, y * ct - z * st, y * st + z * ct];
}
function slerp(a: Vec, b: Vec, u: number): Vec {
  const d = a[0] * b[0] + a[1] * b[1] + a[2] * b[2], w = Math.acos(Math.max(-1, Math.min(1, d))), sn = Math.sin(w);
  if (sn < 1e-6) return a;
  const p = Math.sin((1 - u) * w) / sn, q = Math.sin(u * w) / sn;
  return [a[0] * p + b[0] * q, a[1] * p + b[1] * q, a[2] * p + b[2] * q];
}
function cl(x: number) { return x < 0 ? 0 : x > 1 ? 1 : x; }
function ez(x: number) { x = cl(x); return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }

// Arcs of light from Hyderabad: three to the Caribbean (Kingston, Port of Spain, Bridgetown), the rest spread across the world
const HUB = vec(17.4, 78.5);
const DEST = [[1.35, 103.8, 0], [35.7, 139.7, 0], [-33.9, 151.2, 0], [25.2, 55.3, 0], [-1.3, 36.8, 0], [55.75, 37.6, 0], [-33.9, 18.4, 0], [51.5, -0.1, 0], [6.5, 3.4, 0], [40.7, -74, 0], [-23.5, -46.6, 0], [19.4, -99.1, 0], [49.3, -123.1, 0],
  [18.0, -76.8, 1], [10.65, -61.5, 1], [13.1, -59.6, 1]].map((d) => ({ v: vec(d[0], d[1]), car: !!d[2] }));

/**
 * Globe intro (under 5 seconds), then the globe drifts into the background of the hero.
 * The hero section renders with `intro`; adding `ready` fades its content in as the globe settles.
 */
export default function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const hero = cv?.parentElement;
    const g = cv?.getContext("2d");
    if (!cv || !hero || !g) return;

    const reduce = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const LAND: Vec[] = [], SCAT: Vec[] = [];
    for (let i = 0; i < GLOBE_LAND.length; i += 2) {
      if (GLOBE_LAND[i] > 76) continue;
      const la = GLOBE_LAND[i] * D2R, lo = GLOBE_LAND[i + 1] * D2R;
      LAND.push([Math.cos(la) * Math.sin(lo), Math.sin(la), Math.cos(la) * Math.cos(lo)]);
      const an = Math.random() * Math.PI * 2, rr = 1.6 + Math.random() * 1.6;
      SCAT.push([Math.cos(an) * rr, Math.sin(an) * rr, Math.random() * .5]);
    }

    let W = 0, H = 0, dpr = 1;
    let t0: number | null = null, run = false, vis = true, alive = true;

    function size() {
      const r = hero!.getBoundingClientRect();
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = Math.max(1, r.width); H = Math.max(1, r.height);
      cv!.width = W * dpr; cv!.height = H * dpr;
      g!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function glow(x: number, y: number, r: number, a: number) {
      const gr = g!.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, "rgba(255,228,153," + a + ")"); gr.addColorStop(1, "rgba(255,228,153,0)");
      g!.fillStyle = gr; g!.beginPath(); g!.arc(x, y, r, 0, 6.2832); g!.fill();
    }
    function draw(t: number) {
      g!.clearRect(0, 0, W, H);
      const mob = W < 700;
      const R0 = Math.min(W, Math.min(H, (window.innerHeight || H) - 74)) * (mob ? .34 : .36), R1 = Math.max(W * (mob ? .62 : .42), H * .55);
      const mv = ez((t - 3.7) / .9); // move to background 3.7s to 4.6s
      const form = ez(t / 1.3), solid = ez((t - .9) / .8);
      const VH = Math.min(H, (window.innerHeight || H) - 74), R = R0 + (R1 - R0) * mv, cx = W / 2, cy = VH * (.5 + .16 * mv), alpha = 1 - .62 * mv;
      const lonC = t <= INTRO ? 72 - 80 * ez(t / INTRO) : -8 + 34 * (1 - Math.cos((t - INTRO) * 2 * Math.PI / 48)), yaw = lonC * D2R, tilt = 16 * D2R;
      g!.globalAlpha = alpha;
      glow(cx, cy, R * 1.45, .12 * solid);
      const gr = g!.createRadialGradient(cx - R * .35, cy - R * .4, R * .1, cx, cy, R);
      gr.addColorStop(0, "rgba(255,255,255," + (.07 * solid) + ")"); gr.addColorStop(1, "rgba(255,255,255,0)");
      g!.fillStyle = "rgba(14,47,88," + solid + ")"; g!.beginPath(); g!.arc(cx, cy, R, 0, 6.2832); g!.fill();
      g!.fillStyle = gr; g!.beginPath(); g!.arc(cx, cy, R, 0, 6.2832); g!.fill();
      g!.strokeStyle = "rgba(255,228,153," + (.3 * solid) + ")"; g!.lineWidth = 1.2; g!.stroke();
      const ds = Math.max(2, R / 105);
      for (let i = 0; i < LAND.length; i++) {
        const p = rot(LAND[i], yaw, tilt);
        const sc = SCAT[i];
        const u = ez(cl((form - sc[2]) / (1 - sc[2])));
        if (p[2] <= 0 && u > .98) continue;
        const tx = cx + p[0] * R, ty = cy - p[1] * R, sx = cx + sc[0] * R, sy = cy + sc[1] * R;
        const x = sx + (tx - sx) * u, y = sy + (ty - sy) * u;
        const a = p[2] > 0 ? (.25 + .75 * p[2]) : .15 * (1 - u);
        g!.fillStyle = "rgba(255,228,153," + (a * Math.max(.25, u)).toFixed(3) + ")";
        const s = ds * (.55 + .45 * Math.max(0, p[2]));
        g!.fillRect(x - s / 2, y - s / 2, s, s);
      }
      const hp = rot(HUB, yaw, tilt), hx = cx + hp[0] * R, hy = cy - hp[1] * R;
      DEST.forEach((d, k) => {
        const st = t <= INTRO ? 1.75 + k * .11 : INTRO + ((k * .45) % 6), dur = .9;
        const loopT = t <= INTRO ? t : INTRO + ((t - INTRO) % 7.5);
        const grow = cl((loopT - st) / dur); if (grow <= 0) return;
        const fade = t <= INTRO ? 1 : cl(1 - (loopT - st - 3.2) / 1.6);
        const ang = Math.acos(Math.max(-1, Math.min(1, HUB[0] * d.v[0] + HUB[1] * d.v[1] + HUB[2] * d.v[2]))), h = .085 * ang, N = 56;
        let prev: [number, number, boolean] | null = null, last: [number, number] | null = null;
        g!.lineWidth = d.car ? 2.2 : 1.5; g!.lineCap = "round";
        for (let j = 0; j <= N * ez(grow); j++) {
          const w = j / N, v = slerp(HUB, d.v, w), lift = 1 + h * Math.sin(Math.PI * w), q = rot(v, yaw, tilt);
          const x = cx + q[0] * R * lift, y = cy - q[1] * R * lift, ok = q[2] > 0 || Math.hypot(q[0] * lift, q[1] * lift) > 1;
          if (prev && ok && prev[2]) { g!.strokeStyle = "rgba(255,228,153," + ((d.car ? .95 : .6) * fade) + ")"; g!.beginPath(); g!.moveTo(prev[0], prev[1]); g!.lineTo(x, y); g!.stroke(); }
          prev = [x, y, ok]; last = ok ? [x, y] : null;
        }
        if (last && grow < 1) glow(last[0], last[1], 10, .9 * fade);
        if (grow >= 1 && last) {
          const pu = ((t * .8) + k * .3) % 1;
          g!.fillStyle = "rgba(255,228,153," + fade + ")"; g!.beginPath(); g!.arc(last[0], last[1], d.car ? 3.6 : 2.6, 0, 6.2832); g!.fill();
          if (d.car) { g!.strokeStyle = "rgba(255,228,153," + ((1 - pu) * .8 * fade) + ")"; g!.lineWidth = 1.4; g!.beginPath(); g!.arc(last[0], last[1], 4 + pu * 14, 0, 6.2832); g!.stroke(); }
        }
      });
      if (hp[2] > 0 && solid > 0) {
        const pu2 = (t * .7) % 1;
        glow(hx, hy, 30, .6 * solid);
        g!.strokeStyle = "rgba(255,228,153," + (1 - pu2) * solid + ")"; g!.lineWidth = 2; g!.beginPath(); g!.arc(hx, hy, 6 + pu2 * 24, 0, 6.2832); g!.stroke();
        g!.fillStyle = "#FFE499"; g!.beginPath(); g!.arc(hx, hy, 5, 0, 6.2832); g!.fill();
      }
      g!.globalAlpha = 1;
      if (t >= 3.9 && !hero!.classList.contains("ready")) hero!.classList.add("ready");
    }
    function frame(now: number) {
      if (!run || !alive) return;
      if (t0 === null) t0 = now;
      draw((now - t0) / 1000);
      requestAnimationFrame(frame);
    }
    function go() {
      const want = vis && !document.hidden && !reduce;
      if (want && !run) { run = true; requestAnimationFrame(frame); } else if (!want) run = false;
    }
    function onResize() { size(); if (!run) draw(INTRO + 2); }

    size();
    if (reduce) { hero.classList.add("ready"); draw(INTRO + 2); }
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", go);
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((en) => { vis = en[0].isIntersecting; go(); });
      io.observe(hero);
    }
    go();

    return () => {
      alive = false; run = false;
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", go);
      io?.disconnect();
      hero.classList.remove("ready");
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" />;
}
