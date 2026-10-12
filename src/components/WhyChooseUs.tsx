const reasons = [
  { number: '01', title: 'You come first', copy: 'We take time to understand what matters to you, so every plan feels as individual as your smile.' },
  { number: '02', title: 'Clarity at every step', copy: 'No confusing language or rushed decisions. Just honest guidance and space to ask every question.' },
  { number: '03', title: 'A softer experience', copy: 'A calming environment, a gentle touch, and little details that make a big difference.' },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-8 bg-[#193f3c] py-24 text-white md:py-32">
      <div className="page-container grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-28">
        <div>
          <p className="eyebrow !text-[#acc6ae]">THE SEREIN DIFFERENCE</p>
          <h2 className="section-title mt-5 !text-white">Dentistry with <em className="text-[#bdd0b7]">you in mind.</em></h2>
          <p className="mt-7 max-w-[350px] text-[14px] leading-[1.8] text-[#c1d1c7]">Great care is about more than teeth. It’s about how you feel throughout the whole journey.</p>
          <a href="#contact" className="mt-9 inline-flex items-center gap-5 rounded-full border border-[#9ab3a5] px-6 py-3.5 text-[12px] font-semibold transition-colors hover:bg-white hover:text-[#193f3c]">Experience the difference <span className="text-lg">↗</span></a>
        </div>
        <div className="border-t border-[#6a8b79]">
          {reasons.map(reason => <div key={reason.number} className="grid gap-4 border-b border-[#6a8b79] py-8 sm:grid-cols-[55px_1fr] sm:py-10">
            <span className="font-display text-[24px] italic text-[#a6c0aa]">{reason.number}</span>
            <div><h3 className="font-display text-[33px] leading-none tracking-[-0.03em]">{reason.title}</h3><p className="mt-3 max-w-[400px] text-[13px] leading-[1.8] text-[#bbcec1]">{reason.copy}</p></div>
          </div>)}
        </div>
      </div>
    </section>
  )
}
