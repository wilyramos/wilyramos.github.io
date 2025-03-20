import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="">
      <div className="px-6 p-3 flex justify-between">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 hover:from-gray-400 hover:to-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {`<wilyramos />`}
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          
          <Link
            to="/proyectos"
            className="font-medium text-gray-400 border-l-2 pl-2 transition-all duration-300 ease-in-out hover:text-gray-200 hover:border-gray-200"
            >
            Proyectos
          </Link>
          <Link
            to="/sobre-mi"
            className="font-medium text-gray-400 border-l-2 pl-2 transition-all duration-300 ease-in-out hover:text-gray-200 hover:border-gray-200"
          >
            Sobre mí
          </Link>
        </div>
        



          <div className="">
            <SocialMedia />
          </div>
        </div>
    </nav>
  );
}
