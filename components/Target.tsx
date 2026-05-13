'use client'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import { fadeUp, fadeIn, staggerContainer } from '@/lib/animations'

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

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
      className="py-16 px-4 md:py-24 md:px-6"
      style={{ background: '#0F1628' }}
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

          {/* 2x2 grid — alternate from left (0,2) and right (1,3) */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {cards.map((card, i) => {
              const fromLeft = i % 2 === 0
              return (
                <motion.div
                  key={card.num}
                  initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 24px 48px rgba(0, 200, 255, 0.18)',
                    borderColor: 'rgba(0,200,255,0.55)',
                  }}
                  className="glass-card rounded-xl p-6 flex gap-5 cursor-pointer relative group"
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ border: '2px solid #00C8FF', color: '#00C8FF', fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {card.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{card.title}</h3>
                    <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.6 }}>{card.text}</p>
                  </div>
                  {/* Arrow indicator on hover */}
                  <motion.span
                    className="absolute bottom-4 right-5 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: '#00C8FF' }}
                  >
                    →
                  </motion.span>
                </motion.div>
              )
            })}
          </div>

          {/* Tags — stagger one by one */}
          <div className="flex flex-wrap gap-3 mb-10">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                className="badge-cyan"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

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
