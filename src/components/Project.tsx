import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1.',
      imageUrl: '/path-to-image1.jpg',
      link: 'https://proyecto1.com',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2.',
      imageUrl: '/path-to-image2.jpg',
      link: 'https://proyecto2.com',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold">Mis Proyectos</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
