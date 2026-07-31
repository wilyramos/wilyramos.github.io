"use client";

import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	link?: string;
	githuburl?: string;

	frontend?: string[];
	backend?: string[];
	dataBase?: string[];
	infra?: string[];

	tags?: string[];
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
	const { t } = useTranslation();
	const hasButtons = Boolean(githuburl || link);

	return (
		<motion.div
			whileHover={{ y: -5 }}
			transition={{ duration: 0.3 }}
			className="group relative w-full flex flex-col h-full dark:bg-gray-950 rounded-2xl overflow-hidden justify-between"
		>
			<div>
				{/* Contenedor de Imagen y Botones en Hover */}
				<div className="relative h-56 overflow-hidden rounded-t-2xl">
					<img
						src={imageUrl}
						alt={title}
						className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>

					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-col justify-end">
						<div className="flex justify-between items-center">
							<h3 className="text-xl font-semibold text-white text-left">{title}</h3>

							{status && (
								<span
									className={`text-xs px-2 py-1 rounded-full font-medium ${
										status === "Completed"
											? "bg-emerald-600 text-white"
											: "bg-amber-500 text-white"
									}`}
								>
									{status}
								</span>
							)}
						</div>
					</div>

					{hasButtons && (
						<div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition bg-black/40 backdrop-blur-[2px]">
							{githuburl && (
								<button
									onClick={() => window.open(githuburl, "_blank")}
									className="p-3 rounded-full bg-black/80 hover:bg-black text-white transition transform hover:scale-110"
									aria-label="GitHub Repository"
								>
									<FaGithub className="h-5 w-5" />
								</button>
							)}
							{link && (
								<button
									onClick={() => window.open(link, "_blank")}
									className="p-3 rounded-full bg-black/80 hover:bg-black text-white transition transform hover:scale-110"
									aria-label="External Link"
								>
									<GoLinkExternal className="h-5 w-5" />
								</button>
							)}
						</div>
					)}
				</div>

				{/* Contenido descriptivo */}
				<div className="p-5 space-y-4">
					<p className="text-sm text-gray-700 dark:text-gray-300 text-start leading-relaxed">
						{description}
					</p>

					{(date || tags) && (
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
					)}
				</div>
			</div>

			{/* Tabla de Tecnologías */}
			<div className="p-5 pt-0 text-sm text-gray-700 dark:text-gray-300">
				<table className="w-full text-left">
					<tbody className="divide-y divide-gray-200 dark:divide-gray-800">
						{frontend && frontend.length > 0 && (
							<tr>
								<td className="font-semibold py-1.5 w-28 text-xs text-gray-900 dark:text-gray-200">
									{t("projects.labels.frontend")}
								</td>
								<td className="opacity-80 py-1.5 text-xs">{frontend.join(", ")}</td>
							</tr>
						)}

						{backend && backend.length > 0 && (
							<tr>
								<td className="font-semibold py-1.5 w-28 text-xs text-gray-900 dark:text-gray-200">
									{t("projects.labels.backend")}
								</td>
								<td className="opacity-80 py-1.5 text-xs">{backend.join(", ")}</td>
							</tr>
						)}

						{dataBase && dataBase.length > 0 && (
							<tr>
								<td className="font-semibold py-1.5 w-28 text-xs text-gray-900 dark:text-gray-200">
									{t("projects.labels.dataBase")}
								</td>
								<td className="opacity-80 py-1.5 text-xs">{dataBase.join(", ")}</td>
							</tr>
						)}

						{infra && infra.length > 0 && (
							<tr>
								<td className="font-semibold py-1.5 w-28 text-xs text-gray-900 dark:text-gray-200">
									{t("projects.labels.infra")}
								</td>
								<td className="opacity-80 py-1.5 text-xs">{infra.join(", ")}</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
}