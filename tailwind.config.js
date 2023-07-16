/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#682B8D',
        'secondary': '#0099A6',
        'footerBg':"#93A5CF"
      },
      fontFamily: {
        brandon: ['Brandon Grotesque Nathan Devi', 'sans-serif'],
      },
    },
    
  },
  plugins: [],
}