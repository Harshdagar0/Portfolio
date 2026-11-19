import { motion } from "motion/react";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const container = (delay) => ({
  hidden: { x: -30, opacity: 0 },
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
    <section className="mb-14 mt-10 lg:mb-20 lg:mt-16 lg:flex lg:items-center lg:justify-between">
      <div className="lg:w-7/12">
        {/* Status Badge */}
        <motion.div
          variants={container(0)}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
          </span>
          Open to Opportunities & Collaborations
        </motion.div>

        <motion.h1
          variants={container(0.08)}
          initial="hidden"
          animate="show"
          className="pt-4 text-4xl font-bold tracking-tight sm:text-6xl lg:pt-6 lg:text-7xl"
        >
          Harsh Dagar
        </motion.h1>

        <motion.h2
          variants={container(0.16)}
          initial="hidden"
          animate="show"
          className="mt-2 inline-block bg-gradient-to-r from-cyan-300 via-teal-200 to-orange-300 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl lg:mt-3 lg:text-4xl"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          variants={container(0.22)}
          initial="hidden"
          animate="show"
          className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300 lg:mt-5"
        >
          Specializing in the <span className="font-medium text-cyan-200">MERN stack</span>, Node.js microservices, and modern web architectures. Currently engineering scalable backend systems, Kafka-driven workflows, and secure IAM architectures at <span className="font-medium text-zinc-100">Acetech India</span>.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          variants={container(0.28)}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:shadow-cyan-500/30 hover:brightness-105"
          >
            <span>View Projects</span>
            <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="/Harsh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/60 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-800"
          >
            <FiDownload className="text-zinc-400" />
            <span>Resume</span>
          </a>
          <a
            href="#contact"
            className="rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <div className="mt-12 lg:mt-0 lg:w-5/12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative mx-auto w-fit rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-800/50 to-zinc-900/80 p-3 shadow-[0_0_40px_rgba(56,189,248,0.12)]"
        >
          <div className="overflow-hidden rounded-2xl">
            <motion.img
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="mx-auto w-52 object-cover transition-transform duration-300 hover:scale-105 sm:w-64 lg:w-72"
              src="/image/avatar.png"
              alt="Harsh Dagar - Avatar"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
