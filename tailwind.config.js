/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "DarkText": "hsl(229, 25%, 31%)",
        "ScoreText": "hsl(229, 64%, 46%)",
        "HeaderOutline": "hsl(217, 16%, 45%)"
      },
    },
  },
  plugins: [],
}

