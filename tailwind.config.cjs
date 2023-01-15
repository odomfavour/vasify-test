/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        acumin: ["AcuminPro", "sans-serif"],
      },
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
        'pulse-slow': 'pulse 4s linear infinite',
      }
    },
  },
  plugins: [],
}