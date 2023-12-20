/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rugen': ['Rugen', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}