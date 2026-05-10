'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Target from '@/components/Target'
import Services from '@/components/Services'
import Method from '@/components/Method'
import Equity from '@/components/Equity'
import EquitySteps from '@/components/EquitySteps'
import Why from '@/components/Why'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      <Navbar />
      <Hero />
      <About />
      <Target />
      <Services />
      <Method />
      <Equity />
      <EquitySteps />
      <Why />
      <Contact />
    </main>
  )
}
