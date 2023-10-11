import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    animation: {
      'spin-track': 'spin 3s linear infinite',
    },
    keyframes: {
      'spin': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    extend: {
      gridTemplateAreas: {
        'layout': [
          'empty play',
          'navig main',
        ],
        'layout-mobile': [
          'play',
          'navig',
          'main',
        ]
      },
      gridTemplateColumns: {
        'layout': 'auto minmax(0, 1fr)',
        'layout-mobile': 'minmax(0, 1fr)',
      },
      gridTemplateRows: {
        'layout': 'auto 1fr',
        'layout-mobile': 'auto auto 1fr',
      },
      fontFamily: {
        primary: ['var(--lincoln-primary)'],
        secondary: ['var(--lincoln-secondary)'],
      },
      colors: {
        'darkest': '#131313',
        'dark': '#181818',
        'dark-light': '#242424',
        'green': '#91FF5E',
        'green-light': 'rgba(55,255,99,.2)',
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-named-lines')
  ],
}
export default config
