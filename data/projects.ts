export interface Project {
  title: string;
  description: string;
  image: string;
  category: "web" | "design" | "open-source";
  link: string;
}

export const projects: Project[] = [
  {
    title: "My Portfolio",
    description: "Personal website built with Fresh, Deno, and TailwindCSS.",
    image: "/images/portfolio.png", // Place this image in /static/images
    category: "web",
    link: "https://yourportfolio.com",
  },
  {
    title: "Design System",
    description: "A reusable design system using Figma + Tailwind.",
    image: "/images/design-system.png",
    category: "design",
    link: "#",
  },
  {
    title: "Open Source Contribution",
    description: "Contributed to Deno's ecosystem and libraries.",
    image: "/images/open-source.png",
    category: "open-source",
    link: "#",
  },
];
