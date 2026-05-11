'use client'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Forza sempre scroll a top al caricamento
    window.scrollTo(0, 0)

    // Su mobile disabilita Lenis — lo scroll nativo è più fluido e performante
    if (window.innerWidth < 768) return

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
    })

    // Forza scroll a top anche via Lenis per evitare posizioni ripristinate
    lenis.scrollTo(0, { immediate: true })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
