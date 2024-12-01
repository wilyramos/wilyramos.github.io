import { useEffect, useState } from 'react';
import Projects from './Project';
import Skills from './Skills';

export default function HeroSection() {
    const roles = ["Wily", "Developer", "Ingeniero", "Programador"];
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
          const currentRole = roles[loopNum % roles.length];
          const fullText = `soy ${currentRole}`;

          if (isDeleting) {
            setText(prevText => fullText.substring(0, prevText.length - 1));
            if (text === '') {
              setIsDeleting(false);
              setLoopNum(prev => prev + 1);
            }
          } else {
            setText(prevText => fullText.substring(0, prevText.length + 1));
            if (text === fullText) setTimeout(() => setIsDeleting(true), 1000);
          }
        };

      const typingInterval = setInterval(handleTyping, isDeleting ? 100 : 150);
      return () => clearInterval(typingInterval);
    }, [text, isDeleting]);

    return (
        <section className="flex flex-col items-center justify-center">
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Hola, {text}</h1>
            <p className="text-lg sm:text-xl max-w-xl mx-auto">Soy ingeniero de sistemas de la UNMSM y Full Stack Developer</p>
          </div>
            
          {/* Projects and Skills Section */} 
          <div className="flex flex-col md:flex-row md:justify-between mb-8">
            
            {/* Projects Section */}
            <div className="w-full">
              <Projects />
            </div>

            {/* Skills Section */}
            <div className="w-full">
              <div className="bg-gray-950 p-6 w-full max-w-lg mx-auto rounded-3xl">
                <Skills />
              </div>
            </div>

          </div>

        </section>
    );
}
