import ProjectCard from './ProjectCard';

const projects = [
    { title: 'SociaLynks', description: 'Crea tu propia pagina centralizada para tus redes sociales', imageUrl: '/socialynks.svg', link: 'https://socialynks.vercel.app/', technologies: ['tailwind', 'mongodb', 'nodejs', 'typescript', "express", "react"] },
    { title: 'Teamly', description: 'Administrador de tus proyectos', imageUrl: '/5.svg', link: 'https://teamlyprojects.vercel.app/',
        technologies: ['react', 'tailwind', 'mongodb', 'nodejs', 'express', 'typescript']
     },
    
    { title: 'VisitCalango', description: 'Aplicacion de turismo para el distrito de Calango', imageUrl: '/4.svg', link: 'https://visitacalango.vercel.app/' }
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