"use client";

import { useState, type ReactNode } from "react";

type Part = "handle" | "flame" | "glass" | "fuel" | "frame";

const CARDS: { part: Part; title: string; p: string; icon: ReactNode }[] = [
  { part: "handle", title: "Handle. Human Wisdom", p: "Intuition, experience and judgement that set the direction and carry the lantern forward.", icon: <path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V11M11 10V4.5a1.5 1.5 0 0 1 3 0V11M14 10.5V6a1.5 1.5 0 0 1 3 0v7.5c0 4-2.5 6.5-6 6.5-2.6 0-4.2-1.3-5.4-3.4L4 13.6a1.4 1.4 0 0 1 2.4-1.4L8 14.5" /> },
  { part: "flame", title: "Flame. AI Intelligence", p: "Transforms data into insight. Learns, reasons and generates the light that guides decisions.", icon: <path d="M12 4c2.6 3.4 4 6 4 8.6A4 4 0 0 1 12 17a4 4 0 0 1-4-4.4C8 10 9.4 7.4 12 4Z" /> },
  { part: "glass", title: "Glass. Governance", p: "Protects the flame. Ensures trust, security, compliance and ethical use.", icon: <path d="M12 3 5 6v5.5c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5V6Z" /> },
  { part: "fuel", title: "Fuel. Data Intelligence", p: "Raw signals and information that power insight, relevance and context.", icon: <><circle cx="12" cy="12" r="8.5" /><path d="M12 8v8M8 12h8" /></> },
  { part: "frame", title: "Frame. Automation Engine", p: "The structure that enables scale, integration and seamless execution.", icon: <><rect x="3.5" y="7" width="17" height="10" rx="2" /><path d="M7 12h3M14 12h3" /></> },
];

/** The labelled lantern and its five pillar cards; hovering or focusing a card (or hovering a part) lights that part and dims the rest. */
export default function LanternAnatomy() {
  const [on, setOn] = useState<Part | null>(null);
  const part = (p: Part) => ({
    className: `part${on === p ? " on" : ""}`,
    "data-part": p,
    onMouseEnter: () => setOn(p),
    onMouseLeave: () => setOn(null),
  });

  return (
    <div className="an-stage">
      <svg className={`lantern${on ? " has-on" : ""}`} viewBox="0 30 470 460" role="img" aria-label="A lantern with five labelled parts: the handle is human wisdom, the flame is AI intelligence, the glass is governance, the fuel is data intelligence and the frame is the automation engine.">
        <defs>
          <radialGradient id="anGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#FFE499" stopOpacity=".45" />
            <stop offset=".5" stopColor="#FFE499" stopOpacity=".12" />
            <stop offset="1" stopColor="#FFE499" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse className="an-glow" cx="230" cy="250" rx="150" ry="190" fill="url(#anGlow)" aria-hidden="true" />

        <g {...part("glass")}>
          <path d="M166 112 H294 Q300 112 300 120 L306 382 Q306 392 296 392 H164 Q154 392 154 382 L160 120 Q160 112 166 112 Z" fill="rgba(255,228,153,.06)" stroke="#FFFFFF" strokeOpacity=".55" strokeWidth="2.2" />
          <text className="an-lab" x="44" y="270">GLASS</text><text className="an-sub" x="44" y="292">Governance</text>
        </g>
        <g {...part("handle")}>
          <path d="M184 112 V92 C184 48 276 48 276 92 V112" fill="none" stroke="#FFE499" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <text className="an-lab" x="336" y="74">HANDLE</text><text className="an-sub" x="336" y="96">Human Wisdom</text>
        </g>
        <g {...part("flame")}>
          <ellipse className="an-fglow" cx="230" cy="236" rx="46" ry="92" fill="url(#anGlow)" />
          <path className="an-flame" d="M230 156 C260 204 260 272 230 324 C200 272 200 204 230 156 Z" fill="none" stroke="#E7AA51" strokeWidth="3.5" strokeLinejoin="round" />
          <circle cx="230" cy="150" r="7" fill="#FFE499" />
          <text className="an-lab" x="336" y="238">FLAME</text><text className="an-sub" x="336" y="260">AI Intelligence</text>
        </g>
        <g {...part("fuel")}>
          <ellipse cx="230" cy="356" rx="46" ry="15" fill="rgba(229,201,113,.1)" stroke="#E5C971" strokeWidth="2.2" />
          <text className="an-lab" x="44" y="366">FUEL</text><text className="an-sub" x="44" y="388">Data Intelligence</text>
        </g>
        <g {...part("frame")}>
          <rect x="142" y="392" width="176" height="30" rx="3" fill="none" stroke="#FFFFFF" strokeWidth="4" />
          <rect x="152" y="422" width="156" height="20" fill="none" stroke="#FFFFFF" strokeWidth="2.6" />
          <path d="M158 442 L146 474 M302 442 L314 474" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" />
          <text className="an-lab" x="336" y="432">FRAME</text><text className="an-sub" x="336" y="454">Automation Engine</text>
        </g>
      </svg>

      <div className="an-cards">
        {CARDS.map((c) => (
          <article
            key={c.part}
            className={`an-card${on === c.part ? " on" : ""}`}
            data-part={c.part}
            tabIndex={0}
            onMouseEnter={() => setOn(c.part)}
            onMouseLeave={() => setOn(null)}
            onFocus={() => setOn(c.part)}
            onBlur={() => setOn(null)}
          >
            <svg className="an-ico" viewBox="0 0 24 24" aria-hidden="true">{c.icon}</svg>
            <div><h3>{c.title}</h3><p>{c.p}</p></div>
          </article>
        ))}
      </div>
    </div>
  );
}
