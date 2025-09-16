import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { Link } from "react-scroll";
import ThemeToggleButton from "../utils/ThemeToggleButton";

export default function NavMenu() {
    const links = [
        { label: "PROYECTOS", href: "projects" },
        { label: "SOBRE MI", href: "about" },
    ];

    return (
        <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition">
                <Bars3Icon className='w-8 h-8 text-black dark:text-white' />
            </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel className="absolute right-0 mt-3 w-56 rounded-xl bg-white dark:bg-black p-4 shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10">
                    {({ close }) => (
                        <div className="space-y-3">
                            {links.map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    className="block p-2 rounded-md text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition"
                                    onClick={() => close()}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <button
                                className="block p-2 w-full text-left rounded-md text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                                type='button'
                                onClick={() => {
                                    close();
                                    window.open('https://www.linkedin.com/in/wily-ramos/', '_blank');
                                }}
                            >
                                LinkedIn
                            </button>

                            {/* Botón de theme en menú mobile */}
                            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                                <ThemeToggleButton />
                            </div>
                        </div>
                    )}
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
