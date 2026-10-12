const steps = [
  {
    number: "01",
    title: "Tell us what hurts",
    description:
      "Pain, sensitivity, discomfort, or simply something that doesn’t feel right.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path
          d="M13 21.5C13 15.15 18.37 10 25 10s12 5.15 12 11.5S31.63 33 25 33c-1.4 0-2.72-.22-3.95-.63L14 35l2.18-5.78A10.9 10.9 0 0 1 13 21.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 21.2c1-.9 2.3-1.35 4-1.35s3 .45 4 1.35"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    number: "02",
    title: "We take a closer look",
    description:
      "A careful consultation to understand what’s causing the problem.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="21" cy="21" r="9" />

        <path d="m27.5 27.5 7 7" strokeLinecap="round" />

        <path
          d="M16.5 21.5c1.15.9 2.65 1.35 4.5 1.35s3.35-.45 4.5-1.35"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    number: "03",
    title: "Find the right care",
    description:
      "Clear options focused on getting you comfortable again.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="12" />

        <path
          d="M19 22h.01M29 22h.01"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M18.5 27c1.5 1.8 3.35 2.7 5.5 2.7s4-.9 5.5-2.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function ReliefSection() {
  return (
    <section
      id="understanding"
      className="bg-white px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-16"
    >
      {/* =====================================================
          MAIN CARD
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          page-container
          overflow-hidden
          rounded-[22px]
          bg-[#f4f9fd]
        "
      >
        <div
  className="
    pointer-events-none
    absolute
    bottom-[-90px]
    right-[-180px]
    z-20
    hidden
    h-[380px]
    w-[450px]
    lg:block
  "
>
  <div
    className="absolute inset-0 overflow-hidden"
    style={{
      clipPath: "ellipse(74% 62% at 80% 62%)",
    }}
  >
    <img
      src="/images/dental-consultation-clean.png"
      alt=""
      aria-hidden="true"
      className="h-full w-full object-cover object-[55%_45%]"
    />
  </div>
</div>
        {/* =====================================================
            BACKGROUND SHAPES
        ====================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          {/* Large blue circle behind the timeline */}
          <div
            className="
              absolute
              left-[42%]
              top-[-185px]
              h-[540px]
              w-[540px]
              rounded-full
              bg-[#ebf5fd]
            "
          />

          {/* Right image glow */}
          <div
            className="
              absolute
              right-[-230px]
              top-[50px]
              h-[650px]
              w-[650px]
              rounded-full
              bg-[radial-gradient(circle,rgba(218,236,253,0.98)_0%,rgba(218,236,253,0)_70%)]
            "
          />

          {/* Bottom fade */}
          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              h-[155px]
              bg-gradient-to-t
              from-[rgba(216,226,235,0.72)]
              via-[rgba(230,238,245,0.3)]
              to-transparent
            "
          />

          {/* Bottom-left glow */}
          <div
            className="
              absolute
              bottom-[-170px]
              left-[-120px]
              h-[360px]
              w-[360px]
              rounded-full
              bg-[radial-gradient(circle,rgba(226,241,255,0.9)_0%,rgba(226,241,255,0)_70%)]
            "
          />
        </div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div className="relative grid lg:grid-cols-[40%_54%] p-[50px]">
          {/* ===================================================
              LEFT SIDE
          ==================================================== */}

          <div
            className="
              relative
            
            "
          >
            {/* Eyebrow */}

            <div className="flex items-center">
              <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#1685ee]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6795ce]">
                FIRST, WE LISTEN
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                mt-7
                font-display
                text-[clamp(3.2rem,4.4vw,4.7rem)]
                leading-[0.9]
                tracking-[-0.065em]
                text-[#142746]
              "
            >
              Relief starts with
              <br />

              <em className="font-normal text-[#1684ee]">
                understanding.
              </em>
            </h2>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-[500px]
                text-[14px]
                leading-[1.8]
                text-[#7187a3]
                sm:text-[15px]
              "
            >
              Before we recommend the right care, we take the time to
              understand what’s bothering you, what you need, and what will
              make you feel comfortable.
            </p>

            {/* Comfort */}

            <div className="mt-8 flex items-center gap-5">
              <span className="h-px w-[42px] bg-[#9fcaf4]" />

              <span className="text-[10px] font-medium tracking-[0.16em] text-[#7187a4] sm:text-[11px]">
                Your comfort comes first.
              </span>
            </div>

            {/* Decorative curve */}

            <svg
              viewBox="0 0 230 85"
              className="
                pointer-events-none
                absolute
                bottom-[6px]
                left-[64px]
                h-[75px]
                w-[225px]
              "
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 49C19 28 48 19 66 27C81 34 74 52 60 60C48 67 56 74 72 68C99 57 124 37 153 31C179 26 201 28 222 32"
                stroke="#afd2f6"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* ===================================================
              RIGHT SIDE
          ==================================================== */
            <div className="relative w-full">
  <div className="flex flex-col">
  <img src="/images/Vector-line.svg" className="
  w-[100px]
  h-[300px]
  absolute
  top-0
  bottom-0
  m-auto
"/>
    {/* =========================
        STEP 01
    ========================== */}

    <div
      className="
        flex
        items-center
        gap-6
        px-6
        py-7
        sm:px-8
        sm:py-8
        lg:gap-8
        lg:px-10
        lg:py-9
        relative
        z-30
      "
    >
      {/* Icon */}

      <div
        className="
          flex
       
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#eaf6ff]
          text-[#1686ed]
          ring-3
          ring-white
          sm:h-[50px]
          sm:w-[50px]
        "
      >
        <svg
          viewBox="0 0 48 48"
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            d="M13 21.5C13 15.15 18.37 10 25 10s12 5.15 12 11.5S31.63 33 25 33c-1.4 0-2.72-.22-3.95-.63L14 35l2.18-5.78A10.9 10.9 0 0 1 13 21.5Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M21 21.2c1-.9 2.3-1.35 4-1.35s3 .45 4 1.35"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Text */}

      <div className="min-w-0">
        <h3
          className="
            font-sans
            text-[25px]
            leading-tight
            tracking-[-0.04em]
            text-[#112b50]
            sm:text-[28px]
          "
        >
          Tell us what hurts
        </h3>

        <p
          className="
           
            max-w-[430px]
            text-[14px]
            leading-[1.65]
            text-[#7188a5]
            sm:text-[15px]
          "
        >
          Pain, sensitivity, discomfort, or simply something that doesn’t
          feel right.
        </p>
      </div>
    </div>

    {/* =========================
        STEP 02
    ========================== */}

    <div
      className="
        flex
        items-center
        gap-6
        px-6
        py-7
        sm:px-8
        sm:py-8
        lg:gap-8
        lg:px-10
        lg:py-9
        relative
        z-30
      "
    >
      {/* Icon */}

      <div
        className="
          flex
        
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#ecf8f7]
          text-[#45a8aa]
          ring-3
          ring-white
          sm:h-[50px]
          sm:w-[50px]
        "
      >
        <svg
          viewBox="0 0 48 48"
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle cx="20" cy="20" r="8" />

          <path
            d="M26 26l7 7"
            strokeLinecap="round"
          />

          <path
            d="M16 20c1.1.8 2.4 1.2 4 1.2s2.9-.4 4-1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Text */}

      <div className="min-w-0 ">
        <h3
          className="
           font-sans
            text-[25px]
            leading-tight
            tracking-[-0.04em]
            text-[#112b50]
            sm:text-[28px]
          "
        >
          We take a closer look
        </h3>

        <p
          className="
            
            max-w-[430px]
            text-[14px]
            leading-[1.65]
            text-[#7188a5]
            sm:text-[15px]
          "
        >
          A careful consultation to understand what’s causing the problem.
        </p>
      </div>
    </div>

    {/* =========================
        STEP 03
    ========================== */}

    <div
      className="
        flex
        items-center
        gap-6
        px-6
        py-7
        sm:px-8
        sm:py-8
        lg:gap-8
        lg:px-10
        lg:py-9
        relative 
        z-30
      "
    >
      {/* Icon */}

      <div
        className="
          flex
         
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#eaf6ff]
          text-[#1686ed]
          ring-3
          ring-white
          sm:h-[50px]
          sm:w-[50px]
        "
      >
        <svg
          viewBox="0 0 48 48"
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle cx="24" cy="24" r="12" />

          <path
            d="M19 22h.01M29 22h.01"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M18.5 27c1.5 1.8 3.35 2.7 5.5 2.7s4-.9 5.5-2.7"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Text */}

      <div className="min-w-0">
        <h3
          className="
            font-sans
            text-[25px]
            leading-tight
            tracking-[-0.04em]
            text-[#112b50]
            sm:text-[28px]
          "
        >
          Find the right care
        </h3>

        <p
          className="
           
            max-w-[430px]
            text-[14px]
            leading-[1.65]
            text-[#7188a5]
            sm:text-[15px]
          "
        >
          Clear options focused on getting you comfortable again.
        </p>
      </div>
    </div>
  </div>
</div>
          
          }

        </div>

        {/* =====================================================
            MOBILE IMAGE
        ====================================================== */}

        <div className="relative z-40 mx-6 mb-6 overflow-hidden rounded-[20px] lg:hidden">
          <div className="aspect-[1.2]">
            <img
              src="/images/dental-consultation.jpg"
              alt="Patient having a comfortable dental consultation"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="absolute bottom-4 left-4 rounded-[14px] bg-white/95 px-4 py-3 shadow-[0_10px_25px_rgba(40,82,118,0.12)]">
            <div className="flex items-start gap-3">
              <span className="text-[16px] text-[#1689ef]">
                ✧
              </span>

              <p className="text-[9px] leading-[1.45] text-[#788da6]">
                A calmer experience.
                <br />
                <strong className="font-semibold text-[#506983]">
                  A healthier, happier smile.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}