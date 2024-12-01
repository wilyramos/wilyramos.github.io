import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
      <nav className="bg-gray-950 shadow-md rounded-2xl">
        <div className="container px-6 p-2 flex justify-between">

          
          <div className="flex items-center">
            <Link to="/" className="text-gray-200 hover:text-blue-500 transition duration-300 text-2xl">
              {`<WilyRamos />`}
            </Link>
          </div>
          
          <div className="">
            <SocialMedia />           
          </div>
        </div>
      </nav>
    );
  }
  