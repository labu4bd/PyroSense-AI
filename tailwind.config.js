
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-deep-blue': '#0a192f',
        'brand-navy': '#112240',
        'brand-light-navy': '#233554',
        'brand-slate': '#8892b0',
        'brand-light-slate': '#a8b2d1',
        'brand-lightest-slate': '#ccd6f6',
        'brand-orange': '#ff6700',
        'brand-teal': '#64ffda',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
