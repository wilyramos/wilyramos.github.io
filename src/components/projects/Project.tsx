"use client";

import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "GoPhone - Ecommerce",
        description:
            "Aplicación integral de e-commerce con gestión de órdenes, POS, pagos en línea (Izipay, Culqi, mercadopago), reportes y automatización de correos; una solución adaptable para cualquier comercio.",
        imageUrl: "/gophone.webp",
        link: "https://gophone.pe/",
        githuburl: "https://github.com/wilyramos/ecommerce_nextjs_ts_frontend",
        frontend: ["nextjs"],
        backend: ["nodejs", "express"],
        dataBase: ["mongodb"],
    },
    {
        title: "BALENS - Tienda de Moda",
        description:
            "Plataforma de e-commerce especializada en moda, que ofrece una experiencia de compra personalizada y recomendaciones de estilo.",
        imageUrl: "/balens.jpg",
        link: "https://ecommerce-angular-frontend.web.app/",
        githuburl: "https://github.com/wilyramos/ecommerce_angular_frontend",
        frontend: ["angular"],
        backend: ["nodejs", "nestjs"],
        dataBase: ["mongodb"],
    },
    {
        title: "GoGYM - Fitness App",
        description:
            "Aplicación web para la gestión de gym con integración de pagos y reportes. Integración de suscripciones y seguimiento de progreso.",
        imageUrl: "/gym.webp",
        link: "https://gogym-pink.vercel.app/",
        githuburl: "https://github.com/wilyramos/backend_gym_nestjs",
        frontend: ["nextjs"],
        backend: ["nodejs", "nestjs"],
        dataBase: ["postgresql"],
    },
    {
        title: "SonrisaDigital",
        description:
            "Plataforma web para la gestión de citas odontológicas, que optimiza la atención de pacientes y la administración de especialistas.",
        imageUrl: "/sonrisadigital3.webp",
        link: "https://sonrisadigital.vercel.app/",
        githuburl: "https://github.com/wilyramos/sonrisadigital_react_ts_frontend",
        frontend: ["react", "tailwind"],
        backend: ["nodejs", "express"],
        dataBase: ["postgresql"],
    },
    {
        title: "SociaLynks",
        description:
            "Crea tu página personalizada para centralizar todas tus redes sociales en un solo enlace.",
        imageUrl: "/socialynks.webp",
        link: "https://socialynks.vercel.app/",
        githuburl: "https://github.com/wilyramos/socialynks_express_frontend",
        frontend: ["react", "tailwind"],
        backend: ["nodejs", "express"],
        dataBase: ["mongodb"],
    },
    {
        title: "Teamly",
        description:
            "Administrador de proyectos colaborativo con gestión de tareas y equipos en tiempo real.",
        imageUrl: "/teamly.webp",
        link: "https://teamlyprojects.vercel.app/",
        githuburl: "https://github.com/wilyramos",
        frontend: ["react", "tailwind"],
        backend: ["nodejs", "express"],
        dataBase: ["mongodb"],
    },
];

export default function Projects() {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 text-center">
            {/* Title  */}
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
