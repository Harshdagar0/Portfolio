import React from 'react';
import { motion } from "motion/react";

const sectionTransition = { duration: 0.4, delay: 0.08 };
const rowTransition = { duration: 0.45, delay: 0.1 };
const view = { once: true, amount: 0.2 };

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["C", "JavaScript"],
  },
  {
    title: "Frontend",
    items: ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "Redux Toolkit", "WordPress", "Shopify"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Sequelize (ORM)", "REST APIs", "Microservices Architecture", "IAM", "RBAC"],
  },
  {
    title: "Database",
    items: ["MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Tools & Platforms",
    items: ["Postman", "Thunder Client", "NPM", "Render", "Vercel", "GitHub"],
  },
  {
    title: "Message Broker",
    items: ["Apache Kafka"],
  },
];

function Skill() {
  return (
    <div className='my-14 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 px-6 py-10 lg:px-10'>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={view}
        transition={sectionTransition}
        className='text-center text-4xl'
      >
        Skillsets
      </motion.h1>

      <div className='mt-10 space-y-6'>
        {skillGroups.map((group, index) => (
          <div key={group.title} className='rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 lg:flex lg:items-start'>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={view}
              transition={{ ...rowTransition, delay: 0.08 + index * 0.03 }}
              className='mb-4 text-center text-xl font-medium text-cyan-200 lg:mb-0 lg:w-1/3 lg:text-left'
            >
              {group.title}
            </motion.h2>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={view}
              transition={{ duration: 0.45, delay: 0.12 + index * 0.03 }}
              className='flex flex-wrap gap-2 lg:w-2/3'
            >
              {group.items.map((item) => (
                <span
                  key={item}
                  className='rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-sm text-zinc-300'
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
