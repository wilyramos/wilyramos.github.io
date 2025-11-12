import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { motion } from "framer-motion";
import Tecnologie from "./Tecnologie";

interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	link: string;
	githuburl?: string;
	frontend?: string[];
	backend?: string[];
	dataBase?: string[];
	tags?: string[];
	type?: "Web App" | "Mobile App" | "API" | "Fullstack" | "Other";
	date?: string; // Ej: "2025" o "Nov 2025"
	status?: "Completed" | "In Progress";
}

export default function ProjectCard({
	title,
	description,
	imageUrl,
	link,
	githuburl,
	frontend,
	backend,
	dataBase,
	tags,
	type,
	date,
	status,
}: ProjectCardProps) {
	return (
		<motion.div
			whileHover={{ y: -5 }}
			transition={{ duration: 0.3 }}
			className="group relative w-full max-w-sm mx-auto bg-white/90 dark:bg-gray-950 backdrop-blur-md 
                 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 
                 hover:border-gray-300 dark:hover:border-gray-700 shadow-sm hover:shadow-lg 
                 transition-all duration-300"
		>
			{/* Imagen con overlay y botones */}
			<div className="relative h-56 overflow-hidden">
				<img
					src={imageUrl}
					alt={title}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
					<div className="flex items-center justify-between">
						<h2 className="text-xl font-semibold text-white drop-shadow-lg">{title}</h2>
						{status && (
							<span
								className={`text-xs px-2 py-1 rounded-full font-medium ${status === "Completed"
										? "bg-emerald-500/80 text-white"
										: "bg-amber-500/80 text-white"
									}`}
							>
								{status}
							</span>
						)}
					</div>
					{type && <p className="text-sm text-gray-200">{type}</p>}
				</div>

				<div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
					{githuburl && (
						<button
							onClick={() => window.open(githuburl, "_blank")}
							className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
						>
							<FaGithub className="h-5 w-5 text-white" />
						</button>
					)}
					<button
						onClick={() => window.open(link, "_blank")}
						className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
					>
						<GoLinkExternal className="h-5 w-5 text-white" />
					</button>
				</div>
			</div>

			{/* Contenido */}
			<div className="p-5 space-y-3">
				<p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed line-clamp-4 min-h-[80px]">
					{description}
				</p>

				{/* Fecha y tags */}
				<div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-500">
					{date && <span>{date}</span>}
					{tags && (
						<div className="flex flex-wrap gap-1">
							{tags.map((tag, i) => (
								<span
									key={i}
									className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full text-[10px]"
								>
									{tag}
								</span>
							))}
						</div>
					)}
				</div>

				{/* Tecnologías */}
				{(frontend || backend || dataBase) && (
					<div className="flex flex-wrap justify-between gap-2 pt-2">
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
				)}
			</div>
		</motion.div>
	);
}
