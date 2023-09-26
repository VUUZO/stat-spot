import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

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
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lincolnPrimary.variable} ${lincolnSecondary.variable}`}>
      <body className='text-white bg-darkest'>
        {children}
      </body>
    </html>
  )
}
