'use client'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import { fadeUp, fadeIn, staggerContainer } from '@/lib/animations'

export default function Services() {
  const { lang } = useLang()
  const tr = translations.services

  const cards = [
    { num: '01', title: t(tr.s1title, lang), text: t(tr.s1text, lang) },
    { num: '02', title: t(tr.s2title, lang), text: t(tr.s2text, lang) },
    { num: '03', title: t(tr.s3title, lang), text: t(tr.s3text, lang) },
    { num: '04', title: t(tr.s4title, lang), text: t(tr.s4text, lang) },
    { num: '05', title: t(tr.s5title, lang), text: t(tr.s5text, lang) },
    { num: '06', title: t(tr.s6title, lang), text: t(tr.s6text, lang) },
  ]

  return (
    <motion.section
      id="servizi"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {cards.map((card) => (
              <motion.div
                key={card.num}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0, 200, 255, 0.18)' }}
                transition={{ duration: 0.25 }}
                className="glass-card rounded-xl p-6 cursor-pointer"
              >
                <div className="text-3xl font-bold mb-4" style={{ color: 'rgba(0,200,255,0.2)', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {card.num}
                </div>
                <h3 className="font-semibold text-base mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{card.title}</h3>
                <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.6 }}>{card.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="rounded-xl p-6"
            style={{ background: 'rgba(0,200,255,0.06)', border: '1px solid rgba(0,200,255,0.3)' }}
          >
            <div className="text-xs font-semibold mb-2" style={{ color: '#00C8FF', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {t(tr.outputLabel, lang)}
            </div>
            <p className="text-base" style={{ color: '#E2E8F0', lineHeight: 1.7 }}>{t(tr.outputText, lang)}</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
