import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import Tecnologie from "./Tecnologie";

interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	link: string;
	technologies?: string[];
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
		<motion.section
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			viewport={{ once: true }}
			className="w-full max-w-sm  mx-auto pt-10"
		>
			<motion.div
				whileHover={{ scale: 1.03 }}
				className="flex flex-col bg-gradient-to-tl from-gray-950 to-gray-900 rounded-xl shadow-lg overflow-hidden"
			>
				{/* Imagen */}
				<div className="relative">
					<img
						className="w-full h-44 object-cover"
						alt={title}
						src={imageUrl}
					/>
					<div className="absolute bottom-2 left-2 right-2 flex justify-between">
						<button className="flex items-center gap-2 text-white py-2 px-3 rounded-full bg-black/60 hover:bg-black/90 transition">
							<FaGithub className="h-4 w-4" />
						</button>
						<button
							className="flex items-center gap-2 text-white py-2 px-3 rounded-full bg-black/60 hover:bg-blue-800 transition hover:text-white"
							onClick={() => window.open(link, "_blank")}
						>
							<GoLinkExternal className="h-5 w-5" />
						</button>
					</div>
				</div>

				{/* Contenido */}
				<div className="gap-4">
					<div>
						<h2 className="text-xl font-semibold text-white">{title}</h2>
						<p className="mt-1 text-sm text-gray-300 text-start pb-2">{description}</p>
					</div>

					{/* Tecnologías */}
					<div className="flex flex-row gap-2 text-white text-xs">
						{frontend && frontend.length > 0 && (
							<div>
								<h3 className="font-medium mb-1">Frontend</h3>
								<Tecnologie technologies={frontend} />
							</div>
						)}
						{backend && backend.length > 0 && (
							<div>
								<h3 className="font-medium mb-1">Backend</h3>
								<Tecnologie technologies={backend} />
							</div>
						)}
						{dataBase && dataBase.length > 0 && (
							<div>
								<h3 className="font-medium mb-1">Database</h3>
								<Tecnologie technologies={dataBase} />
							</div>
						)}
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
}
