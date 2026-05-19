'use client'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import AnimatedSection from '@/components/AnimatedSection'

export default function EquitySteps() {
  const { lang } = useLang()
  const tr = translations.wfe

  return (
    <section
      id="equity-steps"
      className="py-16 px-4 md:py-24 md:px-6"
      style={{ backgroundColor: '#0A0E1A' }}
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={0.1}>
          <span
            style={{
              color: '#00C8FF',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            {t(tr.stepsTag, lang)}
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 mt-3"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff' }}
          >
            {t(tr.stepsTitle, lang)}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="separator-cyan mb-6" style={{ maxWidth: '200px' }} />
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <p className="text-base mb-12 max-w-xl" style={{ color: '#94A3B8', lineHeight: 1.7 }}>
            {t(tr.stepsSub, lang)}
          </p>
        </AnimatedSection>

        {/* Vertical timeline */}
        <div style={{ width: '100%', maxWidth: '672px', marginBottom: '40px' }}>
          {tr.wfeSteps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.15}>
              <div style={{ display: 'flex', gap: '24px' }}>
                {/* Left: number circle + connector */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: '2px solid #00C8FF',
                      color: '#00C8FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      background: 'transparent',
                    }}
                  >
                    {step.num}
                  </div>
                  {i < tr.wfeSteps.length - 1 && (
                    <div
                      style={{
                        width: '1px',
                        flex: 1,
                        margin: '8px 0',
                        background: 'linear-gradient(180deg, #00C8FF, rgba(0,200,255,0.15))',
                      }}
                    />
                  )}
                </div>
                {/* Right: content */}
                <div style={{ paddingBottom: '32px', flex: 1 }}>
                  <h3
                    className="font-semibold text-base mb-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff' }}
                  >
                    {t(step.title, lang)}
                  </h3>
                  <p style={{ color: '#94A3B8', lineHeight: 1.6, fontSize: '0.875rem' }}>
                    {t(step.text, lang)}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Contract perimeter */}
        <AnimatedSection delay={0.2}>
          <div
            className="rounded-xl p-6"
            style={{ background: 'rgba(0,200,255,0.06)', border: '1px solid rgba(0,200,255,0.25)' }}
          >
            <div
              style={{
                color: '#00C8FF',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              {t(tr.contractLabel, lang)}
            </div>
            <p style={{ color: '#94A3B8', lineHeight: 1.7, fontSize: '0.875rem' }}>
              {t(tr.contractText, lang)}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
