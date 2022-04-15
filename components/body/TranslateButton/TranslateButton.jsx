import { useRef, useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import { useTranslation } from "react-i18next";
import styles from "../../../styles/TranslateButton.module.css";

const TranslateButton = () => {
  const { t } = useTranslation();
  const languageTag = useRef();
  const currentLanguage = localStorage.getItem("i18nextLng");
  const { handleLanguage } = useContext(LanguageContext);

  const changeTitleEnterLanguage = () => {
    currentLanguage == "es"
      ? (languageTag.current.classList.remove(`${styles.incompleteEnglish}`),
        languageTag.current.classList.add(`${styles.completeEnglish}`))
      : (languageTag.current.classList.remove(`${styles.incompleteSpanish}`),
        languageTag.current.classList.add(`${styles.completeSpanish}`));
  };

  const changeTitleOutLanguage = () => {
    currentLanguage == "es"
      ? (languageTag.current.classList.remove(`${styles.completeEnglish}`),
        languageTag.current.classList.add(`${styles.incompleteEnglish}`))
      : (languageTag.current.classList.remove(`${styles.completeSpanish}`),
        languageTag.current.classList.add(`${styles.incompleteSpanish}`));
  };

  return (
    <button
      className={styles.button}
      onMouseEnter={changeTitleEnterLanguage}
      onMouseLeave={changeTitleOutLanguage}
      onClick={() => handleLanguage(currentLanguage == "es" ? "en" : "es")}
    >
      <div className={styles.contentItems}>
        <span className={styles.text}>{t(`header.languageButton.title`)}</span>
        <span className={styles.icon}>
          <span
            className={`${
              currentLanguage == "es"
                ? styles.incompleteEnglish
                : styles.incompleteSpanish
            }`}
            ref={languageTag}
          ></span>
        </span>
      </div>
    </button>
  );
};

export default TranslateButton;
