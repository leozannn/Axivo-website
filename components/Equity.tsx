'use client'
import React from 'react'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import AnimatedSection from '@/components/AnimatedSection'

export default function Equity() {
  const { lang } = useLang()
  const tr = translations.wfe

  const benefits = [
    { title: t(tr.b1, lang), sub: t(tr.b1sub, lang) },
    { title: t(tr.b2, lang), sub: t(tr.b2sub, lang) },
    { title: t(tr.b3, lang), sub: t(tr.b3sub, lang) },
  ]

  return (
    <section
      id="equity"
      className="py-16 px-4 md:py-24 md:px-6"
      style={{ backgroundColor: '#0F1628' }}
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
          <p className="text-base mb-10 md:mb-12 max-w-xl" style={{ color: '#94A3B8', lineHeight: 1.7 }}>
            {t(tr.subtitle, lang)}
          </p>
        </AnimatedSection>

        {/* Split layout — stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-10 md:mb-12">
          {/* Left column */}
          <div>
            {/* Cash + Equity cards */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch mb-8">
              <AnimatedSection delay={0.1} direction="left" style={{ flex: 1 }}>
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(0,200,255,0.15)',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      color: '#00C8FF',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}
                  >
                    {t(tr.cashTitle, lang)}
                  </div>
                  <p style={{ color: '#94A3B8', lineHeight: 1.6, fontSize: '0.875rem' }}>
                    {t(tr.cashText, lang)}
                  </p>
                </div>
              </AnimatedSection>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#00C8FF',
                  padding: '8px 4px',
                  flexShrink: 0,
                }}
              >
                +
              </div>

              <AnimatedSection delay={0.2} direction="right" style={{ flex: 1 }}>
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(0,200,255,0.15)',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      color: '#00C8FF',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}
                  >
                    {t(tr.equityTitle, lang)}
                  </div>
                  <p style={{ color: '#94A3B8', lineHeight: 1.6, fontSize: '0.875rem' }}>
                    {t(tr.equityText, lang)}
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Benefits */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {benefits.map((b, i) => (
                <AnimatedSection key={b.title} delay={0.2 + i * 0.1}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        flexShrink: 0,
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#00C8FF',
                        marginTop: '6px',
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          marginBottom: '4px',
                          color: '#ffffff',
                        }}
                      >
                        {b.title}
                      </div>
                      <p style={{ color: '#94A3B8', fontSize: '0.875rem' }}>{b.sub}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right: comparison table */}
          <AnimatedSection delay={0.3}>
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(0,200,255,0.15)',
              }}
            >
              <div
                style={{
                  color: '#00C8FF',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '16px 16px 8px',
                }}
              >
                {t(tr.whyTitle, lang)}
              </div>

              {/* Desktop 2-column grid */}
              <div className="hidden sm:grid grid-cols-2">
                <div
                  style={{
                    padding: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#94A3B8',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                >
                  {t(tr.col1, lang)}
                </div>
                <div
                  style={{
                    padding: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#00C8FF',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    background: 'rgba(0,200,255,0.05)',
                  }}
                >
                  {t(tr.col2, lang)}
                </div>
                {tr.rows.map((row, i) => (
                  <React.Fragment key={i}>
                    <div
                      style={{
                        padding: '12px',
                        fontSize: '0.75rem',
                        color: '#64748B',
                        borderBottom: i < tr.rows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}
                    >
                      {t(row.left, lang)}
                    </div>
                    <div
                      style={{
                        padding: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: '#E2E8F0',
                        borderBottom: i < tr.rows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                        background: 'rgba(0,200,255,0.02)',
                      }}
                    >
                      {t(row.right, lang)}
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* Mobile: vertical cards */}
              <div className="sm:hidden" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px' }}>
                {tr.rows.map((row, i) => (
                  <div
                    key={i}
                    style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div
                      style={{
                        padding: '12px 16px',
                        fontSize: '0.75rem',
                        color: 'rgba(255,255,255,0.45)',
                        background: 'rgba(255,255,255,0.03)',
                      }}
                    >
                      {t(row.left, lang)}
                    </div>
                    <div
                      style={{
                        padding: '12px 16px',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: '#E2E8F0',
                        background: 'rgba(0,200,255,0.06)',
                        borderTop: '1px solid rgba(0,200,255,0.15)',
                      }}
                    >
                      {t(row.right, lang)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Distinction box */}
        <AnimatedSection delay={0.2}>
          <div
            className="rounded-xl p-6 md:p-8 text-center"
            style={{
              border: '1px solid rgba(0,200,255,0.35)',
              background: 'linear-gradient(135deg, rgba(0,200,255,0.1), rgba(0,200,255,0.04))',
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
              {t(tr.distLabel, lang)}
            </div>
            <p
              className="text-base md:text-lg font-medium"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff', lineHeight: 1.6 }}
            >
              {t(tr.distText, lang)}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
