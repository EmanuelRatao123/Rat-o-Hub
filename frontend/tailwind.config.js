/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#36393f',
          200: '#2f3136',
          300: '#202225',
          400: '#18191c'
        },
        brand: '#5865F2'
      }
    },
  },
  plugins: [],
}
