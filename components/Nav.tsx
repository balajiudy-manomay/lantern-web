"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import brandLight from "../public/images/brand-mark-light.png";
import brandDark from "../public/images/brand-mark-dark.png";
import "./nav.css";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/why-lantern", label: "Why Lantern" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/pulse", label: "Market Pulse" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
];

export const THEME_KEY = "lantern-theme";

export default function Nav() {
  const pathname = usePathname();
  const progRef = useRef<HTMLElement | null>(null);
  const [dark, setDark] = useState(false);

  // Scroll progress along the bottom edge of the header
  useEffect(() => {
    function updateProgress() {
      const d = document.documentElement;
      const max = Math.max(1, d.scrollHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, (window.pageYOffset || d.scrollTop) / max));
      if (progRef.current) progRef.current.style.transform = "scaleX(" + p.toFixed(4) + ")";
    }
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [pathname]);

  // The theme is set before paint by the script in app/layout.tsx; follow the system until the visitor picks one
  useEffect(() => {
    const root = document.documentElement;
    setDark(root.getAttribute("data-theme") === "dark");
    let mq: MediaQueryList | null = null;
    function onSystem(e: MediaQueryListEvent) {
      let saved = null;
      try { saved = localStorage.getItem(THEME_KEY); } catch {}
      if (!saved) { root.setAttribute("data-theme", e.matches ? "dark" : "light"); setDark(e.matches); }
    }
    try { mq = matchMedia("(prefers-color-scheme: dark)"); mq.addEventListener("change", onSystem); } catch {}
    return () => mq?.removeEventListener("change", onSystem);
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.classList.add("theming");
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(THEME_KEY, next); } catch {}
    setTimeout(() => root.classList.remove("theming"), 450);
    setDark(next === "dark");
  }

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));

  return (
    <header className="nav v4-nav" id="nav">
      <div className="nav-bar"><i ref={progRef}></i></div>
      <div className="wrap nav-in">
        <Link className="brand" href="/" aria-label="Lantern, home">
          {/* Plain <img>, as in the HTML: the light and dark marks swap via CSS on data-theme */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-mark light" src={brandLight.src} alt="Lantern" width={236} height={48} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-mark darkv" src={brandDark.src} alt="" aria-hidden="true" width={236} height={48} />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : undefined} aria-current={isActive(l.href) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="theme-tg"
          type="button"
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={dark}
          title="Light or dark"
        >
          <svg className="moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" /></svg>
          <svg className="sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
        </button>
        <Link className="btn btn-gold btn-sm" href="/contact">Cocreate</Link>
      </div>
    </header>
  );
}
