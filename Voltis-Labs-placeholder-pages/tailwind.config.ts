import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // Covers all relevant files in src
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // If using older Next.js convention
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Ensures components are included
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Next.js app directory
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
