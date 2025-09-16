import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from "react-icons/fa";

export default function SocialMedia() {
    const socialLinks = [
        {
            href: "https://github.com/wilyramos",
            icon: <FaGithub />,
            label: "GitHub",
        },
        {
            href: "https://www.linkedin.com/in/wily-ramos-cahuana-7a175b263/",
            icon: <FaLinkedin />,
            label: "LinkedIn",
        },
        {
            href: "https://wa.me/+51919655855",
            icon: <FaWhatsapp />,
            label: "WhatsApp",
        },
        {
            href: "mailto:wily.ramos1@unmsm.edu.pe",
            icon: <FaMailBulk />,
            label: "Correo",
        },
    ];

    return (
        <div className="fixed bottom-6 left-6 flex flex-col space-y-5 z-50">
            {socialLinks.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="
                        text-gray-800 dark:text-gray-200 
                        hover:text-indigo-600 dark:hover:text-indigo-400 
                        transition-colors duration-300 text-2xl
                    "
                >
                    {link.icon}
                </a>
            ))}

            <div className="h-20 border-l-2 border-gray-800 dark:border-gray-200" />
        </div>
    );
}
