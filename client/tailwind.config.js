/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "xs": "475px",
      },colors: {
        "primary-blue": "#1876f2",
        blur: "rgba(230, 230, 230, 0.7)",
      },
    },
  },
  plugins: [],
};
