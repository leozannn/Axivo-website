'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Globe, Mail, ExternalLink, X } from 'lucide-react'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import { fadeUp, fadeIn, staggerContainer } from '@/lib/animations'

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

export default function Contact() {
  const { lang } = useLang()
  const tr = translations.contact
  const ftr = translations.footer
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const fields = [
    { field: 'name' as const, label: t(tr.name, lang), inputType: 'text' },
    { field: 'email' as const, label: t(tr.email, lang), inputType: 'email' },
    { field: 'company' as const, label: t(tr.company, lang), inputType: 'text' },
  ]

  return (
    <motion.section
      id="contatti"
      className="py-16 px-4 md:py-24 md:px-6"
      style={{ background: '#0D1220' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={fadeUp} className="mb-3">
            <span className="ordinal">{t(tr.tag, lang)}</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {t(tr.title, lang)}
          </motion.h2>

          <motion.div variants={fadeUp} className="separator-cyan mb-6" style={{ maxWidth: '200px' }} />

          <motion.p variants={fadeUp} className="text-base mb-12 max-w-xl" style={{ color: '#94A3B8', lineHeight: 1.7 }}>
            {t(tr.subtitle, lang)}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form — stagger fields */}
            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl p-8 text-center"
                  style={{ background: 'rgba(0,200,255,0.08)', border: '1px solid rgba(0,200,255,0.3)' }}
                >
                  <div className="text-3xl mb-4">✓</div>
                  <p className="text-base font-medium" style={{ color: '#00C8FF' }}>{t(tr.sent, lang)}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {fields.map(({ field, label, inputType }, i) => (
                    <motion.div
                      key={field}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                    >
                      <input
                        type={inputType}
                        required
                        placeholder={label}
                        value={form[field]}
                        onChange={e => setForm(p => ({ ...p, [field]: e.target.value }))}
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all min-h-[48px]"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
                        onFocus={e => (e.target.style.borderColor = '#00C8FF')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
                  >
                    <textarea
                      required
                      rows={5}
                      placeholder={t(tr.message, lang)}
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className="w-full rounded-lg px-4 py-3 text-sm outline-none resize-none transition-all"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
                      onFocus={e => (e.target.style.borderColor = '#00C8FF')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
                  >
                    <button type="submit" className="btn-glow shimmer-btn py-3 rounded-lg text-sm font-semibold w-full mt-2">
                      {t(tr.send, lang)}
                    </button>
                  </motion.div>
                </form>
              )}
            </div>

            {/* Contact info — from right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="flex flex-col gap-5"
            >
              <div className="flex gap-4 items-start">
                <MapPin size={18} style={{ color: '#00C8FF', marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{t(ftr.address, lang)}</p>
                  <p className="text-sm font-medium mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{t(ftr.vat, lang)}</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <Globe size={18} style={{ color: '#00C8FF', flexShrink: 0 }} />
                <a
                  href={`https://${t(ftr.website, lang)}`}
                  target="_blank"
                  rel="noopener"
                  className="text-sm transition-colors"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00C8FF')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {t(ftr.website, lang)}
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <Mail size={18} style={{ color: '#00C8FF', flexShrink: 0 }} />
                <a
                  href={`mailto:${t(ftr.emailAddr, lang)}`}
                  className="text-sm transition-colors"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00C8FF')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {t(ftr.emailAddr, lang)}
                </a>
              </div>

              <div className="flex gap-4 mt-2">
                {[ExternalLink, X].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#00C8FF'; e.currentTarget.style.background = 'rgba(0,200,255,0.08)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'transparent' }}
                  >
                    <Icon size={16} style={{ color: '#94A3B8' }} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="separator-cyan mt-16 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-6">
            <img
              src="/axivo-logo.png"
              alt="AXIVO Partners"
              style={{ height: '72px', width: 'auto', objectFit: 'contain' }}
            />
            <p className="text-xs max-w-lg" style={{ color: '#475569', lineHeight: 1.6 }}>
              {t(ftr.disclaimer, lang)}
            </p>
            <p className="text-xs" style={{ color: '#475569' }}>
              {t(ftr.copyright, lang)}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
