module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    backgroundColor: theme => ({
      ...theme('colors'),
       'primary': '#D563A4',
      'secondary': '#656D81',
       'theme': '#EA7C69',
     }),

     textColor: {
      'theme': '#503E9D',
      'primary':'#D563A4',
      'secondary':'#656D81',
      'white':'white',
      'gray':'rgba(156, 163, 175)',
      'purple':'rgba(124, 58, 237)',
      'green':'rgba(5, 150, 105)'
    },

    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
       'primary': '#D563A4',
      'secondary': '#EA7C69',
     'danger': '#e3342f',
     }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
