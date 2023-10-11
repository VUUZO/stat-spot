import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Navigation from '@/components/Navigation'
import NowPlaying from '@/components/NowPlaying'
import { GridLayout } from '@/components/GridLayout'
import { Container } from '@/components/Container'

const lincolnPrimary = localFont({
  src: '../public/fonts/LincolnMITRE-LM.woff',
  variable: '--lincoln-primary'
})

const lincolnSecondary = localFont({
  src: '../public/fonts/LincolnMITRE-LM7x9.woff',
  variable: '--lincoln-secondary'
})

export const metadata: Metadata = {
  title: 'Strack',
  description: 'Track your Spotify data',
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
      className={`${lincolnPrimary.variable} ${lincolnSecondary.variable} font-primary`}
    >
      <body>
          <GridLayout>
            <div className='hidden lg:block grid-in-empty bg-dark rounded-[10px]'/>

            <div className='grid-in-play'>
              <NowPlaying />
            </div>
            <Container className='grid-in-navig bg-[none] border-opacity-0 md:bg-dark md:border-opacity-20'>
              <Navigation />
            </Container>
            <Container className='grid-in-main overflow-y-scroll rounded-[30px]'>
              {children}
            </Container>
          </GridLayout>
      </body>
    </html>
  )
}
