/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kalam': ["'Kalam'", "cursive"],
        'arvo': ["'Arvo'", "serif"],
        'charmonman': ["'Charmonman'", "cursive"]
      },
    },
  },
  plugins: [],
}

