module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'desktop-img': "url('/Users/arvinbenipal/my-app/src/images/desktop.jpeg')",
      }),
      animation:{
        blob: "blob 7s infinite",
      },
      keyframes:{
        blob:{
          "0%":{
            transform: "translate(0px, 0px) scale(1)",
          },
          "30%":{
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%":{
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)",
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
