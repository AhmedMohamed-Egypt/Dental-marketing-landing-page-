
"use client";

import { useState } from "react";

const links = [
  { label: "Our approach", href: "#services" },
  { label: "How it works", href: "#about" },
  { label: "Why Serein", href: "#why" },
  { label: "FAQs", href: "#faq" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-50">
      {/* Announcement bar */}
      <div className="bg-[#e5f1fc]">
        <div className="page-container flex h-7 items-center justify-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#4d709c]">
            <span className="mr-2 text-[#398ce5]">✦</span>
            A little more ease, at every visit
          </p>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-[#f7faff] px-4 pb-3 sm:px-6 lg:px-8">
        <div className="page-container">
          <nav className="relative flex h-[68px] items-center justify-between rounded-[22px] border border-[#e4edf5] bg-white/90 px-5 shadow-[0_8px_30px_rgba(48,88,125,0.06)] backdrop-blur-sm sm:px-7">
            {/* Logo */}
            <a
              href="#top"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-3"
              aria-label="Serein Dental Studio home"
            >
              <span className="flex size-9 items-center justify-center rounded-full border border-[#9fc4e6] font-display text-[18px] italic text-[#193f3c]">
                S
              </span>

              <span className="flex items-center gap-3">
                <span className="font-display text-[25px] leading-none tracking-[-0.04em] text-[#193f3c]">
                  serein.
                </span>

                <span className="h-7 w-px bg-[#d8e3ec]" />

                <span className="text-[8px] font-semibold uppercase leading-[1.15] tracking-[0.16em] text-[#6e8296]">
                  Dental
                  <br />
                  Studio
                </span>
              </span>
            </a>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-8 lg:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[12px] font-medium text-[#40566d] transition-colors hover:text-[#2785df]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden items-center gap-4 rounded-full bg-[#2785df] px-6 py-3 text-[11px] font-semibold text-white shadow-[0_8px_20px_rgba(39,133,223,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#1f76ca] lg:inline-flex"
            >
              Book a consultation
              <span className="text-base leading-none">↗</span>
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#dbe6ef] text-[#193f3c] transition-colors hover:bg-[#f0f7ff] lg:hidden"
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={`block h-px w-4 bg-current transition-transform ${
                    menuOpen ? "translate-y-[3.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-px w-4 bg-current transition-transform ${
                    menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </nav>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div
              id="mobile-navigation"
              className="mt-2 rounded-[22px] border border-[#e4edf5] bg-white p-4 shadow-[0_12px_30px_rgba(48,88,125,0.10)] lg:hidden"
            >
              <div className="flex flex-col">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-[#40566d] transition-colors hover:bg-[#f0f7ff] hover:text-[#2785df]"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-3 flex items-center justify-between rounded-full bg-[#2785df] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1f76ca]"
                >
                  Book a consultation
                  <span className="text-base">↗</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
