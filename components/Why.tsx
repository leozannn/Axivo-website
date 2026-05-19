'use client'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import AnimatedSection from '@/components/AnimatedSection'

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
    <section
      id="perche-axivo"
      className="py-16 px-4 md:py-24 md:px-6"
      style={{ backgroundColor: '#0F1628' }}
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={0.1}>
          <h2
            className="text-3xl md:text-6xl font-bold mb-6"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#ffffff',
              whiteSpace: 'pre-line',
            }}
          >
            {headline}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-base mb-12 max-w-xl" style={{ color: '#94A3B8', lineHeight: 1.7 }}>
            {t(tr.sub, lang)}
          </p>
        </AnimatedSection>

        {/* 3 concepts — 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {concepts.map((c, i) => (
            <AnimatedSection
              key={c.title}
              delay={i * 0.12}
              direction={i % 2 === 0 ? 'left' : 'right'}
            >
              <div
                className="rounded-xl p-6"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(0,200,255,0.15)',
                  height: '100%',
                }}
              >
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#00C8FF' }}
                >
                  {c.title}
                </h3>
                <p style={{ color: '#94A3B8', lineHeight: 1.6, fontSize: '0.875rem' }}>
                  {c.sub}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Next steps label */}
        <AnimatedSection delay={0.15}>
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#00C8FF',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}
          >
            {t(tr.stepsTitle, lang)}
          </div>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {nextSteps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.15} style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
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
                  }}
                >
                  {step.num}
                </div>
                <p style={{ color: '#94A3B8', lineHeight: 1.6, fontSize: '0.875rem', paddingTop: '8px' }}>
                  {step.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div style={{ textAlign: 'center' }}>
            <a
              href="#contatti"
              className="btn-glow shimmer-btn px-10 py-4 rounded-lg text-base font-semibold inline-block"
            >
              {lang === 'it' ? 'Inizia ora' : 'Get started'}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
