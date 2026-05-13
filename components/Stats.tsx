'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/lib/LanguageContext'
import { useIsMobile } from '@/lib/useIsMobile'

const statsData = [
  { value: 6, suffix: '+', label: { it: 'Aree di servizio', en: 'Service areas' } },
  { value: 4, suffix: '', label: { it: 'Tipologie di clienti', en: 'Client profiles' } },
  { value: 5, suffix: '', label: { it: 'Fasi operative', en: 'Operating phases' } },
  { value: 3, suffix: '', label: { it: 'Trigger di liquidità', en: 'Liquidity triggers' } },
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
  const count = useCountUp(value, 2000, started)

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      animate={isMobile ? { opacity: 1, y: 0 } : { opacity: started ? 1 : 0, y: started ? 0 : 30 }}
      transition={{ duration: 0.6, delay: isMobile ? 0 : delay }}
    >
      <div className="text-5xl md:text-6xl font-bold" style={{ color: '#00C8FF', fontFamily: 'Space Grotesk, sans-serif' }}>
        {count}<span>{suffix}</span>
      </div>
      <motion.div
        className="my-4 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #00C8FF, transparent)',
          width: '80px',
          transformOrigin: 'left',
        }}
        animate={isMobile ? { scaleX: 1 } : { scaleX: started ? 1 : 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: isMobile ? 0 : delay + 0.4 }}
      />
      <p className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Space Grotesk, sans-serif' }}>
        {label}
      </p>
    </motion.div>
  )
}

export default function Stats() {
  const { lang } = useLang()
  const isMobile = useIsMobile()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-20 px-6"
      style={{
        background: '#0F1628',
        borderTop: '1px solid rgba(0,200,255,0.08)',
        borderBottom: '1px solid rgba(0,200,255,0.08)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
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
