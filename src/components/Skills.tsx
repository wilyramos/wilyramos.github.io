import {
    FaJs, FaReact, FaNodeJs, FaGit,
    FaGithub, FaPhp
} from "react-icons/fa";
import {
    SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiNestjs,
    SiMongodb, SiMysql, SiPostgresql, SiVercel
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = {
  "Frontend": [FaJs, SiTypescript, FaReact, SiNextdotjs, SiTailwindcss],
  "Backend": [FaNodeJs, SiExpress, SiNestjs, FaPhp],
  "DB & DevOps": [SiMongodb, SiMysql, SiPostgresql, FaGit, FaGithub, SiVercel]
};

export default function Skills() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-extrabold text-gray-100 mb-12"
      >
        Skills & Technologies
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {Object.entries(skills).map(([category, icons], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-black/30 backdrop-blur rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-lg font-semibold text-indigo-400 mb-6">
              {category}
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {icons.map((Icon, i) => (
                <Icon
                  key={i}
                  className="text-4xl text-gray-400 hover:text-indigo-500 transition-transform hover:scale-110"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
