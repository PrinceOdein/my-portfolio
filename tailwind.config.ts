import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
    darkMode: "class", // ✅ For theme toggle
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
