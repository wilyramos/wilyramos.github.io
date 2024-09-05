interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  }
  
  export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="block mt-4 text-blue-600 hover:underline">
            Ver proyecto
          </a>
        </div>
      </div>
    );
  }
  