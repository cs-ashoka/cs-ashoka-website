import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D80032',
        'on-primary': '#ffffff',
        secondary: '#5e5e5e',
        background: '#f7f9fb',
        surface: '#ffffff',
        'surface-container': '#eceef0',
        'surface-container-low': '#f2f4f6',
        'on-surface': '#191c1e',
        'on-surface-variant': '#5d3f3c',
        tertiary: '#4d5c72',
        border: '#e2e2e2',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains-mono)'],
      },
    },
  },
  plugins: [],
};
export default config;