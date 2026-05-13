'use client'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import { fadeUp, fadeIn, staggerContainer } from '@/lib/animations'
import { useIsMobile } from '@/lib/useIsMobile'

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

export default function Services() {
  const { lang } = useLang()
  const isMobile = useIsMobile()
  const tr = translations.services

  const cards = [
    { num: '01', title: t(tr.s1title, lang), text: t(tr.s1text, lang) },
    { num: '02', title: t(tr.s2title, lang), text: t(tr.s2text, lang) },
    { num: '03', title: t(tr.s3title, lang), text: t(tr.s3text, lang) },
    { num: '04', title: t(tr.s4title, lang), text: t(tr.s4text, lang) },
    { num: '05', title: t(tr.s5title, lang), text: t(tr.s5text, lang) },
    { num: '06', title: t(tr.s6title, lang), text: t(tr.s6text, lang) },
    { num: '07', title: t(tr.s7title, lang), text: t(tr.s7text, lang) },
  ]

  return (
    <motion.section
      id="servizi"
      className="py-16 px-4 md:py-24 md:px-6"
      style={{ background: '#0A0E1A' }}
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

          <motion.p variants={fadeUp} className="text-base mb-12 max-w-xl" style={{ color: '#94A3B8', lineHeight: 1.7 }}>
            {t(tr.subtitle, lang)}
          </motion.p>

          {/* First row: 4 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {cards.slice(0, 4).map((card, i) => (
              <motion.div
                key={card.num}
                initial={isMobile ? false : { opacity: 0, y: -40 }}
                whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: EASE }}
                whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(0,200,255,0.22), inset 0 0 0 1px rgba(0,200,255,0.4)' }}
                className="glass-card rounded-xl p-6 cursor-pointer relative overflow-hidden group"
              >
                <div
                  className="absolute top-0 left-0 w-24 h-24 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'rgba(0,200,255,0.1)', transform: 'translate(-2rem, -2rem)' }}
                />
                <span
                  className="text-sm font-mono font-bold block mb-4 transition-all duration-300 opacity-50 group-hover:opacity-100"
                  style={{ color: '#00C8FF' }}
                >
                  {card.num}
                </span>
                <h3 className="font-semibold text-base mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{card.title}</h3>
                <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.6 }}>{card.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Second row: 3 cards centered */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 lg:max-w-[75%] lg:mx-auto">
            {cards.slice(4).map((card, i) => (
              <motion.div
                key={card.num}
                initial={isMobile ? false : { opacity: 0, y: -40 }}
                whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: (i + 4) * 0.1, ease: EASE }}
                whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(0,200,255,0.22), inset 0 0 0 1px rgba(0,200,255,0.4)' }}
                className="glass-card rounded-xl p-6 cursor-pointer relative overflow-hidden group"
              >
                <div
                  className="absolute top-0 left-0 w-24 h-24 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'rgba(0,200,255,0.1)', transform: 'translate(-2rem, -2rem)' }}
                />
                <span
                  className="text-sm font-mono font-bold block mb-4 transition-all duration-300 opacity-50 group-hover:opacity-100"
                  style={{ color: '#00C8FF' }}
                >
                  {card.num}
                </span>
                <h3 className="font-semibold text-base mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{card.title}</h3>
                <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.6 }}>{card.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Output box */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 40 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
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
