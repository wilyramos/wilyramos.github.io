import SocialMedia from "./SocialMedia";

export default function FooterSection() {

  
  return (
    <footer className="bg-gray-950  text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-xs">
          © {new Date().getFullYear()} Wily Ramos. Todos los derechos reservados.
        </p>
        <div className="mt-2">
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};