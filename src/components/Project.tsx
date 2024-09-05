import ProjectCard from './ProjectCard';

const projects = [
  { title: 'Proyecto 1', description: 'Descripción del proyecto 1.', imageUrl: '/path-to-image1.jpg', link: 'https://proyecto1.com' },
  { title: 'Proyecto 2', description: 'Descripción del proyecto 2.', imageUrl: '/path-to-image2.jpg', link: 'https://proyecto2.com' },
  { title: 'Proyecto 3', description: 'Descripción del proyecto 3.', imageUrl: '/path-to-image3.jpg', link: 'https://proyecto3.com' },
  { title: 'Proyecto 4', description: 'Descripción del proyecto 4.', imageUrl: '/path-to-image4.jpg', link: 'https://proyecto4.com' },
  { title: 'Proyecto 5', description: 'Descripción del proyecto 5.', imageUrl: '/path-to-image5.jpg', link: 'https://proyecto5.com' },
  { title: 'Proyecto 6', description: 'Descripción del proyecto 6.', imageUrl: '/path-to-image6.jpg', link: 'https://proyecto6.com' },
];

export default function Projects() {
  return (
<section id="projects" className="py-12 bg-gray-100 rounded-xl">
  <div className="container mx-auto px-4">
    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3 place-items-center">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </div>
</section>

  );
}
