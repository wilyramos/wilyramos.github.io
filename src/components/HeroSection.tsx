export default function HeroSection() {
    return (
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Hola, soy Wily</h1>
            <p className="mt-4 text-lg">Desarrollador web | Creador de experiencias digitales</p>
            <a href="#projects" className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500">
              Ver Mis Proyectos
            </a>
          </div>
        </div>
      </section>
    );
  }
  