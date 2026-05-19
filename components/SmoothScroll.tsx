'use client'
import { useEffect } from 'react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const isMobile =
      window.innerWidth < 768 ||
      /iPhone|iPad|iPod|Android|webOS|BlackBerry/i.test(navigator.userAgent)

    if (isMobile) {
      document.documentElement.style.cssText =
        'overflow-x:hidden;overflow-y:auto;height:auto;position:static;background-color:#0A0E1A;'
      document.body.style.cssText =
        'overflow-x:hidden;overflow-y:auto;height:auto;position:static;touch-action:pan-y;-webkit-overflow-scrolling:touch;background-color:#0A0E1A;color:#ffffff;'
      return
    }

    let animId: number
    let lenis: any
    const init = async () => {
      try {
        const Lenis = (await import('@studio-freight/lenis')).default
        lenis = new Lenis({ duration: 1.2, smoothWheel: true })
        const raf = (t: number) => {
          lenis.raf(t)
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
