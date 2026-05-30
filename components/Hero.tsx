'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'
import { useIsMobile } from '@/lib/useIsMobile'

function Typewriter() {
  const { lang } = useLang()
  const isMobile = useIsMobile()
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setIsDeleting(false)
    setPhraseIndex(0)
  }, [lang])

  useEffect(() => {
    const phrases =
      lang === 'it'
        ? ["Dal piano industriale al capitale.", "Dalla strategia all'esecuzione.", "Dalla visione ai risultati."]
        : ["From industrial plan to capital.", "From strategy to execution.", "From vision to results."]
    const phrase = phrases[phraseIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = phrase.slice(0, displayed.length + 1)
        setDisplayed(next)
        if (next.length === phrase.length) setTimeout(() => setIsDeleting(true), 2000)
      } else {
        const next = phrase.slice(0, displayed.length - 1)
        setDisplayed(next)
        if (next.length === 0) {
          setIsDeleting(false)
          setPhraseIndex(i => (i + 1) % phrases.length)
        }
      }
    }, isDeleting ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, phraseIndex, lang])

  return (
    <p
      style={{
        color: '#00C8FF',
        fontFamily: 'Space Grotesk, sans-serif',
        minHeight: '1.75rem',
        fontSize: '1.125rem',
        marginBottom: '24px',
      }}
    >
      {displayed}
      {/* CSS blink cursor — no framer-motion needed */}
      <span style={{
        display: 'inline-block',
        width: '2px',
        height: '1.2em',
        background: '#00C8FF',
        verticalAlign: 'text-bottom',
        marginLeft: '2px',
        animation: 'cursorBlink 0.7s step-end infinite',
      }} />
    </p>
  )
}

export default function Hero() {
  const { lang } = useLang()
  const isMobile = useIsMobile()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (isMobile) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)
    const particles: { x: number; y: number; vx: number; vy: number }[] = []
    const NUM = 80
    const MAX_DIST = 150

    for (let i = 0; i < NUM; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      })
    }

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,200,255,0.55)'
        ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,200,255,${0.18 * (1 - dist / MAX_DIST)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [isMobile])

  const headline = t(translations.hero.headline, lang)
  const words = headline.replace(/\n/g, ' \n ').split(' ').filter(Boolean)

  return (
    <section
      id="hero"
      className="pt-28 md:pt-0"
      style={{
        backgroundColor: '#FFFFFF',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        {!isMobile && (
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              touchAction: 'none',
              zIndex: 0,
            }}
          />
        )}
        <div
          className="dot-grid"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '320px',
            height: '320px',
            opacity: 0.4,
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          padding: '0 24px 48px',
        }}
        className="md:px-6 md:pt-32 md:pb-8"
      >
        {/* Headline */}
        <h1
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: '24px',
            color: '#0A0E1A',
            maxWidth: '860px',
          }}
          className="text-4xl md:text-7xl"
        >
          {isMobile ? (
            /* Mobile: plain text, no animation */
            headline.split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {i === headline.split('\n').length - 1 ? (
                  <>
                    {line.replace(/\.$/, '')}
                    <span style={{ color: '#00C8FF' }}>.</span>
                  </>
                ) : line}
              </span>
            ))
          ) : (
            /* Desktop: word-by-word animation */
            words.map((word, i) => {
              if (word === '\n') return <br key={i} />
              const lastWordIdx = words.reduce((acc, w, idx) => (w !== '\n' ? idx : acc), -1)
              const isLast = i === lastWordIdx
              const text = isLast ? word.replace(/\.$/, '') : word
              return (
                <motion.span
                  key={`${lang}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
                  className="inline-block mr-[0.25em]"
                >
                  {isLast ? (
                    <>{text}<span style={{ color: '#00C8FF' }}>.</span></>
                  ) : text}
                </motion.span>
              )
            })
          )}
        </h1>

        {/* Typewriter */}
        <Typewriter />

        {/* Separator */}
        <div
          className="separator-cyan mb-8"
          style={{ maxWidth: '600px' }}
        />

        {/* Subline */}
        <p
          className="text-lg md:text-xl mb-10 max-w-xl"
          style={{ color: 'rgba(10,14,26,0.7)', lineHeight: 1.7 }}
        >
          {t(translations.hero.subline, lang)}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
          <a
            href="#servizi"
            className="btn-glow px-7 py-3 rounded-lg text-base font-semibold text-center sm:text-left"
          >
            {t(translations.hero.cta1, lang)}
          </a>
          <a
            href="#contatti"
            className="px-7 py-3 rounded-lg text-base font-semibold transition-all text-center sm:text-left"
            style={{ border: '1px solid #0A0E1A', color: '#0A0E1A', textDecoration: 'none' }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(10,14,26,0.05)'
              e.currentTarget.style.boxShadow = '0 0 10px rgba(10,14,26,0.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {t(translations.hero.cta2, lang)}
          </a>
        </div>
      </div>

      {/* Scroll indicator — hidden on mobile */}
      <div
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        style={{ position: 'absolute' }}
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: 'rgba(10,14,26,0.4)' }}
        >Scroll</span>
        <div
          className="w-px h-12"
          style={{ background: 'linear-gradient(180deg, rgba(0,200,255,0.8), transparent)' }}
        />
        <div
          className="rounded-full"
          style={{ width: '6px', height: '6px', background: '#00C8FF' }}
        />
      </div>
    </section>
  )
}
