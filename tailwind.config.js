import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '200px', 'max': '500px'},
        'md': {'min': '500px', 'max': '770px'},
        'lg': {'min': '770px', 'max': '1199px'},
        'xl': {'min': '1200px'},
      }
    },
  },
  plugins: [daisyui],
  
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  }
}