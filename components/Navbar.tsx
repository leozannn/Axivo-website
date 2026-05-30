'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang } = useLang()

  const links = [
    { label: t(translations.nav.about, lang), href: '#chi-siamo' },
    { label: t(translations.nav.services, lang), href: '#servizi' },
    { label: t(translations.nav.wfe, lang), href: '#equity' },
    { label: t(translations.nav.contact, lang), href: '#contatti' },
  ]

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: 'transparent',
          minHeight: '90px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          {/* Logo */}
          <a href="#" onClick={close} style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/axivo-logo.png"
              alt="AXIVO Partners"
              className="h-24 md:h-40 w-auto object-contain"
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors"
                style={{ color: 'rgba(10,14,26,0.65)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#00C8FF')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(10,14,26,0.65)')}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop right: lang + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <button
                onClick={() => setLang('it')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: lang === 'it' ? '#00C8FF' : 'rgba(10,14,26,0.4)',
                  padding: '0 4px',
                }}
              >IT</button>
              <span style={{ color: 'rgba(10,14,26,0.2)', fontSize: '14px' }}>|</span>
              <button
                onClick={() => setLang('en')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: lang === 'en' ? '#00C8FF' : 'rgba(10,14,26,0.4)',
                  padding: '0 4px',
                }}
              >EN</button>
            </div>
            <a
              href="#contatti"
              className="btn-glow"
              style={{ padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px' }}
            >
              {t(translations.nav.cta, lang)}
            </a>
          </div>

          {/* Mobile: lang + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setLang('it')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '13px',
                color: lang === 'it' ? '#00C8FF' : 'rgba(10,14,26,0.4)',
              }}
            >IT</button>
            <span style={{ color: 'rgba(10,14,26,0.2)', fontSize: '13px' }}>|</span>
            <button
              onClick={() => setLang('en')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '13px',
                color: lang === 'en' ? '#00C8FF' : 'rgba(10,14,26,0.4)',
              }}
            >EN</button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
              style={{
                background: 'none',
                border: 'none',
                color: '#0A0E1A',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu — plain CSS, zero framer-motion */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            padding: '80px 32px 40px',
          }}
        >
          <button
            onClick={close}
            aria-label="Chiudi menu"
            style={{
              position: 'absolute',
              top: 20,
              right: 24,
              background: 'none',
              border: 'none',
              color: '#0A0E1A',
              cursor: 'pointer',
            }}
          >
            <X size={28} />
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                style={{
                  color: '#0A0E1A',
                  textDecoration: 'none',
                  fontSize: '28px',
                  fontWeight: 700,
                  fontFamily: 'Space Grotesk, sans-serif',
                  padding: '18px 0',
                  borderBottom: '1px solid rgba(10,14,26,0.08)',
                  display: 'block',
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contatti"
            onClick={close}
            style={{
              marginTop: '32px',
              background: '#00C8FF',
              color: '#0A0E1A',
              padding: '18px',
              borderRadius: '12px',
              textAlign: 'center',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '18px',
              display: 'block',
            }}
          >
            {t(translations.nav.cta, lang)}
          </a>
        </div>
      )}
    </>
  )
}
