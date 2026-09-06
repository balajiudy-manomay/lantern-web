"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanternLogoIcon from "./icons/lantern-logo-icon";

export default function Nav({ toggleTheme }: { toggleTheme: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMob = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (pathname === path) {
      e.preventDefault();
    }
  };

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (pathname === path) {
      e.preventDefault();
    }
    toggleMob();
  };

  const servicesActive = pathname === "/services" || pathname === "/pulse";
  const aboutActive = pathname === "/about" || pathname === "/faqs";

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" onClick={(e) => handleLinkClick(e, "/")} className="nav-logo">
            <LanternLogoIcon className="nav-logo-icon" />
          </Link>
          <ul className="nav-links">
            <li><Link href="/complexity" onClick={(e) => handleLinkClick(e, "/complexity")} className={pathname === "/complexity" ? "active" : ""}>Landscape</Link></li>
            <li><Link href="/lantern" onClick={(e) => handleLinkClick(e, "/lantern")} className={pathname === "/lantern" ? "active" : ""}>Lantern</Link></li>
            <li className="nav-drop">
              <Link href="/services" onClick={(e) => handleLinkClick(e, "/services")} className={servicesActive ? "active" : ""}>Services</Link>
              <div className="nav-drop-panel">
                <div className="nav-drop-panel-inner">
                  <Link href="/services" onClick={(e) => handleLinkClick(e, "/services")}>Services</Link>
                  <Link href="/pulse" onClick={(e) => handleLinkClick(e, "/pulse")}>Market Pulse</Link>
                </div>
              </div>
            </li>
            <li><Link href="/industries" onClick={(e) => handleLinkClick(e, "/industries")} className={pathname === "/industries" ? "active" : ""}>Industries</Link></li>
            <li className="nav-drop">
              <Link href="/about" onClick={(e) => handleLinkClick(e, "/about")} className={aboutActive ? "active" : ""}>About</Link>
              <div className="nav-drop-panel">
                <div className="nav-drop-panel-inner">
                  <Link href="/about" onClick={(e) => handleLinkClick(e, "/about")}>About Lantern</Link>
                  <Link href="/faqs" onClick={(e) => handleLinkClick(e, "/faqs")}>FAQs</Link>
                </div>
              </div>
            </li>
            <li><Link href="/contact" onClick={(e) => handleLinkClick(e, "/contact")} className={pathname === "/contact" ? "active" : ""}>Connect</Link></li>
          </ul>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle theme">
              <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
              <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </button>
            <button className="hamburger" onClick={toggleMob} aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`} id="mm">
        <button className="mobile-close" onClick={toggleMob}>&times;</button>
        <Link href="/complexity" onClick={(e) => handleMobileLinkClick(e, "/complexity")}>Landscape</Link>
        <Link href="/lantern" onClick={(e) => handleMobileLinkClick(e, "/lantern")}>Lantern</Link>
        <div className="mm-group">
          <span className="mm-label">Services</span>
          <Link href="/services" onClick={(e) => handleMobileLinkClick(e, "/services")}>Services</Link>
          <Link href="/pulse" onClick={(e) => handleMobileLinkClick(e, "/pulse")}>Market Pulse</Link>
        </div>
        <Link href="/industries" onClick={(e) => handleMobileLinkClick(e, "/industries")}>Industries</Link>
        <div className="mm-group">
          <span className="mm-label">About</span>
          <Link href="/about" onClick={(e) => handleMobileLinkClick(e, "/about")}>About Lantern</Link>
          <Link href="/faqs" onClick={(e) => handleMobileLinkClick(e, "/faqs")}>FAQs</Link>
        </div>
        <Link href="/contact" onClick={(e) => handleMobileLinkClick(e, "/contact")}>Connect</Link>
      </div>
    </>
  );
}
