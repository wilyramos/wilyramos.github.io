"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaDatabase, FaServer, FaCode, FaCloud } from "react-icons/fa";

export default function Presentation() {
  const { t } = useTranslation();
  const name = "Wily Ramos";

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Efecto de mecanografiado (typing effect) para los roles
  useEffect(() => {
    // Definido dentro del Hook para evitar re-renderizados innecesarios y limpiar dependencias
    const roles = [
      "Data Developer AWS",
      "Systems Engineer",
      "Cloud & Backend Specialist",
    ];

    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && text !== currentRole) {
        setText(currentRole.slice(0, text.length + 1));
      } else if (isDeleting && text !== "") {
        setText(currentRole.slice(0, text.length - 1));
      } else if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]); // 👈 'roles' ya no es necesario aquí

  return (
    <section id="home" className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl text-center text-gray-800 dark:text-gray-200"
      >
        {/* Saludo */}
        <p className="text-sm sm:text-base font-mono mb-3 text-indigo-600 dark:text-indigo-400">
          {t("presentation.hi")}
        </p>

        {/* Nombre principal */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
          {name}
        </h1>

        {/* Tarjeta de Código (IDE style) */}
        <div className="rounded-xl p-4 md:p-6 text-xs sm:text-sm font-mono mb-8 text-left bg-[#1e1e1e] text-[#d4d4d4] shadow-2xl border border-gray-800 max-w-2xl mx-auto overflow-x-auto">
          <div className="flex items-center space-x-2 mb-4 border-b border-gray-800 pb-3">
            <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
            <span className="ml-2 text-xs text-gray-500">developer.ts</span>
          </div>
          <div>
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#9cdcfe]">developer</span> = {"{"}
            {"\n"}  <span className="text-[#9cdcfe]">role</span>:{" "}
            <span className="text-[#ce9178]">"{text}"</span>
            <span className="animate-pulse text-indigo-400">|</span>,
            {"\n"}  <span className="text-[#9cdcfe]">location</span>:{" "}
            <span className="text-[#ce9178]">"Lima, Peru"</span>,
            {"\n"}  <span className="text-[#9cdcfe]">cloud</span>:{" "}
            <span className="text-[#ce9178]">"AWS"</span>
            {"\n"}{"}"};
          </div>
        </div>

        {/* Resumen / Descripción */}
        <p className="leading-relaxed text-sm md:text-base p-4 md:p-6 rounded-lg text-left max-w-2xl mx-auto text-gray-600 dark:text-gray-300 bg-gray-100/80 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 shadow-inner">
          {t("presentation.roleText")}
        </p>

        {/* Iconos de Tecnologías Clave */}
        <div className="flex justify-center items-center space-x-6 mt-8 text-2xl text-gray-500 dark:text-gray-400">
          <FaCloud className="hover:text-amber-500 transition-colors" title="AWS" />
          <FaDatabase className="hover:text-blue-500 transition-colors" title="Databases / PL-SQL" />
          <FaServer className="hover:text-green-500 transition-colors" title="Backend / Pipelines" />
          <FaCode className="hover:text-indigo-500 transition-colors" title="Development" />
        </div>
      </motion.div>
    </section>
  );
}