import ProjectCard from './ProjectCard';

const projects = [
  { title: 'VisitCañete', description: 'Página web de turismo de la provincia de Cañete', imageUrl: '/4.svg', link: 'https://visitcanete.com' },
  { title: 'Calculator', description: 'Calculadora web con operaciones básicas', imageUrl: '/5.svg', link: 'https://carwashcalculator.vercel.app/' },
  { title: 'MyProject', description: 'Proyecto personal para mostrar habilidades', imageUrl: '/5.svg', link: 'https://mitask.vercel.app/' },
];

export default function Projects() {
  return (
<section id="projects" className="py-12 bg-gradient-to-r  to-gray-950 from-blue-950 rounded-xl">
  <div className="container mx-auto px-6">
    <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-3 place-items-center">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </div>
</section>

  );
}
