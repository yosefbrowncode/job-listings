/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-cyan": "hsl(180, 29%, 50%)",
        "my-white": "white",
        "tag-color": "hsl(180, 52%, 96%)",
        "dark-tag": "hsl(180, 14%, 20%)",
        "light-tag": "hsl(180, 8%, 52%)",
      },
      fontFamily: {
        "my-spartan": ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
