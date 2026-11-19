import { motion } from "motion/react";
import { FaGraduationCap } from "react-icons/fa6";

const educationList = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Trinity Institute of Professional Studies (GGSIPU)",
    location: "Dwarka, New Delhi",
    year: "2022 - 2025",
  },
  {
    degree: "Diploma in Computer Applications (DCA)",
    institution: "Gro Tech Learn Foundation",
    location: "Najafgarh, New Delhi",
    year: "2021 - 2022",
  },
  {
    degree: "Senior Secondary (10th & 12th)",
    institution: "Navyug Convent Sr. Sec. School",
    location: "Najafgarh, Delhi",
    year: "Completed 2021",
  },
];

function About() {
  return (
    <section id="about" className="my-14 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 px-6 py-10 lg:my-20 lg:px-10">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Introduction</span>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          About <span className="text-zinc-400">Me</span>
        </h2>
      </motion.div>

      <div className="mt-10 lg:flex lg:items-start lg:gap-10">
        {/* Bio Story */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="space-y-4 leading-relaxed text-zinc-300 lg:w-1/2"
        >
          <p>
            Hello! I&apos;m <span className="font-semibold text-zinc-100">Harsh Dagar</span>, a Full Stack Developer dedicated to architecting reliable web platforms and robust backend systems. With a strong foundation in the <span className="text-cyan-200 font-medium">MERN stack</span> and relational/NoSQL databases, I bridge the gap between responsive client interfaces and high-throughput server backends.
          </p>
          <p>
            Currently, I work as a <span className="text-zinc-100 font-medium">Node.js Developer at Acetech Information Systems</span>, where I build microservices-based services, manage event-driven architectures with Apache Kafka, implement Redis caching, and maintain fine-grained Role-Based Access Control (RBAC).
          </p>
          <p>
            Previously, I sharpened my frontend expertise through internships at <span className="text-zinc-100 font-medium">NexGen Innovators</span> and <span className="text-zinc-100 font-medium">CodyNest Technologies</span>, developing component-driven web interfaces, authentication flows, and e-commerce themes.
          </p>
          <p className="text-sm text-zinc-400">
            When I&apos;m not actively shipping code, I enjoy exploring emerging web technologies, diving into system design architectures, and contributing to open developer communities.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 lg:mt-0 lg:w-1/2"
        >
          <div className="flex items-center gap-2.5 border-b border-zinc-800 pb-4 text-xl font-semibold text-zinc-100">
            <FaGraduationCap className="text-cyan-300" />
            <h3>Education</h3>
          </div>

          <div className="mt-5 space-y-6">
            {educationList.map((edu, idx) => (
              <div key={idx} className="relative border-l border-zinc-700/60 pl-4">
                <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
                <h4 className="font-semibold text-zinc-100">{edu.degree}</h4>
                <p className="text-sm text-zinc-300">{edu.institution}</p>
                <div className="mt-1 flex items-center justify-between text-xs text-zinc-500">
                  <span>{edu.location}</span>
                  <span className="rounded bg-zinc-800 px-2 py-0.5 font-medium text-cyan-300">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
