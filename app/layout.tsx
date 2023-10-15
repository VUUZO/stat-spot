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
      className={`${lincolnPrimary.variable} ${lincolnSecondary.variable} font-primary text-base text-gray-lighter bg-gray-darker`}
    >
      <body>
        
        <img className='-z-10 pointer-events-none select-none w-full fixed top-0 left-0' src="/images/blob001.png" alt="blob" />
        <img className='-z-10 pointer-events-none select-none w-full fixed bottom-0 right-0' src="/images/blob002.png" alt="blob" />
        
        <section className='max-w-7xl mx-auto'>

          <TermProvider>
            <div className='sticky top-0 z-50'>
              <div className='absolute -z-10 inset-0 saturate-150 [mask-image:linear-gradient(black_20%,rgb(0,0,0,.8)_80%,transparent_90%)] bg-gray-darker'/>
              <Navigation />
              <TermNavigation />
            </div>
            <Container variant={'transparent'} className='flex flex-col gap-[10px]'>
              {children}
            </Container>
          </TermProvider>
        </section>
      </body>
    </html>
  )
}
