/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"]
    },
    extend: {
      colors: {
        orange: "#FF9000",
        gray: "#999591",
        "ligth-gray": "#3E3B47",
        white: "#F4EDE8",
        input: "#232129",
        "dark-gray": "#312E38",
        ligth: "#666360"
      },
      gridTemplateColumns: {
        home: "minmax(18rem,20rem) 1fr"
      },
      gridTemplateRows: {
        note: "6rem 1fr"
      }
    }
  },
  plugins: []
};
