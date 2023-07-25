/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
    "./src/views/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    },
    colors: {
      'accent-primary': '#0F7052',
      'accent-secondary': '#01D77D',
      'text-color-base': '#585757',
      'text-color-dim-green': '#C0FFE4',
      'white': '#fff',
      'black': '#383838',
      'base-gray': '#585757',
      'dim-gray': '#EAEAEA',
      'icon-color': '#999898',
      'gray': '#969696',
      'cards-bg': '#EEEEEE',
      'border-color': 'rgba(0, 0, 0, 0.10)',
      'input-border-color': 'rgba(88,87,87,0.20)',
      'danger': '#E03A22'
    },
    boxShadow: {
      'input-shadow': '0px 0px 15px 0px rgba(56, 56, 56, 0.15)',
      'dropdown-shadow': '0px 0px 23px 15px rgba(0,0,0,0.1)',
      'select-shadow': '0px 0px 12px 0px rgba(0, 0, 0, 0.06)',
      'profile-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
    },
    screens: {
      xs: "375px",
      sm: "834px",
      md: "1060px",
      lg: "1280px",
      xl: "1440px"
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

