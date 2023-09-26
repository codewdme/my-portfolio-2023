/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'poppins' :['Poppins', 'sans-serif']
    },

    extend: {
      colors: {
        "neon-green": "#0aff9d",
        "matt-black": "#111111",
        "gray-fill": "#7e7e82",
        "gray" : "#58595b",
        "pure-black": "#080808",
        "brand-white": "#ebecf3",
        "button-gray":"#232323",
      },
    },
  },
  plugins: [],
};
