import {
    FaJs, FaReact, FaNodeJs, FaDocker, FaGit,
    FaGithub, FaPhp
} from "react-icons/fa";
import {
    SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiNestjs,
    SiMongodb, SiMysql, SiPostgresql, SiVercel, SiDigitalocean
} from "react-icons/si";

const skills = {
    "Frontend": [FaJs, SiTypescript, FaReact, SiNextdotjs, SiTailwindcss],
    "Backend": [FaNodeJs, SiExpress, SiNestjs, FaPhp],
    "DB & DevOps": [SiMongodb, SiMysql, SiPostgresql, FaGit, FaGithub, FaDocker, SiVercel, SiDigitalocean]
};

export default function Skills() {
    return (
        <section className="p-4 space-y-4">
            {Object.entries(skills).map(([category, icons]) => (
                <div key={category}>
                    <h2 className="text-sm font-extrabold text-gray-500">{category}</h2>
                    <div className="flex flex-wrap gap-3 mt-2">
                        {icons.map((Icon, i) => (
                            <Icon key={i} className="text-4xl text-gray-400 hover:text-blue-500 transition-transform hover:scale-105" />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}