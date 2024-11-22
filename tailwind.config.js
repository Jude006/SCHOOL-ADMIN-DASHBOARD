const { color } = require("framer-motion");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#252480',
        secondary:'#f0f0f0  ',
        tertiary:'#FB7D5B'
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
      },
    },
  }, 
  plugins: [],
};
