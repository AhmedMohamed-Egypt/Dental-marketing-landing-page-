const links = [
  { label: "Our care", href: "#services" },
  { label: "About us", href: "#about" },
  { label: "Why Serein", href: "#why-us" },
  { label: "FAQs", href: "#faq" },
]

export default function SiteHeader() {
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
      <div className="bg-[#f7faff] px-4 pb-3 sm:px-6 lg:px-8 ">
        <div className="page-container">
          <nav className="flex h-[68px] items-center justify-between rounded-[22px] border border-[#e4edf5] bg-white/90 px-5 shadow-[0_8px_30px_rgba(48,88,125,0.06)] backdrop-blur-sm sm:px-7">
            {/* Logo */}
            <a
              href="#top"
              className="flex shrink-0 items-center gap-3"
              aria-label="Serein Dental Studio home"
            >
              <span className="flex size-9 items-center justify-center rounded-full border border-[#9fc4e6] font-display text-[18px] italic text-[#193f3c]">
                s
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

            {/* Navigation */}
            <div className="hidden items-center gap-8 lg:flex">
              <a
                href="#services"
                className="text-[12px] font-medium text-[#40566d] transition-colors hover:text-[#2785df]"
              >
               Our approach
              </a>

              <a
                href="#about"
                className="text-[12px] font-medium text-[#40566d] transition-colors hover:text-[#2785df]"
              >
                How it works
              </a>

              <a
                href="#why"
                className="text-[12px] font-medium text-[#40566d] transition-colors hover:text-[#2785df]"
              >
                Why Serein
              </a>

              <a
                href="#faq"
                className="text-[12px] font-medium text-[#40566d] transition-colors hover:text-[#2785df]"
              >
                FAQs
              </a>
            </div>

            {/* CTA */}
            <a
  href="#contact"
  className="hidden items-center gap-4 rounded-full bg-[#2785df] px-6 py-3 text-[11px] font-semibold text-white shadow-[0_8px_20px_rgba(39,133,223,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#1f76ca] sm:inline-flex"
>
  Book a consultation
  <span className="text-base leading-none">↗</span>
</a>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Open navigation menu"
              className="flex size-10 items-center justify-center rounded-full border border-[#dbe6ef] text-[#193f3c] sm:hidden"
            >
              <span className="flex flex-col gap-1.5">
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
