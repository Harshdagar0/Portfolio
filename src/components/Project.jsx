import { motion } from "motion/react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const view = { once: true, amount: 0.2 };

const projects = [
  {
    title: "Doctor Appointment & Healthcare System",
    category: "Full Stack (MERN)",
    liveUrl: "https://doctor-appointment-sigma-ruby.vercel.app/",
    githubUrl: "https://github.com/Harshdagar0/doctor_appointment",
    description:
      "A complete healthcare appointment booking solution. Patients can browse doctors by specialization, check real-time availability, and schedule visits. Doctors have dedicated dashboards to manage appointments and slot schedules.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST API"],
    featured: true,
  },
  {
    title: "Modern E-Commerce Platform",
    category: "Full Stack Application",
    liveUrl: "https://e-commerce1-woad.vercel.app/",
    githubUrl: "https://github.com/Harshdagar0/E-commerce",
    description:
      "A responsive e-commerce web app featuring user authentication, product catalog filters, session-based persistent cart, and seamless checkout workflow with protected routing.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "JWT"],
    featured: false,
  },
  {
    title: "Student Career & Academic Guidance Portal",
    category: "Web Application",
    liveUrl: "https://student-guidance.onrender.com/home",
    githubUrl: "https://github.com/Harshdagar0/student_guidance",
    description:
      "An educational portal built with server-side EJS templates and modular components, providing students with structured career roadmaps, course resources, and guidance mentorship.",
    tags: ["Node.js", "Express.js", "EJS", "Bootstrap", "JavaScript", "Render"],
    featured: false,
  },
];

function Project() {
  return (
    <section id="projects" className="my-14 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 px-6 py-10 lg:my-20 lg:px-10">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={view}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Portfolio Work</span>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Featured <span className="text-zinc-400">Projects</span>
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-zinc-400">
          A showcase of full-stack web applications, REST APIs, and client-side interfaces with live deployments and source code.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={view}
            transition={{ duration: 0.45, delay: 0.08 * (index + 1) }}
            className="group flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl hover:shadow-cyan-500/5"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 font-medium text-cyan-300">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="font-semibold text-amber-300">Featured</span>
                )}
              </div>

              <h3 className="mt-4 text-xl font-bold text-zinc-100 transition-colors group-hover:text-cyan-200">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80">
              {/* Tech Stack Pills */}
              <div className="mb-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons: Live Demo & GitHub */}
              <div className="flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-400/10 border border-cyan-400/30 px-3 py-2 text-xs font-semibold text-cyan-200 transition-all hover:bg-cyan-400/20 hover:text-cyan-100"
                >
                  <FiExternalLink className="text-sm" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:bg-zinc-800 hover:text-white"
                >
                  <FaGithub className="text-sm" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Project;
