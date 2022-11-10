/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D5E7D2',
        secondary: '#10201F',
        lightGreen: '#D5E7D2',
        darkGreen: '#217851'
      },
    },
  },
  plugins: [],
}