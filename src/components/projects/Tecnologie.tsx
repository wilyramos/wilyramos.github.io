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
} from "react-icons/si";
    

interface TecnologieProps {
    technologies?: string[];
}

// Configuración centralizada
const techConfig: Record<
    string,
    { icon: JSX.Element; className?: string }
> = {
    javascript: { icon: <SiJavascript />, className: "text-yellow-400" },
    nodejs: { icon: <SiNodedotjs />, className: "text-green-600" },
    react: { icon: <SiReact />, className: "text-cyan-500" },
    tailwind: { icon: <SiTailwindcss />, className: "text-blue-500" },
    mongodb: { icon: <SiMongodb />, className: "text-green-500" },
    typescript: { icon: <SiTypescript />, className: "text-blue-400" },
    html: { icon: <SiHtml5 />, className: "text-orange-600" },
    css: { icon: <SiCss3 />, className: "text-blue-600" },
    git: { icon: <SiGit />, className: "text-red-600" },
    express: { icon: <SiExpress />, className: "text-white" },
    postgresql: { icon: <SiPostgresql />, className: "text-blue-700" },
    nextjs: { icon: <SiNextdotjs />, className: "text-white" },
    nestjs: { icon: <SiNestjs />, className: "text-white" },
};

export default function Tecnologie({ technologies }: TecnologieProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {technologies?.map((tech, index) => {
                const config = techConfig[tech.toLowerCase()];

                return (
                    <span
                        key={index}
                        className="bg-black/80 rounded-lg p-2 flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                    >
                        {config ? (
                            <span className={`h-5 w-5 ${config.className}`}>
                                {config.icon} {<span className="text-gray-400 text-xs font-light">{tech}</span>}
                            </span>
                        ) : (
                            <span className="text-white text-sm">{tech}</span>
                        )}
                    </span>
                );
            })}
        </div>
    );
}
