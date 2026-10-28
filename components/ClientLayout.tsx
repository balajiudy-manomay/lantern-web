"use client";

import { useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Footer from "./Footer";

function LayoutContent({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main className="min-h-dvh flex flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Intersection Observer to handle reveal logic dynamically on route change
  useEffect(() => {
    const initObserver = () => {
      if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              obs.unobserve(e.target);
            }
          });
        }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

        document.querySelectorAll('.reveal').forEach((el) => {
          // Reset class first for SPA navigation
          el.classList.remove('in');
          // Small timeout to allow DOM to render before observing
          setTimeout(() => obs.observe(el), 50);
        });
      } else {
        document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
      }
    };

    // Use a small timeout to let the DOM fully update on route transition
    const timer = setTimeout(() => {
      initObserver();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <LayoutContent>
      {children}
    </LayoutContent>
  );
}

