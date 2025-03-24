import { FaGithub } from "react-icons/fa";
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'; // O import { LinkIcon } from '@heroicons/react/24/outline';
import Tecnologie from "./Tecnologie";

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    technologies?: string[];
}

export default function ProjectCard({ title, description, imageUrl, link, technologies }: ProjectCardProps) {
    return (
        <>
            <section className="pt-10 mx-auto space-y-4">
                <div className="relative flex justify-center">
                    <img className="h-48 w-80 object-cover rounded-xl" alt="hero" src={imageUrl} />
                    
                    <div className="absolute grid grid-cols-2 gap-2 bottom-2 right-2">
                        <button className="flex items-center gap-2 text-white py-1 px-2 rounded-full bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.8)] transition-colors duration-200">
                            <FaGithub className="text-xl" />
                            <span className="text-sm font-medium">GitHub</span>
                        </button>
                        <button
                            className="flex items-center gap-2 text-white py-1 px-4 rounded-full bg-[rgba(5,5,5,0.6)] hover:bg-[rgba(0,0,0,0.8)] transition-colors duration-200"
                            onClick={() => window.open(link, '_blank')}
                        >
                            <ArrowUpRightIcon className="h-5 w-5" /> {/* O <LinkIcon className="h-5 w-5" /> */}
                            <span className="text-sm font-medium">Link</span>
                        </button>
                    </div>

                    <Tecnologie technologies={technologies} />
                </div>
                <div className="">
                    <h2 className="text-lg font-medium">{title}</h2>
                    <p className="text-sm">{description}</p>
                </div>
            </section>
        </>
    );
}