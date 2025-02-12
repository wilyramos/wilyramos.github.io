import ProjectCard from './ProjectCard';

const projects = [
    { title: 'Teamly', description: 'Administrador de tus proyectos', imageUrl: '/5.svg', link: 'https://teamlyprojects.vercel.app/' },
    { title: 'SociaLynks', description: 'Crea tu propia pagina centralizada para tus redes sociales', imageUrl: '/socialynks.svg', link: 'https://socialynks.vercel.app/' },
    { title: 'VisitCalango', description: 'Aplicacion de turismo para el distrito de Calango', imageUrl: '/4.svg', link: 'https://visitacalango.vercel.app/' }
];

export default function Projects() {
    return (
        <div className="grid mx-10 md:grid-cols-2 place-items-center">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    );
}