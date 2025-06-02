export default function Projects() {
  const projects = [
    { name: "Todo App", url: "https://github.com/yourusername/todo-app" },
    { name: "Weather Dashboard", url: "https://github.com/yourusername/weather-dashboard" },
  ];

  return (
    <div class="mt-8">
      <h2 class="text-2xl font-semibold mb-2">Projects</h2>
      <ul class="list-disc ml-6">
        {projects.map((p) => (
          <li>
            <a class="text-blue-500 underline" href={p.url} target="_blank">{p.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
