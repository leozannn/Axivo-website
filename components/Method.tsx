'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import { fadeUp, fadeIn, staggerContainer } from '@/lib/animations'

export default function Method() {
  const { lang } = useLang()
  const tr = translations.method
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const handleClick = (i: number) => {
    setActiveStep(activeStep === i ? null : i)
  }

  return (
    <motion.section
      id="metodo"
      className="py-24 px-6"
      style={{ background: '#F8F9FA' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={fadeUp} className="mb-3">
            <span style={{ color: '#00C8FF', fontSize: '0.7rem', letterSpacing: '0.15em', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, textTransform: 'uppercase' }}>
              {t(tr.tag, lang)}
            </span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#1A1A2E' }}>
            {t(tr.title, lang)}
          </motion.h2>

          <motion.div variants={fadeUp} className="separator-cyan mb-6" style={{ maxWidth: '200px' }} />

          <motion.p variants={fadeUp} className="text-base mb-12 max-w-xl" style={{ color: '#64748B', lineHeight: 1.7 }}>
            {t(tr.subtitle, lang)}
          </motion.p>

          {/* Desktop: riga + pannello accordion | Mobile: accordion verticale per card */}
          <div className="flex flex-col gap-0 mb-8">

            {/* Desktop grid — visibile da md in su */}
            <div className="hidden md:grid md:grid-cols-5 gap-4">
              {tr.steps.map((step, i) => (
                <motion.button
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  onClick={() => handleClick(i)}
                  className="text-left rounded-xl p-5 transition-colors duration-200"
                  style={{
                    background: activeStep === i ? '#1A1A2E' : '#fff',
                    border: activeStep === i ? '2px solid #00C8FF' : '2px solid #E2E8F0',
                    boxShadow: activeStep === i ? '0 4px 24px rgba(0,200,255,0.2)' : 'none',
                  }}
                >
                  <div className="text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: activeStep === i ? '#00C8FF' : '#CBD5E1' }}>
                    {step.num}
                  </div>
                  <div className="font-semibold text-sm mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif', color: activeStep === i ? '#fff' : '#1A1A2E' }}>
                    {t(step.title, lang)}
                  </div>
                  <motion.div
                    animate={{ rotate: activeStep === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: '#00C8FF', fontSize: '1rem', lineHeight: 1 }}
                  >
                    ↓
                  </motion.div>
                </motion.button>
              ))}
            </div>

            {/* Pannello dettaglio desktop — sotto tutta la riga */}
            <div className="hidden md:block">
              <AnimatePresence mode="wait">
                {activeStep !== null && (
                  <motion.div
                    key={`${activeStep}-${lang}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-8 rounded-xl" style={{ background: '#1A1A2E', border: '1px solid rgba(0,200,255,0.3)' }}>
                      <div className="flex items-start gap-6">
                        <span className="text-4xl font-bold shrink-0" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#00C8FF' }}>
                          {tr.steps[activeStep].num}
                        </span>
                        <div>
                          <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#fff' }}>
                            {t(tr.steps[activeStep].title, lang)}
                          </h3>
                          <p className="text-base" style={{ color: '#94A3B8', lineHeight: 1.7 }}>
                            {t(tr.steps[activeStep].text, lang)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile: accordion verticale */}
            <div className="flex flex-col gap-3 md:hidden">
              {tr.steps.map((step, i) => (
                <div key={step.num}>
                  <button
                    onClick={() => handleClick(i)}
                    className="w-full text-left rounded-xl p-5 transition-colors duration-200"
                    style={{
                      background: activeStep === i ? '#1A1A2E' : '#fff',
                      border: activeStep === i ? '2px solid #00C8FF' : '2px solid #E2E8F0',
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: activeStep === i ? '#00C8FF' : '#CBD5E1' }}>
                          {step.num}
                        </span>
                        <span className="font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif', color: activeStep === i ? '#fff' : '#1A1A2E' }}>
                          {t(step.title, lang)}
                        </span>
                      </div>
                      <motion.span
                        animate={{ rotate: activeStep === i ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ color: '#00C8FF' }}
                      >
                        ↓
                      </motion.span>
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeStep === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 rounded-b-xl" style={{ background: '#1A1A2E', border: '1px solid rgba(0,200,255,0.3)', borderTop: 'none' }}>
                          <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.7 }}>
                            {t(step.text, lang)}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Governance */}
          <motion.div variants={fadeUp} className="rounded-xl p-6" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
            <div className="text-xs font-semibold mb-2" style={{ color: '#00C8FF', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {t(tr.govLabel, lang)}
            </div>
            <p className="text-sm" style={{ color: '#64748B', lineHeight: 1.7 }}>{t(tr.govText, lang)}</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
