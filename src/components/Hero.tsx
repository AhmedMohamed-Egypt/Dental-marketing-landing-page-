export default function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-[#f7faff]">
      <div className="page-container grid items-center gap-12 pb-16 pt-10 md:gap-14 md:pt-14 lg:min-h-[760px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:pb-20 lg:pt-10">
        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-[620px]">
          <div className="eyebrow text-[#4d709c]">
            <span className="mr-3 inline-block size-1.5 rounded-full bg-[#4d8edb] align-middle" />
            DENTAL CARE, WITHOUT THE ANXIETY
          </div>

          <h1 className="mt-7 font-display text-[clamp(3.8rem,6vw,6.3rem)] leading-[0.92] tracking-[-0.065em] text-[#142746]">
            From pain
            <br />
            <em className="font-normal text-[#398ce5] mt-3 block">
              to relief.
            </em>
          </h1>

          <p className="hero-description">
            We’re here to help you find relief, restore your smile,
            and get back to your life without the discomfort.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-7 rounded-full bg-[#2785df] px-7 py-[17px] text-[13px] font-semibold text-white shadow-[0_12px_30px_rgba(39,133,223,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#1f76ca]"
            >
              Tell us what hurts
              <span className="text-xl leading-none">→</span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-[#cbdceb] bg-white/70 px-7 py-[16px] text-[13px] font-semibold text-[#142746] transition-all hover:border-[#9ebbd8] hover:bg-white"
            >
              Explore our care
            </a>
          </div>

          {/* BENEFITS */}
          <div className="mt-12 grid grid-cols-3 gap-5 border-t border-[#dbe5ef] pt-7">
            <div>
              <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-[#e7f1fb] text-[#2785df]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="size-5"
                >
                  <path d="M12 3 5 6v5c0 4.5 2.9 8.3 7 10 4.1-1.7 7-5.5 7-10V6l-7-3Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>

              <p className="text-[12px] leading-[1.4] text-[#5f7289]">
                <strong className="block text-[13px] text-[#142746]">
                  Gentle,
                </strong>
                modern care
              </p>
            </div>

            <div>
              <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-[#e7f5ed] text-[#49a77c]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="size-5"
                >
                  <path d="M12 21s-7-4.3-7-11.1C5 6.6 7 4 9.7 4c1.4 0 2.4.7 3.3 1.8C13.9 4.7 14.9 4 16.3 4 19 4 21 6.6 21 9.9 21 16.7 12 21 12 21Z" />
                  <path d="M9 12h2l1-3 2 6 1-3h2" />
                </svg>
              </div>

              <p className="text-[12px] leading-[1.4] text-[#5f7289]">
                <strong className="block text-[13px] text-[#142746]">
                  Solutions
                </strong>
                for every need
              </p>
            </div>

            <div>
              <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-[#fff0df] text-[#d89146]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="size-5"
                >
                  <circle cx="9" cy="8" r="3" />
                  <circle cx="17" cy="9" r="2.3" />
                  <path d="M3.5 20c.6-3.5 2.6-5.2 5.5-5.2s4.9 1.7 5.5 5.2" />
                  <path d="M14 14.5c3.2-.1 5.4 1.7 6 4.5" />
                </svg>
              </div>

              <p className="text-[12px] leading-[1.4] text-[#5f7289]">
                <strong className="block text-[13px] text-[#142746]">
                  A team
                </strong>
                you can trust
              </p>
            </div>
          </div>

          {/* AVAILABILITY */}
          <div className="mt-7 flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-full text-[#2785df]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="size-6"
              >
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M16 3v4M8 3v4M3 10h18" />
                <path d="M8 14h3M8 17h5" />
              </svg>
            </div>

            <div className="text-[12px] leading-[1.45]">
              <strong className="block text-[13px] text-[#142746]">
                Available this week
              </strong>
              <span className="text-[#8192a7]">
                Book your appointment in minutes.
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT BEFORE → AFTER VISUAL */}
        <div className="relative mx-auto w-full max-w-[720px] lg:ml-auto">
          <div className="hero-before-after relative aspect-[0.92] overflow-hidden rounded-[22px] bg-[#dceaf7] shadow-[0_25px_70px_rgba(45,92,130,0.14)] sm:aspect-[1.02] lg:aspect-[0.9]">
            {/* RELIEF IMAGE - BASE */}
            <img
              src="/images/dental-relief.webp"
              alt="Patient smiling comfortably after dental treatment"
              className="absolute inset-0 h-full w-full object-cover object-center"
              fetchPriority="high"
            />

            {/* PAIN IMAGE - ANIMATED OVERLAY */}
            <div className="hero-pain absolute inset-0 overflow-hidden">
              <img
                src="/images/dental-pain.webp"
                alt="Patient experiencing tooth pain"
                className="h-full w-full object-cover object-center"
              />

              {/* Pain glow */}
              <div className="absolute left-[28%] top-[48%] size-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 blur-xl" />
            </div>

            {/* DIVIDER */}
            <div className="hero-divider absolute bottom-0 left-1/2 top-0 z-20 w-px bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              <div className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#142746] shadow-[0_8px_25px_rgba(20,39,70,0.12)]">
                <span className="text-lg tracking-[-0.2em]">
                  ‹›
                </span>
              </div>
            </div>

            {/* PAIN LABEL */}
            <div className="absolute left-[7%] top-[35%] z-30 rounded-full bg-white/95 px-5 py-3 shadow-[0_10px_30px_rgba(20,39,70,0.1)] backdrop-blur-sm">
              <p className="text-[13px] font-medium leading-[1.25] text-[#142746]">
                Tooth pain
                <br />
                holding you back?
              </p>
            </div>

            {/* RELIEF LABEL */}
            <div className="absolute bottom-[25%] right-[6%] z-30 rounded-full bg-white/95 px-5 py-3 shadow-[0_10px_30px_rgba(20,39,70,0.1)] backdrop-blur-sm">
              <p className="text-[13px] font-semibold leading-[1.25] text-[#142746]">
                Feel better.
                <br />
                Smile again.
              </p>
            </div>

            {/* CURVED ARROW */}
            <svg
              className="absolute bottom-[18%] left-[34%] z-20 h-24 w-[42%]"
              viewBox="0 0 300 100"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 65 C90 105, 205 105, 275 20"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M258 24 L276 19 L271 38"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* SPARKLES */}
            <span
              className="absolute right-[15%] top-[48%] z-30 text-4xl text-white"
              aria-hidden="true"
            >
              ✦
            </span>

            <span
              className="absolute right-[9%] top-[55%] z-30 text-2xl text-white"
              aria-hidden="true"
            >
              ✧
            </span>
          </div>

          {/* Decorative circle */}
          <span
            className="absolute -right-5 top-[12%] hidden size-20 rounded-full border border-[#a9c9e4] lg:block"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="border-t border-[#dce6ef] bg-[#f0f6fb]">
        <div className="page-container grid gap-5 py-6 text-center text-[11px] font-semibold uppercase tracking-[0.17em] text-[#58718a] sm:grid-cols-3 sm:gap-0 sm:py-7">
          <span>Gentle, modern care</span>

          <span className="border-y border-[#d8e4ee] py-5 sm:border-x sm:border-y-0 sm:py-0">
            Comfort in every detail
          </span>

          <span>Here for every smile</span>
        </div>
      </div>

    
    </section>
  )
}