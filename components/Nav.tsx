"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import LanternLogoFull from "./icons/lantern-logo-full";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

function DropdownItem({
  href,
  title,
  description,
  onClick,
}: {
  href: string;
  title: string;
  description: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <li>
      <NavigationMenuLink
        render={
          <Link href={href} onClick={onClick}>
            <div className="flex flex-col gap-1">
              <div className="font-bold leading-none text-[var(--hd)]">{title}</div>
              <div className="leading-snug text-[var(--mu)]">{description}</div>
            </div>
          </Link>
        }
      />
    </li>
  );
}

function MobileNavGroup({
  label,
  defaultOpen,
  children,
}: {
  label: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="mm-accordion">
      <button
        type="button"
        className="mm-accordion-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{label}</span>
        <ChevronDown size={18} aria-hidden="true" className={`mm-accordion-chevron${open ? " open" : ""}`} />
      </button>
      <div className={`mm-accordion-panel${open ? " open" : ""}`}>
        <div className="mm-accordion-panel-inner">{children}</div>
      </div>
    </div>
  );
}

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
          <Link href="/" onClick={(e) => handleLinkClick(e, "/")} className="nav-logo" aria-label="Lantern home">
            <LanternLogoFull className="nav-logo-icon" height={28} />
          </Link>
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="nav-links">
              <NavigationMenuItem>
                <Link href="/complexity" onClick={(e) => handleLinkClick(e, "/complexity")} className={pathname === "/complexity" ? "active" : ""}>Landscape</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/lantern" onClick={(e) => handleLinkClick(e, "/lantern")} className={pathname === "/lantern" ? "active" : ""}>Lantern</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={servicesActive ? "text-[var(--gold)]" : undefined}>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-72 gap-1">
                    <DropdownItem
                      href="/services"
                      title="Services"
                      description="AI, automation and transformation services built around your business."
                      onClick={(e) => handleLinkClick(e, "/services")}
                    />
                    <DropdownItem
                      href="/pulse"
                      title="Market Pulse"
                      description="Signals on AI adoption, governance and automation shaping growth."
                      onClick={(e) => handleLinkClick(e, "/pulse")}
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/industries" onClick={(e) => handleLinkClick(e, "/industries")} className={pathname === "/industries" ? "active" : ""}>Industries</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={aboutActive ? "text-[var(--gold)]" : undefined}>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-72 gap-1">
                    <DropdownItem
                      href="/about"
                      title="About Lantern"
                      description="Our mission, founders and the five pillars behind our approach."
                      onClick={(e) => handleLinkClick(e, "/about")}
                    />
                    <DropdownItem
                      href="/faqs"
                      title="FAQs"
                      description="Answers to common questions about working with Lantern."
                      onClick={(e) => handleLinkClick(e, "/faqs")}
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" onClick={(e) => handleLinkClick(e, "/contact")} className={pathname === "/contact" ? "active" : ""}>Connect</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
            <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} swipeDirection="right">
              <DrawerTrigger
                render={
                  <button className="hamburger" aria-label="Menu">
                    <Menu size={22} aria-hidden="true" />
                  </button>
                }
              />
              <DrawerContent className="mm-drawer bg-[var(--card)] text-[var(--hd)]">
                <DrawerHeader className="mm-drawer-head">
                  <DrawerTitle className="mm-drawer-title">Menu</DrawerTitle>
                  <DrawerClose
                    render={
                      <button className="mobile-close" aria-label="Close menu">
                        <X size={20} aria-hidden="true" />
                      </button>
                    }
                  />
                </DrawerHeader>
                <nav className="mm-links">
                  <Link className="mm-row" href="/complexity" onClick={(e) => handleMobileLinkClick(e, "/complexity")}>Landscape</Link>
                  <Link className="mm-row" href="/lantern" onClick={(e) => handleMobileLinkClick(e, "/lantern")}>Lantern</Link>
                  <MobileNavGroup label="Services" defaultOpen={servicesActive}>
                    <Link href="/services" onClick={(e) => handleMobileLinkClick(e, "/services")}>Services</Link>
                    <Link href="/pulse" onClick={(e) => handleMobileLinkClick(e, "/pulse")}>Market Pulse</Link>
                  </MobileNavGroup>
                  <Link className="mm-row" href="/industries" onClick={(e) => handleMobileLinkClick(e, "/industries")}>Industries</Link>
                  <MobileNavGroup label="About" defaultOpen={aboutActive}>
                    <Link href="/about" onClick={(e) => handleMobileLinkClick(e, "/about")}>About Lantern</Link>
                    <Link href="/faqs" onClick={(e) => handleMobileLinkClick(e, "/faqs")}>FAQs</Link>
                  </MobileNavGroup>
                  <Link className="mm-row" href="/contact" onClick={(e) => handleMobileLinkClick(e, "/contact")}>Connect</Link>
                </nav>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>
    </>
  );
}
