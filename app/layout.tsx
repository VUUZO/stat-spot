import './globals.css'

import type { Metadata } from 'next'

import localFont from 'next/font/local'
import Navigation from '@/components/Navigation'

import { Container } from '@/components/Container'
import { TermNavigation } from '@/components/TermNavigation'
import { TermProvider } from './context/term-context'

const lincolnPrimary = localFont({
  src: '../public/fonts/LincolnMITRE-LM.woff',
  variable: '--lincoln-primary'
})

const lincolnSecondary = localFont({
  src: '../public/fonts/LincolnMITRE-LM7x9.woff',
  variable: '--lincoln-secondary'
})

export const metadata: Metadata = {
  title: 'listento',
  description: 'listento | sieslucha',
  themeColor: '#121212'
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
