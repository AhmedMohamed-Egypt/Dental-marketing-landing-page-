export default function Footer() {
  return (
    <footer className="border-t border-[#dceaf6] bg-[#f8fbff]">
      <div className="page-container py-10 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#top"
              className="flex items-center gap-3"
              aria-label="Serein Dental Studio home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#9fc4e6] font-display text-[18px] italic text-[#193f3c]">
                s
              </span>

              <span className="font-display text-[25px] leading-none tracking-[-0.04em] text-[#193f3c]">
                serein.
              </span>

              <span className="h-6 w-px bg-[#dce5ed]" />

              <span className="text-[8px] font-semibold uppercase leading-[1.15] tracking-[0.16em] text-[#71859a]">
                Dental
                <br />
                Studio
              </span>
            </a>

            <p className="mt-4 max-w-[280px] text-[12px] leading-[1.7] text-[#74879b]">
              Gentle, modern dental care designed around your comfort.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3 text-[12px] text-[#667b90] md:items-end">
            <a
              href="mailto:hello@sereindental.example"
              className="transition-colors hover:text-[#1685ee]"
            >
              hello@sereindental.example
            </a>

            <a
              href="tel:+201000000000"
              className="transition-colors hover:text-[#1685ee]"
            >
              +20 100 000 0000
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[#edf1f5] pt-5 text-[10px] text-[#8a9aaa] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Serein Dental Studio. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="transition-colors hover:text-[#1685ee]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-[#1685ee]"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}