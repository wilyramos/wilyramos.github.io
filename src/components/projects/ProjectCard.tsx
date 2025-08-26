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
}

export default function ProjectCard({
	title,
	description,
	imageUrl,
	link,
	frontend,
	backend,
	dataBase,
}: ProjectCardProps) {
	return (
		<div className="w-full max-w-sm mx-auto bg-gray-950 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition group">
			{/* Imagen con overlay */}
			<div className="relative">
				<img
					src={imageUrl}
					alt={title}
					className="w-full h-44 object-cover group-hover:opacity-80 transition"
				/>
				<div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
					<button className="p-2 rounded-full bg-black/60 hover:bg-black/80 transition">
						<FaGithub className="h-5 w-5 text-white" />
					</button>
					<button
						onClick={() => window.open(link, "_blank")}
						className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition"
					>
						<GoLinkExternal className="h-5 w-5 text-white" />
					</button>
				</div>
			</div>

			{/* Contenido */}
			<div className="p-5 space-y-3">
				<h2 className="text-lg font-semibold text-white">{title}</h2>
				<p className="text-sm text-gray-400 leading-relaxed">{description}</p>

				{/* Tecnologías con íconos */}
				<div className="flex flex-wrap gap-2 mt-3">
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
