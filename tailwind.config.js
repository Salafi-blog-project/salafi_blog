// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '1024px',
    // => @media (min-width: 1024px) { ... }

    'lg': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
  plugins: [],
};
