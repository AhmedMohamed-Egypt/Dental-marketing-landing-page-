import About from './components/About'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import GuideSection from './components/GuideSection'
import Hero from './components/Hero'
import ReliefSection from './components/ReliefSection'
import Services from './components/Services'
import SiteHeader from './components/SiteHeader'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'
import DifferenceSection from './components/DifferenceSection'

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ReliefSection/>
        <GuideSection/>
        <DifferenceSection/>
       
        <Contact />
      </main>
      <Footer />
    </>
  )
}
