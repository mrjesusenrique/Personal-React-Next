import { createContext } from "react";
import { useTranslation } from "react-i18next";
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const handleLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  return (
    <LanguageContext.Provider value={{ handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
