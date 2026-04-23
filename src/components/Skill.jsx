import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { motion } from "motion/react";

const sectionTransition = { duration: 0.4, delay: 0.08 };
const rowTransition = { duration: 0.45, delay: 0.1 };
const view = { once: true, amount: 0.2 };

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
        Technologies
      </motion.h1>

      <div className='mt-10 space-y-8'>
        <div className='rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 lg:flex lg:items-center'>
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={rowTransition}
            className='mb-4 text-center text-xl font-thin lg:mb-0 lg:w-1/4 lg:text-left'
          >
            Frontend
          </motion.h2>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={{ duration: 0.45, delay: 0.14 }}
            className='flex justify-between gap-5 text-3xl text-cyan-200 lg:w-3/4 lg:justify-around'
          >
            <FaHtml5 />
            <FaCss3Alt />
            <FaNodeJs />
            <FaReact />
            <FaBootstrap />
            <RiTailwindCssFill />
          </motion.div>
        </div>

        <div className='rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 lg:flex lg:items-center'>
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={rowTransition}
            className='mb-4 text-center text-xl font-thin lg:mb-0 lg:w-1/4 lg:text-left'
          >
            Backend
          </motion.h2>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={{ duration: 0.45, delay: 0.14 }}
            className='flex justify-center gap-12 text-4xl text-orange-200 lg:w-3/4 lg:justify-start'
          >
            <SiExpress className='mt-1' />
            <DiNodejs />
          </motion.div>
        </div>

        <div className='rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 lg:flex lg:items-center'>
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={rowTransition}
            className='mb-4 text-center text-xl font-thin lg:mb-0 lg:w-1/4 lg:text-left'
          >
            Database
          </motion.h2>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={{ duration: 0.45, delay: 0.14 }}
            className='flex justify-center gap-12 text-4xl text-emerald-200 lg:w-3/4 lg:justify-start'
          >
            <SiMysql />
            <SiMongodb className='mt-1' />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
