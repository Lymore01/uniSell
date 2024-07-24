/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      primary:"#171717",
      secondary:"#242424"
    },
    textColor:{
      primary:{
        50:"#ffffff",
        100:"#efefef",
        200:"#dcdcdc",
        300:"#bdbdbd"
      },
    },
    extend: {},
  },
  plugins: [],
}

