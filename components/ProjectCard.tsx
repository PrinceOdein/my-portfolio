import { Project } from "../data/projects.ts";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      class="block bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-all overflow-hidden"
    >
      <img src={project.image} alt={project.title} class="w-full h-40 object-cover" />
      <div class="p-4">
        <h3 class="text-lg font-semibold">{project.title}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
      </div>
    </a>
  );
}
