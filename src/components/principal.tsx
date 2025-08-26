"use client";
import Skills from "./Skills";
import Projects from "./projects/Project";
import Presentation from "./Presentation";
import Navbar from "./Navbar";
import About from "./About";

export default function Principal() {


    return (
        <div className="scroll-smooth max-w-4xl mx-auto">

            <Navbar />
            <section id="home" className="min-h-screen flex items-center justify-center">
                <Presentation />
            </section>

            <section id="skills" className=" flex items-center justify-center">
                <Skills />
            </section>

            <section id="projects" className=" flex items-center justify-center ">
                <Projects />
            </section>

            <section id="about" className=" flex items-center justify-center scroll-mt-20">
                <About />
            </section>

        </div>
    );
}