module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
       'primary': 'white',
      'secondary': '#F4F5F7',
       'theme': '#EA7C69',
     }),

     textColor: {
      'primary':'#3C3F88',
      'secondary':'#EA7C69',
      'purple':'rgba(124, 58, 237)',
      'green':'rgba(5, 150, 105)'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
