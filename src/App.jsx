import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingButtons from './components/layout/FloatingButtons'
import MobileCTABar from './components/layout/MobileCTABar'
import Hero from './sections/Hero'
import About from './sections/About'
import WhyChooseUs from './sections/WhyChooseUs'
import LuxuryCars from './sections/LuxuryCars'
import GroupTravel from './sections/GroupTravel'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import CTAStrip from './sections/CTAStrip'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <LuxuryCars />
        <CTAStrip />
        <GroupTravel />
        <Services />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <MobileCTABar />
    </div>
  )
}
