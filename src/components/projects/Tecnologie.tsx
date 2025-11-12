import {
    SiJavascript,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
    SiMongodb,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiGit,
    SiExpress,
    SiPostgresql,
    SiNextdotjs,
    SiNestjs,
    SiAngular,
} from "react-icons/si";
import { motion } from "framer-motion";

interface TecnologieProps {
    technologies?: string[];
    size?: "sm" | "md" | "lg";
}

// Configuración centralizada de íconos
const techConfig: Record<
    string,
    { icon: JSX.Element; className: string; label: string }
> = {
    javascript: { icon: <SiJavascript />, className: "text-yellow-400", label: "JavaScript" },
    nodejs: { icon: <SiNodedotjs />, className: "text-green-600", label: "Node.js" },
    react: { icon: <SiReact />, className: "text-cyan-400", label: "React" },
    tailwind: { icon: <SiTailwindcss />, className: "text-sky-400", label: "Tailwind CSS" },
    mongodb: { icon: <SiMongodb />, className: "text-green-500", label: "MongoDB" },
    typescript: { icon: <SiTypescript />, className: "text-blue-400", label: "TypeScript" },
    html: { icon: <SiHtml5 />, className: "text-orange-600", label: "HTML5" },
    css: { icon: <SiCss3 />, className: "text-blue-600", label: "CSS3" },
    git: { icon: <SiGit />, className: "text-red-600", label: "Git" },
    express: { icon: <SiExpress />, className: "text-gray-200", label: "Express" },
    postgresql: { icon: <SiPostgresql />, className: "text-blue-700", label: "PostgreSQL" },
    nextjs: { icon: <SiNextdotjs />, className: "text-gray-100", label: "Next.js" },
    nestjs: { icon: <SiNestjs />, className: "text-pink-600", label: "NestJS" },
    angular: { icon: <SiAngular />, className: "text-red-600", label: "Angular" },
};

export default function Tecnologie({ technologies, size = "md" }: TecnologieProps) {
    const sizeClasses = {
        sm: "text-lg p-1.5",
        md: "text-xl p-2",
        lg: "text-2xl p-3",
    };

    return (
        <div className="flex flex-wrap justify-center gap-2">
            {technologies?.map((tech, index) => {
                const key = tech.toLowerCase();
                const config = techConfig[key];
                const tooltip = config ? config.label : tech;

                return (
                    <motion.div
                        key={index}
                        className={`relative group flex items-center justify-center bg-gray-900/80 
                        rounded-xl ${sizeClasses[size]} 
                        shadow-md hover:shadow-lg hover:bg-gray-800/90 
                        transition-all duration-300 cursor-default`}
                        whileHover={{ scale: 1.1 }}
                    >
                        {config ? (
                            <span className={`${config.className}`}>{config.icon}</span>
                        ) : (
                            <span className="text-gray-200 text-sm font-light">{tech}</span>
                        )}

                        {/* Tooltip */}
                        <div
                            className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-center 
                         bg-black text-white text-[10px] px-2 py-1 rounded-md opacity-90 whitespace-nowrap"
                        >
                            {tooltip}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
