import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
    return (
        <>
            <section className="text-gray-600 body-font border-t-2 border-slate-800 p-2">
                <div className="flex justify-center">
                    <img className="h-48 w-80 object-cover rounded-lg shadow-inner " alt="hero" src={imageUrl} />
                </div>

                <div className="text-gray-600">
                    <h2 className="text-lg  font-medium">{title}</h2>
                    <p className="text-sm">{description}</p>

                    <div className="flex flex-wrap justify-center sm:justify-between text-xs mt-1 gap-1">
                        <p className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full py-1 px-3">
                            JavaScript
                        </p>

                        <p className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full py-1 px-3">
                            NodeJS 🚀
                        </p>

                        <p className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full py-1 px-3">
                            React ⚛️
                        </p>

                        <p className="bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full py-1 px-3">
                            Tailwind 🌊
                        </p>

                        <p className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full py-1 px-3">
                            MongoDB 🍃
                        </p>
                    </div>


                    <div className="flex justify-between">
                        <button className="mt-2 text-white bg-indigo-900 py-2 px-4 hover:bg-indigo-600 rounded text-lg">
                            <FaGithub />
                        </button>
                        <button
                            className="mt-2 text-white bg-indigo-900 py-2 px-4 hover:bg-indigo-600 rounded text-lg"
                            onClick={() => window.open(link, '_blank')}
                        >
                            demo
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}