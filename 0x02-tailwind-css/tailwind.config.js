/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [{ pattern: /(bg|text|border)-(red|blue|green|yellow)/ }],
};
