export default function About() {
  return (
    <section id="about" className="scroll-mt-8 bg-[#f1f4ee] py-24 md:py-32">
      <div className="page-container grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="relative">
          <div className="aspect-[1.08] overflow-hidden rounded-[180px_180px_14px_14px] bg-[#dae6de] sm:aspect-[1.25] lg:aspect-[0.95]"><img src="/images/dental-studio.jpg" alt="Bright, modern dental treatment room" className="h-full w-full object-cover" loading="lazy" /></div>
          <div className="absolute -bottom-6 right-4 rounded-[16px] bg-[#193f3c] px-7 py-6 text-white shadow-xl sm:right-[-25px]">
            <span className="font-display text-[34px] italic leading-none">A space to exhale.</span>
          </div>
        </div>
        <div className="pt-10 lg:pt-0">
          <p className="eyebrow">WELCOME TO SEREIN</p>
          <h2 className="section-title mt-5">A fresh perspective on <em className="text-[#849b83]">feeling good.</em></h2>
          <p className="mt-8 text-[16px] leading-[1.85] text-[#566c62]">We believe a visit to the dentist can be something you look forward to. At Serein, everything is designed around you — from the way we listen to the way we care.</p>
          <p className="mt-5 text-[15px] leading-[1.85] text-[#657970]">Our calm, welcoming space and thoughtful approach make room for real conversations, clear options, and care that meets you where you are.</p>
          <a href="#why-us" className="mt-9 inline-flex items-center gap-5 border-b border-[#193f3c] pb-2 text-[13px] font-semibold text-[#193f3c]">Get to know us <span className="text-lg">↗</span></a>
        </div>
      </div>
    </section>
  )
}
