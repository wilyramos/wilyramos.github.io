"use client";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import NavMenu from "./NavMenu";

export default function Navbar() {
   const [scrolled, setScrolled] = useState(false);
   const [active, setActive] = useState("home");

   const links = [
      { label: "INICIO", href: "home" },
      { label: "PROYECTOS", href: "projects" },
      { label: "SOBRE MI", href: "about" },
   ];

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 20);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <motion.nav
         initial={{ y: -80 }}
         animate={{ y: 0 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
         className={`fixed top-4 inset-x-0 mx-auto w-[90%] max-w-3xl z-50 rounded-full shadow-lg backdrop-blur-md  transition-all duration-300 ${scrolled ? "bg-black/90 py-2 max-w-xl" : "bg-black/70 py-4"
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
                  className="cursor-pointer text-xl font-extrabold text-transparent bg-clip-text text-white"
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
                     onSetActive={() => setActive(link.href)}
                     className={`cursor-pointer font-medium relative transition-all duration-300 ${active === link.href
                           ? "text-white"
                           : "text-gray-300 hover:text-white"
                        }`}
                  >
                     {link.label}
                     {active === link.href && (
                        <motion.span
                           layoutId="activeLink"
                           className="absolute -bottom-1 left-0 w-full h-[2px] bg-white rounded-full"
                        />
                     )}
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
