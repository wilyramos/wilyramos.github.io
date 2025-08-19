import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { Link } from "react-scroll";

export default function NavMenu() {

    const links = [
      { label: "INICIO", href: "home" },
      { label: "PROYECTOS", href: "projects" },
      { label: "SOBRE MI", href: "about" },
    ];

    return (
        <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 p-1 rounded-lg hover:shadow-xl">
                <Bars3Icon className='w-8 h-8' />
            </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                {/* ✅ Aquí usamos render prop para obtener `close` */}
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen lg:max-w-min -translate-x-1/2 lg:-translate-x-48">
                    {({ close }) => (
                        <div className="w-full lg:w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                            {links.map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className="block p-2 hover:text-purple-950 cursor-pointer"
                                    onClick={() => close()}  // ✅ Cerramos al hacer clic
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <button
                                className='block p-2 hover:text-purple-950 w-full text-left'
                                type='button'
                                onClick={() => {
                                    close();  // ✅ Cerramos el menú antes de abrir LinkedIn
                                    window.open('https://www.linkedin.com/in/wily-ramos/', '_blank');
                                }}
                            >
                                LinkedIn
                            </button>
                        </div>
                    )}
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
