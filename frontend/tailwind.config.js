/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["'Space Grotesk'", "sans-serif"],  // existing
        orbitron: ["'Orbitron'", "sans-serif"],       // futuristic headings
        poppins: ["'Poppins'", "sans-serif"],         // clean body text
        audiowide: ["'Audiowide'", "sans-serif"],     // logo or brand name
        sora: ["'Sora'", "sans-serif"],               // sleek techy vibe
      },

      // 🌈 Gradient Animation Add
      keyframes: {
        gradientFlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradientFlow: "gradientFlow 6s ease infinite",
      },
    },
  },
  plugins: [],
}
