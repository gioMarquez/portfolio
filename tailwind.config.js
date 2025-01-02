/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Ajusta las rutas según tu estructura de proyecto
  ],
  theme: {
    extend: {
      colors: {
        primary: '#183153', 
        secondary: '#6741D9', 
        tertiary: '#FFD43B', 
      },
      fontFamily: {
        merriweather: ['"merriweather"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
