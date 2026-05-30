'use client'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import AnimatedSection from '@/components/AnimatedSection'

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

  const cardStyle = {
    background: 'rgba(10,14,26,0.04)',
    border: '1px solid rgba(10,14,26,0.12)',
    borderRadius: '12px',
    padding: '24px',
  }

  return (
    <section
      id="servizi"
      className="py-16 px-4 md:py-24 md:px-6"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={0.1}>
          <span className="ordinal">{t(tr.tag, lang)}</span>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 mt-3"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#0A0E1A' }}
          >
            {t(tr.title, lang)}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="separator-cyan mb-6" style={{ maxWidth: '200px' }} />
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <p className="text-base mb-12 max-w-xl" style={{ color: 'rgba(10,14,26,0.65)', lineHeight: 1.7 }}>
            {t(tr.subtitle, lang)}
          </p>
        </AnimatedSection>

        {/* All 7 cards — 1 col mobile, 2 col tablet, 4 col desktop for first row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {cards.slice(0, 4).map((card, i) => (
            <AnimatedSection key={card.num} delay={i * 0.08}>
              <div style={cardStyle}>
                <span
                  style={{
                    color: '#00C8FF',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    display: 'block',
                    marginBottom: '16px',
                    opacity: 0.7,
                  }}
                >
                  {card.num}
                </span>
                <h3
                  className="font-semibold text-base mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#0A0E1A' }}
                >
                  {card.title}
                </h3>
                <p style={{ color: 'rgba(10,14,26,0.65)', lineHeight: 1.6, fontSize: '0.875rem' }}>
                  {card.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10 lg:max-w-[50%] lg:mx-auto">
          {cards.slice(4).map((card, i) => (
            <AnimatedSection key={card.num} delay={(i + 4) * 0.08}>
              <div style={cardStyle}>
                <span
                  style={{
                    color: '#00C8FF',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    display: 'block',
                    marginBottom: '16px',
                    opacity: 0.7,
                  }}
                >
                  {card.num}
                </span>
                <h3
                  className="font-semibold text-base mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#0A0E1A' }}
                >
                  {card.title}
                </h3>
                <p style={{ color: 'rgba(10,14,26,0.65)', lineHeight: 1.6, fontSize: '0.875rem' }}>
                  {card.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Output box */}
        <AnimatedSection delay={0.3}>
          <div
            className="rounded-xl p-6"
            style={{ background: 'rgba(0,200,255,0.06)', border: '1px solid rgba(0,200,255,0.3)' }}
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
              {t(tr.outputLabel, lang)}
            </div>
            <p style={{ color: '#0A0E1A', lineHeight: 1.7, fontSize: '1rem' }}>
              {t(tr.outputText, lang)}
            </p>
            <p
              style={{
                color: 'rgba(10,14,26,0.65)',
                lineHeight: 1.7,
                fontSize: '0.875rem',
                marginTop: '16px',
                paddingLeft: '12px',
                borderLeft: '2px solid rgba(0,200,255,0.5)',
              }}
            >
              {t(tr.outputNote, lang)}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
