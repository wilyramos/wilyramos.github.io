"use client";

import Navbar from "./Navbar";
import Presentation from "./Presentation";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./projects/Project";
import About from "./About";

export default function Principal() {
  return (
    <div className="scroll-smooth max-w-5xl mx-auto min-h-screen flex flex-col justify-between">
      {/* Navegación Fija o Superior */}
      <Navbar />

      {/* Contenido Principal */}
      <main className="w-full">
        {/* Presentación / Home */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Presentation />
        </section>

        {/* Experiencia */}
        <section id="experience" className="flex items-center justify-center py-10 scroll-mt-20">
          <Experience />
        </section>

        {/* Habilidades */}
        <section id="skills" className="flex items-center justify-center py-10 scroll-mt-20">
          <Skills />
        </section>

        {/* Proyectos */}
        <section id="projects" className="flex items-center justify-center py-10 scroll-mt-20">
          <Projects />
        </section>

        {/* Sobre Mí */}
        <section id="about" className="flex items-center justify-center py-10 scroll-mt-20">
          <About />
        </section>
      </main>

      {/* Footer / Pie de página */}
      <footer className="py-8 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 mt-12">
        <p>© {new Date().getFullYear()} Wily Ramos. All rights reserved.</p>
      </footer>
    </div>
  );
}