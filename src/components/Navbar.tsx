export default function Navbar() {
    return (
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Mi Portafolio</div>
          <div className="space-x-4">
            <a href="#about" className="text-gray-700 hover:text-blue-600">Sobre mí</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">Proyectos</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contacto</a>
          </div>
        </div>
      </nav>
    );
  }
  