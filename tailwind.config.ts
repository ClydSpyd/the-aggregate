import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        brandOne: "var(--brand-one)",
        brandTwo: "var(--brand-two)",
        brandThree: "var(--brand-three)",
        brandFour: "var(--brand-four)",
        brandFive: "var(--brand-five)",
        brandSix: "var(--brand-six)",
      },
    },
    keyframes: {
      "pulse-grow": {
        "0%": { transform: "scale(1)" },
        "20%": { transform: "scale(1.14)" },
        "30%": { transform: "scale(1)" },
        "60%": { transform: "scale(1.04)" },
        "80%": { transform: "scale(1)" },
      },
    },
    animation: {
      pulseGrow: "pulse-grow 2.5s ease-in-out infinite",
    },
  },
  plugins: [],
};
export default config;
