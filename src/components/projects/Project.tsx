"use client";

import ProjectCard from "./ProjectCard";

const projects = [
	{
		title: "GoPhone - Ecommerce",
		description:
			"Aplicación completa de e-commerce con catálogo dinámico, checkout optimizado, POS integrado, procesadores de pago (Izipay, Culqi, MercadoPago), panel administrativo, reportes y flujos automatizados.",
		imageUrl: "/gophone.webp",
		link: "https://gophone.pe/",
		githuburl: "https://github.com/wilyramos/ecommerce_nextjs_ts_frontend",

		frontend: [
			"Next.js",
			"TypeScript",
			"TailwindCSS",
			"Server Components",
			"SEO Optimization",
		],

		backend: [
			"Node.js",
			"Express",
			"REST API",
			"JWT Auth",
			"Webhook Handlers",
		],

		dataBase: ["MongoDB"],

		infra: [
			"Cloudinary",
			"Vercel",
			"GitHub Actions (CI/CD)",
		],
	},

	{
		title: "BALENS - Tienda de Moda",
		description:
			"E-commerce especializado en moda, con sistema de productos variables, panel administrativo, filtros avanzados y diseño totalmente personalizado.",
		imageUrl: "/balens.jpg",
		link: "https://storebalens.web.app/",
		githuburl: "https://github.com/wilyramos/ecommerce_angular_frontend",

		frontend: [
			"Angular",
			"TypeScript",
			"SCSS",
			"Firebase Hosting",
			"Reactive Forms",
		],

		backend: ["Node.js", "NestJS", "Cloud Functions"],

		dataBase: ["MongoDB"],

		infra: ["Firebase Auth", "Firebase Storage", "Firebase Functions", "GitHub Actions", "AWS S3"],
	},

	{
		title: "GoGYM - Fitness App",
		description:
			"Plataforma para gestión de gimnasios con membresías, pagos, reportes y seguimiento del progreso de cada usuario.",
		imageUrl: "/gym.webp",
		link: "https://gogym-pink.vercel.app/",
		githuburl: "https://github.com/wilyramos/backend_gym_nestjs",

		frontend: ["Next.js", "TypeScript", "TailwindCSS"],

		backend: ["Node.js", "NestJS", "REST API"],

		dataBase: ["PostgreSQL", "Prisma"],

		infra: ["Vercel", "Railway", "GitHub Actions"],
	},

	{
		title: "SonrisaDigital",
		description:
			"Plataforma para la gestión de citas odontológicas con agenda de especialistas, historial clínico y notificaciones automáticas.",
		imageUrl: "/sonrisadigital3.webp",
		link: "https://sonrisadigital.vercel.app/",
		githuburl:
			"https://github.com/wilyramos/sonrisadigital_react_ts_frontend",

		frontend: ["React", "TypeScript", "TailwindCSS"],

		backend: ["Node.js", "Express", "Mailer Service"],

		dataBase: ["PostgreSQL", "Prisma"],

		infra: ["Vercel", "Railway", "SMTP Provider"],
	},

	{
		title: "SociaLynks",
		description:
			"Aplicación que permite crear una tarjeta digital personalizable para centralizar enlaces sociales, estilo Linktree.",
		imageUrl: "/socialynks.webp",
		link: "https://socialynks.vercel.app/",
		githuburl:
			"https://github.com/wilyramos/socialynks_express_frontend",

		frontend: ["React", "TypeScript", "TailwindCSS"],

		backend: ["Node.js", "Express"],

		dataBase: ["MongoDB"],

		infra: ["Vercel", "Railway"],
	},
];

export default function Projects() {
	return (
		<section className="px-4 sm:px-6 lg:px-8 py-12 text-center">
			<h2 className="text-xl sm:text-2xl font-light text-gray-900 dark:text-gray-100 mb-12">
				Projects
			</h2>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
				{projects.map((project, index) => (
					<div
						key={index}
						className="transition-transform hover:scale-105 hover:-translate-y-1
								   bg-white dark:bg-black/40 rounded-xl shadow-lg overflow-hidden"
					>
						<ProjectCard {...project} />
					</div>
				))}
			</div>
		</section>
	);
}
