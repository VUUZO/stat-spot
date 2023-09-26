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
  title: 'trackfm',
  description: 'Track your Spotify data',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lincolnPrimary.variable} ${lincolnSecondary.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="./icons/apple-icon.png" type="image/png" sizes="180x180" />
      </head>
      <body className='text-white bg-darkest'>
        {children}
      </body>
    </html>
  )
}
