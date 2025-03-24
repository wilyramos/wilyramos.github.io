import { useEffect, useState } from 'react';
import AvatarWithEffect from '../utils/AvatarWithEffect';
import Skills from './Skills';

export default function principal() {
    const roles = ["Wily Ramos", "Full Stack", "React Expert", "Ingeniero",];
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[loopNum % roles.length];
            const fullText = `${currentRole}`;

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
        <section className="grid grid-cols-1 md:grid-cols-3 md:px-20 md:py-10 justify-between items-center mx-6 md:m-20 ">
            {/* Simulación de un editor de código */}
            <div className="mx-2  mt-4 text-left border-l-2 border-gray-600 p-2">
                <h1 className="text-xl sm:text-3xl md:text-2xl font-mono mb-4">
                    <span className="text-red-500">import</span> {'{'} <span className="text-gray-200">WilyRamos</span> {'}'} <span className="text-red-500">from</span> <span className="text-yellow-400">'UNMSM';</span>
                </h1>

                <pre className="text-xs md:text-xl bg-slate-800 p-4 rounded-lg shadow-lg "> 
                    <code className="text-gray-200">
                        <span className="text-sky-500 ">const</span> profession = <span className="text-yellow-400">"{text}"</span>;
                    </code>
                </pre>

                <p className="text-sm sm:text-xl mt-4 font-mono text-gray-400">
                    <span className="text-gray-400 block">// Soy ingeniero de sistemas de la UNMSM y Full Stack Developer.

                    </span>
                    <span className="text-gray-400">// I am passionate about building apps that make a difference.</span>

                </p>
                
            </div>
            {/* <Skills /> */}

            {/* Avatar Simulado como un Comentario */}
            <AvatarWithEffect />
            {/* <Skills /> */}
            <Skills />
        </section>
    );
}
