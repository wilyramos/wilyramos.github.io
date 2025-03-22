const About = () => {
    return (
        <section className="bg-gray-900 text-white font-mono p-6 md:mt-20 rounded-lg shadow-lg max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center ">
            {/* Code Block */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md relative">
                {/* Title Bar */}
                <div className="flex items-center bg-gray-700 px-3 py-2 rounded-t-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-3 text-sm text-gray-300">about.tsx</span>
                </div>
                <pre className="p-4 text-sm overflow-x-auto">
                    <code>
                        <span className="text-blue-400">const</span> aboutMe = &#123;
                        <br />&nbsp;&nbsp;<span className="text-yellow-400">name</span>: <span className="text-green-400">"System Engineer & Programmer"</span>,
                        <br />&nbsp;&nbsp;<span className="text-yellow-400">skills</span>: [<span className="text-green-400">"JavaScript", "TypeScript", "Node.js", "React", "Express", "MongoDB", "TailwindCSS"</span>],
                        <br />&nbsp;&nbsp;<span className="text-yellow-400">experience</span>: <span className="text-green-400">"5+ years in software development"</span>,
                        <br />&nbsp;&nbsp;<span className="text-yellow-400">location</span>: <span className="text-green-400">"Peru"</span>,
                        <br />&nbsp;&nbsp;<span className="text-yellow-400">passion</span>: <span className="text-green-400">"Building efficient and scalable applications"</span>

                        <br />&#125;;



                    </code>
                </pre>
            </div>
            {/* CV */}
            <div>
                <h2 className="text-2xl font-bold">About Me</h2>
                <p className="text-gray-400 mt-4">
                    Hi, I'm Wily Ramos, a System Engineer and Programmer. I have been working in the software development for 1 year. I am passionate about building efficient and scalable applications using JavaScript, TypeScript, Node.js, React, Express, MongoDB, and TailwindCSS.
                </p>
                
                
            </div>

            
        </section>
    );
};

export default About;
