/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,html}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Lora", "serif"],
        heading: ["Montserrat Subrayada", "sans-serif"],
        logo: ["Orbitron", "sans-serif"],
      },
      colors: {
        primary: "#0f1b2b",
        secondary: "#00bcd4",
        accent: "#00ff7f",
        neutral: "#f1f1f1",
        error: "#e53935",
        warning: "#fbc02d",
        darkGray: "#333333",
        hoverPrimary: "#0a1520",
        hoverSecondary: "#0097a7",
      },
      spacing: {
        '18': '4.5rem',
        '32': '8rem',
        '48': '12rem',
      },
      fontSize: {
        'xxs': '0.625rem',
        'lg': '1.25rem',
      },
      lineHeight: {
        'extra-loose': '2.5',
      },
      letterSpacing: {
        tight: '-0.015em',
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #00bcd4, #00ff7f)',
      },
      boxShadow: {
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 15px 30px rgba(0, 0, 0, 0.2)',
        'hover-lg': '0 20px 30px rgba(0, 0, 0, 0.3)',
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'transform': 'transform',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
