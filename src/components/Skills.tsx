import {
    FaJs, FaReact, FaNodeJs, FaGit, FaGithub
} from "react-icons/fa";
import {
    SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiNestjs,
    SiMongodb, SiMysql, SiPostgresql, SiVercel
} from "react-icons/si";

const skills = {
    "Frontend": [
        { Icon: FaJs, color: "#F7DF1E" },
        { Icon: SiTypescript, color: "#3178C6" },
        { Icon: FaReact, color: "#61DAFB" },
        { Icon: SiNextdotjs, color: "#000000" }, // cambia según theme
        { Icon: SiTailwindcss, color: "#06B6D4" }
    ],
    "Backend": [
        { Icon: FaNodeJs, color: "#339933" },
        { Icon: SiExpress, color: "#000000" }, // igual se adapta
        { Icon: SiNestjs, color: "#E0234E" },
    ],
    "DB & DevOps": [
        { Icon: SiMongodb, color: "#47A248" },
        { Icon: SiMysql, color: "#4479A1" },
        { Icon: SiPostgresql, color: "#336791" },
        { Icon: FaGit, color: "#F05032" },
        { Icon: FaGithub, color: "#000000" }, // dark/light swap
        { Icon: SiVercel, color: "#000000" }
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
                        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-400 mb-6">
                            {category}
                        </h2>

                        {/* Icons */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {icons.map(({ Icon, color }, i) => (
                                <Icon
                                    key={i}
                                    className="text-4xl transition-transform hover:scale-110"
                                    color={color}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
