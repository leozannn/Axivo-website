'use client'
import { useState } from 'react'
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

  return (
    <nav style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50, background: 'transparent' }}>
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/axivo-logo.png"
            alt="AXIVO Partners"
            style={{ height: '140px', width: 'auto' }}
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

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language switcher */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setLang('it')}
              className="text-sm font-semibold transition-colors px-1"
              style={{ color: lang === 'it' ? '#00C8FF' : 'rgba(255,255,255,0.5)' }}
            >
              IT
            </button>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.875rem' }}>|</span>
            <button
              onClick={() => setLang('en')}
              className="text-sm font-semibold transition-colors px-1"
              style={{ color: lang === 'en' ? '#00C8FF' : 'rgba(255,255,255,0.5)' }}
            >
              EN
            </button>
          </div>

          <a href="#contatti" className="btn-glow px-4 py-2 rounded text-sm">
            {t(translations.nav.cta, lang)}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ background: 'rgba(10,14,26,0.97)' }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium"
              style={{ color: '#94A3B8' }}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setLang('it')}
              className="text-sm font-semibold"
              style={{ color: lang === 'it' ? '#00C8FF' : 'rgba(255,255,255,0.5)' }}
            >IT</button>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
            <button
              onClick={() => setLang('en')}
              className="text-sm font-semibold"
              style={{ color: lang === 'en' ? '#00C8FF' : 'rgba(255,255,255,0.5)' }}
            >EN</button>
          </div>
          <a href="#contatti" className="btn-glow px-4 py-2 rounded text-sm text-center" onClick={() => setMobileOpen(false)}>
            {t(translations.nav.cta, lang)}
          </a>
        </div>
      )}
    </nav>
  )
}
