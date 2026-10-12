const services = [
  { number: '01', title: 'Everyday dentistry', description: 'A strong foundation for a healthy smile, with preventive care, cleanings, and checkups tailored to you.', detail: 'Checkups & prevention' },
  { number: '02', title: 'Cosmetic dentistry', description: 'Small refinements or a whole new glow. Discover the confidence that comes from a smile that feels like you.', detail: 'Whitening & smile design' },
  { number: '03', title: 'Restorative care', description: 'Gentle, considered solutions that bring back comfort, function, and the freedom to smile fully.', detail: 'Repair & restoration' },
]

export default function Services() {
  return (
    <section id="services" className="scroll-mt-8 bg-[#fffefa] py-24 md:py-32">
      <div className="page-container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div><p className="eyebrow">THE CARE YOU DESERVE</p><h2 className="section-title mt-5 max-w-[690px]">Good care, <em className="text-[#849b83]">beautifully considered.</em></h2></div>
          <p className="max-w-[305px] text-[14px] leading-[1.8] text-[#657770]">Whatever brings you in, we’re here to make the experience feel easy, personal, and entirely yours.</p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3 lg:gap-6">
          {services.map(service => <article key={service.number} className="group flex min-h-[350px] flex-col rounded-[20px] border border-[#e6ebe4] bg-[#f6f8f3] p-8 transition-colors hover:bg-[#eaf1e9] lg:p-10">
            <span className="font-display text-[26px] italic text-[#9aaf9c]">{service.number}</span>
            <div className="mt-auto pt-16">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8ca08e]">{service.detail}</p>
              <h3 className="mt-4 font-display text-[37px] leading-[1] tracking-[-0.04em] text-[#193f3c]">{service.title}</h3>
              <p className="mt-5 min-h-[75px] text-[13px] leading-[1.7] text-[#667970]">{service.description}</p>
              <a href="#contact" aria-label={`Ask about ${service.title}`} className="mt-7 flex size-10 items-center justify-center rounded-full border border-[#b8c9bb] text-lg text-[#193f3c] transition-colors group-hover:bg-[#193f3c] group-hover:text-white">↗</a>
            </div>
          </article>)}
        </div>
        <p className="mt-8 text-center text-[13px] text-[#657770]">Not sure where to start? <a href="#contact" className="font-semibold text-[#193f3c] underline underline-offset-4">Let’s talk about your smile.</a></p>
      </div>
    </section>
  )
}
