import { useState } from "preact/hooks";
import { projects, Project } from "../data/projects.ts";
import ProjectCard from "../components/ProjectCard.tsx";

const categories = ["all", "web", "design", "open-source"] as const;

export default function ProjectGallery() {
  const [selected, setSelected] = useState<typeof categories[number]>("all");

  const filtered = selected === "all"
    ? projects
    : projects.filter((p) => p.category === selected);

  return (
    <div class="space-y-6">
      <div class="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            class={`px-4 py-1 rounded-full border ${
              selected === cat
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-white text-black dark:bg-gray-800 dark:text-white"
            }`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
