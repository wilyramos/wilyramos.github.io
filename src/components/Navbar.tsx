import NavMenu from "./NavMenu";
import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="">
            <div className="px-6 p-3 flex justify-between">
                <div className="flex items-center">
                    <Link
                        to="/"
                        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 hover:from-gray-400 hover:to-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        {`<wilyramos />`}
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-6 text-sm">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `font-medium border-b-2 transition-all duration-300 ease-in-out hover:border-blue-500 ${isActive ? 'text-gray-200 border-blue-500' : ''
                            }`
                        }
                    >
                        INICIO
                    </NavLink>

                    <NavLink
                        to="/proyectos"
                        className={({ isActive }) =>
                            `font-medium border-b-2 transition-all duration-300 ease-in-out hover:border-blue-500 ${isActive ? 'text-gray-200 border-blue-500' : ''
                            }`
                        }
                    >
                        PROYECTOS
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `font-medium border-b-2 transition-all duration-300 ease-in-out hover:border-blue-500 ${isActive ? 'text-gray-200 border-blue-500' : ''
                            }`
                        }
                    >
                        SOBRE MI
                    </NavLink>
                </div>
                <div className="block md:hidden">
                    <NavMenu />
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <SocialMedia />
                </div>
            </div>
        </nav>
    );
}