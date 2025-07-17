/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'button-bg': '#491bbf',
        'text-custom': '#491bbf',
        'border-custom': '#491bbf',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
      },
      animation: {
        'pulse-1s': 'pulse 1s infinite',
      },
    },
  },
  plugins: [],
}
