'use client'
import { useState } from 'react'
import { MapPin, Globe, Mail, ExternalLink, X } from 'lucide-react'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import AnimatedSection from '@/components/AnimatedSection'

export default function Contact() {
  const { lang } = useLang()
  const tr = translations.contact
  const ftr = translations.footer
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mykrgqbq'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget as HTMLFormElement),
      })
      if (response.ok) {
        setSubmitted(true)
        setForm({ name: '', email: '', company: '', message: '' })
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const fields = [
    { field: 'name' as const, label: t(tr.name, lang), inputType: 'text' },
    { field: 'email' as const, label: t(tr.email, lang), inputType: 'email' },
    { field: 'company' as const, label: t(tr.company, lang), inputType: 'text' },
  ]

  const inputStyle = {
    width: '100%',
    borderRadius: '8px',
    padding: '12px 16px',
    fontSize: '0.875rem',
    outline: 'none',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#ffffff',
    minHeight: '48px',
    boxSizing: 'border-box' as const,
  }

  return (
    <>
    <section
      id="contatti"
      className="py-16 px-4 md:py-24 md:px-6"
      style={{ backgroundColor: '#0D1B2A' }}
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={0.1}>
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

        {/* Form + info — stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {submitted ? (
              <div
                className="rounded-xl p-8 text-center"
                style={{ background: 'rgba(0,200,255,0.08)', border: '1px solid rgba(0,200,255,0.3)' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>✓</div>
                <p style={{ color: '#00C8FF', fontWeight: 500 }}>{t(tr.sent, lang)}</p>
              </div>
            ) : (
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                <input type="hidden" name="_subject" value="Nuovo messaggio dal sito AXIVO Partners" />
                {fields.map(({ field, label, inputType }) => (
                  <input
                    key={field}
                    name={field}
                    type={inputType}
                    required
                    placeholder={label}
                    value={form[field]}
                    onChange={e => setForm(p => ({ ...p, [field]: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = '#00C8FF')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                ))}
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t(tr.message, lang)}
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  style={{
                    ...inputStyle,
                    resize: 'none',
                    minHeight: 'unset',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#00C8FF')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
                {error && (
                  <p style={{ color: '#FF6B6B', fontSize: '0.875rem' }}>
                    {lang === 'it'
                      ? "Si è verificato un errore nell'invio. Riprova o scrivici direttamente via email."
                      : 'Something went wrong sending your message. Please try again or email us directly.'}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-glow shimmer-btn py-3 rounded-lg text-sm font-semibold w-full"
                  style={{ marginTop: '8px', opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
                >
                  {submitting
                    ? (lang === 'it' ? 'Invio in corso...' : 'Sending...')
                    : t(tr.send, lang)}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <AnimatedSection delay={0.3} direction="right">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: '#00C8FF', marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
                    {t(ftr.address, lang)}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', marginTop: '4px', fontWeight: 500 }}>
                    {t(ftr.vat, lang)}
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Globe size={18} style={{ color: '#00C8FF', flexShrink: 0 }} />
                <a
                  href={`https://${t(ftr.website, lang)}`}
                  target="_blank"
                  rel="noopener"
                  style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00C8FF')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {t(ftr.website, lang)}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Mail size={18} style={{ color: '#00C8FF', flexShrink: 0 }} />
                <a
                  href={`mailto:${t(ftr.emailAddr, lang)}`}
                  style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00C8FF')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {t(ftr.emailAddr, lang)}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                {[ExternalLink, X].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#00C8FF'
                      e.currentTarget.style.background = 'rgba(0,200,255,0.08)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    <Icon size={16} style={{ color: '#94A3B8' }} />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Footer */}
        <div className="separator-cyan mt-16 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <img
            src="/axivo-logo.png"
            alt="AXIVO Partners"
            style={{ height: '72px', width: 'auto', objectFit: 'contain' }}
          />
          <p className="text-xs max-w-lg text-center md:text-left" style={{ color: '#475569', lineHeight: 1.6 }}>
            {t(ftr.disclaimer, lang)}
          </p>
          <p className="text-xs" style={{ color: '#475569' }}>
            {t(ftr.copyright, lang)}
          </p>
        </div>
      </div>
    </section>
    <div style={{
      backgroundColor: '#0A0E1A',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '32px',
      flexWrap: 'wrap',
      textAlign: 'center'
    }}>
      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
        © 2026 AXIVO Partners S.r.l. — P.IVA 05566100268
      </span>
      <a
        href="https://www.iubenda.com/privacy-policy/74011516"
        className="iubenda-white iubenda-noiframe iubenda-embed"
        title="Privacy Policy"
        style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', textDecoration: 'none' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>
      <a
        href="https://www.iubenda.com/privacy-policy/74011516/cookie-policy"
        className="iubenda-white iubenda-noiframe iubenda-embed"
        title="Cookie Policy"
        style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', textDecoration: 'none' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Cookie Policy
      </a>
    </div>
    </>
  )
}
