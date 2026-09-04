"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const DURATION_MS = 1400;

function parseFigure(figure: string) {
  const match = figure.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix, suffix, decimals, target: parseFloat(numStr) };
}

function format(prefix: string, value: number, decimals: number, suffix: string) {
  return `${prefix}${value.toFixed(decimals)}${suffix}`;
}

export default function AnimatedStat({
  figure,
  className,
}: {
  figure: string;
  className?: string;
}) {
  const parsed = useMemo(() => parseFigure(figure), [figure]);
  const [display, setDisplay] = useState(
    parsed ? format(parsed.prefix, 0, parsed.decimals, parsed.suffix) : figure
  );
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!parsed) return;
    const el = ref.current;
    if (!el) return;

    let cancelled = false;
    let triggered = false;
    let rafId: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered) {
            triggered = true;
            const start = performance.now();
            const tick = (now: number) => {
              if (cancelled) return;
              const progress = Math.min((now - start) / DURATION_MS, 1);
              if (progress >= 1) {
                setDisplay(format(parsed.prefix, parsed.target, parsed.decimals, parsed.suffix));
                return;
              }
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(format(parsed.prefix, parsed.target * eased, parsed.decimals, parsed.suffix));
              rafId = requestAnimationFrame(tick);
            };
            rafId = requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      cancelled = true;
      observer.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [parsed]);

  return (
    <div ref={ref} className={className}>
      {display}
    </div>
  );
}
