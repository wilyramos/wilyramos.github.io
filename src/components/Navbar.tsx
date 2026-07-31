"use client";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import NavMenu from "./NavMenu";
import ThemeToggleButton from "../utils/ThemeToggleButton";
import LanguageToggleButton from "../utils/LanguageToggleButton"; // 👈 Importación del botón

export default function Navbar() {
   const [scrolled, setScrolled] = useState(false);
   const { t } = useTranslation();

   useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const links = [
      { label: t("nav.projects"), href: "projects" },
      { label: t("nav.about"), href: "about" },
   ];

   return (
      <nav
         className={`fixed top-4 inset-x-0 mx-auto w-[92%] max-w-4xl z-50 
         rounded-full shadow-lg backdrop-blur-md transition-all duration-500 
         ${scrolled
               ? "bg-white/90 dark:bg-black/90 py-2 max-w-3xl"
               : "bg-white/70 dark:bg-black/70 py-4"
            }`}
      >
         <div className="px-6 flex justify-between items-center">
            <Link
               to="home"
               smooth={true}
               duration={500}
               className="cursor-pointer text-xl font-medium text-black dark:text-white hover:opacity-80 transition-colors"
            >
               {`<wilyramos />`}
            </Link>

            <div className="hidden md:flex items-center space-x-6 text-sm">
               {links.map((link) => (
                  <Link
                     key={link.label}
                     to={link.href}
                     smooth={true}
                     duration={500}
                     offset={-100}
                     className="relative cursor-pointer text-black dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors group"
                  >
                     {link.label}
                     <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black dark:bg-white transition-all group-hover:w-full"></span>
                  </Link>
               ))}
            </div>

            {/* Contenedor con Theme y Cambiador de Idioma */}
            <div className="hidden md:flex items-center space-x-3">
               <ThemeToggleButton />
               <LanguageToggleButton />
            </div>

            <div className="block md:hidden">
               <NavMenu />
            </div>
         </div>
      </nav>
   );
}