import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      spacing: {
        "128": "30rem",
      },
      backgroundImage: {
        "login-bg": "url('/bg-astro.png')",
      },
      backgroundColor: {
        "course-hdr": "#1e2126",
        "course-body": "#222429",
        "course-tt": "#2a2e39",
      },
      colors: {
        "green-1": "#93BC1E",
        "green-2": "#C4CF00",
      },
      height: {
        course: "calc(100% - 73px)",
      },
    },
  },
  plugins: [],
};
export default config;
