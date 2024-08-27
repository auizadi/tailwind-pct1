/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      container:{
        center: true
      },
      backgroundImage:{
        'work' : "url('img/work.jpg')"
      }
    },
  },
  plugins: [],
}

