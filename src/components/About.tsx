// About.jsx
"use client";

export default function About() {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-3xl font-light text-gray-900 dark:text-gray-100 mb-12">
                About Me
            </h2>

            <div
                className="rounded-3xl p-8 md:p-12 
                           bg-gray-100 text-gray-800 
                           dark:bg-gray-900 dark:text-gray-300 
                           space-y-6 leading-relaxed text-start 
                           shadow-sm dark:shadow-none"
            >
                <p>
                    Hi! I’m{" "}
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                        Wily Ramos
                    </span>, a <strong>Systems Engineering graduate</strong> from{" "}
                    <strong>Universidad Nacional Mayor de San Marcos</strong>.
                </p>
                <p>
                    I have solid experience in <strong>backend development and databases</strong>, specifically within the financial and insurance sectors working for companies like <strong>Mapfre (Indra Group)</strong>. I specialize in building robust solutions using{" "}
                    <span className="text-indigo-500 dark:text-indigo-300">Java, Spring Boot, Oracle PL/SQL</span>, and modern frontends.
                </p>
                <p>
                    My current professional objective is to transition into a <strong>Data Engineer / Data Developer</strong> role in the cloud. I am actively expanding my expertise in <strong>Python, data preprocessing, orchestration, and AWS cloud services</strong> to design end-to-end data pipelines.
                </p>
                <p>
                    I am highly self-taught, adaptable, and always{" "}
                    <span className="font-semibold text-green-600 dark:text-green-400">
                        open to new challenges
                    </span>{" "}
                    that allow me to leverage my full stack background into the data engineering ecosystem.
                </p>
            </div>
        </section>
    );
}