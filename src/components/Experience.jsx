import { motion } from "motion/react";
import { FaBriefcase } from "react-icons/fa6";

const view = { once: true, amount: 0.2 };
const itemTransition = { duration: 0.45, delay: 0.1 };

const experiences = [
  {
    duration: "Sep 2025 - Present",
    location: "New Delhi, India",
    role: "Backend Developer",
    company: "Acetech Information Systems Pvt. Ltd.",
    points: [
      "Engineered and maintained microservices-based electronic shelf label (ESL) backend architecture.",
      "Designed and implemented Identity & Access Management (IAM) with secure authentication and granular Role-Based Access Control (RBAC).",
      "Integrated Apache Kafka for asynchronous event-driven messaging, background workers, and schedulers.",
      "Implemented Redis session storage and caching strategies, reducing database load and response latency.",
    ],
    tags: ["Node.js", "Express.js", "Microservices", "Kafka", "Redis", "IAM", "RBAC"],
    tagClass: "border-sky-400/30 bg-sky-400/10 text-sky-200",
  },
  {
    duration: "Jun 2025 - Aug 2025",
    location: "New Delhi, India",
    role: "Front-end Developer Intern",
    company: "NexGen Innovators IT Services Pvt. Ltd.",
    points: [
      "Developed high-converting WordPress and Shopify stores with custom sections and reusable UI components.",
      "Optimized website load times, asset delivery, and responsive layouts across mobile and desktop devices.",
      "Executed comprehensive MS, VT, and SPU quality assurance testing prior to client delivery.",
      "Managed production hosting, domain configurations, and deployment pipelines via Hostinger.",
    ],
    tags: ["WordPress", "Shopify", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    tagClass: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  },
  {
    duration: "Jan 2025 - Mar 2025",
    location: "New Delhi, India",
    role: "Front-end Developer Intern",
    company: "CodyNest Technologies",
    points: [
      "Built modern dashboard and landing page panels using React.js and styled with Tailwind CSS.",
      "Implemented comprehensive auth workflows including Login, Registration, Password Reset, and Protected Routes.",
      "Designed user profile management, account restoration, and role activation/deactivation features.",
    ],
    tags: ["React.js", "Tailwind CSS", "JavaScript", "JWT Auth", "UI/UX"],
    tagClass: "border-orange-400/30 bg-orange-400/10 text-orange-200",
  },
  {
    duration: "Jun 2024 - Jul 2024",
    location: "New Delhi, India",
    role: "Front-end Developer Intern",
    company: "Go Business India",
    points: [
      "Contributed to multiple client projects focusing on fast, responsive UI delivery.",
      "Built interactive e-commerce clones inspired by leading platforms such as Myntra and MakeMyTrip.",
      "Enhanced cross-browser compatibility and responsive performance for mobile users.",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    tagClass: "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
  },
];

function Experience() {
  return (
    <section id="experience" className="my-14 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 px-6 py-10 lg:my-20 lg:px-10">
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={view}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Career History</span>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Work <span className="text-zinc-400">Experience</span>
        </h2>
      </motion.div>

      <div className="mt-10 space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={exp.company + exp.role}
            className="rounded-xl border border-zinc-800/90 bg-zinc-900/60 p-6 transition-all duration-200 hover:border-zinc-700 lg:flex lg:gap-6"
          >
            {/* Timeline Column */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={view}
              transition={{ ...itemTransition, delay: 0.08 + index * 0.04 }}
              className="pb-4 text-center lg:w-1/3 lg:pb-0 lg:text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs font-medium text-cyan-300">
                <FaBriefcase className="text-xs" />
                <span>{exp.duration}</span>
              </div>
              <p className="mt-2 text-xs font-medium text-zinc-400">{exp.location}</p>
            </motion.div>

            {/* Role & Company Details */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={view}
                transition={{ ...itemTransition, delay: 0.1 + index * 0.04 }}
                className="text-center lg:text-left"
              >
                <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                <h4 className="text-sm font-medium text-cyan-200">{exp.company}</h4>
              </motion.div>

              <motion.ul
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={view}
                transition={{ duration: 0.45, delay: 0.12 + index * 0.04 }}
                className="mb-4 mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-300"
              >
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ y: 8, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ duration: 0.4, delay: 0.14 + index * 0.04 }}
                className="flex flex-wrap justify-center gap-2 lg:justify-start"
              >
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-0.5 text-xs font-medium ${exp.tagClass}`}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
