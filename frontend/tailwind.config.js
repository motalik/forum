/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      primary: '#00445a',
      white: '#FFFFFF',
      grey: '#8c8c8c'
    },
    fontFamily: {
      'josefin': ["Josefin Sans", 'sans-serif'],
    },
  },
  plugins: [],
};
