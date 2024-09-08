import SocialMedia from "./SocialMedia";


export default function Navbar() {
    return (
      <nav className="bg-gray-950 shadow-md">
        <div className="container px-6 p-2 flex justify-between">
          <div className="text-2xl font-semibold text-blue-800">Wily Ramos</div>
          <div className="">
            <SocialMedia />           
          </div>
        </div>
      </nav>
    );
  }
  