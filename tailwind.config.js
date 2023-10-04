import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {

    extend: {

    },
  },
  plugins: [daisyui],

  daisyui: {
    themes: ["light", {
      dark: {
        ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
        "base-300": 'black'
    }}, "cupcake"],
  },
}