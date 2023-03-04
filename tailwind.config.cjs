/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      background:'#fbfff0',
      cta:'#BC383E',
      hedline:'#1d2233',
      text:'#2f3948',
      white:'#ffffff',
    },
    extend: {},
  },
  plugins: [],
}