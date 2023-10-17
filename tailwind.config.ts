import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      'sm': '13px',
      'base': '15px',
      'md': '24.27px',
      'lg': '39.27px',
    },
    animation: {
      'spin-track': 'spin 3s linear infinite',
      'shimmer': 'shimmer 4s infinite'
    },
    keyframes: {
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      shimmer: {
        '100%': { transform: 'translateX(100%)' }
      }
    },
    extend: {
      colors: {
        gray: {
          'darker': '#131313',
          'dark': '#161616',
          'neutral': '#242424',
          'light': '#838383',
          'lighter': '#D9D9D9',
        },
        'primary': '#5EFF80',
      },
      padding: {
        mobile: '10px',
        'mobile-nav': '4px',
      },
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
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-named-lines')
  ],
}
export default config
