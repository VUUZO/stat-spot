import './globals.css'

import type { Metadata } from 'next'

import localFont from 'next/font/local'
import Navigation from '@/components/Navigation'

import { Container } from '@/components/Container'
import { TermNavigation } from '@/components/TermNavigation'
import { TermProvider } from './context/term-context'

const lincolnPrimary = localFont({
  src: '../assets/fonts/LincolnMITRE-LM.woff',
  variable: '--lincoln-primary'
})

const lincolnSecondary = localFont({
  src: '../assets/fonts/LincolnMITRE-LM7x9.woff',
  variable: '--lincoln-secondary'
})

export const metadata: Metadata = {
  title: 'Listento',
  description: 'Description',
  keywords: [
    "Spotify",
    "Spotify stats",
    "Statistics",
  ],
  authors: [
    {
      name: 'vuuzo'
    }
  ],
  themeColor: '#121212',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${lincolnPrimary.variable} ${lincolnSecondary.variable} font-primary text-zinc-300 bg-[#111]`}
    >
      <body>
        <section>
          <Navigation />
          <TermProvider>
            <TermNavigation />
            <Container className='rounded-[30px]'>
              {children}
            </Container>
          </TermProvider>
        </section>
      </body>
    </html>
  )
}
