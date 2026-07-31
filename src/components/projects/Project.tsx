"use client";

import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";

export interface ProjectItem {
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

export default function Projects() {
	const { t } = useTranslation();

	// Carga dinámica de la lista según el idioma activo
	const projects = (t("projects.items", { returnObjects: true }) || []) as ProjectItem[];

	return (
		<section className="px-4 sm:px-6 lg:px-8 py-12 text-center w-full">
			<h2 className="text-xl sm:text-2xl font-light text-gray-900 dark:text-gray-100 mb-12">
				{t("projects.title")}
			</h2>

			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto items-stretch">
				{Array.isArray(projects) &&
					projects.map((project, index) => (
						<div
							key={index}
							className="transition-transform hover:scale-[1.02] hover:-translate-y-1 bg-white dark:bg-black/40 rounded-xl shadow-lg overflow-hidden flex flex-col justify-between"
						>
							<ProjectCard {...project} />
						</div>
					))}
			</div>
		</section>
	);
}