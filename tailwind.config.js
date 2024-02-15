/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        customBlue: '#1D2B53'
      }
    }
  },
  plugins: [],
}

