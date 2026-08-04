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
            <span className="qcta" onClick={() => openModal(q.serviceData)}>
              {q.ctaText}
            </span>
          </blockquote>
        ))}
      </div>
      <div className="hdots" id="hd">
        {quotes.map((_, i) => (
          <div
            key={i}
            className={`hdot ${i === cur ? "active" : ""}`}
            onClick={() => setCur(i)}
          ></div>
        ))}
      </div>
    </>
  );
}
