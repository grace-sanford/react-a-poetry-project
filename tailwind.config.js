/** @type {import('tailwindcss').Config} */
module.exports = {
  content:
    // ["./src/*.{html, js}",
    // "./src/app/*.{html, js}",
    // "./src/components/*.{html, js}"],
    // ["./src/**/*.{html,js}"],
    ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui", "Arial"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
  },
  plugins: [],
};
