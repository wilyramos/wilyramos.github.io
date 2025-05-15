import ProjectCard from './ProjectCard';

const projects = [
    { title: "SonrisaDigital", description: "Aplicacion para la gestion de citas dentales", imageUrl: "/sonrisadigital3.webp", link: "https://sonrisadigital.vercel.app/", technologies: ["react", "tailwind", "postgresql", "nodejs", "express", "typescript"], frontend: ["react", "tailwind"], backend: ["nodejs", "express"], dataBase: ["postgresql"] },
    { title: "Store Next", description: "Aplicacion para la gestion de productos y ventas", imageUrl: "/store.webp", link: "https://gostore-one.vercel.app/", technologies: ["react", "tailwind", "mongodb", "nodejs", "express", "typescript"], frontend: ["Next.js"], backend: ["nodejs", "express"], dataBase: ["mongodb"] },

    { title: 'SociaLynks', description: 'Crea tu propia pagina centralizada para tus redes sociales', imageUrl: '/socialynks.webp', link: 'https://socialynks.vercel.app/', technologies: ['tailwind', 'mongodb', 'nodejs', 'typescript', "express", "react"], frontend: ["react", "tailwind"], backend: ["nodejs", "express"], dataBase: ["mongodb"] },
    {
        title: 'Teamly', description: 'Administrador de tus proyectos', imageUrl: '/teamly.webp', link: 'https://teamlyprojects.vercel.app/',
        technologies: ['react', 'tailwind', 'mongodb', 'nodejs', 'express', 'typescript'], frontend: ["react", "tailwind"], backend: ["nodejs", "express"], dataBase: ["mongodb"]
    },

    { title: 'VisitCalango', description: 'Aplicacion de turismo para el distrito de Calango', imageUrl: '/calango.webp', link: 'https://visitcalango.vercel.app/', technologies: ['react', 'tailwind', 'mongodb', 'nodejs', 'express', 'typescript'], frontend: ["react", "tailwind"] },
];

export default function Projects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-5xl mx-auto">
            {projects.map((project, index) => (

                <ProjectCard
                    key={index} {...project}
                />
            ))}
        </div>
    );
}