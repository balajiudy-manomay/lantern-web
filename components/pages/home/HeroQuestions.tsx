"use client";

import { useEffect, useState } from "react";

const QUESTIONS = [
  "Still running your business on spreadsheets and email threads?",
  "AI is everywhere. But which AI investments will truly drive revenue, reduce costs, and improve your bottom line?",
  "Too many people doing the same thing manually, every single day?",
  "Quality depends on who is doing the work, not how the work is designed?",
  "You are using AI but do not fully trust the output?",
  "You have been transforming for years but operations still feel the same?",
  "You want to focus on growth but operations keep pulling you back?",
  "The vendor delivered the system. Who is delivering the outcomes?",
  "The best system in the market creates real value ONLY when your people adopt it and embrace new ways of working",
];

/** Rotating question in the hero: only the question changes. */
export default function HeroQuestions() {
  const [idx, setIdx] = useState(0);
  const [hold, setHold] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(!!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches));
  }, []);

  useEffect(() => {
    if (reduce || hold || paused) return;
    const timer = setInterval(() => {
      if (!document.hidden) setIdx((i) => (i + 1) % QUESTIONS.length);
    }, 6200);
    return () => clearInterval(timer);
  }, [reduce, hold, paused]);

  return (
    <div
      className="hero-q"
      role="region"
      aria-roledescription="carousel"
      aria-label="Questions we hear from leaders"
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
    >
      <div className="hq-stack">
        {QUESTIONS.map((q, i) => (
          <div
            key={i}
            className={`hq${i === idx ? " on" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${QUESTIONS.length}`}
            aria-hidden={i === idx ? undefined : true}
          >
            <p className="hq-text">&ldquo;{q}&rdquo;</p>
          </div>
        ))}
      </div>
      <div className="hq-dots">
        {QUESTIONS.map((_, i) => (
          <button
            key={i}
            className="hq-dot"
            type="button"
            aria-label={`Show question ${i + 1}`}
            aria-current={i === idx ? "true" : undefined}
            onClick={() => setIdx(i)}
          >
            <i></i>
          </button>
        ))}
        {!reduce && (
          <button
            className="hq-pause"
            type="button"
            aria-pressed={paused}
            aria-label={paused ? "Play the rotating questions" : "Pause the rotating questions"}
            onClick={() => setPaused((p) => !p)}
          >
            <i aria-hidden="true"></i>
          </button>
        )}
      </div>
    </div>
  );
}
