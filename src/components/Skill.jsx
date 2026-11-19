import { motion } from "motion/react";
import {
  SiC,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiRedux,
  SiWordpress,
  SiShopify,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiPostman,
  SiNpm,
  SiRender,
  SiVercel,
  SiGithub,
  SiApachekafka,
} from "react-icons/si";
import { TbApi, TbServerCog, TbShieldLock } from "react-icons/tb";

const sectionTransition = { duration: 0.4, delay: 0.08 };
const rowTransition = { duration: 0.45, delay: 0.1 };
const view = { once: true, amount: 0.2 };

const skillIcons = {
  "C": <SiC className="text-blue-400" />,
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "React.js": <SiReact className="text-cyan-400" />,
  "HTML": <SiHtml5 className="text-orange-500" />,
  "CSS": <SiCss3 className="text-blue-500" />,
  "Bootstrap": <SiBootstrap className="text-purple-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  "Redux Toolkit": <SiRedux className="text-purple-400" />,
  "WordPress": <SiWordpress className="text-sky-400" />,
  "Shopify": <SiShopify className="text-emerald-400" />,
  "Node.js": <SiNodedotjs className="text-emerald-500" />,
  "Express.js": <SiExpress className="text-zinc-200" />,
  "Sequelize (ORM)": <TbServerCog className="text-cyan-400" />,
  "REST APIs": <TbApi className="text-orange-400" />,
  "Microservices Architecture": <TbServerCog className="text-teal-400" />,
  "IAM": <TbShieldLock className="text-amber-400" />,
  "RBAC": <TbShieldLock className="text-emerald-400" />,
  "MySQL": <SiMysql className="text-sky-400" />,
  "MongoDB": <SiMongodb className="text-emerald-400" />,
  "Redis": <SiRedis className="text-red-500" />,
  "Postman": <SiPostman className="text-orange-500" />,
  "Thunder Client": <TbApi className="text-sky-400" />,
  "NPM": <SiNpm className="text-red-500" />,
  "Render": <SiRender className="text-zinc-300" />,
  "Vercel": <SiVercel className="text-zinc-100" />,
  "GitHub": <SiGithub className="text-zinc-200" />,
  "Apache Kafka": <SiApachekafka className="text-rose-400" />,
};

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "C"],
  },
  {
    title: "Frontend Development",
    items: ["React.js", "Redux Toolkit", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "WordPress", "Shopify"],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "REST APIs", "Microservices Architecture", "Sequelize (ORM)", "IAM", "RBAC"],
  },
  {
    title: "Databases & Caching",
    items: ["MongoDB", "MySQL", "Redis"],
  },
  {
    title: "Message Broker & Streaming",
    items: ["Apache Kafka"],
  },
  {
    title: "Tools, Platforms & Cloud",
    items: ["GitHub", "Postman", "Thunder Client", "NPM", "Vercel", "Render"],
  },
];

function Skill() {
  return (
    <section id="skills" className="my-14 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 px-6 py-10 lg:my-20 lg:px-10">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={view}
        transition={sectionTransition}
        className="text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Expertise</span>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Technical <span className="text-zinc-400">Skillsets</span>
        </h2>
      </motion.div>

      <div className="mt-10 space-y-5">
        {skillGroups.map((group, index) => (
          <div
            key={group.title}
            className="rounded-xl border border-zinc-800/90 bg-zinc-900/60 p-5 transition-all duration-200 hover:border-zinc-700 lg:flex lg:items-center"
          >
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={view}
              transition={{ ...rowTransition, delay: 0.08 + index * 0.03 }}
              className="mb-4 text-center text-lg font-semibold text-cyan-200 lg:mb-0 lg:w-1/3 lg:text-left"
            >
              {group.title}
            </motion.h3>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={view}
              transition={{ duration: 0.45, delay: 0.12 + index * 0.03 }}
              className="flex flex-wrap justify-center gap-2.5 lg:w-2/3 lg:justify-start"
            >
              {group.items.map((item) => (
                <span
                  key={item}
                  className="group flex items-center gap-2 rounded-lg border border-zinc-700/80 bg-zinc-950/80 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:bg-zinc-900 hover:text-white"
                >
                  <span className="text-base transition-transform duration-200 group-hover:scale-110">
                    {skillIcons[item]}
                  </span>
                  <span>{item}</span>
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
