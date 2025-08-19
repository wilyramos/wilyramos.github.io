"use client";
import { motion } from "framer-motion";


export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
      >
        About Me
      </motion.h2>

      {/* Card */}
      <motion.div
        className="bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl grid md:grid-cols-2 gap-10 items-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Text */}
        <div className="space-y-6 text-gray-300">
          <p>
            Hello, I'm <span className="text-indigo-400 font-semibold">Wily Ramos</span>, a Systems Engineer graduated from the <strong>Universidad Nacional Mayor de San Marcos</strong>.
          </p>
          <p>
            I am focused on <strong>Full Stack Development</strong> to build high-value, efficient, and scalable applications.
          </p>
          <p>
            I currently work as a <strong>freelance developer</strong> and I am available for any project or collaboration.
          </p>

          {/* CV Button */}
        
        </div>

        {/* Skills */}
      </motion.div>
    </motion.section>
  );
}
