const questions = [
  {
    question: "What can I expect at my first visit?",
    answer:
      "We’ll get to know you, listen to your goals, and take a thoughtful look at your oral health. We’ll explain our findings and discuss next steps together, without pressure.",
  },
  {
    question: "Do you see patients who feel nervous about dentistry?",
    answer:
      "Absolutely. Tell us what would help you feel more comfortable. We’ll move at your pace, explain each step, and make time for your questions.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Our care includes preventive visits, cosmetic dentistry, and restorative treatments. Reach out and we’ll help you find the right starting point.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "This is a design preview, so appointment requests are not yet sent. Booking details can be connected when the studio site goes live.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-8 bg-[#f1f4ee] py-24 md:py-32">
      <div className="page-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="eyebrow">GOOD TO KNOW</p>
          <h2 className="section-title mt-5">
            Questions?
            <br />
            <em className="text-[#849b83]">We’re all ears.</em>
          </h2>
          <p className="mt-6 max-w-[310px] text-[14px] leading-[1.8] text-[#657770]">
            The first step should feel simple. Here are a few things you might
            be wondering about.
          </p>
        </div>
        <div className="border-t border-[#cfdcd0]">
          {questions.map((item) => (
            <div key={item.question} className="border-b border-[#cfdcd0] py-6">
              <h3 className="text-[15px] font-medium text-[#193f3c] sm:text-[17px]">
                {item.question}
              </h3>
              <p className="max-w-[550px] pr-10 pt-3 text-[13px] leading-[1.8] text-[#60756a]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
