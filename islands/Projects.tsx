export default function Projects() {
  const projects = [
    {
      name: "Todo App",
      url: "https://github.com/yourusername/todo-app",
      image: "/todo.png",
    },
    {
      name: "Weather Dashboard",
      url: "https://github.com/yourusername/weather-dashboard",
      image: "/weather.png",
    },
  ];

  return (
    <div class="mt-8">
      <h2 class="text-2xl font-semibold mb-2">Projects</h2>
      <div class="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <div class="border rounded-lg p-4 shadow-md">
            <img src={p.image} alt={p.name} class="w-full h-48 object-cover mb-2 rounded" />
            <h3 class="text-lg font-bold">{p.name}</h3>
            <a href={p.url} class="text-blue-600 underline" target="_blank">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
}
