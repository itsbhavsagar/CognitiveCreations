/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        scrollRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // Adjust to scroll to the end of the duplicated content
        },
      },
      animation: {
        'scroll-right': 'scrollRight 20s linear infinite', // Adjust duration as needed
      },
    },
  },
  plugins: [],
};
