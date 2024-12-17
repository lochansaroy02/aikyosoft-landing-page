/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      breakpoints: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
        faculty: ['Faculty Glyphic', 'sans-serif'],
        spectral: ['Spectral', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'move-left': 'move-left 20s linear infinite',
        'move-right': 'move-right 10s linear infinite',
      },
      keyframes: {
        'move-left': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        'move-right': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-motion')
  ],
};
