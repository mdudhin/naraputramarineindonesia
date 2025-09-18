/** @type {import('tailwindcss').Config} */
export default {
  // No `content` key needed in v4, Vite plugin handles it.

  // Theme configuration is now at the root level.
  fontFamily: {
    sans: ["Roboto", "sans-serif"],
    serif: ["Playfair Display", "serif"],
  },
  animation: {
    "fade-in-down": "keyframes-down 1s ease-out .2s forwards",
    "fade-in-up": "keyframes-up 1s ease-out .4s forwards",
    "bounce-slow": "bounce-slow 2s infinite",
  },
  keyframes: {
    "keyframes-down": {
      from: { opacity: "0", transform: "translateY(-20px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "keyframes-up": {
      from: { opacity: "0", transform: "translateY(20px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "bounce-slow": {
      "0%, 100%": {
        transform: "translateY(-15%)",
        animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
      },
      "50%": {
        transform: "translateY(0)",
        animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
      },
    },
  },
};
