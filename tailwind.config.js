/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"]
    },
    extend: {
      colors: {
        custom: {
          orange: "#FF9000",
          "gray": "#999591",
          "bg-ligth-gray": "#3E3B47",
          "white": "#F4EDE8",
          "input": "#232129",
          "bg-dark-gray": "#312E38"
        }
      }
    }
  },
  plugins: []
};
