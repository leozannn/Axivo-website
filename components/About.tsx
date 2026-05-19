'use client'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import AnimatedSection from '@/components/AnimatedSection'

export default function About() {
  const { lang } = useLang()
  const tr = translations.about

  const props = [
    { num: '01', title: t(tr.p1title, lang), text: t(tr.p1text, lang) },
    { num: '02', title: t(tr.p2title, lang), text: t(tr.p2text, lang) },
    { num: '03', title: t(tr.p3title, lang), text: t(tr.p3text, lang) },
  ]

  return (
    <section
      id="chi-siamo"
      className="py-16 px-4 md:py-24 md:px-6"
      style={{ backgroundColor: '#0A0E1A' }}
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={0.1}>
          <span className="ordinal">{t(tr.tag, lang)}</span>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 mt-3"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff' }}
          >
            {t(tr.title, lang)}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="separator-cyan mb-8" style={{ maxWidth: '200px' }} />
        </AnimatedSection>

        {/* Value proposition box */}
        <AnimatedSection delay={0.25} style={{ maxWidth: '760px', marginBottom: '16px' }}>
          <div
            className="rounded-xl p-6"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(0,200,255,0.2)',
            }}
          >
            <div
              style={{
                color: '#00C8FF',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              {t(tr.vpLabel, lang)}
            </div>
            <p style={{ color: '#E2E8F0', lineHeight: 1.7, marginBottom: '12px', fontSize: '1rem' }}>
              {t(tr.vpText, lang)}
            </p>
            <p style={{ color: '#94A3B8', lineHeight: 1.7, fontSize: '0.875rem' }}>
              {t(tr.vpSub, lang)}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-base mb-12 max-w-xl" style={{ color: '#94A3B8' }}>
            {t(tr.subtitle, lang)}
          </p>
        </AnimatedSection>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {props.map((p, i) => (
            <AnimatedSection key={p.num} delay={0.1 + i * 0.15}>
              <div
                className="rounded-xl p-6"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(0,200,255,0.15)',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    marginBottom: '16px',
                    color: 'rgba(0,200,255,0.15)',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  {p.num}
                </div>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff' }}
                >
                  {p.title}
                </h3>
                <p style={{ color: '#94A3B8', lineHeight: 1.6, fontSize: '0.875rem' }}>
                  {p.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Mission */}
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
              {t(tr.missionLabel, lang)}
            </div>
            <p style={{ color: '#E2E8F0', lineHeight: 1.7, fontSize: '1rem' }}>
              {t(tr.missionText, lang)}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
