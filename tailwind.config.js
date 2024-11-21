/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto"],
      },
      colors: {
        primary: "#1F8E31", //green
        "primary-hover": "#018148", //green-hover
        secondary: "#FF0448 ", // red
        "secondary-hover": "#C3424E", //red-warning
        "warning-background": "#FFF4C7", //yellow
        "default-text": "#404040", //black
      },
    },
  },
  plugins: [],
};
