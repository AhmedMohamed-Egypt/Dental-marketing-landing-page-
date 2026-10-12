const stories = [
  { quote: '“I felt listened to from the moment I walked in. Everything was explained so clearly, and the whole visit felt genuinely calm.”', name: 'A patient story', context: 'On feeling at ease' },
  { quote: '“For the first time, I actually felt excited about taking care of my smile. Such a thoughtful experience from start to finish.”', name: 'A patient story', context: 'On a fresh start' },
  { quote: '“It’s the little things that make a difference. I never felt rushed, and I left feeling really good about the next steps.”', name: 'A patient story', context: 'On personal care' },
]

export default function Testimonials() {
  return (
    <section id="stories" className="bg-[#fffefa] py-24 md:py-32">
      <div className="page-container">
        <div className="text-center"><p className="eyebrow">KIND WORDS</p><h2 className="section-title mx-auto mt-5 max-w-[620px]">The feeling <em className="text-[#849b83]">stays with you.</em></h2><p className="mx-auto mt-5 max-w-[440px] text-[14px] leading-[1.7] text-[#657770]">A few illustrative stories of the experience we want every patient to have.</p></div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {stories.map(story => <blockquote key={story.context} className="flex min-h-[300px] flex-col rounded-[18px] border border-[#e7ebe4] bg-[#f7f8f4] p-8 lg:p-9">
            <span className="font-display text-[52px] leading-[0.7] text-[#a5bba5]" aria-hidden="true">“</span>
            <p className="mt-9 font-display text-[24px] leading-[1.27] tracking-[-0.02em] text-[#193f3c] lg:text-[27px]">{story.quote}</p>
            <footer className="mt-auto border-t border-[#dce5da] pt-6 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#537166]">{story.name}<span className="mt-1 block font-normal normal-case tracking-normal text-[#849489]">{story.context}</span></footer>
          </blockquote>)}
        </div>
      </div>
    </section>
  )
}
