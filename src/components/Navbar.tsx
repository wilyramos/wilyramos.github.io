"use client";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import NavMenu from "./NavMenu";

export default function Navbar() {
   const [scrolled, setScrolled] = useState(false);
   const [show, setShow] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollY = window.scrollY;

         if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setShow(false); // ocultar
         } else {
            setShow(true); // mostrar
         }

         setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [lastScrollY]);

   const links = [
      { label: "INICIO", href: "home" },
      { label: "PROYECTOS", href: "projects" },
      { label: "SOBRE MI", href: "about" },
   ];

   useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <motion.nav
         initial={{ y: -80 }}
         animate={{ y: show ? 0 : -100 }} // usar show aquí
         transition={{ duration: 0.5, ease: "easeInOut" }}
         className={`fixed top-4 inset-x-0 mx-auto w-[90%] max-w-3xl z-50 rounded-full shadow-lg backdrop-blur-md transition-all duration-600 ${
            scrolled ? "bg-black/90 py-2 max-w-xl" : "bg-black/70 py-4"
         }`}
      >
         <div className="px-6 flex justify-between items-center">
            {/* Logo */}
            <motion.div
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.95 }}
               transition={{ type: "spring", stiffness: 200 }}
            >
               <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-xl font-medium text-transparent bg-clip-text text-white"
               >
                  {`<wilyramos />`}
               </Link>
            </motion.div>

            {/* Links Desktop */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
               {links.map((link) => (
                  <Link
                     key={link.label}
                     to={link.href}
                     smooth={true}
                     duration={500}
                     offset={-200}
                     className="relative cursor-pointer text-white hover:text-gray-300 font-medium"
                  >
                     {link.label}
                     <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                  </Link>
               ))}
            </div>

            {/* Mobile Menu */}
            <div className="block md:hidden">
               <NavMenu />
            </div>
         </div>
      </motion.nav>
   );
}
