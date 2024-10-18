/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3932",
        secondary: "#05784E",
        accent: "#D4E9E2",
        light: "#00754A",
        lightAccent: "#F1F8F5",
      },
      fontFamily: {
        roboto: "Roboto,",
      },
      backgroundImage: {
        star: "linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url('../img/hero-mobile_2021.jpg')",
        rewards:
          "linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url('../img/green.png')",
        desktop:
          "linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url('../img/xl-hero-desktop_2021.png')",
      },
    },
  },
  plugins: [],
};
