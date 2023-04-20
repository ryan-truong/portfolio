/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          '0%':{opacity: '0%'},
          '100%':{opacity: '100%'}
        }
      },
      animation: {
        fadeInPicture: 'fadeIn 4s',
        fadeIn: 'fadeIn 6s',
        fadeInP1: 'fadeIn 4s',
        fadeInP2: 'fadeIn 6s',
        fadeInP3: 'fadeIn 8s'
      }
    },
  },
  plugins: [],
}
