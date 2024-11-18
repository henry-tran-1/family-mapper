/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        polaroid: ['Caveat'],
        heading: ['Ubuntu'],
      },
    },
  },
  plugins: [],
}
