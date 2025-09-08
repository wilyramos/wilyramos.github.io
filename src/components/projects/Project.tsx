"use client";

import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "GoPhone - Ecommerce",
        description:
            " Aplicación integral de e-commerce con gestión de órdenes, POS, pagos en línea (Izipay, Culqi, mercadopago), reportes y automatización de correos; una solución adaptable para cualquier comercio.",
        imageUrl: "/gophone.webp",
        link: "https://gophone.pe/",
        frontend: ["nextjs"],
        backend: ["nodejs", "express"],
        dataBase: ["mongodb"],
    },
    {
        title: "GoGYM - Fitness App",
        description:
            "Aplicación web para la gestión de gym con integración de pagos y reportes. Integracion de suscripciones y seguimiento de progreso.",
        imageUrl: "/gym.webp",
        link: "https://gogym-pink.vercel.app/",
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
        frontend: ["react", "tailwind"],
        backend: ["nodejs", "express"],
        dataBase: ["mongodb"],
    },
];

export default function Projects() {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h2 className="text-xl sm:text-3xl font-light text-gray-100 mb-12">
                Proyectos Destacados
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="transition-transform hover:scale-105 hover:-translate-y-1 "
                    >
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </section>
    );
}
