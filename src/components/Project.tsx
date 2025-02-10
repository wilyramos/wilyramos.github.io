import ProjectCard from './ProjectCard';

const projects = [
  { title: 'Teamly', description: 'Administrador de tus proyectos', imageUrl: '/5.svg', link: 'https://teamlyprojects.vercel.app/' },
  { title: 'SociaLynks', description: 'Crea tu propia pagina centralizada para tus redes sociales', imageUrl: '/SocialLynks.png', link: 'https://socialynks.vercel.app/' },
  { title: 'Calculator', description: 'Calculadora web con operaciones básicas', imageUrl: '/4.svg', link: 'https://carwashcalculator.vercel.app/' }
];

export default function Projects() {
  return (
    <div className="grid mx-10 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>

  );
}
