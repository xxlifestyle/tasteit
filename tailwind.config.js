module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    color:{
      "gray" : "#E3EBEF"
    },
    screens: {
      '2xs': '100px',
      'xs': '200px',
      'md': '1024px',
      'lg': '1280px',
    },
  },
  plugins: [],
}
