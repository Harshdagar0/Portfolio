import { useForm, ValidationError } from '@formspree/react';
import { FiCheckCircle, FiSend } from "react-icons/fi";

function ContactForm() {
  const [state, handleSubmit] = useForm("xgvvpvyg");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-8 text-center">
        <FiCheckCircle className="text-4xl text-cyan-300" />
        <h4 className="mt-3 text-lg font-semibold text-zinc-100">Message Sent Successfully!</h4>
        <p className="mt-1 text-sm text-zinc-300">
          Thank you for reaching out. I will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="mb-1 block text-xs font-medium text-zinc-400">
          Your Name
        </label>
        <input
          id="name"
          className="w-full rounded-lg border border-zinc-700/80 bg-zinc-950/80 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          type="text"
          name="name"
          placeholder="Harsh"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-xs font-medium text-zinc-400">
          Email Address
        </label>
        <input
          id="email"
          className="w-full rounded-lg border border-zinc-700/80 bg-zinc-950/80 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          type="email"
          name="email"
          placeholder="harsh@example.com"
          required
        />
        <ValidationError
          className="mt-1 text-xs text-red-400"
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-xs font-medium text-zinc-400">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full rounded-lg border border-zinc-700/80 bg-zinc-950/80 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          placeholder="Hi Harsh, I'd like to discuss an opportunity..."
          name="message"
          required
        />
        <ValidationError
          className="mt-1 text-xs text-red-400"
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-300 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-md shadow-cyan-500/20 transition-all hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={state.submitting}
      >
        <FiSend className="text-sm" />
        <span>{state.submitting ? "Sending..." : "Send Message"}</span>
      </button>
    </form>
  );
}

export default ContactForm;
