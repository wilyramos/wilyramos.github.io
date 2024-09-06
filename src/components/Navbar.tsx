import SocialMedia from "./SocialMedia";


export default function Navbar() {
    return (
      <nav className="bg-gray-950 shadow-md">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <div className="text-2xl font-semibold text-blue-800">Wily Ramos</div>
          <div className="space-x-4">
            <SocialMedia />           
          </div>
        </div>
      </nav>
    );
  }
  