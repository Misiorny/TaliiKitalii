import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      '2xs':'340px',
      'xs':'400px',
      'sm':'480px',
      'sl':'576px',
      'xsl':'680px',
      'md':'780px',
      'ml':'960px',
      'xml':'1024px',
      'lg':'1200px',
      'xl':'1440px',
      '2xl':'1560px'
    },
    fontSize:{
      'sm':['0.8rem','1.2rem'],
      'base':['1rem','1.5rem'],
      'md':['1.2rem','1.8rem'],
      'xl':['1.4rem','2.1rem'],
      '2xl':['1.6rem','2.4rem'],
      '3xl':['1.8rem','2.7rem'],
      '4xl':['2rem','3rem'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
        light: '#2cc064',
        DEFAULT: '#005D23',
        dark: '#041e0b',
      },
      shadows: {
        dark: '#331C00',
        light: '#E7F6FF',
        sign: '#CCF1DA',
      },
    },
    letterSpacing: {
      tightestxl:'-.1',
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
