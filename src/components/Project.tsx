import ProjectCard from './ProjectCard';

const projects = [
    { title: 'VisitCañete', description: 'Página web de turismo de la provincia de Cañete', imageUrl: '/4.svg', link: 'https://wilyramos.github.io' },
    { title: 'Calculator', description: 'Calculadora web con operaciones básicas', imageUrl: '/5.svg', link: 'https://carwashcalculator.vercel.app/' },
    { title: 'MyProject', description: 'Proyecto personal para mostrar habilidades', imageUrl: '/5.svg', link: 'https://mitask.vercel.app/' },
];

export default function Projects() {
  return (
      <section  className="bg-gradient-to-r  to-gray-950 from-blue-950 rounded-xl ">
          <h2 className="text-3xl font-semibold text-center pt-1">Projects</h2>
                <div className="grid gap-2 md:grid-cols-2 p-2">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
      </section>

  );
}
