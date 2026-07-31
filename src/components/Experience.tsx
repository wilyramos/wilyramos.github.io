"use client";

import { useTranslation } from "react-i18next";

interface Role {
  title: string;
  duration: string;
  skills: string;
}

interface Project {
  name: string;
  description: string[];
}

interface ExperienceItem {
  company: string;
  location: string;
  roles: Role[];
  projects: Project[];
}

export default function Experience() {
  const { t } = useTranslation();

  const experiences = (t("experience.items", { returnObjects: true }) || []) as ExperienceItem[];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-light text-center text-gray-900 dark:text-gray-100 mb-12">
        {t("experience.title")}
      </h2>

      <div className="space-y-8">
        {experiences.map((exp: ExperienceItem, index: number) => (
          <div
            key={index}
            className="bg-white/70 dark:bg-black/30 backdrop-blur rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100 dark:border-gray-800"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {exp.company}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.location}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {exp.roles.map((role: Role, rIndex: number) => (
                <div
                  key={rIndex}
                  className="relative border-l-2 border-indigo-500/30 pl-4 py-1"
                >
                  <div className="absolute w-2 h-2 bg-indigo-500 rounded-full -left-[5px] top-3"></div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {role.title}
                  </h4>
                  <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400 block mb-2">
                    {role.duration}
                  </span>
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    {t("experience.techLabel")} {role.skills}
                  </p>
                </div>
              ))}

              <div className="pt-4 space-y-4">
                {exp.projects.map((proj: Project, pIndex: number) => (
                  <div
                    key={pIndex}
                    className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl"
                  >
                    <h5 className="font-semibold text-sm text-indigo-600 dark:text-indigo-400 mb-2">
                      {proj.name}
                    </h5>
                    <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {proj.description.map((item: string, i: number) => (
                        <li key={i} className="leading-relaxed">
                          {item}
                        </li>
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