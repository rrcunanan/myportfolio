const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    mode: 'layers',
    content: [
      './public/**/*.html',
      './public/**/*.html'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
