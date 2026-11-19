import ContactForm from './ContactForm';
import { motion } from "motion/react";
import { FiMail, FiPhone, FiMapPin, FiArrowUp } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="my-14 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 px-6 py-10 lg:my-20 lg:px-10">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -10, opacity: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Get In Touch</span>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Contact <span className="text-zinc-400">Me</span>
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
          Have a project in mind, a question, or a full-time opportunity? Feel free to reach out directly.
        </p>
      </motion.div>

      <div className="mb-10 mt-10 gap-8 rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 lg:flex lg:p-8">
        {/* Form */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -10, opacity: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="lg:w-1/2 lg:border-r lg:border-zinc-800 lg:pr-8"
        >
          <h3 className="mb-4 text-lg font-semibold text-zinc-100">Send a Message</h3>
          <ContactForm />
        </motion.div>

        {/* Contact Info & Socials */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 10, opacity: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-8 flex flex-col justify-between space-y-6 text-zinc-300 lg:mt-0 lg:w-1/2 lg:pl-4"
        >
          <div>
            <h3 className="mb-4 text-lg font-semibold text-zinc-100">Contact Details</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-cyan-400">
                  <FiMail className="text-base" />
                </div>
                <div>
                  <span className="block text-xs text-zinc-500">Email</span>
                  <a
                    href="mailto:dagarh89@gmail.com"
                    className="font-medium text-zinc-200 transition-colors hover:text-cyan-300"
                  >
                    dagarh89@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-cyan-400">
                  <FiPhone className="text-base" />
                </div>
                <div>
                  <span className="block text-xs text-zinc-500">Phone</span>
                  <a
                    href="tel:+919990728546"
                    className="font-medium text-zinc-200 transition-colors hover:text-cyan-300"
                  >
                    +91 99907 28546
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-cyan-400">
                  <FiMapPin className="text-base" />
                </div>
                <div>
                  <span className="block text-xs text-zinc-500">Location</span>
                  <p className="font-medium text-zinc-200">New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500">Connect Online</span>
            <div className="mt-3 flex gap-3 text-lg">
              <a
                href="https://www.linkedin.com/in/harsh-dagar-716125256/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-zinc-300 transition-all hover:border-cyan-500/40 hover:text-cyan-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/harshdagar0"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-zinc-300 transition-all hover:border-cyan-500/40 hover:text-cyan-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/harshdagar_0/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-zinc-300 transition-all hover:border-cyan-500/40 hover:text-cyan-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <hr className="border-zinc-800/70" />

      {/* Footer */}
      <footer className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-zinc-500 sm:flex-row">
        <p>© 2026 Harsh Dagar. Built with React & Tailwind CSS.</p>
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-400 transition-all hover:border-zinc-700 hover:text-zinc-200"
        >
          <span>Back to Top</span>
          <FiArrowUp />
        </button>
      </footer>
    </section>
  );
}

export default Contact;
