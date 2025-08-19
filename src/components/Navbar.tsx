import { Link } from "react-scroll";
import NavMenu from "./NavMenu";

export default function Navbar() {
   const links = [
      { label: "INICIO", href: "home" },
      { label: "PROYECTOS", href: "projects" },
      { label: "SOBRE MI", href: "about" },
   ];

   return (
      <nav className="fixed top-4 inset-x-0 mx-auto w-[90%] max-w-3xl bg-black/70 backdrop-blur-md z-50 shadow-lg rounded-full">
         <div className="px-6 py-3 flex justify-between items-center">
            {/* Logo */}
            <Link
               to="home"
               smooth={true}
               duration={500}
               className="cursor-pointer text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 hover:from-gray-400 hover:to-gray-200 transition-all duration-300"
            >
               {`<wilyramos />`}
            </Link>

            {/* Links Desktop */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
               {links.map((link) => (
                  <Link
                     key={link.label}
                     to={link.href}
                     smooth={true}
                     duration={500}
                     offset={-80} // Compensa el navbar fijo
                     className="cursor-pointer font-medium border-b-2 border-transparent transition-all duration-300 ease-in-out hover:border-blue-500 text-gray-300 hover:text-white"
                  >
                     {link.label}
                  </Link>
               ))}
            </div>

            {/* Mobile Menu */}
            <div className="block md:hidden">
               <NavMenu />
            </div>
         </div>
      </nav>
   );
}
