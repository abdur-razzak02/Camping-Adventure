/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      daisyui: {
        themes: ["light", "dark", "winter", "cyberpunk"],
      },
      colors: {
        theme: "#5B9A42",
      },
      fontFamily: {
        italianno: ["Italianno", "cursive"],
        play: ["Play", "serif"],
      },
      backgroundImage: {
        slide1: "url('https://i.ibb.co.com/rG4K28v/slide-1.jpg')",
        slide2: "url('https://i.ibb.co.com/Ptb9PFX/slide-2.jpg')",
        slide3: "url('https://i.ibb.co.com/D4MgFjP/slide-3.jpg')",
        profileBg: "url('https://i.ibb.co.com/kqNXqXb/digital-technology-background.jpg')"
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
};
