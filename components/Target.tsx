'use client'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import AnimatedSection from '@/components/AnimatedSection'

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
    <section
      id="target"
      className="py-16 px-4 md:py-24 md:px-6"
      style={{ backgroundColor: '#112236' }}
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
          <div className="separator-cyan mb-6" style={{ maxWidth: '200px' }} />
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <p className="text-base mb-12 max-w-xl" style={{ color: '#94A3B8', lineHeight: 1.7 }}>
            {t(tr.subtitle, lang)}
          </p>
        </AnimatedSection>

        {/* 2-column grid → 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {cards.map((card, i) => (
            <AnimatedSection
              key={card.num}
              delay={i * 0.1}
              direction={i % 2 === 0 ? 'left' : 'right'}
            >
              <div
                className="rounded-xl p-6"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(0,200,255,0.15)',
                  display: 'flex',
                  gap: '20px',
                }}
              >
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
                  {card.num}
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    className="font-semibold text-base mb-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff' }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ color: '#94A3B8', lineHeight: 1.6, fontSize: '0.875rem' }}>
                    {card.text}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tags */}
        <AnimatedSection delay={0.2}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
            {tags.map(tag => (
              <span key={tag} className="badge-cyan">{tag}</span>
            ))}
          </div>
        </AnimatedSection>

        {/* Common box */}
        <AnimatedSection delay={0.25}>
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
              {t(tr.commonLabel, lang)}
            </div>
            <p style={{ color: '#E2E8F0', lineHeight: 1.7, fontSize: '1rem' }}>
              {t(tr.commonText, lang)}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
