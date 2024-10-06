// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sarabun", "sans-serif"],
      },
      boxShadow: {
        "custom-shadow-one": "0 0 2px 0 rgba(1, 27, 51, 0.6)",
        "custom-shadow-two": "0 0 2px 0 rgba(1, 27, 51, 0.5)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(208.66deg, rgba(1, 27, 51, 1) 13.92%, rgba(38, 188, 253, 1) 99.16%, rgba(1, 27, 51, 0) 100.02%)",
      },
      fontFamily: {
        sarabun: ["Sarabun", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
