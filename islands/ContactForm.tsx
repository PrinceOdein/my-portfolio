export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/xzzgblrg"
      method="POST"
      class="space-y-4 max-w-md"
    >
      <div>
        <label class="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          required
          class="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label class="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="_replyto"
          required
          class="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label class="block mb-1 font-medium">Message</label>
        <textarea
          name="message"
          required
          class="w-full border rounded px-3 py-2"
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  );
}
