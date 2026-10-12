const cards = [
  {
    title: "Modern facilities",
    description:
      "Clean, comfortable spaces designed to help you feel relaxed from the moment you arrive.",
    image: "/images/modern-facilities.jpg",
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
          d="M10 39V14h28v25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 20h6M26 20h6M16 26h6M26 26h6M16 32h6M26 32h6"
          strokeLinecap="round"
        />
        <path
          d="M7 39h34"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    title: "Gentle care",
    description:
      "A kind and experienced team that puts your comfort and well-being first.",
    image: "/images/gentle-care.jpg",
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
          d="M24 38S9 29 9 17c0-5 3.7-8 8-8 3.2 0 5.7 1.9 7 4.4C25.3 10.9 27.8 9 31 9c4.3 0 8 3 8 8 0 12-15 21-15 21Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    title: "Healthy, confident smiles",
    description:
      "Personalized care plans to help you achieve a healthier smile that lasts.",
    image: "/images/healthy-smile.jpg",
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
          d="M24 10c-7 0-12 5.1-12 11.5 0 8.2 5.3 14.7 12 16.5 6.7-1.8 12-8.3 12-16.5C36 15.1 31 10 24 10Z"
          strokeLinecap="round"
        />
        <path
          d="M18.5 23.5c1.5 2 3.4 3 5.5 3s4-.9 5.5-3"
          strokeLinecap="round"
        />
        <path
          d="M19 19h.01M29 19h.01"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function DifferenceSection() {
  return (
    <section
      id="difference"
      className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-end gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="max-w-[470px]">
            {/* Eyebrow */}

            <div className="flex items-center">
              <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#1685ee]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6795cf]">
                THE DIFFERENCE
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                mt-7
                font-display
                text-[clamp(3.2rem,5vw,5rem)]
                leading-[0.9]
                tracking-[-0.07em]
                text-[#142746]
              "
            >
              Care that
              <br />
              <em className="font-normal text-[#1685ee]">
                feels different.
              </em>
            </h2>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-[440px]
                text-[15px]
                leading-[1.85]
                text-[#7187a3]
                sm:text-[16px]
              "
            >
              A modern, comfortable environment with a team that truly
              cares. We combine thoughtful technology with a personalized
              approach to make every visit feel easier.
            </p>

            {/* CTA */}

            <a
              href="#services"
              className="
                mt-8
                inline-flex
                items-center
                gap-7
                rounded-full
                bg-[#1685ee]
                px-7
                py-4
                text-[12px]
                font-semibold
                text-white
                shadow-[0_10px_25px_rgba(22,133,238,0.15)]
                transition-all
                hover:-translate-y-0.5
                hover:bg-[#0f78dc]
              "
            >
              Explore our care

              <span className="text-lg leading-none">
                →
              </span>
            </a>
          </div>

          {/* =================================================
              RIGHT CARDS
          ================================================== */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#dceaf7]
                  bg-white
                  shadow-[0_8px_25px_rgba(39,82,120,0.03)]
                "
              >
                {/* Image */}

                <div className="relative aspect-[0.96] overflow-hidden">
                  <img
                    src={card.image}
                    alt=""
                    className="
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-500
                      hover:scale-[1.03]
                    "
                  />
                </div>

                {/* Content */}

                <div className="relative px-5 pb-6 pt-0">
                  {/* Floating icon */}

                  <div
                    className="
                      relative
                      -mt-7
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white
                      bg-[#edf6ff]
                      text-[#1685ee]
                      shadow-[0_7px_22px_rgba(42,110,170,0.1)]
                    "
                  >
                    {card.icon}
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-5
                      font-display
                      text-[25px]
                      leading-[0.95]
                      tracking-[-0.04em]
                      text-[#132b4d]
                    "
                  >
                    {card.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-3
                      text-[12px]
                      leading-[1.7]
                      text-[#7188a4]
                    "
                  >
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}