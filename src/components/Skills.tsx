import {
    FaJs, FaReact, FaNodeJs, FaGit, FaGithub
} from "react-icons/fa";
import {
    SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiNestjs,
    SiMongodb, SiMysql, SiPostgresql, SiVercel,
    SiDocker
} from "react-icons/si";

const skills = {
    "Frontend": [
        { Icon: FaJs, color: "#F7DF1E", label: "JavaScript" },
        { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
        { Icon: FaReact, color: "#61DAFB", label: "React" },
        { Icon: SiNextdotjs, color: "currentColor", className: "text-gray-900 dark:text-white", label: "Next.js" },
        { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" }
    ],
    "Backend": [
        { Icon: FaNodeJs, color: "#339933", label: "Node.js" },
        { Icon: SiExpress, color: "currentColor", className: "text-gray-900 dark:text-white", label: "Express" },
        { Icon: SiNestjs, color: "#E0234E", label: "NestJS" },
    ],
    "DB & DevOps": [
        { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
        { Icon: SiMysql, color: "#4479A1", label: "MySQL" },
        { Icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
        { Icon: FaGit, color: "#F05032", label: "Git" },
        { Icon: FaGithub, color: "currentColor", className: "text-gray-900 dark:text-white", label: "GitHub" },
        { Icon: SiVercel, color: "currentColor", className: "text-gray-900 dark:text-white", label: "Vercel" },
        { Icon: SiDocker, color: "#2496ED", className: "text-gray-900 dark:text-white", label: "Docker" },
    ]
};

export default function Skills() {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 text-center">
            {/* Title adaptado */}
            <h2 className="text-xl sm:text-2xl font-light text-gray-900 dark:text-gray-100 mb-12">
                Skills & Technologies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {Object.entries(skills).map(([category, icons]) => (
                    <div
                        key={category}
                        className="bg-white/70 dark:bg-black/30 backdrop-blur rounded-2xl p-6 shadow-lg transition-colors"
                    >
                        {/* Category title */}
                        <h2 className="text-lg mb-4 font-bold text-gray-700 dark:text-gray-400 text-start">
                            {category}
                        </h2>

                        {/* Icons + Labels */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {icons.map(({ Icon, color, className, label }, i) => (
                                <div key={i} className="flex flex-col items-center gap-2">
                                    <Icon
                                        className={`text-4xl transition-transform hover:scale-110 ${className ?? ""}`}
                                        color={color}
                                    />
                                    <span className="text-xs text-gray-700 dark:text-gray-300 font-light">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}