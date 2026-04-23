import React from 'react';
import { motion } from "motion/react";

const view = { once: true, amount: 0.2 };
const fastTransition = { duration: 0.45, delay: 0.1 };

const projects = [
  {
    title: "Book Appointment",
    url: "https://doctor-appointment-sigma-ruby.vercel.app/",
    description:
      "Built a full doctor appointment platform with MERN where users can find doctors by specialization, book slots, and doctors can manage profile and availability.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Node", "Express", "MongoDB"],
  },
  {
    title: "E-commerce",
    url: "https://e-commerce1-woad.vercel.app/",
    description:
      "Created a responsive e-commerce application with authentication, protected cart routes, and product purchase flow with session-based user interactions.",
    tags: ["React", "Bootstrap", "JavaScript", "Node", "Express", "MongoDB"],
  },
  {
    title: "Student Guidance",
    url: "https://student-guidance.onrender.com/home",
    description:
      "Developed a frontend-focused student guidance platform using EJS templates and reusable UI blocks for page rendering and navigation.",
    tags: ["EJS", "CSS", "Bootstrap", "JavaScript", "Node", "Express"],
  },
];

function Project() {
  return (
    <div id="projects" className='my-16 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 px-6 py-10 lg:px-10'>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={view}
        transition={{ duration: 0.35, delay: 0.05 }}
        className='mb-2 text-center text-4xl'
      >
        Projects
      </motion.h1>
      <motion.p
        initial={{ y: 8, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={view}
        transition={{ duration: 0.3, delay: 0.08 }}
        className='mb-8 text-center text-zinc-400'
      >
        Click on project name to open live demo
      </motion.p>

      <div className='space-y-6'>
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={view}
            transition={{ duration: 0.45, delay: 0.06 * (index + 1) }}
            className='rounded-xl border border-zinc-800 bg-zinc-900/70 p-5'
          >
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className='text-2xl font-medium text-cyan-200 transition hover:text-cyan-100'
            >
              {project.title}
            </a>
            <motion.p
              initial={{ x: 16, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={view}
              transition={fastTransition}
              className='mb-4 mt-3 text-zinc-400'
            >
              {project.description}
            </motion.p>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={view}
              transition={{ duration: 0.4, delay: 0.12 }}
              className='flex flex-wrap gap-2'
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className='rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-sm text-zinc-300'
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
