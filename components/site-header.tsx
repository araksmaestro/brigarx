"use client";

import { useState } from "react";
import { ThemedLogo } from "@/components/themed-logo";
import { MenuIcon, XIcon } from "lucide-react";
import { BookButton } from "@/components/book-button";
import { ctaHeader } from "@/components/cta-styles";

const NAV_LINKS = [
  { href: "#who", label: "Who we help" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
];

/**
 * Section 1 — sticky header.
 *
 * The handoff's nav is desktop-only; the mobile disclosure menu below is the
 * "convert the nav to a menu" item it lists as required responsive work.
 */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(var(--lineRGB),0.1)] bg-[rgba(var(--baseRGB),0.88)] backdrop-blur-[12px]">
      {/* The page gutter sits outside .container-page, matching every section
          below, so the logo lines up with the hero text rather than being
          inset a further 32px. */}
      <div className="px-[20px] lg:px-[32px]">
        <div className="container-page flex items-center justify-between gap-[32px] py-[14px]">
          <a
            href="#top"
            className="shrink-0"
            aria-label="BrigaRx — back to top"
          >
            <ThemedLogo priority className="h-[42px] w-auto" />
          </a>

          <nav className="hidden items-center gap-[30px] lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] text-deep no-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-[12px]">
            <BookButton className={ctaHeader}>Enroll a patient</BookButton>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="site-nav-mobile"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="cursor-pointer p-[6px] text-deep lg:hidden"
            >
              {menuOpen ? <XIcon aria-hidden /> : <MenuIcon aria-hidden />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="site-nav-mobile"
          className="border-t border-[rgba(var(--lineRGB),0.1)] px-[20px] py-[8px] lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-[12px] text-[16px] text-deep no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
