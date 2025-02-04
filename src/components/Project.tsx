import ProjectCard from './ProjectCard';

const projects = [
  { title: 'Teamly', description: 'Administrador de proyectos', imageUrl: '/5.svg', link: 'https://teamlyprojects.vercel.app/' },
  { title: 'VisitCañete', description: 'Página web de turismo de la provincia de Cañete', imageUrl: '/4.svg', link: 'https://wilyramos.github.io' },
  { title: 'Calculator', description: 'Calculadora web con operaciones básicas', imageUrl: '/5.svg', link: 'https://carwashcalculator.vercel.app/' },
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
