const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          0: "#f9f9f9",
          100: "#8bc6d3",
          200: "#323e48",
          300: "#ff565c",
        },
      },
    },
  },
  plugins: [],
});
