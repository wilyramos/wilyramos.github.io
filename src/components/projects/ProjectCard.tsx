import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { motion } from "framer-motion";

interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	link: string;
	githuburl?: string;

	frontend?: string[];
	backend?: string[];
	dataBase?: string[];
	infra?: string[];

	tags?: string[];
	type?: string;
	date?: string;
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
	infra,
	tags,
	date,
	status,
}: ProjectCardProps) {
	return (
		<motion.div
			whileHover={{ y: -5 }}
			transition={{ duration: 0.3 }}
			className="group relative w-full max-w-sm mx-auto dark:bg-gray-950
			rounded-2xl "
		>
			<div className="relative h-56 overflow-hidden">
				<img
					src={imageUrl}
					alt={title}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>

				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-col justify-end">
					<div className="flex justify-between items-center">
						<h2 className="text-xl font-semibold text-white">{title}</h2>

						{status && (
							<span
								className={`text-xs px-2 py-1 rounded-full font-medium ${status === "Completed"
										? "bg-emerald-600 text-white"
										: "bg-amber-500 text-white"
									}`}
							>
								{status}
							</span>
						)}
					</div>
				</div>

				<div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
					{githuburl && (
						<button
							onClick={() => window.open(githuburl, "_blank")}
							className="p-2 rounded-full bg-black/70 hover:bg-black/90 transition"
						>
							<FaGithub className="h-5 w-5 text-white" />
						</button>
					)}
					<button
						onClick={() => window.open(link, "_blank")}
						className="p-2 rounded-full bg-black/70 hover:bg-black/90 transition"
					>
						<GoLinkExternal className="h-5 w-5 text-white" />
					</button>
				</div>
			</div>

			<div className="p-5 space-y-2">
				<p className="text-sm text-gray-700 dark:text-gray-300 text-start">
					{description}
				</p>

				<div className="flex justify-between items-center text-xs text-gray-500">
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
				<div className="text-sm text-gray-700 dark:text-gray-300">

					<table className="w-full text-left">
						<tbody className="divide-y divide-gray-200 dark:divide-gray-800">

							{frontend && frontend.length > 0 && (
								<tr>
									<td className="font-semibold py-1.5 w-32">Frontend</td>
									<td className="opacity-80 py-1.5 text-xs">{frontend.join(", ")}</td>
								</tr>
							)}

							{backend && backend.length > 0 && (
								<tr>
									<td className="font-semibold py-1.5 w-32">Backend</td>
									<td className="opacity-80 py-1.5 text-xs">{backend.join(", ")}</td>
								</tr>
							)}

							{dataBase && dataBase.length > 0 && (
								<tr>
									<td className="font-semibold py-1.5 w-32">Base de datos</td>
									<td className="opacity-80 py-1.5 text-xs">{dataBase.join(", ")}</td>
								</tr>
							)}

							{infra && infra.length > 0 && (
								<tr>
									<td className="font-semibold py-1.5 w-32">Infraestructura</td>
									<td className="opacity-80 py-1.5 text-xs">{infra.join(", ")}</td>
								</tr>
							)}

						</tbody>
					</table>

				</div>

			</div>
		</motion.div>
	);
}
