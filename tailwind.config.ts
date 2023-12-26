import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'header-pattern':"url('/src/assets/jpg/view/zebra.jpeg')"
      },
    },
    colors: {
      main: {
        light: '#FFF4E6',
        DEFAULT: '#4C2A00',
        dark: '#331C00',
      },
      neutral: {
        light: '#F6F7F7',
        DEFAULT: '#E0E3E4',
        dark: '#151516',
      },
      complementary: {
        DEFAULT: '#005D23',
      },
      shadows: {
        dark: '#331C00',
        light: '#E7F6FF',
        sign: '#CCF1DA',
      },
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widestxl: '.25em',
    }
  },
  plugins: [],
}
export default config
