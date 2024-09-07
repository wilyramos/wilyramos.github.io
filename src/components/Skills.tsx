
export default function Skills() {
  return (
    <>
        <section id="skills" className="py-10 bg-gradient-to-r  to-gray-950 from-blue-950 rounded-xl ">
            <div className="container mx-auto px-6">
                <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-2 place-items-center">
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h2 className="text-2xl font-bold text-white">Frontend</h2>
                        <ul className="text-white">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Next.js</li>
                        </ul>
                        <h2 className="text-2xl font-bold text-white">Backend</h2>
                        <ul className="text-white">
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                        </ul>
                        <h2 className="text-2xl font-bold text-white">Frameworks</h2>

                        <ul className="text-white">
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Express</li>
                        </ul>
                        
                        <h2 className="text-2xl font-bold text-white">Databases</h2>
                        <ul className="text-white">
                            <li>MongoDB</li>
                            <li>MySQL</li>
                        </ul>
                        <h2 className="text-2xl font-bold text-white">Deployment</h2>
                        <ul className="text-white">
                            <li>Git</li>
                            <li>AWS</li>
                            <li>Docker</li>
                            <li>Postman</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>   
    </>
  )
}
