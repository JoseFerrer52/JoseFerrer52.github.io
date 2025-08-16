// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default { // O module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { screens: {
        'mi-nuevo-breakpoint': '1350px',
      },},
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/typography')

  ],
};