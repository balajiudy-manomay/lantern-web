"use client";

import { useState, useEffect, ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { ModalProvider, useModal } from "./ModalContext";
import { useRouter } from "next/navigation";

function ModalOverlay() {
  const { modalData, closeModal } = useModal();
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  if (!modalData) return null;

  return (
    <div className="mo active" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
      <div className="md">
        <button className="md-x" onClick={closeModal}>&times;</button>
        <div id="mb">
          <p className="md-q">&ldquo;{modalData.q}&rdquo;</p>
          <h3>The Problem</h3><p>{modalData.prob}</p>
          <h3>How Lantern Helps</h3><p>{modalData.app}</p>
          <h3>Key Outcomes</h3>
          <ul>
            {modalData.out?.map((o: string, idx: number) => (
              <li key={idx}>{o}</li>
            ))}
          </ul>
          <button
            className="md-btn"
            onClick={() => {
              closeModal();
              router.push("/contact");
            }}
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </div>
  );
}

function LayoutContent({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("lanternTheme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("lanternTheme", newTheme);
  };

  return (
    <>
      <Nav toggleTheme={toggleTheme} />
      <main className="min-h-dvh flex flex-col">
        {children}
      </main>
      <Footer />
      <ModalOverlay />
    </>
  );
}

import { usePathname } from "next/navigation";

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
    <ModalProvider>
      <LayoutContent>
        {children}
      </LayoutContent>
    </ModalProvider>
  );
}

