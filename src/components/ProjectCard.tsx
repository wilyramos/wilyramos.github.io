import { FaGithub } from "react-icons/fa";
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'; // O import { LinkIcon } from '@heroicons/react/24/outline';


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
                <div className="relative flex justify-center">
                    <img className="h-48 w-80 object-cover rounded-lg shadow-inner" alt="hero" src={imageUrl} />
                    <div className="absolute inset-0 flex justify-between items-center space-x-4">


                        <button className="flex items-center gap-2 text-white py-1 px-4 rounded-full bg-[rgba(5,5,5,0.2)]  hover:bg-[rgba(58,61,66,0.2)] transition-colors duration-200">
                            <FaGithub className="text-xl" />
                            <span className="text-sm font-medium">GitHub</span>
                        </button>


                        <button className="flex items-center gap-2 text-white py-1 px-4 rounded-full bg-[rgba(5,5,5,0.2)] hover:bg-[rgba(58,61,66,0.2)] transition-colors duration-200"
                            onClick={() => window.open(link, '_blank')}
                        >
                            <ArrowUpRightIcon className="h-5 w-5" /> {/* O <LinkIcon className="h-5 w-5" /> */}
                            <span className="text-sm font-medium">Link</span>
                        </button>


                    </div>
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



                </div>
            </section>
        </>
    );
}