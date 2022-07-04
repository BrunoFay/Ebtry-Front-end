/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        wolfBG:'url(/src/assets/wolfbg.png)',
        loginBG:'url(/src/assets/loginbg.png)',
      },
      fontFamily: {
        sans: "Roboto, sans-serif"
      }
    },
  },
  plugins: [],
}
