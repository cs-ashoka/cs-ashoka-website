import type { Config } from 'tailwindcss';

const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#D80032',
        secondary: '#1263C7',
        tertiary: '#D6D6D6',
        box: "#333533",
        gray: "#333533",
        text: '#ffffff',
        background: '#202020',
        transparent: 'transparent',
      },
    },
  },
  plugins: [],
});
export default config;
