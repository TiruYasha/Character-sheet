const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};