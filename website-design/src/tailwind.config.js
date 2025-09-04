module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",], // adjust to your project
  theme: {
    extend: {
      keyframes: {
        slowBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25%)" }, // similar to -translate-y
        },
      },
      animation: {
        "slow-bounce": "slowBounce 3s ease-in-out infinite", // 3s = slomo
      },
    },
  },
  plugins: [],
};
