'use client'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Target from '@/components/Target'
import Services from '@/components/Services'
import Equity from '@/components/Equity'
import EquitySteps from '@/components/EquitySteps'
import Why from '@/components/Why'
import Contact from '@/components/Contact'

export default function Home() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  return (
    <main style={{ position: 'relative' }}>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Target />
      <Services />
      <Equity />
      <EquitySteps />
      <Why />
      <Contact />
    </main>
  )
}
