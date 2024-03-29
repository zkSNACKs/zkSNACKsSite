/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      green: "#77C600",
      white: "#FFFFFF",
      black: "#000000",
      darkgreen: "#405443",
      forestgreen: "#1E3C22",
    },
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
};
