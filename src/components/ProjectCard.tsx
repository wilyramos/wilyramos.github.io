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
            <section className="text-gray-600 body-font border-l-4 border-indigo-900 p-2">
                <div className="flex justify-center">
                    <img className="h-48 w-80 object-cover" alt="hero" src={imageUrl} />
                </div>

                <div className="text-gray-600">
                    <h2 className="text-lg  font-medium">{title}</h2>
                    <p className="text-sm">{description}</p>

                    <div className="flex justify-between">
                        <p className="text-sm bg-yellow-500 rounded-xl py-1 px-3 text-white">Javascript</p>
                        <p className="text-gray-300 text-sm bg-cyan-500 rounded-xl py-1 px-3">React</p>
                        <p className="text-gray-300 text-sm bg-blue-500 rounded-xl py-1 px-3">Tailwind</p>
                        <p className="text-gray-300 text-sm bg-green-500 rounded-xl py-1 px-3">MongoDB</p>
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
