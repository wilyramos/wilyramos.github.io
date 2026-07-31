// Experience.jsx
"use client";

const experiences = [
    {
        company: "Indra Group (Minsait)",
        roles: [
            {
                title: "Data Developer AWS",
                duration: "jun. 2026 - actualidad",
                skills: "AWS (S3, SageMaker, EC2, ECS, ECR), Python, Containers, Data Pipelines"
            },
            {
                title: "Programmer Analyst",
                duration: "abr. 2026 - may. 2026",
                skills: "PL/SQL, Java, Angular, Spring Boot"
            },
            {
                title: "Software Developer",
                duration: "dic. 2025 - abr. 2026",
                skills: "Java, Spring Boot, Bitbucket, Jira"
            }
        ],
        location: "Lima, Perú",
        projects: [
            {
                name: "Proyecto BBVA (jun. 2026 - actualidad)",
                description: [
                    "Rol como Data Developer AWS enfocado en el desarrollo, orquestación y automatización de flujos e infraestructura de datos en la nube.",
                    "Implementación de arquitecturas con AWS (S3, SageMaker, EC2, ECS, ECR), contenedores y Python para el procesamiento de datos analíticos."
                ]
            },
            {
                name: "Proyecto MAPFRE - Mapfre Reef Centroamérica (dic. 2025 - may. 2026)",
                description: [
                    "Desarrollo, mantenimiento y configuración de productos de seguros core con Oracle PL/SQL, Java (Spring Boot) y Angular.",
                    "Análisis, modelamiento de datos y optimización de consultas complejas en PL/SQL."
                ]
            }
        ]
    },
    {
        company: "Freelancer",
        roles: [
            {
                title: "Software Developer",
                duration: "ene. 2025 - dic. 2025",
                skills: "AWS, Node.js, Next.js, Python, Docker"
            }
        ],
        location: "Remoto",
        projects: [
            {
                name: "Proyectos Varios (Full Stack & Cloud)",
                description: [
                    "Desarrollo e implementación de soluciones full stack, diseñando arquitecturas e integración eficiente de APIs.",
                    "Análisis y modelamiento de datos para la persistencia en bases de datos relacionales (PostgreSQL, MySQL) y NoSQL (MongoDB).",
                    "Despliegue automatizado de aplicaciones e infraestructura en la nube utilizando Docker y servicios cloud de AWS (EC2, S3, ECR, ECS)."
                ]
            }
        ]
    }
];

export default function Experience() {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-light text-center text-gray-900 dark:text-gray-100 mb-12">
                Experiencia Laboral
            </h2>

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-white/70 dark:bg-black/30 backdrop-blur rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100 dark:border-gray-800"
                    >
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">

                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{exp.company}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {exp.roles.map((role, rIndex) => (
                                <div key={rIndex} className="relative border-l-2 border-indigo-500/30 pl-4 py-1">
                                    <div className="absolute w-2 h-2 bg-indigo-500 rounded-full -left-[5px] top-3"></div>
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        {role.title}
                                    </h4>
                                    <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400 block mb-2">
                                        {role.duration}
                                    </span>
                                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                        Tecnologías: {role.skills}
                                    </p>
                                </div>
                            ))}

                            <div className="pt-4 space-y-4">
                                {exp.projects.map((proj, pIndex) => (
                                    <div key={pIndex} className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl">
                                        <h5 className="font-semibold text-sm text-indigo-600 dark:text-indigo-400 mb-2">
                                            {proj.name}
                                        </h5>
                                        <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                            {proj.description.map((item, i) => (
                                                <li key={i} className="leading-relaxed">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}