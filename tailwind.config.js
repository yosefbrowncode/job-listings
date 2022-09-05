/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-cyan": "hsl(180, 29%, 50%)",
      },
    },
  },
  plugins: [],
};
