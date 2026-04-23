import React from 'react';
import { motion } from "motion/react";

const view = { once: true, amount: 0.2 };
const itemTransition = { duration: 0.45, delay: 0.1 };

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
        <div className='rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 lg:flex'>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={itemTransition}
            className='pb-2 text-center text-zinc-400 lg:w-1/3 lg:pt-1'
          >
            June 2024 - July 2024
          </motion.div>
          <div className='lg:w-2/3'>
            <motion.h2
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={view}
              transition={itemTransition}
              className='text-center text-xl lg:text-left'
            >
              Front-end Developer (Intern) - Go Business India
            </motion.h2>
            <motion.p
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={view}
              transition={{ duration: 0.45, delay: 0.12 }}
              className='mb-3 mt-2 text-center text-zinc-400 lg:text-left'
            >
              Worked on three projects including a client project and two clones (Myntra and MakeMyTrip),
              focusing on frontend UI implementation and responsive layouts.
            </motion.p>
            <motion.div
              initial={{ y: 8, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={view}
              transition={{ duration: 0.4, delay: 0.14 }}
              className='flex flex-wrap justify-center gap-2 lg:justify-start'
            >
              <span className='rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200'>HTML</span>
              <span className='rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200'>CSS</span>
              <span className='rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200'>JavaScript</span>
            </motion.div>
          </div>
        </div>

        <div className='rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 lg:flex'>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={itemTransition}
            className='pb-2 text-center text-zinc-400 lg:w-1/3 lg:pt-1'
          >
            Jan 2025 - Feb 2025
          </motion.div>
          <div className='lg:w-2/3'>
            <motion.h2
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={view}
              transition={itemTransition}
              className='text-center text-xl lg:text-left'
            >
              Front-end Developer (Intern) - Codynest Technologies
            </motion.h2>
            <motion.p
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={view}
              transition={{ duration: 0.45, delay: 0.12 }}
              className='mb-3 mt-2 text-center text-zinc-400 lg:text-left'
            >
              Built landing panels in React with Tailwind CSS and implemented authentication flows including
              login, signup, reset password, route protection, and user account management features.
            </motion.p>
            <motion.div
              initial={{ y: 8, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={view}
              transition={{ duration: 0.4, delay: 0.14 }}
              className='flex flex-wrap justify-center gap-2 lg:justify-start'
            >
              <span className='rounded-full border border-orange-300/40 bg-orange-400/10 px-3 py-1 text-sm text-orange-200'>React.js</span>
              <span className='rounded-full border border-orange-300/40 bg-orange-400/10 px-3 py-1 text-sm text-orange-200'>Tailwind CSS</span>
              <span className='rounded-full border border-orange-300/40 bg-orange-400/10 px-3 py-1 text-sm text-orange-200'>JavaScript</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
