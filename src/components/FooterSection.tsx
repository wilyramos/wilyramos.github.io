import SocialMedia from "./SocialMedia";

export default function FooterSection() {


    return (
        <footer className="text-gray-500 py-2 ">
            <div className=" text-center">


                <p className="text-xs">
                    © {new Date().getFullYear()}
                    <span className="text-gray-700">
                        Poweread by{' '}
                    </span>
                    <a
                        href="https://wilyramos.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900 font-bold"
                    > wily ramos
                    </a>
                </p>
                <SocialMedia />

            </div>
        </footer>
    );
};