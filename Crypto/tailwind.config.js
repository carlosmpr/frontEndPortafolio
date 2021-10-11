module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
       'primary': '#1F1D2B',
      'secondary': '#252836',
       'theme': '#EA7C69',
     }),
 
     textColor: {
       'primary':'white',
       'secondary':'#EA7C69',
       'purple':'rgba(124, 58, 237)',
       'green':'rgba(5, 150, 105)'
     },
 
 
     borderColor: theme => ({
              ...theme('colors'),
               DEFAULT: theme('colors.gray.300', 'currentColor'),
              'primary': '#393C49',
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
