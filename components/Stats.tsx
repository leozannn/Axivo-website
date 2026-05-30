'use client'
import { useState, useEffect, useRef } from 'react'
import { useLang } from '@/lib/LanguageContext'
import { useIsMobile } from '@/lib/useIsMobile'
import AnimatedSection from '@/components/AnimatedSection'
import { useInView } from 'framer-motion'

const statsData = [
  { value: 6, suffix: '+', label: { it: 'Aree di servizio', en: 'Service areas' } },
  { value: 4, suffix: '', label: { it: 'Tipologie di clienti', en: 'Client profiles' } },
]

function useCountUp(end: number, duration: number, started: boolean): number {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let startTime: number | null = null
    let rafId: number
    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) rafId = requestAnimationFrame(step)
    }
    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [end, duration, started])
  return count
}

function StatItem({
  value,
  suffix,
  label,
  started,
  delay,
  isMobile,
}: {
  value: number
  suffix: string
  label: string
  started: boolean
  delay: number
  isMobile: boolean
}) {
  const count = useCountUp(value, 2000, isMobile ? true : started)

  const inner = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div
        style={{
          color: '#00C8FF',
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(3rem, 7vw, 5rem)',
        }}
      >
        {count}<span>{suffix}</span>
      </div>
      <div
        style={{
          margin: '16px 0',
          height: '1px',
          width: '80px',
          background: 'linear-gradient(90deg, transparent, #00C8FF, transparent)',
        }}
      />
      <p
        style={{
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'rgba(10,14,26,0.65)',
          fontFamily: 'Space Grotesk, sans-serif',
        }}
      >
        {label}
      </p>
    </div>
  )

  if (isMobile) return inner

  return <AnimatedSection delay={delay}>{inner}</AnimatedSection>
}

export default function Stats() {
  const { lang } = useLang()
  const isMobile = useIsMobile()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#F5F7FA',
        borderTop: '1px solid rgba(0,200,255,0.08)',
        borderBottom: '1px solid rgba(0,200,255,0.08)',
      }}
      className="py-20 px-6"
    >
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-10 md:gap-20 justify-items-center">
          {statsData.map((stat, i) => (
            <StatItem
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label[lang]}
              started={inView}
              delay={i * 0.12}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
