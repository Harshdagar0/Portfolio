import React from 'react';
import { motion } from "motion/react";

function About() {
  return (
    <div className='mb-14 mt-14 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 px-6 py-10 lg:mt-20 lg:px-10'>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35, delay: 0.06 }}
        className='text-center text-4xl'
      >
        About <span className='text-zinc-400'>Me</span>
      </motion.h1>
      <div className='mt-8 lg:flex lg:items-start lg:gap-8'>
        <div className='lg:w-1/2 lg:py-2'>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className='leading-7 text-zinc-300'
          >
            Hi, I&apos;m Harsh Dagar, a Full Stack Developer with a strong focus on the MERN stack. I completed
            my BCA in 2025 from Trinity Institute of Professional Studies and am currently working as a
            Node.js Developer at Actech India since September 2025. I have hands-on experience from a
            3-month internship as a Frontend Developer at Nexgen, where I worked on building responsive
            and user-friendly interfaces. I&apos;m passionate about creating efficient web applications and
            constantly enhancing my skills through practical projects. In my free time, I enjoy playing
            video games like BGMI. Let&apos;s connect and build something impactful together.
          </motion.p>
        </div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className='mt-8 rounded-xl border border-zinc-800 bg-zinc-900/70 p-5 lg:mt-0 lg:w-1/2'
        >
          <h2 className='text-center text-2xl'>Education</h2>
          <h3 className='mt-4 font-medium'>Bachelor of Computer Applications</h3>
          <p className='font-thin text-zinc-400'>Trinity Institute of Professional Studies, Dwarka, New Delhi - 2025</p>
          <h3 className='mt-4 font-medium'>Diploma in Computer Applications</h3>
          <p className='font-thin text-zinc-400'>Gro Tech Learn Foundation, Najafgarh, New Delhi - 2022</p>
          <h3 className='mt-4 font-medium'>10th and 12th</h3>
          <p className='font-thin text-zinc-400'>Navyug Convent Sr. Sec. School, Najafgarh, Delhi - 2021</p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
