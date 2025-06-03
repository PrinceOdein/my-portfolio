import { PageProps } from "$fresh/server.ts";
import Projects from "../islands/Projects.tsx";
import ContactForm from "../islands/ContactForm.tsx";

export default function Home() {
  return (
    <main class="p-4 md:p-8 max-w-4xl mx-auto space-y-16">
      <section id="intro" class="space-y-4">
        <h1 class="text-4xl font-bold">Hi, I'm Tamunodein</h1>
        <p class="text-lg text-gray-700">
          A web developer with 3+ years of experience building front-end experiences using SolidJS, Deno, and more.
        </p>
      </section>

      <section id="projects">
        <h2 class="text-2xl font-semibold mb-4">Projects</h2>
        <Projects />
      </section>

      <section id="contact">
        <h2 class="text-2xl font-semibold mb-4">Contact Me</h2>
        <ContactForm />
      </section>
    </main>
  );
}
