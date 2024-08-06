/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f1e6d0',
          200: '#e4cda4',
          300: '#d4ad70',
          400: '#c7924c',
          500: '#b77c3b',
          600: '#9d6131',
          700: '#7e492a',
          800: '#6a3c29',
          900: '#5b3428'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
