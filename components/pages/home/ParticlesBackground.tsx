"use client";

import { useEffect, useId } from "react";

type ParticlesJS = (tagId: string, config: Record<string, unknown>) => void;
type PJSDomEntry = { pJS: { fn: { vendors: { destroypJS: () => void } } } };

declare global {
  interface Window {
    particlesJS?: ParticlesJS;
    pJSDom?: PJSDomEntry[];
  }
}

const PARTICLES_CONFIG = {
  particles: {
    number: {
      value: 55,
      density: { enable: true, value_area: 900 },
    },
    color: { value: "#c9922f" },
    shape: { type: "circle" },
    opacity: {
      value: 0.75,
      random: true,
      anim: { enable: true, speed: 0.6, opacity_min: 0.35, sync: false },
    },
    size: {
      value: 3.5,
      random: true,
      anim: { enable: false },
    },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#c9922f",
      opacity: 0.45,
      width: 1.2,
    },
    move: {
      enable: true,
      speed: 1.3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 160, line_linked: { opacity: 0.5 } },
      push: { particles_nb: 3 },
    },
  },
  retina_detect: true,
};

export default function ParticlesBackground() {
  const containerId = `hero-particles-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  useEffect(() => {
    let cancelled = false;

    import("particles.js").then(() => {
      if (cancelled || !window.particlesJS) return;
      window.particlesJS(containerId, PARTICLES_CONFIG);
    });

    return () => {
      cancelled = true;
      window.pJSDom?.forEach(entry => entry.pJS.fn.vendors.destroypJS());
      window.pJSDom = [];
    };
  }, [containerId]);

  return <div id={containerId} className="particles-bg" aria-hidden="true" />;
}
