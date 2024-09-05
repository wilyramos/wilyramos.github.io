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
      const fullText = `soy ${roles[i]}`;

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
    <section className="flex w-full p-10 items-center">
      <div className="w-1/3">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">Hola, {text}</h1>
        <p className="text-gray-600 text-lg">Soy ingeniero de sistemas de la UNMSM, full stack Developer</p>
      </div>

      <div className="flex-shrink-0 w-2/3 text-center">
        <Projects />
      </div>
    </section>
  );
}
