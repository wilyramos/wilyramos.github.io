import ProjectCard from './ProjectCard';

const projects = [
    { title: 'SociaLynks', description: 'Crea tu propia pagina centralizada para tus redes sociales', imageUrl: '/socialynks.webp', link: 'https://socialynks.vercel.app/', technologies: ['tailwind', 'mongodb', 'nodejs', 'typescript', "express", "react"] },
    { title: 'Teamly', description: 'Administrador de tus proyectos', imageUrl: '/teamly.webp', link: 'https://teamlyprojects.vercel.app/',
        technologies: ['react', 'tailwind', 'mongodb', 'nodejs', 'express', 'typescript']
     },
    
    { title: 'VisitCalango', description: 'Aplicacion de turismo para el distrito de Calango', imageUrl: '/calango.webp', link: 'https://visitcalango.vercel.app/' },
    { title: "SonrisaDigital", description: "Aplicacion para la gestion de citas dentales", imageUrl: "/calango.webp", link: "https://sonrisadigital.vercel.app/", technologies: ["react", "tailwind", "mongodb", "nodejs", "express"] },
];

export default function Projects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-max mx-auto">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    );
}