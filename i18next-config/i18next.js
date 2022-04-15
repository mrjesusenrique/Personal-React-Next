import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import languages from "../assets/locales";
const availableLanguages = ["es", "en"];
let fallbacking;

typeof window !== "undefined"
  ? (fallbacking = localStorage.getItem("i18nextLng"))
  : (fallbacking = "es");

i18next
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: fallbacking,
    fallbacking,
    debug: true,
    resources: { ...languages },
    whiteList: availableLanguages,
    interpolation: {
      escapeValue: false,
    },
  });
