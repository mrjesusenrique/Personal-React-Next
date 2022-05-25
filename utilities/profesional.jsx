import styles from "../styles/Sobremi.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Profesional = () => {
  const { t } = useTranslation();

  return (
    <p className={styles.parrafoLaboral}>
      {t("profesional.paragraph1")}{" "}
      <Link href="https://www.itrio.net/">
        <a className={styles.link} target="_blanck">
          {t("profesional.company1")}
        </a>
      </Link>{" "}
      {t("profesional.paragraph2")}{" "}
      <Link href="https://www.veritran.com/">
        <a className={styles.link} target="_blanck">
          {t("profesional.company2")}
        </a>
      </Link>{" "}
      {t("profesional.paragraph3")}{" "}
      <Link href="https://www.close-upinternational.com/">
        <a className={styles.link} target="_blanck">
          {t("profesional.company3")}
        </a>
      </Link>
      {t("profesional.paragraph4")}
    </p>
  );
};

export default Profesional;
