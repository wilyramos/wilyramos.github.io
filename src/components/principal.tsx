// Principal.jsx (Actualizado para incluir Experience)
"use client";
import Skills from "./Skills";
import Projects from "./projects/Project";
import Presentation from "./Presentation";
import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience"; // Importamos el nuevo componente

export default function Principal() {
    return (
        <div className="scroll-smooth max-w-5xl mx-auto">
            <Navbar />
            
            <section id="home" className="min-h-screen flex items-center justify-center">
                <Presentation />
            </section>

            <section id="experience" className="flex items-center justify-center py-10 scroll-mt-20">
                <Experience />
            </section>

            <section id="skills" className="flex items-center justify-center py-10 scroll-mt-20">
                <Skills />
            </section>

            <section id="projects" className="flex items-center justify-center py-10 scroll-mt-20">
                <Projects />
            </section>

            <section id="about" className="flex items-center justify-center py-10 scroll-mt-20">
                <About />
            </section>
        </div>
    );
}