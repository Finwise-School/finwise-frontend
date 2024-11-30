const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-custom': 'radial-gradient(circle, #000000, #8a3ff26c)',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slide: {
          '0%, 100%': { opacity: 0, transform: 'translateX(100%)' },
          '33.33%': { opacity: 1, transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'carousel-slide': 'slide 6s infinite',
        float: 'float 1.5s ease-in-out infinite',
      },
      colors: {
        customOrange: '#F1592B', // Add your custom color here
      },
    },
  },
  variants: {
    margin: ['responsive'],
  },
  plugins: [
    flowbite.plugin(),
  ],
};
