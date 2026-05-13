'use client'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import { fadeUp, fadeIn, staggerContainer } from '@/lib/animations'
import { useIsMobile } from '@/lib/useIsMobile'

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

export default function EquitySteps() {
  const { lang } = useLang()
  const isMobile = useIsMobile()
  const tr = translations.wfe

  return (
    <motion.section
      id="equity-steps"
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
            <span style={{ color: '#00C8FF', fontSize: '0.7rem', letterSpacing: '0.15em', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, textTransform: 'uppercase' }}>
              {t(tr.stepsTag, lang)}
            </span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#FFFFFF' }}>
            {t(tr.stepsTitle, lang)}
          </motion.h2>

          <motion.div variants={fadeUp} className="separator-cyan mb-6" style={{ maxWidth: '200px' }} />

          <motion.p variants={fadeUp} className="text-base mb-12 max-w-xl" style={{ color: '#94A3B8', lineHeight: 1.7 }}>
            {t(tr.stepsSub, lang)}
          </motion.p>

          {/* Vertical timeline */}
          <div className="w-full md:max-w-2xl mb-10">
            {tr.wfeSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.25, ease: EASE }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      border: '2px solid #00C8FF',
                      color: '#00C8FF',
                      fontFamily: 'Space Grotesk, sans-serif',
                      background: 'transparent',
                    }}
                    initial={isMobile ? false : { boxShadow: '0 0 0 0px rgba(0,200,255,0)' }}
                    whileInView={isMobile ? undefined : { boxShadow: '0 0 0 4px rgba(0,200,255,0.18), 0 0 16px rgba(0,200,255,0.2)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.25 + 0.15 }}
                  >
                    {step.num}
                  </motion.div>

                  {i < tr.wfeSteps.length - 1 && (
                    <motion.div
                      className="w-px flex-1 my-2"
                      style={{
                        background: 'linear-gradient(180deg, #00C8FF, rgba(0,200,255,0.15))',
                        transformOrigin: 'top',
                      }}
                      initial={isMobile ? false : { scaleY: 0 }}
                      whileInView={isMobile ? undefined : { scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.25 + 0.3, ease: EASE }}
                    />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-base mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#FFFFFF' }}>
                    {t(step.title, lang)}
                  </h3>
                  <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.6 }}>{t(step.text, lang)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contract perimeter */}
          <motion.div variants={fadeUp} className="rounded-xl p-6" style={{ background: 'rgba(0,200,255,0.06)', border: '1px solid rgba(0,200,255,0.25)' }}>
            <div className="text-xs font-semibold mb-2" style={{ color: '#00C8FF', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {t(tr.contractLabel, lang)}
            </div>
            <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.7 }}>{t(tr.contractText, lang)}</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
