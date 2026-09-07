"use client";

import { useState, useEffect } from "react";
import { useModal } from "../../ModalContext";

export interface HeroQuote {
  text: string;
  ctaText: string;
  serviceData: any;
}

interface HeroCarouselProps {
  quotes: HeroQuote[];
}

export default function HeroCarousel({ quotes }: HeroCarouselProps) {
  const [cur, setCur] = useState(0);
  const { openModal } = useModal();

  useEffect(() => {
    const ap = setInterval(() => {
      setCur((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(ap);
  }, [quotes.length]);

  return (
    <>
      <div className="qc" id="qc">
        {quotes.map((q, i) => (
          <blockquote key={i} className={`qs ${i === cur ? "active" : ""}`}>
            <p className="qt">&ldquo;{q.text}&rdquo;</p>
            <button type="button" className="qcta" onClick={() => openModal(q.serviceData)}>
              {q.ctaText}
            </button>
          </blockquote>
        ))}
      </div>
      <div className="hdots" id="hd">
        {quotes.map((_, i) => (
          <button
            type="button"
            key={i}
            className={`hdot ${i === cur ? "active" : ""}`}
            onClick={() => setCur(i)}
            aria-label={`Show quote ${i + 1} of ${quotes.length}`}
            aria-current={i === cur ? "true" : undefined}
          ></button>
        ))}
      </div>
    </>
  );
}
