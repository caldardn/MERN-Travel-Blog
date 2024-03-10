/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#D16BA5',
        'custom-blue': '#86A8E7',
        'custom-green': '#00E9DA',
      },
      screens: {
        dc: "1023px",
        cd: "100px",
        na: "768px",
        an: "0px"

      },
    }
  },
  plugins: ['flowbite/plugin'],
}

