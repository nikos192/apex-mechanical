/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "midnight": "#0b0b0b",
        "charcoal": "#111111",
        "steel": "#151515",
        "electric": "#2d7dff",
        "ice": "#e6eeff",
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow": "0 18px 45px rgba(45, 125, 255, 0.25)",
        "soft": "0 18px 40px -20px rgba(0, 0, 0, 0.75)",
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
