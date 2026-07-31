// Skills.jsx
import {
    FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaAngular, FaAws, FaJava, FaPython
} from "react-icons/fa";
import {
    SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiNestjs,
    SiMongodb, SiMysql, SiPostgresql, SiVercel, SiDocker, SiSpringboot, SiOracle
} from "react-icons/si";

const skills = {
    "Frontend": [
        { Icon: FaJs, color: "#F7DF1E", label: "JavaScript" },
        { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
        { Icon: FaAngular, color: "#DD0031", label: "Angular" },
        { Icon: FaReact, color: "#61DAFB", label: "React" },
        { Icon: SiNextdotjs, color: "currentColor", className: "text-gray-900 dark:text-white", label: "Next.js" },
        { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" }
    ],
    "Backend & Data": [
        { Icon: FaPython, color: "#3776AB", label: "Python" },
        { Icon: FaJava, color: "#007396", label: "Java" },
        { Icon: SiSpringboot, color: "#6DB33F", label: "Spring Boot" },
        { Icon: FaNodeJs, color: "#339933", label: "Node.js" },
        { Icon: SiNestjs, color: "#E0234E", label: "NestJS" },
        { Icon: SiExpress, color: "currentColor", className: "text-gray-900 dark:text-white", label: "Express" }
    ],
    "Cloud, DB & DevOps": [
        { Icon: FaAws, color: "#FF9900", label: "AWS" },
        { Icon: SiDocker, color: "#2496ED", label: "Docker" },
        { Icon: SiOracle, color: "#F80000", label: "Oracle PL/SQL" },
        { Icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
        { Icon: SiMysql, color: "#4479A1", label: "MySQL" },
        { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
        { Icon: FaGit, color: "#F05032", label: "Git" },
        { Icon: FaGithub, color: "currentColor", className: "text-gray-900 dark:text-white", label: "GitHub" },
        { Icon: SiVercel, color: "currentColor", className: "text-gray-900 dark:text-white", label: "Vercel" }
    ]
};

export default function Skills() {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-10 text-center">
            <h2 className="text-xl sm:text-2xl font-light text-gray-900 dark:text-gray-100 mb-12">
                Skills & Technologies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {Object.entries(skills).map(([category, icons]) => (
                    <div
                        key={category}
                        className="bg-white/70 dark:bg-black/30 backdrop-blur rounded-2xl p-6 shadow-lg transition-colors"
                    >
                        <h2 className="text-base mb-6 font-semibold text-gray-800 dark:text-gray-200 text-start border-b border-gray-200 dark:border-gray-700 pb-2">
                            {category}
                        </h2>

                        <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                            {icons.map(({ Icon, color, className, label }, i) => (
                                <div key={i} className="flex flex-col items-center justify-center gap-2">
                                    <Icon
                                        className={`text-4xl transition-transform hover:scale-110 ${className ?? ""}`}
                                        color={color}
                                    />
                                    <span className="text-xs text-center text-gray-700 dark:text-gray-300 font-medium">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}