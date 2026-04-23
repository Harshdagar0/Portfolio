import React from 'react';
import { motion } from "motion/react";

const view = { once: true, amount: 0.2 };
const itemTransition = { duration: 0.45, delay: 0.1 };

const experiences = [
  {
    duration: "Sep 2025 - Present",
    location: "New Delhi",
    role: "Backend Developer - Acetech Information Systems Pvt. Ltd",
    points: [
      "Worked on a microservices-based ESL project and maintained scalable backend services.",
      "Designed and implemented IAM with secure authentication and RBAC authorization.",
      "Integrated Apache Kafka for event-driven communication and built background workers and schedulers.",
      "Implemented Redis-based session management and improved performance using caching strategies.",
    ],
    tags: ["Node.js", "Express.js", "Microservices", "IAM", "RBAC", "Kafka", "Redis"],
    tagClass: "border-sky-300/40 bg-sky-400/10 text-sky-200",
  },
  {
    duration: "Jun 2025 - Aug 2025",
    location: "New Delhi",
    role: "Front-end Developer - NexGen Innovators IT Services Pvt Ltd",
    points: [
      "Worked on WordPress and Shopify projects by creating custom sections and reusable blocks.",
      "Used WordPress plugins to improve features and overall site performance.",
      "Performed MS, VT, and SPU testing to ensure functionality and quality.",
      "Managed deployment and hosting tasks using Hostinger services.",
    ],
    tags: ["WordPress", "Shopify", "HTML", "CSS", "JavaScript", "Bootstrap"],
    tagClass: "border-emerald-300/40 bg-emerald-400/10 text-emerald-200",
  },
  {
    duration: "Jan 2025 - Mar 2025",
    location: "New Delhi",
    role: "Front-end Developer Intern - CodyNest Technologies",
    points: [
      "Built landing panels in React and styled interfaces using Tailwind CSS.",
      "Implemented login, signup, reset password, and route protection flows.",
      "Developed account settings, deletion, restoration, and user activation or deactivation features.",
    ],
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Authentication"],
    tagClass: "border-orange-300/40 bg-orange-400/10 text-orange-200",
  },
  {
    duration: "Jun 2024 - Jul 2024",
    location: "Uttam Nagar",
    role: "Front-end Developer Intern - Go Business India",
    points: [
      "Contributed to three projects including one client project.",
      "Built e-commerce clones inspired by Myntra and MakeMyTrip.",
      "Focused on responsive UI implementation and frontend delivery.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Frontend"],
    tagClass: "border-cyan-300/40 bg-cyan-400/10 text-cyan-200",
  },
];

function Experience() {
  return (
    <div className='my-16 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 px-6 py-10 lg:px-10'>
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={view}
        transition={{ duration: 0.35, delay: 0.05 }}
        className='mb-10 text-center text-4xl'
      >
        Experience
      </motion.h1>

      <div className='space-y-8'>
        {experiences.map((experience, index) => (
          <div key={experience.role} className='rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 lg:flex'>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={view}
              transition={{ ...itemTransition, delay: 0.08 + index * 0.04 }}
              className='pb-2 text-center text-zinc-400 lg:w-1/3 lg:pt-1'
            >
              <p>{experience.duration}</p>
              <p className='mt-1 text-sm text-zinc-500'>{experience.location}</p>
            </motion.div>
            <div className='lg:w-2/3'>
              <motion.h2
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={view}
                transition={{ ...itemTransition, delay: 0.1 + index * 0.04 }}
                className='text-center text-xl lg:text-left'
              >
                {experience.role}
              </motion.h2>
              <motion.ul
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={view}
                transition={{ duration: 0.45, delay: 0.12 + index * 0.04 }}
                className='mb-3 mt-3 list-disc space-y-2 pl-5 text-zinc-400 lg:text-left'
              >
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </motion.ul>
              <motion.div
                initial={{ y: 8, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ duration: 0.4, delay: 0.14 + index * 0.04 }}
                className='flex flex-wrap justify-center gap-2 lg:justify-start'
              >
                {experience.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-1 text-sm ${experience.tagClass}`}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
