/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'move-left-to-right': 'moveLeftToRight 10s linear infinite',
      },
      keyframes: {
        moveLeftToRight: {
          '0%': { transform: 'translateX(-500%)' },
          '100%': { transform: 'translateX(500%)' },
        },
      },
    },
  },
  plugins: [],
}