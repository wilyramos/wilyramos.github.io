"use client";

import { useTranslation, Trans } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-xl sm:text-3xl font-light text-gray-900 dark:text-gray-100 mb-12">
        {t("about.title")}
      </h2>

      <div
        className="rounded-3xl p-8 md:p-12 
                   bg-gray-100 text-gray-800 
                   dark:bg-gray-900 dark:text-gray-300 
                   space-y-6 leading-relaxed text-start 
                   shadow-sm dark:shadow-none"
      >
        {/* Párrafo 1 */}
        <p>
          <Trans
            i18nKey="about.p1"
            components={{
              1: <span className="text-indigo-600 dark:text-indigo-400 font-semibold" />,
              3: <strong />,
              5: <strong />,
            }}
          />
        </p>

        {/* Párrafo 2 */}
        <p>
          <Trans
            i18nKey="about.p2"
            components={{
              1: <strong />,
              3: <strong />,
              5: <span className="text-indigo-500 dark:text-indigo-300" />,
            }}
          />
        </p>

        {/* Párrafo 3 */}
        <p>
          <Trans
            i18nKey="about.p3"
            components={{
              1: <strong />,
              3: <strong />,
            }}
          />
        </p>

        {/* Párrafo 4 */}
        <p>
          <Trans
            i18nKey="about.p4"
            components={{
              1: <span className="font-semibold text-green-600 dark:text-green-400" />,
            }}
          />
        </p>
      </div>
    </section>
  );
}