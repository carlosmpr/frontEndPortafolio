module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
       'primary': '#503E9D',
      'secondary': 'white',
       'theme': '#EA7C69',
     }),

     textColor: {
      'theme': '#503E9D',
      'primary':'white',
      'secondary':'#EA7C69',
      'white':'white',
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
