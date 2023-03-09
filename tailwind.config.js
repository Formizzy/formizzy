/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#605BFF",
        "fi-gray": "#9A9AA9"
      },
      letterSpacing: {
        tighter: '-0.025em'
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"]
      }
    },
  },
  plugins: [],
}
