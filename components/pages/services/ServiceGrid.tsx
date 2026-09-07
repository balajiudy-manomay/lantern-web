"use client";

import { useModal } from "../../ModalContext";
import { servicesData } from "../../../app/data";
import { serviceIcons } from "../../icons/service-icons";

export default function ServiceGrid() {
  const { openModal } = useModal();

  const handleSpotlight = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="sv-grid" id="sg">
      {servicesData.map((s, i) => {
        const Icon = serviceIcons[s.n];
        return (
          <article
            key={i}
            className="sv-card"
            role="button"
            tabIndex={0}
            aria-label={`View details: ${s.c}`}
            onClick={() => openModal(s)}
            onMouseMove={handleSpotlight}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal(s);
              }
            }}
          >
            <h3 className="sv-cat">
              <span className="sv-num-circle">{s.n}</span>
              {s.c}
            </h3>
            <div className="sv-q">&ldquo;{s.q}&rdquo;</div>
            <div className="sv-desc">{s.desc}</div>
            <span className="sv-lnk">{s.cta}</span>
          </article>
        );
      })}
    </div>
  );
}
