'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/LanguageContext'
import { translations, t } from '@/lib/translations'

function Typewriter() {
  const { lang } = useLang()
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
        if (next.length === phrase.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
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
    <p className="text-lg md:text-xl mb-6" style={{ color: '#00C8FF', fontFamily: 'Space Grotesk, sans-serif', minHeight: '1.75rem' }}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse' }}
        style={{ display: 'inline-block', width: '2px', height: '1.2em', background: '#00C8FF', verticalAlign: 'text-bottom', marginLeft: '2px' }}
      />
    </p>
  )
}

export default function Hero() {
  const { lang } = useLang()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)

    const particles: { x: number; y: number; vx: number; vy: number }[] = []
    const NUM = window.innerWidth < 768 ? 30 : 80
    const MAX_DIST = window.innerWidth < 768 ? 100 : 150

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
  }, [])

  const headline = t(translations.hero.headline, lang)
  const words = headline.replace(/\n/g, ' \n ').split(' ').filter(Boolean)

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-start md:justify-center"
      style={{ background: 'linear-gradient(135deg, #0A0E1A 0%, #0D1525 50%, #0A0E1A 100%)', overflowX: 'hidden' }}
    >
      {/* Background — static, no parallax scroll listeners */}
      <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        />
        <div className="dot-grid absolute top-0 right-0 opacity-40" style={{ width: '320px', height: '320px' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-10 md:pt-32 md:pb-8">
        {/* Headline — word-by-word stagger */}
        <h1
          className="text-4xl md:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: 'Space Grotesk, sans-serif', maxWidth: '860px' }}
        >
          {words.map((word, i) => {
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
                  <>
                    {text}
                    <span style={{ color: '#00C8FF' }}>.</span>
                  </>
                ) : text}
              </motion.span>
            )
          })}
        </h1>

        {/* Typewriter */}
        <Typewriter />

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="separator-cyan mb-8"
          style={{ maxWidth: '600px', transformOrigin: 'left' }}
        />

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-lg md:text-xl mb-10 max-w-xl"
          style={{ color: '#94A3B8', lineHeight: 1.7 }}
        >
          {t(translations.hero.subline, lang)}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4"
        >
          <a href="#servizi" className="btn-glow px-7 py-3 rounded-lg text-base font-semibold text-center sm:text-left">
            {t(translations.hero.cta1, lang)}
          </a>
          <a
            href="#contatti"
            className="px-7 py-3 rounded-lg text-base font-semibold transition-all text-center sm:text-left"
            style={{ border: '1px solid rgba(0,200,255,0.4)', color: '#00C8FF' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,200,255,0.08)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(0,200,255,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none' }}
          >
            {t(translations.hero.cta2, lang)}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>Scroll</span>
          <div className="w-px h-12" style={{ background: 'linear-gradient(180deg, rgba(0,200,255,0.8), transparent)' }} />
          <motion.div
            className="rounded-full"
            style={{ width: '6px', height: '6px', background: '#00C8FF' }}
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
