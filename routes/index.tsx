import { PageProps } from "$fresh/server.ts";
import Projects from "../islands/Projects.tsx";

export default function Home(props: PageProps) {
  return (
    <div class="p-8">
      <h1 class="text-4xl font-bold mb-4">Hi, I'm [Your Name]</h1>
      <p class="text-lg mb-4">Web Developer with 3+ years of experience.</p>
      <p>Welcome to my simple portfolio. I'm currently working with SolidJS, Deno, and more.</p>

       <Projects />

        <div class="mt-10">
  <h2 class="text-2xl font-semibold mb-2">Contact</h2>
  <p>Find me on:</p>
  <ul>
    <li><a class="text-blue-500 underline" href="https://github.com/yourusername">GitHub</a></li>
    <li><a class="text-blue-500 underline" href="https://linkedin.com/in/yourprofile">LinkedIn</a></li>
  </ul>
</div>

    </div>
  );
}
