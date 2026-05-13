'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import { fadeUp, fadeIn, staggerContainer } from '@/lib/animations'
import { useIsMobile } from '@/lib/useIsMobile'

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

export default function Equity() {
  const { lang } = useLang()
  const isMobile = useIsMobile()
  const tr = translations.wfe

  const benefits = [
    { title: t(tr.b1, lang), sub: t(tr.b1sub, lang) },
    { title: t(tr.b2, lang), sub: t(tr.b2sub, lang) },
    { title: t(tr.b3, lang), sub: t(tr.b3sub, lang) },
  ]

  return (
    <motion.section
      id="equity"
      className="py-16 px-4 md:py-24 md:px-6"
      style={{ background: '#0F1628' }}
      initial={isMobile ? "visible" : "hidden"}
      whileInView={isMobile ? undefined : "visible"}
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={staggerContainer} initial={isMobile ? "visible" : "hidden"} whileInView={isMobile ? undefined : "visible"} viewport={{ once: true }}>
          <motion.div variants={fadeUp} className="mb-3">
            <span className="ordinal">{t(tr.tag, lang)}</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {t(tr.title, lang)}
          </motion.h2>

          <motion.div variants={fadeUp} className="separator-cyan mb-6" style={{ maxWidth: '200px' }} />

          <motion.p variants={fadeUp} className="text-base mb-10 md:mb-12 max-w-xl" style={{ color: '#94A3B8', lineHeight: 1.7 }}>
            {t(tr.subtitle, lang)}
          </motion.p>

          {/* Split layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-10 md:mb-12">
            {/* Left */}
            <div>
              {/* Cash + Equity cards — stacked on mobile, side-by-side on desktop */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch mb-8">
                <motion.div
                  initial={isMobile ? false : { opacity: 0, x: -60 }}
                  whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="glass-card rounded-xl p-5 flex-1"
                >
                  <div
                    className="text-xs font-bold mb-2"
                    style={{ color: '#00C8FF', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                  >
                    {t(tr.cashTitle, lang)}
                  </div>
                  <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.6 }}>{t(tr.cashText, lang)}</p>
                </motion.div>

                {/* Pulsing + symbol */}
                <motion.div
                  className="flex sm:flex-col items-center justify-center text-2xl font-bold py-2 sm:py-0 sm:mt-6 shrink-0"
                  style={{ color: '#00C8FF' }}
                  animate={isMobile ? {} : { scale: [1, 1.2, 1], rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 3, repeat: isMobile ? 0 : Infinity, ease: 'easeInOut' }}
                >
                  +
                </motion.div>

                <motion.div
                  initial={isMobile ? false : { opacity: 0, x: 60 }}
                  whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="glass-card rounded-xl p-5 flex-1"
                >
                  <div
                    className="text-xs font-bold mb-2"
                    style={{ color: '#00C8FF', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                  >
                    {t(tr.equityTitle, lang)}
                  </div>
                  <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.6 }}>{t(tr.equityText, lang)}</p>
                </motion.div>
              </div>

              {/* 3 benefits — stagger from below */}
              <div className="flex flex-col gap-4">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.title}
                    initial={isMobile ? false : { opacity: 0, y: 24 }}
                    whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.2 + i * 0.13, ease: EASE }}
                    className="flex gap-4 items-start"
                  >
                    <div className="shrink-0 w-2 h-2 rounded-full mt-2" style={{ background: '#00C8FF' }} />
                    <div>
                      <div className="font-semibold text-sm mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{b.title}</div>
                      <p className="text-sm" style={{ color: '#94A3B8' }}>{b.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: comparison table */}
            <motion.div variants={fadeUp} className="glass-card rounded-xl overflow-hidden">
              <div
                className="text-xs font-semibold px-4 pt-4 pb-2"
                style={{ color: '#00C8FF', letterSpacing: '0.12em', textTransform: 'uppercase' }}
              >
                {t(tr.whyTitle, lang)}
              </div>

              {/* Desktop 2-column grid */}
              <div className="hidden sm:grid grid-cols-2 relative">
                <motion.div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    width: '1px',
                    height: '100%',
                    background: 'linear-gradient(180deg, transparent, rgba(0,200,255,0.4), transparent)',
                    transformOrigin: 'top',
                    pointerEvents: 'none',
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                />
                <div
                  className="p-3 text-xs font-semibold"
                  style={{ color: '#94A3B8', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}
                >
                  {t(tr.col1, lang)}
                </div>
                <div
                  className="p-3 text-xs font-semibold"
                  style={{ color: '#00C8FF', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,200,255,0.05)' }}
                >
                  {t(tr.col2, lang)}
                </div>
                {tr.rows.map((row, i) => (
                  <React.Fragment key={i}>
                    <motion.div
                      initial={isMobile ? false : { opacity: 0, x: -40 }}
                      whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="p-3 text-xs"
                      style={{
                        color: '#64748B',
                        borderBottom: i < tr.rows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}
                    >
                      {t(row.left, lang)}
                    </motion.div>
                    <motion.div
                      initial={isMobile ? false : { opacity: 0, x: 40 }}
                      whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 + 0.05 }}
                      viewport={{ once: true }}
                      className="p-3 text-xs font-medium"
                      style={{
                        color: '#E2E8F0',
                        borderBottom: i < tr.rows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                        background: 'rgba(0,200,255,0.02)',
                      }}
                    >
                      {t(row.right, lang)}
                    </motion.div>
                  </React.Fragment>
                ))}
              </div>

              {/* Mobile: vertical cards */}
              <div className="sm:hidden flex flex-col gap-2 p-3">
                {tr.rows.map((row, i) => (
                  <motion.div
                    key={i}
                    initial={isMobile ? false : { opacity: 0, y: 16 }}
                    whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
                    className="rounded-xl overflow-hidden"
                    style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div className="px-4 py-3 text-xs" style={{ color: 'rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.03)' }}>
                      {t(row.left, lang)}
                    </div>
                    <div
                      className="px-4 py-3 text-xs font-medium"
                      style={{ color: '#E2E8F0', background: 'rgba(0,200,255,0.06)', borderTop: '1px solid rgba(0,200,255,0.15)' }}
                    >
                      {t(row.right, lang)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Distinction box — background fills from left */}
          <motion.div variants={fadeUp}>
            <div
              className="rounded-xl p-6 md:p-8 text-center relative overflow-hidden"
              style={{ border: '1px solid rgba(0,200,255,0.35)' }}
            >
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,200,255,0.15), rgba(0,200,255,0.05))',
                  transformOrigin: 'left',
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
              />
              <div className="relative z-10">
                <div
                  className="text-xs font-semibold mb-3"
                  style={{ color: '#00C8FF', letterSpacing: '0.12em', textTransform: 'uppercase' }}
                >
                  {t(tr.distLabel, lang)}
                </div>
                <p
                  className="text-base md:text-lg font-medium"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#fff', lineHeight: 1.6 }}
                >
                  {t(tr.distText, lang)}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
