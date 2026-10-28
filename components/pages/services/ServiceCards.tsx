"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "../../icons/v4-icons";
import { SERVICES, type Service } from "./services-data";

/** The nine service cards; each opens a pop-up with the problem, how Lantern helps and key outcomes. */
export default function ServiceCards() {
  const [svc, setSvc] = useState<Service | null>(null);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const lastBtn = useRef<HTMLButtonElement | null>(null);

  function openSvc(s: Service, btn: HTMLButtonElement) {
    lastBtn.current = btn;
    setSvc(s);
    setOpen(true);
  }

  function closeSvc(restoreFocus = true) {
    setOpen(false);
    if (restoreFocus && lastBtn.current) {
      try { lastBtn.current.focus({ preventScroll: true }); } catch {}
    }
  }

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (panel) panel.scrollTop = 0;
    document.body.classList.add("lock");
    const t = setTimeout(() => panel?.focus({ preventScroll: true }), 30);

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") { e.preventDefault(); closeSvc(); return; }
      if (e.key === "Tab" && panel) {
        const f = Array.from(panel.querySelectorAll<HTMLElement>("button, a[href]")).filter((x) => x.offsetParent !== null);
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && (document.activeElement === first || document.activeElement === panel)) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("lock");
    };
  }, [open]);

  return (
    <>
      <div className="svc-cards">
        {SERVICES.map((s) => (
          <button key={s.n} className="svc-card" type="button" aria-haspopup="dialog" onClick={(e) => openSvc(s, e.currentTarget)}>
            <span className="sc-head">
              <span className="sc-no" aria-hidden="true"><Icon id={s.icon} /></span>
              <span className="sc-cat">{s.name}</span>
            </span>
            <span className="sc-q">{s.q}</span>
            <span className="sc-d">{s.d}</span>
            <span className="sc-go">{s.go}</span>
          </button>
        ))}
      </div>

      <div
        className={`modal${open ? " open" : ""}`}
        aria-hidden={!open}
        onMouseDown={(e) => { if (e.target === e.currentTarget) closeSvc(); }}
      >
        <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="mQ" tabIndex={-1} ref={panelRef}>
          <button className="m-x" type="button" aria-label="Close" onClick={() => closeSvc()}>&times;</button>
          {svc && (
            <>
              <div className="m-top">
                <Icon id={svc.icon} />
                <p className="m-q" id="mQ">{svc.q.charAt(0) === "“" ? svc.q : `“${svc.q}”`}</p>
              </div>
              <h3 className="m-lab">The Problem</h3>
              <p className="m-p">{svc.prob}</p>
              <h3 className="m-lab">How Lantern Helps</h3>
              <p className="m-p">{svc.how}</p>
              <h3 className="m-lab">Key Outcomes</h3>
              <ul className="m-outs">
                {svc.outs.map((o) => <li key={o}>{o}</li>)}
              </ul>
              <div className="m-cta">
                <Link className="btn btn-navy" href="/contact" onClick={() => closeSvc(false)}>Start a conversation</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
