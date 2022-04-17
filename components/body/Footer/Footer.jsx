import { useState, useEffect } from "react";
import styles from "../../../styles/Footer.module.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [actualYear, setActualYear] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    setActualYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className={styles.footer}
      dangerouslySetInnerHTML={{
        __html: `${t("footer.copy")} ${actualYear}. ${t("footer.name")}`,
      }}
    />
  );
};

export default Footer;
