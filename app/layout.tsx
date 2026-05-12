import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'AXIVO Partners — Consulenza strategica, industriale e finanziaria',
  description:
    'Consulenza strategica, industriale e finanziaria per start-up, PMI innovative e società tech.',
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
        ` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">
        <LanguageProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  )
}
