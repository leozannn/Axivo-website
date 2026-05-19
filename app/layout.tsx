import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'AXIVO Partners — Consulenza strategica, industriale e finanziaria',
  description:
    'Consulenza strategica, industriale e finanziaria per start-up, PMI innovative e società tech.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="antialiased">
      <head>
        {/* Disabilita scroll restoration del browser prima dell'idratazione React */}
        <script dangerouslySetInnerHTML={{ __html: `
          if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
            window.scrollTo(0, 0);
          }
          document.documentElement.style.backgroundColor = '#0A0E1A';
        ` }} />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full" style={{ backgroundColor: '#0A0E1A', color: '#ffffff' }}>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var ua = navigator.userAgent;
            var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua) || window.innerWidth < 768;
            if (isMobile) {
              document.documentElement.style.overflow = 'auto';
              document.documentElement.style.height = 'auto';
              document.documentElement.style.position = 'static';
              document.body.style.overflow = 'auto';
              document.body.style.height = 'auto';
              document.body.style.position = 'static';
              document.body.style.backgroundColor = '#0A0E1A';
              document.body.style.color = '#ffffff';
              window.scrollTo(0, 0);
            }
          })();
        `}} />
        <LanguageProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  )
}
