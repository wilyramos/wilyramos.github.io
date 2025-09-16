import { Outlet } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import SocialMedia from '../components/SocialMedia';

export default function Layout() {
    const [isDark, setIsDark] = useState<boolean>(
        document.documentElement.classList.contains("dark")
    );

    // Escuchar cambios de clase en <html> para detectar cuando cambia el theme
    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log(container);
    }, []);

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "transparent", // lo controlamos con Tailwind
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: { enable: true, mode: "push" },
                            onHover: { enable: true, mode: "repulse" },
                            resize: true,
                        },
                        modes: {
                            push: { quantity: 2 },
                            repulse: { distance: 100, duration: 0.8 },
                        },
                    },
                    particles: {
                        color: {
                            value: isDark ? "#ffffff" : "#000000", // 👈 cambia según theme
                        },
                        links: {
                            color: isDark ? "#ffffff" : "#000000", // 👈 cambia según theme
                            distance: 100,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: { default: "bounce" },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: { enable: true, area: 800 },
                            value: 30,
                        },
                        opacity: { value: 0.2 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 4 } },
                    },
                    detectRetina: true,
                }}
            />

            <div
                className="
          bg-gradient-to-l min-h-screen font-nunito transition-colors duration-500
          from-gray-100 to-gray-200 text-gray-900
          dark:from-black dark:to-slate-900 dark:text-white
        "
            >
                {/* <Navbar /> */}
                <Outlet />
                <SocialMedia />
            </div>
        </div>
    );
}
