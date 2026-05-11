'use client'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import { fadeUp, fadeIn, staggerContainer } from '@/lib/animations'

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

export default function Why() {
  const { lang } = useLang()
  const tr = translations.cta

  const concepts = [
    { title: t(tr.a1, lang), sub: t(tr.a1s, lang) },
    { title: t(tr.a2, lang), sub: t(tr.a2s, lang) },
    { title: t(tr.a3, lang), sub: t(tr.a3s, lang) },
  ]

  const nextSteps = [
    { num: '01', label: t(tr.step1, lang) },
    { num: '02', label: t(tr.step2, lang) },
    { num: '03', label: t(tr.step3, lang) },
  ]

  const headline = t(tr.title, lang)

  return (
    <motion.section
      id="perche-axivo"
      className="py-16 px-4 md:py-24 md:px-6"
      style={{ background: 'linear-gradient(135deg, #0A0E1A 0%, #0D1525 100%)' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif', whiteSpace: 'pre-line' }}
          >
            {headline}
          </motion.h2>

          <motion.p variants={fadeUp} className="text-base mb-12 max-w-xl" style={{ color: '#94A3B8', lineHeight: 1.7 }}>
            {t(tr.sub, lang)}
          </motion.p>

          {/* 3 concepts — alternate L/R */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {concepts.map((c, i) => {
              const fromLeft = i % 2 === 0
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: fromLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
                  whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0, 200, 255, 0.18)' }}
                  className="glass-card rounded-xl p-6 cursor-pointer"
                >
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#00C8FF' }}>
                    {c.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.6 }}>{c.sub}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Next steps */}
          <motion.div variants={fadeUp} className="text-xs font-semibold mb-8" style={{ color: '#00C8FF', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {t(tr.stepsTitle, lang)}
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 mb-12">
            {nextSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: EASE }}
                viewport={{ once: true }}
                className="flex gap-4 items-start flex-1"
              >
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ border: '2px solid #00C8FF', color: '#00C8FF', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {step.num}
                </div>
                <p className="text-sm pt-2" style={{ color: '#94A3B8', lineHeight: 1.6 }}>{step.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="text-center">
            <a href="#contatti" className="btn-glow shimmer-btn px-10 py-4 rounded-lg text-base font-semibold inline-block">
              {lang === 'it' ? 'Inizia ora' : 'Get started'}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
