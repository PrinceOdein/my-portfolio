import { useEffect } from "preact/hooks";
import { Project } from "../data/projects.ts";

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    addEventListener("keydown", listener);
    return () => removeEventListener("keydown", listener);
  }, []);

  return (
    <div class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div class="bg-white dark:bg-gray-900 rounded-lg max-w-md w-full p-6 relative">
        <button onClick={onClose} class="absolute top-2 right-2 text-gray-400 md:hover:text-red-500 text-xl">&times;</button>
        <img src={project.image} alt={project.title} class="w-full h-40 object-cover rounded" />
        <h2 class="text-xl font-bold mt-4">{project.title}</h2>
        <p class="text-sm mt-2">{project.description}</p>
        <a href={project.link} class="mt-4 inline-block text-blue-600 md:hover:underline" target="_blank">Visit Project ↗</a>
      </div>
    </div>
  );
}
