import React from 'react';
import { motion } from "motion/react";

const view = { once: true, amount: 0.2 };
const itemTransition = { duration: 0.45, delay: 0.1 };

const experiences = [
  {
    duration: "Jun 2025 - Aug 2025",
    role: "Front-end Developer (Intern) - NexGen Innovators",
    description:
      "Worked on WordPress and Shopify projects by creating pages, sections, and reusable blocks. Also performed MS, VT, and SPU testing and deployed projects using Hostinger.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "WordPress", "Shopify"],
    tagClass: "border-emerald-300/40 bg-emerald-400/10 text-emerald-200",
  },
  {
    duration: "Jan 2025 - Feb 2025",
    role: "Front-end Developer (Intern) - Codynest Technologies",
    description:
      "Built landing panels in React with Tailwind CSS and implemented authentication flows including login, signup, reset password, route protection, and user account management features.",
    tags: ["React.js", "Tailwind CSS", "JavaScript"],
    tagClass: "border-orange-300/40 bg-orange-400/10 text-orange-200",
  },
  {
    duration: "June 2024 - July 2024",
    role: "Front-end Developer (Intern) - Go Business India",
    description:
      "Worked on three projects including a client project and two clones (Myntra and MakeMyTrip), focusing on frontend UI implementation and responsive layouts.",
    tags: ["HTML", "CSS", "JavaScript"],
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
              {experience.duration}
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
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={view}
                transition={{ duration: 0.45, delay: 0.12 + index * 0.04 }}
                className='mb-3 mt-2 text-center text-zinc-400 lg:text-left'
              >
                {experience.description}
              </motion.p>
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
