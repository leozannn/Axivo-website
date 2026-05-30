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
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
            } catch(e) {}
          })();
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
      <body style={{ backgroundColor: '#FFFFFF', color: '#0A0E1A' }}>
        <LanguageProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  )
}
