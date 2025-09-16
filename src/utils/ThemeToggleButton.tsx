"use client";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useEffect, useState } from "react";

export default function ThemeToggleButton() {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked);
        if (checked) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    // Inicializar según localStorage o prefers-color-scheme
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (
            saved === "dark" ||
            (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    return (
        <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={28} // tamaño más discreto
            moonColor="white"
            sunColor="black"
            aria-label="Toggle dark mode"
            className="transition-transform hover:scale-110"
        />
    );
}
