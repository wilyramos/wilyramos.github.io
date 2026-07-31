import { useTranslation } from "react-i18next";

export default function LanguageToggleButton() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 text-xs font-semibold rounded-full border border-gray-300 dark:border-gray-700 hover:bg-indigo-600 hover:text-white transition-all uppercase"
    >
      {i18n.language === "es" ? "EN" : "ES"}
    </button>
  );
}