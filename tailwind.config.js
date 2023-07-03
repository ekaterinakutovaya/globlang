/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'accent-primary': '#0F7052',
      'accent-secondary': '#01D77D',
      'text-color-base': '#585757',
      'text-color-dim-green': '#C0FFE4',
      'white': '#fff',
      'black': '#383838',
      'base-gray': '#585757',
      'gray': '#969696',
      'cards-bg': '#EEEEEE'
    },
    boxShadow: {
      'input-shadow': '0px 0px 15px 0px rgba(56, 56, 56, 0.15)'
    },
    screens: {
      xs: "375px",
      sm: "834px",
      md: "1060px",
      lg: "1280px",
      xl: "1440px"
    },
  },
  plugins: [],
}

