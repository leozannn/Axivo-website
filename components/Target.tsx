'use client'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import { fadeUp, fadeIn, staggerContainer } from '@/lib/animations'

export default function Target() {
  const { lang } = useLang()
  const tr = translations.target

  const cards = [
    { num: '01', title: t(tr.t1title, lang), text: t(tr.t1text, lang) },
    { num: '02', title: t(tr.t2title, lang), text: t(tr.t2text, lang) },
    { num: '03', title: t(tr.t3title, lang), text: t(tr.t3text, lang) },
    { num: '04', title: t(tr.t4title, lang), text: t(tr.t4text, lang) },
  ]

  const tags = lang === 'it'
    ? ['POSIZIONAMENTO', 'PIANO INDUSTRIALE', 'GO-TO-MARKET', 'FUNDRAISING', 'BANDI R&D', 'PARTNER INDUSTRIALI']
    : ['POSITIONING', 'BUSINESS PLAN', 'GO-TO-MARKET', 'FUNDRAISING', 'R&D GRANTS', 'INDUSTRIAL PARTNERS']

  return (
    <motion.section
      id="target"
      className="py-24 px-6"
      style={{ background: '#0D1220' }}
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

          {/* 2x2 grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {cards.map((card, i) => (
              <motion.div
                key={card.num}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0, 200, 255, 0.18)' }}
                transition={{ duration: 0.25 }}
                className="glass-card rounded-xl p-6 flex gap-5 cursor-pointer"
              >
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ border: '2px solid #00C8FF', color: '#00C8FF', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {card.num}
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{card.title}</h3>
                  <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.6 }}>{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tags */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
            {tags.map((tag) => (
              <span key={tag} className="badge-cyan">{tag}</span>
            ))}
          </motion.div>

          {/* Common box */}
          <motion.div
            variants={fadeUp}
            className="rounded-xl p-6"
            style={{ background: 'rgba(0,200,255,0.06)', border: '1px solid rgba(0,200,255,0.25)' }}
          >
            <div className="text-xs font-semibold mb-2" style={{ color: '#00C8FF', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {t(tr.commonLabel, lang)}
            </div>
            <p className="text-base" style={{ color: '#E2E8F0', lineHeight: 1.7 }}>{t(tr.commonText, lang)}</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
