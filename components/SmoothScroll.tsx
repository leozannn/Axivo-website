'use client'
import { useEffect } from 'react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const isMobile =
      window.innerWidth < 768 ||
      /iPhone|iPad|iPod|Android|webOS|BlackBerry/i.test(navigator.userAgent)

    if (isMobile) {
      ;[document.documentElement, document.body].forEach(el => {
        el.style.cssText = ''
        el.style.overflowX = 'hidden'
        el.style.overflowY = 'auto'
        el.style.height = 'auto'
        el.style.position = 'static'
        el.style.touchAction = 'pan-y'
        ;(el.style as any).webkitOverflowScrolling = 'touch'
      })
      document.documentElement.style.backgroundColor = '#0A0E1A'
      document.body.style.backgroundColor = '#0A0E1A'
      return
    }

    let animId: number
    let lenis: any
    const init = async () => {
      try {
        const Lenis = (await import('@studio-freight/lenis')).default
        lenis = new Lenis({ duration: 1.2, smoothWheel: true })
        const raf = (time: number) => {
          lenis.raf(time)
          animId = requestAnimationFrame(raf)
        }
        animId = requestAnimationFrame(raf)
      } catch (e) {}
    }
    init()
    return () => {
      cancelAnimationFrame(animId)
      lenis?.destroy()
    }
  }, [])

  return <>{children}</>
}
