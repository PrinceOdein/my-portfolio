import { Project } from "../data/projects.ts";

export default function ProjectCard({ project }: { project: Project }) {
  return (
<a
  href="#"
  onClick={(e) => e.preventDefault()} // Prevent direct link for modal
  class="block bg-white dark:bg-gray-800 rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
>
  <img src={project.image} alt={project.title} class="w-full h-40 object-cover" />
  <div class="p-4">
    <h3 class="text-lg font-semibold">{project.title}</h3>
    <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{project.description}</p>
  </div>
</a>

  );
}
