"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { ModalProvider, useModal } from "./ModalContext";
import { useRouter } from "next/navigation";
import { serviceIcons } from "./icons/service-icons";

function ModalOverlay() {
  const { modalData, closeModal } = useModal();
  const router = useRouter();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  useEffect(() => {
    if (modalData) {
      triggerRef.current = document.activeElement as HTMLElement;
      dialogRef.current?.focus();
    } else if (triggerRef.current) {
      triggerRef.current.focus();
      triggerRef.current = null;
    }
  }, [modalData]);

  if (!modalData) return null;

  const Icon = modalData.n ? serviceIcons[modalData.n] : undefined;

  return (
    <div className="mo active" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
      <div
        className="md"
        role="dialog"
        aria-modal="true"
        aria-label={modalData.q}
        ref={dialogRef}
        tabIndex={-1}
      >
        <button className="md-x" onClick={closeModal} aria-label="Close">&times;</button>
        <div id="mb">
          <div className="md-head ">
            {Icon && (
              <div className="flex shrink-0 items-center justify-center">
                <Icon size={24} />
              </div>
            )}
            <p className="md-q">&ldquo;{modalData.q}&rdquo;</p>
          </div>

          <div className="md-section">
            <h3>The Problem</h3>
            <p>{modalData.prob}</p>
          </div>

          <div className="md-section">
            <h3>How Lantern Helps</h3>
            <p>{modalData.app}</p>
          </div>

          <div className="md-section">
            <h3>Key Outcomes</h3>
            <ul>
              {modalData.out?.map((o: string, idx: number) => (
                <li key={idx}>{o}</li>
              ))}
            </ul>
          </div>

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

