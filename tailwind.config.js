/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      animation: {
        'slide-top':
          'slide-top 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) 1s both',
      },

      keyframes: {
        'slide-top': {
          '0%': {
            transform: 'translateY(-1000px) scaleY(2.5) scaleX(0.2)',
            'transform-origin': '50% 0%',
            filter: 'blur(40px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0) scaleY(1) scaleX(1)',
            'transform-origin': '50% 50%',
            filter: 'blur(0)',
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
}
