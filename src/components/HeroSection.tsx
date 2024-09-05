import { useEffect, useState } from 'react';
import Projects from './Project';

export default function HeroSection() {
  const roles = ["Wily", "Developer", "Ingeniero", "Programador"];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 150;
  const deletingSpeed = 100;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = `Hola, soy ${roles[i]}`;

      setText(prevText => 
        isDeleting ? fullText.substring(0, prevText.length - 1) : fullText.substring(0, prevText.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingInterval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text, isDeleting]);

  return (
    <section className=" flex flex-col items-center lg:flex-row justify-center text-gray-900 p-4">
      {/* Sección de presentación */}
      <div className="text-center mb-6">
        <h1 className="text-3xl lg:text-4xl font-semibold">{text}<span className="animate-blink">|</span></h1>
        <p className="text-base lg:text-lg mt-2">Desarrollador apasionado por crear soluciones tecnológicas.</p>
      </div>

      {/* Sección de proyectos */}
      <div className="w-full bg-gray-100 p-4 lg:p-8 mt-8 flex flex-col items-center">
        <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Mis Proyectos</h2>
        <Projects />
      </div>
    </section>
  );
}
