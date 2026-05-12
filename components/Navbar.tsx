'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'

export default function Navbar() {
  const { lang, setLang } = useLang()
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { label: t(translations.nav.about, lang), href: '#chi-siamo' },
    { label: t(translations.nav.services, lang), href: '#servizi' },
    { label: t(translations.nav.method, lang), href: '#metodo' },
    { label: t(translations.nav.wfe, lang), href: '#equity' },
    { label: t(translations.nav.contact, lang), href: '#contatti' },
  ]

  const close = () => setMobileOpen(false)

  return (
    <>
      <nav
        style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50, background: 'transparent' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
          {/* Logo — smaller on mobile */}
          <a href="#" className="flex items-center" onClick={close}>
            <img
              src="/axivo-logo.png"
              alt="AXIVO Partners"
              className="h-24 md:h-44 w-auto object-contain"
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors"
                style={{ color: '#94A3B8' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#00C8FF')}
                onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLang('it')}
                className="text-sm font-semibold transition-colors px-1"
                style={{ color: lang === 'it' ? '#00C8FF' : 'rgba(255,255,255,0.5)' }}
              >IT</button>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.875rem' }}>|</span>
              <button
                onClick={() => setLang('en')}
                className="text-sm font-semibold transition-colors px-1"
                style={{ color: lang === 'en' ? '#00C8FF' : 'rgba(255,255,255,0.5)' }}
              >EN</button>
            </div>
            <a href="#contatti" className="btn-glow px-4 py-2 rounded text-sm">
              {t(translations.nav.cta, lang)}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg transition-colors"
            style={{ color: 'white', background: mobileOpen ? 'rgba(0,200,255,0.12)' : 'transparent' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ background: 'rgba(10,14,26,0.98)', backdropFilter: 'blur(12px)' }}
          >
            {/* Top bar with logo + close */}
            <div className="flex items-center justify-between px-4 py-4">
              <a href="#" onClick={close}>
                <img src="/axivo-logo.png" className="h-[80px] w-auto" alt="AXIVO Partners" />
              </a>
              <button
                className="w-11 h-11 flex items-center justify-center rounded-lg"
                style={{ color: 'white', background: 'rgba(0,200,255,0.1)', border: '1px solid rgba(0,200,255,0.2)' }}
                onClick={close}
                aria-label="Chiudi menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col flex-1 px-6 pt-2 overflow-y-auto">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.22, ease: 'easeOut' }}
                  className="text-2xl font-bold py-4"
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    display: 'block',
                  }}
                  onClick={close}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>

            {/* Bottom: lang switcher + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.25 }}
              className="px-6 pb-10 pt-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setLang('it')}
                  className="text-base font-semibold px-5 py-2.5 rounded-lg min-w-[64px]"
                  style={{
                    color: lang === 'it' ? '#00C8FF' : 'rgba(255,255,255,0.5)',
                    background: lang === 'it' ? 'rgba(0,200,255,0.1)' : 'transparent',
                    border: `1px solid ${lang === 'it' ? 'rgba(0,200,255,0.4)' : 'rgba(255,255,255,0.12)'}`,
                  }}
                >IT</button>
                <button
                  onClick={() => setLang('en')}
                  className="text-base font-semibold px-5 py-2.5 rounded-lg min-w-[64px]"
                  style={{
                    color: lang === 'en' ? '#00C8FF' : 'rgba(255,255,255,0.5)',
                    background: lang === 'en' ? 'rgba(0,200,255,0.1)' : 'transparent',
                    border: `1px solid ${lang === 'en' ? 'rgba(0,200,255,0.4)' : 'rgba(255,255,255,0.12)'}`,
                  }}
                >EN</button>
              </div>
              <a
                href="#contatti"
                className="btn-glow shimmer-btn py-4 rounded-xl text-base font-semibold text-center block"
                onClick={close}
              >
                {t(translations.nav.cta, lang)}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
