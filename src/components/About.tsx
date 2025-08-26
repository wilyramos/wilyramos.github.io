"use client";

export default function About() {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-3xl font-light text-gray-100 mb-12">
                {/* About Me */}
            </h2>

            <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-gray-300 space-y-6 leading-relaxed text-start">
                <p>
                    Hi! I’m{" "}
                    <span className="text-indigo-400 font-semibold">Wily Ramos</span>, a
                    <strong> Systems Engineering graduate</strong> from{" "}
                    <strong>Universidad Nacional Mayor de San Marcos</strong>.
                </p>
                <p>
                    I specialize in{" "}
                    <strong>Full Stack Development</strong>, creating{" "}
                    <span className="text-indigo-300">scalable</span> and{" "}
                    <span className="text-indigo-300">user-friendly</span> applications.
                </p>
                <p>
                    I have worked on projects involving{" "}
                    <strong>web platforms, APIs, and modern frontends</strong>, always
                    focusing on clean code and best practices.
                </p>
                <p>
                    I’m currently{" "}
                    <span className="font-semibold text-green-400">
                        open to new opportunities
                    </span>{" "}
                    — from freelance work to long-term projects.
                </p>
            </div>
        </section>
    );
}