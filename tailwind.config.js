/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#2d3a2e',
          green: '#3d5a3e',
          light: '#f5f3ef',
          cream: '#faf8f5',
        },
      },
      fontFamily: {
        'sans': ['"Inter"', 'sans-serif'],
        'helvetica-neue': ['"Helvetica Neue Light"', 'Helvetica', 'Arial', 'sans-serif'],
        'playfair': ['"Playfair Display"', 'serif'],
        'oswald': ['"Oswald"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
        'roboto-slab': ['"Roboto Slab"', 'serif'],
        'raleway': ['"Raleway"', 'sans-serif'],
      },
      keyframes: {
        'marquee-x': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'marquee-x': 'marquee-x 30s linear infinite',
      }
    },
  },
  plugins: [],
}
