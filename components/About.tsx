'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import { fadeUp, fadeIn, staggerContainer } from '@/lib/animations'
import { useIsMobile } from '@/lib/useIsMobile'

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

function AnimatedBorderBox({
  children,
  className,
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef, { once: true, margin: '-80px' })
  const [dims, setDims] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => setDims({ w: el.offsetWidth, h: el.offsetHeight })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    update()
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={className} style={{ ...style, position: 'relative' }}>
      {dims.w > 0 && (
        <svg
          width={dims.w}
          height={dims.h}
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}
        >
          <motion.rect
            x="1"
            y="1"
            width={dims.w - 2}
            height={dims.h - 2}
            rx="11"
            ry="11"
            fill="none"
            stroke="#00C8FF"
            strokeWidth="1.5"
            strokeOpacity="0.5"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.4 }}
          />
        </svg>
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}

export default function About() {
  const { lang } = useLang()
  const isMobile = useIsMobile()
  const tr = translations.about

  const props = [
    { num: '01', title: t(tr.p1title, lang), text: t(tr.p1text, lang) },
    { num: '02', title: t(tr.p2title, lang), text: t(tr.p2text, lang) },
    { num: '03', title: t(tr.p3title, lang), text: t(tr.p3text, lang) },
  ]

  return (
    <motion.section
      id="chi-siamo"
      className="py-16 px-4 md:py-24 md:px-6"
      style={{ background: '#0A0E1A' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={fadeUp} className="mb-3">
            <span className="ordinal">{t(tr.tag, lang)}</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {t(tr.title, lang)}
          </motion.h2>

          <motion.div variants={fadeUp} className="separator-cyan mb-8" style={{ maxWidth: '200px' }} />

          {/* Value proposition box with animated border */}
          <motion.div variants={fadeUp} className="mb-4" style={{ maxWidth: '760px' }}>
            <AnimatedBorderBox
              className="glass-card rounded-xl p-6"
              style={{ borderColor: 'transparent', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)' }}
            >
              <div
                className="text-xs font-semibold mb-3"
                style={{ color: '#00C8FF', letterSpacing: '0.12em', textTransform: 'uppercase' }}
              >
                {t(tr.vpLabel, lang)}
              </div>
              <p className="text-base mb-3" style={{ color: '#E2E8F0', lineHeight: 1.7 }}>
                {t(tr.vpText, lang)}
              </p>
              <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.7 }}>
                {t(tr.vpSub, lang)}
              </p>
            </AnimatedBorderBox>
          </motion.div>

          <motion.p variants={fadeUp} className="text-base mb-12 max-w-xl" style={{ color: '#94A3B8' }}>
            {t(tr.subtitle, lang)}
          </motion.p>

          {/* 3 columns — stagger from below */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {props.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: EASE }}
                whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0, 200, 255, 0.18)' }}
                className="glass-card rounded-xl p-6 cursor-pointer"
              >
                <div
                  className="text-4xl font-bold mb-4"
                  style={{ color: 'rgba(0,200,255,0.15)', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {p.num}
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {p.title}
                </h3>
                <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.6 }}>
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mission — pulsing */}
          <motion.div variants={fadeUp}>
            <motion.div
              className="rounded-xl p-6"
              style={{ background: 'rgba(0,200,255,0.06)', border: '1px solid rgba(0,200,255,0.25)' }}
              animate={isMobile ? {} : { scale: [1, 1.015, 1] }}
              transition={{ duration: 3, repeat: isMobile ? 0 : Infinity, ease: 'easeInOut' }}
            >
              <div
                className="text-xs font-semibold mb-2"
                style={{ color: '#00C8FF', letterSpacing: '0.12em', textTransform: 'uppercase' }}
              >
                {t(tr.missionLabel, lang)}
              </div>
              <p className="text-base" style={{ color: '#E2E8F0', lineHeight: 1.7 }}>
                {t(tr.missionText, lang)}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
