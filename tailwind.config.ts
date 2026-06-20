import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        air: {
          white: "#FBFAF6",
          cream: "#EEE5D6",
          mist: "#DCEFF4",
          blue: "#A8CDD8",
          green: "#0E3D32",
          leaf: "#2F6B55",
          moss: "#72947E",
          gold: "#C79A3F",
          charcoal: "#18231F"
        }
      },
      boxShadow: {
        soft: "0 24px 70px rgba(14, 61, 50, 0.12)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "ui-serif", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
