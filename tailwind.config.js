/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'app-primary': '#007E33',
        'app-secondary': '#01579B',
        'app-terciary': '#FFFFFF',
        'app-background': '#F6F6F6',
        'app-text': '#000E14',
        'app-border': '#D6D9E0',
        'app-alert': '#FFC107',
        'app-danger': '#E53935',
        'app-text-light': '#9B9B9B'
      },
      fontFamily: {
        'app-font-principal': ['Poppins']
      }
    },
  },
  plugins: [],
}
