/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src//*.{html,js,jsx,ts,tsx,vue}',
],
  theme: {
    extend: { backgroundImage: {
      'hero-pattern': "url('./src/assets/Images/gettingstarted/svgbackground.svg')",
    }},
  },
  plugins: [],
}