'use client'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import { fadeUp, fadeIn, staggerContainer } from '@/lib/animations'

export default function About() {
  const { lang } = useLang()
  const tr = translations.about

  const props = [
    { num: '01', title: t(tr.p1title, lang), text: t(tr.p1text, lang) },
    { num: '02', title: t(tr.p2title, lang), text: t(tr.p2text, lang) },
    { num: '03', title: t(tr.p3title, lang), text: t(tr.p3text, lang) },
  ]

  return (
    <motion.section
      id="chi-siamo"
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

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {t(tr.title, lang)}
          </motion.h2>

          <motion.div variants={fadeUp} className="separator-cyan mb-8" style={{ maxWidth: '200px' }} />

          {/* Value proposition box */}
          <motion.div
            variants={fadeUp}
            className="glass-card rounded-xl p-6 mb-4"
            style={{ borderColor: 'rgba(0,200,255,0.35)', maxWidth: '760px' }}
          >
            <div className="text-xs font-semibold mb-3" style={{ color: '#00C8FF', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {t(tr.vpLabel, lang)}
            </div>
            <p className="text-base mb-3" style={{ color: '#E2E8F0', lineHeight: 1.7 }}>{t(tr.vpText, lang)}</p>
            <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.7 }}>{t(tr.vpSub, lang)}</p>
          </motion.div>

          <motion.p variants={fadeUp} className="text-base mb-12 max-w-xl" style={{ color: '#94A3B8' }}>
            {t(tr.subtitle, lang)}
          </motion.p>

          {/* 3 columns */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {props.map((p, i) => (
              <motion.div
                key={p.num}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0, 200, 255, 0.18)' }}
                transition={{ duration: 0.25 }}
                className="glass-card rounded-xl p-6 cursor-pointer"
              >
                <div className="text-4xl font-bold mb-4" style={{ color: 'rgba(0,200,255,0.15)', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {p.num}
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{p.title}</h3>
                <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.6 }}>{p.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Mission */}
          <motion.div
            variants={fadeUp}
            className="rounded-xl p-6"
            style={{ background: 'rgba(0,200,255,0.06)', border: '1px solid rgba(0,200,255,0.25)' }}
          >
            <div className="text-xs font-semibold mb-2" style={{ color: '#00C8FF', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {t(tr.missionLabel, lang)}
            </div>
            <p className="text-base" style={{ color: '#E2E8F0', lineHeight: 1.7 }}>{t(tr.missionText, lang)}</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
