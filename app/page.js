import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import About from '@/components/About'
import Classes from '@/components/Classes'
import Trainers from '@/components/Trainers'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Classes />
      <Trainers />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
