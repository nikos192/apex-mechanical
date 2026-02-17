/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "midnight": "#0b0d12",
        "charcoal": "#0f131a",
        "steel": "#1b2230",
        "electric": "#2d7dff",
        "ice": "#d9e4ff",
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow": "0 0 45px rgba(45, 125, 255, 0.25)",
        "soft": "0 18px 40px -20px rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        "mesh": "radial-gradient(circle at 15% 20%, rgba(45, 125, 255, 0.15), transparent 35%), radial-gradient(circle at 80% 0%, rgba(255, 255, 255, 0.08), transparent 40%), radial-gradient(circle at 70% 80%, rgba(10, 14, 22, 0.9), transparent 45%)",
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
