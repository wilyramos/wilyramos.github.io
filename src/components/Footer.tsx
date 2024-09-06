export default function Footer() {

  
  return (
    <footer className="bg-gray-950  text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-xs">
          © {new Date().getFullYear()} Wily Ramos. Todos los derechos reservados.
        </p>
        <div className="mt-2">
        <a href="https://github.com/wilyramos" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-400">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/wilyramos/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-400">
            LinkedIn
          </a>
          <a href="mailto:wily.ramos1@unmsm.edu.pe" className="mx-2 hover:text-gray-400">
            Email
          </a>
          <a href="https://facebook.com/wilyRamosWilyHramos" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-400">
            Facebook
            </a>
        </div>
      </div>
    </footer>
  );
};