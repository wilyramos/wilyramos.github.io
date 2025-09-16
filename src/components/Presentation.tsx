"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Presentation() {
    const name = "Wily Ramos";
    const roles = ["Full Stack Developer", "React Specialist", "Systems Engineer"];
    const skills = ["Next.js", "React", "Node.js", "TypeScript", "NestJS"];

    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        const currentRole = roles[loopNum % roles.length];
        const fullText = currentRole;

        const handleTyping = () => {
            setText((prev) =>
                isDeleting
                    ? fullText.substring(0, prev.length - 1)
                    : fullText.substring(0, prev.length + 1)
            );

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            }
            if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum((prev) => prev + 1);
            }
        };

        const typingInterval = setInterval(handleTyping, isDeleting ? 80 : 120);
        return () => clearInterval(typingInterval);
    }, [text, isDeleting, loopNum, roles]);

    return (
        <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-5xl text-center transition-colors duration-500 
                           text-gray-800 dark:text-gray-200"
            >
                {/* Greeting */}
                <p className="text-sm sm:text-base mb-3">
                    {"// Hi there 👋, my name is"}
                </p>

                {/* Name */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
                    {name}
                </h1>

                {/* Code block */}
                <div
                    className="
                        rounded-xl 
                        p-4 md:p-6 
                        text-xs sm:text-sm md:text-base lg:text-lg 
                        font-mono 
                        mb-8 
                        text-left 
                        shadow-lg
                        w-full max-w-full sm:max-w-3xl lg:max-w-4xl 
                        mx-auto
                        whitespace-pre-wrap break-words
                        transition-colors duration-500
                        bg-gray-100 dark:bg-black/40
                    "
                >
                    <span className="text-sky-600 dark:text-sky-500">const</span> developer = {"{"}
                    {"\n"}  <span className="text-gray-900 dark:text-white">role</span>:{" "}
                    <span className="text-yellow-600 dark:text-yellow-400">
                        "{text}
                        <span className="animate-pulse">|</span>"
                    </span>
                    ,
                    {"\n"}  <span className="text-gray-900 dark:text-white">skills</span>: [
                    {skills.map((skill, i) => (
                        <span key={i} className="text-amber-600 dark:text-amber-300">
                            "{skill}"{i < skills.length - 1 && ", "}
                        </span>
                    ))}
                    ],
                    {"\n"}  <span className="text-gray-900 dark:text-white">location</span>:{" "}
                    <span className="text-yellow-600 dark:text-yellow-400">"Peru"</span>
                    {"\n"}{"}"}
                </div>

                {/* Professional description */}
                <p className="leading-relaxed text-sm shadow-lg xs:text-base lg:text-lg 
                              p-3 md:p-6 rounded-lg text-left max-w-2xl mx-auto
                              transition-colors duration-500
                              text-gray-600 dark:text-gray-400
                              bg-gray-100/70 dark:bg-black/20">
                    // I am a <span className="text-gray-800 dark:text-gray-200">Systems Engineer</span> from{" "}
                    <span className="text-gray-800 dark:text-gray-200">UNMSM</span> with experience as a{" "}
                    <span className="text-gray-800 dark:text-gray-200">Full Stack Developer</span>.
                    <br />// Passionate about building digital solutions.
                </p>
            </motion.div>
        </section>
    );
}
