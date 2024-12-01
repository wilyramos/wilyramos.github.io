import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDocker, FaGit, FaDatabase, FaGithub, FaCss3, FaTshirt, FaPhp } from 'react-icons/fa';

const skills = {
    Frontend: [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'TypeScript', icon: <FaJs />},
        { name: 'React', icon: <FaReact /> },
        { name: 'Next.js', icon: <FaReact /> }, // Reusing React icon for Next.js as an example,
        { name: 'TailwindCSS', icon: <FaCss3 /> }
    ],
    Backend: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <FaReact /> }, // Reusing React icon for Express as an example
        { name: 'Php', icon: <FaPhp />},
        { name: 'MongoDB', icon: <FaDatabase /> },
        { name: 'MySQL', icon: <FaDatabase /> } // Reusing Database icon for MySQL as an example
    ],
    Deployment: [
        { name: 'Git', icon: <FaGit /> },
        { name: 'Github', icon: <FaGithub /> },
        { name: 'Docker', icon: <FaDocker /> },

    ],


};

export default function Skills() {

    return (
        <>
            <section className="text-gray-300">
                <div className="flex gap-3">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="bg-gray-900 rounded-2xl p-3 shadow-2xl">
                            <h2 className="text-lg mb-4 uppercase">{category}</h2>
                            <div className="flex flex-wrap p-4 gap-4 text-lg font-light">
                                {items.map((skill) => (
                                    <div key={skill.name} className="flex items-center text-light hover:-translate-x-3 hover:scale-110 duration-300 hover:text-blue-500">
                                        <span className="text-3xl mr-2 ">{skill.icon}</span>
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}
