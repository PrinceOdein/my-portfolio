import { useEffect, useState } from "preact/hooks";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      class="fixed bottom-4 right-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-2 rounded-full shadow-lg opacity-40 hover:opacity-100 focus:opacity-100 transition md:opacity-100 z-50"
    >
      {/* {theme === "dark" ? "☀️ Light" : "🌙 Dark"} */}
      🌗
    </button>
  );
}
