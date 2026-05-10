'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import { fadeUp, fadeIn, staggerContainer } from '@/lib/animations'

export default function Equity() {
  const { lang } = useLang()
  const tr = translations.wfe

  const benefits = [
    { title: t(tr.b1, lang), sub: t(tr.b1sub, lang) },
    { title: t(tr.b2, lang), sub: t(tr.b2sub, lang) },
    { title: t(tr.b3, lang), sub: t(tr.b3sub, lang) },
  ]

  return (
    <motion.section
      id="equity"
      className="py-24 px-6"
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

          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {t(tr.title, lang)}
          </motion.h2>

          <motion.div variants={fadeUp} className="separator-cyan mb-6" style={{ maxWidth: '200px' }} />

          <motion.p variants={fadeUp} className="text-base mb-12 max-w-xl" style={{ color: '#94A3B8', lineHeight: 1.7 }}>
            {t(tr.subtitle, lang)}
          </motion.p>

          {/* Split layout */}
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {/* Left */}
            <div>
              <div className="flex gap-4 items-start mb-8">
                <motion.div variants={fadeUp} className="glass-card rounded-xl p-5 flex-1">
                  <div className="text-xs font-bold mb-2" style={{ color: '#00C8FF', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t(tr.cashTitle, lang)}</div>
                  <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.6 }}>{t(tr.cashText, lang)}</p>
                </motion.div>
                <div className="flex items-center text-2xl font-bold mt-6" style={{ color: '#00C8FF' }}>+</div>
                <motion.div variants={fadeUp} className="glass-card rounded-xl p-5 flex-1">
                  <div className="text-xs font-bold mb-2" style={{ color: '#00C8FF', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t(tr.equityTitle, lang)}</div>
                  <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.6 }}>{t(tr.equityText, lang)}</p>
                </motion.div>
              </div>

              <div className="flex flex-col gap-4">
                {benefits.map((b) => (
                  <motion.div key={b.title} variants={fadeUp} className="flex gap-4 items-start">
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
              <div className="text-xs font-semibold px-4 pt-4 pb-2" style={{ color: '#00C8FF', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {t(tr.whyTitle, lang)}
              </div>
              <div className="grid grid-cols-2">
                <div className="p-4 text-sm font-semibold" style={{ color: '#94A3B8', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
                  {t(tr.col1, lang)}
                </div>
                <div className="p-4 text-sm font-semibold" style={{ color: '#00C8FF', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,200,255,0.05)' }}>
                  {t(tr.col2, lang)}
                </div>
                {tr.rows.map((row, i) => (
                  <React.Fragment key={i}>
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 text-sm"
                      style={{ color: '#64748B', borderBottom: i < tr.rows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                    >
                      {t(row.left, lang)}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 text-sm font-medium"
                      style={{ color: '#E2E8F0', borderBottom: i < tr.rows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', background: 'rgba(0,200,255,0.02)' }}
                    >
                      {t(row.right, lang)}
                    </motion.div>
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Distinction box */}
          <motion.div
            variants={fadeUp}
            className="rounded-xl p-8 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(0,200,255,0.15), rgba(0,200,255,0.05))', border: '1px solid rgba(0,200,255,0.35)' }}
          >
            <div className="text-xs font-semibold mb-3" style={{ color: '#00C8FF', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {t(tr.distLabel, lang)}
            </div>
            <p className="text-lg font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#fff', lineHeight: 1.6 }}>{t(tr.distText, lang)}</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
