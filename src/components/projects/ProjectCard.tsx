import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import Tecnologie from "./Tecnologie";

interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	link: string;
	frontend?: string[];
	backend?: string[];
	dataBase?: string[];
	githuburl?: string;
}

export default function ProjectCard({
	title,
	description,
	imageUrl,
	link,
	frontend,
	backend,
	dataBase,
	githuburl
}: ProjectCardProps) {
	return (
		<div
			className="w-full max-w-sm mx-auto 
                       bg-white dark:bg-gray-950 
                       rounded-xl overflow-hidden 
                       border border-gray-200 dark:border-gray-800 
                       hover:border-gray-300 dark:hover:border-gray-700  
                       group hover:shadow-amber-300/20 
                       transition duration-500"
		>
			{/* Imagen con overlay */}
			<div className="relative">
				<img
					src={imageUrl}
					alt={title}
					className="w-full h-60 object-cover group-hover:opacity-80 transition"
				/>

				<div className="absolute bottom-0 left-0 right-0 
                                bg-gradient-to-t from-black/70 to-transparent p-2">
					<h2 className="text-lg font text-white drop-shadow-2xl">
						{title}
					</h2>
				</div>

				<div className="absolute inset-0 flex items-center justify-center gap-3 
                                opacity-0 group-hover:opacity-100 transition">
					<button 
						onClick={() => githuburl && window.open(githuburl, "_blank")}
						className={`p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition ${!githuburl ? 'cursor-not-allowed opacity-50' : ''}`}
						disabled={!githuburl}
					>
						<FaGithub className="h-5 w-5 text-white" />
					</button>
					<button
						onClick={() => window.open(link, "_blank")}
						className="p-2 rounded-full bg-amber-600 hover:bg-amber-700 transition"
					>
						<GoLinkExternal className="h-5 w-5 text-white" />
					</button>
				</div>
			</div>

			{/* Contenido */}
			<div className="p-5 space-y-3">
				<p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed line-clamp-4 min-h-[100px]">
					{description}
				</p>

				{/* Tecnologías con íconos */}
				<div className="flex justify-between px-4 text-center py-2">
					{frontend?.map((tech, i) => (
						<Tecnologie key={`fe-${i}`} technologies={[tech]} />
					))}
					{backend?.map((tech, i) => (
						<Tecnologie key={`be-${i}`} technologies={[tech]} />
					))}
					{dataBase?.map((tech, i) => (
						<Tecnologie key={`db-${i}`} technologies={[tech]} />
					))}
				</div>
			</div>
		</div>
	);
}
