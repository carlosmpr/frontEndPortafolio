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
      'secondary':'#EA7C69'
    },


    borderColor: theme => ({
             ...theme('colors'),
              DEFAULT: theme('colors.gray.300', 'currentColor'),
             'primary': '#393C49',
             'secondary': '#EA7C69',
            'danger': '#e3342f',
            })
          },

  variants: {
    extend: {},
  },
  plugins: [],
}
