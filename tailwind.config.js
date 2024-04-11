/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#4b5663',
          200: '#35404f',
          300: '#202c3c',

          400: '#0c1929', // primary

          500: '#091422',
          600: '#06101c',
          700: '#040b15'
        },
        accent:'#DDF2FF',
        complementary: '#ffcc66',
        // complementary: '#DCA11D',
        dark: '#040b15',
      },
      fontFamily: {
        poppins: ['Poppins'],
      }
    },
  },
  plugins: [],
}

