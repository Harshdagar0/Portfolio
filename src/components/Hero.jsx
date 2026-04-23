import React from "react";
import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { x: -40, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      delay,
    },
  },
});

function Hero() {
  return (
    <div className="mb-14 mt-10 lg:mb-20 lg:mt-16 lg:flex lg:items-center">
      <div className="lg:w-1/2">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="show"
          className="pt-10 text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl lg:pt-16"
        >
          Harsh Dagar
        </motion.h1>
        <motion.h2
          variants={container(0.1)}
          initial="hidden"
          animate="show"
          className="mt-3 inline-block bg-gradient-to-r from-cyan-300 via-teal-200 to-orange-300 bg-clip-text text-2xl text-transparent lg:mt-4 lg:text-4xl"
        >
          Full Stack Developer
        </motion.h2>
        <motion.p
          variants={container(0.18)}
          initial="hidden"
          animate="show"
          className="mt-4 max-w-xl text-zinc-300 lg:mt-5"
        >
          Harsh Dagar, Full Stack Developer specializing in the MERN stack. I completed my BCA in 2025
          from Trinity Institute of Professional Studies. Currently working as a Node.js Developer at
          Actech India since September 2025. I have also completed a 3-month internship as a Frontend
          Developer at Nexgen. I enjoy building scalable web applications and continuously improving my
          development skills through real-world projects.
        </motion.p>
        <motion.div
          variants={container(0.24)}
          initial="hidden"
          animate="show"
          className="mt-6 flex gap-3"
        >
          <a
            href="#contact"
            className="rounded-lg bg-cyan-300 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-cyan-200"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="rounded-lg border border-zinc-700 px-4 py-2 text-sm transition hover:border-zinc-500 hover:bg-zinc-900/70"
          >
            View Projects
          </a>
        </motion.div>
      </div>
      <div className="mt-10 lg:mt-0 lg:w-1/2">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto w-fit rounded-3xl border border-zinc-800 bg-zinc-900/60 p-4 shadow-[0_0_30px_rgba(56,189,248,0.08)]"
        >
          <motion.img
            initial={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="mx-auto w-44 rounded-2xl object-cover lg:w-72"
            src="/image/avatar.png"
            alt="Avatar"
          ></motion.img>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
