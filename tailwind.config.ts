import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        primary: ['var(--lincoln-primary)'],
        secondary: ['var(--lincoln-secondary)'],
      },
      colors: {
        'darkest': '#131313',
        'dark': '#161616',
        'dark-light': '#242424',
        'green': '#91FF5E',
        'green-light': '#37FF63',
      }
    },
  },
  plugins: [],
}
export default config
