'use client'
import { useEffect } from 'react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const isMobile = window.innerWidth < 768 ||
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isMobile) {
      document.documentElement.style.overflow = 'auto'
      document.documentElement.style.height = 'auto'
      document.documentElement.style.position = 'static'
      document.body.style.overflow = 'auto'
      document.body.style.height = 'auto'
      document.body.style.position = 'static'
      document.body.style.touchAction = 'pan-y'
      return
    }

    let lenis: any
    const init = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default
      lenis = new Lenis({ duration: 1.2, smoothWheel: true })
      const raf = (time: number) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }
    init()
    return () => lenis?.destroy()
  }, [])

  return <>{children}</>
}
