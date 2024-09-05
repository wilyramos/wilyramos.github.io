import ProjectCard from './ProjectCard';

const projects = [
  { title: 'Proyecto 1', description: 'Descripción del proyecto 1.', imageUrl: '/path-to-image1.jpg', link: 'https://proyecto1.com' },
  { title: 'Proyecto 2', description: 'Descripción del proyecto 2.', imageUrl: '/path-to-image2.jpg', link: 'https://proyecto2.com' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
