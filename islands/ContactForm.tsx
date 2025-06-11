export default function ContactForm() {
  return (
    <form
  method="POST"
  action="https://formspree.io/f/xzzgblrg"
  class="space-y-4"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    class="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    class="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <textarea
    name="message"
    placeholder="Your Message"
    rows={5}
    required
    class="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
  ></textarea>
  <button
    type="submit"
    class="bg-blue-600 md:hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded"
  >
    Send Message
  </button>
</form>

  );
}
