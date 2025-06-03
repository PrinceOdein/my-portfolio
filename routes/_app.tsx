import { type PageProps } from "$fresh/server.ts";
import ThemeToggle from "../islands/ThemeToggle.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <style>{`html { scroll-behavior: smooth; }`}</style>
        <meta name="description" content="Tamunodein's personal website" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TaMüÑøD€ïÑ</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <ThemeToggle />
        <Component />
      </body>
    </html>
  );
}
