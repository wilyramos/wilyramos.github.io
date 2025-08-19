"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
   
    {
        title: "GoPhone - ecommerce",
        description: "Aplicación de gestión de productos y ventas con panel de administración para un flujo completo de comercio electrónico.",
        imageUrl: "/store.webp",
        link: "https://gophone.pe/",
        frontend: ["Next.js", "TailwindCSS"],
        backend: ["Node.js", "Express"],
        database: ["MongoDB"]
    },
    {
        title: "SonrisaDigital",
        description: "Plataforma web para la gestión de citas odontológicas, que optimiza la atención de pacientes y la administración de especialistas.",
        imageUrl: "/sonrisadigital3.webp",
        link: "https://sonrisadigital.vercel.app/",
        frontend: ["React", "TailwindCSS"],
        backend: ["Node.js", "Express"],
        database: ["PostgreSQL"]
    },
    {
        title: "SociaLynks",
        description: "Crea tu página personalizada para centralizar todas tus redes sociales en un solo enlace.",
        imageUrl: "/socialynks.webp",
        link: "https://socialynks.vercel.app/",
        frontend: ["React", "TailwindCSS"],
        backend: ["Node.js", "Express"],
        database: ["MongoDB"]
    },
     
    {
        title: "Teamly",
        description: "Administrador de proyectos colaborativo con gestión de tareas y equipos en tiempo real.",
        imageUrl: "/teamly.webp",
        link: "https://teamlyprojects.vercel.app/",
        frontend: ["React", "TailwindCSS"],
        backend: ["Node.js", "Express"],
        database: ["MongoDB"]
    },
];

export default function Projects() {
    return (
        <section className="py-12 px-4">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-center mb-10"
            >
                🚀 Proyectos Destacados
            </motion.h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
