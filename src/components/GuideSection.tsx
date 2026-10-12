const steps = [
  {
    number: "01",
    title: "Understand what’s going on",
    description: "We explain what we find in simple, everyday language.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path
          d="M13 22c0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12c-1.5 0-2.9-.3-4.2-.8L14 36l2.2-6A11.8 11.8 0 0 1 13 22Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M19 21.5c1.2-1 2.8-1.5 6-1.5s4.8.5 6 1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    number: "02",
    title: "See your options",
    description: "You’ll understand what can be done and what each option involves.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path
          d="M14 7h16l6 6v28H14z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M30 7v7h6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M19 21h12M19 27h12M19 33h8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    number: "03",
    title: "Decide with confidence",
    description: "We help you choose the next step at your own pace.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="13" />

        <path
          d="m18 24 4 4 8-9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function GuideSection() {
  return (
    <section
      id="guide"
      className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* =================================================
              LEFT — IMAGE
          ================================================== */}

          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[30px]">
              <div className="aspect-[1.05] sm:aspect-[1.15] lg:aspect-[0.98]">
                <img
                  src="/images/dental-consultation-clean.png"
                  alt="Patient receiving dental care"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Floating reassurance card */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  rounded-[18px]
                  bg-white
                  px-5
                  py-4
                  shadow-[0_12px_32px_rgba(29,65,98,0.14)]
                  sm:bottom-7
                  sm:left-7
                "
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#edf6ff] text-[#1685ee]">
                    <svg
                      viewBox="0 0 48 48"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path
                        d="M24 7c-8 0-14 6.2-14 13.8S16 34.5 24 34.5s14-6.1 14-13.7S32 7 24 7Z"
                        strokeLinecap="round"
                      />

                      <path
                        d="M18.5 22.5c1.5 1.8 3.3 2.7 5.5 2.7s4-.9 5.5-2.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold text-[#173252]">
                      No pressure.
                    </p>

                    <p className="mt-1 text-[10px] text-[#7187a3] sm:text-[11px]">
                      Just a plan that makes sense.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — CONTENT
          ================================================== */}

          <div className="order-1 lg:order-2">
            {/* Eyebrow */}

            <div className="flex items-center">
              <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#1685ee]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6795cf]">
                NEXT, WE EXPLAIN
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                mt-7
                max-w-[620px]
                font-display
                text-[clamp(3.1rem,5vw,5.2rem)]
                leading-[0.9]
                tracking-[-0.07em]
                text-[#142746]
              "
            >
              Then, we make it
              <br />

              <em className="font-normal text-[#1685ee]">
                simple.
              </em>
            </h2>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-[620px]
                text-[15px]
                leading-[1.8]
                text-[#7187a3]
                sm:text-[16px]
              "
            >
              We explain what we find, show you your options, and help you
              decide what feels right — without pressure or complicated
              dental language.
            </p>

            {/* =================================================
                STEPS
            ================================================== */}

            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative"
                >
                  <div
                    className="
                      h-full
                      rounded-[18px]
                      border
                      border-[#dbeaf7]
                      bg-white
                      p-4
                      sm:p-5
                    "
                  >
                    {/* Icon */}

                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#edf6ff] text-[#1685ee]">
                        {step.icon}
                      </div>

                      <span className="text-[11px] font-semibold tracking-[0.08em] text-[#9bc6ee]">
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}

                    <h3
                      className="
                        mt-5
                        max-w-[150px]
                        text-[14px]
                        font-semibold
                        leading-[1.3]
                        text-[#172f50]
                      "
                    >
                      {step.title}
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        mt-3
                        text-[11px]
                        leading-[1.6]
                        text-[#788da6]
                      "
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow between cards */}

                  {index < steps.length - 1 && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-[13px]
                        top-1/2
                        z-10
                        hidden
                        -translate-y-1/2
                        sm:block
                      "
                    >
                      <span className="text-[22px] font-light text-[#73b5ef]">
                        →
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}